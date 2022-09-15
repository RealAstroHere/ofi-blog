"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[77034],{30592:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(67294);const m={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var r=t(86010);const s=e=>n.createElement("div",{className:m.step},e.code),p=e=>n.createElement("div",{className:(0,r.default)(m.call,m.step,m.bordered)},e.code),l=e=>n.createElement("div",{className:(0,r.default)(m.step,m.statement)},e.code),i=e=>n.createElement("div",{className:(0,r.default)(m.repeat,m.step,m.indent)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block}))),d=e=>n.createElement("div",{className:(0,r.default)(m.def,m.step,m.indent)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block}))),o=e=>n.createElement("div",{className:(0,r.default)(m.input,m.step)},e.code),c=e=>n.createElement("div",{className:(0,r.default)(m.if,m.step,m.indent)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block}))),N=e=>n.createElement("div",{className:(0,r.default)(m.else,m.step)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block}))),k=e=>n.createElement("div",{className:m.strukto},e.program.map(((e,a)=>{switch(e.type){case"call":return n.createElement(p,{key:a,code:e.code});case"def":return n.createElement(d,{key:a,code:e.code,block:e.block});case"repeat":return n.createElement(i,{key:a,code:e.code,block:e.block});case"step":return n.createElement(s,{key:a,code:e.code});case"statement":return n.createElement(l,{key:a,code:e.code});case"input":return n.createElement(o,{key:a,code:e.code});case"if":return n.createElement(c,{key:a,code:e.code,block:e.block});case"elif":case"else":return n.createElement(N,{key:a,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),h=k},81872:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(83117),m=(t(67294),t(3905)),r=(t(61839),t(30592));const s={sidebar_custom_props:{id:"25e588d9-33ef-44fa-b084-e7126849956c"}},p="Sprachelemente",l={unversionedId:"EF-Python/Sprachelemente",id:"EF-Python/Sprachelemente",title:"Sprachelemente",description:"Import-Befehl",source:"@site/docs/EF-Python/01-Sprachelemente.md",sourceDirName:"EF-Python",slug:"/EF-Python/Sprachelemente",permalink:"/EF-Python/Sprachelemente",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Python/01-Sprachelemente.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:1,frontMatter:{sidebar_custom_props:{id:"25e588d9-33ef-44fa-b084-e7126849956c"}},sidebar:"sidebar",previous:{title:"Programmiersprachen",permalink:"/EF-Python/Programmiersprachen/"},next:{title:"Infrastruktur",permalink:"/EF-Python/Infrastruktur/"}},i={},d=[{value:"Import-Befehl",id:"import-befehl",level:2},{value:"Modulname importieren",id:"modulname-importieren",level:3},{value:"Unterprogramm aufrufen",id:"unterprogramm-aufrufen",level:2},{value:"Wiederholungen: <code>for</code>-Schleife",id:"wiederholungen-for-schleife",level:2},{value:"Grundrechenoperationen",id:"grundrechenoperationen",level:2},{value:"Beispiele",id:"beispiele",level:4}],o=(c="Comment",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",e)});var c;const N={toc:d};function k(e){let{components:a,...t}=e;return(0,m.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h1",{parentName:"div",id:"sprachelemente"},"Sprachelemente"),(0,m.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"import-befehl"},"Import-Befehl"),(0,m.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Um vordefinierte Python-Befehle aus einer Bibliothek (ein sog. Python Modul) zu verwenden, m\xfcssen diese importiert werden. Dies geschieht mit dem Import-Befehl:"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n")),(0,m.kt)("blockquote",null,(0,m.kt)("div",{parentName:"blockquote",className:"commentable"},(0,m.kt)("p",{parentName:"div"},"In software, a wildcard character is a kind of placeholder represented by a single character, such as an asterisk (","*","), which can be interpreted as a number of literal characters or an empty string. ",(0,m.kt)("sup",{parentName:"p",id:"fnref-1"},(0,m.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Es ist aber auch m\xf6glich, nur einzelne Befehle (Unterprogramme) aus einem Python Modul zu importieren."),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from math import floor, ceil\n\nprint('Zahl:', 13.1)\nprint('Abgerundet:', floor(13.1))\nprint('Aufgerundet:', ceil(13.1)) \n")),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Dies hat mehrere Vorteile:"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("dl",{parentName:"div"},(0,m.kt)("dt",{parentName:"dl"},"Code Lesbarkeit\n"),(0,m.kt)("dd",{parentName:"dl"},"Eine andere Person erh\xe4lt direkt eine \xdcbersicht, welche Befehle von welcher Bibliothek stammen."),(0,m.kt)("dt",{parentName:"dl"},"Verhindern von Namenskonflikten\n"),(0,m.kt)("dd",{parentName:"dl"},"Man verwendet nicht zuf\xe4llig einen Funktionsnamen, der bereits importiert wurde."),(0,m.kt)("dt",{parentName:"dl"},"Vereinfachtes Debuggen\n"),(0,m.kt)("dd",{parentName:"dl"},"Beim Debuggen werden keine zus\xe4tzlichen, nicht verwendeten Variablen und Funktionen angezeigt.")),(0,m.kt)(o,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h3",{parentName:"div",id:"modulname-importieren"},"Modulname importieren"),(0,m.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"In Python ist es ebenfalls m\xf6glich, ein Modulname zu importieren:"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"import math\n\nprint('Zahl:', 13.1)\nprint('Abgerundet:', math.floor(13.1))\nprint('Aufgerundet:', math.ceil(13.1)) \n")),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Um nun die Funktion ",(0,m.kt)("inlineCode",{parentName:"p"},"ceil")," aus dem Modul ",(0,m.kt)("inlineCode",{parentName:"p"},"math")," aufzurufen, muss ",(0,m.kt)("inlineCode",{parentName:"p"},"math.ceil()")," geschrieben werden. Da dies oft zu viel zu schreiben gibt, kann beim Importieren auch ein selbst gew\xe4hlter Name verwendet werden, bspw. ",(0,m.kt)("inlineCode",{parentName:"p"},"m"),":"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"import math as m # das Math-Modul ist nun \xfcber den Namen \"m\" aufrufbar\n\nprint('Zahl:', 13.1)\nprint('Abgerundet:', m.floor(13.1))\nprint('Aufgerundet:', m.ceil(13.1)) \n")),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"unterprogramm-aufrufen"},"Unterprogramm aufrufen"),(0,m.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Alle Funktionen in Python sind nach demselben Schema aufgebaut:"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("div",{parentName:"li",className:"commentable"},(0,m.kt)("p",{parentName:"div"},"einen Befehlsnamen"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("div",{parentName:"li",className:"commentable"},(0,m.kt)("p",{parentName:"div"},"runde Klammern"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("div",{parentName:"li",className:"commentable"},(0,m.kt)("p",{parentName:"div"},(0,m.kt)("em",{parentName:"p"},"optional")," in den runden Klammern eine Auflistung","*"," von Parametern, die auch leer sein darf."),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\nforward(30)\npenup()\ngoto(20, 30)\npendwon()\nforward(30)\n")),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"wiederholungen-for-schleife"},"Wiederholungen: ",(0,m.kt)("inlineCode",{parentName:"h2"},"for"),"-Schleife"),(0,m.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Mit einer Schleife k\xf6nnen Befehle eine bestimmte Anzahl Mal wiederholt werden."),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,m.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nfor i in range(4):\n    forward(100)\n    left(90)\n"))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px",alignSelf:"end",flexGrow:"0.3"},className:"item"},(0,m.kt)(r.Z,{program:[{type:"repeat",code:(0,m.kt)("span",null,(0,m.kt)("u",null,"4")," mal wiederholen:"),block:[{type:"step",code:(0,m.kt)("span",null,(0,m.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"step",code:(0,m.kt)("span",null,(0,m.kt)("u",null,"90"),"\xb0 nach links")}]}],mdxType:"Strukto"}))),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"grundrechenoperationen"},"Grundrechenoperationen"),(0,m.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Die Grundrechenoperationen werden in Python wie folgt geschrieben:"),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,m.kt)("div",{className:"slim-table"},(0,m.kt)("div",{className:"commentable"},(0,m.kt)("table",{parentName:"div"},(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,m.kt)("th",{parentName:"tr",align:"left"},"mathematisch"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Python"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"Addition"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a + b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"a + b"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"Subtraktion"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a - b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"a - b"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"Multiplikation"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\cdot b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.44445em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"a * b"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"Division"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"\xf7"),(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \xf7 b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xf7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"a / b"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"Potenz"),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"a"),(0,m.kt)("mi",{parentName:"msup"},"b"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a^b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.849108em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.849108em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"))))))))))))),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"a ** b"))))),(0,m.kt)(o,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h4",{parentName:"div",id:"beispiele"},"Beispiele"),(0,m.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,m.kt)("div",{style:{},className:"flex flex-flex"},(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('2 + 13 =', 2 + 13) \n"))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('17 - 9 =', 7 - 9) \n"))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('312 \u22c5 7 =', 312 * 7) \n"))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('231 \xf7 3 =', 231 / 3) \n"))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,m.kt)("pre",{parentName:"div"},(0,m.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('2^8 =', 2 ** 8) \n"))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"})),(0,m.kt)("div",{className:"footnotes"},(0,m.kt)("hr",{parentName:"div"}),(0,m.kt)("ol",{parentName:"div"},(0,m.kt)("li",{parentName:"ol",id:"fn-1"},(0,m.kt)("div",{parentName:"li",className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Quelle: ",(0,m.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wildcard_character"},"Wikipedia")),(0,m.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,m.kt)("p",{parentName:"li"},(0,m.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}k.isMDXComponent=!0}}]);