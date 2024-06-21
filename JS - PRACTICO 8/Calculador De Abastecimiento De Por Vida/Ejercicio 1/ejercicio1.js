let edadActual, edadMaxima, snackFavorito, snacksPorDia, precioPorSnack;

function esNumeroValido(valor) {
  return !isNaN(valor) && isFinite(valor);
}

do {
  edadActual = prompt("¿Cuál es tu edad actual?");
  edadActual = parseInt(edadActual);
} while (!esNumeroValido(edadActual));

do {
  edadMaxima = prompt("¿Cuál es tu edad máxima estimada?");
  edadMaxima = parseInt(edadMaxima);
} while (!esNumeroValido(edadMaxima));

snackFavorito = prompt("¿Cuál es tu snack favorito?");

do {
  snacksPorDia = prompt("¿Cuántos " + snackFavorito + " comes por día?");
  snacksPorDia = parseInt(snacksPorDia);
} while (!esNumeroValido(snacksPorDia));

let anosRestantes = edadMaxima - edadActual;
let snacksPorAno = snacksPorDia * 365;
let snacksRestantes = anosRestantes * snacksPorAno;

alert("Necesitarás " + snacksRestantes + " " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

do {
  precioPorSnack = prompt("¿Cuál es el precio de un " + snackFavorito + "?");
  precioPorSnack = parseFloat(precioPorSnack);
} while (!esNumeroValido(precioPorSnack));

let costoTotal = snacksRestantes * precioPorSnack;

alert("Gastarás $" + costoTotal.toFixed(2) + " en " + snackFavorito + " el resto de tu vida.");
