document.addEventListener("DOMContentLoaded", function() {
    let imagen = document.getElementById("paulo-img");

    imagen.addEventListener("click", function() {
        imagen.classList.add("fade-out"); // Activa la animación

        setTimeout(() => {
            window.location.href = "Pagina.html"; // Redirige a la página de historia
        }, 500); // Espera a que termine la animación antes de redirigir
    });
});