import { useLoaderData } from "@remix-run/react";

// Funciones que traen informacion del servidor
import { getGuitarras } from "../models/guitarras.server";

// Componentes
import Guitarra from "~/components/guitarra";

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras;
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
