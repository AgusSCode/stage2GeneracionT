let actoresPrincipales = [
  { nombre: 'Leonardo DiCaprio', edad: 47 },
  { nombre: 'Al Pacino', edad: 81 },
  { nombre: 'Keanu Reeves', edad: 57 },
  { nombre: 'Robert Downey Jr', edad: 56 },
  { nombre: 'Will Smith', edad: 53 },
  { nombre: 'Brad Pitt', edad: 58 }
];

let actoresSecundarios = [
  { nombre: 'Kate', apellido: 'Winslet' },
  { nombre: 'Billy', apellido: 'Zane' },
  { nombre: 'Frances', apellido: 'Fisher' }
];

let actoresVocales = actoresPrincipales.filter(actor => /^[aeiou]/i.test(actor.nombre) || /^[aeiou]/i.test(actor.nombre.split(" ").pop()));

let actoresPrincipalesPorPelicula = {
  'Titanic': [{ nombre: 'Leonardo', apellido: 'DiCaprio' }, { nombre: 'Kate', apellido: 'Winslet' }, { nombre: 'Billy', apellido: 'Zane' }],
  'El Padrino': [{ nombre: 'Al', apellido: 'Pacino' }],
  'Matrix': [{ nombre: 'Keanu', apellido: 'Reeves' }],
  'Iron Man': [{ nombre: 'Robert', apellido: 'Downey Jr' }],
  'Soy leyenda': [{ nombre: 'Will', apellido: 'Smith' }],
  'Bastardos sin gloria': [{ nombre: 'Brad', apellido: 'Pitt' }]
};

let actoresPrincipalesLista = [];
let peliculas = [];

for (let pelicula in actoresPrincipalesPorPelicula) {
  peliculas.push(pelicula);
  actoresPrincipalesPorPelicula[pelicula].forEach(actor => {
    actoresPrincipalesLista.push(actor);
  });
}

let peliculaPorActor = {};
for (let pelicula in actoresPrincipalesPorPelicula) {
  actoresPrincipalesPorPelicula[pelicula].forEach(actor => {
    let nombreCompleto = `${actor.nombre} ${actor.apellido}`;
    if (!peliculaPorActor[nombreCompleto]) {
      peliculaPorActor[nombreCompleto] = [];
    }
    peliculaPorActor[nombreCompleto].push(pelicula);
  });
}

console.log('Actores principales vocales:', actoresVocales);
console.log('Actores principales por película:', actoresPrincipalesLista);
console.log('Películas:', peliculas);
console.log('Película por actor:', peliculaPorActor);
