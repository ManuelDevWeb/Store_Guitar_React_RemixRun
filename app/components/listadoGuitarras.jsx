// Components
import Guitarra from "./guitarra";

const ListadoGuitarras = ({ guitarras }) => {
  return (
    <>
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
    </>
  );
};

export default ListadoGuitarras;
