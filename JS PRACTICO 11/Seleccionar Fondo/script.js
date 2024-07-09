const input = document.getElementById('colorInput');
const body = document.body;

const colorMap = {
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow'
};

function changeBackgroundColor(event) {
    if (event.key === 'Enter') {
        const color = colorMap[input.value.toLowerCase()] || 'white';
        body.style.backgroundColor = color;
    } else if (event.key === 'Backspace') {
        body.style.backgroundColor = 'white';
    }
}

input.addEventListener('keydown', changeBackgroundColor);
