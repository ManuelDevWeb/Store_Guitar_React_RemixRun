import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";

// Components
import ListadoGuitarras from "~/components/listadoGuitarras";
import ListadoPosts from "~/components/listadoPosts";
import Curso from "~/components/curso";

// Hoja de estilos
import stylesGuitarras from "../styles/guitarras.css";
import stylesBlogs from "../styles/blog.css";
import stylesCurso from "../styles/curso.css";

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
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader() {
  // Realizando multiples llamadas a la API y que se ejecuten al mismo tiempo
  // guitarras-> getGuitarras() y posts-> getPosts()
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

// Primary page
const Index = () => {
  // Obteniendo las guitarras, curso y posts del loader para utilizarlas en el componente
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
};

export default Index;
