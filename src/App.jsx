import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes de Layout
import { Header } from "./features/layout/components/Header";
import { Navbar } from "./features/layout/components/Navbar";
import { Footer } from "./features/layout/components/Footer";

// Páginas
import { CrudPages } from "./features/pages/CrudPages"; // Este es tu Inicio
import PropsPages from "./features/pages/PropsPages";
import Article from "./features/layout/components/Article";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        
        {/* Cabecera y Menú */}
        <Header />
        <Navbar />

        {/* El contenido centralizado */}
        <main className="container flex-grow-1 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-11">
              <Routes>
                {/* INICIO (Aquí puedes dejar tu CRUD o lo que gustes) */}
                <Route path="/" element={<CrudPages />} />
                
                {/* PROPS */}
                <Route path="/props" element={<PropsPages />} />

                {/* ARTICLES (Los cuadros modernos) */}
                <Route path="/articles" element={<Article />} />
              </Routes>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;