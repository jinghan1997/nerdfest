const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.navlinks');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
const carouselImages = [
  "images/carousell/c1.jpeg",
  "images/carousell/c2.jpeg",
  "images/carousell/c3.jpeg",
  "images/carousell/c4.jpeg",
  "images/carousell/c5.jpeg",
  "images/carousell/c6.jpeg",
  "images/carousell/c7.jpeg",
  "images/carousell/c8.jpeg",
  "images/carousell/c9.jpeg",
  "images/carousell/c10.jpeg",
  "images/carousell/c11.jpeg",
  "images/carousell/c12.jpeg",
  "images/carousell/c13.jpeg",
  "images/carousell/c14.jpeg",
  "images/carousell/c15.jpeg",
  "images/carousell/c16.jpeg",
  "images/carousell/c17.jpeg",
  "images/carousell/c18.jpeg",
  "images/carousell/c19.jpeg",
  "images/carousell/c20.jpeg",
  "images/carousell/c21.jpeg",
  "images/carousell/c22.jpeg",
  "images/carousell/c23.jpeg",
  "images/carousell/c24.jpeg",
  "images/carousell/c25.jpeg"
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
