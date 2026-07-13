const musica = document.getElementById("musica");
const btn = document.getElementById("botonVolumen");

btn.addEventListener("click", () => {
    musica.muted = !musica.muted;

    if (!musica.muted) {
        musica.play();
    }

});

const boton = document.getElementById('botonVolumen');
const icono = document.getElementById('iconoVolumen');

boton.addEventListener('click', () => {
   icono.classList.toggle('fa-volume-off');
   icono.classList.toggle('fa-volume-high');
});
