const paragraphs = document.querySelectorAll('p');

function toggleResaltado() {
    this.classList.toggle('resaltado');
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('click', toggleResaltado);
}
