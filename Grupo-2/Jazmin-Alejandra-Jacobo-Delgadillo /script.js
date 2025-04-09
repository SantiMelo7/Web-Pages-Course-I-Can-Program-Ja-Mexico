function mostrarInfo(index) {
    const infoBoxes = document.querySelectorAll('.info');
  
    infoBoxes.forEach((info, i) => {
      // Mostrar solo la info del botón que se ha hecho clic
      if (i === index) {
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
      } else {
        info.style.display = 'none';
      }
    });
  }
   