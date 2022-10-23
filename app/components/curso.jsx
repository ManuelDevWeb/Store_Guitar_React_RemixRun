const Curso = ({ curso }) => {
  const { contenido, imagen, titulo } = curso;

  console.log(imagen);

  return (
    <section className="curso">
      {/* Styles con jsx */}
      <style jsx="true">
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.65),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}
      </style>
      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{titulo}</h2>
          <p className="texto">{contenido}</p>
        </div>
      </div>
    </section>
  );
};

export default Curso;
