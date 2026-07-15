// =========================================
// ELEMENTOS DEL DOM
// =========================================

const navbar = document.getElementById("navbar");
const openButton = document.getElementById("open-sidebar-button");

const media = window.matchMedia("(max-width: 700px)");

let ultimoScroll = 0;

// =========================================
// MOSTRAR / OCULTAR NAVBAR
// =========================================

function mostrarNavbar() {
    navbar.classList.remove("nav-hidden");
}

function ocultarNavbar() {
    navbar.classList.add("nav-hidden");
}

// =========================================
// EFECTO DE SCROLL (ESCRITORIO)
// =========================================

// =========================================
// NAVBAR CON OCULTADO AUTOMÁTICO
// =========================================

let temporizador;



function mostrarNavbarPC(){

    navbar.classList.remove("nav-hidden");


    clearTimeout(temporizador);


    // Si no estamos arriba, iniciar contador

    if(window.scrollY > 0){

        temporizador = setTimeout(()=>{

            navbar.classList.add("nav-hidden");

        },2000);

    }

}




function navbarScroll(){

    // En móvil no hacer nada

    if(media.matches){
        return;
    }


    // Si está arriba siempre visible

    if(window.scrollY === 0){

        clearTimeout(temporizador);

        navbar.classList.remove("nav-hidden");

        return;

    }


    // Si scrollea mostrar

    mostrarNavbarPC();

}




window.addEventListener("scroll", navbarScroll);




// Al cargar la página

navbar.classList.remove("nav-hidden");



// Cambio móvil/escritorio

media.addEventListener("change",()=>{

    if(media.matches){

        clearTimeout(temporizador);

        navbar.classList.remove("nav-hidden");

    }

});

// =========================================
// MENÚ LATERAL (MÓVIL)
// =========================================

function openSidebar() {

    navbar.classList.add("show");
    openButton.setAttribute("aria-expanded", "true");

}

function closeSidebar() {

    navbar.classList.remove("show");
    openButton.setAttribute("aria-expanded", "false");

}

// =========================================
// CAMBIO ENTRE ESCRITORIO Y MÓVIL
// =========================================

function updateNavbar(e) {

    const isMobile = e.matches;

    if (isMobile) {

        // En móvil no existe el efecto de ocultar al hacer scroll
        window.removeEventListener("scroll", navbarScroll);

        mostrarNavbar();

    }

    else {

        // En escritorio sí
        window.addEventListener("scroll", navbarScroll);

        navbarScroll();

    }

}

// =========================================
// EVENTOS
// =========================================

// Detectar cambio de tamaño de pantalla
media.addEventListener("change", updateNavbar);

// Cerrar el menú al tocar un enlace (solo móvil)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (media.matches) {
            closeSidebar();
        }

    });

});

// =========================================
// INICIALIZACIÓN
// =========================================

updateNavbar(media);