const link = document.getElementById('link-guadalajara');
const colores = ['#ff4d4d', '#4da6ff', '#28a745', '#f39c12', '#9b59b6'];
let index = 0;

setInterval(() => {
    link.style.color = colores[index];
    index = (index + 1) % colores.length;
}, 1000); // cambia cada 1 segundo