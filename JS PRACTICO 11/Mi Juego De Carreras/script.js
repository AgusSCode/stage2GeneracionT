const car1 = document.querySelector('#car1');
const car2 = document.querySelector('#car2');
const car3 = document.querySelector('#car3');
const car4 = document.querySelector('#car4');
const track = document.querySelector('#track');

let car1Position = 0;
let car2Position = 0;
let car3Position = 0;
let car4Position = 0;

const trackWidth = track.clientWidth;
const carWidth = car1.clientWidth;

function moveCar(event) {
    switch (event.key) {
        case 'a':
            car1Position += 10;
            car1.style.marginLeft = car1Position + 'px';
            checkWinner(car1Position, 'Rojo');
            break;
        case 'l':
            car2Position += 10;
            car2.style.marginLeft = car2Position + 'px';
            checkWinner(car2Position, 'Azul');
            break;
        case 'z':
            car3Position += 10;
            car3.style.marginLeft = car3Position + 'px';
            checkWinner(car3Position, 'Rojo 2');
            break;
        case 'm':
            car4Position += 10;
            car4.style.marginLeft = car4Position + 'px';
            checkWinner(car4Position, 'Azul 2');
            break;
    }
}

function checkWinner(position, color) {
    if (position + carWidth >= trackWidth) {
        alert(`¡El auto ${color} ganó la carrera!`);
        resetRace();
    }
}

function resetRace() {
    car1Position = 0;
    car2Position = 0;
    car3Position = 0;
    car4Position = 0;
    car1.style.marginLeft = '0px';
    car2.style.marginLeft = '0px';
    car3.style.marginLeft = '0px';
    car4.style.marginLeft = '0px';
}

window.addEventListener('keyup', moveCar);
