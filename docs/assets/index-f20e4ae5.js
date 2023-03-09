(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const w="/BreakingBadQuotesAPITest/assets/javascript-8dac5379.svg";class y{constructor({id:t,isActive:r,balance:a,avatar:s,firstName:n,lastName:c,gender:m}){this.id=t,this.isActive=r,this.balance=a,this.avatar=s,this.firstName=n,this.lastName=c,this.gender=m}}const g=e=>{const{avatar:t,balance:r,first_name:a,gender:s,id:n,isActive:c,last_name:m}=e;return new y({avatar:t,balance:r,firstName:a,gender:s,id:n,isActive:c,lastName:m})},p=async(e=1)=>{const t=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(t)).json()).map(n=>g(n))},o={currentPage:0,users:[]},N=async()=>{const e=await p(o.currentPage+1);e.length!==0&&(o.currentPage++,o.users=e)},b=async()=>{if(o.currentPage-1<=0)return;const e=await p(o.currentPage-1);o.currentPage--,o.users=e},P=e=>{let t=!1;o.users=o.users.map(r=>r.id===e.id?(t=!0,e):r),o.users.length<10&&!t&&o.users.push(e)},T=async()=>{const e=await p(o.currentPage);if(e.length===0){await b();return}o.users=e},l={loadNextPage:N,loadPreviousPage:b,onUserChanged:P,reloadPage:T,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},S=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t,{method:"DELETE"})).json();return console.log({deleteResult:a}),!0},$=`\r
<div class="modal-dialog">\r
    <form novalidate>\r
        <span>User</span>\r
        <input type="text" name="firstName" placeholder="First Name" />\r
        <input type="text" name="lastName" placeholder="Last Name" />\r
        <input type="number" name="balance" placeholder="Balance" />\r
\r
        <div>\r
            <input type="checkbox" id="is-active" name="isActive" checked/>\r
            <label for="is-active">is active?</label>\r
        </div>\r
\r
        <button type="submit">\r
            Save\r
        </button>\r
\r
    </form>\r
\r
</div>`,E=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t)).json();return g(a)};let i,d,f={};const L=async e=>{if(i==null||i.classList.remove("hide-modal"),f={},!e)return;const t=await E(e);A(t)},v=()=>{i==null||i.classList.add("hide-modal"),d==null||d.reset()},A=e=>{d.querySelector('[name="firstName"]').value=e.firstName,d.querySelector('[name="lastName"]').value=e.lastName,d.querySelector('[name="balance"]').value=e.balance,d.querySelector('[name="isActive"]').checked=e.isActive,f=e},U=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=$,i.className="modal-container hide-modal",d=i.querySelector("form"),i.addEventListener("click",r=>{r.target.className==="modal-container"&&v()}),d.addEventListener("submit",async r=>{r.preventDefault();const a=new FormData(d),s={...f};for(const[n,c]of a){if(n==="balance"){s[n]=+c;continue}if(n==="isActive"){s[n]=c==="on";continue}s[n]=c}await t(s),v()}),e.append(i))};let u;const x=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;const r=document.createElement("tbody");return e.append(t,r),e},B=e=>{const t=e.target.closest(".select-user");if(!t)return;const r=t.getAttribute("data-id");L(r)},M=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const r=t.getAttribute("data-id");try{await S(r),await l.reloadPage(),document.querySelector("#current-page").innerText=l.getCurrentPage(),h()}catch(a){console.log(a),alert("No se pudo eliminar el registro")}},h=e=>{const t=l.getUsers();u||(u=x(),e.append(u),u.addEventListener("click",B),u.addEventListener("click",M));let r="";t.forEach(a=>{r+=`
            <tr>
                <td>${a.id}</td>
                <td>${a.balance}</td>
                <td>${a.firstName}</td>
                <td>${a.lastName}</td>
                <td>${a.isActive}</td>
                <td>
                    <a href="#/" class="select-user" data-id="${a.id}">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${a.id}">Delete</a>
                </td>
            </tr>
        `}),u.querySelector("tbody").innerHTML=r};const q=e=>{const t=document.createElement("button");t.innerText=" Next >";const r=document.createElement("button");r.innerText="< Prev ";const a=document.createElement("span");a.id="current-page",a.innerText=l.getCurrentPage(),e.append(r,a,t),t.addEventListener("click",async()=>{await l.loadNextPage(),a.innerText=l.getCurrentPage(),h(e)}),r.addEventListener("click",async()=>{await l.loadPreviousPage(),a.innerText=l.getCurrentPage(),h(e)})};const H=e=>{const t=document.createElement("button");t.innerText="+",t.classList.add("fab-button"),e.append(t),t.addEventListener("click",()=>{L()})},j=e=>{const{avatar:t,balance:r,firstName:a,gender:s,id:n,isActive:c,lastName:m}=e;return{avatar:t,balance:r,first_name:a,gender:s,id:n,isActive:c,last_name:m}},C=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"First & last name are required";const r=j(t);let a;return t.id?a=await O(r):a=await k(r),g(a)},k=async e=>{const a=await(await fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({newUser:a}),a},O=async e=>{const t=`http://localhost:3001/users/${e.id}`,a=await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({updatedUser:a}),a},D=async e=>{e.innerHTML="Loading...",await l.loadNextPage(),e.innerHTML="",h(e),q(e),H(e),U(e,async t=>{const r=await C(t);l.onUserChanged(r),h()})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${w}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;const F=document.querySelector(".card");D(F);
