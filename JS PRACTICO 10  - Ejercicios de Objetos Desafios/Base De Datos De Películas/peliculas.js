let películas = [
  {
    titulo: "Búsqueda implacable",
    rating: 5,
    loHasVisto: true
  },
  {
    titulo: "Nunca",
    rating: 3,
    loHasVisto: false
  },
  {
    titulo: "Mis espías",
    rating: 2,
    loHasVisto: true
  },
  {
    titulo: "La vida es bella",
    rating: 5,
    loHasVisto: false
  }
];

for (let i = 0; i < películas.length; i++) {
  const película = películas[i];
  const visto = película.loHasVisto ? "Viste" : "No viste";
  console.log(`${visto} "${película.titulo}" - ${película.rating} estrellas`);
}
