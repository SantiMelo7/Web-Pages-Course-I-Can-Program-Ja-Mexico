// Datos de ejemplo (en un proyecto real estos vendrían de una base de datos o API)
let sampleVideos = [
    {
        id: 1,
        title: "Fantasmas en el hospital abandonado",
        thumbnail: "https://i.ytimg.com/vi/l6IRtoxihs8/hqdefault.jpg",
        views: "1.2M",
        date: "Hace 2 semanas"
    },
    {
        id: 2,
        title: "OVNI filmado en México",
        thumbnail: "https://i.ytimg.com/vi/4O8d0RLzqc0/hqdefault.jpg",
        views: "856K",
        date: "Hace 1 mes"
    },
    {
        id: 3,
        title: "Pie Grande capturado en cámara",
        thumbnail: "https://i.ytimg.com/vi/CkKzM9YSDQQ/hqdefault.jpg",
        views: "2.3M",
        date: "Hace 3 días"
    },
    {
        id: 4,
        title: "Poltergeist en casa abandonada",
        thumbnail: "https://i.ytimg.com/vi/amkF_Z3mwng/hqdefault.jpg",
        views: "945K",
        date: "Hace 5 días"
    },
    {
        id: 5,
        title: "Misteriosas luces en el cielo",
        thumbnail: "https://i.ytimg.com/vi/awORaknepFI/hqdefault.jpg",
        views: "1.5M",
        date: "Hace 1 semana"
    },
    {
        id: 6,
        title: "Entidad captada en cámara de seguridad",
        thumbnail: "https://i.ytimg.com/vi/QfYmIIRRapQ/hqdefault.jpg",
        views: "2.1M",
        date: "Hace 4 días"
    }
];

let sampleImages = [
    {
        id: 1,
        url: "https://i.ytimg.com/vi/xNUxYhF1Xbg/hqdefault.jpg",
        caption: "Fotografía de supuesto fantasma en un bosque"
    },
    {
        id: 2,
        url: "https://i.ytimg.com/vi/APjn_M4zG8g/hqdefault.jpg",
        caption: "Esfera de luz no identificada"
    },
    {
        id: 3,
        url: "https://i.ytimg.com/vi/RR5hLctLrxo/hqdefault.jpg",
        caption: "Huellas misteriosas en la nieve"
    },
    {
        id: 4,
        url: "https://i.ytimg.com/vi/NXC-8BnOsOk/hqdefault.jpg",
        caption: "Sombra inexplicable en la pared"
    },
    {
        id: 5,
        url: "https://i.ytimg.com/vi/fkMcV3ivJJo/hqdefault.jpg",
        caption: "Orbe luminoso en iglesia antigua"
    },
    {
        id: 6,
        url: "https://i.ytimg.com/vi/cL8ejbGQrFE/hqdefault.jpg",
        caption: "La niña perro"
    }
];

// Cargar historias desde localStorage o usar las predeterminadas
let sampleStories = JSON.parse(localStorage.getItem('sampleStories')) || [
    {
        id: 1,
        title: "Mi encuentro con lo paranormal",
        author: "Juan Pérez",
        date: "15/10/2023",
        content: "Era una noche fría de invierno cuando escuché ruidos en el ático de mi casa. Al subir a investigar, vi una figura oscura que desapareció ante mis ojos. Desde entonces, objetos se mueven solos en mi casa..."
    },
    {
        id: 2,
        title: "El misterio del faro abandonado",
        author: "María González",
        date: "02/10/2023",
        content: "Durante mis vacaciones en la costa, decidí explorar un faro abandonado. Lo que encontré allí cambió mi percepción de la realidad para siempre. Luces que no provenían de ninguna fuente, voces susurrantes..."
    },
    {
        id: 3,
        title: "La casa de los espejos",
        author: "Carlos Rodríguez",
        date: "20/10/2023",
        content: "En una vieja casa de campo, encontré un espejo antiguo. Cada noche, a las 3 AM, podía ver reflejada una figura que no era mi reflejo. Un día decidí investigar y lo que descubrí me dejó sin palabras..."
    },
    {
        id: 4,
        title: "El tren fantasma",
        author: "Ana Martínez",
        date: "18/10/2023",
        content: "Cerca de mi pueblo hay una vía de tren abandonada. Los ancianos cuentan que en las noches de luna llena se puede escuchar el sonido de un tren que dejó de funcionar hace 50 años..."
    },
    {
        id: 5,
        title: "La habitación 237",
        author: "Luis Sánchez",
        date: "25/10/2023",
        content: "Durante mi estadía en un hotel antiguo, me asignaron la habitación 237. Lo que viví allí durante esa noche me hizo cuestionar todo lo que creía saber sobre la realidad..."
    }
];

