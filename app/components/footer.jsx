// Components
import Navegacion from "./navegacion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        {/* Navegacion */}
        <Navegacion />
        <p className="copyright">
          Todos los derechos reservados &#169; {new Date().getFullYear()}{" "}
          <span>@ManuelDevWeb</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
