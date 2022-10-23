import { Outlet } from "@remix-run/react";

// Hoja de estilos
import styles from "../styles/guitarras.css";

// Funcion para agregar hojas de estilo y link al componente Link que nos provee remix run
// Ya no toca llamar el componente Link, puesto se agrego en el archivo root.jsx
export function links() {
  // Arreglo con cada uno de los objetos con la hoja de estilos a agregar
  return [
    // Hoja de estilos local
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Tienda = () => {
  return (
    <main className="contenedor">
      {/* Inyectando cada componente (Que esten dentro de la carpeta que se llaman igual a este archivo. Por defecto llama a index.jsx) */}
      <Outlet />
    </main>
  );
};

export default Tienda;