// Cargar posts del foro desde localStorage o usar los predeterminados
let forumPosts = JSON.parse(localStorage.getItem('forumPosts')) || [
    {
        id: 1,
        title: "¿Alguien ha tenido experiencias con doppelgängers?",
        author: "Carlos M.",
        date: "20/10/2023 14:30",
        content: "Hace un mes vi a mi vecino en el supermercado, pero cuando llegué a casa, él estaba allí y me dijo que no había salido en todo el día. ¿Alguien ha tenido una experiencia similar?",
        likes: 8,
        comments: 5
    },
    {
        id: 2,
        title: "Teorías sobre los círculos en los cultivos",
        author: "Ana L.",
        date: "18/10/2023 09:15",
        content: "He estado investigando los círculos en los cultivos durante años. Algunos son obviamente falsos, pero otros muestran patrones matemáticos complejos y cambios en la estructura celular de las plantas que la ciencia no puede explicar fácilmente. ¿Qué opinan?",
        likes: 12,
        comments: 7
    },
    {
        id: 3,
        title: "Mi experiencia con la Ouija",
        author: "María R.",
        date: "22/10/2023 16:45",
        content: "Hace unos días, con un grupo de amigos, decidimos probar la Ouija. Lo que sucedió esa noche superó todas nuestras expectativas. ¿Alguien más ha tenido experiencias similares?",
        likes: 15,
        comments: 9
    },
    {
        id: 4,
        title: "Fenómenos paranormales en hospitales abandonados",
        author: "Roberto P.",
        date: "24/10/2023 11:20",
        content: "Como investigador paranormal, he visitado varios hospitales abandonados. En uno en particular, captamos en video lo que parece ser una entidad moviéndose por los pasillos. ¿Alguien más ha investigado estos lugares?",
        likes: 20,
        comments: 12
    },
    {
        id: 5,
        title: "Sueños premonitorios",
        author: "Laura S.",
        date: "26/10/2023 13:15",
        content: "Desde pequeña he tenido sueños que luego se hacen realidad. No son coincidencias, son demasiado específicos. ¿Hay más personas con esta capacidad?",
        likes: 18,
        comments: 8
    }
];

// Limpiar datos antiguos de comentarios y likes
localStorage.removeItem('postComments');
localStorage.removeItem('commentLikes');
localStorage.removeItem('likedComments');

// Cargar comentarios desde localStorage o usar los predeterminados
let postComments = JSON.parse(localStorage.getItem('postComments')) || {};

// Cargar usuarios desde localStorage o usar los predeterminados
let users = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, username: "admin", password: "admin123" },
    { id: 2, username: "usuario", password: "usuario123" }
];

// Usuario actual
let currentUser = null;

// Posts que han recibido like por usuario
let likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || {};

// Cargar comentarios de videos desde localStorage o usar un objeto vacío
let videoComments = JSON.parse(localStorage.getItem('videoComments')) || {};

// Cargar likes de comentarios desde localStorage o usar un objeto vacío
let commentLikes = {};
let likedComments = {};

// Función para determinar la página actual
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page || 'cuerpo.html';
}

// Función para cargar el contenido específico de la página
function loadPageContent() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'videos.html':
            loadVideos();
            break;
        case 'imagenes.html':
            loadImages();
            break;
        case 'historias.html':
            loadStories();
            setupStoryForm();
            break;
        case 'foro.html':
            loadForumPosts();
            setupPostForm();
            break;
        case 'cuerpo.html':
            // La página de inicio ya tiene su contenido estático
            break;
        default:
            window.location.href = 'cuerpo.html';
    }
}

