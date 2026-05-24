const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.navlinks');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
const carouselImages = [
  "images/carousell/c1.png",
  "images/carousell/c2.png",
  "images/carousell/c3.png",
  "images/carousell/c4.png",
  "images/carousell/c5.png",
  "images/carousell/c6.png",
  "images/carousell/c7.png",
  "images/carousell/c8.png",
  "images/carousell/c9.png",
  "images/carousell/c10.png",
  "images/carousell/c11.png",
  "images/carousell/c12.png",
  "images/carousell/c13.png",
  "images/carousell/c14.png",
  "images/carousell/c15.png",
  "images/carousell/c16.png",
  "images/carousell/c17.png",
  "images/carousell/c18.png",
  "images/carousell/c19.png",
  "images/carousell/c20.png",
  "images/carousell/c21.png",
  "images/carousell/c22.png",
  "images/carousell/c23.png",
  "images/carousell/c24.png",
  "images/carousell/c25.png"
];

let currentSlide = 0;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = carouselImages.length - 1;
  }

  if (currentSlide >= carouselImages.length) {
    currentSlide = 0;
  }

  document.getElementById("carousel-image").src = carouselImages[currentSlide];
}
