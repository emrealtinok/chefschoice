"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[501],{5253:function(e,t,a){a.d(t,{Z:function(){return M}});var l=a(7294),n=a(1082),c="nav-module--item--C0MFa",o=a(5693);function r(e){if("undefined"!=typeof window){var t=l.useState(""),a=t[0],r=t[1];return l.useEffect((function(){r(window.localStorage.getItem("CC-Language"))}),[]),l.createElement("div",{className:"nav-module--Nav--muf5+"},l.createElement("div",{className:"nav-module--fade--APgrf",id:"fade"}),l.createElement("div",{className:"nav-module--navWindow--BM94m",id:"nav"},l.createElement("img",{src:o.Z,alt:"logo",className:"nav-module--logo--0Tow9"}),l.createElement(n.rU,{to:"/",className:c,onClick:e.handleNavToggle},"tr-TR"===a?"ANASAYFA":"HOME"),l.createElement(n.rU,{to:"/products"+window.location.search.slice(0,3)+"&cat",className:c,onClick:e.handleNavToggle},"tr-TR"===a?"KEDİLER":"FOR CATS"),l.createElement(n.rU,{to:"/products"+window.location.search.slice(0,3)+"&dog",className:c,onClick:e.handleNavToggle},"tr-TR"===a?"KÖPEKLER":"FOR DOGS"),l.createElement(n.rU,{to:"/about",className:c,onClick:e.handleNavToggle},"tr-TR"===a?"HAKKIMIZDA":"ABOUT"),l.createElement(n.rU,{to:"/contact",className:c,onClick:e.handleNavToggle},"tr-TR"===a?"İLETİŞİM":"CONTACT US")))}}function s(e){return l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB00lEQVR4nO3az0pVURTH8e9KB9FUIishIa0GBv2hR9BGOS3IegNp5gPVE+Q0eoKwO8ig6A8KhRAVd5QN9P4c3Adwr909f9LfZ7z2PWstzmHfdfYBMzMzMzMzO30iu0DSfeAxcB2YmnhGdQ6Bj8CLiHjV2FUkPZM0Un+NJK1naiq+AyTNAN+As9nGtewvcDkifpcEn0n88G36XzyMc7xTGpxpwM98Lp35URqYacA2MMjn0rot4H1pcHEDIuIAeEi/m7AFPIqIw9IFNdvgFLAELNasb4iAT8B2pngzMzvtarbBOeABcGXy6fyTXWAzIr43dgVJK5KGXY57xxhKWs7UlJkGzwFfgQvZxrVsD7gaEfslwZlZ4C79Lx7gIg1Ng6N8Lp1RaWD2EfgCzNZk1KJmHoGI+AM8BYaVibVhCDwpLR7qtsFLwCown13bsB3gZUTsdZ2ImZn9L2q2wWnGL0UXatY3RMBn4F2jL0UlXZM06HDaO85bSYuZmjJ/haeBN8CtbONaNgDuld4JmWHoJv0vHsZnmEulwZkGzORz6cz50sCTeDy+D8xN/Hg8In4BGyRm7Q4I2CgtHuq2wWVgDbhBvz6R+QA8j4jXXSdjZmZmZmZmfXcEAtBOIkn/Cc4AAAAASUVORK5CYII=",className:"burger-module--burgerIcon--xYe0h",onClick:e.handleNavToggle,id:"burger"})}var m="footer-module--link--CK31r";function i(e){var t=l.useState(""),a=t[0],c=t[1],r=l.useState(""),s=r[0],i=r[1];return l.useEffect((function(){i(window.localStorage.getItem("CC-Language"))}),[]),l.createElement("div",{className:"footer-module--Footer---K+Td",id:"footer"},l.createElement("img",{src:o.Z,alt:"logo",className:"footer-module--logo--v5Z8f"}),l.createElement("form",{className:"footer-module--newsletter--K8Kr1"},l.createElement("h3",{className:"footer-module--heading--j0bzy"},"en-EU"===s?"Sign up to our newsletter to stay up-to-date with our products and news!":"Ürünlerimizden ve gelişmelerden haberdar olmak için bültenimize abone olun!"),l.createElement("input",{className:"footer-module--email--aXtio",type:"text",name:"email",placeholder:"en-EU"===s?"Enter your email...":"Emailinizi yazin...",value:a,onInput:function(e){return c(e.target.value)},autoComplete:"off"}),l.createElement("input",{type:"submit",value:"en-EU"===s?"SIGN UP":"ABONE OL",className:"footer-module--signup--BaAvT"})),l.createElement("div",{className:"footer-module--subFooter--LVm0M"},l.createElement(n.rU,{to:"/privacypolicy",className:m},l.createElement("p",null,"tr-TR"===s?"Gizlilik Politikası":"PRIVACY POLICY")),l.createElement(n.rU,{to:"/termsofuse",className:m},l.createElement("p",null,"tr-TR"===s?"Kullanım Koşulları":"TERMS OF USE")),l.createElement("p",{className:"footer-module--subFooterText--dxvxB"},"ATLASJET HAVACILIK SAN. LTD. ŞTİ. 2022 © ","tr-TR"===s?"Tüm hakları saklıdır.":"All Rights Reserved.")))}function M(e){var t=e.children;if("undefined"!=typeof window){var a=l.useState(""),n=a[0],c=a[1],o=window.location.search.split("&").slice(-1);o="?"===o[0]?"":o,l.useEffect((function(){null===window.localStorage.getItem("CC-Language")?(window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr"):"en-EU"===window.localStorage.getItem("CC-Language")?(window.history.replaceState({},"Chef's Choice","?en&"+o),c("en-EU")):(window.history.replaceState({},"Chef's Choice","?tr&"+o),c("tr-TR"))}),[]);var m=window.innerWidth,M=l.useState(!1),u=M[0],N=M[1],L=l.useCallback((function(){N(!u)}),[u]);return l.createElement("div",{className:"layout-module--Layout--GW6vs",id:"layout"},l.createElement(s,{handleNavToggle:function(){L(),w()}}),l.createElement(r,{handleNavToggle:function(){L(),w()}}),l.createElement("div",{className:"layout-module--languageContainer--P878L",id:"language"},l.createElement("p",{className:"layout-module--EN--6yphZ",onClick:function(){return g("en-EU")},style:{transform:"en-EU"===n?"scale(1.33)":"scale(1)"}},"EN"),l.createElement("p",{className:"layout-module--TR--B67Pf",onClick:function(){return g("tr-TR")},style:{transform:"tr-TR"===n?"scale(1.33)":"scale(1)"}},"TR")),l.createElement("div",null,t),l.createElement(i,null))}function g(e){"en-EU"===e?(c("en-EU"),window.localStorage.setItem("CC-Language","en-EU"),window.location.search="?en&"+o):(c("tr-TR"),window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr&"+o)}function w(){var e=document.getElementById("fade"),t=document.getElementById("nav");if(m=m<800?2*m:m,u)var a=0,l=50,n=setInterval((function(){t.style.left=a+"px",e.style.backgroundColor="rgba(0,0,0,"+l/100+")",l=(l-=1)<=0?0:l,(a-=10)<=-m/2&&(clearInterval(n),e.style.display="none")}),4);else{var c=-m/2,o=0;e.style.display="block";var r=setInterval((function(){t.style.left=c+"px",e.style.backgroundColor="rgba(0,0,0,"+o/100+")",o=(o+=1)>=75?75:o,(c+=10)>=10&&clearInterval(r)}),4)}}}},6897:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(7294),n=a(5253),c="contact-module--icon--zTCro",o="contact-module--input--dkxQY",r="contact-module--linkText--6DdCC",s=a(5693);function m(){var e=l.useState(""),t=e[0],a=e[1];return l.useEffect((function(){a(window.localStorage.getItem("CC-Language"))}),[]),l.createElement(n.Z,null,l.createElement("div",{className:"contact-module--Contact--NsavJ"},l.createElement("div",{className:"contact-module--infoCard--uZFM2"},l.createElement("img",{src:s.Z,alt:"logo",className:"contact-module--logo--fLQCE"}),l.createElement("section",{className:"contact-module--infoContent--hp7uP"},l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAgMzYwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTgwLDkyLjE1Yy0zOS4zOCwwLTcxLjMyLDMwLjc4LTcxLjMyLDY4LjczLDAsNDguMTEsMzguODEsODcuMTEsNzEuMzIsMTA3LDMyLjUxLTE5Ljg2LDcxLjMyLTU4Ljg2LDcxLjMyLTEwN0MyNTEuMzIsMTIyLjkzLDIxOS4zOCw5Mi4xNSwxODAsOTIuMTVabTAsMTAxLjc4Yy0xOC45NSwwLTM0LjMtMTQuNzktMzQuMy0zMy4wNXMxNS4zNS0zMywzNC4zLTMzLDM0LjMsMTQuNzksMzQuMywzMy4wNVMxOTksMTkzLjkzLDE4MCwxOTMuOTNaIi8+PC9zdmc+",alt:"pin",className:c}),l.createElement("a",{href:"https://www.google.com/maps/place/Atlaspet+Pet+%C3%9Cr%C3%BCnleri+Pazarlama+ve+Sat%C4%B1%C5%9F+A.%C5%9E./@41.176849,28.8880153,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab2ee15ef03c3:0xbe89122384c3309f!8m2!3d41.17678!4d28.8902046",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"}},l.createElement("p",{className:r},"Göktürk Merkez Mah.",l.createElement("br",null),"Göktürk Cad. No.2 Suvenue Sitesi ",l.createElement("br",null)," D Blok Daire 7  ",l.createElement("br",null),"34075 Eyüp/İstanbul ")),l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAgMzYwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE1MS4yNiAxNzcuNzggODMuNyAyMzIuNjYgODMuNyAxMjcuMTEgMTUxLjI2IDE3Ny43OCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxODAgMTg0LjM0IDkzLjcgMTE5LjYxIDI2Ni4zIDExOS42MSAxODAgMTg0LjM0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE5OC44NCAxODUuMjEgMjY2Ljc2IDI0MC4zOCA5My4yMyAyNDAuMzggMTYxLjE2IDE4NS4yMSAxODAgMTk5LjM0IDE5OC44NCAxODUuMjEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjc2LjMgMTI3LjExIDI3Ni4zIDIzMi42NiAyMDguNzQgMTc3Ljc4IDI3Ni4zIDEyNy4xMSIvPjwvc3ZnPg==",alt:"envelope",className:c}),l.createElement("a",{href:"mailto: info@chefschoice.com.tr",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"}},l.createElement("p",{className:r},"info@chefschoice.com.tr")),l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAgMzYwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjM2LDIxNC4zOWwtLjM5LDBhOTEuOTIsOTEuOTIsMCwwLDAtMTAuMjYtLjcxYy04LjYsMC0xMy41MywyLjItMTQuNjYsNi41Ni0xLjQ0LDUuNi0yLjY3LDEwLjEyLTMuMTQsMTEuODdhNSw1LDAsMCwxLS43NC4wNWMtNi4xNSwwLTIxLjQyLTguNjktNDUuODMtMzMuMS0yOS4wNy0yOS4wNy0zMy43MS00Mi44NS0zMy00Ni41NywxLjc0LS40Nyw2LjI3LTEuNywxMS44Ny0zLjE0LDguMzktMi4xNyw2LjY4LTE3LjU0LDUuODUtMjQuOTNsMC0uMzdjLTEuMjktMTEuNjUtMy45MS0yNy4xMy0xMS44My0yNy4xM0MxMTUuMjksOTcuMTcsMTAzLjQ5LDEwNiw5OC43LDEyM2MtMy41MiwxMi40OS0xLjg5LDI4LjUyLDQuNTgsNDUuMTIsNywxOCwxOS40MywzNi4yNiwzNS44Nyw1Mi43LDI2LjQ4LDI2LjQ4LDU3Ljc2LDQyLjI4LDgzLjY4LDQyLjI4aDBBNTIuNTMsNTIuNTMsMCwwLDAsMjM3LDI2MS4zYzE3LjA1LTQuOCwyNS44NS0xNi42LDI2LjE0LTM1LjA4QzI2My4yNCwyMTguMzMsMjQ3LjY5LDIxNS42OSwyMzYsMjE0LjM5WiIvPjwvc3ZnPg==",alt:"phone",className:c}),l.createElement("a",{href:"tel:+902128070140",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"}},l.createElement("p",{className:r},"+90 (212) 807 01 40")),l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAgMzYwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjI2LDEwNS42NUEyOC4zNCwyOC4zNCwwLDAsMSwyNTQuMzUsMTM0VjIyNkEyOC4zNCwyOC4zNCwwLDAsMSwyMjYsMjU0LjM1SDEzNEEyOC4zNCwyOC4zNCwwLDAsMSwxMDUuNjUsMjI2VjEzNEEyOC4zNCwyOC4zNCwwLDAsMSwxMzQsMTA1LjY1SDIyNm0wLTEwLjM5SDEzNEEzOC43LDM4LjcsMCwwLDAsOTUuMjYsMTM0VjIyNmEzOC43LDM4LjcsMCwwLDAsMzguNywzOC43SDIyNmEzOC43LDM4LjcsMCwwLDAsMzguNy0zOC43VjEzNEEzOC43LDM4LjcsMCwwLDAsMjI2LDk1LjI2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4MCwxNDAuNTRBMzkuNDYsMzkuNDYsMCwxLDEsMTQwLjU0LDE4MCwzOS41LDM5LjUsMCwwLDEsMTgwLDE0MC41NG0wLTEwLjM5QTQ5Ljg1LDQ5Ljg1LDAsMSwwLDIyOS44NSwxODAsNDkuODUsNDkuODUsMCwwLDAsMTgwLDEzMC4xNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzEsMTM0LjQ2YTUuNDgsNS40OCwwLDEsMSw1LjQ3LTUuNDhBNS40OSw1LjQ5LDAsMCwxLDIzMSwxMzQuNDZaIi8+PC9zdmc+",alt:"instagram",className:c}),l.createElement("a",{href:"https://www.instagram.com/chefschoicetr/?hl=en",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"}},l.createElement("p",{className:r},"@chefschoicetr")))),l.createElement("div",{className:"contact-module--formCard--mpe6q"},l.createElement("form",{className:"contact-module--form--QAoFy"},l.createElement("h1",null,"tr-TR"===t?"BİZE ULAŞIN":"GET IN TOUCH"),l.createElement("input",{type:"text",name:"user_name",className:o,placeholder:"tr-TR"===t?"Adınız Soyadınız *":"Your name *",maxLength:"50",required:!0}),l.createElement("input",{type:"text",name:"user_company",className:o,placeholder:"tr-TR"===t?"Şirketiniz *":"Your company *",maxLength:"50",required:!0}),l.createElement("input",{type:"email",name:"user_email",className:o,placeholder:"tr-TR"===t?"E-postanız *":"Your email *",maxLength:"50",required:!0}),l.createElement("input",{type:"tel",name:"user_phone",className:o,placeholder:"tr-TR"===t?"Telefon Numaranız":"Your phone number",maxLength:"50"}),l.createElement("textarea",{name:"message",className:o,placeholder:"tr-TR"===t?"Mesajınız *":"Your message *",maxLength:"500",required:!0}),l.createElement("section",{className:"contact-module--checkboxContainer--7I2q1"},l.createElement("input",{type:"checkbox",id:"newsletter",name:"newsletter",className:"contact-module--checkbox--BaXQT"}),l.createElement("label",{htmlFor:"newsletter"},"tr-TR"===t?"Bültenimize abone olun":"Sign up to our newsletter")),l.createElement("input",{type:"submit",value:"tr-TR"===t?"GÖNDER":"SEND",className:"contact-module--submit--6R-XP"})))))}},5693:function(e,t,a){t.Z=a.p+"static/Chefs Choice Logo-26234bbafb32c80fbf507e90b11eeaa6.png"}}]);
//# sourceMappingURL=component---src-pages-contact-js-1690225a0611756044d3.js.map