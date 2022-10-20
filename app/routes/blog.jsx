import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getPosts } from "../models/posts.server";

// Components
import Post from "../components/post";

// Hoja de estilos
import styles from "../styles/blog.css";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta() {
  return {
    title: "GuitarLA - Blog",
    description: "Nuestro blog de guitarras",
  };
}

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

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

const Blog = () => {
  // Obteniendo los posts del loader para utilizarlos en el componente
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {
          // Iterando sobre los posts
          posts.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))
        }
      </div>
    </main>
  );
};

export default Blog;
