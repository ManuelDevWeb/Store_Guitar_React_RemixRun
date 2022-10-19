import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getGuitarras } from "../models/guitarras.server";

// Componentes
import Guitarra from "../components/guitarra";

// Hoja de estilos
import styles from "../styles/guitarras.css";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta() {
  return {
    title: "GuitarLA - Tienda",
    description: "Nuestra colección de guitarras",
  };
}

// Funcion para agregar hojas de estilo y link al componente Link que nos provee remix run
// Ya no toca llamar el componente Link, puerto se agrego en el archivo root.jsx
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

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

const Tienda = () => {
  // Obteniendo las guitarras del loader para utilizarlas en el componente
  const guitarras = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Coleccion</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {
            // Iterando sobre las guitarras
            guitarras.map((guitarra) => (
              <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
            ))
          }
        </div>
      )}
    </main>
  );
};

export default Tienda;
