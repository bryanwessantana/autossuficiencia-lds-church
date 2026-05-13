export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="logo-section">
            <div className="church-branding">  
              <div className="logo-wrapper">
                <img src="/images/logo.png" alt="Logo" className="logo-img" />
              </div>
            </div>
            <img className="church-name" src="/images/church_name.png" alt="Nome Igreja" />
          </div>
          
          <nav className="nav">
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/education-for-better-work" target="_blank" rel="noopener noreferrer">Educação</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/find-a-better-job?" target="_blank" rel="noopener noreferrer">Emprego</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/starting-and-growing-my-business" target="_blank" rel="noopener noreferrer">Empreendedorismo</a>
            <a href="https://www.churchofjesuschrist.org/self-reliance/course-materials/personal-finances" target="_blank" rel="noopener noreferrer">Finanças</a>
            <a href="#" className="active">Feira Portão</a>
          </nav>          
        </div>
      </header>

      <style jsx>{`
        .header { background: #fff; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .container-fluid { display: flex; justify-content: space-between; align-items: center; height: 67px; }
        .logo-section { display: flex; align-items: center; height: 100%; }
        .church-branding { position: relative; height: 100%; width: 220px; display: flex; align-items: center; }
        .logo-wrapper { z-index: 10; padding-left: 20px; }
        .logo-img { height: 72px; mix-blend-mode: multiply; margin-left: -23px; }
        .church-name { height: 50px; margin-left: -70px; }
        .nav { display: none; gap: 1.5rem; padding-right: 2rem; }
        @media (min-width: 1024px) { .nav { display: flex; } }
        .nav a { font-size: 13px; font-weight: bold; color: #374151; text-transform: uppercase; text-decoration: none; }
        .nav a.active { color: #00768c; text-decoration: underline; text-underline-offset: 8px; }
      `}</style>
    </>
  );
}