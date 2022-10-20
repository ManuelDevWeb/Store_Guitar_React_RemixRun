// Este archivo solo se ejecuta en la parte del servidor

// Obteniendo todos los posts de la API Strapi
export async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  return await res.json();
}
