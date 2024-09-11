let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function moveSlides(direction) {
    currentIndex += direction;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
    moveSlides(1);
}, 3000);

// Doff Motif Slider
let currentIndexDoff = 0;
const slidesDoff = document.querySelectorAll('.slider')[1].querySelector('.slides');
const totalSlidesDoff = slidesDoff.children.length;

function moveSlidesDoff(direction) {
    currentIndexDoff += direction;
    if (currentIndexDoff >= totalSlidesDoff) {
        currentIndexDoff = 0;
    } else if (currentIndexDoff < 0) {
        currentIndexDoff = totalSlidesDoff - 1;
    }
    slidesDoff.style.transform = `translateX(${-currentIndexDoff * 100}%)`;
}

// Glossy Motif Slider
let currentIndexGlossy = 0;
const slidesGlossy = document.querySelectorAll('.slider')[2].querySelector('.slides');
const totalSlidesGlossy = slidesGlossy.children.length;

function moveSlidesGlossy(direction) {
    currentIndexGlossy += direction;
    if (currentIndexGlossy >= totalSlidesGlossy) {
        currentIndexGlossy = 0;
    } else if (currentIndexGlossy < 0) {
        currentIndexGlossy = totalSlidesGlossy - 1;
    }
    slidesGlossy.style.transform = `translateX(${-currentIndexGlossy * 100}%)`;
}

// Optional: Auto slide every 3 seconds
setInterval(() => {
    moveSlidesDoff(1);
}, 3000);

setInterval(() => {
    moveSlidesGlossy(1);
}, 3000);
n  

