import { Search } from 'lucide-react';

export default function FilterBar({ searchTerm, setSearchTerm, categoriaAtiva, setCategoriaAtiva, categorias }) {
  return (
    <>
      <div className="filter-section">
        <div className="filter-grid">
          <div className="filter-group">
            <label>Busca por palavra-chave</label>
            <div className="search-wrapper">
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button">
                <Search size={20} color="white" />
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label>Categoria</label>
            <select value={categoriaAtiva} onChange={(e) => setCategoriaAtiva(e.target.value)}>
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        <h2 className="results-title">Todos os Expositores</h2>
      </div>

      <style jsx>{`
        .filter-section { margin-bottom: 3rem; }
        .filter-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; align-items: end; }
        .filter-group { display: flex; flex-direction: column; gap: 8px; }
        .filter-group label { font-size: 14px; font-weight: 600; color: #374151; }
        .search-wrapper { display: flex; height: 45px; }
        .search-wrapper input { flex: 1; padding: 0 15px; border: 1px solid #d1d5db; border-right: none; border-radius: 4px 0 0 4px; outline: none; }
        .search-button { background: #0089A3; border: none; padding: 0 15px; border-radius: 0 4px 4px 0; cursor: pointer; }
        select { height: 45px; padding: 0 10px; border: 1px solid #d1d5db; border-radius: 4px; background: white; }
        .results-title { font-size: 1.8rem; font-weight: bold; color: #1f2937; margin-top: 2rem; }
        @media (max-width: 768px) { .filter-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}