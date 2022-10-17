import { Link } from "@remix-run/react";

// Images
import logo from "../../public/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={logo} alt="Imagen logo" />
        </Link>
        {/* Navegacion */}
        <nav className="navegacion">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
