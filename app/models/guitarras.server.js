// Este archivo solo se ejecuta en la parte del servidor

// Obteniendo todas las guitarras de la API Strapi
export async function getGuitarras() {
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  return await res.json();
}

// Obteniendo una guitarra por url de la API Strapi
export async function getGuitarraByUrl(url) {
  const res = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  return await res.json();
}
