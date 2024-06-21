let edad;

function esNumeroValido(valor) {
  return !isNaN(valor) && isFinite(valor);
}

do {
  edad = prompt("¿Cuántos años tienes?");
  edad = parseInt(edad);
} while (!esNumeroValido(edad));

if (esNumeroValido(edad)) {
  let dias = edad * 365;
  alert("Tienes " + dias + " días de vida.");
} else {
  alert("Por favor, ingresa una edad válida.");
}
