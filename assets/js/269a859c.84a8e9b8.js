"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[11809],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>N});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},o=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=l(t),N=i,k=c["".concat(p,".").concat(N)]||c[N]||s[N]||r;return t?a.createElement(k,m(m({ref:n},o),{},{components:t})):a.createElement(k,m({ref:n},o))}));function N(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,m=new Array(r);m[0]=c;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,m[1]=d;for(var l=2;l<r;l++)m[l]=t[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},36126:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(67294);const i={strukto:"strukto_ZhOY",statement:"statement_vpj_",step:"step_tKqp",else:"else_NP0r",header:"header_k_sP",indent:"indent_eJWa",body:"body_vf1s",def:"def_yuKL",if:"if_Imq1",input:"input_o3ww",call:"call_Xwfp",bordered:"bordered_Zp7M"};var r=t(86010);const m=e=>a.createElement("div",{className:i.step},e.code),d=e=>a.createElement("div",{className:(0,r.default)(i.call,i.step,i.bordered)},e.code),p=e=>a.createElement("div",{className:(0,r.default)(i.step,i.statement)},e.code),l=e=>a.createElement("div",{className:(0,r.default)(i.repeat,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(k,{program:e.block}))),o=e=>a.createElement("div",{className:(0,r.default)(i.def,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(k,{program:e.block}))),s=e=>a.createElement("div",{className:(0,r.default)(i.input,i.step)},e.code),c=e=>a.createElement("div",{className:(0,r.default)(i.if,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(k,{program:e.block}))),N=e=>a.createElement("div",{className:(0,r.default)(i.else,i.step)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(k,{program:e.block}))),k=e=>a.createElement("div",{className:i.strukto},e.program.map(((e,n)=>{switch(e.type){case"call":return a.createElement(d,{key:n,code:e.code});case"def":return a.createElement(o,{key:n,code:e.code,block:e.block});case"repeat":return a.createElement(l,{key:n,code:e.code,block:e.block});case"step":return a.createElement(m,{key:n,code:e.code});case"statement":return a.createElement(p,{key:n,code:e.code});case"input":return a.createElement(s,{key:n,code:e.code});case"if":return a.createElement(c,{key:n,code:e.code,block:e.block});case"elif":case"else":return a.createElement(N,{key:n,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}}))),v=k},20308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>N,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=t(83117),i=(t(67294),t(3905));t(36126);const r={sidebar_label:"Listen",sidebar_custom_props:{id:"545304e4-4ba4-44d0-ba91-cabe6ae086ad"}},m="Listen",d={unversionedId:"Programmieren-2/Listen/index",id:"Programmieren-2/Listen/index",title:"Listen",description:"Zum Speichern von mehreren Werten unter einem einzigen Namen verwendet man in Python Listen. Man kann sich Listen als Tabellen mit einer Spalte vorstellen. Die Zellen in der Tabelle werden als Elemente bezeichnet und sind durchnummeriert. So kann man einzelne in der Liste gespeichert Werte unterscheiden. Die Nummer eines Elements wird als dessen Index bezeichnet.",source:"@site/docs/Programmieren-2/02-Listen/index.md",sourceDirName:"Programmieren-2/02-Listen",slug:"/Programmieren-2/Listen/",permalink:"/Programmieren-2/Listen/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-2/02-Listen/index.md",tags:[],version:"current",lastUpdatedAt:1675911179,formattedLastUpdatedAt:"9. Feb. 2023",frontMatter:{sidebar_label:"Listen",sidebar_custom_props:{id:"545304e4-4ba4-44d0-ba91-cabe6ae086ad"}},sidebar:"sidebar",previous:{title:"Wiedereinstieg",permalink:"/Programmieren-2/intro/"},next:{title:"Projekt Schneefall",permalink:"/Programmieren-2/snow/"}},p={},l=[{value:"Python Listen: Befehle",id:"python-listen-befehle",level:2},{value:"Listen Untersuchen",id:"listen-untersuchen",level:2},{value:"Elemente abfragen",id:"elemente-abfragen",level:2},{value:"Elemente Ver\xe4ndern",id:"elemente-ver\xe4ndern",level:2},{value:"Elemente Hinzuf\xfcgen/Entfernen",id:"elemente-hinzuf\xfcgenentfernen",level:2}],o=(s="Comment",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var s;const c={toc:l};function N(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"listen"},"Listen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zum Speichern von ",(0,i.kt)("strong",{parentName:"p"},"mehreren Werten")," unter einem ",(0,i.kt)("strong",{parentName:"p"},"einzigen Namen")," verwendet man in Python Listen. Man kann sich ",(0,i.kt)("strong",{parentName:"p",className:"underline"},"Listen")," als Tabellen mit einer Spalte vorstellen. Die Zellen in der Tabelle werden als ",(0,i.kt)("strong",{parentName:"p"},"Elemente")," bezeichnet und sind durchnummeriert. So kann man einzelne in der Liste gespeichert Werte unterscheiden. Die Nummer eines Elements wird als dessen ",(0,i.kt)("strong",{parentName:"p"},"Index")," bezeichnet."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("admonition",{title:"Wichtig",type:"important"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das erste Element in der Liste tr\xe4gt den Index 0."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Der Index des letzten Elementes ist die L\xe4nge der Liste minus 1."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das folgende Bild illustriert dies f\xfcr eine Liste mit 4 Noten. Die ",(0,i.kt)("strong",{parentName:"p"},"L\xe4nge")," der Liste ist ",(0,i.kt)("strong",{parentName:"p"},"4"),", das letzte Element tr\xe4gt den ",(0,i.kt)("strong",{parentName:"p"},"Index 3"),"."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("dl",{parentName:"div"},(0,i.kt)("dt",{parentName:"dl"},"Index\n"),(0,i.kt)("dd",{parentName:"dl"},"\u3000",(0,i.kt)("strong",{parentName:"dd"},"Wert")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dt"},"0")),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("i",{parentName:"dd",className:"mdi-arrow-right-thin mdi "})," ",(0,i.kt)("inlineCode",{parentName:"dd"},"4.5")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dt"},"1")),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("i",{parentName:"dd",className:"mdi-arrow-right-thin mdi "})," ",(0,i.kt)("inlineCode",{parentName:"dd"},"5")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dt"},"2")),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("i",{parentName:"dd",className:"mdi-arrow-right-thin mdi "})," ",(0,i.kt)("inlineCode",{parentName:"dd"},"3.5")),(0,i.kt)("dt",{parentName:"dl"},(0,i.kt)("inlineCode",{parentName:"dt"},"3")),(0,i.kt)("dd",{parentName:"dl"},(0,i.kt)("i",{parentName:"dd",className:"mdi-arrow-right-thin mdi "})," ",(0,i.kt)("inlineCode",{parentName:"dd"},"5.5"))),(0,i.kt)(o,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In Python kann man diese Liste mit eckigen Klammern ",(0,i.kt)("inlineCode",{parentName:"p"},"[")," ",(0,i.kt)("inlineCode",{parentName:"p"},"]")," wie folgt erzeugen:"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nprint('Die vierte Note war eine', noten[3])\n")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Im Beispiel wird die vierte Note mit dem Index ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," ausgegeben."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"python-listen-befehle"},"Python Listen: Befehle"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"liste-erzeugen"},"Liste erzeugen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"# Liste erzeugen und Variablen zuweisen\nnoten = [3.5, 6, 5, 4.5]\n\n# Ganze Liste anzeigen \nprint(noten)\n# Element mit Index 2 aus der Liste anzeigen\nprint(noten[2])\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"leere-liste-"},"Leere Liste ",(0,i.kt)("inlineCode",{parentName:"h3"},"[]")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"# Leere Liste erstellen\nnoten = []\nprint(noten)\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"liste-mit-text"},"Liste mit Text"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"# Liste mit Strings\nnoten =['gut', 'erf\xfcllt', 'mangelhaft', 'erf\xfcllt']\nprint(noten)\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"schleife-\xfcber-alle-elemente-der-liste"},"Schleife \xfcber alle Elemente der Liste"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [3.5, 6, 5, 4.5]\n\nfor note in noten:\n    print(note)\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"schleife-\xfcber-listen-indices"},"Schleife \xfcber Listen-Indices"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'noten = [3.5, 6, 5, 4.5]\n\n# (beginnt bei 0 und endet mit 1 weniger als L\xe4nge der Liste)\nfor index in range(0, len(noten)):\n    print(index, ":", noten[index])\n'))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"listen-untersuchen"},"Listen Untersuchen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"l\xe4nge-einer-liste-lenliste"},"L\xe4nge einer Liste: ",(0,i.kt)("inlineCode",{parentName:"h3"},"len(<liste>)")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\n\nprint(len(noten))\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"maximum-maxliste"},"Maximum: ",(0,i.kt)("inlineCode",{parentName:"h3"},"max(<liste>)")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Gibt das maximale Element einer numerischen Liste zur\xfcck"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nprint('Beste Noten', max(noten))\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"minimum-minliste"},"Minimum: ",(0,i.kt)("inlineCode",{parentName:"h3"},"min(<liste>)")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:10,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Gibt das minimale Element einer numerischen Liste zur\xfcck"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nprint('Schlechteste Noten', min(noten))\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"wert-in-einer-liste-wert-in-liste"},"Wert in einer Liste? ",(0,i.kt)("inlineCode",{parentName:"h3"},"<wert> in <liste>")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcft, ob sich ein Wert in einer Liste befindet"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nif 6 in noten:\n    print('Gl\xfcckwunsch, du hast min. einmal eine 6 geschrieben')\nelse:\n    print('Du hast noch keine 6 geschrieben')\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"anzahl-elemente-mit-einem-wert-listecountwert"},"Anzahl Elemente mit einem Wert? ",(0,i.kt)("inlineCode",{parentName:"h3"},"<liste>.count(<wert>)")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:12,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Z\xe4hlt, wie oft sich ein Wert in einer Liste befindet. "),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5, 5]\nfor i in [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]:\n    if noten.count(i) > 0:\n        print(f'Anzahl {i}: {noten.count(i)}')\n"))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"elemente-abfragen"},"Elemente abfragen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:13,mdxType:"Comment"})),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"erstes-element-liste0"},"Erstes Element: ",(0,i.kt)("inlineCode",{parentName:"h3"},"<liste>[0]")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:14,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nif len(noten) > 0:\n    print(noten[0])\n")),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Bemerken Sie: es wird zuerst \xfcberpr\xfcft, ob die Liste \xfcberhaupt ein Element enth\xe4lt. Nur dann wird dieses Element abgerufen und ausgegeben."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"letztes-element-liste-1"},"Letztes Element ",(0,i.kt)("inlineCode",{parentName:"h3"},"<liste>[-1]")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:15,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nif len(noten) > 0:\n    print(noten[-1])\n    # oder gleichbedeutend\n    print(noten[len(noten) - 1])\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"fehler-indexerror"},"Fehler: IndexError"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:16,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Fragt man einen Index ab, den es nicht gibt (weil es zu wenige Elemente in der Liste hat), so entsteht ein ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexError"),"."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Beispiel: "),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [3.5, 6, 5, 4.5]\n\n# Eine Liste mit 4 Elementen: Gr\xf6sster Index ist 3\nnoten[4] = 6\n"))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"elemente-ver\xe4ndern"},"Elemente Ver\xe4ndern"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:17,mdxType:"Comment"})),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"zuordnung-listeindex--wert"},"Zuordnung: ",(0,i.kt)("inlineCode",{parentName:"h3"},"<liste>[index] = <wert>")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:18,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein Element in der Liste kann durch eine Zuordnung ver\xe4ndert werden. Im untenstehenden Beispiel werden alle ungen\xfcgenden Noten auf eine ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," gesetzt."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nfor i in range(len(noten)):\n    if noten[i] < 4:\n        noten[i] = 5\nprint(noten)\n"))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"elemente-hinzuf\xfcgenentfernen"},"Elemente Hinzuf\xfcgen/Entfernen"),(0,i.kt)(o,{parentName:"div",type:"heading",nr:19,mdxType:"Comment"})),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"hinzuf\xfcgen-listeappendwert"},"hinzuf\xfcgen: ",(0,i.kt)("inlineCode",{parentName:"h3"},"<liste>.append(<wert>)")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:20,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"append")," f\xfcgt ein neues Element am ",(0,i.kt)("strong",{parentName:"p"},"Ende")," der Liste hinzu."),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nprint('Urspr\xfcnglich', noten)\nnoten.append(6)\nprint('Neu', noten)\n")),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("div",{parentName:"div"},(0,i.kt)("details",{parentName:"div"},(0,i.kt)("summary",{parentName:"details"},"An beliebiger Stelle einf\xfcgen: ",(0,i.kt)("inlineCode",{parentName:"summary"},"<liste>.insert(<index>, <wert>)")),(0,i.kt)("pre",{parentName:"details"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nprint('Urspr\xfcnglich', noten)\nnoten.insert(1, 6) # Bei Index 1 (2. Stelle) wird eine 6 eingef\xfcgt\nprint('Neu', noten)\n")))),(0,i.kt)(o,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"}))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"entfernen-listepopindex"},"entfernen: ",(0,i.kt)("inlineCode",{parentName:"h3"},"<liste>.pop(<index>)")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:21,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Entfernt das Element an der Stelle ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," und gibt dieses zur\xfcck:"),(0,i.kt)(o,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [4.5, 5, 3.5, 5.5]\nentfernt = noten.pop(2)\nprint('Entfernt', entfernt)\nprint('Noten', noten)\n"))),(0,i.kt)("admonition",{type:"def"},(0,i.kt)("div",{parentName:"admonition",className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"aufsteigend-sortieren-listesort"},"Aufsteigend sortieren ",(0,i.kt)("inlineCode",{parentName:"h3"},"<liste>.sort()")),(0,i.kt)(o,{parentName:"div",type:"heading",nr:22,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"noten = [3.5, 6, 5, 4, 4.5, 5]\n\nnoten.sort()\nprint(noten)\n"))))}N.isMDXComponent=!0}}]);