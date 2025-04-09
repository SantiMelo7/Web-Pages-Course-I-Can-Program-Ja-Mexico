function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
    });
    document.getElementById(id).classList.add('visible');
}
