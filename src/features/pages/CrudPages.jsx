import React from "react";

const ArticleCard = ({ title, desc, img }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 bg-secondary border-0 shadow text-white">
      <img src={img} className="card-img-top" alt={title} style={{height: '200px', objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text small text-light">{desc}</p>
        <button className="btn btn-outline-primary btn-sm">Leer más</button>
      </div>
    </div>
  </div>
);

export const CrudPages = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="display-6 fw-bold">Artículos Recientes</h2>
        <button className="btn btn-primary">Nuevo Artículo</button>
      </div>
      <div className="row">
        <ArticleCard 
          title="React 19" 
          desc="Descubre las nuevas funcionalidades del compilador de React." 
          img="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500" 
        />
        <ArticleCard 
          title="Bootstrap 5.3" 
          desc="Cómo crear interfaces oscuras y modernas sin esfuerzo." 
          img="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500" 
        />
        <ArticleCard 
          title="Diseño UX" 
          desc="La importancia de la consistencia en los componentes web." 
          img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500" 
        />
      </div>
    </div>
  );
};