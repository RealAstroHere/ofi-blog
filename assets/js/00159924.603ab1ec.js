"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82593:(e,t,r)=>{r.d(t,{x:()=>x,Z:()=>S});var n=r(67294);const a={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var l=r(86010),o=r(71217);const i=/--(?<klass>\w+)$/,s=e=>{let t,{value:r}=e,l=r;if(i.test(r)){const e=(e=>{if(i.test(e))return e.match(i).groups.klass})(r);t=a[e],l=""+r.replace(i,"")}return n.createElement("option",{value:r,className:t},l)};var c=r(92814),u=r(51436),d=r(68949),p=r(72389),m=r(21314),h=r(74322);const b=/--(?<klass>\w+)$/,f=e=>a[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],g=(0,o.Pi)((e=>{const t=(0,p.Z)(),[r,o]=n.useState("unchecked"),i=(0,m.oR)("documentStore").find(e.webKey),b=e=>{i.loaded&&(o("unchecked"),i.setData({value:e,type:"string"}))},g=t=>{if(e.checker)return o(e.checker(t)?"correct":"wrong");const r=e.sanitizer?e.sanitizer:e=>e;o(r(t)===r(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,d.U5)((()=>i.loaded),(e=>{e&&g(i.value)}))),[i]),n.useEffect((()=>{i.loaded&&g(i.value)}),[i,t]),t?i.loaded?n.createElement("div",{className:a.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>b(e.target.value),style:{width:e.width},value:i.value,className:f(i.value),disabled:!i.loaded},e.select.map(((e,t)=>n.createElement(s,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>b(e.target.value),value:i.value,disabled:!i.loaded||i.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>g(i.value),className:(0,l.default)(a[r],a.checkButton)},n.createElement(c.G,{icon:(y=r,"correct"===y?u.f8k:"wrong"===y?u.nYk:u.sph)}))):n.createElement(h.Z,null):n.createElement("div",null,"SSR");var y})),y=/--(?<klass>\w+)$/,v=e=>a[(e=>{if(y.test(e))return e.match(y).groups.klass})(e)],k=(0,o.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey),r=function(e,r){void 0===r&&(r=0);const n=[...t.data.value.slice(0,r),e,...t.data.value.slice(r+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:a.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map(((a,l)=>e.select?n.createElement("select",{key:l,onChange:e=>r(e.target.value,l),value:a,className:v(a),disabled:!t.loaded},e.select.map(((e,t)=>n.createElement(s,{value:e,key:t})))):n.createElement("input",{key:l,type:"text",onChange:e=>r(e.target.value,l),value:a,disabled:!t.loaded||t.readonly})))):n.createElement(h.Z,null)}));var w=r(87462),E=r(75552);const P=(0,o.Pi)((e=>{const t=(0,m.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(E.Z,(0,w.Z)({model:t},e))):n.createElement(h.Z,null)}));var C=r(47271);const N=(0,o.Pi)((e=>(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var _=r(97762);const x=e=>e.replace(/\s+/g,"").toUpperCase(),S=(0,o.Pi)((e=>{const t=(0,m.oR)("documentStore"),r=(0,m.oR)("msalStore"),a=t.find(e.webKey),l=(0,p.Z)();return(0,m.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||_.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),l?a?n.createElement("div",{"data--web-key":e.webKey},n.createElement(C.Z,null),r.loggedIn&&n.createElement(N,{webKey:e.webKey}),"text"===e.type&&n.createElement(P,e),"string"===e.type&&n.createElement(g,e),"array"===e.type&&n.createElement(k,e)):n.createElement(h.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294);const a="noLoginAlert_HRfh";var l=r(39960),o=r(71217),i=r(21314);const s=(0,o.Pi)((()=>(0,i.oR)("msalStore").loggedIn?null:n.createElement("div",{className:a},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))))},74322:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(86010);const l="loader_FEpR",o="badge_oWqf";var i=r(71217),s=r(92814),c=r(51436);const u=(0,i.Pi)((()=>n.createElement("div",{className:(0,a.default)(l)},n.createElement(s.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,a.default)("badge",o)},"Laden..."))))},75552:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294);const a="quillEditor_NxYB",l="quillAnswer_J46I",o="monospace_usc_",i="disableToolbar_bRdP";var s=r(86010),c=r(71217),u=r(74322),d=void 0;const p=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],m=e=>{const t=[];if(e.bold||e.italic||e.underline){const r=[];e.bold&&r.push("bold"),e.italic&&r.push("italic"),e.underline&&r.push("underline"),t.push(r)}if(e.h1||e.h2||e.h3){const r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){const r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){const r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){const r=[];e.formula&&r.push("formula"),e.image&&r.push("image"),t.push(r)}return e.code&&t.push(["code-block"]),t},h=(0,c.Pi)((e=>{const[t,c]=n.useState(!1),[h,b]=n.useState(!1),f=n.useRef(null),{model:g}=e,y=e=>{e.preventDefault()};n.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();const n=[Promise.all([r.e(7762),r.e(8446),r.e(324),r.e(6095),r.e(1167)]).then(r.t.bind(r,44290,23)),r.e(6095).then(r.t.bind(r,76095,23)),r.e(7891).then(r.t.bind(r,17891,23)),Promise.all([r.e(532),r.e(1940)]).then(r.bind(r,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=n.length,n.push(r.e(1008).then(r.bind(r,41008)),Promise.all([r.e(532),r.e(37)]).then(r.bind(r,50037)))),Promise.all(n).then((t=>{d=t[a["react-quill"]].default;const r=t[a.quill].default,n=t[a["react-image-compress"]].default;if("katex"in a){const e=t[a.katex].default;window.katex=e}r.register("modules/imageCompress",n),e()}))}((()=>{t&&(b(!0),f&&f.current&&f.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,f&&f.current&&f.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&h&&g.loaded?n.createElement("div",{onFocus:()=>!t&&c(!0),className:(0,s.default)(a)},n.createElement(d,{ref:f,theme:"snow",readOnly:e.readonly||g.readonly,className:(0,s.default)(l,e.monospace&&o,t?void 0:i),value:g.text||"",onChange:(t,r,n,a)=>{var l,o;l=t,void 0===o&&(o=0),!e.readonly&&g.canUpdate&&h&&g.setText(l)},modules:{toolbar:e.toolbar?m(e.toolbar):[...p,...m(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(u.Z,null)}))},13340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var n=r(87462),a=r(67294),l=r(3905),o=r(86010),i=r(96734);const s=/[^ABCDEFGHIKLMNOPQRSTUWXYZ\s]/g,c=["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","E","X","Y","Z"," "],u=()=>{const[e,t]=a.useState(""),[r,n]=a.useState(""),[l,u]=a.useState("text");return a.useEffect((()=>{if("text"!==l||0===e.length)return;const t=e.split("").map((e=>{const t=c.indexOf(e),r=t%5;return""+(Math.floor(t/5)+1)+(r+1)}));n(t.join(" "))}),[e]),a.useEffect((()=>{if("cipher"!==l||0===r.length)return;const e=r.split(" ").map((e=>{const[t,r]=e.split("").map((e=>Number.parseInt(e,10)-1));return c[5*t+r]}));t(e.join(""))}),[r]),a.createElement("div",{className:(0,o.default)("hero","shadow--lw",i.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Polybios-Chiffre"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,o.default)(i.Z.input),value:e,onChange:e=>{const r=Math.max(e.target.selectionStart,e.target.selectionEnd);u("text"),t((e=>e.toUpperCase().replace(/\s+/g," ").replace(/J/g,"I").replace(/V/g,"U").replace(s,""))(e.target.value)),setTimeout((()=>e.target.setSelectionRange(r,r)),0)},rows:5,placeholder:"Klartext"}),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,o.default)(i.Z.input),value:r,onChange:e=>{const t=Math.max(e.target.selectionStart,e.target.selectionEnd);u("cipher"),n(e.target.value.replace(/\s+/g," ").replace(/[^0-9\s]/g,"")),setTimeout((()=>e.target.setSelectionRange(t,t)),0)},rows:5,placeholder:"Polybios Verschl\xfcsselter Geheimtext"})))};r(82593);const d={title:"Polybios-Chiffre"},p="Polybios-Chiffre [^1]",m={unversionedId:"Kryptologie/Antike/Polybios",id:"Kryptologie/Antike/Polybios",title:"Polybios-Chiffre",description:"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt.",source:"@site/docs/Kryptologie/02-Antike/02-Polybios.md",sourceDirName:"Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Polybios",permalink:"/Kryptologie/Antike/Polybios",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/02-Antike/02-Polybios.md",tags:[],version:"current",lastUpdatedAt:1635104316,formattedLastUpdatedAt:"24.10.2021",sidebarPosition:2,frontMatter:{title:"Polybios-Chiffre"},sidebar:"sidebar",previous:{title:"Skytale",permalink:"/Kryptologie/Antike/Skytale"},next:{title:"Caesar-Chiffre",permalink:"/Kryptologie/Antike/Caesar"}},h={},b=[{value:"Polybios ausprobieren",id:"polybios-ausprobieren",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},g=f("Figure"),y=f("SourceRef"),v={toc:b};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"polybios-chiffre-"},"Polybios-Chiffre ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"Die Polybios-Chiffre wurde vom griechischen Geschichtsschreiber Polybios (200 v.Chr. bis 120 v.Chr.) entwickelt."),(0,l.kt)("p",null,"Bei der Polybios-Verschl\xfcsselung wird zun\xe4chst ein Quadrat mit den Buchstaben des Alphabets gef\xfcllt. Die Anordnung der Buchstaben kann grunds\xe4tzlich beliebig gew\xe4hlt werden. Polybios hat das griechische Alphabet mit 24 Buchstaben verwendet. \xdcbertragen auf das lateinische Alphabet sieht dies folgendermassen aus:"),(0,l.kt)(g,{options:{},mdxType:"Figure"},(0,l.kt)("img",{src:r(61833).Z,width:"323",height:"323"}),(0,l.kt)("figcaption",{parentName:"Figure"},(0,l.kt)(y,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/?b=crypto&p=423844",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,l.kt)("p",null,"Die beiden Buchstaben ",(0,l.kt)("inlineCode",{parentName:"p"},"J")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"V")," finden keinen Platz in der Tabelle. ",(0,l.kt)("inlineCode",{parentName:"p"},"J")," wird mit ",(0,l.kt)("inlineCode",{parentName:"p"},"I")," zusammengefasst, ",(0,l.kt)("inlineCode",{parentName:"p"},"V")," mit ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,l.kt)("p",null,"Die Zeilen und Spalten im Quadrat werden durchnummeriert. Nun kann ein Buchstabe verschl\xfcsselt werden, indem seine Zeilen- und Spaltennummer aufgeschrieben wird."),(0,l.kt)("p",null,"So wird der Klartext ",(0,l.kt)("inlineCode",{parentName:"p"},"HALLO")," zum Geheimtext ",(0,l.kt)("inlineCode",{parentName:"p"},"23 11 31 31 34"),"."),(0,l.kt)("h2",{id:"polybios-ausprobieren"},"Polybios ausprobieren"),(0,l.kt)(u,{mdxType:"Polybios"}),(0,l.kt)("hr",null),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=423844"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},96734:(e,t,r)=>{r.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},61833:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/polybios-303eac0b0b74d5e4611a713abde3233c.svg"}}]);