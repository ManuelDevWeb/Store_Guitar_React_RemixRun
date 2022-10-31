import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";

// Funciones que traen informacion del servidor
import { getGuitarraByUrl } from "../../models/guitarras.server";

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta({ data }) {
  // La data que se recibe es la que se retorna en la funcion loader
  // console.log(data);

  // Validamos si existe data que se recibe del loader
  if (!data) {
    return {
      title: "GuitarLA - Guitarra no encontrada",
      description: "Guitarra no encontrada",
    };
  }

  return {
    title: `GuitarLA - ${data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data[0].attributes.nombre}`,
  };
}

// Funcion loader (Loader es lo que se usa cuando el componente va a cargar datos)
export async function loader({ request, params }) {
  // console.log(request);
  // console.log(params);

  // Obtenemos el parametro de la url
  const { guitarraUrl } = params;

  const guitarra = await getGuitarraByUrl(guitarraUrl);

  // Si no hay guitarra con esa url, retornamos error para que se capture en el root con las funciones que provee remix run
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }

  return guitarra.data;
}

const Guitarra = () => {
  // State para manejar la cantidad
  const [cantidad, setCantidad] = useState(0);

  // Accediendo a valores del contexto
  const { agregarCarrito } = useOutletContext();

  // Oteniendo la guitarra del loader para utilizarla en el componente
  const guitarra = useLoaderData();

  const { nombre, descripcion, precio, imagen } = guitarra[0].attributes;

  // Funcion que se ejecuta al enviar el formulario y almacena en local storage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }

    // Objeto que se agregara al carrito
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <div className=" guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />

      <div className="contenido" onSubmit={handleSubmit}>
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
};

export default Guitarra;
