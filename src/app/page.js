'use client';

import { useState, useMemo } from 'react';
import { Gift } from 'lucide-react';
import empresasData from '../data/empresas.json';

import Header from '../components/Header';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import CompanyCard from '../components/CompanyCard';
import Footer from '../components/Footer';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [numeroFinal, setNumeroFinal] = useState('');
  
  const [userData, setUserData] = useState({ nome: '', telefone: '' });

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setVisibleCount(6);
  };

  const handleCategoryChange = (value) => {
    setCategoriaAtiva(value);
    setVisibleCount(6);
  };

  const categorias = useMemo(() => 
    ["Todas", ...new Set(empresasData.map(e => e.categoria))],
    []
  );

  const filteredEmpresas = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return empresasData.filter(emp => {
      const matchesSearch = emp.nome.toLowerCase().includes(term) ||
                            emp.resumo.toLowerCase().includes(term);
      const matchesCategory = categoriaAtiva === "Todas" || emp.categoria === categoriaAtiva;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoriaAtiva]);

  const empresasExibidas = filteredEmpresas.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const participarSorteio = async (e) => {
    e.preventDefault();
    const telefoneLimpo = userData.telefone.replace(/\D/g, '');
    
    if (telefoneLimpo.length < 8) {
      alert("Por favor, insira um telefone válido.");
      return;
    }

    const numeroSorteio = telefoneLimpo.slice(-4);
    const dadosParaEnviar = {
      nome: userData.nome,
      telefone: userData.telefone,
      numero: numeroSorteio
    };

    try {
      const res = await fetch('/api/sorteio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosParaEnviar),
      });

      if (res.ok) {
        setNumeroFinal(numeroSorteio);
        setSucesso(true);
        setUserData({ nome: '', telefone: '' });
      } else {
        alert("Erro ao registrar no banco de dados.");
      }
    } catch (err) {
      alert("Erro de conexão.");
    }
  };

  return (
    <div id="header" className="page-wrapper">
      <Header />
      <Hero />
      
      <main id="expositores" className="main-container">
        <FilterBar 
          searchTerm={searchTerm} 
          setSearchTerm={handleSearchChange}
          categoriaAtiva={categoriaAtiva} 
          setCategoriaAtiva={handleCategoryChange}
          categorias={categorias}
        />

        <p className="results-count">
          {filteredEmpresas.length} {filteredEmpresas.length === 1 ? 'expositor encontrado' : 'expositores encontrados'}
        </p>

        <div className="grid">
          {empresasExibidas.map(empresa => (
            <CompanyCard key={empresa.id} empresa={empresa} />
          ))}
        </div>

        {visibleCount < filteredEmpresas.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Ver mais empresas
            </button>
          </div>
        )}
        
        {filteredEmpresas.length === 0 && (
          <div className="no-results">
            <p>Nenhum expositor encontrado para &quot;<strong>{searchTerm}</strong>&quot;.</p>
            <button onClick={() => {setSearchTerm(""); setCategoriaAtiva("Todas"); setVisibleCount(6);}} className="reset-btn">
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      <div className="gift-tab" onClick={() => setIsModalOpen(true)}>
        <Gift size={24} />
        <span>Participe do sorteio</span>
      </div>

      <Footer />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {sucesso ? (
              <div className="success-container">
                <div className="check-icon">✓</div>
                <h2 style={{ color: '#0089A3', marginBottom: '10px' }}>Inscrição Confirmada!</h2>
                <p style={{ color: '#4b5563' }}>Seu número para o sorteio é:</p>
                <div className="final-number">{numeroFinal}</div>
                <button 
                  onClick={() => { setIsModalOpen(false); setSucesso(false); }} 
                  className="main-draw-btn"
                >
                  FECHAR
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ marginBottom: '5px', color: '#003459' }}>Cadastro para Sorteio</h3>
                <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '15px' }}>
                  Seu número de sorteio serão os 4 últimos dígitos do seu celular.
                </p>
                <form onSubmit={participarSorteio}>
                  <div className="input-group">
                    <label>Seu Nome</label>
                    <input 
                      type="text" 
                      required 
                      value={userData.nome}
                      onChange={(e) => setUserData({...userData, nome: e.target.value})}
                      placeholder="Nome completo"
                    />
                  </div>
                  <div className="input-group">
                    <label>Seu WhatsApp (completo)</label>
                    <input 
                      type="tel" 
                      required 
                      value={userData.telefone || ''}
                      onChange={(e) => setUserData({...userData, telefone: e.target.value})}
                      placeholder="(41) 99999-9999"
                    />
                  </div>
                  <div className="modal-actions">
                    <button type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                    <button type="submit" className="btn-confirm">Participar!</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          background-color: #f9fafb;
        }
      `}</style>

      <style jsx>{`
        .page-wrapper { width: 100%; }
        .main-container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; min-height: 60vh; }
        .results-count { font-size: 0.85rem; color: #6b7280; margin-bottom: 20px; font-weight: 500; }
        .grid { display: grid; grid-template-columns: 1fr; gap: 30px; width: 100%; }
        .load-more-container {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
        .load-more-btn {
          background-color: transparent;
          border: 2px solid #0089A3;
          color: #0089A3;
          padding: 12px 35px;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s;
          text-transform: uppercase;
        }
        .load-more-btn:hover {
          background-color: #0089A3;
          color: white;
        }
        .no-results { text-align: center; padding: 5rem 1rem; color: #4b5563; }
        .reset-btn { margin-top: 15px; background: none; border: none; color: #0089A3; text-decoration: underline; cursor: pointer; }

        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex; align-items: center; justify-content: center;
          z-index: 2000;
        }
        .modal-content {
          background: white; padding: 20px; border-radius: 15px; width: 90%; max-width: 400px;
        }
        .modal-content h3 { margin-top: 0; color: #0089A3; }
        .modal-content p { margin-top: 5px; }
        .input-group { margin-bottom: 15px; display: flex; flex-direction: column; }
        .input-group input { padding: 12px; border: 1px solid #ddd; border-radius: 8px; margin-top: 5px; }
        .modal-actions { display: flex; gap: 10px; margin-top: 20px; }
        .btn-confirm { background: #0089A3; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; flex: 1; }

        .gift-tab {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #e11d48;
          color: white;
          padding: 12px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(225, 29, 72, 0.4);
          font-weight: bold;
          transition: transform 0.2s;
        }
        .gift-tab:hover { transform: scale(1.05); }

        .success-container {
          text-align: center;
          padding: 10px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .check-icon {
          font-size: 60px;
          color: #0089A3; /* Var church-teal */
          margin-bottom: 10px;
          animation: scaleIn 0.3s ease-out;
        }

        .final-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: #003459; /* Var church-blue */
          background: #f3f4f6;
          border-radius: 12px;
          margin: 15px 0 25px 0;
          padding: 15px 30px;
          border: 3px dashed #0089A3;
          letter-spacing: 2px;
        }

        @keyframes scaleIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }

        /* Reaproveitando o estilo do seu botão principal */
        .main-draw-btn {
          background: #0089A3;
          color: white;
          border: none;
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .main-draw-btn:hover {
          background: #006e82;
          transform: translateY(-2px);
        }

        @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>
    </div>
  );
}