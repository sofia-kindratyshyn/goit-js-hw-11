import{S as n,a as c,i as u}from"./assets/vendor-BBSqv8W6.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const g=new n(".gallery a",{captionDelay:250});function m(r){const l=r.map(t=>`<li class="gallery-item">
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
      </li>`).join("");document.querySelector(".gallery").innerHTML=l,g.refresh()}function y(){document.querySelector(".gallery").innerHTML=""}function d(){const r=document.querySelector(".loader");r&&r.classList.add("open")}function p(){const r=document.querySelector(".loader");r&&r.classList.remove("open")}async function f(r){try{const t=(await c.get("https://pixabay.com/api/",{params:{key:"49632762-ccb8ac978f5dd2d4af8186ee2",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;if(t.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:"/img/bi_x-octagon.png",imageWidth:50,maxWidth:432,messageSize:"16px",messageLineHeight:"24px",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}m(t)}catch(l){throw console.error("Помилка запиту:",l),l}}const i=document.querySelector("form");i.addEventListener("submit",h);async function h(r){r.preventDefault();const l=i.elements[0].value.trim();if(l!==""){y(),d();try{await f(l)}catch(t){console.log("Помилка запиту:",t)}finally{p()}}}
//# sourceMappingURL=index.js.map
