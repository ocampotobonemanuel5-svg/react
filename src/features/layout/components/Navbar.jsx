import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark border-bottom border-secondary shadow-sm">
      <div className="container">
        <div className="navbar-nav w-100 justify-content-start">
          <Link className="nav-link px-3 fw-bold text-uppercase" to="/">Inicio</Link>
          <Link className="nav-link px-3 fw-bold text-uppercase" to="/props">Props</Link>
          <Link className="nav-link px-3 fw-bold text-uppercase" to="/articles">Articles</Link>
        </div>
      </div>
    </nav>
  );
};