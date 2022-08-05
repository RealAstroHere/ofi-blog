"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8491],{3905:(e,I,g)=>{g.d(I,{Zo:()=>m,kt:()=>A});var t=g(67294);function i(e,I,g){return I in e?Object.defineProperty(e,I,{value:g,enumerable:!0,configurable:!0,writable:!0}):e[I]=g,e}function C(e,I){var g=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);I&&(t=t.filter((function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable}))),g.push.apply(g,t)}return g}function M(e){for(var I=1;I<arguments.length;I++){var g=null!=arguments[I]?arguments[I]:{};I%2?C(Object(g),!0).forEach((function(I){i(e,I,g[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(g)):C(Object(g)).forEach((function(I){Object.defineProperty(e,I,Object.getOwnPropertyDescriptor(g,I))}))}return e}function a(e,I){if(null==e)return{};var g,t,i=function(e,I){if(null==e)return{};var g,t,i={},C=Object.keys(e);for(t=0;t<C.length;t++)g=C[t],I.indexOf(g)>=0||(i[g]=e[g]);return i}(e,I);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(e);for(t=0;t<C.length;t++)g=C[t],I.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(e,g)&&(i[g]=e[g])}return i}var n=t.createContext({}),N=function(e){var I=t.useContext(n),g=I;return e&&(g="function"==typeof e?e(I):M(M({},I),e)),g},m=function(e){var I=N(e.components);return t.createElement(n.Provider,{value:I},e.children)},c={inlineCode:"code",wrapper:function(e){var I=e.children;return t.createElement(t.Fragment,{},I)}},s=t.forwardRef((function(e,I){var g=e.components,i=e.mdxType,C=e.originalType,n=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=N(g),A=i,D=s["".concat(n,".").concat(A)]||s[A]||c[A]||C;return g?t.createElement(D,M(M({ref:I},m),{},{components:g})):t.createElement(D,M({ref:I},m))}));function A(e,I){var g=arguments,i=I&&I.mdxType;if("string"==typeof e||i){var C=g.length,M=new Array(C);M[0]=s;var a={};for(var n in I)hasOwnProperty.call(I,n)&&(a[n]=I[n]);a.originalType=e,a.mdxType="string"==typeof e?e:i,M[1]=a;for(var N=2;N<C;N++)M[N]=g[N];return t.createElement.apply(null,M)}return t.createElement.apply(null,g)}s.displayName="MDXCreateElement"},11602:(e,I,g)=>{g.r(I),g.d(I,{assets:()=>n,contentTitle:()=>M,default:()=>r,frontMatter:()=>C,metadata:()=>a,toc:()=>N});var t=g(83117),i=(g(67294),g(3905));const C={title:"2. Bussystem",sidebar_custom_props:{id:"321d5c67-efda-482f-94ef-c61037bff66c"}},M="2. Bussystem",a={unversionedId:"Computer/architecture/bus",id:"Computer/architecture/bus",title:"2. Bussystem",description:"Witz des Tages by 24i --width=350px",source:"@site/docs/Computer/03-architecture/02-bus.md",sourceDirName:"Computer/03-architecture",slug:"/Computer/architecture/bus",permalink:"/Computer/architecture/bus",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/03-architecture/02-bus.md",tags:[],version:"current",lastUpdatedAt:1659530664,formattedLastUpdatedAt:"3. Aug. 2022",sidebarPosition:2,frontMatter:{title:"2. Bussystem",sidebar_custom_props:{id:"321d5c67-efda-482f-94ef-c61037bff66c"}},sidebar:"sidebar",previous:{title:"1. Von-Neumann-Architektur",permalink:"/Computer/architecture/von-neumann"},next:{title:"3. Prozessor",permalink:"/Computer/architecture/cpu"}},n={},N=[{value:"Beispiele",id:"beispiele",level:2}],m=e=>function(I){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",I)},c=m("Comment"),s=m("Figure"),A=m("SourceRef"),D=m("Answer"),y={toc:N};function r(e){let{components:I,...C}=e;return(0,i.kt)("wrapper",(0,t.Z)({},y,C,{components:I,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"2-bussystem"},"2. Bussystem"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(s,{parentName:"div",options:{width:"350px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"Witz des Tages by 24i --width=350px",src:g(63636).Z,width:"587",height:"767"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Witz des Tages by 24i",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(A,{parentName:"figcaption",bib:{author:"Yael, Sujina, Denise",source:"https://ofi.gbsl.website/24i",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In der Informatik ist ein ",(0,i.kt)("em",{parentName:"p"},"Bus")," ein System zur Daten\xfcbertragung zwischen mehreren Komponenten \xfcber einen gemeinsamen \xdcbertragungsweg. Findet eine Daten\xfcbertragung zwischen zwei Komponenten statt, so m\xfcssen die \xfcbrigen Komponenten schweigen, da sie sich sonst gegenseitig st\xf6ren w\xfcrden.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(s,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Daten\xfcbertragung mit Bus",src:g(20661).Z,width:"672",height:"256"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Daten\xfcbertragung mit Bus",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(s,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Daten\xfcbertragung ohne Bus",src:g(91924).Z,width:"672",height:"256"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Daten\xfcbertragung ohne Bus",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Busse werden verwendet, um die Komplexit\xe4t der Hardware zu reduzieren."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wenn alle Komponenten direkt miteinander kommunizieren, muss zwischen allen Komponenten eine Datenleitung vorhanden sein. Wenn im Bild oben rechts eine f\xfcnfte Komponente hinzukommt, m\xfcssen f\xfcnf neue Datenleitungen gezogen werden. Wenn ein Bus verwendet wird, muss eine neue Komponente nur am Bus angeschlossen werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"beispiele"},"Beispiele"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Systembus in einem Computer"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Serial AT Attachment (SATA, f\xfcr Computerfestplatten)"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Universal Serial Bus (USB)"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"take-home-message-aus-cpu-rollenspiel"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message aus CPU-Rollenspiel")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(D,{type:"text",webKey:"2ac55d18-cd29-4ad2-b378-36a5210e19a2",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Quelle: ",(0,i.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Bus_(Datenverarbeitung)"},"Wikipedia: Bus (Datenverarbeitung)")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}r.isMDXComponent=!0},20661:(e,I,g)=>{g.d(I,{Z:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDY3MiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjU7Ij4KICAgIDxnIGlkPSJEIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LDE5MC4yMDIsMTU1Ljg3MikiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDMuMTMyMTVlLTE3LC0wLjUxMTUxOSwwLjcxODQyMyw0LjM5OTA3ZS0xNywxMjcuODk5LDg2LjkxMzYpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE1MCw1My45MDlMMTUwLDU5TDEzOSw1MS4xNjhMMTUwLDQzLjMzNkwxNTAsNDguNDI3TDE3Miw0OC40MjdMMTcyLDQzLjMzNkwxODMsNTEuMTY4TDE3Miw1OUwxNzIsNTMuOTA5TDE1MCw1My45MDlaIiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MC43MnB4OyIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjUwMDQ2LDAsMCwxLjMxNjA3LC05My40MTkyLC0xNS43NzMzKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzguMjg2NiwtMi42NzQ0OSkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwM3B4OyI+RDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQyIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMjQ5Ljc5OCwxNTUuODcyKSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMy4xMzIxNWUtMTcsLTAuNTExNTE5LDAuNzE4NDIzLDQuMzk5MDdlLTE3LDEyNy44OTksODYuOTEzNikiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUwLDUzLjkwOUwxNTAsNTlMMTM5LDUxLjE2OEwxNTAsNDMuMzM2TDE1MCw0OC40MjdMMTcyLDQ4LjQyN0wxNzIsNDMuMzM2TDE4Myw1MS4xNjhMMTcyLDU5TDE3Miw1My45MDlMMTUwLDUzLjkwOVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjcycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTAwNDYsMCwwLDEuMzE2MDcsLTkzLjQxOTIsLTE1Ljc3MzMpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw3OC4zNjA0LC0yLjY3NDQ5KSI+CiAgICAgICAgICAgIDx0ZXh0IHg9IjgyLjM0M3B4IiB5PSIzMy42MDdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTAuODAzcHg7Ij5DPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJCIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMDY0LDE4OS4yMDIsLTE5LjExMzcpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgzLjEzMzQzZS0xNywtMC41MTE3MjcsMC43MTg0MjMsNC4zOTkwN2UtMTcsMTI4LjM0OSwxMzEuOTc0KSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTAsNTMuOTA5TDE1MCw1OUwxMzksNTEuMTY4TDE1MCw0My4zMzZMMTUwLDQ4LjQyN0wxNzIsNDguNDI3TDE3Miw0My4zMzZMMTgzLDUxLjE2OEwxNzIsNTlMMTcyLDUzLjkwOUwxNTAsNTMuOTA5WiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuNzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41MDA0NiwwLDAsMS4zMTY2LC05Mi45NjkxLC0xNS43ODYxKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzkuMDU0NCwtMi42NjgzNCkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwOHB4OyI+QjwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQSIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMjQ4Ljc5OCwtMzAuMTI4KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMy4xMzIxNWUtMTcsLTAuNTExNTE5LDAuNzE4NDIzLDQuMzk5MDdlLTE3LDEyNy40NDksMTM2Ljg3OSkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUwLDUzLjkwOUwxNTAsNTlMMTM5LDUxLjE2OEwxNTAsNDMuMzM2TDE1MCw0OC40MjdMMTcyLDQ4LjQyN0wxNzIsNDMuMzM2TDE4Myw1MS4xNjhMMTcyLDU5TDE3Miw1My45MDlMMTUwLDUzLjkwOVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjcycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTAwNDYsMCwwLDEuMzE2MDcsLTkzLjg2OTQsLTEwLjgyMTgpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw3OC4yNjM3LDIuMjc3MDIpIj4KICAgICAgICAgICAgPHRleHQgeD0iODIuMzQzcHgiIHk9IjMzLjYwN3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMC44MDNweDsiPkE8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMTAuNjY2NywwLDAsMS40NjE4NSwtMTQ5OC42Nyw4MC45MTU1KSI+CiAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMjQsMTMwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMTNweDsiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuMjIxNTUsMCwwLDIuMjIxNTUsLTE1LjQ4NjUsLTE1LjQ4NjUpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ1MDEzNywtMCwtMCwwLjQ1MDEzNyw2Ljk3MTAzLDYuOTcxMDMpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE0OC4xNTUsMTgwLjc3TDE1My4zNTEsMTkxLjI5N0wxNTguNjU1LDE4MC44MjRMMTQ4LjE1NSwxODAuNzdaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTUxOS43NjQsNzYuNUw1MjUuMDE0LDY2TDUzMC4yNjQsNzYuNUw1MTkuNzY0LDc2LjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE1My4zOTQsMTgyLjg5N0MxNTMuNDgzLDE2NS43ODcgMTUzLjY3NiwxMjguNSAxNTMuNjc2LDEyOC41TDUyNS4wMTQsMTI4LjVMNTI1LjAxNCw3NC40IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMTgzLDI4LDI4KTtzdHJva2Utd2lkdGg6My41cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},91924:(e,I,g)=>{g.d(I,{Z:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgdmlld0JveD0iMCAwIDY3MiAyNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjU7Ij4KICAgIDxnIGlkPSJEIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LDE5MC4yMDIsMTU1Ljg3MikiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTAwNDYsMCwwLDEuMzE2MDcsLTkzLjQxOTIsLTE1Ljc3MzMpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMTQyIiB5PSIyNCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE3LjEwMiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjAuMzJweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw3OC4yODY2LC0yLjY3NDQ5KSI+CiAgICAgICAgICAgIDx0ZXh0IHg9IjgyLjM0M3B4IiB5PSIzMy42MDdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTAuODAzcHg7Ij5EPC90ZXh0PgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGlkPSJDIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LC0yNDkuNzk4LDE1NS44NzIpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjUwMDQ2LDAsMCwxLjMxNjA3LC05My40MTkyLC0xNS43NzMzKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzguMzYwNCwtMi42NzQ0OSkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwM3B4OyI+QzwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQiIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjA2NCwxODkuMjAyLC0xOS4xMTM3KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41MDA0NiwwLDAsMS4zMTY2LC05Mi45NjkxLC0xNS43ODYxKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjE0MiIgeT0iMjQiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxNy4xMDIiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDowLjMycHg7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzkuMDU0NCwtMi42NjgzNCkiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwOHB4OyI+QjwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iQSIgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMjQ4Ljc5OCwtMzAuMTI4KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41MDA0NiwwLDAsMS4zMTYwNywtOTMuODY5NCwtMTAuODIxOCkiPgogICAgICAgICAgICA8cmVjdCB4PSIxNDIiIHk9IjI0IiB3aWR0aD0iNjAiIGhlaWdodD0iMTcuMTAyIiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MC4zMnB4OyIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDc4LjI2MzcsMi4yNzcwMikiPgogICAgICAgICAgICA8dGV4dCB4PSI4Mi4zNDNweCIgeT0iMzMuNjA3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwLjgwM3B4OyI+QTwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LC0xNS40ODY1LC0xNS40ODY1KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC40NTAxMzcsLTAsLTAsMC40NTAxMzcsNi45NzEwMyw2Ljk3MTAzKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMjEuNjc1LDE3OS4xNjVMMjE2LDE5MUwyMjguOTUsMTkzLjEzNEwyMjEuNjc1LDE3OS4xNjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQ0My4wNSw2My44NjZMNDU2LDY2TDQ1MC4zMjUsNzcuODM1TDQ0My4wNSw2My44NjZaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTIyMy40NSwxODcuMTJDMjU5LjE5LDE2OC41MDUgNDEyLjgxLDg4LjQ5NSA0NDguNTUsNjkuODgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOnJnYigxODMsMjgsMjgpO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuMjIxNTUsMCwwLDIuMjIxNTUsLTE1LjQ4NjUsLTE1LjQ4NjUpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ1MDEzNywtMCwtMCwwLjQ1MDEzNyw2Ljk3MTAzLDYuOTcxMDMpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIyOC45NSw2My44NjZMMjE2LDY2TDIyMS42NzUsNzcuODM1TDIyOC45NSw2My44NjZaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQ1MC4zMjUsMTc5LjE2NUw0NTYsMTkxTDQ0My4wNSwxOTMuMTM0TDQ1MC4zMjUsMTc5LjE2NVoiIHN0eWxlPSJmaWxsOnJnYigxODMsMjgsMjgpOyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjIzLjQ1LDY5Ljg4QzI1OS4xOSw4OC40OTUgNDEyLjgxLDE2OC41MDUgNDQ4LjU1LDE4Ny4xMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDE4MywyOCwyOCk7c3Ryb2tlLXdpZHRoOjMuNXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMTUuNDg2NSwtMTUuNDg2NSkiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNDUwMTM3LC0wLC0wLDAuNDUwMTM3LDYuOTcxMDMsNi45NzEwMykiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjI2LjUsMzMuMTI1TDIxNiw0MUwyMjYuNSw0OC44NzVMMjI2LjUsMzMuMTI1WiIgc3R5bGU9ImZpbGw6cmdiKDE4MywyOCwyOCk7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00NDUuNSwzMy4xMjVMNDU2LDQxTDQ0NS41LDQ4Ljg3NUw0NDUuNSwzMy4xMjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTIyNC40LDQxTDQ0Ny42LDQxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMTgzLDI4LDI4KTtzdHJva2Utd2lkdGg6My41cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLjIyMTU1LDAsMCwyLjIyMTU1LC0xNS40ODY1LC0xNS40ODY1KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC40NTAxMzcsLTAsLTAsMC40NTAxMzcsNi45NzEwMyw2Ljk3MTAzKSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDguMTI1LDE4MC41TDExNiwxOTFMMTIzLjg3NSwxODAuNUwxMDguMTI1LDE4MC41WiIgc3R5bGU9ImZpbGw6cmdiKDE4MywyOCwyOCk7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDguMTI1LDc2LjVMMTE2LDY2TDEyMy44NzUsNzYuNUwxMDguMTI1LDc2LjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTExNiwxODIuNkwxMTYsNzQuNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDE4MywyOCwyOCk7c3Ryb2tlLXdpZHRoOjMuNXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMi4yMjE1NSwwLDAsMi4yMjE1NSwtMTUuNDg2NSwtMTUuNDg2NSkiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNDUwMTM3LC0wLC0wLDAuNDUwMTM3LDYuOTcxMDMsNi45NzEwMykiPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQ4LjEyNSwxODAuNUw1NTYsMTkxTDU2My44NzUsMTgwLjVMNTQ4LjEyNSwxODAuNVoiIHN0eWxlPSJmaWxsOnJnYigxODMsMjgsMjgpOyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQ4LjEyNSw3Ni41TDU1Niw2Nkw1NjMuODc1LDc2LjVMNTQ4LjEyNSw3Ni41WiIgc3R5bGU9ImZpbGw6cmdiKDE4MywyOCwyOCk7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NTYsMTgyLjZMNTU2LDc0LjQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOnJnYigxODMsMjgsMjgpO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuMjIxNTUsMCwwLDIuMjIxNTUsLTE1LjQ4NjUsLTE1LjQ4NjUpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjQ1MDEzNywtMCwtMCwwLjQ1MDEzNyw2Ljk3MTAzLDYuOTcxMDMpIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIyNi41LDIwOC4xMjVMMjE2LDIxNkwyMjYuNSwyMjMuODc1TDIyNi41LDIwOC4xMjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTQ0NS41LDIwOC4xMjVMNDU2LDIxNkw0NDUuNSwyMjMuODc1TDQ0NS41LDIwOC4xMjVaIiBzdHlsZT0iZmlsbDpyZ2IoMTgzLDI4LDI4KTsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTIyNC40LDIxNkw0NDcuNiwyMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOnJnYigxODMsMjgsMjgpO3N0cm9rZS13aWR0aDozLjVweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},63636:(e,I,g)=>{g.d(I,{Z:()=>t});const t=g.p+"assets/images/02-bus_joke-11f5f6cad8971e2c85e149f6bad572ff.jpg"}}]);