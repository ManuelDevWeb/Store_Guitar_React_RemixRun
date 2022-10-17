import { Link } from "@remix-run/react";

// Componentes
import Navegacion from "./navegacion";

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
        <Navegacion />
      </div>
    </header>
  );
};

export default Header;
