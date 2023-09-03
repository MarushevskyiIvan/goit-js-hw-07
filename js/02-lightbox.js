import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGalleryListEl = document.querySelector(".gallery");

const galleryItemEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
      </a>
   </li>`
  )
  .join("");

imageGalleryListEl.insertAdjacentHTML("beforeend", galleryItemEl);

const lightbox = new SimpleLightbox(".gallery a");
