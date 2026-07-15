const openButton = document.getElementById("open-sidebar-button");
const navbar = document.getElementById("navbar");

const media = window.matchMedia("(max-width: 700px)");

// ======================
// Scroll para escritorio
// ======================

function navbarScroll() {

    const scrollActual = window.scrollY;

    // Siempre visible cerca del inicio
    if (scrollActual < 100) {
        navbar.style.top = "0";
        ultimoScroll = scrollActual;
        return;
    }

    // Bajando → ocultar
    if (scrollActual > ultimoScroll) {
        navbar.style.top = "-80px";
    }
    // Subiendo → mostrar
    else {
        navbar.style.top = "0";
    }

    ultimoScroll = scrollActual;
}

// ======================
// Detectar cambio de tamaño
// ======================

media.addEventListener("change", updateNavbar);

function updateNavbar(e) {

    const isMobile = e.matches;

    if (isMobile) {

        // Desactivar el efecto de scroll
        window.removeEventListener("scroll", navbarScroll);

        // Mantener visible la barra
        navbar.style.top = "0";

    } else {

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
}
function closeSidebar() {
    navbar.classList.remove("show");
    openButton.setAttribute("aria-expanded", "false");
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