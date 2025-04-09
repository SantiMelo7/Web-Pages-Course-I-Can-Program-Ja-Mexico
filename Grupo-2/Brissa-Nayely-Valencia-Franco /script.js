document.addEventListener('DOMContentLoaded', function() {
   
    const events = document.querySelectorAll('.event');

    // Agregar evento de clic a cada uno
    events.forEach(event => {
        event.addEventListener('click', function() {
            // Toggle de la clase "show" en el párrafo de descripción
            const description = event.querySelector('.description');
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        });
    });
});

