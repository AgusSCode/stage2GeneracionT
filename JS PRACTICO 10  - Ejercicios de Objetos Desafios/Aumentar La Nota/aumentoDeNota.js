let estudiantes = [
  { nombre: "Juan", nota: 6 },
  { nombre: "Mario", nota: 8 },
  { nombre: "Sofía", nota: 2 }
];

function aumentarNota(estudiante) {
  const notaNueva = estudiante.nota + 2;
  return Math.min(notaNueva, 10); 
}

for (let i = 0; i < estudiantes.length; i++) {
  estudiantes[i].nota = aumentarNota(estudiantes[i]);
}

console.log(estudiantes);
