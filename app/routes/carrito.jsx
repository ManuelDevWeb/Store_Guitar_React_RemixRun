// Hoja de estilos
import styles from "../styles/carrito.css";

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

// Funcion para agregar informacion meta al componente Meta que nos provee remix run
// Ya no toca llamar el componente Meta, puesto se agrego en el archivo root.jsx
export function meta() {
  return {
    title: "GuitarLA - Carrito de Compras",
    description: "Venta de guitarras, musica, blog, carrito de compras, tienda",
  };
}

const Carrito = () => {
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>

      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>
        </div>

        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </main>
  );
};

export default Carrito;
