const audio = new Audio('quevedo.mp3');

const button = document.getElementById('boton');

button.addEventListener('click', () => {
    audio.play();
});