// Función para cargar videos
function loadVideos() {
    const videoGrid = document.querySelector('.video-grid');
    if (!videoGrid) return;
    
    videoGrid.innerHTML = '';
    
    sampleVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail-container" data-id="${video.id}">
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                <div class="play-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.views} vistas • ${video.date}</p>
                <div class="video-actions">
                    <button class="like-btn" data-id="${video.id}">
                        <i class="fas fa-thumbs-up"></i> Me gusta
                    </button>
                    <button class="comment-btn" data-id="${video.id}">
                        <i class="fas fa-comment"></i> Comentar
                    </button>
                </div>
            </div>
            <div class="comments-section" id="comments-section-${video.id}" style="display: none;">
                <div class="comments-container"></div>
                <form class="comment-form" data-video-id="${video.id}">
                    <textarea placeholder="Escribe tu comentario aquí..." required></textarea>
                    <button type="submit">Publicar comentario</button>
                </form>
            </div>
        `;
        videoGrid.appendChild(videoCard);
        
        // Cargar comentarios existentes
        loadVideoComments(video.id);
    });
    
    setupVideoInteractions();
}

// Función para abrir el modal de video
function openVideoModal(videoId) {
    const video = sampleVideos.find(v => v.id === videoId);
    if (!video) return;

    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const videoTitle = document.getElementById('video-title');
    const videoMeta = document.getElementById('video-meta');
    const likeBtn = modal.querySelector('.like-btn');
    const commentBtn = modal.querySelector('.comment-btn');
    const commentsContainer = modal.querySelector('.comments-container');
    const commentForm = modal.querySelector('.comment-form');

    // Configurar el video con parámetros adicionales para mejorar la experiencia
    const videoUrl = `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
    videoFrame.src = videoUrl;
    videoFrame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    videoFrame.setAttribute('allowfullscreen', 'true');
    
    videoTitle.textContent = video.title;
    videoMeta.textContent = `${video.views} vistas • ${video.date}`;

    // Configurar botones
    likeBtn.setAttribute('data-id', videoId);
    commentBtn.setAttribute('data-id', videoId);
    commentForm.setAttribute('data-video-id', videoId);

    // Cargar comentarios
    loadVideoComments(videoId, commentsContainer);

    // Mostrar el modal
    modal.style.display = 'block';

    // Configurar eventos
    setupVideoModalInteractions(videoId);
}

// Función para configurar interacciones del modal de video
function setupVideoModalInteractions(videoId) {
    const modal = document.getElementById('video-modal');
    const closeBtn = modal.querySelector('.close-modal');
    const likeBtn = modal.querySelector('.like-btn');
    const commentBtn = modal.querySelector('.comment-btn');
    const commentForm = modal.querySelector('.comment-form');
    const commentsSection = modal.querySelector('.comments-section');
    const videoFrame = document.getElementById('video-frame');

    // Cerrar modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        videoFrame.src = ''; // Detener el video
    };

    // Cerrar al hacer clic fuera del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            videoFrame.src = ''; // Detener el video
        }
    };

    // Configurar like
    likeBtn.onclick = function() {
        if (!currentUser) {
            showModal('login-modal');
            return;
        }
        handleVideoLike(videoId);
    };

    // Configurar comentarios
    commentBtn.onclick = function() {
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
        commentBtn.innerHTML = commentsSection.style.display === 'none' ? 
            '<i class="fas fa-comment"></i> Comentar' : 
            '<i class="fas fa-comment"></i> Ocultar comentarios';
    };

    // Configurar formulario de comentarios
    commentForm.onsubmit = function(e) {
        e.preventDefault();
        if (!currentUser) {
            showModal('login-modal');
            return;
        }
        const content = this.querySelector('textarea').value;
        if (content.trim()) {
            addVideoComment(videoId, content);
            this.querySelector('textarea').value = '';
            loadVideoComments(videoId, commentsContainer);
        }
    };
}

// Función para cargar comentarios de un video
function loadVideoComments(videoId, container = null) {
    const commentsContainer = container || document.querySelector(`#comments-section-${videoId} .comments-container`);
    if (!commentsContainer) return;
    
    commentsContainer.innerHTML = '';
    
    if (videoComments[videoId]) {
        videoComments[videoId].forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-meta">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${comment.date}</span>
                    ${canEditComment(comment) ? `
                        <button class="edit-comment-btn" data-id="${comment.id}" data-video-id="video-${videoId}">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                    ` : ''}
                </div>
                <div class="comment-content">${comment.content}</div>
                <div class="comment-actions">
                    <button class="like-comment-btn ${isCommentLiked(`video-${videoId}`, comment.id) ? 'liked' : ''}" 
                            data-video-id="video-${videoId}" 
                            data-comment-id="${comment.id}">
                        <i class="fas fa-thumbs-up"></i> ${getCommentLikes(`video-${videoId}`, comment.id)}
                    </button>
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });
    }
    
    // Configurar interacciones de comentarios
    setupCommentInteractions(`video-${videoId}`);
}

