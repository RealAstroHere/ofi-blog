"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5892:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(86010),a=r(67294),i=r(38134);const o=()=>{const[e,t]=a.useState(""),[r,o]=a.useState(""),[l,s]=a.useState(2),[c,p]=a.useState("text"),[m,d]=a.useState(0);return a.useEffect((()=>{if(!l||"text"!==c)return;const t=Array(l).fill("");e.split("").forEach(((e,r)=>{t[r%l]+=e})),o(t.join("\n").trim())}),[e,l]),a.useEffect((()=>{if(!l||"cipher"!==c)return;if(0===r.length)return void(""!==e&&t(""));let n=r.split("\n");n=n.map((e=>e.padEnd(Math.max(...n.map((e=>e.length)))," ")));let a=n.join("").replace(/\t+/g," ");const i=Math.ceil(a.length/l);a=a.padEnd(i*l," ");let o="";for(let e=0;e<i;e++)for(let t=0;t<l;t++)o+=a.charAt(e+t*i);t(o)}),[r,l]),a.createElement("div",{className:(0,n.default)("hero","shadow--lw",i.Z.container)},a.createElement("div",{className:"container"},a.createElement("p",{className:"hero__subtitle"},"Skytale"),a.createElement("h4",null,"Klartext"),a.createElement("textarea",{className:(0,n.default)(i.Z.input),value:e,onChange:e=>{p("text");const r=Math.max(e.target.selectionStart,e.target.selectionEnd);t(e.target.value.replace(/\n/g," ")),setTimeout((()=>e.target.setSelectionRange(r,r)),0)},rows:5,placeholder:"Klartext"}),a.createElement("div",{className:i.Z.stringInputContainer},a.createElement("h4",null,a.createElement("label",{htmlFor:"skytale-key"},"Schl\xfcssel")),a.createElement("input",{id:"skytale-key",type:"number",min:1,max:26,placeholder:"Schl\xfcssel",value:l||"",onChange:e=>{s(Number.parseInt(e.target.value,10))}})),a.createElement("h4",null,"Geheimtext"),a.createElement("textarea",{className:(0,n.default)(i.Z.input),value:r,onChange:e=>{p("cipher"),o(e.target.value)},rows:5,placeholder:"Skytale Verschl\xfcsselter Geheimtext"})))}},10320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(83117),a=(r(67294),r(3905)),i=r(5892);const o={sidebar_custom_props:{id:"11cd1b8e-ea1a-4ff1-9d01-eabde2c13142",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=818731"}}},l="Skytale",s={unversionedId:"Kryptologie/Antike/Skytale",id:"version-25h/Kryptologie/Antike/Skytale",title:"Skytale",description:'Um ca. 500 v. Chr. nutzten die Spartaner eine Skytale (griechisch f\xfcr "Stock" oder "Stab"), um wichtige milit\xe4rische Botschaften zu \xfcbermitteln. Der Absender wickelte dabei einen Streifen aus Pergament oder Leder spiralf\xf6rmig um die Skytale und schrieb die Nachricht l\xe4ngs des Stabes auf das aufgewickelte Band. Auf dem abgewickelten Streifen, der dem Empf\xe4nger \xfcbermittelt wird, steht nun eine scheinbar sinnlose Buchstabenfolge. Der Empf\xe4nger kann die Botschaft mit einer Skytale vom selben Durchmesser aber wieder entziffern.',source:"@site/versioned_docs/version-25h/08-Kryptologie/02-Antike/01-Skytale.md",sourceDirName:"08-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/Skytale",permalink:"/25h/Kryptologie/Antike/Skytale",draft:!1,tags:[],version:"25h",sidebarPosition:1,frontMatter:{sidebar_custom_props:{id:"11cd1b8e-ea1a-4ff1-9d01-eabde2c13142",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=818731"}}},sidebar:"version-25h/sidebar",previous:{title:"Lernziele",permalink:"/25h/Kryptologie/Lernziele"},next:{title:"Polybios-Chiffre",permalink:"/25h/Kryptologie/Antike/Polybios"}},c={},p=[{value:"Transposition",id:"transposition",level:2},{value:"Skytale ausprobieren",id:"skytale-ausprobieren",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("Comment"),u=m("Figure"),f=m("SourceRef"),h={toc:p};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"skytale"},"Skytale"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Um ca. 500 v. Chr. nutzten die Spartaner eine ",(0,a.kt)("strong",{parentName:"p"},"Skytale"),' (griechisch f\xfcr "',(0,a.kt)("em",{parentName:"p"},"Stock"),'" oder "',(0,a.kt)("em",{parentName:"p"},"Stab"),'"), um wichtige milit\xe4rische Botschaften zu \xfcbermitteln. Der Absender wickelte dabei einen Streifen aus Pergament oder Leder spiralf\xf6rmig um die Skytale und schrieb die Nachricht l\xe4ngs des Stabes auf das aufgewickelte Band. Auf dem abgewickelten Streifen, der dem Empf\xe4nger \xfcbermittelt wird, steht nun eine scheinbar sinnlose Buchstabenfolge. Der Empf\xe4nger kann die Botschaft mit einer Skytale vom selben Durchmesser aber wieder entziffern.'),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(u,{parentName:"div",options:{width:"300px"},mdxType:"Figure"},(0,a.kt)("img",{alt:"Nachbildung einer Skytale --width=300px",src:r(94309).Z,width:"640",height:"366"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Nachbildung einer Skytale",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,a.kt)(f,{parentName:"figcaption",bib:{author:"Unbekannt",source:"https://commons.wikimedia.org/wiki/File:Skytale.png",licence:"CC 3.0",licence_url:"Attribution-Share Alike 3.0 Unported",edited:!1},mdxType:"SourceRef"}))),(0,a.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"transposition"},"Transposition"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Die Skytale ist ein Beispiel einer Verschl\xfcsselung durch Transposition. Das heisst, dass die Zeichen des Geheimtextes nicht ersetzt, sondern nur umgestellt (",(0,a.kt)("em",{parentName:"p"},"transponiert"),") werden."),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"skytale-ausprobieren"},"Skytale ausprobieren"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)(i.Z,{mdxType:"Skytale"}))}g.isMDXComponent=!0},38134:(e,t,r)=>{r.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}},94309:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/skytale-1e4ee9dd8e81ee7c5cfd12777f92a033.png"}}]);