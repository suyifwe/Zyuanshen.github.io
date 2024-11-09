let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const totalSlides = images.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${offset})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// 可选：自动播放
// setInterval(nextSlide, 3000); // 每3秒切换到下一张图片