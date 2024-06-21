function triplicador(x) {
  return x * 3;
}

function multiplicador(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function resto(x, y) {
  return x % y;
}

let triple = triplicador(5); // triple = 15
let producto = multiplicador(triple, 12); // producto = 15 * 12 = 180
let divisionResultado = division(producto, 12); // divisionResultado = 180 / 12 = 15
let restoFinal = resto(divisionResultado, 3); // restoFinal = 15 % 3 = 0

console.log(restoFinal); 
