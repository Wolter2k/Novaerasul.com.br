/* Efeito do SlideShow da Index */      
var slideIndex = 0;
var slides = document.querySelectorAll('.slideshow-container .slide');
var prevButton = document.querySelector('.slideshow-container .prev');
var nextButton = document.querySelector('.slideshow-container .next');

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

showSlide(slideIndex);

setInterval(function () {
  nextSlide();
}, 2500); /* tempo em milisegundo para passagem de cada lamina */


/* Menu na opção de página responsiva*/
var menuIcon = document.querySelector('.menu-icon');
var menuDropdown = document.querySelector('.menu-dropdown');

menuIcon.addEventListener('click', function () {
  menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
});

/* Fecha o Menu quando estiver na opção de página responsiva*/
var menuCloseIcon = document.querySelector('.menu-close-icon');
menuCloseIcon.addEventListener('click', function () {
  menuDropdown.style.display = 'none';
});
