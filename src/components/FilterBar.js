import { Search } from 'lucide-react';

export default function FilterBar({ searchTerm, setSearchTerm, categoriaAtiva, setCategoriaAtiva, categorias }) {
  return (
    <>
      <div className="filter-section">
        <div className="filter-grid">
          <div className="filter-group">
            <label htmlFor="search">Busca por palavra-chave</label>
            <div className="search-wrapper">
              <input 
                id="search"
                type="text" 
                placeholder="Ex: Padaria, Artesanato..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="search-button">
                <Search size={18} color="white" />
              </div>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="category">Categoria</label>
            <select 
              id="category"
              value={categoriaAtiva} 
              onChange={(e) => setCategoriaAtiva(e.target.value)}
              className="category-select"
            >
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="title-container">
          <h2 className="results-title">
            {categoriaAtiva === "Todas" ? "Todos os Expositores" : categoriaAtiva}
          </h2>
          <div className="title-underline"></div>
        </div>
      </div>

      <style jsx>{`
        .filter-section { 
          margin-bottom: 3rem; 
          width: 100%;
        }

        .filter-grid { 
          display: grid; 
          grid-template-columns: 1.5fr 1fr; 
          gap: 25px; 
          align-items: end; 
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
        }

        .filter-group { 
          display: flex; 
          flex-direction: column; 
          gap: 10px; 
        }

        .filter-group label { 
          font-size: 0.85rem; 
          font-weight: 700; 
          color: #4b5563; 
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .search-wrapper { 
          display: flex; 
          height: 50px;
          position: relative;
          transition: all 0.2s;
        }

        .search-wrapper input { 
          flex: 1; 
          padding: 0 50px 0 15px; 
          border: 2px solid #e5e7eb; 
          border-radius: 8px; 
          outline: none; 
          font-size: 16px;
          color: #1f2937;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-wrapper input:focus {
          border-color: #0089A3;
          box-shadow: 0 0 0 4px rgba(0, 137, 163, 0.1);
        }

        .search-button { 
          position: absolute;
          right: 5px;
          top: 5px;
          bottom: 5px;
          width: 40px;
          background: #0089A3; 
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          pointer-events: none;
        }

        .category-select { 
          height: 50px; 
          padding: 0 15px; 
          border: 2px solid #e5e7eb; 
          border-radius: 8px; 
          background: white; 
          font-size: 16px; 
          cursor: pointer;
          outline: none;
          color: #1f2937;
          transition: border-color 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 15px center;
          background-size: 18px;
        }

        .category-select:focus {
          border-color: #0089A3;
        }

        .title-container {
          margin-top: 3.5rem;
          margin-bottom: 2rem;
          position: relative;
        }

        .results-title { 
          font-size: 1.85rem; 
          font-weight: 800; 
          color: #111827; 
          margin: 0;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: #0089A3;
          margin-top: 12px;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .filter-grid { 
            grid-template-columns: 1fr; 
            padding: 20px;
          }

          .results-title { 
            font-size: 1.5rem; 
          }
          
          .title-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}