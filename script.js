function setupMenuButton() {
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".navlinks");

  if (!btn || !links) return;

  btn.onclick = function () {
    links.classList.toggle("open");
  };
}

function getCurrentPage() {
  const page = window.location.pathname.split("/").pop();
  if (!page || page === "") return "index.html";
  return page;
}

function setActiveNavLink() {
  const page = getCurrentPage();

  document.querySelectorAll(".navlinks a").forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === page;

    if (isActive) {
      link.setAttribute("aria-current", "page");
      link.classList.add("is-active");
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("is-active");
    }
  });
}

async function loadComponent(id, file) {
  const response = await fetch(file);
  const text = await response.text();
  document.getElementById(id).innerHTML = text;
  if (id === "header") {
    setupMenuButton();
    setActiveNavLink();
  }
}

document.addEventListener("DOMContentLoaded", setupMenuButton);
window.setupMenuButton = setupMenuButton;
window.setActiveNavLink = setActiveNavLink;
window.loadComponent = loadComponent;


// Carousel
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
  const carouselImage = document.getElementById("carousel-image");
  if (!carouselImage) return;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = carouselImages.length - 1;
  }

  if (currentSlide >= carouselImages.length) {
    currentSlide = 0;
  }

  carouselImage.src = carouselImages[currentSlide];
  carouselImage.alt = `Hackathon photo ${currentSlide + 1} of ${carouselImages.length}`;
}