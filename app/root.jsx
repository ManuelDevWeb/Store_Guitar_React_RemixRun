import { Meta } from "@remix-run/react";

// Funcion con la informacion meta (Va enlazado con el componente Meta)
export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width, initial-scale=1",
  };
}

// Funcion Principal
export default function App() {
  return (
    <Document>
      <h1>Hola Mundo</h1>
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
      </head>
      <body>{children}</body>
    </html>
  );
}
