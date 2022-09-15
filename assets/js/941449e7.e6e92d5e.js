"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[80491],{69014:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(86010),i=a(67294);const r={bit:"bit_TKsr",on:"on_Gc1_",charHistory:"charHistory__gY3",cable:"cable_RfeZ",off:"off_hKYl",bitContainer:"bitContainer_bA2H",svgContainer:"svgContainer_ZfG3",out:"out_fofC",sentBits:"sentBits_FAYg",first:"first_VPza",processed:"processed_up44",octet:"octet_Y1qi"};var l=a(97566),o=a(76030);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}const s=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",c({viewBox:"0 0 500 450",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,i.createElement("path",{style:{fill:"transparent",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:4,stroke:"#000",paintOrder:"fill"},d:"M434.055 80.455c.339.059-152.586-1.51-196.471-.273-82.386 2.322-89.439 22.004-100.53 42.758-14.311 26.781 5.825 58.009 47.186 65.986 59.245 11.426.375.639 58.91 10.895 109.13 19.12.575.236 109.833 18.975 68.99 11.833 77.441 107.219 35.431 144.445-33.505 29.691-69.634 58.914-191.461 59.425-.349.001-88.743-.963-89.26-1.683"}))},d=e=>{e&&e.forEach((e=>{e&&o.Z.remove(e)}))},m=e=>{e.forEach((e=>{e&&e.pause()}))},p=e=>{e.forEach((e=>{e&&e.play()}))},u=["button","button--sm","button--primary","button--outline"],f=e=>{const t=e.match(/(?<control>1{0,4}0)/);return t?t.groups.control.length:0},v=()=>{const[e,t]=i.useState("idle"),a=i.useRef(null),[c,v]=i.useState("latin1"),g=i.useRef([]),N=i.useRef(null),[h,b]=i.useState([]),[k,y]=i.useState("01010010 01100101 01110100 01101111"),[C,w]=i.useState([]),[E,_]=i.useState({top:0,left:0}),[x,T]=i.useState(""),[z,S]=i.useState([]),[L,Z]=i.useState(-1),[F,U]=i.useState(null),[M,B]=i.useState(!1);return i.useEffect((()=>{y("latin1"===c?"01010010 01100101 01110100 01101111":"11100010 10101101 10010000")}),[c]),i.useEffect((()=>{if(a.current!==e)switch(a.current=e,F&&"running"!==e&&clearTimeout(F),e){case"pause":m(h);break;case"continue":p(h),t("running");break;case"running":M&&(B(!1),S([]));break;case"stop":d(g.current),w([]),T(""),S([]),t("idle");break;case"start":d(g.current);const e=(e=>{const t=[];let a=e.replace(/\s+/g,"");for(a.length%8!=0&&(a=a.padStart(a.length+a.length%8,"0"));a.length>0;)t.push(a.slice(0,8)),a=a.slice(8);return t})(k);y(e.join(" ")),w([]),T(""),S([]),setTimeout((()=>{T(e.join(""))}),0),t("running")}}),[e,F,M]),i.useEffect((()=>{if(N.current){const e=N.current.querySelector("svg>circle.cable_svg__binDecoderOut");if(e){const t=e.getBoundingClientRect(),a=N.current.getBoundingClientRect();_({left:t.left-a.left,top:t.top-a.top})}}}),[]),i.useEffect((()=>{m(h),d(g.current),w([]),T(""),S([]),t("idle"),F&&clearTimeout(F)}),[c]),i.useEffect((()=>{if(g.current&&N.current){const e=N.current.querySelector("svg>path"),t=o.Z.path(e);Z(-1);const a=g.current.map(((e,a)=>{if(!e)return;return(0,o.Z)({targets:[e],translateX:t("x"),translateY:t("y"),rotate:t("angle"),easing:"linear",duration:4e3,delay:90*a+100*Math.floor(a/8),loop:!1,complete:e=>{Z(a)}})}));b(a)}}),[g,N,x]),i.useEffect((()=>{const e=x.substr(L,1);if(!e)return;const a=[...z];g.current&&g.current[L]&&(g.current[L].style.display="none");const n=z.length>0&&(L+1)%8==0;let i=n;if("latin1"===c)a.push(e);else{const t=8*Math.floor(L/8),n=f(x.substr(t,8)),r=f(x.substr(t+8,8));i=i&&(1===n||2!==r),L%8>=n&&a.push(e)}if(S(a),i){m(h);const e=a.join(""),t=parseInt(e,2),n={bin:e,ord:t,char:String.fromCodePoint(t)};w([...C,n]),B(!0),U(setTimeout((()=>{S([]),p(h.slice(L)),B(!1)}),1e3))}else n&&(m(h),U(setTimeout((()=>{p(h.slice(L))}),1e3)));L===h.length-1&&t("idle")}),[L,c]),i.createElement("div",{className:(0,n.default)("hero","shadow--lw",l.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Bin Decoder"),i.createElement("h4",null,"Modus"),i.createElement("div",{className:(0,n.default)("buttongroup",r.modes)},i.createElement("button",{className:(0,n.default)(...u,"latin1"===c&&"button--active"),onClick:()=>v("latin1")},"Latin1"),i.createElement("button",{className:(0,n.default)(...u,"utf8"===c&&"button--active"),onClick:()=>v("utf8")},"UTF-8")),i.createElement("div",{className:r.inputContainer},i.createElement("textarea",{placeholder:"Bin\xe4re Zeichenkette",className:(0,n.default)(l.Z.input),value:k,onChange:e=>y(e.target.value.replace(/[^01\s]/g,"1")),rows:3}),i.createElement("div",{className:(0,n.default)("buttongroup",r.modes)},["start","idle"].includes(e)?i.createElement("button",{className:(0,n.default)(...u),onClick:()=>t("start")},"Start"):i.createElement(i.Fragment,null,i.createElement("button",{className:(0,n.default)(...u),onClick:()=>t("running"===e?"pause":"continue")},"running"===e?"Pause":"Fortsetzen"),i.createElement("button",{className:(0,n.default)(...u),onClick:()=>t("stop")},"Stop"))),i.createElement("div",{className:(0,n.default)(r.sentBits)},x.split("").map(((e,t)=>{const a=t>0&&t%8==0;return i.createElement("div",{className:(0,n.default)(r.bit,L>=t&&r.processed,a&&r.first,"1"===e?r.on:r.off),key:t},e)}))),i.createElement("div",null,x.split("").map(((e,t)=>i.createElement("div",{key:t,ref:e=>g.current[t]=e,className:(0,n.default)(r.bitContainer)},i.createElement("div",{className:(0,n.default)(r.bit,"1"===e?r.on:r.off)},i.createElement("span",{className:(0,n.default)(r.text)},e))))),i.createElement("div",{ref:N,className:(0,n.default)(r.svgContainer)},i.createElement(s,{className:(0,n.default)(r.cable)}),i.createElement("div",{className:(0,n.default)(r.out),style:{top:E.top,left:E.left}},i.createElement("textarea",{value:C.map((e=>e.char)).join(""),disabled:!0}),i.createElement("div",{className:(0,n.default)(r.octet)},z.map(((e,t)=>i.createElement("div",{className:(0,n.default)(r.bit,"1"===e&&r.on,"0"===e&&r.off),key:t},e)))),i.createElement("div",{className:(0,n.default)(r.charHistory)},i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Chr"),i.createElement("th",null,"Dec"),i.createElement("th",null,"Bin"))),i.createElement("tbody",null,C.slice().reverse().map(((e,t)=>i.createElement("tr",{key:t},i.createElement("td",null,e.char),i.createElement("td",null,e.ord),i.createElement("td",null,e.bin)))))))))))))}},16977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(83117),i=(a(67294),a(3905)),r=(a(61839),a(69014));const l={sidebar_label:"6. \xdcbungen",sidebar_custom_props:{id:"4ee7534f-157f-4dca-be32-220a84c0a21d"}},o="\xdcbungen UTF-8",c={unversionedId:"Codierung/Zeichencodierung/Uebungen",id:"version-25h/Codierung/Zeichencodierung/Uebungen",title:"\xdcbungen UTF-8",description:"Wie viele Zeichen sind in folgender bit-Squenz codiert?",source:"@site/versioned_docs/version-25h/05-Codierung/01-Zeichencodierung/06-Uebungen.md",sourceDirName:"05-Codierung/01-Zeichencodierung",slug:"/Codierung/Zeichencodierung/Uebungen",permalink:"/25h/Codierung/Zeichencodierung/Uebungen",draft:!1,tags:[],version:"25h",sidebarPosition:6,frontMatter:{sidebar_label:"6. \xdcbungen",sidebar_custom_props:{id:"4ee7534f-157f-4dca-be32-220a84c0a21d"}},sidebar:"version-25h/sidebar",previous:{title:"5. UTF-8",permalink:"/25h/Codierung/Zeichencodierung/UTF8"},next:{title:"7. Textcodierung",permalink:"/25h/Codierung/Zeichencodierung/Textcodierung"}},s={},d=[],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=m("Comment"),u=m("Answer"),f={toc:d};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"\xfcbungen-utf-8"},"\xdcbungen UTF-8"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"1-wie-viele-zeichen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. Wie viele Zeichen?"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wie viele Zeichen sind in folgender bit-Squenz codiert?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"11100010 10011101 10000000 01000110 11010011 10111111 11110110 10011010 10101010 10001111 00010010\n")),(0,i.kt)(u,{type:"string",webKey:"e2835c91-5519-4aaa-b28f-08d83e37c5e6",solution:"5",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"2-utf-8-decodieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. UTF-8 Decodieren"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Folgende bit-Sequenzen sind UTF-8 Codiert. Welche Dezimalzahlen sind codiert?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"11000010 10011001\n")),(0,i.kt)(u,{type:"string",webKey:"4ced8d67-dfd8-4d8b-98c8-691303bc8b34",solution:"153",mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"11100001 10000000 10001111\n")),(0,i.kt)(u,{type:"string",webKey:"a5def7c0-be31-442a-ad2b-b48acc9fce13",solution:"4111",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"3-utf-8-codieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"3. UTF-8 Codieren"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie folgende bit-Sequenz zu UTF-8:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"1100 10010101 10010110\n")),(0,i.kt)(u,{type:"string",webKey:"5d40fc8e-0755-4e83-b76d-dc8c975c6b18",solution:"11110011 10001001 10010110 10010110",sanitizer:e=>e.replaceAll(/[^\d]/g,""),mdxType:"Answer"}),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie die Zahl ",(0,i.kt)("inlineCode",{parentName:"p"},"260")," zu UTF-8:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)(u,{type:"string",webKey:"c324c22e-e5bc-4da4-b474-f7d78b49fa75",solution:"11000100 10000100",sanitizer:e=>e.replaceAll(/[^\d]/g,""),mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"4-utf-8-emojis"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"4. UTF-8 Emojis"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie drei Weihnachts-Emojis zu UTF-8:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verwenden Sie Python, um die Ordnungszahl der Emojis herauszufinden."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wandeln Sie die Ordnungszahlen ins Bin\xe4re um (auch hier darf Python verwendet werden)"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie die Bin\xe4rzeichen-Kette zu UTF-8 und halten Sie das Resultat fest."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Probieren Sie Ihre L\xf6sung im UTF-8 Decodier-Modus"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=fdc14c44-1f31-4860-a5aa-45d6f388e74b",live_py:!0,id:"fdc14c44-1f31-4860-a5aa-45d6f388e74b"},"")),(0,i.kt)(u,{type:"text",webKey:"96fc016d-d9d2-4956-919b-ecbc2c31d1f2",default:"\ud83c\udf32",mdxType:"Answer"}),(0,i.kt)(r.Z,{mdxType:"BinDecoder"}))))}v.isMDXComponent=!0},97566:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}}}]);