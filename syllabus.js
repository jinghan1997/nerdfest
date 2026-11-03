const syllabusImages = [
  {
    src: "images/magnet_syllabus.jpg",
    alt: "Magnet syllabus",
    website: "https://mri-nerdfeast.thosli611.chatgpt.site/"
  }
];

function renderSyllabusImages() {
  const gallery = document.getElementById("syllabus-gallery");
  if (!gallery) return;

  gallery.replaceChildren(
    ...syllabusImages.map(({ src, alt, website }) => {
      const item = document.createElement("article");
      item.className = "syllabus-item";

      const image = document.createElement("img");
      image.src = src;
      image.alt = alt;
      image.loading = "lazy";
      image.decoding = "async";

      const websiteText = document.createElement("p");
      websiteText.className = "syllabus-link";

      const label = document.createElement("strong");
      label.textContent = "Magnet Assembly website: ";

      const link = document.createElement("a");
      link.href = website;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = website;

      websiteText.append(label, link);
      item.append(image, websiteText);
      return item;
    })
  );
}

renderSyllabusImages();
