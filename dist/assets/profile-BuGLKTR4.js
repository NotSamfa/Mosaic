import"./utils-CY1lnzBr.js";/* empty css             */async function n(){try{return await(await fetch("../src/utils/songs.json")).json()}catch(t){console.error("Error fetching songs data:",t)}}async function r(){try{return await(await fetch("../src/utils/movies.json")).json()}catch(t){console.error("Error fetching movies data:",t)}}function a(t){const o=document.querySelector(".history__content");o.innerHTML="",t.songs.forEach(s=>{const e=document.createElement("div");e.classList.add("history__item"),e.innerHTML=`
        <img src="${s.cover}" alt="${s.title}" class="history__cover">
        <p>${s.title} - ${s.artist}</p>
        `,o.appendChild(e)})}function c(t){const o=document.querySelector(".history__content");t.movies.forEach(s=>{const e=document.createElement("div");e.classList.add("history__item"),e.innerHTML=`
        <img src="${s.poster}" alt="${s.title}" class="history__cover">
        <p>${s.title} - ${s.director}</p>
        `,o.appendChild(e)})}document.addEventListener("DOMContentLoaded",async function(){const t=await n(),o=await r();console.log(t.songs),t&&a(t),o&&c(o)});
