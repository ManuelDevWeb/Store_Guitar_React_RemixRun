import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getGuitarraByUrl } from "../../models/guitarras.server";

// Hoja de estilos
import styles from "../../styles/guitarras.css";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta({ data }) {
  // La data que se recibe es la que se retorna en la funcion loader
  // console.log(data);

  return {
    title: `GuitarLA - ${data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data[0].attributes.nombre}`,
  };
}

// Funcion para agregar hojas de estilo y link al componente Link que nos provee remix run
// Ya no toca llamar el componente Link, puesto se agrego en el archivo root.jsx
export function links() {
  // Arreglo con cada uno de los ojetos con la hoja de estilos a agregar
  return [
    // Hoja de estilos local
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader({ request, params }) {
  // console.log(request);
  // console.log(params);

  // Obtenemos el parametro de la url
  const { guitarraUrl } = params;

  const guitarra = await getGuitarraByUrl(guitarraUrl);
  return guitarra.data;
}

const Guitarra = () => {
  // Oteniendo la guitarra del loader para utilizarla en el componente
  const guitarra = useLoaderData();

  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;

  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;
