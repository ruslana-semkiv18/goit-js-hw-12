import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



export function renderCard(img, containerCard) {

  const markup = img.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
      `<div class="card">
        <div class="card-img">
         <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
        </div>
        <div class="card-body">
         <ul class="card-list">
          <li class="card-item"><span>Likes</span>${likes}</li>
          <li class="card-item"><span>Views</span>${views}</li>
          <li class="card-item"><span>Comments</span>${comments}</li>
          <li class="card-item"><span>Downloads</span>${downloads}</li>
         </ul>
       </div>
      </div>`).join("");
  
    
    containerCard.insertAdjacentHTML("beforeend", markup);

    const lightbox = new SimpleLightbox('.card-img a', {
        captions: true,
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });

      lightbox.refresh();

}
 