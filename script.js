let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.secao5_slide');
    if (index >= slides.length) {
        currentSlide = 0; // Volta para o primeiro slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Volta para o último slide
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100; // Calcula o deslocamento
    const slidesContainer = document.querySelector('.secao5_container_slides');
    slidesContainer.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Inicia o slider mostrando o primeiro slide
showSlide(currentSlide);
