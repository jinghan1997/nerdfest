const syllabusImages = [
  {
    src: "images/magnet_syllabus.jpg",
    alt: "Magnet syllabus"
  }
];

function renderSyllabusImages() {
  const gallery = document.getElementById("syllabus-gallery");
  if (!gallery) return;

  gallery.replaceChildren(
    ...syllabusImages.map(({ src, alt }) => {
      const image = document.createElement("img");
      image.src = src;
      image.alt = alt;
      image.loading = "lazy";
      image.decoding = "async";
      return image;
    })
  );
}

renderSyllabusImages();
