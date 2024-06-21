
alert("¡Bienvenido al sitio!");

// Función para validar el nombre
function obtenerNombre() {
    let nombre;
    while (true) {
        nombre = prompt("¿Cuál es tu nombre?");
        if (nombre && isNaN(nombre)) {
            break;
        } else {
            alert("Por favor, ingrese un nombre válido.");
        }
    }
    return nombre;
}

// Función para validar la edad
function obtenerEdad() {
    let edad;
    while (true) {
        edad = prompt("¿Cuántos años tienes?");
        if (edad && !isNaN(edad) && Number(edad) > 0) {
            break;
        } else {
            alert("Por favor, ingrese una edad válida.");
        }
    }
    return edad;
}


let nombre = obtenerNombre();
let mensajeSaludo = "Hola " + nombre + ", ¡es un placer tenerte aquí!";
alert(mensajeSaludo);


let edad = obtenerEdad();
let mensajeEdad = "Tienes " + edad + " años.";
console.log(mensajeEdad);

// Mensaje final con el nombre y la edad 
alert(mensajeSaludo + " " + mensajeEdad);
