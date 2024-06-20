(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),l=new URL(t(186),t.b),s=new URL(t(483),t.b),p=i()(o()),u=d()(l),f=d()(s);p.push([e.id,`@font-face {\n  font-family: 'MyFont';\n  src: url(${u});\n  font-style: normal;\n}\n\nbutton{\n  align-self: center;\n  background-color: #fff;\n  background-image: none;\n  background-position: 0 90%;\n  background-repeat: repeat no-repeat;\n  background-size: 4px 3px;\n  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;\n  box-sizing: border-box;\n  color: black;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Neucha, sans-serif;\n  font-size: 1rem;\n  line-height: 23px;\n  outline: none;\n  padding: .75rem;\n  text-decoration: none;\n  transition: all 235ms ease-in-out;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  }\n  \n  button:hover {\n  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;\n  transform: translate3d(0, 2px, 0);\n  }\n  \n  button:focus {\n  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;\n  }\nbody{\n  font-family: 'MyFont';\n  background: url(${f});\n  background-size: auto;\n  color: white\n}\n#content{\n\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 1rem;\n     margin: 0 auto; \n     margin-top: 3rem;\n}\nheader{\n  display: flex;\n  justify-content: center;\n}\n.imgContent {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n    gap: 1rem;\n  }\n  \n  img{\n    width: 100%;\n  }\n  .imgContent>div {\n    border: 1px solid;\n    padding: 1rem;\n  }\n\n  .contactDiv {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30%;\n    flex-direction: column;\n    font-family: 'MyFont';\n  }\n  \n  .infoDiv {\n    flex-basis: 20%;\n    display: flex;\n    padding: 1rem;\n    flex-direction: column;\n    gap: 1rem;\n    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;\n  }\n\n  .homeContent{\n  \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 30%;\n  }`,""]);const m=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},186:(e,n,t)=>{e.exports=t.p+"853e01975d2783d9fa29.ttf"},483:(e,n,t)=>{e.exports=t.p+"48af7f0443353c9019a6.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),d=t.n(c),l=t(56),s=t.n(l),p=t(540),u=t.n(p),f=t(113),m=t.n(f),h=t(208),x={};x.styleTagTransform=m(),x.setAttributes=s(),x.insert=d().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),o()(h.A,x),h.A&&h.A.locals&&h.A.locals;let g=function(){let e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("homeContent"),e.appendChild(n);let t=document.createElement("h1"),r=document.createElement("p");t.textContent="Taste of Kerala",r.textContent="At Taste of Kerala, we bring you the rich and diverse culinary traditions of Kerala, the enchanting southern state of India known for its lush landscapes and vibrant culture. Our restaurant offers a delightful journey through Kerala's famous cuisine, blending traditional recipes with fresh, locally-sourced ingredients to create an unforgettable dining experience.";let o=document.createElement("p");o.textContent="Experience the essence of Kerala with our meticulously crafted menu featuring an array of traditional delicacies. From the aromatic spices of our signature Malabar Biryani to the delicate flavors of our Appam and Stew, each dish is prepared with fresh, locally sourced ingredients and a passion for authenticity.",n.appendChild(t),n.appendChild(r),n.appendChild(o)};const b=t.p+"08b3d91200e88b44dd38.jpg",v=t.p+"17f66b2306b275ba9617.jpg",y=t.p+"61846c77caeb025ee966.jpg";let C=function(){let e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("imagesDiv");let t=document.createElement("div");t.classList.add("imgContent"),document.body.appendChild(e),e.appendChild(n);let r=document.createElement("h1");r.textContent="The Best Sellers from our Restaurant",n.appendChild(r),n.appendChild(t);let o=document.createElement("div"),a=document.createElement("h3");a.textContent="Beef Fry";let i=document.createElement("p");i.textContent="Beef fry is a delicious, aromatic dish hailing from various culinary traditions, notably from South Indian and Caribbean cuisines. This savory delight features tender pieces of beef marinated and cooked with an array of spices, creating a rich and flavorful experience.";let c=document.createElement("img");c.setAttribute("src",v),o.appendChild(a),o.appendChild(i),o.appendChild(c);let d=document.createElement("div"),l=document.createElement("div"),s=document.createElement("h3");s.textContent="Pork Roast";let p=document.createElement("p");p.textContent="This savory dish features succulent pieces of pork cooked to perfection with a medley of spices, resulting in a flavorful and hearty meal. Key ingredients typically include onions, garlic, ginger, curry leaves, and a blend of spices such as turmeric, chili powder, coriander, and fennel seeds.";let u=document.createElement("img");u.setAttribute("src",y),d.appendChild(s),d.appendChild(p),d.appendChild(u);let f=document.createElement("h3");f.textContent="Chicken 65";let m=document.createElement("p");m.textContent="Chicken 65 is a popular and iconic dish from South Indian cuisine, known for its spicy, tangy, and flavorful profile. This dish features bite-sized pieces of chicken marinated in a vibrant blend of spices and deep-fried to perfection, creating a crispy exterior and juicy interior";let h=document.createElement("img");h.setAttribute("src",b),l.appendChild(f),l.appendChild(m),l.appendChild(h),t.appendChild(o),t.appendChild(d),t.appendChild(l),document.querySelector("#content")},w=function(){let e=document.querySelector("#content"),n=document.createElement("div");e.appendChild(n);let t=document.createElement("h3");t.textContent="Contact me",n.appendChild(t),n.classList.add("contactDiv");let r=document.createElement("div");r.classList.add("infoDiv"),n.appendChild(r);let o=document.createElement("div");o.textContent="Kerala Tales";let a=document.createElement("div");a.textContent="Noel Focus, 3rd Floor, Seaport - Airport Road Chittethukara, Kakkanad, Kochi, Kerala 682037";let i=document.createElement("div");i.textContent="9995006300",r.appendChild(o),r.appendChild(a),r.appendChild(i)};g();let E=document.querySelectorAll("button");for(let e=0;e<E.length;e++)E[e].addEventListener("click",(function(){let n=document.querySelector("#content");"Menu"==E[e].textContent?(n.innerHTML="",C()):"Contact Me"==E[e].textContent?(n.innerHTML="",w()):"Home"==E[e].textContent&&(n.innerHTML="",g())}))})();