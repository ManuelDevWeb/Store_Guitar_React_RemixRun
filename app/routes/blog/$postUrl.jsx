import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getPostByUrl } from "~/models/posts.server";
// Funcion encargada de formatear fecha
import { formatearFecha } from "~/utils/helper";

// Funcion para agregar la informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego el archivo root.jsx
export function meta({ data }) {
  // La data que se recibe es la que retorna la funcion loader
  // console.log(data);

  // Validamos si existe data que se recibe del loader
  if (!data) {
    return {
      title: "GuitarLA - Post no encontrado",
      description: "Post no encontrado",
    };
  }

  return {
    title: `GuitarLA - ${data[0].attributes.titulo}`,
    description: `Guitarras, venta de guitarras, blog ${data[0].attributes.titulo}`,
  };
}

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader({ request, params }) {
  // console.log(request);
  // console.log(params);

  // Obtenemos el parametro de la url
  const { postUrl } = params;

  const post = await getPostByUrl(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado",
    });
  }

  return post.data;
}

const Post = () => {
  // Obteniendo el post del loader para utilizarlo en el componente
  const post = useLoaderData();

  const { titulo, contenido, publishedAt, imagen } = post[0]?.attributes;

  return (
    <article className="contenedor post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default Post;
