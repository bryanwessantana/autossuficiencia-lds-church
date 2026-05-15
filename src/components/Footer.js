export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-container">
        <div className="footer-bottom">
          <div className="footer-content">
            <nav className="footer-nav">
              <a href="https://www.vindeacristo.org/" target="_blank" rel="noopener noreferrer">Vinde a Cristo</a>
              <a href="https://www.churchofjesuschrist.org/" target="_blank" rel="noopener noreferrer">Página Inicial da Igreja</a>
              <a href="https://www.churchofjesuschrist.org/serve" target="_blank" rel="noopener noreferrer">Servir</a>
              <a href="https://www.thechurchnews.com/" target="_blank" rel="noopener noreferrer">Notícias</a>
            </nav>

            <div className="social-icons">
              <a href="https://web.facebook.com/Estacaportaocuritiba/" target="_blank" aria-label="Facebook" className="social-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/estacaportaocuritiba/" target="_blank" aria-label="Instagram" className="social-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/@estacaportaocuritiba" target="_blank" aria-label="YouTube" className="social-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
              </a>
            </div>

            <hr className="footer-divider" />

            <div className="legal-notice">
              <p>© {currentYear} &bull; Estaca Curitiba Portão &bull; Autossuficiência Brasil</p>
              <p className="subtitle">Este não é um site oficial de A Igreja de Jesus Cristo dos Santos dos Últimos Dias.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-container { width: 100%; }
        
        .footer-bottom { 
          background-color: #ffffff; 
          padding: 60px 20px 40px; 
          border-top: 1px solid #eaeaea; 
        }
        
        .footer-content { 
          max-width: 1100px; 
          margin: 0 auto; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 30px; 
        }

        .footer-nav { 
          display: flex; 
          gap: 30px; 
          justify-content: center; 
          flex-wrap: wrap; 
        }

        .footer-nav a { 
          color: #4b5563; 
          text-decoration: none; 
          font-size: 14px; 
          font-weight: 500; 
          transition: color 0.2s ease;
        }

        .footer-nav a:hover { 
          color: #0089A3; 
        }

        .social-icons { 
          display: flex; 
          gap: 20px; 
        }

        .social-link { 
          color: #0089A3; 
          background: #f9fafb;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #eee;
        }

        .social-link:hover { 
          color: #ffffff; 
          background: #0089A3;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 137, 163, 0.2);
        }

        .footer-divider {
          width: 100%;
          max-width: 50px;
          border: none;
          border-top: 2px solid #0089A3;
          margin: 10px 0;
          opacity: 0.3;
        }

        .legal-notice { 
          text-align: center; 
          line-height: 1.8; 
        }

        .legal-notice p { 
          font-size: 13px; 
          color: #374151; 
          margin: 0; 
        }

        .legal-notice strong {
          color: #111827;
        }

        .subtitle { 
          font-size: 11px !important; 
          color: #9ca3af !important; 
          margin-top: 8px !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .footer-nav { gap: 15px; }
          .footer-nav a { font-size: 13px; }
          .footer-bottom { padding: 40px 20px; }
        }
      `}</style>
    </>
  );
}