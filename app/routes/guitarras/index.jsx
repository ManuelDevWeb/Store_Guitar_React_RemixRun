import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getGuitarras } from "../../models/guitarras.server";

// Componentes
import ListadoGuitarras from "~/components/listadoGuitarras";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta() {
  return {
    title: "GuitarLA - Tienda",
    description: "Nuestra colección de guitarras",
  };
}

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

// Recordemos que el index.jsx se pinta por defecto al ir a la ruta guitarras
const Tienda = () => {
  // Obteniendo las guitarras del loader para utilizarlas en el componente
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras} />;
};

export default Tienda;
