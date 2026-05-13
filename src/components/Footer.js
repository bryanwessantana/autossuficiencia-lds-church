export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-container">
        {/* Seção Superior: Logo Vertical (Fundo Cinza Claro) */}
        <div className="footer-top">
          <img 
            src="/images/logo_church_vertical.png" 
            alt="A Igreja de Jesus Cristo dos Santos dos Últimos Dias" 
            className="big-church-logo"
          />
        </div>

        {/* Seção Inferior: Padrão Oficial (Fundo Cinza Escuro) */}
        <div className="footer-bottom">
          <div className="footer-content">
            
            {/* Links Horizontais Estilo Padrão */}
            <nav className="footer-nav">
              <a href="https://www.vindeacristo.org/" target="_blank">Vinde a Cristo</a>
              <a href="https://www.churchofjesuschrist.org/" target="_blank">Página Inicial da Igreja</a>
              <a href="https://www.churchofjesuschrist.org/serve" target="_blank">Servir</a>
              <a href="https://www.thechurchnews.com/" target="_blank">Notícias</a>
            </nav>

            {/* Redes Sociais */}
            <div className="social-icons">
              <a href="https://web.facebook.com/Estacaportaocuritiba/?_rdc=1&_rdr#" target="_blank" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/estacaportaocuritiba/" target="_blank" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/@estacaportaocuritiba" target="_blank" aria-label="YouTube">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
              </a>
            </div>

            {/* Copyright Dinâmico */}
            <div className="legal-notice">
              <p>© {currentYear} - Autossuficiência Brasil. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .footer-top {
          background-color: #F4F4F4;
          padding: 0px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #e5e7eb;
        }

        .big-church-logo {
          height: 400px;
          object-fit: contain;
          opacity: 0.8;
        }

        .footer-bottom {
          background-color: #F0F1F1;
          color: white;
          padding: 40px 20px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .footer-nav {
          display: flex;
          gap: 25px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .footer-nav a {
          color: #000000;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .footer-nav a:hover {
          opacity: 0.7;
          text-decoration: underline;
        }

        .social-icons {
          display: flex;
          gap: 25px;
          margin-top: 10px;
        }

        .social-icons a {
          color: #007DA5;
          transition: opacity 0.2s;
        }

        .social-icons a:hover {
          opacity: 0.6;
        }

        .legal-notice {
          margin-top: 20px;
          text-align: center;
        }

        .legal-notice p {
          font-size: 12px;
          color: #727272;
          letter-spacing: 0.3px;
        }

        @media (max-width: 768px) {
          .footer-nav { gap: 15px; flex-direction: column; align-items: center; }
        }
      `}</style>
    </>
  );
}