"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[40147],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),k=r,N=c["".concat(l,".").concat(k)]||c[k]||o[k]||i;return t?n.createElement(N,m(m({ref:a},d),{},{components:t})):n.createElement(N,m({ref:a},d))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,m[1]=s;for(var p=2;p<i;p++)m[p]=t[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},81788:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const i=()=>{const[e,a]=n.useState(0);return n.useEffect((()=>{if(e<=0)return;const a=Math.floor(100*Math.random());let t=-1;for(let e=1;e<11;e++){const n=prompt(e+"/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.");if(null===n)break;if(t=Number.parseInt(n,10),Number.isNaN(t)&&(t=-1),t===a){alert("Yay, du hast die Zahl "+a+" in "+e+" Versuchen gefunden!");break}t<a?alert("Die eingegebene Zahl "+t+" ist zu klein"):alert("Die eingegebene Zahl "+t+" ist zu gross")}t!==a&&alert(":( du hast verloren, die gesuchte Zahl war "+a)}),[e]),n.createElement("button",{className:(0,r.default)("button","button--success"),onClick:()=>a(e+1)},"Ratespiel Starten")}},36126:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(67294);const r={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var i=t(86010);const m=e=>n.createElement("div",{className:r.step},e.code),s=e=>n.createElement("div",{className:(0,i.default)(r.call,r.step,r.bordered)},e.code),l=e=>n.createElement("div",{className:(0,i.default)(r.step,r.statement)},e.code),p=e=>n.createElement("div",{className:(0,i.default)(r.repeat,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),d=e=>n.createElement("div",{className:(0,i.default)(r.def,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),o=e=>n.createElement("div",{className:(0,i.default)(r.input,r.step)},e.code),c=e=>n.createElement("div",{className:(0,i.default)(r.if,r.step,r.indent)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),k=e=>n.createElement("div",{className:(0,i.default)(r.else,r.step)},n.createElement("div",{className:r.header},e.code),n.createElement("div",{className:r.body},e.block&&n.createElement(N,{program:e.block}))),N=e=>n.createElement("div",{className:r.strukto},e.program.map(((e,a)=>{switch(e.type){case"call":return n.createElement(s,{key:a,code:e.code});case"def":return n.createElement(d,{key:a,code:e.code,block:e.block});case"repeat":return n.createElement(p,{key:a,code:e.code,block:e.block});case"step":return n.createElement(m,{key:a,code:e.code});case"statement":return n.createElement(l,{key:a,code:e.code});case"input":return n.createElement(o,{key:a,code:e.code});case"if":return n.createElement(c,{key:a,code:e.code,block:e.block});case"elif":case"else":return n.createElement(k,{key:a,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),h=N},70497:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=t(83117),r=(t(67294),t(3905)),i=t(36126),m=t(81788);const s={sidebar_label:"8. Verzweigungen",sidebar_custom_props:{id:"3170b4a4-73fd-4460-9518-9bc9cab7c5a9"}},l="8. Bedingte Ausf\xfchrung \u2442",p={unversionedId:"Programmieren-1/Turtlegrafik/verzweigung",id:"version-26e/Programmieren-1/Turtlegrafik/verzweigung",title:"8. Bedingte Ausf\xfchrung \u2442",description:"Einer oder mehrere Schritte werden nur ausgef\xfchrt, wenn eine bestimmte Bedingung erf\xfcllt ist.",source:"@site/versioned_docs/version-26e/03-Programmieren-1/02-Turtlegrafik/008-verzweigung.md",sourceDirName:"03-Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/verzweigung",permalink:"/26e/Programmieren-1/Turtlegrafik/verzweigung",draft:!1,tags:[],version:"26e",sidebarPosition:8,frontMatter:{sidebar_label:"8. Verzweigungen",sidebar_custom_props:{id:"3170b4a4-73fd-4460-9518-9bc9cab7c5a9"}},sidebar:"version-26e/sidebar",previous:{title:"7. Variablen",permalink:"/26e/Programmieren-1/Turtlegrafik/variablen"},next:{title:"9. \u2b50\ufe0f While",permalink:"/26e/Programmieren-1/Turtlegrafik/while"}},d={},o=[{value:"Vergleichen",id:"vergleichen",level:2},{value:"Ausgabefenster",id:"ausgabefenster",level:2},{value:"Zufallszahlen erraten",id:"zufallszahlen-erraten",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},k=c("Comment"),N=c("Answer"),h=c("Hint"),g=c("Solution"),u={toc:o};function v(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"8-bedingte-ausf\xfchrung-"},"8. Bedingte Ausf\xfchrung \u2442"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Einer oder mehrere Schritte werden nur ausgef\xfchrt, wenn eine bestimmte Bedingung erf\xfcllt ist."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Programmen m\xf6chten wir w\xe4hrend der Ausf\xfchrung des Programms entscheiden k\xf6nnen, ob Befehle ausgef\xfchrt werden oder nicht. Auch m\xf6chten wir entscheiden k\xf6nnen, ob eine Wiederholung abgebrochen werden soll. "),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"vergleichen"},"Vergleichen"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Um zu entscheiden, ob Befehle ausgef\xfchrt werden sollen, wird immer eine eine Frage gestellt, die eindeutig mit "Ja" oder "Nein" beantwortet werden kann. Wird die Frage mit "Ja" beantwortet, so ist diese Aussage ',(0,r.kt)("strong",{parentName:"p"},"Wahr")," und die Bedingung ist ",(0,r.kt)("strong",{parentName:"p"},"erf\xfcllt"),". Andernfalls ist die Aussage ",(0,r.kt)("strong",{parentName:"p"},"Falsch")," und die Bedingung ist ",(0,r.kt)("strong",{parentName:"p"},"nicht erf\xfcllt"),"."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Frage kann als ",(0,r.kt)("strong",{parentName:"p"},"Vergleich"),' geschrieben werden. Beispielsweise wird die Frage "Ist 4 kleiner als 2?" als ',(0,r.kt)("inlineCode",{parentName:"p"},"4 < 2"),' aufgeschrieben. Die offensichtliche Antwort ist "Nein" und entspricht in Python dem Wert ',(0,r.kt)("inlineCode",{parentName:"p"},"False"),'.\nSpannender sind vergleiche, wenn diese mit Variablen durchgef\xfchrt werden, da man nicht schon im Voraus weiss, welcher Wert in einer Variable enthalten ist.\nDie Frage von "Ist x kleiner als 2" (',(0,r.kt)("inlineCode",{parentName:"p"},"x < 2"),") h\xe4ngt also davon ab, welcher Wert ",(0,r.kt)("strong",{parentName:"p"},"zur Zeit")," in der Variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," gespeichert ist."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)(i.Z,{program:[{type:"input",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"alter")," = Wie alt bist du?")},{type:"if",code:(0,r.kt)("span",null,"Ist das ",(0,r.kt)("span",{className:"var"},"alter")," kleiner als 14?"),block:[{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst Velo fahren")},{type:"elif",code:(0,r.kt)("span",null,"Sonst, ist das ",(0,r.kt)("span",{className:"var"},"alter")," kleiner als 16?")},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst T\xf6ffli fahren")},{type:"elif",code:(0,r.kt)("span",null,"Sonst, ist das ",(0,r.kt)("span",{className:"var"},"alter")," kleiner als 18?")},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst Roller fahren")},{type:"else"},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du darfst Auto fahren")}]}],mdxType:"Strukto"})),(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"alter = int(input('Wie alt bist du?'))\n\nif alter < 14:\n    print('Du darfst Velo fahren')\nelif alter < 16:\n    print('Du darfst T\xf6ffli fahren')\nelif alter < 18:\n    print('Du darfst Roller fahren')\nelse:\n    print('Du darfst Auto fahren')\n\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Python k\xf6nnen alle \xfcblichen Fragen als Vergleiche von zwei Werten geschrieben werden."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mathematisch"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Python"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gr\xf6sser"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"<")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lt")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"<")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kleiner"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},">")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\gt")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},">")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},">"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gr\xf6sser"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2264")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\leq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2264")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kleiner"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2265")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\geq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719400000000001em",verticalAlign:"-0.13597em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2265")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},">="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"gleich"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow"},"=")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"==")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=")),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"=="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ungleich"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\neq")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mrel"},(0,r.kt)("span",{parentName:"span",className:"mord vbox"},(0,r.kt)("span",{parentName:"span",className:"thinbox"},(0,r.kt)("span",{parentName:"span",className:"rlap"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,r.kt)("span",{parentName:"span",className:"inner"},(0,r.kt)("span",{parentName:"span",className:"mrel"},"\ue020")),(0,r.kt)("span",{parentName:"span",className:"fix"}))))),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="))))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"!="))))),(0,r.kt)(k,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"achtung"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Achtung"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei der \xdcberpr\xfcfung auf Gleichheit werden zwei Gleichheitszeichen ",(0,r.kt)("inlineCode",{parentName:"p"},"==")," geschrieben."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"ausgabefenster"},"Ausgabefenster"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Python lassen sich Ausgaben nicht nur mit ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," sondern auch mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"alert()")," (aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"browser"),") in einer Ausgabebox anzeigen. ",(0,r.kt)("em",{parentName:"p"},"Die Ausgabe mit ",(0,r.kt)("inlineCode",{parentName:"em"},"alert")," wird hier verwendet, weil die Online-Version von Python die Ausgaben mit ",(0,r.kt)("inlineCode",{parentName:"em"},"print")," erst am Ende des Programms anzeigt wird"),"."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"alert"},(0,r.kt)("inlineCode",{parentName:"h3"},"alert")),(0,r.kt)(k,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"browser")," k\xf6nnen ",(0,r.kt)("strong",{parentName:"p"},"Ausgabeboxen")," erzeugt werden."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from browser import alert\nalert('Hello!')\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"zufallszahlen-erraten"},"Zufallszahlen erraten"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"ratespiel"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Ratespiel"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(N,{type:"state",webKey:"9bdbe552-f197-41dd-8709-b7f034597405",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Probieren Sie das Ratespiel aus:"),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)(m.Z,{mdxType:"Ratespiel"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beschreiben Sie in eigenen Worten, wie das Ratespiel funktioniert."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,r.kt)(N,{type:"text",webKey:"44979bbe-f85a-45ff-badf-76e910710000",mdxType:"Answer"}),(0,r.kt)("ol",{parentName:"div",start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zeichnen Sie mit ihrer Pultnachbar:in ein Struktogramm f\xfcr das Programm."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schreiben Sie gem\xe4ss dem Struktogramm das Ratespiel in Python. "),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})))),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=ratespiel.py id=fd00137d-92d8-4572-ba48-60c20aeca5f0",live_py:!0,title:"ratespiel.py",id:"fd00137d-92d8-4572-ba48-60c20aeca5f0"},"from browser import alert\nfrom random import randint\n\n")),(0,r.kt)(h,{mdxType:"Hint"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn die Zahl gefunden wurde, soll die Spieler:in nicht mehr nach einer Eingabe gefragt werden. Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," kann die Wiederholung abgebrochen werden."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)(h,{title:(0,r.kt)("span",null,(0,r.kt)("code",null,"break")),mdxType:"Hint"},(0,r.kt)("div",{parentName:"div",className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"break"},(0,r.kt)("inlineCode",{parentName:"h3"},"break")),(0,r.kt)(k,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," kann eine Wiederholter Codeblock beendet werden. Die Ausf\xfchrung geht mit der n\xe4chsten Zeile nach dem Codeblock weiter."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Beispiel")),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"for i in range(10):\n    print('Zahl', i)\n    if i == 4:\n        break\nprint('Ende')\n")),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Bemerke"),": Bei ",(0,r.kt)("inlineCode",{parentName:"p"},"i == 4")," wird ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," aufgerufen und das Programm f\xfchrt als n\xe4chstes die Zeile 5 aus."),(0,r.kt)(k,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))))),(0,r.kt)(g,{webKey:"fcf61032-e9fd-460a-a5d2-cf19c5a782e8",mdxType:"Solution"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"struktogramm"},"Struktogramm"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,r.kt)(i.Z,{program:[{type:"step",code:(0,r.kt)("span",null,"Eine zuf\xe4llige ganze Zahl zwischen ",(0,r.kt)("u",null,"0")," und ",(0,r.kt)("u",null,"100")," in ",(0,r.kt)("span",{className:"var"},"zahl")," speichern.")},{type:"repeat",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"10")," mal wiederholen:"),block:[{type:"input",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"geraten")," = Zahl zwischen ",(0,r.kt)("u",null,"0")," und ",(0,r.kt)("u",null,"100"))},{type:"if",code:(0,r.kt)("span",null,"Ist die ",(0,r.kt)("span",{className:"var"},"geraten"),"e Zahl gleich wie die zuf\xe4llig ",(0,r.kt)("span",{className:"var"},"zahl"),"?"),block:[{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Yay, gewonnen!")},{type:"step",code:(0,r.kt)("span",null,"Wiederholungen beenden")},{type:"elif",code:(0,r.kt)("span",null,"Sonst, ist ",(0,r.kt)("span",{className:"var"},"geraten"),"e Zahl gr\xf6sser als die zuf\xe4llige ",(0,r.kt)("span",{className:"var"},"zahl"),"?")},{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Die eingegebene Zahl ist zu gross.")},{type:"else",code:(0,r.kt)("span",null,"Ausgabe: Die eingegebene Zahl ist zu klein.")}]}]},{type:"if",code:(0,r.kt)("span",null,"Ist die ",(0,r.kt)("span",{className:"var"},"geraten"),"e Zahl ungleich der zuf\xe4lligen ",(0,r.kt)("span",{className:"var"},"zahl"),"?"),block:[{type:"step",code:(0,r.kt)("span",null,"Ausgabe: Du hast verloren.")}]}],mdxType:"Strukto"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(k,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from browser import alert\nfrom random import randint \n\nzahl = randint(0, 100)\n\nfor i in range(10):\n    geraten = input(f'{i + 1}/10 Versuchen: Gib eine ganze Zahl zwischen 0 und 100 ein.')\n    geraten = int(geraten)\n    \n    if geraten == zahl:\n        alert(f'Yay, du hast die Zahl {zahl} in {i + 1} Versuchen gefunden!')\n        break\n    elif geraten > zahl:\n        alert(f'Die eingegebene Zahl {geraten} ist zu gross')\n    else:\n        alert(f'Die eingegebene Zahl {geraten} ist zu klein')\n\nif zahl != geraten:\n    alert(f':( du hast verloren, die gesuchte Zahl war {zahl}')\n"))))))}v.isMDXComponent=!0}}]);