// Función para configurar interacciones de video
function setupVideoInteractions() {
    // Configurar clic en la miniatura para abrir el modal
    document.querySelectorAll('.video-thumbnail-container').forEach(container => {
        container.addEventListener('click', function() {
            const videoId = parseInt(this.getAttribute('data-id'));
            openVideoModal(videoId);
        });
    });

    // Configurar botones de like
    document.querySelectorAll('.video-card .like-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que se abra el modal
            if (!currentUser) {
                showModal('login-modal');
                return;
            }
            const videoId = this.getAttribute('data-id');
            handleVideoLike(videoId);
        });
    });
    
    // Configurar botones de comentarios
    document.querySelectorAll('.video-card .comment-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que se abra el modal
            if (!currentUser) {
                showModal('login-modal');
                return;
            }
            const videoId = this.getAttribute('data-id');
            toggleVideoComments(videoId);
        });
    });
    
    // Configurar formularios de comentarios
    document.querySelectorAll('.video-card .comment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Evitar que se abra el modal
            
            const savedUser = localStorage.getItem('currentUser');
            if (!savedUser) {
                showModal('login-modal');
                return;
            }
            
            const videoId = parseInt(this.getAttribute('data-video-id'));
            const content = this.querySelector('textarea').value;
            
            if (content.trim()) {
                addVideoComment(videoId, content);
                this.querySelector('textarea').value = '';
            }
        });
    });
}

// Función para mostrar/ocultar comentarios de video
function toggleVideoComments(videoId) {
    const commentsSection = document.getElementById(`comments-section-${videoId}`);
    const commentBtn = document.querySelector(`.comment-btn[data-id="${videoId}"]`);
    
    if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block';
        commentBtn.innerHTML = `<i class="fas fa-comment"></i> Ocultar comentarios`;
    } else {
        commentsSection.style.display = 'none';
        commentBtn.innerHTML = `<i class="fas fa-comment"></i> Comentar`;
    }
}

// Función para añadir comentario a video
function addVideoComment(videoId, content) {
    if (!videoComments[videoId]) {
        videoComments[videoId] = [];
    }
    
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
        showModal('login-modal');
        return;
    }
    
    const newComment = {
        id: videoComments[videoId].length + 1,
        author: JSON.parse(savedUser).username,
        date: new Date().toLocaleString(),
        content: content
    };
    
    videoComments[videoId].push(newComment);
    
    // Guardar en localStorage
    localStorage.setItem('videoComments', JSON.stringify(videoComments));
    
    // Recargar los comentarios
    loadVideoComments(videoId);
}

// Función para cargar imágenes
function loadImages() {
    const imageGallery = document.querySelector('.image-gallery');
    if (!imageGallery) return;
    
    imageGallery.innerHTML = '';
    
    sampleImages.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `
            <img src="${image.url}" alt="${image.caption}">
            <div class="image-caption">
                <p>${image.caption}</p>
            </div>
        `;
        imageGallery.appendChild(imageItem);
    });
}

// Función para cargar historias
function loadStories() {
    const storiesContainer = document.querySelector('.stories-container');
    if (!storiesContainer) return;
    
    storiesContainer.innerHTML = '';
    
    sampleStories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <h3>${story.title}</h3>
            <div class="story-meta">Por ${story.author} • ${story.date}</div>
            <div class="expandable-text">
                <p>${story.content}</p>
            </div>
            <button class="read-more">Leer más</button>
        `;
        storiesContainer.appendChild(storyCard);
    });
    
    setupExpandableText();
}

// Función para expandir/contraer texto
function setupExpandableText() {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const storyContent = this.previousElementSibling;
            storyContent.classList.toggle('expanded');
            
            if (storyContent.classList.contains('expanded')) {
                this.textContent = 'Mostrar menos';
            } else {
                this.textContent = 'Leer más';
            }
        });
    });
}

// Función para cargar posts del foro
function loadForumPosts() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;
    
    postsContainer.innerHTML = '';
    
    forumPosts.forEach(post => {
        const hasLiked = currentUser && likedPosts[currentUser.id] && likedPosts[currentUser.id].includes(post.id);
        const commentCount = postComments[post.id] ? postComments[post.id].length : 0;
        
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h4>${post.title}</h4>
            <div class="post-meta">
                <span>Por ${post.author}</span>
                <span>${post.date}</span>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
            </div>
            <div class="post-actions">
                <button class="like-btn ${hasLiked ? 'liked' : ''}" data-id="${post.id}">
                    <i class="fas fa-thumbs-up"></i> Me gusta (${post.likes})
                </button>
                ${currentUser ? `
                    <button class="comment-btn" data-id="${post.id}">
                        <i class="fas fa-comment"></i> Comentar (${commentCount})
                    </button>
                ` : `
                    <div class="login-required">
                        <a href="#" class="login-required-btn">Inicia sesión</a> para comentar
                    </div>
                `}
                <button class="share-btn">
                    <i class="fas fa-share"></i> Compartir
                </button>
            </div>
            <div class="comments-section" id="comments-section-${post.id}" style="display: none;">
                <div class="comments-container"></div>
                ${currentUser ? `
                    <form class="comment-form" data-post-id="${post.id}">
                        <textarea placeholder="Escribe tu comentario aquí..." required></textarea>
                        <button type="submit">Publicar comentario</button>
                    </form>
                ` : ''}
            </div>
        `;
        postsContainer.appendChild(postCard);
        
        // Cargar comentarios existentes
        loadComments(post.id);
    });
    
    // Configurar eventos para los botones de like
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            const postId = parseInt(this.getAttribute('data-id'));
            handleLike(postId);
        });
    });
    
    // Configurar eventos para los botones de comentarios
    document.querySelectorAll('.comment-btn').forEach(button => {
        button.addEventListener('click', function() {
            const postId = parseInt(this.getAttribute('data-id'));
            toggleComments(postId);
        });
    });
    
    // Configurar eventos para los formularios de comentarios
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const postId = parseInt(this.getAttribute('data-post-id'));
            const content = this.querySelector('textarea').value;
            
            if (content.trim()) {
                addComment(postId, content);
                this.querySelector('textarea').value = '';
            }
        });
    });
    
    // Configurar eventos para los botones de login requerido
    document.querySelectorAll('.login-required-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showModal('login-modal');
        });
    });
}

