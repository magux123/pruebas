const musica = document.getElementById("musica");
const btn = document.getElementById("botonVolumen");
const icono = document.getElementById("iconoVolumen");


btn.addEventListener("click",()=>{

    musica.muted = !musica.muted;


    if(!musica.muted){

        musica.play();

        icono.classList.remove("fa-volume-off");
        icono.classList.add("fa-volume-high");

    }else{

        icono.classList.remove("fa-volume-high");
        icono.classList.add("fa-volume-off");

    }

});