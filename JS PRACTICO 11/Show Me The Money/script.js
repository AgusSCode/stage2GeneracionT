const showMoneyButton = document.getElementById('showMoney');
const showMiamiButton = document.getElementById('showMiami');
const showMaiameeeButton = document.getElementById('showMaiameee');

const moneyImg = document.getElementById('moneyImg');
const miamiImg = document.getElementById('miamiImg');
const maiameeeImg = document.getElementById('maiameeeImg');

function toggleMoneyImg() {
    moneyImg.classList.toggle('oculto');
}

function toggleMiamiImg() {
    miamiImg.classList.toggle('oculto');
}

function toggleMaiameeeImg() {
    maiameeeImg.classList.toggle('oculto');
}

function hideImage() {
    this.classList.add('oculto');
}

showMoneyButton.addEventListener('click', toggleMoneyImg);
showMiamiButton.addEventListener('click', toggleMiamiImg);
showMaiameeeButton.addEventListener('click', toggleMaiameeeImg);

moneyImg.addEventListener('click', hideImage);
miamiImg.addEventListener('click', hideImage);
maiameeeImg.addEventListener('click', hideImage);
