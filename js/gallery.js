document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const thumbnails = document.querySelectorAll('.thumb');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    const updateActiveThumbnail = () => {
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    };

    const showSlide = (i) => {
        index = (i + thumbnails.length) % thumbnails.length; 
        slides.style.transform = `translateX(-${index * 100}%)`;
        updateActiveThumbnail();
    };

    thumbnails.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            showSlide(i);
        });
    });

    prev.addEventListener('click', () => {
        showSlide(index - 1);
    });

    next.addEventListener('click', () => {
        showSlide(index + 1);
    });

    updateActiveThumbnail();
    setInterval(() => showSlide(index + 1), slideInterval); 
});
