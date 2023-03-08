"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[78529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=d(r),y=a,u=l["".concat(s,".").concat(y)]||l[y]||c[y]||o;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},75478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(83117),a=(r(67294),r(3905));const o={sidebar_custom_props:{id:"6d09f425-1381-45aa-a8f6-b272d49fa173"}},i="1. Display",p={unversionedId:"EF-IOT-Workshop/micropython/display/index",id:"EF-IOT-Workshop/micropython/display/index",title:"1. Display",description:"Material",source:"@site/docs/EF-IOT-Workshop/05-micropython/01-display/index.md",sourceDirName:"EF-IOT-Workshop/05-micropython/01-display",slug:"/EF-IOT-Workshop/micropython/display/",permalink:"/EF-IOT-Workshop/micropython/display/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-IOT-Workshop/05-micropython/01-display/index.md",tags:[],version:"current",lastUpdatedAt:1677202108,formattedLastUpdatedAt:"24. Feb. 2023",frontMatter:{sidebar_custom_props:{id:"6d09f425-1381-45aa-a8f6-b272d49fa173"}},sidebar:"sidebar",previous:{title:"Micro Python",permalink:"/EF-IOT-Workshop/micropython/"},next:{title:"2. Sensoren",permalink:"/EF-IOT-Workshop/micropython/sensoren/"}},s={},d=[],m=(c="Comment",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const l={toc:d};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"1-display"},"1. Display"),(0,a.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("admonition",{title:"OLED-Display",type:"aufgabe"},(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("dl",{parentName:"div"},(0,a.kt)("dt",{parentName:"dl"},"Material\n"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("a",{target:"_blank",href:r(65410).Z},"\ud83d\udc49 Display-Projekt"))),(0,a.kt)(m,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Laden Sie das Beispiel-Projekt herunter und untersuchen Sie dieses genauer."),(0,a.kt)(m,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Studieren Sie zudem die Dokumentation der Display-Bibliothek: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.micropython.org/en/latest/esp8266/tutorial/ssd1306.html"},"\ud83d\udc49 SSD1306")),(0,a.kt)(m,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"admonition",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Versuchen Sie, ein kleines Strichm\xe4nnchen/frauchen auf dem Display zu zeichnen."),(0,a.kt)(m,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))))}y.isMDXComponent=!0},65410:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/display-assets-d3d3e14d8e77d05ff37404b2a2ac3035.zip"}}]);