// Función para cargar comentarios
function loadComments(postId) {
    const commentsContainer = document.querySelector(`#comments-section-${postId} .comments-container`);
    if (!commentsContainer) return;
    
    commentsContainer.innerHTML = '';
    
    if (postComments[postId]) {
        postComments[postId].forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-meta">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${comment.date}</span>
                    ${canEditComment(comment) ? `
                        <button class="edit-comment-btn" data-id="${comment.id}">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                    ` : ''}
                </div>
                <div class="comment-content">${comment.content}</div>
                <div class="comment-actions">
                    <button class="like-comment-btn ${isCommentLiked(postId, comment.id) ? 'liked' : ''}" 
                            data-post-id="${postId}" 
                            data-comment-id="${comment.id}">
                        <i class="fas fa-thumbs-up"></i> ${getCommentLikes(postId, comment.id)}
                    </button>
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });
    }
    
    // Configurar interacciones de comentarios
    setupCommentInteractions(postId);
}

// Función para mostrar/ocultar comentarios
function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-section-${postId}`);
    const commentBtn = document.querySelector(`.comment-btn[data-id="${postId}"]`);
    const commentCount = postComments[postId] ? postComments[postId].length : 0;
    
    if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block';
        commentBtn.innerHTML = `<i class="fas fa-comment"></i> Ocultar comentarios (${commentCount})`;
    } else {
        commentsSection.style.display = 'none';
        commentBtn.innerHTML = `<i class="fas fa-comment"></i> Comentar (${commentCount})`;
    }
}

// Función para añadir un comentario
function addComment(postId, content) {
    if (!postComments[postId]) {
        postComments[postId] = [];
    }
    
    const savedUser = localStorage.getItem('currentUser');
    if (!savedUser) {
        showModal('login-modal');
        return;
    }
    
    const newComment = {
        id: postComments[postId].length + 1,
        author: JSON.parse(savedUser).username,
        date: new Date().toLocaleString(),
        content: content
    };
    
    postComments[postId].push(newComment);
    
    // Guardar en localStorage
    localStorage.setItem('postComments', JSON.stringify(postComments));
    
    // Actualizar el contador de comentarios
    const post = forumPosts.find(p => p.id === postId);
    if (post) {
        post.comments++;
        
        // Guardar posts actualizados
        localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
        
        // Actualizar el botón de comentarios
        const commentButton = document.querySelector(`.comment-btn[data-id="${postId}"]`);
        if (commentButton) {
            commentButton.innerHTML = `<i class="fas fa-comment"></i> Comentar (${post.comments})`;
        }
    }
    
    // Recargar los comentarios
    loadComments(postId);
}

// Función para manejar el like a posts
function handleLike(postId) {
    if (!currentUser) {
        showModal('login-modal');
        return;
    }
    
    // Inicializar estructura si no existe
    if (!likedPosts[currentUser.id]) {
        likedPosts[currentUser.id] = [];
    }
    
    const post = forumPosts.find(p => p.id === postId);
    if (!post) return;
    
    const isLiked = likedPosts[currentUser.id].includes(postId);
    const likeButton = document.querySelector(`.like-btn[data-id="${postId}"]`);
    
    if (isLiked) {
        // Quitar like
        likedPosts[currentUser.id] = likedPosts[currentUser.id].filter(id => id !== postId);
        post.likes--;
        likeButton.classList.remove('liked');
    } else {
        // Agregar like
        likedPosts[currentUser.id].push(postId);
        post.likes++;
        likeButton.classList.add('liked');
    }
        
    // Actualizar UI
            likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> Me gusta (${post.likes})`;
    
    // Guardar cambios
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
}

