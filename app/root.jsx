import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Hoja de estilos
import styles from "./styles/index.css";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width, initial-scale=1",
  };
}

// Funcion para agregar hojas de estilo y links al componente Link que nos provee remix run
export function links() {
  // Arreglo con cada uno de los objetos con la hoja de estilos a agregar
  return [
    // Normalize
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    // Google Fonts
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    // Hoja de estilos local
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

// Funcion Principal
export default function App() {
  return (
    <Document>
      {/* Inyectando cada componente en el Layout (Que esten en routes y a cada uno de ellos se le genera una ruta) */}
      <Outlet />
    </Document>
  );
}

// Componente Document (Layout)
function Document({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Componente con la informacion de Meta */}
        <Meta />
        {/* Componente con la informacion de los links */}
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Componente con todas las optimizaciones */}
        <Scripts />
        {/* Componente que permite hacer live reload */}
        <LiveReload />
      </body>
    </html>
  );
}
