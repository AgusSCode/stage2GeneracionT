let personas = [
    { nombre: "Alba", edad: 15 },
    { nombre: "Estrella", edad: 30 },
    { nombre: "Belen", edad: 20 },
    { nombre: "Santiago", edad: 4 },
    { nombre: "Katherine", edad: 55 }
];

personas.sort((a, b) => a.edad - b.edad);

personas.forEach((persona, index) => {
    persona.posicion = index;
});

console.log(personas);