// Función para manejar el envío de nuevas historias
function setupStoryForm() {
    const storyForm = document.getElementById('story-form');
    if (!storyForm) return;

    storyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Verificar si hay un usuario en localStorage
        const savedUser = localStorage.getItem('currentUser');
        if (!savedUser) {
            showModal('login-modal');
            return;
        }
        
        const title = document.getElementById('story-title').value;
        const content = document.getElementById('story-content').value;
        
        if (title && content) {
            const newStory = {
                id: sampleStories.length + 1,
                title: title,
                author: JSON.parse(savedUser).username,
                date: new Date().toLocaleDateString(),
                content: content
            };
            
            sampleStories.unshift(newStory);
            // Guardar en localStorage
            localStorage.setItem('sampleStories', JSON.stringify(sampleStories));
            
            storyForm.reset();
            loadStories();
            
            // Mostrar mensaje de éxito
            showSuccessMessage(storyForm, '¡Historia publicada con éxito!');
        }
    });
}

// Función para manejar el envío de nuevos posts
function setupPostForm() {
    const postForm = document.getElementById('post-form');
    if (!postForm) return;
    
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const savedUser = localStorage.getItem('currentUser');
        if (!savedUser) {
            showModal('login-modal');
            return;
        }
        
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        
        if (title && content) {
            const newPost = {
                id: forumPosts.length + 1,
                title: title,
                author: JSON.parse(savedUser).username,
                date: new Date().toLocaleString(),
                content: content,
                likes: 0,
                comments: 0
            };
            
            forumPosts.unshift(newPost);
            // Guardar en localStorage
            localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
            
            postForm.reset();
            loadForumPosts();
            
            // Scroll al nuevo post
            document.querySelector('.post-card').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Función para verificar credenciales
function authenticate(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Guardar el usuario en localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
    return null;
}

// Función para registrar nuevo usuario
function registerUser(username, password) {
    if (users.some(user => user.username === username)) {
        return { success: false, message: "El nombre de usuario ya existe" };
    }
    
    const newUser = {
        id: users.length + 1,
        username,
        password
    };
    
    users.push(newUser);
    // Guardar usuarios actualizados en localStorage
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true, user: newUser };
}

// Función para mostrar mensaje de éxito
function showSuccessMessage(form, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    // Remover mensaje anterior si existe
    const existingSuccess = form.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    form.insertBefore(successDiv, form.querySelector('button'));
    
    // Remover el mensaje después de 2 segundos
    setTimeout(() => {
        successDiv.remove();
    }, 2000);
}

// Función para mostrar mensaje de error
function showErrorMessage(form, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Remover mensaje anterior si existe
    const existingError = form.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    form.insertBefore(errorDiv, form.querySelector('button'));
    
    // Remover el mensaje después de 2 segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 2000);
}

// Función para mostrar ventana de bienvenida
function showWelcomeModal(username) {
    const welcomeModal = document.createElement('div');
    welcomeModal.className = 'modal welcome-modal';
    welcomeModal.innerHTML = `
        <div class="modal-content welcome-content">
            <h2>¡Bienvenido!</h2>
            <p>Inicio de sesión exitoso</p>
            <p class="username">${username}</p>
        </div>
    `;
    document.body.appendChild(welcomeModal);
    
    // Mostrar el modal
    welcomeModal.style.display = 'block';
    
    // Cerrar el modal después de 2 segundos
    setTimeout(() => {
        welcomeModal.remove();
    }, 2000);
}

// Función para manejar el inicio de sesión
function handleLogin(username, password) {
    const user = authenticate(username, password);
    if (user) {
        currentUser = user;
        closeAllModals();
        updateUIForLoggedInUser();
        showWelcomeModal(user.username);
        return true;
    }
    return false;
}

// Función para manejar el registro
function handleRegister(username, password, confirmPassword) {
    if (password !== confirmPassword) {
        return { success: false, message: "Las contraseñas no coinciden" };
    }
    
    return registerUser(username, password);
}

// Función para actualizar la UI cuando el usuario inicia sesión
function updateUIForLoggedInUser() {
    // Ocultar botones de login
    document.querySelectorAll('.open-login').forEach(btn => {
        btn.style.display = 'none';
    });
    
    // Mostrar nombre de usuario en el header
    const userHeader = document.createElement('div');
    userHeader.className = 'user-header';
    userHeader.innerHTML = `
        <span>Bienvenido, ${currentUser.username}</span>
        <button id="logout-btn">Cerrar sesión</button>
    `;
    
    const header = document.querySelector('header');
    const existingUserHeader = document.querySelector('.user-header');
    if (existingUserHeader) {
        header.replaceChild(userHeader, existingUserHeader);
    } else {
        header.appendChild(userHeader);
    }
    
    document.getElementById('logout-btn').addEventListener('click', logout);
    
    // Recargar el foro solo si estamos en la página del foro
    const currentPage = getCurrentPage();
    if (currentPage === 'foro.html') {
    loadForumPosts();
    }
}

// Función para cerrar sesión
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.querySelector('.user-header')?.remove();
    
    // Mostrar botón de login
    document.querySelectorAll('.open-login').forEach(btn => {
        btn.style.display = 'block';
    });
    
    // Recargar el foro para mostrar opciones de no logueado
    loadForumPosts();
}

