import{S as p,i as m}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),l=document.querySelector(".search-form"),u=document.querySelector(".loader"),f="gallery-link";l.addEventListener("submit",function(r){r.preventDefault();const o=r.target.elements.search.value;o!==""&&(c.innerHTML="",u.style.display="block",y(o).then(function({hits:s,total:a}){if(Array.isArray(s)&&s.length>0){const e=s.map(F).join("");c.innerHTML=e,d(`Was found: ${a} images`),new p(`.${f}`).refresh()}else n("Sorry, there are no images matching your search query. Please try again!")}).catch(function(s){n(`Error fetching images: ${s}`)}).finally(function(){l.reset(),u.style.display="none"}))});const g={titleColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"16px",position:"topRight",displayMode:"replace",closeOnEscape:!0,pauseOnHover:!1,maxWidth:432,messageSize:"16px",messageLineHeight:"24px"};function n(r){m.show({message:r,backgroundColor:"#EF4040",progressBarColor:"#FFE0AC",icon:"icon-close",...g})}function d(r){m.show({message:r,backgroundColor:"#59A10D",progressBarColor:"#B5EA7C",icon:"icon-chek",...g})}const h="https://pixabay.com/api/";function y(r){const s=`?${new URLSearchParams({key:"42205340-8125de1ae06f98e0344d3d2b5",q:r,image_type:"photo",orientation:"horizontal",safeSearch:!0})}`,a=h+s;return fetch(a).then(e=>e.json()).catch(e=>{throw n(`Error fetching images: ${e}`),e})}function F({largeImageURL:r,tags:o,webformatURL:s,likes:a,views:e,comments:t,downloads:i}){return`
  <a href="${r}" class="${f}">
     <figure>
      <img src="${s}" alt="${o}" class="gallery-image">
      <figcaption class="gallery__figcaption">
        <div class="image-item">Likes <span class="image-elem">${a}</span></div>
        <div class="image-item">Views <span class="image-elem">${e}</span></div>
        <div class="image-item">Comments <span class="image-elem">${t}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${i}</span></div>
  </figcaption>
  </figure>
</a>
`}
//# sourceMappingURL=commonHelpers.js.map
