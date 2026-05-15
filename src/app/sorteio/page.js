'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SorteioAdmin() {
  const [sorteado, setSorteado] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [textoFeedback, setTextoFeedback] = useState("Aguardando sorteio...");
  const [erro, setErro] = useState(null);

  const realizarSorteio = async () => {
    setCarregando(true);
    setSorteado(null);
    setErro(null);
    setTextoFeedback("Sorteando...");

    try {
      const res = await fetch('/api/sorteio');
      const participantes = await res.json();

      if (!participantes || participantes.length === 0) {
        setErro("Todos os números já foram sorteados ou não há cadastros!");
        setTextoFeedback("Nenhum participante disponível");
        setCarregando(false);
        return;
      }

      // Simulação de "embaralhamento" visual
      setTimeout(async () => {
        const escolhido = participantes[Math.floor(Math.random() * participantes.length)];
        
        const response = await fetch('/api/sorteio', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: escolhido._id }),
        });

        if (response.ok) {
          setSorteado(escolhido);
        } else {
          setErro("Erro ao atualizar o status do ganhador no banco.");
        }
        setCarregando(false);
      }, 2000);

    } catch (err) {
      console.error(err);
      setErro("Erro de conexão com o servidor.");
      setTextoFeedback("Erro ao buscar dados");
      setCarregando(false);
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="main-content">
        <div className="title-section">
          <div className="divider"></div>
          <h1>Sorteio de Brindes</h1>
          <p>Feira de Autossuficiência - Estaca Portão</p>
        </div>

        <div className="draw-container">
          {/* Alerta de Erro Customizado */}
          {erro && (
            <div className="error-banner">
              <span className="error-icon">⚠</span>
              {erro}
              <button onClick={() => setErro(null)} className="close-error">×</button>
            </div>
          )}

          <div className="display-box">
            {sorteado ? (
              <div className="winner-animate">
                <span className="label">Ganhador(a)</span>
                <h2 className="name">{sorteado.nome}</h2>
                <div className="number-badge">{sorteado.numero}</div>
              </div>
            ) : (
              <div className="placeholder">
                <p>{textoFeedback}</p>
                {carregando && <div className="spinner"></div>}
              </div>
            )}
          </div>

          <button 
            className="main-draw-btn" 
            onClick={realizarSorteio}
            disabled={carregando}
          >
            {carregando ? 'SORTEANDO...' : 'REALIZAR SORTEIO'}
          </button>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        body { background-color: #f9fafb; margin: 0; }
      `}</style>

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding: 60px 20px 60px;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }

        .title-section { margin-bottom: 40px; }
        
        .divider {
          width: 60px;
          height: 4px;
          background: #0089A3;
          margin: 0 auto 1.5rem;
        }

        h1 { font-size: 2.5rem; font-weight: 800; color: #111827; margin: 0; }
        p { color: #6b7280; font-size: 1.1rem; margin-top: 10px; }

        .draw-container {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          position: relative;
        }

        /* Estilo do Banner de Erro */
        .error-banner {
          background: #fee2e2;
          color: #dc2626;
          padding: 12px 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 500;
          animation: slideIn 0.3s ease-out;
        }

        .close-error {
          background: none;
          border: none;
          color: #dc2626;
          font-size: 1.5rem;
          cursor: pointer;
          margin-left: 10px;
        }

        .display-box {
          background: #003459;
          min-height: 350px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
          border: 4px solid #0089A3;
        }

        .placeholder { color: #9ca3af; font-size: 1.5rem; }

        .winner-animate {
          animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: white;
        }

        .label { 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          font-size: 0.9rem; 
          color: #0089A3; 
          font-weight: 700;
        }

        .name { font-size: 2rem; margin: 15px 0; line-height: 1.1; }
        
        .number-badge {
          background: #0089A3;
          display: inline-block;
          padding: 10px 40px;
          border-radius: 50px;
          font-size: 2rem;
          font-weight: 900;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .main-draw-btn {
          background: #0089A3;
          color: white;
          border: none;
          padding: 20px 60px;
          font-size: 1rem;
          font-weight: 800;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          max-width: 400px;
        }

        .main-draw-btn:hover:not(:disabled) {
          background: #006e82;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 137, 163, 0.3);
        }

        .main-draw-btn:disabled { background: #9ca3af; cursor: not-allowed; }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255,255,255,0.1);
          border-top: 4px solid #0089A3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }

        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideIn { from { transform: translateY(-10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        @media (max-width: 640px) {
          .name { font-size: 1.25rem; }
          .number-badge { font-size: 1.5rem; }
          .draw-container { padding: 20px; }
          .display-box { min-height: 250px; }
        }
      `}</style>
    </div>
  );
}