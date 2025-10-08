// Конфигурация галереи с поддержкой фото и видео
const galleryConfig = {
    folders: [
        {
            id: 'balcony-1',
            title: 'Лоджия по адресу: улица Гризодубовой 1"',
            description: 'Полная отделка лоджии с утеплением и монтажом мебели',
            previews: [
                'images/gallery/balcony-1/1.jpg',
                'images/gallery/balcony-1/2.jpg'
            ],
            media: [
                {
                    type: 'image',
                    url: 'images/gallery/balcony-1/1.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-1/2.jpg',
                    title: 'Система хранения'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-1/3.jpg',
                    title: 'Детали отделки'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-1/4.jpg',
                    title: 'Готовый результат'
                },
                {
                    type: 'video',
                    url: 'images/gallery/balcony-1/5.mp4',
                    title: 'Видео-тур по балкону',
                    poster: 'images/gallery/balcony-1/1.jpg'
                }
            ],
            date: '15.12.2024'
        },

        {
            id: 'balcony-2',
            title: 'Балкон по адресу: пр-д. Ташкенский 12',
            description: 'Комплекс работ: установка ПВХ остекления, наружная отделка сайдингом, внутренняя отделка ламинатом с утеплением, монтаж шкафа до потолка',
            previews: [
                'images/gallery/balcony-2/1.jpg',
                'images/gallery/balcony-2/2.jpg'
            ],
            media: [
                {
                    type: 'image',
                    url: 'images/gallery/balcony-2/1.jpg',
                    title: 'Панорамное остекление'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-2/2.jpg',
                    title: 'Встроенная мебель'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-2/3.jpg',
                    title: 'Освещение'
                },{
                    type: 'image',
                    url: 'images/gallery/balcony-2/4.jpg',
                    title: 'Освещение'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-2/5.jpg',
                    title: 'Освещение'
                },{
                    type: 'image',
                    url: 'images/gallery/balcony-2/6.jpg',
                    title: 'Освещение'
                },{
                    type: 'image',
                    url: 'images/gallery/balcony-2/7.jpg',
                    title: 'Освещение'
                },{
                    type: 'image',
                    url: 'images/gallery/balcony-2/8.jpg',
                    title: 'Освещение'
                },{
                    type: 'image',
                    url: 'images/gallery/balcony-2/9.jpg',
                    title: 'Освещение'
                },{
                    type: 'image',
                    url: 'images/gallery/balcony-2/10.jpg',
                    title: 'Освещение'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-2/11.jpg',
                    title: 'Освещение'
                },
                 {
                    type: 'image',
                    url: 'images/gallery/balcony-2/14.jpg',
                    title: 'Освещение'
                },
                {
                    type: 'video',
                    url: 'images/gallery/balcony-2/12.mp4',
                    title: 'Видео-тур по балкону',
                    poster: 'images/gallery/balcony-2/1.jpg'
                },
                {
                    type: 'video',
                    url: 'images/gallery/balcony-2/13.mp4',
                    title: 'Видео-тур по балкону',
                    poster: 'images/gallery/balcony-2/1.jpg'
                }
                
            ],
            date: '08.11.2024'
        },

         {
            id: 'balcony-3',
            title: 'Балкон по адресу: улица Рокоссовского 15',
            description: 'Полная замена остекления: демонтаж старых рам, установка двух новых ПВХ конструкций с наружной отделкой сайдингом',
            previews: [
                'images/gallery/balcony-3/1.jpg',
                'images/gallery/balcony-3/2.jpg'
            ],
            media: [
                {
                    type: 'image',
                    url: 'images/gallery/balcony-3/1.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-3/2.jpg',
                    title: 'Система хранения'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-3/3.jpg',
                    title: 'Детали отделки'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-3/4.jpg',
                    title: 'Готовый результат'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-3/5.jpg',
                    title: 'Готовый результат'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-3/6.jpg',
                    title: 'Готовый результат'
                }
            ],
            date: '15.12.2024'
        },
         {
            id: 'balcony-4',
            title: 'Лоджия по адресу: улица Теслы 28',
            description: 'Замер и монтаж шкафчика до потолка из ЛДСП',
            previews: [
                'images/gallery/balcony-4/1.jpg',
                'images/gallery/balcony-4/2.jpg'
            ],
            media: [
                {
                    type: 'image',
                    url: 'images/gallery/balcony-4/1.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-4/2.jpg',
                    title: 'Система хранения'
                },
                {
                    type: 'video',
                    url: 'images/gallery/balcony-4/3.mp4',
                    title: 'Видео-тур по балкону',
                    poster: 'images/gallery/balcony-4/1.jpg'
                }
            ],
            date: '15.12.2024'
        },
        {
            id: 'balcony-5',
            title: 'Балкон по адресу: улица Гикало 6',
            description: 'Комплекс работ: демонтаж старого утеплителя, монтаж нового пола из ламината, обшивка стен ПВХ панелями',
            previews: [
                'images/gallery/balcony-5/1.jpg',
                'images/gallery/balcony-5/2.jpg'
            ],
            media: [
                {
                    type: 'image',
                    url: 'images/gallery/balcony-5/1.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-5/2.jpg',
                    title: 'Система хранения'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-5/3.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-5/4.jpg',
                    title: 'Система хранения'
                }
                
            ],
            date: '15.12.2024'
        },
        {
            id: 'balcony-6',
            title: 'Балкон по адресу: улица Тикоцкого 22',
            description: 'Комплекс работ по обшивке балкона ламинатом',
            previews: [
                'images/gallery/balcony-6/1.jpg',
                'images/gallery/balcony-6/2.jpg'
            ],
            media: [
                {
                    type: 'image',
                    url: 'images/gallery/balcony-6/1.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-6/2.jpg',
                    title: 'Система хранения'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-6/3.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-6/4.jpg',
                    title: 'Система хранения'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-6/5.jpg',
                    title: 'Система хранения'
                }
                
            ],
            date: '15.12.2024'
        },
        {
            id: 'balcony-8',
            title: 'Балкон по адресу: улица Уборевича 160',
            description: 'Полная отделка балкона ламинатом',
            previews: [
                'images/gallery/balcony-8/1.jpg',
                'images/gallery/balcony-8/2.jpg'
            ],
            media: [
                {
                    type: 'image',
                    url: 'images/gallery/balcony-8/1.jpg',
                    title: 'Общий вид балкона'
                },
                {
                    type: 'image', 
                    url: 'images/gallery/balcony-8/2.jpg',
                    title: 'Система хранения'
                },
                {
                    type: 'image',
                    url: 'images/gallery/balcony-8/3.jpg',
                    title: 'Детали отделки'
                },
                {
                    type: 'video',
                    url: 'images/gallery/balcony-8/4.mp4',
                    title: 'Видео-тур по балкону',
                    poster: 'images/gallery/balcony-7/1.jpg'
                }
            ],
            date: '15.12.2024'
        }
    ]
};

