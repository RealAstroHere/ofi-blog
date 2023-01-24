"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[21940],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),p=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(m.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,f=d["".concat(m,".").concat(u)]||d[u]||c[u]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var m in r)hasOwnProperty.call(r,m)&&(s[m]=r[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85962:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(83117),a=(t(67294),t(3905));const o={sidebar_custom_props:{id:"5b1dbba6-f056-4327-aec7-fcdfbe303015",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},i="Tastatur",s={unversionedId:"Programmieren-1/PyGameZero/keyboard/index",id:"version-26P/Programmieren-1/PyGameZero/keyboard/index",title:"Tastatur",description:"---",source:"@site/versioned_docs/version-26P/03-Programmieren-1/05-PyGameZero/4-keyboard/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/4-keyboard",slug:"/Programmieren-1/PyGameZero/keyboard/",permalink:"/26P/Programmieren-1/PyGameZero/keyboard/",draft:!1,tags:[],version:"26P",frontMatter:{sidebar_custom_props:{id:"5b1dbba6-f056-4327-aec7-fcdfbe303015",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26P/sidebar",previous:{title:"Aktor",permalink:"/26P/Programmieren-1/PyGameZero/actor/"},next:{title:"Tastaturzustand",permalink:"/26P/Programmieren-1/PyGameZero/keyboard/state/"}},m={},p=[],l=(c="Comment",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const d={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"tastatur"},"Tastatur"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Es gibt zwei M\xf6glichkeiten, auf Tastatureingaben zu reagieren."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Es wird der aktuelle ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"?page=4-keyboard/1-state/"},"Zustand"))," einer bestimmten Taste ermittelt. Das ist beispielsweise der Fall, wenn sich die Spielfigur bewegen soll, falls eine bestimmte Taste gedr\xfcckt ",(0,a.kt)("strong",{parentName:"p"},"ist"),"."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Es wird auf das Dr\xfccken oder Loslassen einer Taste reagiert. In diesem Fall wird von einem ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"?page=4-keyboard/2-event/"},"Ereignis"))," gesprochen. Dies wird beispielsweise verwendet, wenn eine Spielfigur springen soll, wenn eine Taste gedr\xfcckt ",(0,a.kt)("strong",{parentName:"p"},"wird"),"."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))))}u.isMDXComponent=!0}}]);