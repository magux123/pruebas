const openButton = document.getElementById("open-sidebar-button");
const navbar = document.getElementById("navbar");

const media = window.matchMedia("(width < 700px)");

let temporizador;

// ======================
// Scroll para escritorio
// ======================

function navbarScroll() {

    // Mientras no hayas bajado 100px, la barra siempre permanece visible
    if (window.scrollY < 100) {
        navbar.style.top = "0";
        clearTimeout(temporizador);
        return;
    }

    // A partir de los 100px, mostrar la barra al hacer scroll
    navbar.style.top = "0";

    clearTimeout(temporizador);

    // Ocultarla después de 3 segundos sin hacer scroll
    temporizador = setTimeout(() => {
        navbar.style.top = "-80px";
    }, 2000);

}

// ======================
// Detectar cambio de tamaño
// ======================

media.addEventListener("change", updateNavbar);

function updateNavbar(e) {

    const isMobile = e.matches;

    if (isMobile) {

        // Configuración para celular
        navbar.setAttribute("inert", "");

        // Desactivar el efecto de scroll
        window.removeEventListener("scroll", navbarScroll);

        // Mantener visible la barra
        navbar.style.top = "0";

    } else {

        // Configuración para escritorio
        navbar.removeAttribute("inert");

        // Activar el efecto de scroll
        window.addEventListener("scroll", navbarScroll);

    }

}

// ======================
// Abrir y cerrar menú
// ======================

function openSidebar() {
    navbar.classList.add("show");
    openButton.setAttribute("aria-expanded", "true");
    navbar.removeAttribute("inert");
}

function closeSidebar() {
    navbar.classList.remove("show");
    openButton.setAttribute("aria-expanded", "false");
    navbar.setAttribute("inert", "");
}

// ======================
// Cerrar menú al hacer click
// ======================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeSidebar();
    });
});

// ======================
// Inicializar
// ======================

updateNavbar(media);