"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[493],{5925:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(1082),o="nav-module--item--C0MFa",r=a(5693);function c(e){var t=n.useState(""),a=t[0],c=t[1];return n.useEffect((function(){c(window.localStorage.getItem("CC-Language"))}),[]),n.createElement("div",{className:"nav-module--Nav--muf5+"},n.createElement("div",{className:"nav-module--fade--APgrf",id:"fade"}),n.createElement("div",{className:"nav-module--navWindow--BM94m",id:"nav"},n.createElement("img",{src:r.Z,alt:"logo",className:"nav-module--logo--0Tow9"}),n.createElement(l.rU,{to:"/",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"ANASAYFA":"HOME"),n.createElement(l.rU,{to:"/products"+window.location.search.slice(0,3)+"&cat",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"KEDİLER":"FOR CATS"),n.createElement(l.rU,{to:"/products"+window.location.search.slice(0,3)+"&dog",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"KÖPEKLER":"FOR DOGS"),n.createElement(l.rU,{to:"/about",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"HAKKIMIZDA":"ABOUT"),n.createElement(l.rU,{to:"/contact",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"İLETİŞİM":"CONTACT US")))}function i(e){return n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB00lEQVR4nO3az0pVURTH8e9KB9FUIishIa0GBv2hR9BGOS3IegNp5gPVE+Q0eoKwO8ig6A8KhRAVd5QN9P4c3Adwr909f9LfZ7z2PWstzmHfdfYBMzMzMzMzO30iu0DSfeAxcB2YmnhGdQ6Bj8CLiHjV2FUkPZM0Un+NJK1naiq+AyTNAN+As9nGtewvcDkifpcEn0n88G36XzyMc7xTGpxpwM98Lp35URqYacA2MMjn0rot4H1pcHEDIuIAeEi/m7AFPIqIw9IFNdvgFLAELNasb4iAT8B2pngzMzvtarbBOeABcGXy6fyTXWAzIr43dgVJK5KGXY57xxhKWs7UlJkGzwFfgQvZxrVsD7gaEfslwZlZ4C79Lx7gIg1Ng6N8Lp1RaWD2EfgCzNZk1KJmHoGI+AM8BYaVibVhCDwpLR7qtsFLwCown13bsB3gZUTsdZ2ImZn9L2q2wWnGL0UXatY3RMBn4F2jL0UlXZM06HDaO85bSYuZmjJ/haeBN8CtbONaNgDuld4JmWHoJv0vHsZnmEulwZkGzORz6cz50sCTeDy+D8xN/Hg8In4BGyRm7Q4I2CgtHuq2wWVgDbhBvz6R+QA8j4jXXSdjZmZmZmZmfXcEAtBOIkn/Cc4AAAAASUVORK5CYII=",className:"burger-module--burgerIcon--xYe0h",onClick:e.handleNavToggle,id:"burger"})}var s="footer-module--link--CK31r";function m(e){var t=n.useState(""),a=t[0],o=t[1],c=n.useState(""),i=c[0],m=c[1];return n.useEffect((function(){m(window.localStorage.getItem("CC-Language"))}),[]),n.createElement("div",{className:"footer-module--Footer---K+Td",id:"footer"},n.createElement("img",{src:r.Z,alt:"logo",className:"footer-module--logo--v5Z8f"}),n.createElement("form",{className:"footer-module--newsletter--K8Kr1"},n.createElement("h3",{className:"footer-module--heading--j0bzy"},"en-EU"===i?"Sign up to our newsletter to stay up-to-date with our products and news!":"Ürünlerimizden ve gelişmelerden haberdar olmak için bültenimize abone olun!"),n.createElement("input",{className:"footer-module--email--aXtio",type:"text",name:"email",placeholder:"en-EU"===i?"Enter your email...":"Emailinizi yazin...",value:a,onInput:function(e){return o(e.target.value)},autoComplete:"off"}),n.createElement("input",{type:"submit",value:"en-EU"===i?"SIGN UP":"ABONE OL",className:"footer-module--signup--BaAvT"})),n.createElement("div",{className:"footer-module--subFooter--LVm0M"},n.createElement(l.rU,{to:"/privacypolicy",className:s},n.createElement("p",null,"tr-TR"===i?"Gizlilik Politikası":"PRIVACY POLICY")),n.createElement(l.rU,{to:"/termsofuse",className:s},n.createElement("p",null,"tr-TR"===i?"Kullanım Koşulları":"TERMS OF USE")),n.createElement("p",{className:"footer-module--subFooterText--dxvxB"},"ATLASJET HAVACILIK SAN. LTD. ŞTİ. 2022 © ","tr-TR"===i?"Tüm hakları saklıdır.":"All Rights Reserved.")))}function u(e){var t=e.children;if("undefined"!=typeof window){var a=n.useState(""),l=a[0],o=a[1],r=window.location.search.split("&").slice(-1);r="?"===r[0]?"":r,n.useEffect((function(){null===window.localStorage.getItem("CC-Language")?(window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr"):"en-EU"===window.localStorage.getItem("CC-Language")?(window.history.replaceState({},"Chef's Choice","?en&"+r),o("en-EU")):(window.history.replaceState({},"Chef's Choice","?tr&"+r),o("tr-TR"))}),[]);window.innerHeight;var s=window.innerWidth,u=n.useState(!1),d=u[0],g=u[1],f=n.useCallback((function(){g(!d)}),[d]);return n.createElement("div",{className:"layout-module--Layout--GW6vs",id:"layout"},n.createElement(i,{handleNavToggle:function(){f(),A()}}),n.createElement(c,{handleNavToggle:function(){f(),A()}}),n.createElement("div",{className:"layout-module--languageContainer--P878L",id:"language"},n.createElement("p",{className:"layout-module--EN--6yphZ",onClick:function(){return E("en-EU")},style:{transform:"en-EU"===l?"scale(1.33)":"scale(1)"}},"EN"),n.createElement("p",{className:"layout-module--TR--B67Pf",onClick:function(){return E("tr-TR")},style:{transform:"tr-TR"===l?"scale(1.33)":"scale(1)"}},"TR")),n.createElement("div",null,t),n.createElement(m,null))}function E(e){"en-EU"===e?(o("en-EU"),window.localStorage.setItem("CC-Language","en-EU"),window.location.search="?en&"+r):(o("tr-TR"),window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr&"+r)}function A(){var e=document.getElementById("fade"),t=document.getElementById("nav");if(d)var a=0,n=50,l=setInterval((function(){t.style.left=a+"px",e.style.backgroundColor="rgba(0,0,0,"+n/100+")",n-=1,(a-=10)<=-s/2&&(clearInterval(l),e.style.display="none")}),5);else{var o=-s/2,r=0;e.style.display="block";var c=setInterval((function(){t.style.left=o+"px",e.style.backgroundColor="rgba(0,0,0,"+r/100+")",r+=1,(o+=10)>=10&&clearInterval(c)}),5)}}}},8981:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),l=a(5925);function o(){return n.createElement(l.Z,null,n.createElement("div",{className:"export-module--Export--D6nJg"},n.createElement("h1",null,"Export Page")))}},5693:function(e,t,a){t.Z=a.p+"static/Chefs Choice Logo-26234bbafb32c80fbf507e90b11eeaa6.png"}}]);
//# sourceMappingURL=component---src-pages-export-js-9e09697e482aa8e99c78.js.map