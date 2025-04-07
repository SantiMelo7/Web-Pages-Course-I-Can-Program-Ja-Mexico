
// Resaltar el enlace del país actual
function resaltarPaisActual() {
    // Obtiene el nombre del país actual desde el título de la página
    const paisActual = document.title.toLowerCase(); // Usa el título de la página (por ejemplo, "Colombia")
    
    // Selecciona todos los enlaces del navbar
    const enlaces = document.querySelectorAll('.navbar-list a');
    
    // Recorre todos los enlaces para ver cuál coincide con el país actual
    enlaces.forEach(enlace => {
        const enlaceText = enlace.textContent.toLowerCase();
        
        // Si el texto del enlace coincide con el país actual, lo resalta
        if (enlaceText === paisActual) {
            enlace.classList.add('highlight'); // Añade una clase 'highlight' para resaltarlo
        }
    });
}

// Se ejecuta cuando la página se carga
window.onload = () => {
    mostrarMensajeBienvenida(); // Muestra el mensaje de bienvenida
    resaltarPaisActual(); // Resalta el enlace del país actual
};

