(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[889],{73830:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(72389);const o={pdfWrapper:"pdfWrapper_Udtw",overflowing:"overflowing_UNjU",doc:"doc_gbGK",download:"download_Q5yo",controls:"controls_xr2C"};var i=n(86010),r=n(67294),d=n(16187),s=n(92814),l=n(51436);const c=e=>{const[t,n]=(0,r.useState)(null),[c,u]=(0,r.useState)(-1),[m,p]=(0,r.useState)(e.width),[f,g]=(0,r.useState)(150),h=(0,a.Z)(),[w,v]=(0,r.useState)(!1);r.useEffect((()=>(window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const k=r.useRef(null),b=()=>{if(!k.current)return;const e=k.current.querySelector("canvas.react-pdf__Page__canvas");if(e){const t=e.getBoundingClientRect().height;g(t)}},N=()=>{if(!k.current)return;const t=.98*k.current.getBoundingClientRect().width;b();let n=t,a=!1;e.width&&e.scale?n=Math.min(e.width*e.scale,t):e.width?n=Math.min(e.width,t):e.scale&&(n=e.scale*t),e.minWidth&&n<e.minWidth&&(n=e.minWidth,a=!0),a!==w&&v(a),p(n)},C=e=>{const{scrollX:n,scrollY:a}=window;u(c+e>t?1:c+e<1?t:c+e),setTimeout((()=>{window.scrollTo(n,a)}),0)};return h?r.createElement("div",{className:(0,i.default)(o.pdfWrapper,w&&o.overflowing,(t<=1||void 0!==e.page)&&o.singlepage),ref:k},r.createElement("div",{style:{height:f+8+"px"}},r.createElement(d.BB,{file:e.file,onLoadSuccess:t=>{let{numPages:a}=t;n(a),c<0&&u(e.page||1),N()},className:(0,i.default)(o.doc),options:{cMapUrl:"cmaps/",cMapPacked:!0}},c>0&&r.createElement(d.T3,{pageNumber:c,width:m,onLoadSuccess:b}),!e.noDownload&&r.createElement("a",{href:e.file,className:(0,i.default)(o.download,"button","button--secondary","button--sm"),download:e.name},r.createElement(s.G,{icon:l.q7m})))),r.createElement("div",{className:(0,i.default)(o.controls)},t>1&&void 0===e.page&&r.createElement("div",{className:(0,i.default)("button-group")},r.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),onClick:()=>{C(-1)}},r.createElement(s.G,{icon:l.nP8})),r.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),disabled:!0},c||(t?1:"--")," / ",t||"--"),r.createElement("button",{className:(0,i.default)("button","button--secondary","button--sm"),onClick:()=>{C(1)}},r.createElement(s.G,{icon:l.JYN}))))):r.createElement("div",null,"Loading...")}},85011:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(83117),o=(n(67294),n(3905)),i=n(73830);const r={title:"2. QR Code",label:"2. QR Code"},d=void 0,s={unversionedId:"Codierung/Anwendungen/qr-code",id:"version-25h/Codierung/Anwendungen/qr-code",title:"2. QR Code",description:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",source:"@site/versioned_docs/version-25h/05-Codierung/04-Anwendungen/02-qr-code.md",sourceDirName:"05-Codierung/04-Anwendungen",slug:"/Codierung/Anwendungen/qr-code",permalink:"/25h/Codierung/Anwendungen/qr-code",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/04-Anwendungen/02-qr-code.md",tags:[],version:"25h",sidebarPosition:2,frontMatter:{title:"2. QR Code",label:"2. QR Code"},sidebar:"version-25h/sidebar",previous:{title:"1. Morsecode",permalink:"/25h/Codierung/Anwendungen/morsecode"},next:{title:"3. Fehlerkorrektur",permalink:"/25h/Codierung/Anwendungen/fehlerkorrektur"}},l={},c=[],u=(m="Figure",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",src:n(28810).Z,width:"245",height:"245"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Was enth\xe4lt der QR-Code? \ud83c\udff4\u200d\u2620\ufe0f\u2620\ufe0f\ud835\udf0b",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div",id:"auftrag"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,o.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Auftrag")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Recherchieren Sie in einer 2er bis 3er Gruppe"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"wie ein QR-Code funktioniert"),(0,o.kt)("li",{parentName:"ul"},"welche Elemente darin vorkommen"),(0,o.kt)("li",{parentName:"ul"},"wie viele Zeichen darin codiert werden k\xf6nnen"),(0,o.kt)("li",{parentName:"ul"},"weshalb der Inhalt immer noch lesbar ist, auch wenn ein Teil des QR-Codes abgedeckt ist"),(0,o.kt)("li",{parentName:"ul"},"weitere spannende Fakten, denen Sie begegnen")),(0,o.kt)("p",{parentName:"div"},"Halten Sie Ihre Erkenntnisse auf einem A3-Plakat fest."))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)(i.Z,{file:n(86055).Z,name:"qr-script.pdf",page:void 0,width:void 0,minWidth:void 0,noDownload:void 0,scale:void 0,mdxType:"PdfViewer"})),(0,o.kt)("p",null,"PDF-Quelle ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,o.kt)("a",{parentName:"li",href:"https://www.swisseduc.ch/informatik/theoretische_informatik/qr_codes/docs/unterlagen_lernende.pdf"},"swisseduc.ch"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},86055:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/files/qr-script-b2f2e38d40832d1b0eef66035920fef4.pdf"},28810:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/piraten-c774f7ffb4fc03b0467ad7c932e6faeb.svg"},14601:()=>{},32767:()=>{},28251:()=>{},57677:()=>{},1543:()=>{},87324:()=>{}}]);