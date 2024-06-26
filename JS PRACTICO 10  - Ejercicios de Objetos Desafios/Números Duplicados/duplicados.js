let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

for (let i = 0; i < numeros.length; i++) {
    numeros_duplicados[numeros[i]] = numeros[i] * 2;
}

console.log(numeros_duplicados);
