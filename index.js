import{A as q,S as b,N as w,K as g,M as k,a as y}from"./assets/vendor-lgEX6uuX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const B="/DevCore16/assets/header_logo@1x-BcRfU5S5.png",D="/DevCore16/assets/header_logo@2x-9C1GhDcy.png",E={header:{srcset:D,src:B}};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".header-image").forEach(t=>{t.srcset=E.header.srcset,t.src=E.header.src})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header-burger-button"),t=document.querySelector(".header-mobile-menu-close-button"),n=document.querySelector(".header-mobile-menu-background"),s=document.querySelectorAll(".header-mobile-menu-link"),o=document.querySelector(".menu"),r=document.querySelector(".header-mobile-menu-order-button");function a(){n.classList.add("is-open"),document.body.style.overflow="hidden"}function d(){n.classList.remove("is-open"),document.body.style.overflow=""}e.addEventListener("click",a),o.addEventListener("click",a),t.addEventListener("click",d),s.forEach(i=>{i.addEventListener("click",f=>{f.preventDefault();const S=i.getAttribute("href").substring(1),L=document.getElementById(S);L&&window.scrollTo({top:L.offsetTop-50,behavior:"smooth"}),d()})}),n.addEventListener("click",i=>{i.target===n&&d()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&d()}),r&&r.addEventListener("click",i=>{i.preventDefault();const f=document.getElementById("work-together");f&&window.scrollTo({top:f.offsetTop-50,behavior:"smooth"}),d()})});new q(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});const P=document.querySelector(".about-me-swiper-btn-next");P.addEventListener("mousedown",function(){setTimeout(()=>{this.blur()},1e3)});new b(".about-me-swiper",{modules:[w,g,k],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,loop:!0,slidesPerView:2,spaceBetween:20,navigation:{nextEl:".about-me-swiper-btn-next"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".about-me-item");e.forEach(t=>{const n=t.querySelector(".about-me-btn"),s=t.querySelectorAll(".about-me-item-text"),o=n.querySelector(".about-me-icon");s.forEach(r=>r.style.display="none"),n.addEventListener("click",()=>{const r=s[0].style.display==="block";e.forEach(a=>{a.querySelectorAll(".about-me-item-text").forEach(d=>{d.style.display="none"}),a.querySelector(".about-me-icon").style.transform="rotate(0deg)"}),s.forEach(a=>{a.style.display=r?"none":"block"}),o.style.transform=r?"rotate(0deg)":"rotate(180deg)"})})});new b(".swiper",{modules:[w,g],slidesPerView:1,spaceBetween:20,speed:600,direction:"horizontal",watchOverflow:!0,allowTouchMove:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{768:{slidesPerView:1},1440:{slidesPerView:1}}});const Q="/DevCore16/assets/eng-1x-CjVpXSgp.png",C="/DevCore16/assets/eng-2x-Bhmb9js4.png",R="/DevCore16/assets/powerpulse-1x-C-GogTW0.png",V="/DevCore16/assets/powerpulse-2x-Du5qXJlb.png",K="/DevCore16/assets/energy-1x-DxE1cz1s.png",T="/DevCore16/assets/energy-2x-CsfSEKM1.png",N="/DevCore16/assets/wallet-1x-Y9iJw_iL.png",O="/DevCore16/assets/wallet-2x-CqBm4akm.png",W="/DevCore16/assets/greenharvest-1x-Cg6crfJT.png",X="/DevCore16/assets/greenharvest-2x-Dpr6Hezk.png",J="/DevCore16/assets/starlight-1x-C9Q8x9ZG.png",U="/DevCore16/assets/starlight-2x-CSjMciok.png",H="/DevCore16/assets/fruitbox-1x-Cy7jAlCL.png",j="/DevCore16/assets/fruitbox-2x-weKYFO7p.png",I="/DevCore16/assets/chego-1x-DVfvV1P5.png",Z="/DevCore16/assets/chego-2x-DisQeKUb.png",F="/DevCore16/assets/ukrainian-1x-CnILAIHc.png",z="/DevCore16/assets/ukrainian-2x-CXP58WHw.png",G="/DevCore16/assets/mimino-1x-DJLzgng8.png",M="/DevCore16/assets/mimino-2x-BkBbgeaD.png",v={eng:{srcset:Q,src:C},powerpulse:{srcset:R,src:V},energy:{srcset:K,src:T},wallet:{srcset:N,src:O},green:{srcset:W,src:X},starlight:{srcset:J,src:U},fruitbox:{srcset:H,src:j},chego:{srcset:I,src:Z},ukrain:{srcset:F,src:z},mimino:{srcset:G,src:M}};document.addEventListener("DOMContentLoaded",()=>{Object.keys(v).forEach(e=>{document.querySelectorAll(`.${e}`).forEach(n=>{n.srcset=v[e].srcset,n.src=v[e].src})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".covers"),t=new IntersectionObserver(n=>{n.forEach(s=>{s.intersectionRatio>=.5?(s.target.classList.add("active"),setTimeout(()=>{s.target.classList.add("slow-start")},1e3)):(s.target.classList.remove("active"),s.target.classList.remove("slow-start"))})},{threshold:.5});e.forEach(n=>{t.observe(n)})});const Y=document.querySelector(".reviews-list"),$=async()=>(await y.get("https://portfolio-js.b.goit.study/api/reviews")).data,_=async()=>{try{const e=await $();e.length>0?ee(e):h()}catch{h()}},ee=e=>{const t=e.map(({author:n,avatar_url:s,review:o})=>`<li class='reviews-list-item swiper-slide'>
      <picture>
        <source srcset ='${s}'
        type='image/jpeg'>
        <img 
          class='photo-review'
          src= '${s}'
        alt ='${n}'
        width ='48'
        height ='48'
        loading ='lazy'/>
      </picture>
      <h3 class= 'autor-review'>${n}</h3>
       <div class='review-text-wraper'>
      <p class='review-text'>${o}</p>
      </div>
    </li>`).join("");Y.innerHTML=t},h=(e="Not found")=>{const t=document.createElement("p");t.textContent=e,swiperEl.insertAdjacentElement("afterbegin",t)};_();new b(".reviews-swiper-container",{modules:[w,g],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const te="data:image/jpeg;base64,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",se="/DevCore16/assets/footer-avatar-mobile2-zK0MIOYZ.jpg",x={footer:{srcset:se,src:te}};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".footer-logo").forEach(t=>{t.srcset=x.footer.srcset,t.src=x.footer.src})});const A=document.querySelector(".footer-review-form"),l=document.querySelector(".email-input"),m=document.querySelector(".email-label"),c=document.querySelector(".message-input"),u=document.querySelector(".message-label"),p=document.querySelector(".modal-window-wrapper"),re=e=>{if(e.preventDefault(),console.log(l.checkValidity()),l.value.trim().length===0||!l.checkValidity()){m.classList.remove("input-label-succes"),l.classList.remove("input-field-succes"),m.classList.add("email-label-error"),l.classList.add("input-field-error"),c.value.trim().length===0?(u.classList.add("message-label-error"),c.classList.add("input-field-error")):(u.classList.remove("message-label-error"),c.classList.remove("input-field-error"),u.classList.add("input-label-succes"),c.classList.add("input-field-succes"));return}else if(m.classList.remove("email-label-error"),l.classList.remove("input-field-error"),m.classList.add("input-label-succes"),l.classList.add("input-field-succes"),c.value.trim().length===0){u.classList.add("message-label-error"),c.classList.add("input-field-error");return}else u.classList.remove("message-label-error"),c.classList.remove("input-field-error"),u.classList.add("input-label-succes"),c.classList.add("input-field-succes");let t={};const n=A.elements;for(let s of n)s.name&&(t[s.name]=s.value);y.post("https://portfolio-js.b.goit.study/api/requests",t).then(s=>{p.classList.add("is-open"),document.querySelector(".modal-close-btn").addEventListener("click",()=>{p.classList.remove("is-open")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&p.classList.remove("is-open")}),p.addEventListener("click",r=>{r.target===p&&p.classList.remove("is-open")}),A.reset(),m.classList.remove("input-label-succes"),l.classList.remove("input-field-succes"),u.classList.remove("input-label-succes"),c.classList.remove("input-field-succes")}).catch(s=>{console.log(s),alert("Something went wrong, please try again!")})};A.addEventListener("submit",re);
//# sourceMappingURL=index.js.map
