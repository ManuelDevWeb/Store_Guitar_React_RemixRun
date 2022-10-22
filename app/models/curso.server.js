// Este archivo solo se ejecuta en la parte del servidor

// Obteniendo el curso de la API Strapi
export async function getCurso() {
  const res = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  return await res.json();
}
