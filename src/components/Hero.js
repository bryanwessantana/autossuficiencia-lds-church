import Image from 'next/image';

export default function Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <Image 
          src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1280'
          alt="Background"
          fill
          priority
          className="hero-bg-image"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
          <div className="hero-text">
            <div className="reveal">
              <div className="divider"></div>
              <h2>Fortalecendo lares, construindo um futuro melhor!</h2>
              <p>2° Feira de Autossuficiência da Estaca Portão.</p>
              <div className="btn-wrapper">
                <a href="#expositores" className="btn">Quero conhecer os expositores</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bar">
          <div className="bar-container">
            <div className="speaker-info">
              <img 
                src="/images/levino-marcal-junior.jpg" 
                alt="Palestrante Levino Marçal Junior" 
                className="speaker-thumb"
              />
              <div className="speaker-text">
                <span className="tag">Palestrante Confirmado</span>
                <span className="name">Levino Marçal Junior</span>
              </div>
            </div>
            
            <a href="https://www.linkedin.com/in/lm-jr/" className="btn-small" target="_blank" rel="noopener noreferrer">
              Conheça o Palestrante
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero { 
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .hero-content { 
          height: 530px;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          background-color: #003459;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 52, 89, 0.5);
          z-index: 1;
        }

        .hero-bg-image {
          z-index: 0;
        }

        .hero-text { 
          position: relative; 
          z-index: 2; 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 0 25px; 
          color: white; 
          width: 100%; 
        }

        @keyframes backgroundZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .divider { 
          width: 64px; 
          height: 4px; 
          background: #0089A3; 
          margin-bottom: 1.5rem; 
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }
        
        h2 { 
          font-size: 3.5rem; 
          font-weight: 800; 
          margin-bottom: 1rem; 
          max-width: 700px; 
          line-height: 1.1;
          letter-spacing: -1px;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        p { 
          font-size: 1.4rem; 
          font-weight: 300;
          margin-bottom: 2.5rem; 
          opacity: 0.9; 
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .btn { 
          background: #0089A3; 
          color: white; 
          padding: 1.2rem 2.5rem; 
          font-weight: bold; 
          text-transform: uppercase; 
          border-radius: 4px; 
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          animation: fadeInUp 0.8s ease-out 0.8s backwards;
        }

        .btn:hover { 
          background: #00768c; 
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .bar { 
          background: #003459; 
          padding: 12px 0; 
          color: white; 
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
          position: relative;
          z-index: 10;
        }

        .bar-container { 
          max-width: 600px; 
          margin: 0 auto; 
          padding: 0 25px; 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
        }

        .speaker-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .speaker-thumb { 
          height: 55px; 
          width: 55px; 
          border-radius: 50%; 
          object-fit: cover;
          border: 2px solid #0089A3;
          padding: 2px;
        }

        .speaker-text {
          display: flex;
          flex-direction: column;
        }

        .tag {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #0089A3;
          font-weight: 800;
        }

        .name {
          font-size: 1rem;
          font-weight: 600;
        }

        .btn-small { 
          background: #0089A3; 
          padding: 0.7rem 1.6rem; 
          font-weight: 700; 
          text-transform: uppercase; 
          font-size: 0.7rem; 
          color: white; 
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .btn-small:hover {
          background: #ffffff;
          color: #003459;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-content { height: 500px; text-align: center; }
          .divider { margin: 0 auto 1.5rem; }
          h2 { font-size: 2.5rem; }
          
          .bar-container {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            padding: 20px;
          }
          
          .speaker-info {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .hero-content { 
            height: auto; 
            min-height: 480px; 
            padding: 40px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .hero-text { 
            width: 100%;
            max-width: 100%;
            padding: 0 20px; 
            margin: 0 !important; 
            display: flex;
            justify-content: center;
          }

          .reveal {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center; 
            justify-content: center;
          }

          .divider { 
            margin: 0 auto 1.5rem !important; 
          }

          h2 { 
            font-size: 1.8rem !important; 
            line-height: 1.2;
            margin: 0 auto 15px !important; 
            width: 100%;
            text-align: center;
          }

          p { 
            font-size: 1.1rem !important; 
            margin: 0 auto 30px !important; 
            max-width: 300px;
            text-align: center;
          }

          .btn-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 10px;
          }

          .btn { 
            width: 100%; 
            max-width: 80%;
            box-sizing: border-box; 
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}