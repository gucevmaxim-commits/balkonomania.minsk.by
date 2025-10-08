// Скрипт для страницы преимуществ

document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления при скролле
    function initScrollAnimations() {
        const elements = document.querySelectorAll('[data-aos]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Анимация счетчиков статистики
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const count = parseInt(target.getAttribute('data-count'));
                    animateCounter(target, count, speed);
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + (element.getAttribute('data-count') === '98' ? '%' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + (element.getAttribute('data-count') === '98' ? '%' : '');
            }
        }, 16);
    }

    // Раскрытие деталей преимуществ
    function initAdvantageCards() {
        const cards = document.querySelectorAll('.advantage-card');
        
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const details = this.querySelector('.advantage-details');
                if (details) {
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                    this.classList.toggle('expanded');
                }
            });
        });
    }

    // Обработчик кнопки заявки
    const advantagesOrderBtn = document.getElementById('advantagesOrderBtn');
    if (advantagesOrderBtn) {
        advantagesOrderBtn.addEventListener('click', function() {
            const modalOverlay = document.getElementById('modalOverlay');
            if (modalOverlay) {
                modalOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Инициализация
    initScrollAnimations();
    initCounters();
    initAdvantageCards();

    console.log('Advantages page script loaded');
});