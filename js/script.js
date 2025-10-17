// Конфигурация бота
const BOT_TOKEN = '8014339535:AAGukPo1NltwqHMFOxpNhoPTlc0nLobSceo';
let CHAT_ID = '7862302324';

// Информация о сайте
const SITE_NAME = 'Balkonomania';
const SITE_URL = window.location.hostname;

// Защита от повторной отправки
let isSending = false;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Закрытие мобильного меню при клике на ссылку
    if (mobileMenu) {
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Кнопка "Наверх"
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Галерея портфолио
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.querySelector('.modal-gallery-image');
    const closeModal = document.querySelector('.modal-gallery-close');
    const prevBtn = document.querySelector('.modal-gallery-prev');
    const nextBtn = document.querySelector('.modal-gallery-next');
    
    let currentIndex = 0;
    const images = [];
    
    // Собираем все полноразмерные изображения
    galleryItems.forEach(item => {
        images.push(item.getAttribute('data-full'));
    });
    
    // Открытие модального окна галереи
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            modalImage.src = images[currentIndex];
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна галереи
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    
    // Клик по фону для закрытия галереи
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Навигация по галерее
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImage.src = images[currentIndex];
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            modalImage.src = images[currentIndex];
        });
    }
    
    // Навигация клавиатурой по галерее
    document.addEventListener('keydown', function(e) {
        if (modal && modal.classList.contains('show')) {
            if (e.key === 'Escape') {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                modalImage.src = images[currentIndex];
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % images.length;
                modalImage.src = images[currentIndex];
            }
        }
    });

    // УНИВЕРСАЛЬНАЯ ЛОГИКА ДЛЯ ФОРМЫ ЗАЯВКИ (для всех страниц)
    const orderBtn = document.getElementById('orderBtn');
    const orderBtnAbout = document.getElementById('orderBtnAbout');
    const floatingOrderBtn = document.getElementById('floatingOrderBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const orderForm = document.getElementById('orderForm');
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');

    // Если нет формы - выходим
    if (!orderForm) return;

    // Функция проверки телефона
    function validatePhone(phone) {
        const regex = /^\+375(25|29|33|44)\d{7}$/;
        return regex.test(phone);
    }

    // Обработчик ввода телефона
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Автоматическое добавление +375 если его нет
            if (!this.value.startsWith('+375') && this.value.length > 0) {
                this.value = '+375' + this.value.replace(/^\+375/, '');
            }
            
            // Проверка валидности
            if (validatePhone(this.value)) {
                if (phoneError) phoneError.style.display = 'none';
                this.style.borderColor = '#ddd';
            } else {
                this.style.borderColor = '#f21b1b';
            }
        });
    }

    // Открытие модального окна заявки
    function openModal() {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Вешаем обработчики на все найденные кнопки
    [orderBtn, orderBtnAbout, floatingOrderBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', openModal);
        }
    });

    // Закрытие модального окна заявки
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Закрытие при клике вне окна заявки
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Обработка отправки формы заявки
orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (isSending) return;
    isSending = true;
    
    // === ДОБАВЛЕНО: Логирование начала отправки ===
    console.log('=== ОТПРАВКА ФОРМЫ ===');
    console.log('Отправка сообщения в chat_id:', CHAT_ID);
    console.log('BOT_TOKEN:', BOT_TOKEN ? 'установлен' : 'отсутствует');
    // === КОНЕЦ ДОБАВЛЕНИЯ ===
    
    // Проверка телефона
    if (!validatePhone(phoneInput.value)) {
        if (phoneError) phoneError.style.display = 'block';
        phoneInput.focus();
        isSending = false;
        return;
    } else {
        if (phoneError) phoneError.style.display = 'none';
    }

    const formData = new FormData(orderForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message') || 'Не указано';

    // Добавляем информацию о сайте в сообщение
    const telegramMessage = `
<b>Новая заявка с ${SITE_NAME}</b>
├ Имя: <code>${name}</code>
├ Телефон: <code>${phone}</code>
├ Источник: ${SITE_URL}
└ Сообщение: ${message}
    `.trim();

    // === ДОБАВЛЕНО: Логирование данных перед отправкой ===
    console.log('=== ДАННЫЕ ДЛЯ ОТПРАВКИ ===');
    console.log('Chat ID:', CHAT_ID);
    console.log('Текст сообщения:', telegramMessage);
    console.log('URL запроса:', `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`);
    // === КОНЕЦ ДОБАВЛЕНИЯ ===

    try {
        const submitBtn = orderForm.querySelector('.modal-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loader"></span> Отправка...';

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const result = await response.json();

        // === ДОБАВЛЕНО: Логирование ответа от Telegram ===
        console.log('=== ОТВЕТ ОТ TELEGRAM ===');
        console.log('Статус ответа:', response.status);
        console.log('Полный ответ:', result);
        // === КОНЕЦ ДОБАВЛЕНИЯ ===

        if (response.ok) {
            console.log('✅ Сообщение успешно отправлено в Telegram');
            alert('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
            orderForm.reset();
            if (modalOverlay) modalOverlay.classList.remove('active');
        } else {
            console.error('❌ Ошибка Telegram API:', result.description);
            throw new Error(result.description || 'Unknown Telegram API error');
        }
    } catch (error) {
        console.error('💥 Ошибка отправки в Telegram:', error);
        alert(`❌ Ошибка отправки: ${error.message}. Позвоните нам напрямую: +375 29 121 42 29`);
    } finally {
        const submitBtn = orderForm.querySelector('.modal-submit');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить заявку';
        document.body.style.overflow = '';
        isSending = false;
    }
});

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalOverlay && modalOverlay.classList.contains('active')) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (modal && modal.classList.contains('show')) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Функция открытия галереи
function openGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.querySelector('.modal-gallery-image');
    
    // Открываем на первом изображении
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        currentIndex = 0;
        modalImage.src = galleryItems[0].getAttribute('data-full');
    }
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}
// === ДОБАВЬТЕ ЭТОТ КОД В КОНЕЦ ФАЙЛА ===

