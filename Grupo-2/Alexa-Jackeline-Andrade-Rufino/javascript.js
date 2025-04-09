document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel-inner');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const albums = document.querySelectorAll('.album');
    let currentIndex = 0;
    let albumsPerView = 4;

    function updateCarrusel() {
        const albumWidth = 100 / albumsPerView;
        const offset = -currentIndex * albumWidth;
        carrusel.style.transform = `translateX(${offset}%)`;
        
       
        if (btnAnterior && btnSiguiente) {
            btnAnterior.disabled = currentIndex === 0;
            btnSiguiente.disabled = currentIndex >= albums.length - albumsPerView;
        }
    }

    function moveCarrusel(direction) {
        if (direction === 'next' && currentIndex < albums.length - albumsPerView) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        updateCarrusel();
    }

   
    if (btnAnterior && btnSiguiente) {
        btnAnterior.addEventListener('click', () => moveCarrusel('prev'));
        btnSiguiente.addEventListener('click', () => moveCarrusel('next'));
    }

    function adjustAlbumsPerView() {
        if (window.innerWidth < 768) {
            albumsPerView = 1;
        } else if (window.innerWidth < 1024) {
            albumsPerView = 2;
        } else {
            albumsPerView = 4;
        }
        currentIndex = 0;
        updateCarrusel();
    }

   
    if (carrusel) {
        adjustAlbumsPerView();
        window.addEventListener('resize', adjustAlbumsPerView);
    }

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 