//header-slider
const slides = document.querySelectorAll('.slide-item'),
        prev = document.querySelector('.slider-prev'),
        next = document.querySelector('.slider-next');

    let slideIndex = 1;

    showSlides();

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlide(n) {
        showSlides(slideIndex += n); 
    }
    next.addEventListener('click', () => {
        plusSlide(1);
    })
    prev.addEventListener('click', () => {
        plusSlide(-1);
    })

// scroll
document.querySelector('.scrooll').addEventListener('click', function() {
    document.querySelector('.booking-number').scrollIntoView({ behavior: 'smooth' });
});