"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[25489],{30592:function(e,a,t){t.d(a,{Z:function(){return h}});var n=t(67294),m={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"},r=t(86010),s=function(e){return n.createElement("div",{className:m.step},e.code)},l=function(e){return n.createElement("div",{className:(0,r.default)(m.call,m.step,m.bordered)},e.code)},p=function(e){return n.createElement("div",{className:(0,r.default)(m.step,m.statement)},e.code)},i=function(e){return n.createElement("div",{className:(0,r.default)(m.repeat,m.step,m.indent)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block})))},c=function(e){return n.createElement("div",{className:(0,r.default)(m.def,m.step,m.indent)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block})))},o=function(e){return n.createElement("div",{className:(0,r.default)(m.input,m.step)},e.code)},N=function(e){return n.createElement("div",{className:(0,r.default)(m.if,m.step,m.indent)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block})))},d=function(e){return n.createElement("div",{className:(0,r.default)(m.else,m.step)},n.createElement("div",{className:m.header},e.code),n.createElement("div",{className:m.body},e.block&&n.createElement(k,{program:e.block})))},k=function(e){return n.createElement("div",{className:m.strukto},e.program.map((function(e,a){switch(e.type){case"call":return n.createElement(l,{key:a,code:e.code});case"def":return n.createElement(c,{key:a,code:e.code,block:e.block});case"repeat":return n.createElement(i,{key:a,code:e.code,block:e.block});case"step":return n.createElement(s,{key:a,code:e.code});case"statement":return n.createElement(p,{key:a,code:e.code});case"input":return n.createElement(o,{key:a,code:e.code});case"if":return n.createElement(N,{key:a,code:e.code,block:e.block});case"elif":case"else":return n.createElement(d,{key:a,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},h=k},9092:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},assets:function(){return N},toc:function(){return d},default:function(){return h}});var n=t(83117),m=t(80102),r=(t(67294),t(3905)),s=t(30592),l=t(45027),p=["components"],i={title:"Sprachelemente"},c="Sprachelemente",o={unversionedId:"Programmieren-1/Python/Sprachelemente",id:"Programmieren-1/Python/Sprachelemente",title:"Sprachelemente",description:"Import-Befehl",source:"@site/docs/Programmieren-1/03-Python/01-Sprachelemente.md",sourceDirName:"Programmieren-1/03-Python",slug:"/Programmieren-1/Python/Sprachelemente",permalink:"/Programmieren-1/Python/Sprachelemente",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/03-Python/01-Sprachelemente.md",tags:[],version:"current",lastUpdatedAt:1638020748,formattedLastUpdatedAt:"11/27/2021",sidebarPosition:1,frontMatter:{title:"Sprachelemente"},sidebar:"sidebar",previous:{title:"Python",permalink:"/category/python"},next:{title:"Schl\xfcsselw\xf6rter",permalink:"/Programmieren-1/Python/keywords"}},N={},d=[{value:"Import-Befehl",id:"import-befehl",level:2},{value:"Unterprogramm aufrufen",id:"unterprogramm-aufrufen",level:2},{value:"Wiederholungen: <code>for</code>-Schleife",id:"wiederholungen-for-schleife",level:2},{value:"Grundrechenoperationen",id:"grundrechenoperationen",level:2},{value:"Beispiele",id:"beispiele",level:4}],k={toc:d};function h(e){var a=e.components,t=(0,m.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sprachelemente"},"Sprachelemente"),(0,r.kt)("h2",{id:"import-befehl"},"Import-Befehl"),(0,r.kt)("p",null,"Um vordefinierte Python-Befehle aus einer Bibliothek (ein sog. Python Modul) zu verwenden, m\xfcssen diese importiert werden. Dies geschieht mit dem Import-Befehl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u2b50\ufe0f Einzelne Befehle importieren"),"Es ist auch m\xf6glich, nur einzelne Befehle (Unterprogramme) aus einer Bibliothek zu importieren.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from math import floor, ceil\n\nprint('Zahl:', 13.1)\nprint('Abgerundet:', floor(13.1))\nprint('Aufgerundet:', ceil(13.1)) \n")),(0,r.kt)("p",null,"Dies hat den Vorteil, dass eine andere Betrachter:in eine bessere \xdcbersicht erh\xe4lt, von wo welcher Befehl importiert wurde. Bei uns ist dies allerdings vernachl\xe4ssigbar.")),(0,r.kt)("h2",{id:"unterprogramm-aufrufen"},"Unterprogramm aufrufen"),(0,r.kt)("p",null,"Alle Befehle (=Unterprogramme) in Python sind nach demselben Schema aufgebaut:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"einen Befehlsnamen"),(0,r.kt)("li",{parentName:"ul"},"runde Klammern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"optional")," in den runden Klammern eine Auflistung","*"," von Parametern, die auch leer sein darf.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\nforward(30)\npenup()\ngoto(20, 30)\npendwon()\nforward(30)\n")),(0,r.kt)("h2",{id:"wiederholungen-for-schleife"},"Wiederholungen: ",(0,r.kt)("inlineCode",{parentName:"h2"},"for"),"-Schleife"),(0,r.kt)("p",null,"Mit einer Schleife k\xf6nnen Befehle eine bestimmte Anzahl Mal wiederholt werden."),(0,r.kt)("div",{style:{gap:"50px"},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nfor i in range(4):\n    forward(100)\n    left(90)\n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px",alignSelf:"end",flexGrow:"0.3"},className:"item"},(0,r.kt)(s.Z,{program:[{type:"repeat",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"4")," mal wiederholen:"),block:[{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"100")," Schritte vorw\xe4rts")},{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"90"),"\xb0 nach links")}]}],mdxType:"Strukto"}))),(0,r.kt)("h2",{id:"grundrechenoperationen"},"Grundrechenoperationen"),(0,r.kt)("p",null,"Die Grundrechenoperationen werden in Python wie folgt geschrieben:"),(0,r.kt)(l.ZP,{mdxType:"PyOperatoren"}),(0,r.kt)("h4",{id:"beispiele"},"Beispiele"),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('2 + 13 =', 2 + 13) \n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('17 - 9 =', 7 - 9) \n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('312 \u22c5 7 =', 312 * 7) \n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('231 \xf7 3 =', 231 / 3) \n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('2^8 =', 2 ** 8) \n"))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"})))}h.isMDXComponent=!0},45027:function(e,a,t){t.d(a,{ZP:function(){return p}});var n=t(83117),m=t(80102),r=(t(67294),t(3905)),s=["components"],l={toc:[]};function p(e){var a=e.components,t=(0,m.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"slim-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,r.kt)("th",{parentName:"tr",align:"left"},"mathematisch"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Python"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Addition"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a + b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a + b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Subtraktion"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a - b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a - b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Multiplikation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \\cdot b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.44445em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a * b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Division"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"\xf7"),(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a \xf7 b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\xf7"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a / b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Potenz"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("span",{parentName:"td",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"a"),(0,r.kt)("mi",{parentName:"msup"},"b"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a^b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.849108em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.849108em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"))))))))))))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a ** b")))))))}p.isMDXComponent=!0}}]);