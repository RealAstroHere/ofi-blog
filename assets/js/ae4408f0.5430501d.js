"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[79758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=d(a),k=i,g=s["".concat(p,".").concat(k)]||s[k]||c[k]||r;return a?n.createElement(g,m(m({ref:t},o),{},{components:a})):n.createElement(g,m({ref:t},o))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,m=new Array(r);m[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,m[1]=l;for(var d=2;d<r;d++)m[d]=a[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},36126:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(67294);const i={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var r=a(86010);const m=e=>n.createElement("div",{className:i.step},e.code),l=e=>n.createElement("div",{className:(0,r.default)(i.call,i.step,i.bordered)},e.code),p=e=>n.createElement("div",{className:(0,r.default)(i.step,i.statement)},e.code),d=e=>n.createElement("div",{className:(0,r.default)(i.repeat,i.step,i.indent)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),o=e=>n.createElement("div",{className:(0,r.default)(i.def,i.step,i.indent)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),c=e=>n.createElement("div",{className:(0,r.default)(i.input,i.step)},e.code),s=e=>n.createElement("div",{className:(0,r.default)(i.if,i.step,i.indent)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),k=e=>n.createElement("div",{className:(0,r.default)(i.else,i.step)},n.createElement("div",{className:i.header},e.code),n.createElement("div",{className:i.body},e.block&&n.createElement(g,{program:e.block}))),g=e=>n.createElement("div",{className:i.strukto},e.program.map(((e,t)=>{switch(e.type){case"call":return n.createElement(l,{key:t,code:e.code});case"def":return n.createElement(o,{key:t,code:e.code,block:e.block});case"repeat":return n.createElement(d,{key:t,code:e.code,block:e.block});case"step":return n.createElement(m,{key:t,code:e.code});case"statement":return n.createElement(p,{key:t,code:e.code});case"input":return n.createElement(c,{key:t,code:e.code});case"if":return n.createElement(s,{key:t,code:e.code,block:e.block});case"elif":case"else":return n.createElement(k,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),N=g},10584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>T,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=a(83117),i=(a(67294),a(3905)),r=a(36126);const m={sidebar_custom_props:{id:"b4d081fd-943b-42de-a587-a91321b06fa3"}},l="10. Repetitionsfragen",p={unversionedId:"Programmieren-1/Turtlegrafik/repetition/index",id:"version-25h/Programmieren-1/Turtlegrafik/repetition/index",title:"10. Repetitionsfragen",description:"Algorithmus",source:"@site/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/050-repetition/index.md",sourceDirName:"04-Programmieren-1/02-Turtlegrafik/050-repetition",slug:"/Programmieren-1/Turtlegrafik/repetition/",permalink:"/25h/Programmieren-1/Turtlegrafik/repetition/",draft:!1,tags:[],version:"25h",frontMatter:{sidebar_custom_props:{id:"b4d081fd-943b-42de-a587-a91321b06fa3"}},sidebar:"version-25h/sidebar",previous:{title:"\u2b50 Rekursion",permalink:"/25h/Programmieren-1/Turtlegrafik/koch"},next:{title:"Mini-Projekte",permalink:"/25h/Programmieren-1/Turtlegrafik/art"}},d={},o=[{value:"Algorithmus",id:"algorithmus",level:2},{value:"Code Lesen",id:"code-lesen",level:2},{value:"Code Ausf\xfchren",id:"code-ausf\xfchren",level:2},{value:"Struktogramm",id:"struktogramm",level:2},{value:"Programmieren (am PC)",id:"programmieren-am-pc",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},s=c("Comment"),k=c("Answer"),g=c("Solution"),N=c("Figure"),I=c("SourceRef"),y={toc:o};function T(e){let{components:t,...m}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"10-repetitionsfragen"},"10. Repetitionsfragen"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"algorithmus"},"Algorithmus"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Was ist ein Algorithmus?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Welche 5. Strukturelemente enth\xe4lt ein Algorithmus?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Erstellen Sie einen Algorithmus f\xfcr das Zusammenfalten eines T-Shirts."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,i.kt)(k,{type:"text",webKey:"fc3fa312-7e89-421d-96eb-a799f502d1e1",mdxType:"Answer"}),(0,i.kt)(g,{webKey:"2ad42926-ef27-4cec-a3ee-733ad08d02cd",mdxType:"Solution"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein Algorithmus besteht aus einer ",(0,i.kt)("strong",{parentName:"p"},"Folge von Schritten"),", deren korrekte Abarbeitung die gestellte ",(0,i.kt)("strong",{parentName:"p"},"Aufgabe l\xf6st"),". Die Aufgabe muss vom Algorithmus in einer ",(0,i.kt)("strong",{parentName:"p"},"endlichen")," Anzahl von Schritten gel\xf6st werden."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Sequenz, Wiederholung, Bedingte Ausf\xfchrung, Unterprogramm, Parameter"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"T-Shirt zusammenlegen:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Falls Innenseite aussen ist: T-Shirt drehen, so dass Aussenseite aussen ist."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"T-Shirt mit der Vorderseite nach Unten auf einen Tisch legen"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Rechte Seite zu 1/3 einfalten"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Linke Seite zu 1/3 einfalten"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"T-Shirt halbieren"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(N,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Und gem\xe4ss Anleitung fortfahren",src:a(4709).Z,width:"1054",height:"449"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Und gem\xe4ss Anleitung fortfahren",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(I,{parentName:"figcaption",bib:{author:"Peter Siegmund",source:"https://www.kunstdrucke-textildruck.de/t-shirts-perfekt-zusammenlegen-2-methoden/",licence:"Unknown",licence_url:"",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(s,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"code-lesen"},"Code Lesen"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In welchem Code-Teil wird das Viereck mit der Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," gezeichnet."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Welche Seitenl\xe4nge hat das Dreieck mit Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),"?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Bei welchen Koordinaten wird das F\xfcnfeck mit Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," gezeichnet?"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"F\xfcgen Sie ein Quadrat mit der Seitenl\xe4nge ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," bei der Koordinate ",(0,i.kt)("inlineCode",{parentName:"p"},"(20, 10)")," und der Stiftdicke ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," hinzu."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unterstreichen Sie in den Zeilen ",(0,i.kt)("inlineCode",{parentName:"p"},"1-12")," alle ",(0,i.kt)("strong",{parentName:"p"},"Parameter")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Markieren Sie in den Zeilen ",(0,i.kt)("inlineCode",{parentName:"p"},"1-12")," alle ",(0,i.kt)("strong",{parentName:"p"},"Befehlsnamen")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(N,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Turtle Ausgabe",src:a(73291).Z,width:"256",height:"187"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Turtle Ausgabe",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(s,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n\npensize(2)\nfor i in range(3):\n    forward(18)\n    left(120)\nmove(-20, 30)\n\npensize(5)\nfor i in range(4):\n    forward(27)\n    left(90)\n\nmove(30, 10)\nfor i in range(5):\n    forward(13)\n    left(72)\n\nmove(80, 80)\npensize(3)\nfor i in range(4):\n    forward(77)\n    left(90)\n\nmove(-40, -20)\nfor i in range(5):\n    forward(23)\n    left(72)\n\nmove(-80, 80)\npensize(7)\nfor i in range(3):\n    forward(44)\n    left(120)\n")),(0,i.kt)(k,{type:"text",webKey:"9a817631-40e8-4f41-8dc7-2285b9c1e8f1",toolbar:{code:1,color:1,background:1,bold:1,italic:1,underline:1},mdxType:"Answer"}),(0,i.kt)(g,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zeilen ",(0,i.kt)("inlineCode",{parentName:"p"},"15-17")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"44")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"(-40, -20)")),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"move(20, 10)\npensize(3)\nfor i in range(4):\n    forward(20)\n    left(90)\n"))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"code-ausf\xfchren"},"Code Ausf\xfchren"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zeichnen Sie die Ausgabe des folgenden Programms"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\ndef square():\n    for i in range(4):\n        forward(10)\n        right(90)\n\nforward(30)\nleft(90)\nforward(10)\nright(90)\n\nfor i in range(3):\n    forward(10)\n    right(90)\n    forward(10)\n    left(90)\n    forward(10)\n    left(90)\n    forward(10)\n    right(90)\n\nleft(90)\nsquare()\n")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(N,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(46682).Z,width:"453",height:"183"})),(0,i.kt)(s,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,i.kt)(g,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\ndef square():\n    for i in range(4):\n        forward(10)\n        right(90)\n\nforward(30)\nleft(90)\nforward(10)\nright(90)\nfor i in range(3):\n    forward(10)\n    right(90)\n    forward(10)\n    left(90)\n    forward(10)\n    left(90)\n    forward(10)\n    right(90)\nleft(90)\nsquare()\n"))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"struktogramm"},"Struktogramm"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zeichnen Sie f\xfcr folgende Ausgangslage ein Struktogramm:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})),(0,i.kt)("blockquote",null,(0,i.kt)("div",{parentName:"blockquote",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Benutzer:in wird nach ihrer Lieblingszahl gefragt. Die eingegebene Zahl wird verdoppelt und mit 3 addiert. So oft zeichnet man nun 55 Schritte vorw\xe4rts mit einer Drehung um 113\xb0 am Ende."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zusatz:\nAnstatt ",(0,i.kt)("inlineCode",{parentName:"p"},"113\xb0")," soll soviel gedreht werden, dass eine geschlossene Figur entsteht. "),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,i.kt)(g,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)(r.Z,{program:[{type:"input",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"zahl")," = Geben Sie Ihre Lieblingszahl ein")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("span",{className:"var"},"zahl")," mal 2 und plus 3 rechnen")},{type:"repeat",code:(0,i.kt)("span",null,(0,i.kt)("u",null,(0,i.kt)("span",{className:"var"},"zahl"))," mal wiederholen:"),block:[{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"55")," Schritte vorw\xe4rts gehen")},{type:"step",code:(0,i.kt)("span",null,(0,i.kt)("u",null,"113"),"\xb0 nach rechts drehen")}]}],mdxType:"Strukto"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nzahl = input('Geben Sie Ihre Lieblingszahl ein')\nzahl = int(zahl)\nzahl = zahl * 2 + 3\n\nfor i in range(zahl):\n    forward(15)\n    right(113)\n    # right(360 / zahl)\n\n"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"programmieren-am-pc"},"Programmieren (am PC)"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"text-vervielfachen"},"Text vervielfachen"),(0,i.kt)(s,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In Python kann Text verfielf\xe4ltigt werden, indem er mit der gew\xfcnschten Anzahl wiederholungen multipliziert wird:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('Hallo' * 3)\nprint('\ud83c\udf32 ' * 24)\n"))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Schreiben Sie einen Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"dreieck"),", der ein Dreieck in Textform ausgibt. Die Gr\xf6sse des Dreiecks soll als Parameter \xfcbergeben werden k\xf6nnen."),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Beispiele:"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"})),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"dreieck(1)\n")),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"ergibt"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"*\n")))),(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"dreieck(2)\n")),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"ergibt"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"*\n* *\n")))),(0,i.kt)("div",{parentName:"div",style:{},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"dreieck(3)\n")),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"ergibt"),(0,i.kt)(s,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"*\n* *\n* * *\n"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=dreieck.py versioned id=7fa89fa8-b8ae-4939-94de-df8e00ae57d4",live_py:!0,title:"dreieck.py",versioned:!0,id:"7fa89fa8-b8ae-4939-94de-df8e00ae57d4"},"")),(0,i.kt)(g,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"\ndef dreieck(gr\xf6sse):\n    # gr\xf6sse mal wiederholen\n    for i in range(gr\xf6sse):\n        # i beginnt bei 0, deswegen +1 rechnen\n        print('*' * (i + 1))\n\ndreieck(1)\ndreieck(3)\ndreieck(5)\n"))))}T.isMDXComponent=!0},73291:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9iYmE2YWM2MF9hMmMwXzRhYjBfYjZmOF9hNGU1MDdhN2Y0MGVfc3ZnIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIxNTYsODgsMjU2LDE4NyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjE4IiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMjsiPjwvbGluZT4KPGxpbmUgeDE9IjE4IiB5MT0iMCIgeDI9IjkuMDAwMDAwMDAwMDAwMDA0IiB5Mj0iLTE1LjU4ODQ1NzI2ODExOTg5NiIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMjsiPjwvbGluZT4KPGxpbmUgeDE9IjkuMDAwMDAwMDAwMDAwMDA0IiB5MT0iLTE1LjU4ODQ1NzI2ODExOTg5NiIgeDI9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHkyPSItMy41NTI3MTM2Nzg4MDA1MDFlLTE1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAyOyI+PC9saW5lPgo8bGluZSB4MT0iLTMuNTUyNzEzNjc4ODAwNTAxZS0xNSIgeTE9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHgyPSItMjAiIHkyPSItMy41NTI3MTM2Nzg4MDA1MDFlLTE1IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAyOyI+PC9saW5lPgo8bGluZSB4MT0iLTIwIiB5MT0iLTMwIiB4Mj0iNyIgeTI9Ii0yOS45OTk5OTk5OTk5OTk5OTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjciIHkxPSItMjkuOTk5OTk5OTk5OTk5OTkzIiB4Mj0iNy4wMDAwMDAwMDAwMDAwMDgiIHkyPSItNTYuOTk5OTk5OTk5OTk5OTkiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjcuMDAwMDAwMDAwMDAwMDA4IiB5MT0iLTU2Ljk5OTk5OTk5OTk5OTk5IiB4Mj0iLTE5Ljk5OTk5OTk5OTk5OTk5MyIgeTI9Ii01NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iLTE5Ljk5OTk5OTk5OTk5OTk5MyIgeTE9Ii01NyIgeDI9Ii0yMC4wMDAwMDAwMDAwMDAwMDQiIHkyPSItMzAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9Ii0yMC4wMDAwMDAwMDAwMDAwMDQiIHkxPSItMzAiIHgyPSIzMCIgeTI9Ii0zMCIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiPjwvbGluZT4KPGxpbmUgeDE9IjMwIiB5MT0iLTEwIiB4Mj0iNDMiIHkyPSItOS45OTk5OTk5OTk5OTk5OTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjQzIiB5MT0iLTkuOTk5OTk5OTk5OTk5OTkzIiB4Mj0iNDcuMDE3MjIwOTI2ODc0MzIiIHkyPSItMjIuMzYzNzM0NzExODM2OTg3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSI0Ny4wMTcyMjA5MjY4NzQzMiIgeTE9Ii0yMi4zNjM3MzQ3MTE4MzY5ODciIHgyPSIzNi41MDAwMDAwMDAwMDAwMTQiIHkyPSItMzAuMDA0OTQyOTkxNjM5MTQ0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIzNi41MDAwMDAwMDAwMDAwMTQiIHkxPSItMzAuMDA0OTQyOTkxNjM5MTQ0IiB4Mj0iMjUuOTgyNzc5MDczMTI1NjkiIHkyPSItMjIuMzYzNzM0NzExODM3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIyNS45ODI3NzkwNzMxMjU2OSIgeTE9Ii0yMi4zNjM3MzQ3MTE4MzciIHgyPSIzMCIgeTI9Ii0xMC4wMDAwMDAwMDAwMDAwMDIiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjMwIiB5MT0iLTEwLjAwMDAwMDAwMDAwMDAwMiIgeDI9IjgwIiB5Mj0iLTEwLjAwMDAwMDAwMDAwMDAwMiIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiPjwvbGluZT4KPGxpbmUgeDE9IjgwIiB5MT0iLTgwIiB4Mj0iMTU3IiB5Mj0iLTc5Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIxNTciIHkxPSItNzkuOTk5OTk5OTk5OTk5OTQiIHgyPSIxNTYuOTk5OTk5OTk5OTk5OTEiIHkyPSItMTU2Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIxNTYuOTk5OTk5OTk5OTk5OTEiIHkxPSItMTU2Ljk5OTk5OTk5OTk5OTk0IiB4Mj0iNzkuOTk5OTk5OTk5OTk5OTEiIHkyPSItMTU3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSI3OS45OTk5OTk5OTk5OTk5MSIgeTE9Ii0xNTciIHgyPSI3OS45OTk5OTk5OTk5OTk5OSIgeTI9Ii04MCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMzsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iNzkuOTk5OTk5OTk5OTk5OTkiIHkxPSItODAiIHgyPSItNDAiIHkyPSItODAiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDM7Ij48L2xpbmU+CjxsaW5lIHgxPSItNDAiIHkxPSIyMCIgeDI9Ii0xNyIgeTI9IjIwLjAwMDAwMDAwMDAwMDAyIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMTciIHkxPSIyMC4wMDAwMDAwMDAwMDAwMiIgeDI9Ii05Ljg5MjYwOTEyOTM3NjE4NiIgeTI9Ii0xLjg3NDI5OTg3NDc4ODUwMTgiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDM7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9Ii05Ljg5MjYwOTEyOTM3NjE4NiIgeTE9Ii0xLjg3NDI5OTg3NDc4ODUwMTgiIHgyPSItMjguNDk5OTk5OTk5OTk5OTYiIHkyPSItMTUuMzkzMzYwNjc3NTE1NDA1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMjguNDk5OTk5OTk5OTk5OTYiIHkxPSItMTUuMzkzMzYwNjc3NTE1NDA1IiB4Mj0iLTQ3LjEwNzM5MDg3MDYyMzc3IiB5Mj0iLTEuODc0Mjk5ODc0Nzg4NTQyNyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMzsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iLTQ3LjEwNzM5MDg3MDYyMzc3IiB5MT0iLTEuODc0Mjk5ODc0Nzg4NTQyNyIgeDI9Ii00MCIgeTI9IjIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItNDAiIHkxPSIyMCIgeDI9Ii04MCIgeTI9IjIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyI+PC9saW5lPgo8bGluZSB4MT0iLTgwIiB5MT0iLTgwIiB4Mj0iLTM2IiB5Mj0iLTc5Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMzYiIHkxPSItNzkuOTk5OTk5OTk5OTk5OTQiIHgyPSItNTcuOTk5OTk5OTk5OTk5ODYiIHkyPSItMTE4LjEwNTExNzc2NjUxNTMyIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItNTcuOTk5OTk5OTk5OTk5ODYiIHkxPSItMTE4LjEwNTExNzc2NjUxNTMyIiB4Mj0iLTc5Ljk5OTk5OTk5OTk5OTgzIiB5Mj0iLTgwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8cG9seWdvbiBwb2ludHM9IjAsMCAsLTUsLTkgLDAsLTcgLDUsLTkgIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzkuOTk5OTk5OTk5OTk5ODMsLTgwLjApIHJvdGF0ZSgtMjI1MCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+ZnJvbSB0dXJ0bGUgaW1wb3J0ICoKCmRlZiBtb3ZlKHgsIHkpOgogICAgcGVudXAoKQogICAgZ290byh4LCB5KQogICAgcGVuZG93bigpCgpwZW5zaXplKDIpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCgxOCkKICAgIGxlZnQoMTIwKQptb3ZlKC0yMCwgMzApCgpwZW5zaXplKDUpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCgyNykKICAgIGxlZnQoOTApCgptb3ZlKDMwLCAxMCkKZm9yIGkgaW4gcmFuZ2UoNSk6CiAgICBmb3J3YXJkKDEzKQogICAgbGVmdCg3MikKCm1vdmUoODAsIDgwKQpwZW5zaXplKDMpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCg3NykKICAgIGxlZnQoOTApCgptb3ZlKC00MCwgLTIwKQpmb3IgaSBpbiByYW5nZSg1KToKICAgIGZvcndhcmQoMjMpCiAgICBsZWZ0KDcyKQoKbW92ZSgtODAsIDgwKQpwZW5zaXplKDcpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCg0NCkKICAgIGxlZnQoMTIwKSA8L3Jhdz48L21ldGFkYXRhPjwvc3ZnPg=="},46682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/09-coord-07deb3712930d10252b769c94b4e20fe.svg"},4709:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"}}]);