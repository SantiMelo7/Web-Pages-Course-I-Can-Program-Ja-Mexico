document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('nav a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
           
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('activo'));
           
            this.classList.add('activo');
            
            const objetivo = this.getAttribute('href');
            if (objetivo === '#') return;
            
            const seccion = document.querySelector(objetivo);
            if (seccion) {
                window.scrollTo({
                    top: seccion.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    window.addEventListener('scroll', function() {
        const secciones = document.querySelectorAll('section');
        let actual = '';
        
        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop;
            const seccionAltura = seccion.clientHeight;
            
            if (pageYOffset >= (seccionTop - 150)) {
                actual = seccion.getAttribute('id');
            }
        });
        
        document.querySelectorAll('nav a').forEach(enlace => {
            enlace.classList.remove('activo');
            if (enlace.getAttribute('href') === `#${actual}`) {
                enlace.classList.add('activo');
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        
        const carrusel = document.querySelector('.carrusel');
        const carruselInner = document.querySelector('.carrusel-inner');
        const btnAnterior = document.getElementById('btnAnterior');
        const btnSiguiente = document.getElementById('btnSiguiente');
        const albums = document.querySelectorAll('.album');
        
        
        if (!carrusel || !carruselInner || !btnAnterior || !btnSiguiente || albums.length === 0) {
            console.error('ERROR: Elementos esenciales del carrusel no encontrados');
            return;
        }
    
       
        let currentIndex = 0;
        const gap = 20; 
        
       
        function calcularAnchoAlbum() {
            if (albums.length === 0) return 0;
            
            const primerAlbum = albums[0];
            const estilo = window.getComputedStyle(primerAlbum);
            
            return primerAlbum.offsetWidth + 
                   parseInt(estilo.marginLeft) + 
                   parseInt(estilo.marginRight) + 
                   gap;
        }
    
       
        function moverCarrusel() {
            const anchoAlbum = calcularAnchoAlbum();
            const desplazamiento = anchoAlbum * currentIndex;
            
            carruselInner.style.transform = `translateX(-${desplazamiento}px)`;
            console.log(`Movido a posición ${currentIndex}: ${desplazamiento}px`);
        }
    
      
        function configurarBotones() {
            
            btnSiguiente.addEventListener('click', function() {
                currentIndex = (currentIndex < albums.length - 1) ? currentIndex + 1 : 0;
                moverCarrusel();
            });
    
            
            btnAnterior.addEventListener('click', function() {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : albums.length - 1;
                moverCarrusel();
            });
    
            console.log('Botones configurados correctamente');
        }
    
       
        function inicializarCarrusel() {
          
            console.log('Ancho del botón anterior:', btnAnterior.offsetWidth);
            console.log('Ancho del botón siguiente:', btnSiguiente.offsetWidth);
            
           
            configurarBotones();
            
           
            moverCarrusel();
            
           
            window.addEventListener('resize', function() {
                console.log('Ventana redimensionada - recalculando...');
                moverCarrusel();
            });
    
            console.log('Carrusel inicializado correctamente');
        }
    
        
        inicializarCarrusel();
    
       
        console.log('Número de álbumes:', albums.length);
        console.log('Ancho calculado por álbum:', calcularAnchoAlbum());
        console.log('Botones:', {
            anterior: btnAnterior,
            siguiente: btnSiguiente
        });
    });
    
    
    const añoActual = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${añoActual} Rock Legends. Todos los derechos reservados.`;
    }
});