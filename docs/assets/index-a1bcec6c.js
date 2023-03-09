(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i="/assets/javascript-8dac5379.svg",a=async()=>(await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json())[0],l=async n=>{document.querySelector("#app-title").innerHTML="Breakingbad App",n.innerHTML="Loading...";const o=document.createElement("blockquote"),c=document.createElement("h3"),r=document.createElement("button");r.innerText="Next Quote",r.addEventListener("click",async()=>{n.innerHTML="Loading...";const t=await a();e(t)});const e=t=>{o.innerHTML=t.quote,c.innerHTML=t.author,n.replaceChildren(o,c,r)};a().then(e)};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${i}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;const u=document.querySelector(".card");l(u);
