import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
function createItemMarkup(galleryItems){
return galleryItems.map(({preview, original, description}) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"      
    />
  </a>
</div>
  `;
}).join('');
}
const markup = createItemMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', markup);

galleryRef.addEventListener('click', onGalleryItemClick);


function onGalleryItemClick(e){
e.preventDefault();
if(e.target.nodeName !== 'IMG'){  
  return;  
}

const instance = basicLightbox.create(
  `<img src="${e.target.dataset.source}" width="800" height="600">`);
instance.show();``

galleryRef.addEventListener('keydown', (e) =>{
    if(e.code === "Escape"){
      instance.close();
    }
});
}

