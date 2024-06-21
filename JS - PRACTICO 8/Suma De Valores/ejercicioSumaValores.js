function esNumeroValido(valor) {
  return !isNaN(valor) && isFinite(valor);
}

function pedirNumero(mensaje) {
  let numero;
  do {
    numero = prompt(mensaje);
    numero = parseFloat(numero);
  } while (!esNumeroValido(numero));
  return numero;
}

const num1 = pedirNumero("Por favor, ingresa el primer número:");
const num2 = pedirNumero("Por favor, ingresa el segundo número:");

if (esNumeroValido(num1) && esNumeroValido(num2)) {
  const resultado = num1 + num2;
  alert("La suma de " + num1 + " y " + num2 + " es: " + resultado);
} else {
  alert("Ha ocurrido un error. Asegúrate de ingresar números válidos.");
}
