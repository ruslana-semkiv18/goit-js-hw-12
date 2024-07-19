import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getGallery } from "./js/pixabay-api";
import { renderCard} from "./js/render-functions";

const params = {
    q: "",
    page: 1,
    per_page: 15,
    maxPage: 0,
};

const form = document.querySelector(".search-form");
const containerCard = document.querySelector(".card-container");
const loader = document.querySelector(".loader");
const btnLoadMore = document.querySelector(".load-button");

form.addEventListener("submit", handlerSearch);


async function handlerSearch(evt) {
  evt.preventDefault();
  containerCard.innerHTML = '';
  params.page = 1;
  const form = evt.currentTarget;
  params.q = form.elements.query.value.trim().toLowerCase();
  
  if (!params.q) {
    form.reset();
    return;
  }

  loader.style.display = "block";

  try {
    const { hits, totalHits } = await getGallery(params, loader);
    
    if (hits.length === 0) {
      createError();
      return;  
    }  

    params.maxPage = Math.ceil(totalHits / params.per_page);
    renderCard(hits, containerCard); 
    
    if (hits.length > 0 && hits.length !== totalHits) {
      btnLoadMore.style.display = "block";
      btnLoadMore.addEventListener("click", handleLoadMore);
    } else {
      btnLoadMore.style.display = "none";
    }
  } catch (err) { 
    console.log(err.message); 
  } finally {
    loader.style.display = "none";
    form.reset();  
  };
}



async function handleLoadMore() {
  params.page += 1;
  btnLoadMore.style.display = "none";
  loader.style.display = "block";
  try {
    const { hits } = await getGallery(params, loader);
    renderCard(hits, containerCard);
    smoothScroll();
  } catch (err) {
    console.log(err.message);
  } finally {
    loader.style.display = "none";
    btnLoadMore.style.display = "block";

    if (params.page === params.maxPage) {
      btnLoadMore.style.display = "none";
      btnLoadMore.removeEventListener("click", handleLoadMore);
      createInfo();
    }
  }
}


function createError() {
  iziToast.error({
    message: "Sorry, there are no images matching your search query. Please try again!",
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '1.5',
    messageFontWeight: '400',
    backgroundColor: '#ef4040',
    close: true,
    position: 'topRight',            
    progressBarColor: '#b51b1b',
   
});
}


function createInfo() {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '1.5',
    messageFontWeight: '400',
    backgroundColor: '#0099ff',
    close: true,
    position: 'topRight',            
    progressBarColor: '#0071bd',
   
});
}


function smoothScroll() {
    const galleryItem = document.querySelector('.card');
        const itemHeight = galleryItem.getBoundingClientRect().height;
        window.scrollBy({
            top: itemHeight * 2,
            left: 0,
            behavior: 'smooth'
        });
}



 