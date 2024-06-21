function fizzBuzz2() {
  const palabra1 = prompt('Ingrese la primera palabra para múltiplos de fizz_num:', 'Fizz');
  const palabra2 = prompt('Ingrese la segunda palabra para múltiplos de buzz_num:', 'Buzz');
  const fizz_num = parseInt(prompt('Ingrese el número para fizz_num:', '3'), 10);
  const buzz_num = parseInt(prompt('Ingrese el número para buzz_num:', '5'), 10);
  const contar_hasta = parseInt(prompt('Ingrese hasta qué número contar:', '100'), 10);

  let resultado = '';
  for (let i = 1; i <= contar_hasta; i++) {
    let palabra = '';
    if (i % fizz_num === 0) palabra += palabra1;
    if (i % buzz_num === 0) palabra += palabra2;
    resultado += palabra || i;
    if (i < contar_hasta) resultado += ', ';
  }
  alert(resultado);
}

// Llamar a la función para iniciar el programa
fizzBuzz2();
