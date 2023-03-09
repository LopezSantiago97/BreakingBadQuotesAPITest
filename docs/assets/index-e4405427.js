(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const h="/BreakingBadQuotesAPITest/assets/javascript-8dac5379.svg";class p{constructor({id:a,isActive:s,balance:t,avatar:r,firstName:n,lastName:c,gender:l}){this.id=a,this.isActive=s,this.balance=t,this.avatar=r,this.firstName=n,this.lastName=c,this.gender=l}}const m=e=>{const{avatar:a,balance:s,first_name:t,gender:r,id:n,isActive:c,last_name:l}=e;return new p({avatar:a,balance:s,firstName:t,gender:r,id:n,isActive:c,lastName:l})},g=async(e=1)=>{const a=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(a)).json()).map(n=>m(n))},o={currentPage:0,users:[]},f=async()=>{const e=await g(o.currentPage+1);e.length!==0&&(o.currentPage++,o.users=e)},v=async()=>{if(o.currentPage-1<=0)return;const e=await g(o.currentPage-1);o.currentPage--,o.users=e},P=()=>{throw new Error("No implementado")},y=async()=>{throw new Error("No implementado")},i={loadNextPage:f,loadPreviousPage:v,onUserChanged:P,reloadPage:y,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage};let d;const b=()=>{const e=document.createElement("table"),a=document.createElement("thead");a.innerHTML=`
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;const s=document.createElement("tbody");return e.append(a,s),e},u=e=>{const a=i.getUsers();d||(d=b(),e.append(d));let s="";a.forEach(t=>{s+=`
            <tr>
                <td>${t.id}</td>
                <td>${t.balance}</td>
                <td>${t.firstName}</td>
                <td>${t.lastName}</td>
                <td>${t.isActive}</td>
                <td>
                    <a href="#/" data-id="${t.id}">Select</a>
                    |
                    <a href="#/" data-id="${t.id}">Delete</a>
                </td>
            </tr>
        `}),d.querySelector("tbody").innerHTML=s};const L=e=>{const a=document.createElement("button");a.innerText=" Next >";const s=document.createElement("button");s.innerText="< Prev ";const t=document.createElement("span");t.id="current-page",t.innerText=i.getCurrentPage(),e.append(s,t,a),a.addEventListener("click",async()=>{await i.loadNextPage(),t.innerText=i.getCurrentPage(),u(e)}),s.addEventListener("click",async()=>{await i.loadPreviousPage(),t.innerText=i.getCurrentPage(),u(e)})},N=async e=>{e.innerHTML="Loading...",await i.loadNextPage(),e.innerHTML="",u(e),L(e)};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${h}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;const T=document.querySelector(".card");N(T);
