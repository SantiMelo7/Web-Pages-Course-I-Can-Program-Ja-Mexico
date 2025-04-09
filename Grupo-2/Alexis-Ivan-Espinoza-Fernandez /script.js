document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".car-image");

    images.forEach(image => {
        image.addEventListener("click", () => {
            alert(`Has seleccionado el modelo: ${image.alt}`);
        });
    });
});