// Текущее состояние галереи
let currentGalleryState = {
    currentFolder: null,
    currentMediaIndex: 0,
    currentMedia: []
};

// Функция для создания fallback изображения
function getFallbackImage(alt) {
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
}

// Инициализация галереи
function initGallery() {
    console.log('Инициализация галереи...');
    
    const galleryContainer = document.getElementById('galleryFolders');
    if (!galleryContainer) {
        console.error('Контейнер галереи не найден!');
        return;
    }
    
    renderGalleryFolders();
    setupGalleryModal();
}

// Рендер папок галереи
function renderGalleryFolders() {
    const foldersContainer = document.getElementById('galleryFolders');
    
    if (!foldersContainer) {
        console.error('Контейнер папок не найден');
        return;
    }
    
    console.log('Рендерим папки галереи...');
    
    foldersContainer.innerHTML = galleryConfig.folders.map(folder => `
        <div class="gallery-folder" data-folder-id="${folder.id}">
            <div class="folder-preview">
                <div class="preview-images">
                    <img src="${folder.previews[0]}" alt="${folder.title}" 
                         class="preview-main"
                         onerror="this.src='${getFallbackImage(folder.title)}'">
                    <img src="${folder.previews[1]}" alt="${folder.title}" 
                         class="preview-secondary"
                         onerror="this.src='${getFallbackImage(folder.title)}'">
                </div>
            </div>
            <div class="folder-info">
                <h3 class="folder-title">${folder.title}</h3>
                <p class="folder-description">${folder.description}</p>
                <div class="folder-meta">
                    <span class="folder-count">${getMediaCountText(folder)}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Добавляем обработчики событий для папок
    const folderElements = document.querySelectorAll('.gallery-folder');
    console.log(`Найдено папок: ${folderElements.length}`);
    
    folderElements.forEach(folder => {
        folder.addEventListener('click', () => {
            const folderId = folder.getAttribute('data-folder-id');
            console.log('Клик по папке:', folderId);
            openFolderMediaGrid(folderId);
        });
    });
}

// Функция для отображения количества медиа
function getMediaCountText(folder) {
    const imageCount = folder.media.filter(item => item.type === 'image').length;
    const videoCount = folder.media.filter(item => item.type === 'video' || item.type === 'youtube').length;
    
    if (videoCount > 0) {
        return `${imageCount} фото, ${videoCount} видео`;
    } else {
        return `${imageCount} фото`;
    }
}

// Настройка модального окна галереи
function setupGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (!modal) {
        console.error('Модальное окно галереи не найдено');
        return;
    }
    
    // Создаем крестик если его нет
    let closeBtn = modal.querySelector('.modal-gallery-close');
    if (!closeBtn) {
        console.log('Создаем крестик программно');
        closeBtn = document.createElement('button');
        closeBtn.className = 'modal-gallery-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', 'Закрыть галерею');
        modal.querySelector('.modal-gallery-content').appendChild(closeBtn);
    }
    
    const prevBtn = modal.querySelector('.modal-gallery-prev');
    const nextBtn = modal.querySelector('.modal-gallery-next');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGalleryModal);
        console.log('Обработчик крестика добавлен');
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', showPreviousMedia);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextMedia);
    }
    
    // Закрытие по клику вне контента
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeGalleryModal();
        }
        if (e.key === 'ArrowLeft' && modal.classList.contains('active')) {
            showPreviousMedia();
        }
        if (e.key === 'ArrowRight' && modal.classList.contains('active')) {
            showNextMedia();
        }
    });
}

// Открытие сетки медиа папки в модальном окне
function openFolderMediaGrid(folderId) {
    const folder = galleryConfig.folders.find(f => f.id === folderId);
    if (!folder) {
        console.error('Папка не найдена:', folderId);
        return;
    }
    
    currentGalleryState.currentFolder = folder;
    currentGalleryState.currentMedia = folder.media;
    
    // Обновляем заголовок модального окна
    const titleElement = document.getElementById('modalFolderTitle');
    if (titleElement) {
        titleElement.textContent = folder.title;
    }
    
    // Скрываем навигационные кнопки для сетки
    const nav = document.querySelector('.modal-gallery-nav');
    if (nav) {
        nav.style.display = 'none';
    }
    
    // Скрываем счетчик
    const counter = document.querySelector('.modal-gallery-counter');
    if (counter) {
        counter.style.display = 'none';
    }
    
    // ОТКЛЮЧАЕМ ПОЛНОЭКРАННЫЙ РЕЖИМ ДЛЯ СЕТКИ
    disableFullscreenMode();
    
    // Показываем сетку медиа
    showMediaGrid();
    
    // Открываем модальное окно
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Показ сетки медиа в модальном окне
function showMediaGrid() {
    const imageContainer = document.querySelector('.modal-gallery-image-container');
    if (!imageContainer) return;
    
    // Очищаем контейнер
    imageContainer.innerHTML = '';
    
    // Создаем контейнер для сетки
    const gridContainer = document.createElement('div');
    gridContainer.className = 'media-grid-container';
    
    // Добавляем все медиа в сетку
    gridContainer.innerHTML = currentGalleryState.currentMedia.map((media, index) => `
        <div class="media-grid-item" data-media-index="${index}">
            ${media.type === 'image' ? `
                <img src="${media.url}" alt="${media.title}" 
                     onerror="this.src='${getFallbackImage(media.title)}'">
                <div class="media-grid-overlay">
                    <span class="media-type-icon">📷</span>
                </div>
            ` : media.type === 'video' ? `
                <img src="${media.poster || media.url}" alt="${media.title}" 
                     onerror="this.src='${getFallbackImage(media.title)}'">
                <div class="video-badge">🎥 ВИДЕО</div>
                <div class="media-grid-overlay">
                    <span class="play-icon">▶</span>
                </div>
            ` : media.type === 'youtube' ? `
                <img src="https://img.youtube.com/vi/${getYouTubeId(media.url)}/hqdefault.jpg" 
                     alt="${media.title}">
                <div class="video-badge">📺 YOUTUBE</div>
                <div class="media-grid-overlay">
                    <span class="play-icon">▶</span>
                </div>
            ` : ''}
        </div>
    `).join('');
    
    imageContainer.appendChild(gridContainer);
    
    // Добавляем обработчики для элементов сетки
    const mediaItems = gridContainer.querySelectorAll('.media-grid-item');
    mediaItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const mediaIndex = parseInt(item.getAttribute('data-media-index'));
            console.log('Клик по медиа в сетке:', mediaIndex);
            openSingleMedia(mediaIndex);
        });
    });
}

// Функция для извлечения ID из YouTube URL
function getYouTubeId(url) {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
}

// Открытие одиночного медиа в полноэкранном режиме
function openSingleMedia(mediaIndex) {
    currentGalleryState.currentMediaIndex = mediaIndex;
    
    // Показываем навигационные кнопки
    const nav = document.querySelector('.modal-gallery-nav');
    if (nav) {
        nav.style.display = 'flex';
    }
    
    // Показываем счетчик
    const counter = document.querySelector('.modal-gallery-counter');
    if (counter) {
        counter.style.display = 'block';
    }
    
    // Показываем выбранное медиа
    showMediaByIndex(mediaIndex);
    
    // ВКЛЮЧАЕМ ПОЛНОЭКРАННЫЙ РЕЖИМ ДЛЯ ВСЕХ ОДИНОЧНЫХ МЕДИА (ФОТО И ВИДЕО)
    enableFullscreenMode();
}

// Показ одиночного медиа в полноэкранном режиме
function showMediaByIndex(index) {
    if (!currentGalleryState.currentMedia.length) return;
    
    const imageContainer = document.querySelector('.modal-gallery-image-container');
    const currentImageElement = document.getElementById('currentImage');
    const totalImagesElement = document.getElementById('totalImages');
    
    if (!imageContainer) return;
    
    // Очищаем контейнер
    imageContainer.innerHTML = '';
    
    // Обновляем счетчик
    if (currentImageElement) {
        currentImageElement.textContent = index + 1;
    }
    if (totalImagesElement) {
        totalImagesElement.textContent = currentGalleryState.currentMedia.length;
    }
    
    const currentMedia = currentGalleryState.currentMedia[index];
    
    // Показываем индикатор загрузки
    showLoadingIndicator();
    
    // СОЗДАЕМ ЭЛЕМЕНТ В ЗАВИСИМОСТИ ОТ ТИПА МЕДИА
    if (currentMedia.type === 'video') {
        createVideoElement(currentMedia, imageContainer);
    } else if (currentMedia.type === 'youtube') {
        createYouTubeElement(currentMedia, imageContainer);
    } else {
        createImageElement(currentMedia, imageContainer);
    }
    
    // Обновляем текущий индекс
    currentGalleryState.currentMediaIndex = index;
}

// Функция создания видео элемента - ИЗМЕНЕНА ДЛЯ ПОЛНОЭКРАННОГО РЕЖИМА
function createVideoElement(media, container) {
    const video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    
    // ДЛЯ ПОЛНОЭКРАННОГО РЕЖИМА
    const modal = document.getElementById('galleryModal');
    if (modal && modal.classList.contains('fullscreen-mode')) {
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.maxWidth = '100%';
        video.style.maxHeight = '100%';
        video.style.objectFit = 'contain';
        video.style.borderRadius = '0';
        video.style.boxShadow = 'none';
    } else {
        video.style.maxWidth = '90%';
        video.style.maxHeight = '90%';
        video.style.borderRadius = '8px';
        video.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
    
    if (media.poster) {
        video.poster = media.poster;
    }
    
    const source = document.createElement('source');
    source.src = media.url;
    source.type = 'video/mp4';
    
    video.appendChild(source);
    video.addEventListener('loadeddata', hideLoadingIndicator);
    video.addEventListener('error', () => {
        hideLoadingIndicator();
        container.innerHTML = `<div style="color: #666; text-align: center;">Ошибка загрузки видео</div>`;
    });
    
    container.appendChild(video);
}

// Функция создания YouTube элемента - ИЗМЕНЕНА ДЛЯ ПОЛНОЭКРАННОГО РЕЖИМА
function createYouTubeElement(media, container) {
    const iframe = document.createElement('iframe');
    iframe.src = media.url;
    
    // ДЛЯ ПОЛНОЭКРАННОГО РЕЖИМА
    const modal = document.getElementById('galleryModal');
    if (modal && modal.classList.contains('fullscreen-mode')) {
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.borderRadius = '0';
        iframe.style.boxShadow = 'none';
    } else {
        iframe.width = '800';
        iframe.height = '450';
        iframe.style.borderRadius = '8px';
        iframe.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
    
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    iframe.addEventListener('load', hideLoadingIndicator);
    
    container.appendChild(iframe);
}

// Функция создания изображения
function createImageElement(media, container) {
    const img = new Image();
    img.className = 'modal-gallery-image';
    
    // Для полноэкранного режима убираем ограничения
    const modal = document.getElementById('galleryModal');
    if (modal && modal.classList.contains('fullscreen-mode')) {
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.width = 'auto';
        img.style.height = 'auto';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '0';
        img.style.boxShadow = 'none';
    } else {
        // Для обычного режима оставляем стандартные стили
        img.style.maxWidth = '95%';
        img.style.maxHeight = '95%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
    
    img.onload = function() {
        hideLoadingIndicator();
        if (this.width > 2000 || this.height > 2000) {
            this.style.maxWidth = '90%';
            this.style.maxHeight = '90%';
        }
    };
    
    img.onerror = function() {
        hideLoadingIndicator();
        this.src = getFallbackImage(media.title || currentGalleryState.currentFolder.title);
    };
    
    img.src = media.url;
    img.alt = media.title || `${currentGalleryState.currentFolder.title} - Медиа ${currentGalleryState.currentMediaIndex + 1}`;
    
    container.appendChild(img);
}

// ВКЛЮЧЕНИЕ ПОЛНОЭКРАННОГО РЕЖИМА ДЛЯ ВСЕХ ОДИНОЧНЫХ МЕДИА
function enableFullscreenMode() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;
    
    // Добавляем класс для полноэкранного режима
    modal.classList.add('fullscreen-mode');
    
    // Обновляем стили для полноэкранного режима
    const content = modal.querySelector('.modal-gallery-content');
    if (content) {
        content.style.width = '100vw';
        content.style.height = '100vh';
        content.style.maxWidth = 'none';
        content.style.maxHeight = 'none';
        content.style.margin = '0';
        content.style.borderRadius = '0';
    }
    
    const imageContainer = modal.querySelector('.modal-gallery-image-container');
    if (imageContainer) {
        imageContainer.style.width = '100%';
        imageContainer.style.height = '100%';
        imageContainer.style.padding = '0';
        imageContainer.style.display = 'flex';
        imageContainer.style.alignItems = 'center';
        imageContainer.style.justifyContent = 'center';
    }
    
    // Скрываем заголовок в полноэкранном режиме
    const header = modal.querySelector('.modal-gallery-header');
    if (header) {
        header.style.display = 'none';
    }
    
    console.log('✅ Полноэкранный режим включен для одиночного медиа');
}

// ОТКЛЮЧЕНИЕ ПОЛНОЭКРАННОГО РЕЖИМА
function disableFullscreenMode() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;
    
    modal.classList.remove('fullscreen-mode');
    
    // Восстанавливаем стандартные стили
    const content = modal.querySelector('.modal-gallery-content');
    if (content) {
        content.style.width = '';
        content.style.height = '';
        content.style.maxWidth = '';
        content.style.maxHeight = '';
        content.style.margin = '';
        content.style.borderRadius = '';
    }
    
    const imageContainer = modal.querySelector('.modal-gallery-image-container');
    if (imageContainer) {
        imageContainer.style.width = '';
        imageContainer.style.height = '';
        imageContainer.style.padding = '';
        imageContainer.style.display = '';
        imageContainer.style.alignItems = '';
        imageContainer.style.justifyContent = '';
    }
    
    // Показываем заголовок обратно
    const header = modal.querySelector('.modal-gallery-header');
    if (header) {
        header.style.display = '';
    }
    
    console.log('❌ Полноэкранный режим отключен');
}

// Индикатор загрузки
function showLoadingIndicator() {
    const container = document.querySelector('.modal-gallery-image-container');
    if (!container) return;
    
    hideLoadingIndicator();
    
    const loaderHTML = `
        <div class="gallery-loader" style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1001;
            color: #666;
            text-align: center;
        ">
            <div class="loader" style="
                width: 50px;
                height: 50px;
                border: 3px solid rgba(0,0,0,0.1);
                border-top: 3px solid #666;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 10px;
            "></div>
            Загрузка...
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', loaderHTML);
}

function hideLoadingIndicator() {
    const loader = document.querySelector('.gallery-loader');
    if (loader) {
        loader.remove();
    }
}

// Закрытие модального окна галереи
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        // ОСТАНАВЛИВАЕМ ВСЕ ВИДЕО ПЕРЕД ЗАКРЫТИЕМ
        stopAllVideos();
        
        modal.classList.remove('active');
        // Отключаем полноэкранный режим при закрытии
        disableFullscreenMode();
    }
    document.body.style.overflow = '';
    currentGalleryState.currentFolder = null;
    currentGalleryState.currentMedia = [];
    currentGalleryState.currentMediaIndex = 0;
}

