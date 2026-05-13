export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="divider"></div>
            <h2>O processo da autossuficiência, como alcançar?</h2>
            <p>Feira de Autossuficiência da Estaca Portão.</p>
            <a href="#expositores" className="btn">Quero conhecer os expositores</a>
          </div>
        </div>
        <div className="bar">
          <div className="bar-container">
            <span>Catálogo Digital de Empresas - Estaca Portão</span>
            <a href="#expositores">Acessar</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero { position: relative; }
        .hero-content { 
          height: 480px; 
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1280' );
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }
        .hero-text { max-width: 1200px; margin: 0 auto; padding: 0 1rem; color: white; width: 100%; }
        .divider { width: 64px; height: 4px; background: white; margin-bottom: 1.5rem; }
        h2 { font-size: 3rem; font-weight: bold; margin-bottom: 1rem; max-width: 600px; }
        p { font-size: 1.125rem; font-style: italic; margin-bottom: 2rem; }
        .btn { background: #0089A3; color: white; padding: 0.75rem 2.5rem; font-weight: bold; text-transform: uppercase; border-radius: 2px; text-decoration: none; }
        .bar { background: #003459; padding: 0.65rem 0; color: white; }
        .bar-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem; }
        .bar-container a { background: #0089A3; padding: 0.5rem 1.5rem; font-weight: bold; text-transform: uppercase; font-size: 0.75rem; color: white; text-decoration: none; }
      `}</style>
    </>
  );
}