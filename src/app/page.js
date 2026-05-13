'use client';

import { useState, useMemo } from 'react';
import empresasData from '../data/empresas.json';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import CompanyCard from '../components/CompanyCard';
import Footer from '../components/Footer';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  
  // ESTADO PARA PAGINAÇÃO (Começa mostrando 6)
  const [visibleCount, setVisibleCount] = useState(6);

  const categorias = ["Todas", ...new Set(empresasData.map(e => e.categoria))];

  // Filtro original
  const filteredEmpresas = useMemo(() => {
    return empresasData.filter(emp => {
      const matchesSearch = emp.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            emp.resumo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoriaAtiva === "Todas" || emp.categoria === categoriaAtiva;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoriaAtiva]);

  // EMPRESAS QUE REALMENTE APARECEM (limitadas pelo visibleCount)
  const empresasExibidas = filteredEmpresas.slice(0, visibleCount);

  // Função para carregar mais
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <Hero />
      
      <main id="expositores" className="main-container">
        <FilterBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          categoriaAtiva={categoriaAtiva} 
          setCategoriaAtiva={setCategoriaAtiva}
          categorias={categorias}
        />

        <div className="grid">
          {empresasExibidas.map(empresa => (
            <CompanyCard key={empresa.id} empresa={empresa} />
          ))}
        </div>

        {/* BOTÃO VER MAIS */}
        {visibleCount < filteredEmpresas.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Ver mais empresas
            </button>
          </div>
        )}
        
        {filteredEmpresas.length === 0 && (
          <p className="no-results">Nenhum expositor encontrado para esta busca.</p>
        )}
      </main>

      <Footer />

      <style jsx global>{`
        body { margin: 0 !important; padding: 0 !important; background-color: #F2F2F2; }
      `}</style>

      <style jsx>{`
        .page-wrapper { width: 100%; }
        .main-container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        
        /* ESTILO DO BOTÃO VER MAIS */
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

        .no-results { text-align: center; padding: 3rem; color: #666; }
      `}</style>
    </div>
  );
}