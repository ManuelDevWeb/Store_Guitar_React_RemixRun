import { Link, useLocation } from "@remix-run/react";

// Imagenes
import imagen from "../../public/img/carrito.png";

const Navegacion = () => {
  // Accediendo a la informacion de la URL
  const location = useLocation();

  return (
    // Navegacion
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        to="/guitarras"
        className={location.pathname === "/guitarras" ? "active" : ""}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link to="/carrito">
        <img src={imagen} alt="Carrito de compras" />
      </Link>
    </nav>
  );
};

export default Navegacion;
