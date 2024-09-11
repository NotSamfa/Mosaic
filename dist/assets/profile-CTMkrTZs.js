import"./utils-CY1lnzBr.js";/* empty css             */async function s(){try{return await(await fetch("/songs.json")).json()}catch(t){console.error("Error fetching songs data:",t)}}async function r(){try{return await(await fetch("/movies.json")).json()}catch(t){console.error("Error fetching movies data:",t)}}function a(t){const o=document.querySelector(".history__content");o.innerHTML="",t.songs.forEach(e=>{const n=document.createElement("div");n.classList.add("history__item"),n.innerHTML=`
        <img src="${e.cover}" alt="${e.title}" class="history__cover">
        <p>${e.title} - ${e.artist}</p>
        `,o.appendChild(n)})}function c(t){const o=document.querySelector(".history__content");t.movies.forEach(e=>{const n=document.createElement("div");n.classList.add("history__item"),n.innerHTML=`
        <img src="${e.poster}" alt="${e.title}" class="history__cover">
        <p>${e.title} - ${e.director}</p>
        `,o.appendChild(n)})}document.addEventListener("DOMContentLoaded",async function(){const t=await s(),o=await r();console.log(t.songs),t&&a(t),o&&c(o)});
