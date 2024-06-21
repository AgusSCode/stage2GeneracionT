let diasViaje, presupuestoMaximo;

function esNumeroValido(valor) {
  return !isNaN(valor) && isFinite(valor);
}

do {
  diasViaje = prompt("¿Cuántos días vas a estar de viaje?");
  diasViaje = parseInt(diasViaje);
} while (!esNumeroValido(diasViaje));

do {
  presupuestoMaximo = prompt("¿Cuál es tu presupuesto máximo para el viaje?");
  presupuestoMaximo = parseFloat(presupuestoMaximo);
} while (!esNumeroValido(presupuestoMaximo));

let comida;

let comidasPorDia = 3;
let totalComidas = diasViaje * comidasPorDia;

let gastoPorComida = presupuestoMaximo / totalComidas;

alert("Podés gastar $" + gastoPorComida.toFixed(2) + " en cada comida para que te alcance la plata durante los " + diasViaje + " días de viaje.");
