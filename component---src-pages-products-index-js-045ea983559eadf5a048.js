"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[776],{5925:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(1082),o="nav-module--item--C0MFa",l=a(5693);function c(e){var t=n.useState(""),a=t[0],c=t[1];return n.useEffect((function(){c(window.localStorage.getItem("CC-Language"))}),[]),n.createElement("div",{className:"nav-module--Nav--muf5+"},n.createElement("div",{className:"nav-module--fade--APgrf",id:"fade"}),n.createElement("div",{className:"nav-module--navWindow--BM94m",id:"nav"},n.createElement("img",{src:l.Z,alt:"logo",className:"nav-module--logo--0Tow9"}),n.createElement(r.rU,{to:"/",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"ANASAYFA":"HOME"),n.createElement(r.rU,{to:"/products"+window.location.search.slice(0,3)+"&cat",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"KEDİLER":"FOR CATS"),n.createElement(r.rU,{to:"/products"+window.location.search.slice(0,3)+"&dog",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"KÖPEKLER":"FOR DOGS"),n.createElement(r.rU,{to:"/about",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"HAKKIMIZDA":"ABOUT"),n.createElement(r.rU,{to:"/contact",className:o,onClick:e.handleNavToggle},"tr-TR"===a?"İLETİŞİM":"CONTACT US")))}function u(e){return n.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB00lEQVR4nO3az0pVURTH8e9KB9FUIishIa0GBv2hR9BGOS3IegNp5gPVE+Q0eoKwO8ig6A8KhRAVd5QN9P4c3Adwr909f9LfZ7z2PWstzmHfdfYBMzMzMzMzO30iu0DSfeAxcB2YmnhGdQ6Bj8CLiHjV2FUkPZM0Un+NJK1naiq+AyTNAN+As9nGtewvcDkifpcEn0n88G36XzyMc7xTGpxpwM98Lp35URqYacA2MMjn0rot4H1pcHEDIuIAeEi/m7AFPIqIw9IFNdvgFLAELNasb4iAT8B2pngzMzvtarbBOeABcGXy6fyTXWAzIr43dgVJK5KGXY57xxhKWs7UlJkGzwFfgQvZxrVsD7gaEfslwZlZ4C79Lx7gIg1Ng6N8Lp1RaWD2EfgCzNZk1KJmHoGI+AM8BYaVibVhCDwpLR7qtsFLwCown13bsB3gZUTsdZ2ImZn9L2q2wWnGL0UXatY3RMBn4F2jL0UlXZM06HDaO85bSYuZmjJ/haeBN8CtbONaNgDuld4JmWHoJv0vHsZnmEulwZkGzORz6cz50sCTeDy+D8xN/Hg8In4BGyRm7Q4I2CgtHuq2wWVgDbhBvz6R+QA8j4jXXSdjZmZmZmZmfXcEAtBOIkn/Cc4AAAAASUVORK5CYII=",className:"burger-module--burgerIcon--xYe0h",onClick:e.handleNavToggle,id:"burger"})}var s="footer-module--link--CK31r";function i(e){var t=n.useState(""),a=t[0],o=t[1],c=n.useState(""),u=c[0],i=c[1];return n.useEffect((function(){i(window.localStorage.getItem("CC-Language"))}),[]),n.createElement("div",{className:"footer-module--Footer---K+Td",id:"footer"},n.createElement("img",{src:l.Z,alt:"logo",className:"footer-module--logo--v5Z8f"}),n.createElement("form",{className:"footer-module--newsletter--K8Kr1"},n.createElement("h3",{className:"footer-module--heading--j0bzy"},"en-EU"===u?"Sign up to our newsletter to stay up-to-date with our products and news!":"Ürünlerimizden ve gelişmelerden haberdar olmak için bültenimize abone olun!"),n.createElement("input",{className:"footer-module--email--aXtio",type:"text",name:"email",placeholder:"en-EU"===u?"Enter your email...":"Emailinizi yazin...",value:a,onInput:function(e){return o(e.target.value)},autoComplete:"off"}),n.createElement("input",{type:"submit",value:"en-EU"===u?"SIGN UP":"ABONE OL",className:"footer-module--signup--BaAvT"})),n.createElement("div",{className:"footer-module--subFooter--LVm0M"},n.createElement(r.rU,{to:"/privacypolicy",className:s},n.createElement("p",null,"tr-TR"===u?"Gizlilik Politikası":"PRIVACY POLICY")),n.createElement(r.rU,{to:"/termsofuse",className:s},n.createElement("p",null,"tr-TR"===u?"Kullanım Koşulları":"TERMS OF USE")),n.createElement("p",{className:"footer-module--subFooterText--dxvxB"},"ATLASJET HAVACILIK SAN. LTD. ŞTİ. 2022 © ","tr-TR"===u?"Tüm hakları saklıdır.":"All Rights Reserved.")))}function m(e){var t=e.children,a=n.useState(""),r=a[0],o=a[1],l=window.location.search.split("&").slice(-1);function s(e){"en-EU"===e?(o("en-EU"),window.localStorage.setItem("CC-Language","en-EU"),window.location.search="?en&"+l):(o("tr-TR"),window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr&"+l)}l="?"===l[0]?"":l,n.useEffect((function(){null===window.localStorage.getItem("CC-Language")?(window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr"):"en-EU"===window.localStorage.getItem("CC-Language")?(window.history.replaceState({},"Chef's Choice","?en&"+l),o("en-EU")):(window.history.replaceState({},"Chef's Choice","?tr&"+l),o("tr-TR"))}),[]);window.innerHeight;var m=window.innerWidth,d=n.useState(!1),g=d[0],f=d[1],E=n.useCallback((function(){f(!g)}),[g]);function p(){var e=document.getElementById("fade"),t=document.getElementById("nav");if(g)var a=0,n=50,r=setInterval((function(){t.style.left=a+"px",e.style.backgroundColor="rgba(0,0,0,"+n/100+")",n-=1,(a-=10)<=-m/2&&(clearInterval(r),e.style.display="none")}),5);else{var o=-m/2,l=0;e.style.display="block";var c=setInterval((function(){t.style.left=o+"px",e.style.backgroundColor="rgba(0,0,0,"+l/100+")",l+=1,(o+=10)>=10&&clearInterval(c)}),5)}}return n.createElement("div",{className:"layout-module--Layout--GW6vs",id:"layout"},n.createElement(u,{handleNavToggle:function(){E(),p()}}),n.createElement(c,{handleNavToggle:function(){E(),p()}}),n.createElement("div",{className:"layout-module--languageContainer--P878L",id:"language"},n.createElement("p",{className:"layout-module--EN--6yphZ",onClick:function(){return s("en-EU")},style:{transform:"en-EU"===r?"scale(1.33)":"scale(1)"}},"EN"),n.createElement("p",{className:"layout-module--TR--B67Pf",onClick:function(){return s("tr-TR")},style:{transform:"tr-TR"===r?"scale(1.33)":"scale(1)"}},"TR")),n.createElement("div",null,t),n.createElement(i,null))}},308:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(5925),o=a(1082),l="products-module--toggle--s0vm4",c="products-module--toggleHeading--U31Eu",u=a(5693);function s(e){var t=e.data,a=n.useState(""),s=a[0],i=a[1];n.useEffect((function(){i(window.localStorage.getItem("CC-Language"))}),[]),n.useEffect((function(){document.getElementById("language").style.backgroundColor="rgba(68, 146, 255,0.75)"}),[]),n.useEffect((function(){document.getElementById("footer").style.display="none"}),[]);var m=t.allContentfulProduct.edges,d=n.useState([]),g=d[0],f=d[1],E=n.useState(""),p=E[0],C=E[1],N=n.useState(!1),h=N[0],A=N[1],T=n.useState(!1),v=T[0],w=T[1],R=n.useState(!1),b=R[0],S=R[1],k=n.useState(!1),I=k[0],y=k[1],L=n.useState(!1),U=L[0],K=L[1],B=n.useState(!1),O=B[0],G=B[1],Z=n.useState(!1),z=Z[0],M=Z[1],P=n.useState(!1),Y=P[0],D=P[1],H=n.useState(!1),F=H[0],V=H[1],x=n.useState(!1),X=x[0],W=x[1],j=n.useState(!1),_=j[0],J=j[1];return n.useEffect((function(){"cat"===window.location.search.slice(-3)&&(A(!0),w(!1)),"dog"===window.location.search.slice(-3)&&(w(!0),A(!1))}),[window.location.search]),n.useEffect((function(){var e=[];e="en-EU"===window.localStorage.getItem("CC-Language")?m.filter((function(e){return"en-EU"===e.node.node_locale})):m.filter((function(e){return"tr-TR"===e.node.node_locale})),h&&!v&&(e=e.filter((function(e){return!0===e.node.for_cats})),window.history.replaceState({},"Chef's Choice",window.location.search.split("&")[0]+"&cat")),v&&!h&&(e=e.filter((function(e){return!1===e.node.for_cats})),window.history.replaceState({},"Chef's Choice",window.location.search.split("&")[0]+"&dog"));var t=[];b?(t.push("Salmon"),t.push("Somon Balığı")):t.filter((function(e){return"Salmon"!==e||"Somon Balığı "!==e})),I?(t.push("Lamb"),t.push("Kuzu Eti")):t.filter((function(e){return"Lamb"!==e||"Kuzu Eti"!==e})),O?(t.push("Beef"),t.push("Sığır Eti")):t.filter((function(e){return"Beef"!==e||"Sığır Eti"!==e})),U?(t.push("Chicken"),t.push("Tavuk Eti")):t.filter((function(e){return"Chicken"!==e||"Tavuk Eti"!==e})),t.length>0&&(e=e.filter((function(e){return t.includes(e.node.proteinSource[0])})));var a=[];z?a.push("0-12 months"):a.filter((function(e){return"0-12 months"!==e})),Y?a.push("1-10 years"):a.filter((function(e){return"1-10 years"!==e})),F?a.push("11+"):a.filter((function(e){return"11+"!==e})),a.length>0&&(e=e.filter((function(e){return a.includes(e.node.ageGroup[0])||a.includes(e.node.ageGroup[1])}))),X&&!_&&(e=e.filter((function(e){return"Grain-Free"===e.node.tahlDurumu[0]||"Tahılsız"===e.node.tahlDurumu[0]}))),_&&!X&&(e=e.filter((function(e){return"Low Grain"===e.node.tahlDurumu[0]||"Az Tahıllı"===e.node.tahlDurumu[0]}))),e=e.filter((function(e){return e.node.name.toLowerCase().includes(p.toLowerCase())})),f(e)}),[h,v,b,I,O,U,z,Y,F,X,_,p]),n.createElement(r.Z,null,n.createElement("div",{className:"products-module--Products--a7z5d",id:"products"},n.createElement("img",{src:u.Z,alt:"logo",className:"products-module--logo--KvbpL"}),n.createElement("div",{className:"products-module--filter--X7Xk3",id:"filter"},n.createElement("input",{className:"products-module--search--gvA3j",type:"text",name:"search",placeholder:"en-EU"===s?"Search for a product here...":"Ürün arayın...",value:p,onInput:function(e){return C(e.target.value)},autoComplete:"off"}),n.createElement("div",null,n.createElement("h3",{className:c},"tr-TR"===s?"TÜR":"SPECIES"),n.createElement("section",{className:"products-module--catDog--961Rs"},n.createElement("p",{className:l,onClick:function(){A(!h),w(h)},style:{backgroundColor:h?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"KEDİ":"CATS"),n.createElement("p",{className:l,onClick:function(){w(!v),A(v)},style:{backgroundColor:v?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"KÖPEK":"DOGS"))),n.createElement("div",null,n.createElement("h3",{className:c},"tr-TR"===s?"PROTEIN KAYNAĞI":"PROTEIN SOURCE"),n.createElement("section",{className:"products-module--proteinSource--CGqRg"},n.createElement("p",{className:l,onClick:function(){return S(!b)},style:{backgroundColor:b?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"SOMON":"SALMON"),n.createElement("p",{className:l,onClick:function(){return y(!I)},style:{backgroundColor:I?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"KUZU":"LAMB"),n.createElement("p",{className:l,onClick:function(){return G(!O)},style:{backgroundColor:O?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"SIĞIR":"BEEF"),n.createElement("p",{className:l,onClick:function(){return K(!U)},style:{backgroundColor:U?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"TAVUK":"CHICKEN"))),n.createElement("div",null,n.createElement("h3",{className:c},"tr-TR"===s?"YAŞ GRUBU":"AGE GROUP"),n.createElement("section",{className:"products-module--ageGroup--LWRYm"},n.createElement("p",{className:l,onClick:function(){return M(!z)},style:{backgroundColor:z?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"1-12 AYLIK":"1-12 MONTHS"),n.createElement("p",{className:l,onClick:function(){return D(!Y)},style:{backgroundColor:Y?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"1-10 YAŞ":"1-10 YEARS"),n.createElement("p",{className:l,onClick:function(){return V(!F)},style:{backgroundColor:F?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"11 YAŞ ÜSTÜ":"11+ YEARS"))),n.createElement("div",null,n.createElement("h3",{className:c},"tr-TR"===s?"TAHIL MİKTARI":"GRAIN AMOUNT"),n.createElement("section",{className:"products-module--grain--jIlEq"},n.createElement("p",{className:l,onClick:function(){return W(!X)},style:{backgroundColor:X?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"TAHILSIZ":"GRAIN-FREE"),n.createElement("p",{className:l,onClick:function(){return J(!_)},style:{backgroundColor:_?"rgba(68, 146, 255, 1)":"rgba(68, 146, 255, 0.5)"}},"tr-TR"===s?"AZ TAHILLI":"LOW GRAIN"))),n.createElement("p",{className:"products-module--clearAll--5Vgj2",onClick:function(){f(m),A(!1),w(!1),G(!1),K(!1),y(!1),S(!1),W(!1),J(!1),M(!1),D(!1),V(!1)}},"tr-TR"===s?"TEMİZLE":"CLEAR ALL")),n.createElement("div",{className:"products-module--productsContainer--WJir4",id:"productsContainer"},g.map((function(e){return n.createElement(o.rU,{to:e.node.slug,key:e.node.id,className:"products-module--productLink--CXQKf"},n.createElement("img",{src:e.node.packagePhoto.url,alt:"product",className:"products-module--productPhoto--77+ca"}),n.createElement("p",{className:"products-module--productName--Pc2-Q"},e.node.name),n.createElement("p",{className:"products-module--adulthood--vrsKO"},"0-12 months"===e.node.ageGroup[0]?e.node.for_cats?"tr-TR"===s?"Yavru Kediler":"Kittens":"tr-TR"===s?"Yavru Köpekler":"Puppies":"tr-TR"===s?"Yetişkin":"Adult"))})))))}},5693:function(e,t,a){t.Z=a.p+"static/Chefs Choice Logo-26234bbafb32c80fbf507e90b11eeaa6.png"}}]);
//# sourceMappingURL=component---src-pages-products-index-js-045ea983559eadf5a048.js.map