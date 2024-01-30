import{S as c,i as u}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader"),m=new c(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250,captionsPosition:"bottom"});function d(i){const r="42086416-f15f3f0137ece30b1354f2d54",e=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}f.addEventListener("submit",h);function h(i){i.preventDefault(),a.classList.remove("is-hidden"),l.innerHTML="";const r=i.currentTarget.elements.title.value.trim();d(r).then(o=>{o.hits.length===0&&u.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=p(o.hits),m.refresh()}).catch(o=>console.log(o)).finally(()=>{a.classList.add("is-hidden")})}function p(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,comments:t,downloads:n})=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${r}" 
    alt="${s}"/></a>
    <ul class="gallery-info">
          <li class="info-item">
            <h4 class="info-title">likes</h4>
            <p class="info-rez">${e}</p> 
          </li>
          <li class="info-item">
            <h4 class="info-title">comments</h4>
            <p class="info-rez">${t}</p> 
           </li>
          <li class="info-item">
            <h4 class="info-title">downloads</h4>
            <p class="info-rez">${n}</p> 
           </li>
        </ul> 
  </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
