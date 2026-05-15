export default function CompanyCard({ empresa }) {

  const mode = empresa.imageMode || "contain";

  return (
    <>
      <div className="card">
        {empresa.status && (
          <div className="ribbon-container">
            <div className="ribbon">{empresa.status}</div>
          </div>
        )}

        <div className="image-wrapper">
          {empresa.image && (
            <div className="image-wrapper">
              <img
                src={empresa.image} 
                alt={empresa.nome}
                className={`card-img ${mode}`}
              />
            </div>
          )}
        </div>

        <div className="info">
          <div className="category">
            {empresa.categoria} / <span>{empresa.subcategoria}</span>
          </div>
          <h3>{empresa.nome}</h3>
          <p>{empresa.resumo}</p>
        </div>

        <div className="footer-card">
          <button 
            onClick={() => window.open(empresa.website || empresa.whatsapp, '_blank')}
            aria-label={`Ver mais sobre ${empresa.nome}`}
          >
            {empresa.website ? 'Visitar Website' : 'Falar no WhatsApp'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .card { 
          background: white; 
          position: relative; 
          display: flex; 
          flex-direction: column; 
          height: 100%; 
          border: 1px solid #e5e7eb; 
          box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
          overflow: hidden;
        }

        .card:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 12px 24px rgba(0,0,0,0.12); 
        }

        .ribbon-container { 
          position: absolute; 
          top: 0; 
          left: 0; 
          width: 96px; 
          height: 96px; 
          overflow: hidden; 
          z-index: 5; 
        }

        .ribbon { 
          position: absolute; 
          top: 15px; 
          left: -25px; 
          background: #0089A3; 
          color: white; 
          padding: 2px 30px; 
          transform: rotate(-45deg); 
          font-size: 10px; 
          font-weight: bold; 
          text-transform: uppercase;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .image-wrapper { 
          height: 185px; 
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white; 
          overflow: hidden;
          padding: ${mode === 'contain' ? '0' : '0'}; 
        }

        .card-img { 
          width: 100%; 
          height: 100%; 
          transition: transform 0.5s ease;
        }

        /* Lógica de enquadramento baseada no JSON */
        .card-img.cover {
          object-fit: cover;
        }

        .card-img.contain {
          object-fit: contain;
        }

        .card:hover .card-img {
          transform: scale(0.99);
        }

        .info { 
          padding: 1.5rem; 
          flex-grow: 1; 
          border-top: 4px solid #0089A3; 
        }

        .category {
          font-size: 0.7rem;
          color: #6b7280;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .category span { color: #0089A3; }

        h3 { 
          font-size: 1.2rem; 
          font-weight: 700; 
          color: #111827; 
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        p { 
          color: #4b5563; 
          font-size: 0.875rem; 
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .footer-card { 
          padding: 0 1.5rem 1.5rem; 
        }

        button { 
          width: 100%; 
          background: #0089A3; 
          color: white; 
          font-weight: bold; 
          padding: 0.85rem; 
          border: none; 
          text-transform: uppercase; 
          cursor: pointer; 
          border-radius: 6px;
          transition: background 0.2s;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }

        button:hover { background: #00768c; }

        @media (max-width: 640px) {
          .image-wrapper { height: 210px; }
          .info { padding: 1.25rem; }
        }
      `}</style>
    </>
  );
}