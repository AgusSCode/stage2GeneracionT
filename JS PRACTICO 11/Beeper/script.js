const beepButton = document.getElementById('beepButton');
const body = document.body;

const colors = ['yellow', 'red', 'blue'];
let currentColorIndex = 0;

function seEjecutaEnEvento() {
    body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    
    body.classList.remove(...colors);
    
    body.classList.add(colors[currentColorIndex]);
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

beepButton.addEventListener('click', seEjecutaEnEvento);
