import{S as L,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v="44916232-ab67e58f2cd7c4a8ed03790be",S="https://pixabay.com/";axios.defaults.baseURL=S;function p({q:r="",page:t=1,per_page:s=15}={},n){return n.style.display="block",axios.get("api/",{params:{key:v,q:r,page:t,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:e})=>e)}function m(r,t){const s=r.map(({webformatURL:e,largeImageURL:o,tags:c,likes:f,views:y,comments:h,downloads:b})=>`<div class="card">
        <div class="card-img">
         <a href="${o}"><img src="${e}" alt="${c}"></a>
        </div>
        <div class="card-body">
         <ul class="card-list">
          <li class="card-item"><span>Likes</span>${f}</li>
          <li class="card-item"><span>Views</span>${y}</li>
          <li class="card-item"><span>Comments</span>${h}</li>
          <li class="card-item"><span>Downloads</span>${b}</li>
         </ul>
       </div>
      </div>`).join("");t.insertAdjacentHTML("beforeend",s),new L(".card-img a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const a={q:"",page:1,per_page:15,maxPage:0},q=document.querySelector(".search-form"),d=document.querySelector(".card-container"),l=document.querySelector(".loader"),i=document.querySelector(".load-button");q.addEventListener("submit",x);async function x(r){r.preventDefault(),d.innerHTML="",a.page=1;const t=r.currentTarget;if(a.q=t.elements.query.value.trim().toLowerCase(),!a.q){t.reset();return}l.style.display="block";try{const{hits:s,totalHits:n}=await p(a,l);if(s.length===0){C();return}a.maxPage=Math.ceil(n/a.per_page),m(s,d),s.length>0&&s.length!==n?(i.style.display="block",i.addEventListener("click",g)):i.style.display="none"}catch(s){console.log(s.message)}finally{l.style.display="none",t.reset()}}async function g(){a.page+=1,i.style.display="none",l.style.display="block";try{const{hits:r}=await p(a,l);m(r,d),P()}catch(r){console.log(r.message)}finally{l.style.display="none",i.style.display="block",a.page===a.maxPage&&(i.style.display="none",i.removeEventListener("click",g),w())}}function C(){u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",messageFontWeight:"400",backgroundColor:"#ef4040",close:!0,position:"topRight",progressBarColor:"#b51b1b"})}function w(){u.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",messageFontWeight:"400",backgroundColor:"#0099ff",close:!0,position:"topRight",progressBarColor:"#0071bd"})}function P(){const t=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
