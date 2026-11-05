document.addEventListener('DOMContentLoaded', function () {
    var heroCarouselElement = document.getElementById('heroCarousel');
    
    if (heroCarouselElement) {
        // Corregir erratas tipográficas en los atributos del HTML de forma dinámica
        var prevBtn = heroCarouselElement.querySelector('[data-bs-silde="prev"]');
        if (prevBtn) {
            prevBtn.setAttribute('data-bs-slide', 'prev');
            prevBtn.removeAttribute('data-bs-silde');
        }

        var indicators = heroCarouselElement.querySelectorAll('[data-bs-silde-to]');
        indicators.forEach(function(indicator, index) {
            indicator.setAttribute('data-bs-slide-to', index);
            indicator.removeAttribute('data-bs-silde-to');
        });

        // Asegurar que el primer slide y su indicador tengan la clase active de forma dinámica
        var carouselItems = heroCarouselElement.querySelectorAll('.carousel-item');
        var carouselIndicators = heroCarouselElement.querySelectorAll('.carousel-indicators button');

        if (carouselItems.length > 0) {
            carouselItems.forEach(item => item.classList.remove('active'));
            carouselIndicators.forEach(ind => ind.classList.remove('active'));

            carouselItems[0].classList.add('active');
            if (carouselIndicators.length > 0) {
                carouselIndicators[0].classList.add('active');
            }
        }

        // Inicializar el carrusel de Bootstrap con autoplay
        if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
            new bootstrap.Carousel(heroCarouselElement, {
                interval: 5000,
                ride: 'carousel',
                wrap: true,
                touch: true
            });
        }
    }
});