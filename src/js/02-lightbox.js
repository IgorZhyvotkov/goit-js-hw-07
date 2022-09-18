import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
function createItemMarkup(galleryItems){
return galleryItems.map(({preview, original, description}) => {
  return ` 
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"      
    />
  </a>
  `;
}).join('');
}
const markup = createItemMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});



