import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getPosts } from "../../models/posts.server";

// Components
import ListadoPosts from "~/components/listadoPosts";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta() {
  return {
    title: "GuitarLA - Blog",
    description: "Nuestro blog de guitarras",
  };
}

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

const Blog = () => {
  // Obteniendo los posts del loader para utilizarlos en el componente
  const posts = useLoaderData();

  return <ListadoPosts posts={posts} />;
};

export default Blog;
