"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2949],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||g[k]||i;return a?n.createElement(c,l(l({ref:e},o),{},{components:a})):n.createElement(c,l({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7564:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(86010),r=a(67294),i=a(97566);const l=/[ENIR]/gi,d=/[BCDFGHJKLMOPQUVWXYZ]/gi,p=[{find:/\xe4/g,replace:"ae"},{find:/\xf6/g,replace:"oe"},{find:/\xfc/g,replace:"ue"},{find:/\xc4/g,replace:"Ae"},{find:/\xd6/g,replace:"Oe"},{find:/\xdc/g,replace:"Ue"},{find:/\s+/g,replace:" "},{find:/^\s/g,replace:""},{find:/\s$/g,replace:""}],m=()=>{const[t,e]=r.useState(""),[a,m]=r.useState("frequent"),[o,g]=r.useState("");return r.useEffect((()=>{if(0===t.length)return;const e=(t=>p.reduce(((t,e)=>t.replace(e.find,e.replace)),t))(t);switch(a){case"frequent":g(e.replace(l,""));break;case"rare":g(e.replace(d,""))}}),[t,a]),r.createElement("div",{className:(0,n.default)("hero","shadow--lw",i.Z.container)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Buchstaben Redundanz"),r.createElement("h4",null,"Originaltext"),r.createElement("textarea",{className:(0,n.default)(i.Z.input),value:t,onChange:t=>{e(t.target.value)},rows:5,placeholder:"Originaltext"}),r.createElement("div",{className:(0,n.default)("buttongroup",i.Z.modes)},r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","frequent"===a&&"button--active"),title:"H\xe4ufige: "+l.source.slice(1,-1).split("").join(", "),onClick:()=>m("frequent")},"H\xe4ufige Entfernen"),r.createElement("button",{className:(0,n.default)("button","button--sm","button--primary","button--outline","rare"===a&&"button--active"),onClick:()=>m("rare"),title:"Seltene: "+d.source.slice(1,-1).split("").join(", ")},"Seltene entfernen")),r.createElement("h4",null,"Ausgabe"),r.createElement("p",null,"Ohne: ",("frequent"===a?l:d).source.slice(1,-1).split("").join(", ")),r.createElement("textarea",{className:(0,n.default)(i.Z.input),value:o,onChange:()=>{},rows:5,placeholder:"Ausgabe"})))}},13681:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(83117),r=(a(67294),a(3905)),i=a(7564);const l={title:"2. Informationsgehalt",label:"2. Informationsgehalt"},d="2. Informationsgehalt [^1]",p={unversionedId:"Codierung/Compression/redundancy",id:"version-25h/Codierung/Compression/redundancy",title:"2. Informationsgehalt",description:"Buchstabenh\xe4ufigkeit",source:"@site/versioned_docs/version-25h/05-Codierung/03-Compression/02-redundancy.md",sourceDirName:"05-Codierung/03-Compression",slug:"/Codierung/Compression/redundancy",permalink:"/25h/Codierung/Compression/redundancy",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/03-Compression/02-redundancy.md",tags:[],version:"25h",sidebarPosition:2,frontMatter:{title:"2. Informationsgehalt",label:"2. Informationsgehalt"},sidebar:"version-25h/sidebar",previous:{title:"1. Huffman-Codierung",permalink:"/25h/Codierung/Compression/huffman"},next:{title:"1. Morsecode",permalink:"/25h/Codierung/Anwendungen/morsecode"}},m={},o=[{value:"Buchstabenh\xe4ufigkeit",id:"buchstabenh\xe4ufigkeit",level:2},{value:"Informationsgehalt",id:"informationsgehalt",level:2}],g=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},s=g("Figure"),k=g("Answer"),c={toc:o};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-informationsgehalt-"},"2. Informationsgehalt ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("h2",{id:"buchstabenh\xe4ufigkeit"},"Buchstabenh\xe4ufigkeit"),(0,r.kt)("p",null,"Die Buchstabenh\xe4ufigkeit gibt an, wie oft ein Buchstabe in einem Text vorkommen. Die H\xe4ufigkeit der einzelnen Buchstaben ist je nach Sprache unterschiedlich. Das folgende Diagramm zeigt die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,r.kt)(s,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(2489).Z,width:"901",height:"361"})),(0,r.kt)("h2",{id:"informationsgehalt"},"Informationsgehalt"),(0,r.kt)("p",null,"Wir f\xfchren ein Experiment durch. Aus einem deutschen Text werden etwa 40% der Buchstaben entfernt. Zuerst werden die vier h\xe4ufigsten Buchstaben ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"R")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," entfernt. Danach werden diese Buchstaben sowie ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," beibehalten und die restlichen entfernt. Obschon etwa die gleiche Menge Buchstaben entfernt worden sind, bleibt der Text nach dem Entfernen der h\xe4ufigen Buchstaben verst\xe4ndlicher."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Notizen")),(0,r.kt)(i.Z,{mdxType:"Redundancy"}),(0,r.kt)("p",null,"Offenbar tragen die h\xe4ufigen Buchstaben weniger zum Inhalt des Textes bei. Sie haben einen kleineren ",(0,r.kt)("strong",{parentName:"p"},"Informationsgehalt"),"."),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"take-home-message"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(k,{type:"text",webKey:"18b21da1-1e49-4d1a-a7ea-1c930205abf1",mdxType:"Answer"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u2b50\ufe0f Huffman Codierung f\xfcr die deutsche Sprache"),(0,r.kt)("p",null,"Die durchschnittliche Buchstabenh\xe4ufigkeit in deutschen Texten kann der folgenden Tabelle entnommen werden:"),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"E"),(0,r.kt)("td",{parentName:"tr",align:"left"},"15.99%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.34%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"O"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"W"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.40%"),(0,r.kt)("td",{parentName:"tr",align:null},"J"),(0,r.kt)("td",{parentName:"tr",align:null},"0.27 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"N"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9.59%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"D"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.92%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.75%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.22%"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd6"),(0,r.kt)("td",{parentName:"tr",align:null},"0.24 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"R"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.71%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.11%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"C"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.71%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"P"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.06%"),(0,r.kt)("td",{parentName:"tr",align:null},"\xdf"),(0,r.kt)("td",{parentName:"tr",align:null},"0.15 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"I"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.60%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"U"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.76%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.21%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"V"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.94%"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"0.13 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.43%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"L"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.72%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.80%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.63%"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"0.07 %")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"S"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6.41%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"G"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.02%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"K"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.50%"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.54%"),(0,r.kt)("td",{parentName:"tr",align:null},"Q"),(0,r.kt)("td",{parentName:"tr",align:null},"0.04 %"))))),(0,r.kt)("p",null,"Daraus ergibt sich"),(0,r.kt)(s,{options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",src:a(27062).Z,width:"1003",height:"824"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Codebaum der Huffman-Codierung f\xfcr deutsche Texte",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"(leer)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"O"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0101"),(0,r.kt)("td",{parentName:"tr",align:"right"},"P"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1010111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"111000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Q"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11100110111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"C"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01111"),(0,r.kt)("td",{parentName:"tr",align:"right"},"R"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"D"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"S"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0011")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"E"),(0,r.kt)("td",{parentName:"tr",align:"left"},"110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"T"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"F"),(0,r.kt)("td",{parentName:"tr",align:"left"},"000110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"U"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"G"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"V"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1110010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"H"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"W"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1010100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"I"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11100110110")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"J"),(0,r.kt)("td",{parentName:"tr",align:"left"},"111001100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1110011010")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"K"),(0,r.kt)("td",{parentName:"tr",align:"left"},"000111"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Z"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1010101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"L"),(0,r.kt)("td",{parentName:"tr",align:"left"},"000100"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xc4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10101101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"M"),(0,r.kt)("td",{parentName:"tr",align:"left"},"01110"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xd6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"111001110")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"N"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1011"),(0,r.kt)("td",{parentName:"tr",align:"right"},"\xdc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10101100")))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=195436"},"S. Rothe, T. Jampen, R. Meyer"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"http://practicalcryptography.com/cryptanalysis/letter-frequencies-various-languages/german-letter-frequencies/"},"Practical Cryptography: German Letter Frequencies"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},97566:(t,e,a)=>{a.d(e,{Z:()=>n});const n={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},27062:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/huffman-german-e146d68a9775a0c649a0f99a6e760185.svg"},2489:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/letter-frequency-de-589f8e0aa0703df3d1fd96ead993c13b.svg"}}]);