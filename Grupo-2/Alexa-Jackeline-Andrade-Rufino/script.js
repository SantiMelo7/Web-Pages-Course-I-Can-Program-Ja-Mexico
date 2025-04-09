// Función para actualizar la línea indicadora
function updateIndicator() {
    const nav = document.querySelector('nav ul');
    const activeLink = document.querySelector('nav a.activo');
    if (activeLink) {
        const navRect = nav.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        const indicator = nav.querySelector('::after');
        
        // Actualizar la posición y el ancho de la línea
        nav.style.setProperty('--indicator-width', `${linkRect.width}px`);
        nav.style.setProperty('--indicator-position', `${linkRect.left - navRect.left}px`);
    }
}

// Actualizar la línea cuando se hace clic en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remover la clase activo de todos los enlaces
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('activo'));
        // Agregar la clase activo al enlace clickeado
        e.target.classList.add('activo');
        // Actualizar la línea indicadora
        updateIndicator();
    });
});

// Actualizar la línea cuando se carga la página
window.addEventListener('load', updateIndicator);

// Actualizar la línea cuando se redimensiona la ventana
window.addEventListener('resize', updateIndicator); 