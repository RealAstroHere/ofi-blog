"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[86349],{34673:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(83117),i=n(67294),r=n(86010),s=n(72389),l=n(86043);const c="details_lb9f",o="isBrowser_bmU9",m="collapsibleContent_i85q";function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function u(e){let{summary:t,children:n,...u}=e;const h=(0,s.Z)(),g=(0,i.useRef)(null),{collapsed:k,setCollapsed:b}=(0,l.u)({initialState:!u.open}),[v,f]=(0,i.useState)(u.open);return i.createElement("details",(0,a.Z)({},u,{ref:g,open:v,"data-collapsed":k,className:(0,r.default)(c,h&&o,u.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&p(t,g.current)&&(e.preventDefault(),k?(b(!1),f(!0)):b(!0))}}),null!=t?t:i.createElement("summary",null,"Details"),i.createElement(l.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),f(!e)}},i.createElement("div",{className:m},n)))}const h="details_b_Ee";function g(e){let{...t}=e;return i.createElement(u,(0,a.Z)({},t,{className:(0,r.default)("alert alert--info",h,t.className)}))}},61537:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(34673);const r="finding_HjUo";var s=n(86010);const l=e=>a.createElement(i.Z,{summary:a.createElement("summary",null,e.title||"Gewonnene Erkenntnisse",a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),className:(0,s.default)("alert alert--warning",r)},e.children)},46795:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(86010),i=n(96486),r=n(67294),s=n(15226),l=n(38134);const c=e=>(0,s.g7)(e).split("").map((e=>Number.parseInt(s.Vc[e],2))),o=e=>e.map((e=>s.Vc[e.toString(2).padStart(5,"0")])).join(""),m=()=>{const[e,t]=r.useState(""),[n,m]=r.useState(""),[d,p]=r.useState(""),[u,h]=r.useState("ECB"),[g,k]=r.useState(""),[b,v]=r.useState("text");return r.useEffect((()=>{const a=d.length;if(0===a||"CBC"===u&&g.length!==d.length)return;const i=c(d);if("ECB"===u)switch(b){case"cipher":const r=c(n);let s=o(r.map(((e,t)=>e^i[t%a])));return t(s);case"text":const l=c(e),d=o(l.map(((e,t)=>e^i[t%a])));return m(d)}const r=c(g);switch(b){case"cipher":const s=c(n),l=o(s.map(((e,t)=>{const n=t%a,s=e^i[n]^r[n];return r[n]=e,s})));return t(l);case"text":const d=c(e),p=o(d.map(((e,t)=>{const n=t%a,s=e^r[n]^i[n];return r[n]=s,s})));return m(p)}}),[e,n,d,u,g]),r.createElement("div",{className:(0,a.default)("hero","shadow--lw",l.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"XOR Blockchiffre"),r.createElement("h4",null,"Modus"),r.createElement("div",{className:(0,a.default)("buttongroup",l.Z.modes)},r.createElement("button",{className:(0,a.default)("button","button--sm","button--primary","button--outline","ECB"===u&&"button--active"),onClick:()=>h("ECB")},"ECB"),r.createElement("button",{className:(0,a.default)("button","button--sm","button--primary","button--outline","CBC"===u&&"button--active"),onClick:()=>h("CBC")},"CBC")),r.createElement("h4",null,"Klartext"),r.createElement("div",{className:l.Z.inputContainer},r.createElement("textarea",{className:(0,a.default)(l.Z.input),value:e,onFocus:()=>v("text"),onChange:e=>{v("text");const n=Math.max(e.target.selectionStart,e.target.selectionEnd);t((0,s.g7)(e.target.value)),setTimeout((()=>e.target.setSelectionRange(n,n)),0)},rows:5,placeholder:"Klartext"}),"text"===b&&r.createElement("div",{className:l.Z.active})),r.createElement("div",{className:l.Z.stringInputContainer},r.createElement("h4",null,r.createElement("label",{htmlFor:"block-chain-key"},"Schl\xfcssel")),r.createElement("input",{id:"block-chain-key",type:"text",placeholder:"Schl\xfcssel",value:d,onChange:e=>{const t=Math.max(e.target.selectionStart,e.target.selectionEnd);p((0,s.g7)(e.target.value)),setTimeout((()=>e.target.setSelectionRange(t,t)),0)}})),"CBC"===u&&r.createElement("div",{className:l.Z.stringInputContainer},r.createElement("h4",null,r.createElement("label",{htmlFor:"cbc-iv"},"Initialisierungs Vektor (IV)")),r.createElement("div",{className:(0,a.default)(l.Z.iv,"button-group")},r.createElement("input",{id:"cbc-iv",type:"text",placeholder:"Der IV muss die gleiche L\xe4nge haben wie der Schl\xfcssel",value:g,className:(0,a.default)(g.length!==d.length&&l.Z.invalid),onChange:e=>{const t=Math.max(e.target.selectionStart,e.target.selectionEnd);k((0,s.g7)(e.target.value)),setTimeout((()=>{e.target.setSelectionRange(t,t)}),0)}}),g.length!==d.length&&r.createElement("span",{className:(0,a.default)("badge","badge--danger",l.Z.errorBadge),title:"Der IV muss die gleiche L\xe4nge haben wie der Schl\xfcssel"},"L\xe4nge"),r.createElement("button",{className:(0,a.default)("button","button--primary","button--sm"),onClick:()=>{if(0===d.length)return k("");const e=Object.keys(s.Vc).filter((e=>1===e.length)),t=(0,i.shuffle)(Array(Math.floor(d.length/e.length)+2).fill("").reduce(((t,n)=>[...t,...e]),[]));k(t.slice(0,d.length).join(""))}},"Zuf\xe4llig Setzen"))),r.createElement("h4",null,"Geheimtext"),r.createElement("div",{className:l.Z.inputContainer},r.createElement("textarea",{className:(0,a.default)(l.Z.input),value:n,onFocus:()=>v("cipher"),onChange:e=>{v("cipher");const t=Math.max(e.target.selectionStart,e.target.selectionEnd);m((0,s.g7)(e.target.value)),setTimeout((()=>e.target.setSelectionRange(t,t)),0)},rows:5,placeholder:"XOR Verschl\xfcsselter Geheimtext"}),"cipher"===b&&r.createElement("span",{className:l.Z.active}))))}},15226:(e,t,n)=>{n.d(t,{Vc:()=>y,bF:()=>C,H4:()=>w,g7:()=>N});var a=n(21314),i=n(86010),r=n(68949),s=n(71217),l=n(67294),c=n(63437);const o="container_zVtl",m="input_tYix",d="inputContainer_mEEr",p="active_fzzJ",u="interactive_Yfi1",h="pixelEditor_B1ri",g="row_yRws",k="cell_gJPc",b="off_TP1h",v="on_DXrb",f="actions_N7O9",N=e=>e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,""),y={" ":"00000",A:"00001",B:"00010",C:"00011",D:"00100",E:"00101",F:"00110",G:"00111",H:"01000",I:"01001",J:"01010",K:"01011",L:"01100",M:"01101",N:"01110",O:"01111",P:"10000",Q:"10001",R:"10010",S:"10011",T:"10100",U:"10101",V:"10110",W:"10111",X:"11000",Y:"11001",Z:"11010",",":"11011","-":"11100",".":"11101","?":"11110","@":"11111","00000":" ","00001":"A","00010":"B","00011":"C","00100":"D","00101":"E","00110":"F","00111":"G","01000":"H","01001":"I","01010":"J","01011":"K","01100":"L","01101":"M","01110":"N","01111":"O",1e4:"P",10001:"Q",10010:"R",10011:"S",10100:"T",10101:"U",10110:"V",10111:"W",11e3:"X",11001:"Y",11010:"Z",11011:",",11100:"-",11101:".",11110:"?",11111:"@"},E=function(e,t){void 0===t&&(t=!0);const n=[];let a=e.replace(/\s/g,"");for(;a.length>0&&(!(a.length<5)||t);)n.push(a.slice(0,5)),a=a.slice(5);return n},w=(0,s.Pi)((()=>{const[e,t]=l.useState(""),[n,s]=l.useState(""),[c,u]=l.useState("text"),h=(0,a.oR)("viewStore");return l.useEffect((()=>{var e;t((null==(e=h.penta)?void 0:e.text)||"")}),[]),l.useEffect((()=>(0,r.aD)((()=>{h.penta={text:e}}))),[e]),l.useEffect((()=>{"text"===c&&s((e=>e.toUpperCase().split("").map((e=>y[e]||e)))(e).join(" "))}),[e]),l.useEffect((()=>{"penta"===c&&t((e=>E(e).map((e=>y[e]||e)))(n).join(""))}),[n]),l.createElement("div",{className:(0,i.default)("hero","shadow--lw",o)},l.createElement("div",{className:"container"},l.createElement("p",{className:"hero__subtitle"},"Pentacode"),l.createElement("h4",null,"Klartext"),l.createElement("div",{className:d},l.createElement("textarea",{onFocus:()=>u("text"),placeholder:"Klartext eingeben",className:(0,i.default)(m),value:e,onChange:e=>{const n=Math.max(e.target.selectionStart,e.target.selectionEnd);t(e.target.value.toUpperCase()),setTimeout((()=>e.target.setSelectionRange(n,n)),0)},rows:5}),"text"===c&&l.createElement("div",{className:p})),l.createElement("h4",null,"Pentacode"),l.createElement("div",{className:d},l.createElement("textarea",{onFocus:()=>u("penta"),placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,i.default)(m),value:n,onChange:e=>s(e.target.value.replace(/[^01\s]/g,"")),rows:5}),"penta"===c&&l.createElement("div",{className:p}))))})),C=(0,s.Pi)((()=>{const[e,t]=l.useState("00000 00000 00000 00000 00000"),[n,s]=l.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),[d,p]=l.useState("editor"),N=(0,a.oR)("viewStore");return l.useEffect((()=>{t(N.pentaPixel.penta||"00000 00000 00000 00000 00000")}),[]),l.useEffect((()=>(0,r.aD)((()=>{N.pentaPixel={penta:e}}))),[e]),l.useEffect((()=>{"cell"!==d?(p("editor"),s(E(e,!1).map((e=>e.split("").map((e=>Number.parseInt(e,2))))))):p("")}),[e]),l.useEffect((()=>{"editor"!==d?(p("cell"),t(n.map((e=>e.join(""))).join(" "))):p("")}),[n]),l.createElement("div",{className:(0,i.default)("hero","shadow--lw",o)},l.createElement("div",{className:"container"},l.createElement("p",{className:"hero__subtitle"},"Pixel-Editor"),l.createElement("div",{className:u},l.createElement("div",{className:(0,i.default)(h)},l.createElement(c.Z,{options:{backgroundColor:"white",canvasWidth:150,canvasHeight:30*n.length}},l.createElement(l.Fragment,null,n.map(((e,t)=>l.createElement("div",{className:(0,i.default)(g),key:t},e.map(((e,a)=>l.createElement("span",{className:(0,i.default)(k,0===e?b:v),key:a,onClick:()=>{const e=(e=>{const t=[];return e.forEach((e=>{const n=[];t.push(n),e.forEach((e=>{n.push(e)}))})),t})(n);e[t][a]=1-e[t][a],s(e)}})))))))),l.createElement("div",{className:f},l.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>s([...n,[0,0,0,0,0]])},"+"),l.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>s([...n.slice(0,-1)])},"-"))),l.createElement("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,i.default)(m),value:e,onChange:e=>{const n=Math.max(e.target.selectionStart,e.target.selectionEnd);t(e.target.value.replace(/[^01\s]/g,"")),setTimeout((()=>e.target.setSelectionRange(n,n)),0)},rows:n.length}))))}))},63437:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(51436),i=n(92814),r=n(86010),s=n(14842),l=n(67294);const c={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},o={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},m=e=>{let{children:t,options:n}=e;const[a,m]=l.useState(void 0),[d,p]=l.useState("none"),u=l.useRef(null);return l.useEffect((()=>{if(["none","spin","ready"].includes(d))return;const e=setTimeout((()=>p("copied"===d?"ready":"none")),2e3);return()=>clearTimeout(e)}),[d]),l.useEffect((()=>{"none"!==d&&p("none")}),[t]),l.createElement(l.Fragment,null,l.createElement("button",{className:(0,r.default)("button","button--outline","button--sm",o[d]),disabled:"spin"===d,onClick:()=>{if(null!==u.current){if("none"===d)return p("spin"),(0,s.SE)(u.current,n).then((e=>{m(e),p("ready")}));if("ready"===d)try{navigator.clipboard.write([new ClipboardItem({"image/png":a})]).then((()=>{p("copied")})).catch((e=>{p("error"),console.warn(e)}))}catch(e){console.warn(e),p("error")}}}},l.createElement(i.G,{icon:c[d]})),l.createElement("div",{ref:u,className:"copy-container"},t))}},39949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(83117),i=(n(67294),n(3905)),r=(n(61537),n(46795));const s={sidebar_custom_props:{id:"106dd131-0dd1-454d-a369-1e44e466737a",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=685616"}}},l="Verkettung von Bl\xf6cken",c={unversionedId:"Kryptologie/Symmetrisch/block-chaining",id:"Kryptologie/Symmetrisch/block-chaining",title:"Verkettung von Bl\xf6cken",description:"Im letzten Kapitel wurde der Geheimtext zur Ver- bzw. Entschl\xfcsselung in Bl\xf6cke aufgeteilt, die exakt so lang sind wie der Schl\xfcssel. Die Bl\xf6cke werden anschliessend einzeln durch die XOR-Funktion mit dem Schl\xfcssel ver- bzw. entschl\xfcsselt.",source:"@site/docs/Kryptologie/03-Symmetrisch/05-block-chaining.md",sourceDirName:"Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/block-chaining",permalink:"/Kryptologie/Symmetrisch/block-chaining",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/03-Symmetrisch/05-block-chaining.md",tags:[],version:"current",lastUpdatedAt:1668526179,formattedLastUpdatedAt:"15. Nov. 2022",sidebarPosition:5,frontMatter:{sidebar_custom_props:{id:"106dd131-0dd1-454d-a369-1e44e466737a",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=685616"}}},sidebar:"sidebar",previous:{title:"Blockchiffre",permalink:"/Kryptologie/Symmetrisch/blockchiffre"},next:{title:"\xdcbungen",permalink:"/Kryptologie/Symmetrisch/uebungen"}},o={},m=[{value:"Der Betriebsmodus \xabElectronic Code Book\xbb (ECB)",id:"der-betriebsmodus-electronic-code-book-ecb",level:2},{value:"Tool",id:"tool",level:3},{value:"Der Betriebsmodus \xabCipher Block Chaining\xbb (CBC)",id:"der-betriebsmodus-cipher-block-chaining-cbc",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=d("Comment"),u=d("Figure"),h=d("SourceRef"),g=d("Answer"),k=d("Hint"),b={toc:m};function v(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"verkettung-von-bl\xf6cken"},"Verkettung von Bl\xf6cken"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Im letzten Kapitel wurde der Geheimtext zur Ver- bzw. Entschl\xfcsselung in Bl\xf6cke aufgeteilt, die exakt so lang sind wie der Schl\xfcssel. Die Bl\xf6cke werden anschliessend einzeln durch die XOR-Funktion mit dem Schl\xfcssel ver- bzw. entschl\xfcsselt."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("admonition",{title:"Allgemeine Blockchiffre",type:"info"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Prinzipiell kann anstelle der XOR-Funktion jede beliebige mathematische Funktion (resp. Verkettung von Funktionen) zur Verschl\xfcsselung verwendet werden (in den unten aufgef\xfchrten Grafiken daher mit dem allgemeinen Begriff ",(0,i.kt)("em",{parentName:"p"},"block cipher encryption")," bezeichnet). Wir beschr\xe4nken uns hier allerdings auf die einfache und gut verst\xe4ndliche XOR-Verschl\xfcsselung."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"der-betriebsmodus-electronic-code-book-ecb"},"Der Betriebsmodus \xabElectronic Code Book\xbb (ECB)"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Falls jeder Block mit dem immer gleichen Schl\xfcssel verschl\xfcsselt wird, spricht man vom \xabElectronic Code Book\xbb (",(0,i.kt)("strong",{parentName:"p"},"ECB"),") Betriebsmodus. Schematisch dargestellt sieht dieser wie folgt aus:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(6372).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(h,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:ECB_encryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In der Abbildung wird deutlich, dass ECB kein eigenes Verschl\xfcsselungsverfahren ist, sondern nur ein ",(0,i.kt)("strong",{parentName:"p"},"Modus")," ist. Er definiert, wie die einzelnen Bl\xf6cke verwendet werden. Die konkrete Verschl\xfcsselungsfunktion ist in dieser Darstellung nicht genauer angegeben \u2013 wir verwenden der Einfachheit halber hier die XOR-Funktion."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Entschl\xfcsselung funktioniert analog: Der Geheimtext wird wiederum in Bl\xf6cke aufgeteilt, welche separat mit dem Schl\xfcssel entschl\xfcsselt werden. Die dabei entstandenen Klartext-Bl\xf6cke ergeben aneinander gereiht den gesamten Klartext."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(38213).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(h,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:ECB_decryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(p,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"tool"},"Tool"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"XORBlockCipher"}),(0,i.kt)("admonition",{title:"Aufgabe ECB-Modus",type:"aufgabe"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den Text ",(0,i.kt)("inlineCode",{parentName:"p"},"EINE SEHR KLEINE SENSATION")," mit dem Schl\xfcssel ",(0,i.kt)("inlineCode",{parentName:"p"},"ZUSE"),".  "),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)(g,{type:"string",webKey:"52638af8-d4af-4f19-ab55-8de24a8bac94",solution:"@-. ZFVMHUXI@-. ZFVKITGLU,",sanitizer:e=>e.trim().toUpperCase(),width:"400px",mdxType:"Answer"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Schauen Sie sich den Klartext und den Geheimtext genau an. Gibt es Schwachstellen im ECB-Modus? Was ist verd\xe4chtig?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))),(0,i.kt)(g,{type:"text",webKey:"11762cec-7a10-48f4-ab40-648addaca855",mdxType:"Answer"}),(0,i.kt)(k,{mdxType:"Hint"},"\xdcberlegen Sie sich, was passiert, wenn zwei Bl\xf6cke identisch sind (z.B. weil eine bestimmte Passage des Textes erneut vorkommt). Welche Auswirkung hat dies auf den Geheimtext?")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"der-betriebsmodus-cipher-block-chaining-cbc"},"Der Betriebsmodus \xabCipher Block Chaining\xbb (CBC)"),(0,i.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Im CBC-Modus werden die Bl\xf6cke nicht mehr getrennt voneinander verarbeitet. Wie in der folgenden Abbildung ersichtlich ist, dient jeder Geheimtext-Block (ausser der letzte) im nachfolgenden Schritt zus\xe4tzlich als Input. So werden gleiche Klartext-Bl\xf6cke trotz identischem Schl\xfcssel zu unterschiedlichen Geheimtextbl\xf6cken verschl\xfcsselt."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das Plus-Zeichen ich Kreis steht hier ebenfalls f\xfcr die XOR-Operation. Diese ist gegeben, w\xe4hrend die Verschl\xfcsselung im grossen Rechteck mit der Bezeichnung ",(0,i.kt)("em",{parentName:"p"},"block cipher encryption")," frei gew\xe4hlt werden kann (also bspw. auch ein aktuell sicheres Verfahren). Es wird also in unseren Beispielen sowohl f\xfcr die Verrechnung des Klartextblocks mit dem vorherigen Geheimtextblock wie auch f\xfcr eigentliche Verschl\xfcsselung die XOR-Operation verwendet."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Da bei der Verarbeitung des ersten Blocks noch kein Geheimtext-Block zur Verf\xfcgung steht, wird ein sogenannter \xabInitialisierungsvektor\xbb (",(0,i.kt)("strong",{parentName:"p"},"IV"),") verwendet."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(83549).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(h,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_encryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(p,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xc4ndert man 1 Bit im IV, f\xfchrt dies zu \xc4nderungen im gesamten Geheimtext. \xc4ndert man 1 Bit im Klartext, so \xe4ndern sich auch s\xe4mtliche darauffolgenden Bl\xf6cke im Geheimtext."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein Nachteil des CBC-Modus ist allerdings, dass die ",(0,i.kt)("strong",{parentName:"p"},"Verschl\xfcsselung")," der verschiedenen Bl\xf6cke nicht gleichzeitig (also parallel) berechnet werden k\xf6nnen, da das Resultat des vorherigen Blocks f\xfcr die Verschl\xfcsselung des aktuellen Blocks ben\xf6tigt wird. D.h. ein bestimmter Klartext-Block kann erst verschl\xfcsselt werden, wenn s\xe4mtliche vorherigen Bl\xf6cke bereits verschl\xfcsselt sind."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Bei der ",(0,i.kt)("strong",{parentName:"p"},"Entschl\xfcsselung")," sieht es anders aus. Da sofort s\xe4mtliche Geheimtextbl\xf6cke vorliegen, kann die Entschl\xfcsselung problemlos parallelisiert werden, wie Sie in der folgenden Abbildung nachvollziehen k\xf6nnen:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(89318).Z,width:"601",height:"242"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(h,{parentName:"figcaption",bib:{author:"WhiteTimberwolf",source:"https://de.wikipedia.org/wiki/Datei:CBC_decryption.svg",licence:"Public Domain",licence_url:"https://de.wikipedia.org/wiki/Gemeinfreiheit",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(p,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,i.kt)("admonition",{title:"Bemerkenswert",type:"info"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Auf den ersten Blick erstaunlich ist die Tatsache, dass die Entschl\xfcsselung mit falschem IV nur dazu f\xfchrt, dass der erste Klartext-Block unleserlich ist, w\xe4hrend die restlichen Bl\xf6cke korrekt entschl\xfcsselt werden."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,i.kt)("admonition",{title:"Aufgabe CBC-Modus",type:"aufgabe"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie nochmals denselben Text, diesmal allerdings im CBC-Modus:",(0,i.kt)("br",{parentName:"p"}),"\n","Klartext"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})))),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("dl",{parentName:"div"},(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dd"},"EINE SEHR KLEINE SENSATION"),"  "),(0,i.kt)("dt",{parentName:"dl"},"Schl\xfcssel\n"),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dd"},"ZUSE"))),(0,i.kt)(p,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,i.kt)("ol",{parentName:"admonition",start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Achten Sie wiederum auf die Bl\xf6cke, die im Klartext \xfcbereinstimmen. Was passiert jetzt?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"W\xe4hlen Sie verschiedene Initialisierungsvektoren. Wie unterscheiden sich die Resultate?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})))),(0,i.kt)(g,{type:"text",webKey:"d98093d9-0718-4b04-9ac3-f2ea9617153b",monospace:!0,mdxType:"Answer"})),(0,i.kt)("admonition",{title:"Aufgabe Initialisierungsvektor",type:"aufgabe"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich zusammen mit Ihrer Pultnachbar:in, mit welcher einfachen Massnahme man darauf verzichten k\xf6nnte, neben dem Schl\xfcssel auch den Initialisierungsvektor mit der Kommunikationspartner:in abzusprechen."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,i.kt)(g,{type:"text",webKey:"f33e61bc-140f-4f48-a027-abccae18ec05",mdxType:"Answer"})),(0,i.kt)("admonition",{title:"Aufgabe Angriff auf die XOR-Blockchiffre",type:"aufgabe"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Setzen Sie sich in Dreiergruppen zusammen und diskutieren Sie folgende Fragen:"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Welche Faktoren beeinflussen die Sicherheit unserer XOR-Blockchiffre?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Stellen Sie zu jedem Faktor eine Aussage auf, die aufzeigt, wie eine m\xf6glichst hohe Sicherheit erreicht werden kann."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wie sicher ist die Verwendung von XOR (\xabblock cipher encryption/decryption\xbb) im Vergleich zu Blockchiffren-Verfahren (ECB)?"),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})))),(0,i.kt)(g,{type:"text",webKey:"941b53f7-db87-43d1-99e9-a91012309cf1",mdxType:"Answer"})),(0,i.kt)("admonition",{title:"XOR-Blockchiffre",type:"info"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Selbstverst\xe4ndlich ist XOR als Verschl\xfcsselungsfunktion aus kryptologischer Sicht nicht ideal \u2013 daf\xfcr aber f\xfcr uns gut verst\xe4ndlich, \xfcberschaubar und einfach anzuwenden."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In der Realit\xe4t ist es besonders wichtig, dass die Verschl\xfcsselungsfunktion s\xe4mtliche Bits des aktuellen Blocks stark \xabvermischt\xbb. Damit ist gemeint, dass eine winzige \xc4nderung an einer bestimmten Stelle im Klartextblock nicht nur zu einer kleinen \xc4nderung an derselben Stelle im Geheimtextblock f\xfchrt (wie dies bei XOR wegen der bitweisen Verarbeitung der Fall), sondern dass durch die kleine \xc4nderung viele Bits \xfcberall im Block ver\xe4ndert werden."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Aus diesem Grund arbeiten aktuelle Verschl\xfcsselungsfunktionen von Blockchiffren in ",(0,i.kt)("strong",{parentName:"p"},"mehreren Runden"),"."),(0,i.kt)(p,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"}))))}v.isMDXComponent=!0},38134:(e,t,n)=>{n.d(t,{Z:()=>a});const a={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},89318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CBC_decryption-e5affac8b24b593a703baa57e51c9bcc.svg"},83549:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CBC_encryption-db55ceaa296438e01ffdad954f44699c.svg"},38213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ECB_decryption-38cc13f65a8d38849913c5e5de708bfe.svg"},6372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ECB_encryption-9f6dd0853639b63daa894d220317e0ba.svg"}}]);