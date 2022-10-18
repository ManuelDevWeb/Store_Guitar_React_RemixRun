// Imagenes
import imagen from "../../public/img/nosotros.jpg";

// Hoja de estilos
import styles from "../styles/nosotros.css";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica y mucho mas!",
  };
}

// Funcion para agregar hojas de estilo y links al componente Link que nos provee remix run
// Ya no toca llamar el componente Link, puesto se agrego en el archivo root.jsx
export function links() {
  // Arreglo con cada uno de los objetos con la hoja de estilos a agregar
  return [
    // Hoja de estilos local
    {
      rel: "stylesheet",
      href: styles,
    },
    // Cargar imagen, video, archivo js o css. Tan pronto cargue el HTML carga este archivo, puesto es muy pesado
    {
      rel: "preload",
      href: imagen,
      as: "imagen",
    },
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin non pellentesque turpis. Ut sodales
            augue mi, ac mattis diam suscipit sed. Curabitur ac feugiat orci.
            Etiam tincidunt ut leo at vestibulum. Vivamus efficitur libero et
            eleifend blandit. Etiam bibendum fringilla velit. Vestibulum sit
            amet urna id quam elementum fringilla.
            <br />
            <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin non pellentesque turpis. Ut sodales
            augue mi, ac mattis diam suscipit sed. Curabitur ac feugiat orci.
            Etiam tincidunt ut leo at vestibulum. Vivamus efficitur libero et
            eleifend blandit. Etiam bibendum fringilla velit. Vestibulum sit
            amet urna id quam elementum fringilla.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
