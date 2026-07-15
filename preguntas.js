// ===========================
// ACORDEÓN DE CATEGORÍAS
// ===========================

const categorias = document.querySelectorAll(".categoria");

categorias.forEach(categoria => {

    const botonCategoria = categoria.querySelector(".categoria-btn");

    botonCategoria.addEventListener("click", () => {

        const estabaAbierta = categoria.classList.contains("active");

        // Cerrar todas las categorías
        categorias.forEach(cat => {
            cat.classList.remove("active");
        });

        // Cerrar todas las preguntas
        document.querySelectorAll(".pregunta").forEach(pregunta => {
            pregunta.classList.remove("active");
        });

        // Si estaba cerrada, abrirla
        if (!estabaAbierta) {
            categoria.classList.add("active");
        }

    });

});

// ===========================
// ACORDEÓN DE PREGUNTAS
// ===========================

const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(pregunta => {

    const botonPregunta = pregunta.querySelector(".pregunta-btn");

    botonPregunta.addEventListener("click", () => {

        const estabaAbierta = pregunta.classList.contains("active");

        // Cerrar todas las preguntas
        preguntas.forEach(p => {
            p.classList.remove("active");
        });

        // Si estaba cerrada, abrirla
        if (!estabaAbierta) {
            pregunta.classList.add("active");
        }

    });

});