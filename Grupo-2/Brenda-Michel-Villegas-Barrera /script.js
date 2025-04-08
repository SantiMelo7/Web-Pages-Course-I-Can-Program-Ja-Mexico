/* Estilos generales del cuerpo */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #4e0d4b; /* Color morado oscuro */
    color: white;
    text-align: center;
    padding: 30px;
    font-size: 36px;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
    margin: 0;
    font-size: 48px;
}

p {
    font-size: 20px;
    margin-top: 10px;
}

/* Estilos del contenedor de botones */
.button-container {
    text-align: center;
    margin-top: 30px;
}

.button-container button {
    padding: 12px 24px;
    font-size: 18px;
    margin: 10px;
    background-color: #e74c3c; /* Rojo Lana */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.button-container button:hover {
    background-color: #c0392b;
}

/* Estilos para las secciones de contenido */
.content-section {
    display: none;
    padding: 20px;
    background-color: white;
    border: 1px solid #ddd;
    margin: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilo del título de las secciones */
.content-section h2 {
    font-size: 32px;
    margin-bottom: 15px;
    color: #4e0d4b; /* Color morado oscuro */
}

/* Estilos de la biografía */
.bio-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.bio-img {
    width: 50%;
    border-radius: 10px;
    margin-right: 20px;
}

/* Estilos de las imágenes de los álbumes */
.album-img {
    width: 60%;
    border-radius: 10px;
    margin-bottom: 20px;
}

.album-list {
    text-align: center;
}

.album-list ul {
    list-style-type: none;
    padding: 0;
    font-size: 18px;
}

/* Estilos para las imágenes del estilo visual */
.style-images {
    text-align: center;
}

.style-img {
    max-width: 60%;
    border-radius: 10px;
    margin-top: 20px;
}
