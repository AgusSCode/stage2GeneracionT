const body = document.body;
const follower = document.getElementById('follower');

let isMouseDown = false;

body.addEventListener('mousedown', () => {
    isMouseDown = true;
});

body.addEventListener('mouseup', () => {
    isMouseDown = false;
});

body.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        follower.style.top = event.clientY + 'px';
        follower.style.left = event.clientX + 'px';
    }
});
