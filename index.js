import{S as n,a as c,i as u}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(e){if(e.ep)return;e.ep=!0;const l=t(e);fetch(e.href,l)}})();const m=new n(".gallery a",{captionDelay:250});function d(s){const r=s.map(t=>`<li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img alt="${t.tags}" src="${t.webformatURL}" class="gallery-img" />
        </a>
        <ul class="gallery-text-list">
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Likes</h2>
            <p class="gallery-text-parag">${t.likes}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Views</h2>
            <p class="gallery-text-parag">${t.views}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Comments</h2>
            <p class="gallery-text-parag">${t.comments}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Downloads</h2>
            <p class="gallery-text-parag">${t.downloads}</p>
          </li>
        </ul>
      </li>`).join("");document.querySelector(".gallery").innerHTML=r,m.refresh()}function g(){document.querySelector(".gallery").innerHTML=""}function p(){document.querySelector("span").classList.add("loader")}function y(){document.querySelector("span").classList.remove("loader")}function f(s){c.get("https://pixabay.com/api/",{params:{key:"49632762-ccb8ac978f5dd2d4af8186ee2",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{const t=r.data.hits;if(t.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:"/img/bi_x-octagon.png",imageWidth:50,maxWidth:432,messageSize:"16px",messageLineHeight:"24px",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}d(t)}).catch(r=>console.log("Помилка під час запиту:",r))}const i=document.querySelector("form");i.addEventListener("submit",h);function h(s){s.preventDefault();const r=i.elements[0].value.trim();p(),setTimeout(()=>{f(r)},2e3),setTimeout(()=>{y()},1999),g()}
//# sourceMappingURL=index.js.map
