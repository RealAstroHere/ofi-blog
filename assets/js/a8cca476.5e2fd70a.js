"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4893],{3905:(e,n,a)=>{a.d(n,{Zo:()=>o,kt:()=>k});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=t.createContext({}),m=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},o=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=m(a),k=i,g=c["".concat(d,".").concat(k)]||c[k]||p[k]||r;return a?t.createElement(g,l(l({ref:n},o),{},{components:a})):t.createElement(g,l({ref:n},o))}));function k(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34673:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(83117),i=a(67294),r=a(86010),l=a(72389),s=a(86043);const d="details_lb9f",m="isBrowser_bmU9",o="collapsibleContent_i85q";function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function c(e,n){return!!e&&(e===n||c(e.parentElement,n))}function k(e){let{summary:n,children:a,...k}=e;const g=(0,l.Z)(),w=(0,i.useRef)(null),{collapsed:N,setCollapsed:u}=(0,s.u)({initialState:!k.open}),[h,v]=(0,i.useState)(k.open);return i.createElement("details",(0,t.Z)({},k,{ref:w,open:h,"data-collapsed":N,className:(0,r.default)(d,g&&m,k.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;p(n)&&c(n,w.current)&&(e.preventDefault(),N?(u(!1),v(!0)):u(!0))}}),null!=n?n:i.createElement("summary",null,"Details"),i.createElement(s.z,{lazy:!1,collapsed:N,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),v(!e)}},i.createElement("div",{className:o},a)))}const g="details_b_Ee";function w(e){let{...n}=e;return i.createElement(k,(0,t.Z)({},n,{className:(0,r.default)("alert alert--info",g,n.className)}))}},13155:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(71217),i=a(67294),r=a(34673),l=a(86010),s=a(86720);const d=()=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",style:{marginTop:"5px"}},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),m=(0,t.Pi)((e=>{let{title:n}=e;return i.createElement("div",{className:(0,l.default)(s.Z.wrapper,"hint-wrapper")},i.createElement(r.Z,{summary:i.createElement("summary",null,n||"Hinweis"," ",i.createElement(d,null)),className:(0,l.default)("alert alert--warning",s.Z.hint)},e.children))}))},4505:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>w,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=a(83117),i=(a(67294),a(3905)),r=a(13155);const l={title:"4. Fehler"},s="4. Fehler",d={unversionedId:"Programmieren-1/Turtlegrafik/errors",id:"Programmieren-1/Turtlegrafik/errors",title:"4. Fehler",description:"Sie haben bereits festgestellt, dass Python sehr pingelig ist was Tippfehler und die pr\xe4zise Verwendung von Klammern, Anf\xfchrungszeichen, Doppelpunkten und Leerzeichen angeht. Jede Sprache hat seine eigenen Regeln, wie W\xf6rter und S\xe4tze strukturiert sein m\xfcssen. Diese Regeln sind allgemein bekannt als die Syntax einer Sprache. Bei Programmiersprachen wird mit der Syntax festgelegt, welche W\xf6rter, in welcher Reihenfolge und in welchem Kontext erlaubt sind.",source:"@site/docs/Programmieren-1/02-Turtlegrafik/004-errors.md",sourceDirName:"Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/errors",permalink:"/Programmieren-1/Turtlegrafik/errors",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/02-Turtlegrafik/004-errors.md",tags:[],version:"current",lastUpdatedAt:1659430495,formattedLastUpdatedAt:"2. Aug. 2022",sidebarPosition:4,frontMatter:{title:"4. Fehler"},sidebar:"sidebar",previous:{title:"3. Wiederholung \ud83d\udd01",permalink:"/Programmieren-1/Turtlegrafik/repeat"},next:{title:"5. Unterprogramme",permalink:"/Programmieren-1/Turtlegrafik/functions"}},m={},o=[{value:"Syntax Fehler (syntax errors)",id:"syntax-fehler-syntax-errors",level:2},{value:"Beispiele",id:"beispiele",level:3},{value:"Namens Fehler (<code>NameError</code>)",id:"namens-fehler-nameerror",level:2},{value:"Beispiele",id:"beispiele-1",level:3},{value:"Einr\xfcckungsfehler (<code>IndentationError</code>)",id:"einr\xfcckungsfehler-indentationerror",level:2},{value:"Beispiel",id:"beispiel",level:3},{value:"Logikfehler",id:"logikfehler",level:2},{value:"Beispiel",id:"beispiel-1",level:3}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},c=p("Solution"),k=p("Figure"),g={toc:o};function w(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"4-fehler"},"4. Fehler"),(0,i.kt)("p",null,"Sie haben bereits festgestellt, dass Python sehr pingelig ist was Tippfehler und die pr\xe4zise Verwendung von Klammern, Anf\xfchrungszeichen, Doppelpunkten und Leerzeichen angeht. Jede Sprache hat seine eigenen Regeln, wie W\xf6rter und S\xe4tze strukturiert sein m\xfcssen. Diese Regeln sind allgemein bekannt als die ",(0,i.kt)("strong",{parentName:"p"},"Syntax")," einer Sprache. Bei Programmiersprachen wird mit der Syntax festgelegt, welche W\xf6rter, in welcher Reihenfolge und in welchem Kontext erlaubt sind."),(0,i.kt)("h2",{id:"syntax-fehler-syntax-errors"},"Syntax Fehler (syntax errors)"),(0,i.kt)("p",null,'Syntax Fehler sind kleine Fehler in einem Programm. Da das Programm nicht von einem Mensch, sondern von einem Computer "gelesen" und interpretiert wird, reicht ein Tippfehler, ein fehlendes Komma oder eine fehlende Klammer, dass das Programm nicht mehr verstanden werden kann.'),(0,i.kt)("p",null,"Die Python Sprache setzt sich aus folgenden Elementen zusammen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Schl\xfcsselw\xf6rter")," (",(0,i.kt)("em",{parentName:"li"},"Statements"),"): W\xf6rter oder Zeichen, die ohne Anf\xfchrungszeichen und ohne Klammern geschrieben werden. z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"import"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"from")," oder ",(0,i.kt)("inlineCode",{parentName:"li"},"for"),", aber auch ",(0,i.kt)("inlineCode",{parentName:"li"},":")," oder ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),". Sie m\xfcssen in einer vordefinierten Reihenfolge vorliegen, damit diese von Python verstanden werden. ",(0,i.kt)("em",{parentName:"li"},"(",(0,i.kt)("a",{parentName:"em",href:"/Programmieren-1/Python/keywords"},"\u21a9 alle Schl\xfcsselw\xf6rter"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Befehle")," (Unterprogramme, ",(0,i.kt)("em",{parentName:"li"},"Funktionen"),"): vordefinierte Befehle, die mit einer runden Klammer aufgerufen werden. z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"print('hello')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Variablen"),": Namen, die einen Wert enthalten")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"h\xe4ufigste-ursachen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"H\xe4ufigste Ursachen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Fehler bei ",(0,i.kt)("strong",{parentName:"li"},"Schl\xfcsselw\xf6rtern")),(0,i.kt)("li",{parentName:"ul"},"vergessene oder falsch eingesetzte ",(0,i.kt)("strong",{parentName:"li"},"Feldtrenner")," (z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},":"),")"),(0,i.kt)("li",{parentName:"ul"},"Falsche Anordnung von Schl\xfcsselw\xf6rtern/Feldtrennern")))),(0,i.kt)("h3",{id:"beispiele"},"Beispiele"),(0,i.kt)("div",{style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"frm turtle import *\nforward(100)\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\ngoto(100 50)\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\nfor i in range(4)\n    forward(25)\n    right(90)\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"fehler-finden"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Fehler finden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Untersuchen Sie obenstehende Programmschnipsel. Was sagen Ihnen die Fehlermeldungen?"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Auf welcher Zeile steht die Art des Fehlers?"),(0,i.kt)("li",{parentName:"ul"},"Wo finden Sie Hinweise auf den Fehler? Flicken Sie sie...")),(0,i.kt)("div",{parentName:"div",style:{},className:"flex flex-flex"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=error1.py id=6cdb7162-bc67-4b3b-8879-93cef97a10a5",live_py:!0,title:"error1.py",id:"6cdb7162-bc67-4b3b-8879-93cef97a10a5"},"frm turtle import *\nforward(100)\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=error2.py id=d3d13806-be6e-4043-8375-8208989328fc",live_py:!0,title:"error2.py",id:"d3d13806-be6e-4043-8375-8208989328fc"},"from turtle import *\ngoto(100 50)\n")),(0,i.kt)("div",{parentName:"div",className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"hinweis"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Hinweis")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Was macht der Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"goto"),"? Schauen Sie die Funktionsweise unter ",(0,i.kt)("a",{parentName:"p",href:"/Programmieren-1/Turtlegrafik/turtle-commands#gotox-y"},"Turtle Befehle#goto(x, y)")," nach")))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=error3.py id=8f6d207b-397a-4c54-9812-f49956ccfef8",live_py:!0,title:"error3.py",id:"8f6d207b-397a-4c54-9812-f49956ccfef8"},"from turtle import *\nfor i in range(4)\n    forward(25)\n    right(90)\n"))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"})),(0,i.kt)(c,{webKey:"d775eeeb-21a2-479c-aba3-24a3173b9fe1",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Die Fehlermeldung gibt den Hinweis, was falsch ist."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"error1.py"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Zeile 1: Tippfehler, ",(0,i.kt)("inlineCode",{parentName:"li"},"from"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"error2.py"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Zeile 2: Vergessenes Komma bei ",(0,i.kt)("inlineCode",{parentName:"li"},"goto(100, 50)"))),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"error3.py"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Zeile 2: Vergessenes ",(0,i.kt)("inlineCode",{parentName:"li"},":")," am Ende der Zeile"))))),(0,i.kt)("h2",{id:"namens-fehler-nameerror"},"Namens Fehler (",(0,i.kt)("inlineCode",{parentName:"h2"},"NameError"),")"),(0,i.kt)("p",null,"Liegt ein Fehler vor, der nicht bei Schl\xfcsselw\xf6rtern (oder deren Anordnung) vorliegt, so handelt es sich oft um einen Namens-Fehler (",(0,i.kt)("inlineCode",{parentName:"p"},"NameError"),"). Es wird also versucht, ein Unterprogramm zu \xf6ffnen, das aber unter diesem Namen nicht gefunden werden kann."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"h\xe4ufigste-ursachen-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"H\xe4ufigste Ursachen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die h\xe4ufigste Ursachen von ",(0,i.kt)("inlineCode",{parentName:"p"},"NameError"),"s sind"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Vertipper im Namen des Befehls"),(0,i.kt)("li",{parentName:"ul"},"nicht ",(0,i.kt)("inlineCode",{parentName:"li"},"importierte")," Befehle (z.B. ",(0,i.kt)("inlineCode",{parentName:"li"},"from turtle import *")," fehlt)")))),(0,i.kt)("h3",{id:"beispiele-1"},"Beispiele"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\nforwrd(100)\n")),(0,i.kt)("p",null,"Der angegebene Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"forwrd")," kann nicht gefunden werden, da er weder in einer importierten Bibliothek, noch im aktuellen Programm gefunden werden kann."),(0,i.kt)("p",null,"Der gleiche Fehler tritt auf, wenn der Befehl zwar richtig geschrieben wird, das Importieren aber vergessen geht:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"forward(100)\n")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"fehler-finden-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Fehler finden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Finden und l\xf6sen Sie die entstandenen Fehler"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=error.py id=2ec619fd-b01e-431c-84d2-227c5da79f6e",live_py:!0,title:"error.py",id:"2ec619fd-b01e-431c-84d2-227c5da79f6e"},"from math import ceil, floor\n\nprint('15.3 gerundet =', round(15.3))\nprint('15.8 gerundet =', round(15.8))\nprint('15.3 aufgerundet =', ceyl(15.3))\nprint('15.8 abgerundet =', flor(15.8))\n\n")),(0,i.kt)(r.Z,{mdxType:"Hint"},(0,i.kt)("p",{parentName:"div"},"Suchen Sie die fehlerhaften Befehle in Kombination mit ",(0,i.kt)("inlineCode",{parentName:"p"},"Python")," auf Google, bspw. ",(0,i.kt)("inlineCode",{parentName:"p"},"python ceyl"),".")),(0,i.kt)(c,{webKey:"d775eeeb-21a2-479c-aba3-24a3173b9fe1",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},"Zwei Namensfehler, die Fehlermeldung sagt die Zeilennummer und schl\xe4gt den richtigen Befehl vor:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Zeile 5"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-error"},"File <string>, line 5, in <module>\nNameError: name 'ceyl' is not defined. Did you mean: 'ceil'?\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Zeile 6"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-error"}," File <string>, line 6, in <module>\n NameError: name 'flor' is not defined. Did you mean: 'floor'?\n"))))))),(0,i.kt)("h2",{id:"einr\xfcckungsfehler-indentationerror"},"Einr\xfcckungsfehler (",(0,i.kt)("inlineCode",{parentName:"h2"},"IndentationError"),")"),(0,i.kt)("p",null,"Python erwartet nach jedem Doppelpunkt ",(0,i.kt)("inlineCode",{parentName:"p"},":"),", dass ein ",(0,i.kt)("strong",{parentName:"p"},"einger\xfcckter")," Codeblock kommt. Falls kein einger\xfcckter Codeblock gefunden wird, entsteht ein ",(0,i.kt)("inlineCode",{parentName:"p"},"IndentationError"),". Wird jedoch f\xe4lschlicherweise eine Zeile einger\xfcckt, so wird ebenfalls dieser Fehler angezeigt."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"h\xe4ufigste-ursachen-2"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"H\xe4ufigste Ursachen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Die n\xe4chste Zeile nach einem Doppelunkt ",(0,i.kt)("inlineCode",{parentName:"li"},":")," ist nicht einger\xfcckt"),(0,i.kt)("li",{parentName:"ul"},"Eine Zeile ist f\xe4lschlicherweise einger\xfcckt"),(0,i.kt)("li",{parentName:"ul"},"ein Leerschlag zu wenig einger\xfcckt ")))),(0,i.kt)("h3",{id:"beispiel"},"Beispiel"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px",backgroundColor:"var(--ifm-color-danger-lightest)"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Nicht einger\xfcckt")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"for i in range(5):\nprint('Hallo')\n")))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px",backgroundColor:"var(--ifm-color-success-lightest)"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Korrektur")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"for i in range(5):\n    print('Hallo')\n"))))),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px",backgroundColor:"var(--ifm-color-danger-lightest)"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Falsch einger\xfcckt")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('Hallo')\n print('wie')\nprint('gehts?')\n")))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"250px",backgroundColor:"var(--ifm-color-success-lightest)"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Korrektur")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('Hallo')\nprint('wie')\nprint('gehts?')\n"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"fehler-finden-2"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Fehler finden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Finden und l\xf6sen Sie die entstandenen Fehler, so dass die Ausgabe"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Hallo zum 0\nHallo zum 1\nEnde\n")),(0,i.kt)("p",{parentName:"div"},"lautet."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=errors.py id=0538f258-5b10-4dec-be08-644e1f1df6a8",live_py:!0,title:"errors.py",id:"0538f258-5b10-4dec-be08-644e1f1df6a8"},"for i in range(2):\nprint('Hallo zum', i)\n print('Ende')\n")),(0,i.kt)(c,{webKey:"d775eeeb-21a2-479c-aba3-24a3173b9fe1",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"for i in range(2):\n    print('Hallo zum', i)\nprint('Ende')\n"))))),(0,i.kt)("h2",{id:"logikfehler"},"Logikfehler"),(0,i.kt)("p",null,"Aus der Sicht von Python funktioniert alles, top! \ud83d\udc4d"),(0,i.kt)("p",null,"Sobald aber das Programm ausgef\xfchrt wird, macht es nicht das, was Sie sich gew\xfcnscht haben - Logik-Fehler \ud83d\udca9..."),(0,i.kt)("p",null,"Diese Fehler sind im allgemeinen am schwierigsten zu finden. Ein h\xe4ufiger Fehler ist aber, dass man bei einem Befehl die runden Klammern am Ende vergisst - f\xfcr Python kein Problem, da es den Befehl kennt, jedoch nicht dazu aufgefordert wird, diesen auszuf\xfchren. "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"h\xe4ufigste-ursachen-3"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"H\xe4ufigste Ursachen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Checkliste f\xfcr Logikfehler"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"sind bei Befehlen die runden Klammern ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," am Ende angegeben?")))),(0,i.kt)("h3",{id:"beispiel-1"},"Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\npenup()\ngoto(-10, 10)\npendown\nfor i in range(4):\n    forward(20)\n    left(90)\n")),(0,i.kt)("p",null,"Auf Zeile 4 fehlen die runden Klammern - ",(0,i.kt)("inlineCode",{parentName:"p"},"pendown")," wird nicht ausgef\xfchrt! Fehler beheben: Den Befehl mit ",(0,i.kt)("inlineCode",{parentName:"p"},"pendown()")," aufrufen."),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"fehler-finden-3"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Fehler finden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Finden und beheben Sie alle Fehler, so dass folgende Ausgabe entsteht:"),(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(23989).Z,width:"260",height:"260"})),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=errors.py id=b11d905a-08e3-4f43-810f-c4c227bb5d46",live_py:!0,title:"errors.py",id:"b11d905a-08e3-4f43-810f-c4c227bb5d46"},'from turtle import *\n\nfillcolor("Rot")\n penup()\ngoto(-125 125)\nbegin_fill()\nfor i in range(4)\n    forward(250)\n    left(90)\nend_fill()\nforward(150)\nlinks(90)\nforward(50)\nfillcolor("white")\nbegin_fill()\nfor i in range(4):\n    forward(50)\n    right(90)\n    forward(50)\n    left(90)\n    forward(50)\n    left(90)\nend_fill\n\n\n')),(0,i.kt)(c,{webKey:"d775eeeb-21a2-479c-aba3-24a3173b9fe1",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Vorgehensweise"),":"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Programm ausf\xfchren"),(0,i.kt)("li",{parentName:"ol"},"Fehlermeldung analysieren und ",(0,i.kt)("strong",{parentName:"li"},"nur")," diesen Fehler flicken"),(0,i.kt)("li",{parentName:"ol"},"Zur\xfcck zu Punkt 1")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'from turtle import *\n\npenup()\ngoto(-125, -125)\nfillcolor("red")\n\nbegin_fill()\nfor i in range(4):\n    forward(250)\n    left(90)\nend_fill()\nforward(150)\nleft(90)\nforward(50)\nfillcolor("white")\nbegin_fill()\nfor i in range(4):\n    forward(50)\n    right(90)\n    forward(50)\n    left(90)\n    forward(50)\n    left(90)\nend_fill()\n'))))))}w.isMDXComponent=!0},86720:(e,n,a)=>{a.d(n,{Z:()=>t});const t={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},23989:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9iMTFkOTA1YV8wOGUzXzRmNDNfODEwZl9jNGMyMjdiYjVkNDZfc3ZnIiB3aWR0aD0iMjYwIiBoZWlnaHQ9IjI2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIxMjAsMTIwLDI2MCwyNjAiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSItMTI1IiB5Mj0iMCIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ii0xMjUiIHkxPSIxMjUiIHgyPSIxMjUiIHkyPSIxMjUiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjUiIHkxPSIxMjUiIHgyPSIxMjUuMDAwMDAwMDAwMDAwMDEiIHkyPSIxMjUiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIxMjUuMDAwMDAwMDAwMDAwMDEiIHkxPSItMTI1IiB4Mj0iLTEyNC45OTk5OTk5OTk5OTk5OSIgeTI9Ii0xMjUiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMTI0Ljk5OTk5OTk5OTk5OTk5IiB5MT0iLTEyNS4wMDAwMDAwMDAwMDAwMyIgeDI9Ii0xMjUuMDAwMDAwMDAwMDAwMDMiIHkyPSItMTI1LjAwMDAwMDAwMDAwMDAzIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8cG9seWdvbiBwb2ludHM9Ii0xMjUsMTI1IDEyNS4wLDEyNS4wIDEyNS4wMDAwMDAwMDAwMDAwMSwtMTI1LjAgLTEyNC45OTk5OTk5OTk5OTk5OSwtMTI1LjAwMDAwMDAwMDAwMDAzIC0xMjUuMDAwMDAwMDAwMDAwMDMsMTI0Ljk5OTk5OTk5OTk5OTk3IiBzdHlsZT0iZGlzcGxheTogYmxvY2s7IGZpbGw6IHJlZDsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyIgZGlzcGxheT0iYmxvY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkgcm90YXRlKDAsMCwwKSI+PC9wb2x5Z29uPgo8bGluZSB4MT0iLTEyNS4wMDAwMDAwMDAwMDAwMyIgeTE9IjEyNC45OTk5OTk5OTk5OTk5NyIgeDI9IjI0Ljk5OTk5OTk5OTk5OTk3IiB5Mj0iMTI0Ljk5OTk5OTk5OTk5OTk3IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMjQuOTk5OTk5OTk5OTk5OTciIHkxPSIxMjUuMDAwMDAwMDAwMDAwMDEiIHgyPSIyNC45OTk5OTk5OTk5OTk5ODYiIHkyPSIxMjUuMDAwMDAwMDAwMDAwMDEiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyNC45OTk5OTk5OTk5OTk5ODYiIHkxPSI3NS4wMDAwMDAwMDAwMDAwMSIgeDI9IjI1IiB5Mj0iNzUuMDAwMDAwMDAwMDAwMDEiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyNSIgeTE9IjI1LjAwMDAwMDAwMDAwMDAxNCIgeDI9Ijc1IiB5Mj0iMjUuMDAwMDAwMDAwMDAwMDE0IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iNzUiIHkxPSIyNS4wMDAwMDAwMDAwMDAwMjUiIHgyPSI3NS4wMDAwMDAwMDAwMDAwMSIgeTI9IjI1LjAwMDAwMDAwMDAwMDAyNSIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9Ijc1LjAwMDAwMDAwMDAwMDAxIiB5MT0iLTI0Ljk5OTk5OTk5OTk5OTk3NSIgeDI9IjI1LjAwMDAwMDAwMDAwMDAxNCIgeTI9Ii0yNC45OTk5OTk5OTk5OTk5NzUiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIyNS4wMDAwMDAwMDAwMDAwMTQiIHkxPSItMjQuOTk5OTk5OTk5OTk5OTkzIiB4Mj0iMjUuMDAwMDAwMDAwMDAwMDMiIHkyPSItMjQuOTk5OTk5OTk5OTk5OTkzIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iMjUuMDAwMDAwMDAwMDAwMDMiIHkxPSItNzUiIHgyPSItMjQuOTk5OTk5OTk5OTk5OTciIHkyPSItNzUiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMjQuOTk5OTk5OTk5OTk5OTciIHkxPSItNzUuMDAwMDAwMDAwMDAwMDEiIHgyPSItMjQuOTk5OTk5OTk5OTk5OTkzIiB5Mj0iLTc1LjAwMDAwMDAwMDAwMDAxIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTI0Ljk5OTk5OTk5OTk5OTk5MyIgeTE9Ii0yNS4wMDAwMDAwMDAwMDAwMTQiIHgyPSItNzUiIHkyPSItMjUuMDAwMDAwMDAwMDAwMDE0IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8bGluZSB4MT0iLTc1IiB5MT0iLTI1LjAwMDAwMDAwMDAwMDAzMiIgeDI9Ii03NS4wMDAwMDAwMDAwMDAwMyIgeTI9Ii0yNS4wMDAwMDAwMDAwMDAwMzIiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItNzUuMDAwMDAwMDAwMDAwMDMiIHkxPSIyNC45OTk5OTk5OTk5OTk5NjgiIHgyPSItMjUuMDAwMDAwMDAwMDAwMDMiIHkyPSIyNC45OTk5OTk5OTk5OTk5NjgiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMjUuMDAwMDAwMDAwMDAwMDMiIHkxPSIyNC45OTk5OTk5OTk5OTk5OTMiIHgyPSItMjUuMDAwMDAwMDAwMDAwMDUiIHkyPSIyNC45OTk5OTk5OTk5OTk5OTMiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSItMjUuMDAwMDAwMDAwMDAwMDUiIHkxPSI3NSIgeDI9IjI0Ljk5OTk5OTk5OTk5OTk1IiB5Mj0iNzUiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+Cjxwb2x5Z29uIHBvaW50cz0iMjQuOTk5OTk5OTk5OTk5OTg2LDc1LjAwMDAwMDAwMDAwMDAxIDI1LjAsMjUuMDAwMDAwMDAwMDAwMDE0IDc1LjAsMjUuMDAwMDAwMDAwMDAwMDI1IDc1LjAwMDAwMDAwMDAwMDAxLC0yNC45OTk5OTk5OTk5OTk5NzUgMjUuMDAwMDAwMDAwMDAwMDE0LC0yNC45OTk5OTk5OTk5OTk5OTMgMjUuMDAwMDAwMDAwMDAwMDMsLTc1LjAgLTI0Ljk5OTk5OTk5OTk5OTk3LC03NS4wMDAwMDAwMDAwMDAwMSAtMjQuOTk5OTk5OTk5OTk5OTkzLC0yNS4wMDAwMDAwMDAwMDAwMTQgLTc1LjAsLTI1LjAwMDAwMDAwMDAwMDAzMiAtNzUuMDAwMDAwMDAwMDAwMDMsMjQuOTk5OTk5OTk5OTk5OTY4IC0yNS4wMDAwMDAwMDAwMDAwMywyNC45OTk5OTk5OTk5OTk5OTMgLTI1LjAwMDAwMDAwMDAwMDA1LDc1LjAgMjQuOTk5OTk5OTk5OTk5OTUsNzUuMDAwMDAwMDAwMDAwMDMiIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgZmlsbDogd2hpdGU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiIGRpc3BsYXk9ImJsb2NrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwLDAsMCkiPjwvcG9seWdvbj4KPC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+Cjxwb2x5Z29uIHBvaW50cz0iMCwwICwtNSwtOSAsMCwtNyAsNSwtOSAiIHN0cm9rZT0iYmxhY2siIGZpbGw9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ljk5OTk5OTk5OTk5OTk1LDc1LjAwMDAwMDAwMDAwMDAzKSByb3RhdGUoLTkwMCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+ZnJvbSB0dXJ0bGUgaW1wb3J0ICoKCnNwZWVkKDEwKQpwZW51cCgpCmdvdG8oLTEyNSwgLTEyNSkKZmlsbGNvbG9yKCJyZWQiKQoKYmVnaW5fZmlsbCgpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCgyNTApCiAgICBsZWZ0KDkwKQplbmRfZmlsbCgpCmZvcndhcmQoMTUwKQpsZWZ0KDkwKQpmb3J3YXJkKDUwKQpmaWxsY29sb3IoIndoaXRlIikKYmVnaW5fZmlsbCgpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCg1MCkKICAgIHJpZ2h0KDkwKQogICAgZm9yd2FyZCg1MCkKICAgIGxlZnQoOTApCiAgICBmb3J3YXJkKDUwKQogICAgbGVmdCg5MCkKZW5kX2ZpbGwoKTwvcmF3PjwvbWV0YWRhdGE+PC9zdmc+"}}]);