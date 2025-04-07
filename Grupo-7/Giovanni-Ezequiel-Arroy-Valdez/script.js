function animarCorazon(btn) {
    btn.classList.add('animated');
    setTimeout(() => btn.classList.remove('animated'), 500);
}

document.addEventListener('DOMContentLoaded', function () {
    // Corazones animados
    document.querySelectorAll('.corazon').forEach(btn => {
        btn.addEventListener('click', function () {
            animarCorazon(this);
        });
    });

    // Comentarios
    document.querySelectorAll('.comentarios button').forEach(btn => {
        btn.addEventListener('click', function () {
            const textarea = this.previousElementSibling;
            const texto = textarea.value.trim();
            if (texto !== '') {
                const comentario = document.createElement('p');
                comentario.textContent = texto;
                comentario.style.opacity = '0';
                comentario.style.transition = 'opacity 1s';
                this.parentNode.appendChild(comentario);
                setTimeout(() => comentario.style.opacity = '1', 100);
                textarea.value = '';
            }
        });
    });

    // Poema personalizado (opcional: agregar funcionalidad para publicar)
    const publicarBtn = document.querySelector('.mi-poema button');
    if (publicarBtn) {
        publicarBtn.addEventListener('click', function () {
            const textarea = this.previousElementSibling;
            const poema = textarea.value.trim();
            if (poema) {
                alert("¡Gracias por compartir tu poema!\n\n" + poema);
                textarea.value = '';
            }
        });
    }
});