// Función para mostrar el modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Función para cerrar todos los modales
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Configurar los modales y formularios
function setupModals() {
    // Botón para abrir modal de login
    const loginButtons = document.querySelectorAll('.open-login');
    loginButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showModal('login-modal');
        });
    });
    
    // Botón para abrir modal de registro
    const registerLink = document.getElementById('register-link');
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        closeAllModals();
        showModal('register-modal');
    });
    }
    
    // Cerrar modales al hacer clic en la X
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', closeAllModals);
    });
    
    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
    
    // Formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (handleLogin(username, password)) {
                this.reset();
                showSuccessMessage(this, 'Inicio de sesión exitoso');
                setTimeout(() => {
                    closeAllModals();
                }, 2000);
        } else {
                showErrorMessage(this, 'Usuario o contraseña incorrectos');
        }
    });
    }
    
    // Formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('new-username').value;
        const password = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        const result = handleRegister(username, password, confirmPassword);
        if (result.success) {
                this.reset();
                showSuccessMessage(this, 'Registro exitoso');
                setTimeout(() => {
            closeAllModals();
            showModal('login-modal');
            document.getElementById('username').value = username;
            document.getElementById('password').focus();
                }, 2000);
        } else {
                showErrorMessage(this, result.message || 'Error en el registro');
        }
    });
    }
}

// Smooth scrolling para los enlaces del menú
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // No aplicar smooth scrolling a los botones que necesitan prevenir el comportamiento por defecto
            if (this.classList.contains('login-required-btn')) return;
            if (this.id === 'register-link') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para manejar likes de video
function handleVideoLike(videoId) {
    const button = document.querySelector(`.video-card .like-btn[data-id="${videoId}"]`);
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.innerHTML = '<i class="fas fa-thumbs-up"></i> Me gusta';
    } else {
        button.classList.add('liked');
        button.innerHTML = '<i class="fas fa-thumbs-up"></i> Me gusta (1)';
    }
}

// Función para configurar interacciones de comentarios
function setupCommentInteractions(parentId) {
    // Configurar botones de editar comentario
    document.querySelectorAll('.edit-comment-btn').forEach(button => {
        button.addEventListener('click', function() {
            const commentId = parseInt(this.getAttribute('data-id'));
            const videoId = this.getAttribute('data-video-id');
            const commentElement = this.closest('.comment');
            const contentElement = commentElement.querySelector('.comment-content');
            const currentContent = contentElement.textContent;
            
            // Crear formulario de edición
            const editForm = document.createElement('form');
            editForm.className = 'edit-comment-form';
            editForm.innerHTML = `
                <textarea required>${currentContent}</textarea>
                <div class="edit-actions">
                    <button type="submit">Guardar</button>
                    <button type="button" class="cancel-edit">Cancelar</button>
                </div>
            `;
            
            // Reemplazar contenido con formulario
            contentElement.style.display = 'none';
            contentElement.parentNode.insertBefore(editForm, contentElement.nextSibling);
            
            // Configurar eventos del formulario
            editForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const newContent = this.querySelector('textarea').value;
                
                if (newContent.trim()) {
                    // Actualizar comentario
                    updateComment(videoId || parentId, commentId, newContent);
                    
                    // Restaurar vista
                    contentElement.textContent = newContent;
                    contentElement.style.display = 'block';
                    editForm.remove();
                }
            });
            
            // Configurar botón cancelar
            editForm.querySelector('.cancel-edit').addEventListener('click', function() {
                contentElement.style.display = 'block';
                editForm.remove();
            });
        });
    });
    
    // Configurar botones de like a comentarios
    document.querySelectorAll(`.like-comment-btn[data-post-id="${parentId}"]`).forEach(button => {
        // Remover eventos anteriores
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Agregar nuevo evento
        newButton.addEventListener('click', function() {
            if (!currentUser) {
                showModal('login-modal');
                return;
            }
            
            const commentId = parseInt(this.getAttribute('data-comment-id'));
            handleCommentLike(parentId, commentId);
        });
    });
}

