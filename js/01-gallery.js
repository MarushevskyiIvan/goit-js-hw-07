import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGalleryListEl = document.querySelector(".gallery");

imageGalleryListEl.addEventListener("click", onImgClickModal);

const galleryItemEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img 
      class="gallery__image"
      width ="500"
      loading="lazy"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></li>`
  )
  .join("");

imageGalleryListEl.insertAdjacentHTML("beforeend", galleryItemEl);

function onImgClickModal(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const targetEl = event.target.closest(".gallery__image");
  const imageDataEl = targetEl.dataset.source;

  const imageDataInfo = galleryItems.find(
    (data) => data.original === imageDataEl
  );

  const instance = basicLightbox.create(`
      <div class="modal">
      <img
      src="${imageDataInfo.original}"
      alt="${imageDataInfo.description}"
    />
      </div>
  `);

  instance.show(window.addEventListener("keydown", onCloseModalFromEsc));

  function onCloseModalFromEsc(event) {
    if (event.code === "Escape") {
      instance.close(
        window.removeEventListener("keydown", onCloseModalFromEsc)
      );
    }
  }
}
