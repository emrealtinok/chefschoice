/*! For license information please see component---src-pages-index-js-7154d4d76aa0e264fe93.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{5253:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(7294),n=r(1082),o="nav-module--item--C0MFa",i=r(5693);function l(e){if("undefined"!=typeof window){var t=a.useState(""),r=t[0],l=t[1];return a.useEffect((function(){l(window.localStorage.getItem("CC-Language"))}),[]),a.createElement("div",{className:"nav-module--Nav--muf5+"},a.createElement("div",{className:"nav-module--fade--APgrf",id:"fade"}),a.createElement("div",{className:"nav-module--navWindow--BM94m",id:"nav"},a.createElement("img",{src:i.Z,alt:"logo",className:"nav-module--logo--0Tow9"}),a.createElement(n.rU,{to:"/",className:o,onClick:e.handleNavToggle},"tr-TR"===r?"ANASAYFA":"HOME"),a.createElement(n.rU,{to:"/products"+window.location.search.slice(0,3)+"&cat",className:o,onClick:e.handleNavToggle},"tr-TR"===r?"KEDİLER":"FOR CATS"),a.createElement(n.rU,{to:"/products"+window.location.search.slice(0,3)+"&dog",className:o,onClick:e.handleNavToggle},"tr-TR"===r?"KÖPEKLER":"FOR DOGS"),a.createElement(n.rU,{to:"/about",className:o,onClick:e.handleNavToggle},"tr-TR"===r?"HAKKIMIZDA":"ABOUT"),a.createElement(n.rU,{to:"/contact",className:o,onClick:e.handleNavToggle},"tr-TR"===r?"İLETİŞİM":"CONTACT US")))}}function s(e){return a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB00lEQVR4nO3az0pVURTH8e9KB9FUIishIa0GBv2hR9BGOS3IegNp5gPVE+Q0eoKwO8ig6A8KhRAVd5QN9P4c3Adwr909f9LfZ7z2PWstzmHfdfYBMzMzMzMzO30iu0DSfeAxcB2YmnhGdQ6Bj8CLiHjV2FUkPZM0Un+NJK1naiq+AyTNAN+As9nGtewvcDkifpcEn0n88G36XzyMc7xTGpxpwM98Lp35URqYacA2MMjn0rot4H1pcHEDIuIAeEi/m7AFPIqIw9IFNdvgFLAELNasb4iAT8B2pngzMzvtarbBOeABcGXy6fyTXWAzIr43dgVJK5KGXY57xxhKWs7UlJkGzwFfgQvZxrVsD7gaEfslwZlZ4C79Lx7gIg1Ng6N8Lp1RaWD2EfgCzNZk1KJmHoGI+AM8BYaVibVhCDwpLR7qtsFLwCown13bsB3gZUTsdZ2ImZn9L2q2wWnGL0UXatY3RMBn4F2jL0UlXZM06HDaO85bSYuZmjJ/haeBN8CtbONaNgDuld4JmWHoJv0vHsZnmEulwZkGzORz6cz50sCTeDy+D8xN/Hg8In4BGyRm7Q4I2CgtHuq2wWVgDbhBvz6R+QA8j4jXXSdjZmZmZmZmfXcEAtBOIkn/Cc4AAAAASUVORK5CYII=",className:"burger-module--burgerIcon--xYe0h",onClick:e.handleNavToggle,id:"burger"})}var c="footer-module--link--CK31r";function A(e){var t=a.useState(""),r=t[0],o=t[1],l=a.useState(""),s=l[0],A=l[1];return a.useEffect((function(){A(window.localStorage.getItem("CC-Language"))}),[]),a.createElement("div",{className:"footer-module--Footer---K+Td",id:"footer"},a.createElement("img",{src:i.Z,alt:"logo",className:"footer-module--logo--v5Z8f"}),a.createElement("form",{className:"footer-module--newsletter--K8Kr1"},a.createElement("h3",{className:"footer-module--heading--j0bzy"},"en-EU"===s?"Sign up to our newsletter to stay up-to-date with our products and news!":"Ürünlerimizden ve gelişmelerden haberdar olmak için bültenimize abone olun!"),a.createElement("input",{className:"footer-module--email--aXtio",type:"text",name:"email",placeholder:"en-EU"===s?"Enter your email...":"Emailinizi yazin...",value:r,onInput:function(e){return o(e.target.value)},autoComplete:"off"}),a.createElement("input",{type:"submit",value:"en-EU"===s?"SIGN UP":"ABONE OL",className:"footer-module--signup--BaAvT"})),a.createElement("div",{className:"footer-module--subFooter--LVm0M"},a.createElement(n.rU,{to:"/privacypolicy",className:c},a.createElement("p",null,"tr-TR"===s?"Gizlilik Politikası":"PRIVACY POLICY")),a.createElement(n.rU,{to:"/termsofuse",className:c},a.createElement("p",null,"tr-TR"===s?"Kullanım Koşulları":"TERMS OF USE")),a.createElement("p",{className:"footer-module--subFooterText--dxvxB"},"ATLASJET HAVACILIK SAN. LTD. ŞTİ. 2022 © ","tr-TR"===s?"Tüm hakları saklıdır.":"All Rights Reserved.")))}function u(e){var t=e.children;if("undefined"!=typeof window){var r=a.useState(""),n=r[0],o=r[1],i=window.location.search.split("&").slice(-1);i="?"===i[0]?"":i,a.useEffect((function(){null===window.localStorage.getItem("CC-Language")?(window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr"):"en-EU"===window.localStorage.getItem("CC-Language")?(window.history.replaceState({},"Chef's Choice","?en&"+i),o("en-EU")):(window.history.replaceState({},"Chef's Choice","?tr&"+i),o("tr-TR"))}),[]);var c=window.innerWidth,u=a.useState(!1),m=u[0],d=u[1],f=a.useCallback((function(){d(!m)}),[m]);return a.createElement("div",{className:"layout-module--Layout--GW6vs",id:"layout"},a.createElement(s,{handleNavToggle:function(){f(),h()}}),a.createElement(l,{handleNavToggle:function(){f(),h()}}),a.createElement("div",{className:"layout-module--languageContainer--P878L",id:"language"},a.createElement("p",{className:"layout-module--EN--6yphZ",onClick:function(){return g("en-EU")},style:{transform:"en-EU"===n?"scale(1.33)":"scale(1)"}},"EN"),a.createElement("p",{className:"layout-module--TR--B67Pf",onClick:function(){return g("tr-TR")},style:{transform:"tr-TR"===n?"scale(1.33)":"scale(1)"}},"TR")),a.createElement("div",null,t),a.createElement(A,null))}function g(e){"en-EU"===e?(o("en-EU"),window.localStorage.setItem("CC-Language","en-EU"),window.location.search="?en&"+i):(o("tr-TR"),window.localStorage.setItem("CC-Language","tr-TR"),window.location.search="?tr&"+i)}function h(){var e=document.getElementById("fade"),t=document.getElementById("nav");if(c=c<800?2*c:c,m)var r=0,a=50,n=setInterval((function(){t.style.left=r+"px",e.style.backgroundColor="rgba(0,0,0,"+a/100+")",a-=1,(r-=10)<=-c/2&&(clearInterval(n),e.style.display="none")}),3);else{var o=-c/2,i=0;e.style.display="block";var l=setInterval((function(){t.style.left=o+"px",e.style.backgroundColor="rgba(0,0,0,"+i/100+")",i+=1,(o+=10)>=10&&clearInterval(l)}),3)}}}},8270:function(e,t,r){"use strict";function a(e,t,r,a,n,o,i){try{var l=e[o](i),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function l(e){a(i,n,o,l,s,"next",e)}function s(e){a(i,n,o,l,s,"throw",e)}l(void 0)}))}}r.r(t),r.d(t,{default:function(){return z}});var o=r(4687),i=r.n(o),l=r(7294),s=r(1082),c=r(5253),A="home-module--headingProduct--rtKGu",u="home-module--imageCropper--w1igR",m="home-module--product--4bc-Y",d="home-module--productButton--UMf5N",f="home-module--products--LV-mz",g="home-module--promotedButton--629Dq",h="home-module--promotedContainer--M+gA+",w="home-module--promotedHeading--SRaOz",E="home-module--promotedImage--4vV2O",p="home-module--promotedTextContainer--jRCvz",v="home-module--refLogo--Qhm+O",D="home-module--refLogos--LK5tT",B=r(5693),y=r.p+"static/homeBannerImage-249fc35a776cd4e7cd7e3554658f2e7c.png",C=r.p+"static/Kedi1-78dc65c4fde980deb6fa8b6e16da4906.png",N=r.p+"static/Kedi2-fde92759b31413781f25f698f4eb0692.png",P=r.p+"static/Kedi3-cdf6b0110fd5021d3ab20e3b892fadd7.png",I=r.p+"static/Kedi4-fd1ececd1069aea740ad791518f972f3.png",R=r.p+"static/Kedi5-b6beba8d47cfce15cb50d32f51c96422.png",Q=r.p+"static/CC - Mother-&-Babycat2-784c1ca116e5b5ce51601d9f00358cac.jpg",x=r.p+"static/Kopek1-285757b83a78496c426f4d7a6dc4128f.png",b=r.p+"static/Kopek2-3406d7ceb95205d5b5e1daed5cf6f4c9.png",k=r.p+"static/Kopek3-76ecc8261a518d6fda9980cde95a047e.png",H=(r.p,r.p,r.p+"static/Kopek6-e979be1309876aeeae5f71baa33ced28.png"),L=r.p+"static/Kopek7-eaa4319e7b6fb4b0696ee5d4ed04c0d6.png",T=(r.p,r.p+"static/promoted1-a1ed32f7e67dba385ecf30e10e0c58af.jpeg");function z(e){var t=e.data;if("undefined"!=typeof window){var r=l.useState(""),a=r[0],o=r[1];l.useEffect((function(){o(window.localStorage.getItem("CC-Language"))}),[]);var z=t.allContentfulCustomerLogos.nodes[1].chefsChoiceCustomerLogos,S=z.length*window.innerWidth/10,O=[x,b,k,H,L],M=[C,N,P,I,R];l.useEffect((function(){var e=document.getElementById("carousel1");e.style.width=S+"px";var t=document.getElementById("carousel2");t.style.width=S+"px";var r=0,a=setInterval((function(){return e.style.left=r+"px",t.style.left=r-S+"px",(r+=.5)>=S&&(r=0),function(){return clearInterval(a)}}),3)}),[]);var F=l.useState(0),Y=F[0],U=F[1],G=l.useCallback((function(){U(window.pageYOffset),document.getElementById("whiteArrow").style.display=Y>300?"none":"block"}),[window.pageYOffset]);l.useEffect((function(){return window.addEventListener("scroll",G),function(){return window.removeEventListener("scroll",G)}}),[G]);var K=l.useState([]),j=K[0],X=K[1];return l.useEffect((function(){function e(){return e=n(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://feeds.behold.so/hqREjbOqWXierU0OAifY");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,X(r);case 7:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l.createElement(c.Z,null,l.createElement("div",{className:"home-module--Home--S01NE",id:"home"},l.createElement("img",{src:B.Z,alt:"logo",className:"home-module--logo--74Rac"}),l.createElement("div",{className:"home-module--banner--x7zNu"},l.createElement("div",{className:"home-module--bannerTextContainer--fELOo"},l.createElement("h3",{className:"home-module--bannerHeading--x1xb-"},"tr-TR"===a?"DOSTUNUZUN EVDE BİR CHEF’İ VAR.":"YOUR PETS HAVE A CHEF AT HOME"),l.createElement("p",{style:{fontFamily:"sans-serif"},className:"home-module--bannerText--IgCJZ"},"tr-TR"===a?"Chef’s Choice’un tarifleri, şef ve beslenme uzmanları tarafından özenle formüle edilmiştir. %100 taze etler ve doğal içeriklerle hazırlanan bu mamalar, şeker, tuz, renklendirici, aroma veya koruyucu içermez. Dostunuzun ağzını sulandıracak pürüzsüz pate kıvamındaki tariflerimiz, vitamin, mineral ve diğer besinlerle zenginleştirilmiştir. ":"Chef’s Choice recipes are formulated by chefs and nutritionists, made with 100% fresh meat and natural ingredients and are free from sugar, salt, artificial colors, aromas or preservatives. These smoothly and intensely flavored recipes are enhanced with vitamins, minerals and other nutrients to make this meal irresistible for your pets."),l.createElement(s.rU,{to:"/products",className:"home-module--bannerButton--s30wo"},"tr-TR"===a?"GÖZ GEZDİR":"BROWSE PRODUCTS")),l.createElement("img",{src:y,alt:"kedi ve kopek resmi",className:"home-module--homeBannerImage--DR9Fg"})),l.createElement("img",{src:"data:image/png;base64,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",alt:"white arrow",className:"home-module--whiteArrow--Ne6hf",id:"whiteArrow"}),l.createElement("div",{className:D,id:"carousel1"},z.map((function(e){return l.createElement("img",{src:e.url,className:v,alt:"referance logo",key:String(e.url)})}))),l.createElement("div",{className:D,id:"carousel2"},z.map((function(e){return l.createElement("img",{src:e.url,className:v,alt:"referance logo",key:String(e.url)+2})}))),l.createElement("div",{className:"home-module--productsContainer--AaCUK"},l.createElement("div",{className:f},O.map((function(e){return l.createElement("img",{src:e,className:m,alt:"dog food",key:String(e)})})),l.createElement("h3",{className:A},"tr-TR"===a?"KÖPEKLER İÇİN":"FOR DOGS"),l.createElement("p",{style:{color:"black",fontFamily:"sans-serif"}},"tr-TR"===a?"Köpekleriniz için özenle hazırlanmış enfes taze etli yaş mamalar.":"Delicious fresh meat paté’s prepared with care for your dogs."),l.createElement(s.rU,{to:"/products?dog",className:d},"tr-TR"===a?"KEŞFET":"BROWSE")),l.createElement("div",{className:f},M.map((function(e){return l.createElement("img",{src:e,className:m,alt:"cat food",key:String(e)})})),l.createElement("h3",{className:A},"tr-TR"===a?"KEDİLER İÇİN":"FOR CATS"),l.createElement("p",{style:{color:"black",fontFamily:"sans-serif"}},"tr-TR"===a?"Kedileriniz için özenle hazırlanmış enfes taze etli yaş mamalar.":"Delicious fresh meat paté’s prepared with care for your cats."),l.createElement(s.rU,{to:"/products?cat",className:d},"tr-TR"===a?"KEŞFET":"BROWSE"))),l.createElement("div",{className:h},l.createElement("div",{className:u},l.createElement("img",{src:T,alt:"product image",className:E})),l.createElement("div",{className:p},l.createElement("h3",{className:w},"tr-TR"===a?"BALKABAĞI SERİSİ":"PUMPKIN LINE"),l.createElement("p",{style:{fontFamily:"sans-serif"}},"tr-TR"===a?"Patili dostlarımızın yemekleri için balkabağından daha iyi ne olabilir ki! Bu süper besinin köpekler için bir çok faydası vardır. Mamalarına lezzet katarken, onlara gerekli mikro besinleri ve lifleri sağlar.  Balkabağı, demir ve potasyum gibi gerekli minerallerle, A, C ve E vitaminleri ile doludur. Prebiyotik işlevi sayesinde köpeğinizi balkabağı ile formüle edilmiş bu mamalarla beslemek, sindirim sağlığını güçlendirmesine ve ishal ile ilgili sorunları azalmasına yardımcı olacaktır.":"What better ingredient for our buddies’ meals than pumpkin! This superfood has numerous benefits for dogs. While being a tasteful addition to their foods, it provides them with essential micronutrients and fibers. Pumpkin is filled with vitamins A, C, and E, along with necessary minerals such as iron and potassium. Due to its prebiotic function, feeding your dog with a pumpkin based food will also help them strengthen their digestive health, and reduce issues with diarrhea. "),l.createElement(s.rU,{to:"/products",className:g},"tr-TR"===a?"BİLGİ EDİN":"LEARN MORE"))),l.createElement("div",{className:"home-module--aboutContainer--yBcrX"},l.createElement("div",{className:"home-module--aboutTextContainer--IZ98W"},l.createElement("h3",{className:"home-module--aboutHeading--MMlPn"},"tr-TR"===a?"HAKKIMIZDA":"ABOUT US"),l.createElement("p",{style:{fontFamily:"sans-serif"}},"tr-TR"===a?"Chef's Choice olarak,  lezzet ve besin değerlerini ön planda tutarak kedi ve köpekler için mükemmel mamayı yaratmayı hedefleyen şefler, beslenme uzmanları, veterinerler ve hayvan severlerden oluşan bir aileyiz. %100 taze et ile formüle edilen yaş mamalarımız, doğal ve sağlıklı malzemelerle üretilmiştir. Farklı tariflerlerimizle, kedi ve köpeklerinizin beslenme ihtiyaçlarını karşılarken farklı lezzetler keşfetmesine yardımcı olmayı hedefliyoruz.":"As Chef’s Choice, we are a family of chefs, nutritionists, veterinarians, and pet lovers aiming to create the perfect food for cats and dogs by prioritizing taste and nutritional values. Our paté’s, formulated with 100% fresh meat, are made with natural and wholesome ingredients. Through our selection of recipes, we aim to help your buddy explore different tastes while fulfilling their nutritional needs. "),l.createElement(s.rU,{to:"/about",className:"home-module--aboutButton--u2+Ie"},"tr-TR"===a?"BİLGİ EDİN":"LEARN MORE")),l.createElement("div",{className:u},l.createElement("img",{src:B.Z,alt:"product image",className:"home-module--aboutImage--fx-CN"}))),l.createElement("div",{className:h},l.createElement("div",{className:u},l.createElement("img",{src:Q,alt:"product image",className:E})),l.createElement("div",{className:p},l.createElement("h3",{className:w},"tr-TR"===a?"ANNE VE YAVRU KEDİ":"MOTHER & BABYCAT"),l.createElement("p",{style:{fontFamily:"sans-serif"}},"tr-TR"===a?"Chef's Choice olarak hamile ve emziren kedilerin ve yavru kedilerin beslenmesine çok önem veriyoruz. Daha hassas, besleyici, sindirilebilir, tüketimi kolay bir gıdaya ihtiyaçları olduğunun farkındayız. Formüllerimiz, yavru kedilerin gelişimini desteklemek ve hamile ve emziren kedilerin ihtiyaç duyduğu ekstra besinleri sağlamak için antioksidanlar ve vitaminler açısından zengindir. Yaş mamalarımızın pürüzsüz ve yumuşak yapısı, kedilerin sütten katı mamaya geçişlerine destek olur.":"As Chef’s Choice, we highly care about the nutrition of pregnant and nursing cats, and kittens. We are aware that they are in need of a more sensitive, nutritious, and digestible food, with a soft texture to make it easy to consume. Our formulas are rich in antioxidants and vitamins to support the development of young kittens, and provide the extra nutrition that pregnant and nursing cats need. The smooth mousse texture of our patés aid kittens in their transition from milk to solid foods."),l.createElement(s.rU,{to:"/products",className:g},"tr-TR"===a?"BİLGİ EDİN":"LEARN MORE"))),l.createElement("div",{className:"home-module--instagramContainer--K2lC3"},j.map((function(e){return l.createElement("a",{href:e.permalink,target:"_blank",rel:"noreferrer",className:"home-module--post--+bfmd"},l.createElement("img",{src:e.mediaUrl,alt:"instagram post",key:e.id,className:"home-module--instagramPhoto--GVxPF"}),l.createElement("p",{className:"home-module--postText--IZPXK"},e.caption))})),l.createElement("a",{href:"https://www.instagram.com/chefschoicetr/",target:"_blank",rel:"noreferrer",className:"home-module--instaHandle--VMnMH"},"@chefschoicetr"),l.createElement("a",{href:"https://www.instagram.com/chefschoicetr/",target:"_blank",rel:"noreferrer",className:"home-module--instaHandle2--1yaDk"},"@chefschoicetr")),l.createElement("div",{className:"home-module--whiteBackground--AIMXN"}),l.createElement("div",{className:"home-module--whiteBackground2--ZmNyP"}),l.createElement("div",{className:"home-module--whiteBackground3--eiPfm"})))}}},5693:function(e,t,r){"use strict";t.Z=r.p+"static/Chefs Choice Logo-26234bbafb32c80fbf507e90b11eeaa6.png"},7061:function(e,t,r){var a=r(8698).default;function n(){"use strict";e.exports=n=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function A(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{A({},"")}catch(Q){A=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var n=t&&t.prototype instanceof f?t:f,o=Object.create(n.prototype),i=new P(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return R()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var l=y(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var s=m(e,t,r);if("normal"===s.type){if(a=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(Q){return{type:"throw",arg:Q}}}t.wrap=u;var d={};function f(){}function g(){}function h(){}var w={};A(w,l,(function(){return this}));var E=Object.getPrototypeOf,p=E&&E(E(I([])));p&&p!==r&&o.call(p,l)&&(w=p);var v=h.prototype=f.prototype=Object.create(w);function D(e){["next","throw","return"].forEach((function(t){A(e,t,(function(e){return this._invoke(t,e)}))}))}function B(e,t){function r(n,i,l,s){var c=m(e[n],e,i);if("throw"!==c.type){var A=c.arg,u=A.value;return u&&"object"==a(u)&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):t.resolve(u).then((function(e){A.value=e,l(A)}),(function(e){return r("throw",e,l,s)}))}s(c.arg)}var n;this._invoke=function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}}function y(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=m(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function I(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:R}}function R(){return{value:void 0,done:!0}}return g.prototype=h,A(v,"constructor",h),A(h,"constructor",g),g.displayName=A(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,A(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},t.awrap=function(e){return{__await:e}},D(B.prototype),A(B.prototype,s,(function(){return this})),t.AsyncIterator=B,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new B(u(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},D(v),A(v,c,"Generator"),A(v,l,(function(){return this})),A(v,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=I,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=o.call(n,"catchLoc"),s=o.call(n,"finallyLoc");if(l&&s){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=e,i.arg=t,n?(this.method="next",this.next=n.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,r){var a=r(7061)();e.exports=a;try{regeneratorRuntime=a}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-7154d4d76aa0e264fe93.js.map