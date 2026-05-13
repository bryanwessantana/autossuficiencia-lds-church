export default function CompanyCard({ empresa }) {
  return (
    <>
      <div className="card">
        <div className="ribbon-container">
          <div className="ribbon">{empresa.status}</div>
        </div>
        <div className="image-wrapper">
          <img src={empresa.image} alt={empresa.nome} />
        </div>
        <div className="info">
          <div className="category">{empresa.categoria} / <span>{empresa.subcategoria}</span></div>
          <h3>{empresa.nome}</h3>
          <p>{empresa.resumo}</p>
        </div>
        <div className="footer-card">
          <button onClick={() => window.open(empresa.website || empresa.whatsapp, '_blank')}>
            {empresa.website ? 'Entre em contato' : 'Saiba Mais'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .card { background: white; position: relative; display: flex; flex-direction: column; height: 100%; border: 1px solid #FCFCFC; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: 0.3s; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
        .ribbon-container { position: absolute; top: 0; left: 0; width: 96px; height: 96px; overflow: hidden; z-index: 5; }
        .ribbon { position: absolute; top: 10px; left: -30px; background: #0089A3; color: white; padding: 2px 35px; transform: rotate(-45deg); font-size: 10px; font-weight: bold; text-transform: uppercase; }
        .image-wrapper { height: 192px; overflow: hidden; }
        .image-wrapper img { width: 100%; height: 100%; object-fit: cover; }
        .info { padding: 1.5rem; flex-grow: 1; border-top: 4px solid #0089A3; }
        h3 { font-size: 1.25rem; font-weight: bold; color: #1f2937; margin-bottom: 0.5rem; }
        p { color: #4b5563; font-size: 0.875rem; line-height: 1.4; }
        .footer-card { padding: 0 1.5rem 1.5rem; }
        button { width: 100%; background: #0089A3; color: white; font-weight: bold; padding: 0.75rem; border: none; text-transform: uppercase; cursor: pointer; }
      `}</style>
    </>
  );
}