// Функция для остановки всех видео
function stopAllVideos() {
    // Останавливаем обычные видео
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    
    // Останавливаем YouTube видео (удаляем iframe)
    const youtubeIframes = document.querySelectorAll('iframe[src*="youtube"]');
    youtubeIframes.forEach(iframe => {
        // Сохраняем src чтобы можно было восстановить при необходимости
        const src = iframe.src;
        iframe.src = '';
        // Восстанавливаем src но с параметром autoplay=0
        iframe.src = src.replace('autoplay=1', 'autoplay=0');
    });
    
    console.log('⏹️ Все видео остановлены');
}
// Показать предыдущее медиа
function showPreviousMedia() {
    // Останавливаем текущее видео перед переходом
    stopAllVideos();
    
    if (currentGalleryState.currentMediaIndex > 0) {
        showMediaByIndex(currentGalleryState.currentMediaIndex - 1);
    } else {
        showMediaByIndex(currentGalleryState.currentMedia.length - 1);
    }
    
    // ОБНОВЛЯЕМ ПОЛНОЭКРАННЫЙ РЕЖИМ ПРИ НАВИГАЦИИ
    enableFullscreenMode();
}

// Показать следующее медиа
function showNextMedia() {
    // Останавливаем текущее видео перед переходом
    stopAllVideos();
    
    if (currentGalleryState.currentMediaIndex < currentGalleryState.currentMedia.length - 1) {
        showMediaByIndex(currentGalleryState.currentMediaIndex + 1);
    } else {
        showMediaByIndex(0);
    }
    
    // ОБНОВЛЯЕМ ПОЛНОЭКРАННЫЙ РЕЖИМ ПРИ НАВИГАЦИИ
    enableFullscreenMode();
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', initGallery);