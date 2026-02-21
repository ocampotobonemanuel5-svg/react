import React from 'react';

const ArticleCard = ({ title, text, img }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 bg-secondary border-0 shadow text-white">
      <img src={img} className="card-img-top" alt={title} style={{height: '180px', objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text small text-light">{text}</p>
        <button className="btn btn-primary btn-sm w-100">Leer más</button>
      </div>
    </div>
  </div>
);

const Article = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4 display-6">Nuestros Artículos</h2>
      <div className="row">
        <ArticleCard 
          title="Tecnología 2026" 
          text="Explorando las nuevas fronteras de la IA y el desarrollo web." 
          img="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500" 
        />
        <ArticleCard 
          title="Diseño Moderno" 
          text="Cómo Bootstrap 5 facilita la creación de interfaces oscuras." 
          img="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500" 
        />
        <ArticleCard 
          title="React 19" 
          text="Guía completa sobre los nuevos hooks y optimizaciones." 
          img="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500" 
        />
      </div>
    </div>
  );
}

export default Article;