// Функция проверки куда уходят сообщения
window.checkTelegramDestination = async function() {
    console.log('🔍 Проверяем настройки Telegram бота...');
    
    try {
        // Проверяем информацию о чате
        const response = await fetch('https://api.telegram.org/bot8014339535:AAGukPo1NltwqHMFOxpNhoPTlc0nLobSceo/getChat', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({chat_id: '7862302324'})
        });
        
        const chatData = await response.json();
        console.log('=== ИНФОРМАЦИЯ О ЧАТЕ ===');
        
        if (chatData.ok) {
            console.log('✅ Чат найден!');
            console.log('Тип чата:', chatData.result.type);
            console.log('Название:', chatData.result.title || chatData.result.first_name || 'Без названия');
            console.log('Username:', chatData.result.username || 'Отсутствует');
            console.log('ID чата:', chatData.result.id);
            
            if (chatData.result.type === 'private') {
                console.log('💡 Сообщения уходят в ЛИЧНЫЕ сообщения с ботом');
                console.log('💡 Зайдите в чат с @BalkonomaniaMinskBot');
            } else if (chatData.result.type === 'group') {
                console.log('💡 Сообщения уходят в ГРУППУ:', chatData.result.title);
            } else if (chatData.result.type === 'channel') {
                console.log('💡 Сообщения уходят в КАНАЛ:', chatData.result.title);
            }
        } else {
            console.error('❌ Ошибка:', chatData.description);
        }
        
    } catch (error) {
        console.error('💥 Ошибка проверки:', error);
    }
}

// Автоматически запускаем проверку при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Запускаем проверку через 2 секунды после загрузки
    setTimeout(() => {
        window.checkTelegramDestination();
    }, 2000);
});
// Проверка может ли бот писать вам
window.checkBotPermissions = async function() {
    console.log('🔍 Проверяем настройки приватности...');
    
    try {
        // Пробуем отправить тестовое сообщение
        const testMsg = {
            chat_id: '7862302324',
            text: '🔔 ТЕСТ: Если видите это, бот может писать вам! Время: ' + new Date().toLocaleTimeString()
        };
        
        const response = await fetch('https://api.telegram.org/bot8014339535:AAGukPo1NltwqHMFOxpNhoPTlc0nLobSceo/sendMessage', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(testMsg)
        });
        
        const result = await response.json();
        console.log('Результат теста:', result);
        
        if (result.ok) {
            console.log('✅ Бот может отправлять вам сообщения');
            console.log('💡 Проверьте:');
            console.log('1. Открыт ли чат с @BalkonomaniaMinskBot');
            console.log('2. Не архивирован ли чат');
            console.log('3. Не заблокирован ли бот');
        } else {
            console.log('❌ Проблема:', result.description);
        }
        
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Запустите проверку
setTimeout(() => {
    checkBotPermissions();
}, 2000);