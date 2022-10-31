import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";

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
  // State para manejar el total a pagar
  const [total, setTotal] = useState(0);

  // Accediento a los valores del contexto
  const { carrito, actualizarCantidad } = useOutletContext();

  // useEffect que se ejecuta cada que cambie carrito
  useEffect(() => {
    const calcularTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calcularTotal);
  }, [carrito]);

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>

      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>
          {
            // Validando e iterando sobre el carrito
            carrito.length === 0
              ? "Carrito Vacio"
              : carrito.map((producto) => (
                  <div key={producto.id} className="producto">
                    <div>
                      <img
                        src={producto.imagen}
                        alt={`Imagen del producto ${producto.nombre}`}
                      />
                    </div>
                    <div>
                      <p className="nombre">{producto.nombre}</p>
                      <p>Cantidad:</p>

                      <select
                        value={producto.cantidad}
                        className="select"
                        onChange={(e) =>
                          actualizarCantidad({
                            // Convirtiendo a numerico el valor del select
                            cantidad: +e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <p className="precio">
                        $<span>{producto.precio}</span>{" "}
                      </p>
                      <p className="subtotal">
                        Subtotal: $
                        <span>{producto.precio * producto.cantidad}</span>{" "}
                      </p>
                    </div>
                  </div>
                ))
          }
        </div>

        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: ${total}</p>
        </aside>
      </div>
    </main>
  );
};

export default Carrito;
