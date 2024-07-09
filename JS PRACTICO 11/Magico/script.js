const magiaDiv = document.getElementById('magia');
const imagenMagica = document.getElementById('imagenMagica');

function ocultarImagen() {
    imagenMagica.style.display = 'none';
}

magiaDiv.addEventListener('mouseover', ocultarImagen);
