import{S as a,i as u}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=new a(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250,captionsPosition:"bottom"});function m(n){const r="42086416-f15f3f0137ece30b1354f2d54",e=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:n,image_type:"photo"})}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}f.addEventListener("submit",p);function p(n){n.preventDefault(),c.classList.remove("is-hidden"),l.innerHTML="";const r=n.currentTarget.elements.title.value.trim();m(r).then(o=>{o.hits.length===0&&u.error({position:"topRight",title:"Error",message:"Sorry"}),l.innerHTML=h(o.hits),d.refresh()}).catch(o=>console.log(o)).finally(()=>{c.classList.add("is-hidden")})}function h(n){return n.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,comments:t,downloads:s})=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${r}" 
    alt="${i}"/>
    <p>likes: ${e}</p>
    <p>comments: ${t}</p>
    <p>downloads: ${s}</p>
  </a>
</li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
