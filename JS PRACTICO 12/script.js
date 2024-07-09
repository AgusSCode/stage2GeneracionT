const words = [
  'californication', 'plataforma5', 'black', 'summer', 'flea', 
  'aeroplane', 'peppers', 'unlimited', 'arcadium', 'love', 
  'getaway', 'stadium', 'quixoticelixer', 'quarter', 'snow', 
  'dylan', 'zephyr', 'funky', 'chili'
];

let randomWord;
let time = 10;
let score = 0;
const timeSpan = document.querySelector('#timeSpan');
const scoreSpan = document.querySelector('#score');
const textInput = document.querySelector('#text');
const randomWordH1 = document.querySelector('#randomWord');
const endGameContainer = document.querySelector('#end-game-container');

function randomWords() {
  return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
  randomWord = randomWords();
  randomWordH1.textContent = randomWord;
}

addToDOM();

textInput.addEventListener('input', function (e) {
  const palabraIngresada = e.target.value;

  if (palabraIngresada === randomWord) {
    time += 3;
    e.target.value = '';
    addToDOM();
    updateScore();
  }
});

const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
  time--;
  timeSpan.textContent = `${time}s`;

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function updateScore() {
  score++;
  scoreSpan.textContent = score;
}

function gameOver() {
  endGameContainer.innerHTML = `
    <h1>Tiempo agotado</h1>
    <p>Tu puntuación final es ${score}</p>
    <button onclick="location.reload()">Jugar de nuevo</button>
  `;
  endGameContainer.style.display = 'block';
  document.querySelector('.main').style.display = 'none';
}
