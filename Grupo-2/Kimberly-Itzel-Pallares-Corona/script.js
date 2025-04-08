function showContent(section) {
    // Ocultar todas las secciones de contenido
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(section).style.display = 'block';
}
