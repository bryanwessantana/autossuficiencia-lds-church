import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          <div className="logo-section">
            <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
              <div className="church-branding">  
                <img src="/images/image.png" alt="Imagem" className="logo-img" />
                <div className="logo-wrapper">
                  <img src="/images/autossuficiencia_logo.jpg" alt="Logo" className="logo-img" />
                </div>
              </div>
            </Link>
          </div>
          
          <nav className="nav-desktop">
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/education-for-better-work" target="_blank" rel="noopener noreferrer">Educação</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/find-a-better-job?" target="_blank" rel="noopener noreferrer">Emprego</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/starting-and-growing-my-business" target="_blank" rel="noopener noreferrer">Empreendedorismo</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/personal-finances" target="_blank" rel="noopener noreferrer">Finanças</a>
          </nav>

          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            <div className={isOpen ? "icon open" : "icon"}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className={isOpen ? "nav-mobile open" : "nav-mobile"}>
          <div className="nav-mobile-content">
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/education-for-better-work">Educação</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/find-a-better-job?">Emprego</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/starting-and-growing-my-business">Empreendedorismo</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/personal-finances">Finanças</a>
          </div>
        </div>
      </header>

      <style jsx>{`
        .header { 
          background: white; 
          position: sticky; 
          top: 0; 
          z-index: 100; 
          width: 100%;
        }

        .container-fluid { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          height: 65px; 
          width: 95%;
          padding: 0; 
        }

        .church-branding { 
          display: flex; 
          align-items: center; 
          gap: 0px;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .church-branding:hover {
          opacity: 0.9; 
        }

        .logo-img { 
          height: 80px;
          width: auto;
          display: block;
          transition: height 0.3s ease;
        }

        .logo-wrapper {
          background: transparent;
          display: flex;
          align-items: center;
        }

        .header, .logo-img {
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .active {
          color: #0089A3 !important;
          text-decoration: none !important;
          font-weight: 800 !important;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .active:hover {
          opacity: 0.7;
          color: #0089A3 !important;
          transform: translateY(-1px);
        }

        .nav-desktop { 
          display: none;
          gap: 2rem;
        }

        .nav-desktop a { 
          font-size: 13px; 
          font-weight: 700; 
          color: #4b5563; 
          text-transform: uppercase; 
          text-decoration: none; 
          position: relative;
          padding: 8px 0;
          transition: color 0.3s;
        }

        .nav-desktop a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: #0089A3;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-desktop a:hover {
          color: #0089A3;
        }

        .nav-desktop a:hover::after {
          width: 100%;
        }
        
        .nav-desktop a.active { 
          color: #0089A3; 
        }

        .nav-desktop a.active::after {
          width: 80%;
          background: #0089A3;
        }

        @media (min-width: 1400px) {
          .container-fluid {
            width: 1200px; 
          }
        }

        @media (min-width: 1024px) {
          .nav-desktop { display: flex; }
          .menu-toggle { display: none; }
        }

        @media (max-width: 1023px) {
          .container-fluid {
            width: 92%;
            height: 50px;
          }
          .logo-img {
            height: 50px;
          }
          .menu-toggle {
            display: block;
            margin-right: -3rem;
          }
        }

        @media (max-width: 640px) {
          .container-fluid { 
            width: 100%; 
            padding: 0px; 
            height: 46px;
            background: white;
          }
          .logo-img { 
            height: 30px; 
          }
          .church-branding { 
            gap: 5px; 
          }
          .menu-toggle {
            padding: 5px;
            margin-right: 10px;
            margin-top: -2px;
          }
        }

        .menu-toggle { 
          background: #fff; 
          border: none; 
          cursor: pointer; 
          padding: 10px; 
          border-radius: 8px;
          transition: background 0.3s;
        }
        
        .menu-toggle:hover { background: #fff; }

        .icon span { 
          display: block; 
          width: 22px; 
          height: 2px; 
          background: #374151; 
          margin: 5px 0; 
          transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6); 
        }
        
        .icon.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .icon.open span:nth-child(2) { opacity: 0; transform: translateX(-20px); }
        .icon.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        .nav-mobile {
          position: fixed;
          top: 50px;
          left: 0;
          width: 100%;
          height: 0%;
          background: white;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          visibility: hidden;
        }

        .nav-mobile.open { 
          height: 100vh; 
          opacity: 1;
          visibility: visible;
        }

        .nav-mobile-content {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 10px;
        }

        .nav-mobile a { 
          padding: 18px; 
          text-decoration: none; 
          color: #1f2937; 
          font-weight: 700; 
          font-size: 1.1rem;
          border-radius: 12px;
          transition: all 0.2s;
          opacity: 0;
          transform: translateY(20px);
        }

        .nav-mobile.open a {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-mobile.open a:nth-child(1) { transition-delay: 0.1s; }
        .nav-mobile.open a:nth-child(2) { transition-delay: 0.2s; }
        .nav-mobile.open a:nth-child(3) { transition-delay: 0.3s; }
        .nav-mobile.open a:nth-child(4) { transition-delay: 0.4s; }
        .nav-mobile.open a:nth-child(5) { transition-delay: 0.5s; }

        .nav-mobile a:active { background: #fff; color: #0089A3; }
        .nav-mobile a.active { color: #0089A3; background: #fff; }

        @media (min-width: 1024px) {
          .nav-desktop { display: flex; }
          .menu-toggle { display: none; }
          .container-fluid { height: 80px; }
        }

        @media (max-width: 640px) {
          .logo-img { height: 45px; }
          .nav-mobile { top: 46px; }
        }
      `}</style>
    </>
  );
}