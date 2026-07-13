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

// const navbar = document.querySelector("nav");

// let temporizador;

// window.addEventListener("scroll", () => {

//     // Si está arriba del todo, mantener oculta
//     if(window.scrollY === 0){
//         navbar.style.top = "-80px";
//         return;
//     }

//     // Mostrar al hacer scroll
//     navbar.style.top = "0";

//     clearTimeout(temporizador);

//     // Ocultar al detenerse
//     temporizador = setTimeout(() => {
//         navbar.style.top = "-80px";
//     }, 1000);

// });