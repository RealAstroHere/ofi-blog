"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[50885],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=o(t),c=r,k=u["".concat(p,".").concat(c)]||u[c]||l[c]||i;return t?a.createElement(k,m(m({ref:n},s),{},{components:t})):a.createElement(k,m({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=u;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,m[1]=d;for(var o=2;o<i;o++)m[o]=t[o];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=t(83117),r=(t(67294),t(3905));const i={sidebar_custom_props:{id:"de0fda33-050b-4e7e-8391-540eb8860e03",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/13"}}},m="Funktionen",d={unversionedId:"EF-Python/Python/functions/index",id:"EF-Python/Python/functions/index",title:"Funktionen",description:"Kurz zusammengefasst",source:"@site/docs/EF-Python/03-Python/11-functions/index.md",sourceDirName:"EF-Python/03-Python/11-functions",slug:"/EF-Python/Python/functions/",permalink:"/EF-Python/Python/functions/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Python/03-Python/11-functions/index.md",tags:[],version:"current",lastUpdatedAt:1667222798,formattedLastUpdatedAt:"31. Okt. 2022",frontMatter:{sidebar_custom_props:{id:"de0fda33-050b-4e7e-8391-540eb8860e03",source:{name:"sdg",ref:"https://gitlab.gbsl.website/gymbefin23/material/-/snippets/13"}}},sidebar:"sidebar",previous:{title:"Referenzen",permalink:"/EF-Python/Python/referenzen/"},next:{title:"Python Scopes",permalink:"/EF-Python/Python/scopes"}},p={},o=[{value:"Kurz zusammengefasst",id:"kurz-zusammengefasst",level:2},{value:"Funktionsaufruf",id:"funktionsaufruf",level:3},{value:"... mit Parameter",id:"-mit-parameter",level:3},{value:"... mit zwei Parameter",id:"-mit-zwei-parameter",level:3},{value:"... mit Standardwert",id:"-mit-standardwert",level:3},{value:"R\xfcckgabewerte",id:"r\xfcckgabewerte",level:3},{value:"Einleitung",id:"einleitung",level:2}],s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},l=s("Comment"),u=s("Answer"),c=s("Solution"),k={toc:o};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"funktionen"},"Funktionen"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"kurz-zusammengefasst"},"Kurz zusammengefasst"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"funktionsaufruf"},"Funktionsaufruf"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"def dreieck():\n    print('*')\n    print('* *')\n    print('* * *')\n\ndreieck()\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"-mit-parameter"},"... mit Parameter"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"def dreieck(size):\n    for i in range(size + 1):\n        print('* ' * i)\n\ndreieck(3)\ndreieck(5)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"-mit-zwei-parameter"},"... mit zwei Parameter"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"def dreieck(size, zeichen):\n    for i in range(size + 1):\n        print(zeichen * i)\n\ndreieck(3, '* ')\ndreieck(5, '\ud83d\udc4d')\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"-mit-standardwert"},"... mit Standardwert"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"def dreieck(size, zeichen = '* '):\n    for i in range(size + 1):\n        print(zeichen * i)\n\ndreieck(3)\ndreieck(5, '\ud83d\udc4d')\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"r\xfcckgabewerte"},"R\xfcckgabewerte"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"def pythagoras(a, b):\n    radikand = a**2 + b**2\n    sqrt = radikand ** 0.5\n    return sqrt\n\nc = pythagoras(3, 4)\nprint(c)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"einleitung"},"Einleitung"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie haben in Ihren Programmen schon lange ",(0,r.kt)("strong",{parentName:"p"},"Funktionen")," gebraucht, vielleicht ohne es zu merken. Zum Beispiel wenn Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"print(...)")," geschrieben haben. Aber auch ",(0,r.kt)("inlineCode",{parentName:"p"},"math.sqrt(...)")," (Wurzel ziehen) und ",(0,r.kt)("inlineCode",{parentName:"p"},"math.ceil(...)")," (Abrunden), welche Sie im Primzahlen-Programm gebraucht haben, sind Funktionen. Allerdings stammen diese zwei aus einem ",(0,r.kt)("strong",{parentName:"p"},"Modul"),", welches Sie mit ",(0,r.kt)("inlineCode",{parentName:"p"},"import math")," zuerst in Ihr Programm importieren mussten."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das hinschreiben eines ",(0,r.kt)("strong",{parentName:"p"},"Funktionsnamen")," in einem Programm  bezweckt bei der ",(0,r.kt)("strong",{parentName:"p"},"Ausf\xfchrung")," des Programms, dass an dieser Stelle die betreffende Funktion ausgef\xfchrt wird. Man spricht von einem Funktions-",(0,r.kt)("strong",{parentName:"p"},"Aufruf"),"."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sobald ein Programm l\xe4nger, als nur ein paar Zeilen ist, spielen Funktionen eine wichtige Rolle. Man kann n\xe4mlich auch selber Funktionen schreiben, die man dann an verschiedenen Stellen aufrufen kann. Das hat folgende Vorteile:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"\xdcbersichtlicher\n"),(0,r.kt)("dd",{parentName:"dl"},"Das Programm wird ",(0,r.kt)("strong",{parentName:"dd"},"\xfcbersichtlicher")," und besser verst\xe4ndlich, vor allem, wenn Sie f\xfcr Ihre Funktionen gute Namen w\xe4hlen."),(0,r.kt)("dd",{parentName:"dl"},"Die Lesbarkeit ist eine wichtige Qualit\xe4t von Programmen, weil diese meistens nicht nur von der Autorin bearbeitet werden."),(0,r.kt)("dt",{parentName:"dl"},"Kein doppelter Code\n"),(0,r.kt)("dd",{parentName:"dl"},"Man kann die Wiederholung von gleichlautenden Programmteilen ",(0,r.kt)("strong",{parentName:"dd"},"vermeiden"),". "),(0,r.kt)("dd",{parentName:"dl"},"Wenn dann sp\xe4ter eine \xc4nderung am Programm n\xf6tig wird, oder ein Fehler zu korrigieren ist, so muss man nur die betreffende Funktion \xe4ndern.")),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Doch was sind Funktionen eigentlich?"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Eine Funktion ist eine ",(0,r.kt)("strong",{parentName:"p"},"Sequenz")," (Abfolge) von (Python-)Anweisungen, welche unter einem eigenen ",(0,r.kt)("strong",{parentName:"p"},"Namen"),", gefolgt von ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),", zusammengefasst werden. Die Funktion kann als neuer ",(0,r.kt)("strong",{parentName:"p"},"Befehl")," verstanden werden, welche dann an anderen Stellen im Programm ",(0,r.kt)("strong",{parentName:"p"},"aufgerufen")," werden kann, indem man den Namen und ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," hinschreibt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{maxWidth:"47%",flexBasis:"300px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="1-sequence.py"',reference:!0,title:'"1-sequence.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/1-sequence.py\n")))),(0,r.kt)("div",{parentName:"div",style:{maxWidth:"47%",flexBasis:"300px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="2-function.py"',reference:!0,title:'"2-function.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/2-function.py\n"))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Beispiele ",(0,r.kt)("inlineCode",{parentName:"p"},"1-sequence.py")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"2-function.py")," zeigen zweimal dasselbe Programm, einmal ohne Funktion, einmal mit Funktion. Im zweiten Beispiel sieht man, wie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"count_down()")," definiert wird (Zeile 3 bis 14). In Zeile 3 steht der Name der Funktion, w\xe4hrend die Zeilen 4 bis 14 die Anweisungen enthalten, welche zur Funktion geh\xf6ren."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zeile 17 zeigt, wie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"count_down()")," aufgerufen wird."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"funktionen-mit-parameter"},"Funktionen mit Parameter"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit Funktionen noch flexibler eingesetzt werden k\xf6nnen, kann man ihnen beim Aufruf bestimmte Werte in Form von ",(0,r.kt)("strong",{parentName:"p"},"Parametern")," mitgeben. Dazu muss man bei der ",(0,r.kt)("strong",{parentName:"p"},"Definition")," der Funktion zwischen den ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," die Namen der Parameter angeben. Diese k\xf6nnen dann innerhalb der Funktion wie Variablen verwendet werden."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beim ",(0,r.kt)("strong",{parentName:"p"},"Aufruf")," der Funktion gibt man in den ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," die ",(0,r.kt)("strong",{parentName:"p"},"aktuellen Werte")," an, mit denen die Funktion anschliessend arbeiten soll. Man nennt diese Werte beim Aufruf die ",(0,r.kt)("strong",{parentName:"p"},"Argumente"),". Das k\xf6nnen Zahlen, Texte, aber auch die Namen von anderen Variablen sein."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Wichtig")),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Parameter k\xf6nnen nur innerhalb der Funktion verwendet werden, zu welcher Sie geh\xf6ren. Ausserhalb der Funktion sind sie unbekannt. Weist man einem Parameter innerhalb einer Funktion einen neuen Wert zu, so geht dieser beim Verlassen der Funktion verloren."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das n\xe4chste Beispiel ",(0,r.kt)("inlineCode",{parentName:"p"},"3-function-with-parameter.py")," zeigt, wie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"count_down()")," mit einem Parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"zahl")," flexibler gemacht werden kann. Jetzt kann beim Aufruf der Funktion angegeben werden, wie lange der Count-down dauern soll. Das hat zur Folge, dass die Anweisungen f\xfcr die Eingabe der gew\xfcnschten Count-down-Zeit durch die Benutzer:in zur\xfcck ins Hauptprogramm verlagert werden m\xfcssen. Dies ist aber sowieso besser, da die Funktion so viel flexibler einsetzbar ist. Die Count-down-Zeit kann ja aus einer beliebigen Quelle stammen, nicht nur von der Konsole."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="3-function-with-parameter.py"',reference:!0,title:'"3-function-with-parameter.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/3-function-with-parameter.py\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"funktionen-mit-r\xfcckgabewert"},"Funktionen mit R\xfcckgabewert"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Viele Funktionen erzeugen bei ihrer Ausf\xfchrung ein Resultat, welches dann ausserhalb der Funktion weiterverwendet werden kann. Dazu gibt es die M\xf6glichkeit mit ",(0,r.kt)("inlineCode",{parentName:"p"},"return ...")," einen Wert als Resultat zur\xfcckzugeben. Die Funktion wird dann verlassen und der Wert steht an der Stelle des Aufrufs zur Verf\xfcgung und kann dort zum Beispiel einer weiteren Variablen zugewiesen werden."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im foglenden Beispiel ",(0,r.kt)("inlineCode",{parentName:"p"},"4-function-with-return.py")," ist dieses Prinzip bei der Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"lies_zahl()")," zu sehen, welche als Resultat die eingegebene Zahl zur\xfcckgibt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="4-function-with-return.py"',reference:!0,title:'"4-function-with-return.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/4-function-with-return.py\n")),(0,r.kt)("admonition",{title:"1. Debuggen",type:"aufgabe"},(0,r.kt)(u,{type:"state",webKey:"032b1b16-de7c-44e0-a4be-3318120dae00",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Dateinamen\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/fkt/1-sequence.py")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/fkt/2-function.py")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/fkt/3-function-with-parameter.py")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/fkt/4-function-with-return.py"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laden Sie obige Code-Beispiele in Ihr Repository herunter, und ",(0,r.kt)("strong",{parentName:"p"},"debuggen")," Sie die Beispiele Schritt f\xfcr Schritt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Markieren Sie die Aufgabe als erledigt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,r.kt)("admonition",{title:"2. Sternchen-Rechteck",type:"aufgabe"},(0,r.kt)(u,{type:"state",webKey:"5ab1b7f2-04d6-42bc-a5bc-da615117c83f",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Dateiname\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/fkt/sternchen.py"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"******\n*    *\n*    *\n*    *\n*    *\n******\n")),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Gesucht ist ein Programm, welches obige Figur auf der Konsole ausgibt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schreiben Sie ",(0,r.kt)("strong",{parentName:"p"},"zwei Funktionen")," f\xfcr die Ausgabe der beiden unterschiedlichen Zeilen. Verwenden Sie diese Funktionen dann im Hauptprogramm um die Figur als ganzes auszugeben."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Parametrisieren")," Sie in einem zweiten Schritt die Funktionen so, dass die Breite der Figur (in Anzahl Zeichen) beim Aufruf der Funktionen angegeben werden kann."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Machen Sie in einem dritten Schritt aus dem Hauptprogramm auch eine Funktion, bei welcher \xfcber je einen Parameter die die Breite der Figur (in Anzahl Zeichen) und H\xf6he der Figur (in Anzahl Zeilen) angegeben werden kann."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schreiben Sie ein neues Hauptprogramm, welches diese letzte Funktion mit einigen Werten f\xfcr die Breite und H\xf6he der Figur aufruft."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was passiert, wenn man Ihre Funktionen mit negativen Werten aufruft? Wie k\xf6nnte man das L\xf6sen?"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,r.kt)(u,{type:"text",webKey:"2d03dc75-1c56-435d-aa5d-972ec40719cb",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Comitten und pushen Sie Ihre L\xf6sung und markieren Sie diese Aufgabe als erledigt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})),(0,r.kt)(c,{webKey:"c215f042-1869-489d-9ecb-8f0843470632",mdxType:"Solution"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"L\xf6sung ",(0,r.kt)("inlineCode",{parentName:"p"},"sternchen.py")),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:'reference title="sternchen.py"',reference:!0,title:'"sternchen.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-Python/03-Python/11-functions/assets/sternchen-lsg.py\n")))))}g.isMDXComponent=!0}}]);