// Función para verificar si un comentario puede ser editado
function canEditComment(comment) {
    if (!currentUser) return false;
    
    const commentDate = new Date(comment.date);
    const now = new Date();
    const diffMinutes = (now - commentDate) / (1000 * 60);
    
    return comment.author === currentUser.username && diffMinutes <= 2;
}

// Función para verificar si un comentario ha sido likeado
function isCommentLiked(parentId, commentId) {
    if (!currentUser) return false;
    const likedComments = JSON.parse(localStorage.getItem('likedComments') || '{}');
    const userLikes = likedComments[currentUser.id] || {};
    return userLikes[parentId]?.includes(commentId) || false;
}

// Función para obtener el número de likes de un comentario
function getCommentLikes(parentId, commentId) {
    const commentLikes = JSON.parse(localStorage.getItem('commentLikes') || '{}');
    return commentLikes[parentId]?.[commentId] || 0;
}

// Función para manejar el like de un comentario
function handleCommentLike(parentId, commentId) {
    if (!currentUser) {
        showModal('login-modal');
        return;
    }
    
    let likedComments = JSON.parse(localStorage.getItem('likedComments') || '{}');
    let commentLikes = JSON.parse(localStorage.getItem('commentLikes') || '{}');
    
    // Inicializar estructuras si no existen
    if (!likedComments[currentUser.id]) likedComments[currentUser.id] = {};
    if (!likedComments[currentUser.id][parentId]) likedComments[currentUser.id][parentId] = [];
    if (!commentLikes[parentId]) commentLikes[parentId] = {};
    if (!commentLikes[parentId][commentId]) commentLikes[parentId][commentId] = 0;
    
    const isLiked = likedComments[currentUser.id][parentId].includes(commentId);
    
    if (isLiked) {
        // Quitar like
        likedComments[currentUser.id][parentId] = likedComments[currentUser.id][parentId].filter(id => id !== commentId);
        commentLikes[parentId][commentId]--;
    } else {
        // Agregar like
        likedComments[currentUser.id][parentId].push(commentId);
        commentLikes[parentId][commentId]++;
    }
    
    // Guardar cambios
    localStorage.setItem('likedComments', JSON.stringify(likedComments));
    localStorage.setItem('commentLikes', JSON.stringify(commentLikes));
    
    // Actualizar UI
    const likeButton = document.querySelector(`.like-comment-btn[data-comment-id="${commentId}"][data-post-id="${parentId}"]`);
    if (likeButton) {
        likeButton.classList.toggle('liked');
        likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> ${commentLikes[parentId][commentId]}`;
    }
}

// Función para actualizar un comentario
function updateComment(parentId, commentId, newContent) {
    let comments;
    let storageKey;
    
    // Verificar si es un comentario de video o post basado en el tipo de parentId
    if (typeof parentId === 'string' && parentId.startsWith('video-')) {
        // Es un comentario de video
        const videoId = parentId.replace('video-', '');
        comments = videoComments[videoId];
        storageKey = 'videoComments';
    } else {
        // Es un comentario de post
        comments = postComments[parentId];
        storageKey = 'postComments';
    }
    
    if (comments) {
        const comment = comments.find(c => c.id === commentId);
        if (comment) {
            comment.content = newContent;
            comment.edited = true;
            
            // Guardar en localStorage
            localStorage.setItem(storageKey, JSON.stringify(eval(storageKey)));
        }
    }
}

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay un usuario guardado en localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
    
    // Configurar modales y eventos
    setupModals();
    setupSmoothScrolling();
    
    // Cargar contenido específico de la página
    loadPageContent();
});