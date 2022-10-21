import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";

// Components
import ListadoGuitarras from "~/components/listadoGuitarras";
import ListadoPosts from "~/components/listadoPosts";

// Hoja de estilos
import stylesGuitarras from "../styles/guitarras.css";
import stylesBlogs from "../styles/blog.css";

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
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesBlogs,
    },
  ];
}

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader() {
  // Realizando multiples llamadas a la API y que se ejecuten al mismo tiempo
  // guitarras-> getGuitarras() y posts-> getPosts()
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
  };
}

const Index = () => {
  // Obteniendo las guitarras y posts del loader para utilizarlas en el componente
  const { guitarras, posts } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
};

export default Index;
