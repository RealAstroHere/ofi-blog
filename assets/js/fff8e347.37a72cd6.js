"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[70409],{36104:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(86010),i=a(67294);const r={bit:"bit_TKsr",on:"on_Gc1_",charHistory:"charHistory__gY3",cable:"cable_RfeZ",off:"off_hKYl",bitContainer:"bitContainer_bA2H",svgContainer:"svgContainer_ZfG3",out:"out_fofC",sentBits:"sentBits_FAYg",first:"first_VPza",processed:"processed_up44",octet:"octet_Y1qi"};var s=a(32855),m=a(76030);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}const p=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",l({viewBox:"0 0 500 450",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,i.createElement("path",{style:{fill:"transparent",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:4,stroke:"#000",paintOrder:"fill"},d:"M434.055 80.455c.339.059-152.586-1.51-196.471-.273-82.386 2.322-89.439 22.004-100.53 42.758-14.311 26.781 5.825 58.009 47.186 65.986 59.245 11.426.375.639 58.91 10.895 109.13 19.12.575.236 109.833 18.975 68.99 11.833 77.441 107.219 35.431 144.445-33.505 29.691-69.634 58.914-191.461 59.425-.349.001-88.743-.963-89.26-1.683"}))},g=e=>{e&&e.forEach((e=>{e&&m.Z.remove(e)}))},N=e=>{e.forEach((e=>{e&&e.pause()}))},d=e=>{e.forEach((e=>{e&&e.play()}))},c=["button","button--sm","button--primary","button--outline"],o=e=>{const t=e.match(/(?<control>1{0,4}0)/);return t?t.groups.control.length:0},I=()=>{const[e,t]=i.useState("idle"),a=i.useRef(null),[l,I]=i.useState("latin1"),M=i.useRef([]),k=i.useRef(null),[C,u]=i.useState([]),[y,h]=i.useState("01010010 01100101 01110100 01101111"),[D,b]=i.useState([]),[x,A]=i.useState({top:0,left:0}),[w,T]=i.useState(""),[z,j]=i.useState([]),[v,L]=i.useState(-1),[E,f]=i.useState(null),[Z,O]=i.useState(!1);return i.useEffect((()=>{h("latin1"===l?"01010010 01100101 01110100 01101111":"11100010 10101101 10010000")}),[l]),i.useEffect((()=>{if(a.current!==e)switch(a.current=e,E&&"running"!==e&&clearTimeout(E),e){case"pause":N(C);break;case"continue":d(C),t("running");break;case"running":Z&&(O(!1),j([]));break;case"stop":g(M.current),b([]),T(""),j([]),t("idle");break;case"start":g(M.current);const e=(e=>{const t=[];let a=e.replace(/\s+/g,"");for(a.length%8!=0&&(a=a.padStart(a.length+a.length%8,"0"));a.length>0;)t.push(a.slice(0,8)),a=a.slice(8);return t})(y);h(e.join(" ")),b([]),T(""),j([]),setTimeout((()=>{T(e.join(""))}),0),t("running")}}),[e,E,Z]),i.useEffect((()=>{if(k.current){const e=k.current.querySelector("svg>circle.cable_svg__binDecoderOut");if(e){const t=e.getBoundingClientRect(),a=k.current.getBoundingClientRect();A({left:t.left-a.left,top:t.top-a.top})}}}),[]),i.useEffect((()=>{N(C),g(M.current),b([]),T(""),j([]),t("idle"),E&&clearTimeout(E)}),[l]),i.useEffect((()=>{if(M.current&&k.current){const e=k.current.querySelector("svg>path"),t=m.Z.path(e);L(-1);const a=M.current.map(((e,a)=>{if(!e)return;return(0,m.Z)({targets:[e],translateX:t("x"),translateY:t("y"),rotate:t("angle"),easing:"linear",duration:4e3,delay:90*a+100*Math.floor(a/8),loop:!1,complete:e=>{L(a)}})}));u(a)}}),[M,k,w]),i.useEffect((()=>{const e=w.substr(v,1);if(!e)return;const a=[...z];M.current&&M.current[v]&&(M.current[v].style.display="none");const n=z.length>0&&(v+1)%8==0;let i=n;if("latin1"===l)a.push(e);else{const t=8*Math.floor(v/8),n=o(w.substr(t,8)),r=o(w.substr(t+8,8));i=i&&(1===n||2!==r),v%8>=n&&a.push(e)}if(j(a),i){N(C);const e=a.join(""),t=parseInt(e,2),n={bin:e,ord:t,char:String.fromCodePoint(t)};b([...D,n]),O(!0),f(setTimeout((()=>{j([]),d(C.slice(v)),O(!1)}),1e3))}else n&&(N(C),f(setTimeout((()=>{d(C.slice(v))}),1e3)));v===C.length-1&&t("idle")}),[v,l]),i.createElement("div",{className:(0,n.default)("hero","shadow--lw",s.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Bin Decoder"),i.createElement("h4",null,"Modus"),i.createElement("div",{className:(0,n.default)("buttongroup",r.modes)},i.createElement("button",{className:(0,n.default)(...c,"latin1"===l&&"button--active"),onClick:()=>I("latin1")},"Latin1"),i.createElement("button",{className:(0,n.default)(...c,"utf8"===l&&"button--active"),onClick:()=>I("utf8")},"UTF-8")),i.createElement("div",{className:r.inputContainer},i.createElement("textarea",{placeholder:"Bin\xe4re Zeichenkette",className:(0,n.default)(s.Z.input),value:y,onChange:e=>h(e.target.value.replace(/[^01\s]/g,"1")),rows:3}),i.createElement("div",{className:(0,n.default)("buttongroup",r.modes)},["start","idle"].includes(e)?i.createElement("button",{className:(0,n.default)(...c),onClick:()=>t("start")},"Start"):i.createElement(i.Fragment,null,i.createElement("button",{className:(0,n.default)(...c),onClick:()=>t("running"===e?"pause":"continue")},"running"===e?"Pause":"Fortsetzen"),i.createElement("button",{className:(0,n.default)(...c),onClick:()=>t("stop")},"Stop"))),i.createElement("div",{className:(0,n.default)(r.sentBits)},w.split("").map(((e,t)=>{const a=t>0&&t%8==0;return i.createElement("div",{className:(0,n.default)(r.bit,v>=t&&r.processed,a&&r.first,"1"===e?r.on:r.off),key:t},e)}))),i.createElement("div",null,w.split("").map(((e,t)=>i.createElement("div",{key:t,ref:e=>M.current[t]=e,className:(0,n.default)(r.bitContainer)},i.createElement("div",{className:(0,n.default)(r.bit,"1"===e?r.on:r.off)},i.createElement("span",{className:(0,n.default)(r.text)},e))))),i.createElement("div",{ref:k,className:(0,n.default)(r.svgContainer)},i.createElement(p,{className:(0,n.default)(r.cable)}),i.createElement("div",{className:(0,n.default)(r.out),style:{top:x.top,left:x.left}},i.createElement("textarea",{value:D.map((e=>e.char)).join(""),disabled:!0}),i.createElement("div",{className:(0,n.default)(r.octet)},z.map(((e,t)=>i.createElement("div",{className:(0,n.default)(r.bit,"1"===e&&r.on,"0"===e&&r.off),key:t},e)))),i.createElement("div",{className:(0,n.default)(r.charHistory)},i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Chr"),i.createElement("th",null,"Dec"),i.createElement("th",null,"Bin"))),i.createElement("tbody",null,D.slice().reverse().map(((e,t)=>i.createElement("tr",{key:t},i.createElement("td",null,e.char),i.createElement("td",null,e.ord),i.createElement("td",null,e.bin)))))))))))))}},26834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>M,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var n=a(83117),i=(a(67294),a(3905)),r=a(36104);const s={sidebar_custom_props:{id:"b8b4c517-996a-48a6-a6ca-0d87e3a014a1"}},m="5. UTF-8",l={unversionedId:"Codes-and-Data/Codierung/UTF8",id:"Codes-and-Data/Codierung/UTF8",title:"5. UTF-8",description:"5. UTF-8",source:"@site/docs/Codes-and-Data/01-Codierung/05-UTF8.mdx",sourceDirName:"Codes-and-Data/01-Codierung",slug:"/Codes-and-Data/Codierung/UTF8",permalink:"/Codes-and-Data/Codierung/UTF8",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/01-Codierung/05-UTF8.mdx",tags:[],version:"current",lastUpdatedAt:1659798183,formattedLastUpdatedAt:"6. Aug. 2022",sidebarPosition:5,frontMatter:{sidebar_custom_props:{id:"b8b4c517-996a-48a6-a6ca-0d87e3a014a1"}},sidebar:"sidebar",previous:{title:"Unicode",permalink:"/Codes-and-Data/Codierung/Unicode"},next:{title:"6. \xdcbungen",permalink:"/Codes-and-Data/Codierung/Uebungen"}},p={},g=[{value:"5. UTF-8",id:"5-utf-8-1",level:3},{value:"Ausprobieren",id:"ausprobieren",level:2},{value:"Mehrstufige Codierung ",id:"mehrstufige-codierung-",level:2}],N=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=N("Comment"),c=N("Figure"),o=N("Answer"),I={toc:g};function M(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},I,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"5-utf-8"},"5. UTF-8"),(0,i.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"5-utf-8-1"},"5. UTF-8"),(0,i.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Werden Unicode-Zeichen ins bin\xe4re \xfcbersetzt wird klar, dass diese Zahlen nicht mehr nur mit einem Byte dargestellt werden k\xf6nnen. Beispielsweise ist dem Affen-Emoji \ud83d\udc12 die Zahl ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"12801"),(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msub"},"8"),(0,i.kt)("mn",{parentName:"msub"},"10"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"128018_{10}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.79444em",verticalAlign:"-0.15em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,i.kt)("span",{parentName:"span"}))))))))))," zugewiesen, was der Bin\xe4rzahl ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"00000001"),(0,i.kt)("mtext",{parentName:"mrow"},"\u2005"),(0,i.kt)("mn",{parentName:"mrow"},"11110100"),(0,i.kt)("mtext",{parentName:"mrow"},"\u2005"),(0,i.kt)("mn",{parentName:"mrow"},"0001001"),(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msub"},"0"),(0,i.kt)("mn",{parentName:"msub"},"2"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"00000001\\:11110100\\:00010010_{2}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.79444em",verticalAlign:"-0.15em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,i.kt)("span",{parentName:"span"}))))))))))," entspricht, also ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," Bytes Speicherplatz ben\xf6tigt."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"UTF-8")," ist ein Code, der Unicode-Zeichen in Bitmuster \xfcbersetzt. Ein Unicode-Zeichen wird mit ein bis vier Bytes (daher 8-32 bit) dargestellt. Die folgende Tabelle zeigt, wie die Codierung funktioniert:"),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Unicode-Bereich"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Bitmuster"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Anzahl Bit"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Byte 1: Anzahl Kontroll-Bits"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0 bis 127"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"0xxxxxxx")),(0,i.kt)("td",{parentName:"tr",align:"right"},"7"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"128 bis 2047"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"110xxxxx 10xxxxxx")),(0,i.kt)("td",{parentName:"tr",align:"right"},"11"),(0,i.kt)("td",{parentName:"tr",align:"right"},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2048 bis 65535"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"1110xxxx 10xxxxxx 10xxxxxx")),(0,i.kt)("td",{parentName:"tr",align:"right"},"16"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"ab 65536"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11110xxx 10xxxxxx 10xxxxxx 10xxxxxx")),(0,i.kt)("td",{parentName:"tr",align:"right"},"21"),(0,i.kt)("td",{parentName:"tr",align:"right"},"5")))),(0,i.kt)(d,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unicode-Zeichen mit einer Nummer zwischen 0 und 127 werden mit einem Byte dargestellt, welches mit ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," beginnt. Somit ist UTF-8 in diesem Bereich identisch mit ASCII (und Latin 1)."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"F\xfcr die anderen Zeichen wird mehr als ein Byte verwendet. Dabei beginnt jedes Byte mit einer oder mehreren ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", gefolgt von einer ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". Die Anzahl ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," im ersten Byte definieren, wie viele Bytes f\xfcr das Zeichen verwendet werden. Die folgenden Bytes werden mit ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," markiert. Die ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," werden mit der Bin\xe4rdarstellung der Unicode-Nummer aufgef\xfcllt."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Nummer"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Bitmuster"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"A"),(0,i.kt)("td",{parentName:"tr",align:"right"},"65"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"01000001"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"\xe4"),(0,i.kt)("td",{parentName:"tr",align:"right"},"228"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11000011 10100100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Schwarze Sonne mit Strahlen \u2600"),(0,i.kt)("td",{parentName:"tr",align:"right"},"9728"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11100010 10011000 10000000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Affe \ud83d\udc12"),(0,i.kt)("td",{parentName:"tr",align:"right"},"128018"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"11110000 10011111 10010000 10010010"))))),(0,i.kt)(d,{parentName:"div",type:"table",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Der Vorteil dieser Codierung ist, dass am Beginn eines Bytes erkannt wird, ob es sich um den Anfang die Fortsetzung eines Zeichens handelt."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Beginn"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Bedeutung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0\u2026"),(0,i.kt)("td",{parentName:"tr",align:"right"},"ASCII-Zeichen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"10\u2026"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Fortsetzung eines Zeichens mit mehreren Bytes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"110\u2026"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Beginn eines Zeichens mit zwei Bytes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1110\u2026"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Beginn eines Zeichens mit drei Bytes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"11110\u2026"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Beginn eines Zeichens mit vier Bytes")))),(0,i.kt)(d,{parentName:"div",type:"table",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Dies wird deutlich, wenn man dies als Bin\xe4rbaum darstellt:"),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"UTF-8 Pr\xe4fix",src:a(12127).Z,width:"352",height:"272"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"UTF-8 Pr\xe4fix",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"ausprobieren"},"Ausprobieren"),(0,i.kt)(d,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"BinDecoder"}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Codieren Sie Ihre zwei lieblings Emojis als UTF-8 Bin\xe4r-Kette. Verwenden Sie dazu die Hilfe von Python."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)(o,{type:"text",webKey:"91f5e478-a09b-495f-93a4-d7169ae34fdc",mdxType:"Answer"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"mehrstufige-codierung-"},"Mehrstufige Codierung ",(0,i.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)(d,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Oft werden Informationen mehrstufig codiert. So wird beispielsweise die Information \xabIch bin m\xfcde.\xbb als Emoji dargestellt. Das Handy ordnet dem Emoji die entsprechende Unicode-Nummer zu. Diese wird mit UTF-8 in eine Bitfolge \xfcbersetzt, welche \xfcber das Mobilfunknetz \xfcbermittelt wird."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das Handy des Empf\xe4ngers \xfcbersetzt die Bitfolge wieder zur\xfcck in eine Unicode-Nummer und das entsprechende Emoji. Die Interpretation des Emojis muss vom Empf\xe4nger selbst vorgenommen werden."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Unicode zu UTF-8",src:a(559).Z,width:"640",height:"480"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Unicode zu UTF-8",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Remix ",(0,i.kt)("a",{parentName:"p",href:"https://rothe.io/?page=code/3-text/5-code/"},"rothe.io")),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}M.isMDXComponent=!0},32855:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unicode-bc37ec32b4ed168997cc95c70475b7c7.svg"},12127:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjM1MnB4IiBoZWlnaHQ9IjI3MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTkyLDI0QzE5MiwxOS41ODUgMTg4LjQxNSwxNiAxODQsMTZMNzIsMTZDNjcuNTg1LDE2IDY0LDE5LjU4NSA2NCwyNEw2NCw0MEM2NCw0NC40MTUgNjcuNTg1LDQ4IDcyLDQ4TDE4NCw0OEMxODguNDE1LDQ4IDE5Miw0NC40MTUgMTkyLDQwTDE5MiwyNFoiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTAyLjc5NXB4IiB5PSIzOS43NTZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPkFTQ0lJPC90ZXh0PgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTI4OCwxMTlDMjg4LDExNC41ODUgMjg0LjQxNSwxMTEgMjgwLDExMUwxNjgsMTExQzE2My41ODUsMTExIDE2MCwxMTQuNTg1IDE2MCwxMTlMMTYwLDEzNUMxNjAsMTM5LjQxNSAxNjMuNTg1LDE0MyAxNjgsMTQzTDI4MCwxNDNDMjg0LjQxNSwxNDMgMjg4LDEzOS40MTUgMjg4LDEzNUwyODgsMTE5WiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIxNzUuNTgzcHgiIHk9IjEzMi4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPnp3ZWkgQnl0ZXM8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjYzNiwxNDAuNjE4TDE2MCwxMzguNDk3TDE1Ny44NzksMTQ0Ljg2MUwxNTcuODc5LDE0MC42MThMMTUzLjYzNiwxNDAuNjE4WiIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyOCwxNzAuNDk3QzEyOCwxNzAuNDk3IDE1MC43MzUsMTQ3Ljc2MiAxNTcuODc5LDE0MC42MTgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIxMjcuMTdweCIgeT0iMTU3Ljg3MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjEyNS4yMTdweCIgeT0iMjEyLjg3MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MTwvdGV4dD4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjEyMCIgY3k9IjE3OC40OTciIHI9IjgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTU3Ljg3OSwyMTIuMTMzTDE2MCwyMTguNDk3TDE1My42MzYsMjE2LjM3NkwxNTcuODc5LDIxNi4zNzZMMTU3Ljg3OSwyMTIuMTMzWiIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyOCwxODYuNDk3QzEyOCwxODYuNDk3IDE1MC43MzUsMjA5LjIzMiAxNTcuODc5LDIxNi4zNzYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxNjgiIGN5PSIyMTguNjE5IiByPSI4IiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIwNCwxMjgpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwMS40NTIsMjAxLjE2NEwyMDgsMjAyLjYxOUwyMDIuOTA3LDIwNi45ODVMMjA1LjA5LDIwMy4zNDdMMjAxLjQ1MiwyMDEuMTY0WiIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3NiwyMTAuNjE5QzE3NiwyMTAuNjE5IDE5Ny4yMDEsMjA1LjMxOSAyMDUuMDksMjAzLjM0NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMDIuOTA3LDIzMC4yNTNMMjA4LDIzNC42MTlMMjAxLjQ1MiwyMzYuMDc0TDIwNS4wOSwyMzMuODkyTDIwMi45MDcsMjMwLjI1M1oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzYsMjI2LjYxOUMxNzYsMjI2LjYxOSAxOTcuMjAxLDIzMS45MTkgMjA1LjA5LDIzMy44OTIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIxNzUuMTdweCIgeT0iMjA2LjM3NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjE3My44MjJweCIgeT0iMjQ0Ljk5NHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MTwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zMzYsMjMyQzMzNiwyMjcuNTg1IDMzMi40MTUsMjI0IDMyOCwyMjRMMjE2LDIyNEMyMTEuNTg1LDIyNCAyMDgsMjI3LjU4NSAyMDgsMjMyTDIwOCwyNDhDMjA4LDI1Mi40MTUgMjExLjU4NSwyNTYgMjE2LDI1NkwzMjgsMjU2QzMzMi40MTUsMjU2IDMzNiwyNTIuNDE1IDMzNiwyNDhMMzM2LDIzMloiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMjI4LjM1N3B4IiB5PSIyNDUuMDU0cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij52aWVyIEJ5dGVzPC90ZXh0PgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTMzNiwxODRDMzM2LDE3OS41ODUgMzMyLjQxNSwxNzYgMzI4LDE3NkwyMTYsMTc2QzIxMS41ODUsMTc2IDIwOCwxNzkuNTg1IDIwOCwxODRMMjA4LDIwMEMyMDgsMjA0LjQxNSAyMTEuNTg1LDIwOCAyMTYsMjA4TDMyOCwyMDhDMzMyLjQxNSwyMDggMzM2LDIwNC40MTUgMzM2LDIwMEwzMzYsMTg0WiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIyMjUuOTc4cHgiIHk9IjE5Ny4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPmRyZWkgQnl0ZXM8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTA1LjYzNiw4OS4xMjFMMTEyLDg3TDEwOS44NzksOTMuMzY0TDEwOS44NzksODkuMTIxTDEwNS42MzYsODkuMTIxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik04MCwxMTlDODAsMTE5IDEwMi43MzUsOTYuMjY1IDEwOS44NzksODkuMTIxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9Ijc5LjE3cHgiIHk9IjEwNi4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjA8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iNzcuMjE3cHgiIHk9IjE2MS4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjE8L3RleHQ+CiAgICAgICAgPGNpcmNsZSBjeD0iNzIiIGN5PSIxMjciIHI9IjgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwOS44NzksMTYwLjYzNkwxMTIsMTY3TDEwNS42MzYsMTY0Ljg3OUwxMDkuODc5LDE2NC44NzlMMTA5Ljg3OSwxNjAuNjM2WiIvPgogICAgICAgIDxwYXRoIGQ9Ik04MCwxMzVDODAsMTM1IDEwMi43MzUsMTU3LjczNSAxMDkuODc5LDE2NC44NzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjM5Ljk0Niw3MkMyMzkuOTQ2LDY3LjU4NSAyMzYuMzYyLDY0IDIzMS45NDYsNjRMMTIwLDY0QzExNS41ODUsNjQgMTEyLDY3LjU4NSAxMTIsNzJMMTEyLDg4QzExMiw5Mi40MTUgMTE1LjU4NSw5NiAxMjAsOTZMMjMxLjk0Niw5NkMyMzYuMzYyLDk2IDIzOS45NDYsOTIuNDE1IDIzOS45NDYsODhMMjM5Ljk0Niw3MloiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTIzLjAxOXB4IiB5PSI4NS4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPkZvcnRzZXR6dW5nPC90ZXh0PgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTU3LjYzNiw0Mi4xMjFMNjQsNDBMNjEuODc5LDQ2LjM2NEw2MS44NzksNDIuMTIxTDU3LjYzNiw0Mi4xMjFaIi8+CiAgICAgICAgPHBhdGggZD0iTTMyLDcyQzMyLDcyIDU0LjczNSw0OS4yNjUgNjEuODc5LDQyLjEyMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIzMS4xN3B4IiB5PSI1OS4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjA8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMjkuMjE3cHgiIHk9IjExNC4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjE8L3RleHQ+CiAgICAgICAgPGNpcmNsZSBjeD0iMjQiIGN5PSI4MCIgcj0iOCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDQsMTI4KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNjEuODc5LDExMy42MzZMNjQsMTIwTDU3LjYzNiwxMTcuODc5TDYxLjg3OSwxMTcuODc5TDYxLjg3OSwxMTMuNjM2WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMiw4OEMzMiw4OCA1NC43MzUsMTEwLjczNSA2MS44NzksMTE3Ljg3OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDwvZz4KPC9zdmc+Cg=="}}]);