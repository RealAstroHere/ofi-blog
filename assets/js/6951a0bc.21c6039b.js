"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[99504],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(t),k=r,g=c["".concat(d,".").concat(k)]||c[k]||l[k]||i;return t?n.createElement(g,m(m({ref:a},o),{},{components:t})):n.createElement(g,m({ref:a},o))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=c;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var s=2;s<i;s++)m[s]=t[s];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93896:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>m,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=t(83117),r=(t(67294),t(3905));const i={sidebar_custom_props:{id:"03f4d19d-e907-44da-99ce-2da5964a3129"}},m="Umgang mit Fehlern",p={unversionedId:"Programmieren/Python/try-except",id:"version-24ef/Programmieren/Python/try-except",title:"Umgang mit Fehlern",description:"\ud83d\udc49 Voraussetzung: Kapitel Repetition#Fehler",source:"@site/versioned_docs/version-24ef/01-Programmieren/04-Python/14-try-except.md",sourceDirName:"01-Programmieren/04-Python",slug:"/Programmieren/Python/try-except",permalink:"/24ef/Programmieren/Python/try-except",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:14,frontMatter:{sidebar_custom_props:{id:"03f4d19d-e907-44da-99ce-2da5964a3129"}},sidebar:"version-24ef/sidebar",previous:{title:"Strings",permalink:"/24ef/Programmieren/Python/strings"},next:{title:"Software Engineering",permalink:"/24ef/Programmieren/Software-Engineering/"}},d={},s=[{value:"Try Except",id:"try-except",level:2},{value:"Beispiel",id:"beispiel",level:2},{value:"Fazit",id:"fazit",level:2}],o=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},l=o("Comment"),c=o("Figure"),k=o("SourceRef"),g=o("Answer"),N={toc:s};function v(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},N,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"umgang-mit-fehlern"},"Umgang mit Fehlern"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udc49 Voraussetzung: Kapitel ",(0,r.kt)("a",{parentName:"p",href:"pathname:///24ef/Programmieren/Turtle-Repetition/errors"},"Repetition#Fehler")),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{width:"400px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"??? --width=400px",src:t(83800).Z,width:"640",height:"853"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"???",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(k,{parentName:"figcaption",bib:{author:"other",source:"https://www.reddit.com/r/ProgrammerHumor/comments/cw29ts/edge_cases/",licence:"",licence_url:"",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was soll ein Programm tun, wenn er mit unpassenden Daten oder Eingaben konfrontiert wird? Normalerweise: Abst\xfcrzen ",(0,r.kt)("i",{parentName:"p",className:"mdi-emoticon-cry mdi "}),"."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit das Programm nicht abst\xfcrzt, ist es unerl\xe4sslich, die Benutzerabfragen so gut es geht in die richtige Form umzuwandeln und dann auf Richtigkeit zu \xfcberpr\xfcfen!"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Dabei gibt es zwei Ans\xe4tze:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Programm anweisen, die Ausf\xfchrung einer Sequenz zu ",(0,r.kt)("strong",{parentName:"p"},"versuchen"),". "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("mermaid",{parentName:"li",value:"graph TD\n    A[Fehler?] --\x3e B\n    B --\x3e|Ja| C[Eingabe ist schuld!]\n    B --\x3e|Nein| D[Eingabe war ok]"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Eingabe bzgl. Randbedingungen ",(0,r.kt)("strong",{parentName:"p"},"untersuchen")," und \xfcberpr\xfcfen..."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"try-except"},"Try Except"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Es gibt in Python eine M\xf6glichkeit dem Interpreter zu sagen: "Es ist okay wenn hier ein Fehler auftaucht, wir erwarten das schon und haben eine Antwort darauf bereit".'),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Dieses Konstrukt nennt sich ein ",(0,r.kt)("em",{parentName:"p"},"Try-Except Block")," und kann folgendermassen aussehen:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"eingabe = input('Geben sie eine Zahl ein')\ntry:\n    eingabe = int(eingabe)\nexcept:\n    print('das ist keine Zahl')\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Hier geschieht folgendes: Der code im ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," Segment wird normal der Reihe nach ausgef\xfchrt. Falls jetzt innerhalb dieses Segments ein Fehler generiert wird bricht das Programm nicht ab, sondern springt an den Anfang des ",(0,r.kt)("inlineCode",{parentName:"p"},"except")," Segments und f\xfchrt dieses aus. Danach wird normal unter dem ",(0,r.kt)("inlineCode",{parentName:"p"},"except")," weiter gemacht. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beispiel"},"Beispiel"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beispiel: Ein Produktcode eingeben..."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"muss genau 9 Zeichen enthalten"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"die ersten 4 Zeichen m\xfcssen Zahlen sein und gr\xf6sser 1000 sein"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zeichen muss ein Buchstabe sein"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"die letzten 4 Zeichen m\xfcssen eine Hexadezimalzahl sein (starten mit '0x' und dann zwei Zeichen mit den aus 0-9 oder A-F)."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beispiel: ",(0,r.kt)("inlineCode",{parentName:"p"},"1234A0xBC")),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"def transform_input(raw):\n    try:\n        zahl = int(raw[:4])\n        if zahl < 1000:\n            raise 'Zu kleine Zahl'\n        kategorie = raw[4]\n        hexa = int(raw[5:9], base=16)\n        return [zahl, kategorie, hexa]\n    except:\n        return False\n\neingabe = input('Geben Sie den Produktcode ein [Form 1234A0xBC]: ')\n\nprodukt = transform_input(eingabe)\nif produkt:\n    print('Produkt', produkt)\nelse:\n    print('Fehlerhafte Eingabe!')\n\n")))),(0,r.kt)("div",{parentName:"div",style:{},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"def transform_input(raw):\n    raw = raw.upper().strip()\n    if len(raw) != 9:\n        print('Eingabe zu wenig lang!')\n        return False\n    if not raw[:4].isnumeric():\n        print('Die ersten 4 Ziffern m\xfcssen Zahlen sein!')\n        return False\n    zahl = int(raw[:4])\n    if zahl < 1000:\n        print('Erste Ziffer muss gr\xf6sser 0 sein!')\n        return False\n    kategorie = raw[4]\n    if not kategorie.isalpha():\n        print('5. Zeichen muss ein Buchstabe sein!')\n        return False\n    raw_hexa = raw[-4:]\n    if raw_hexa[:2] != '0X':\n        print('Die letzten vier Zeichen m\xfcssen mit 0x beginnen')\n        return False\n    for h in raw_hexa[-2:]:\n        if h not in '0123456789ABCDEF':\n            print('Die letzten zwei Zeichen m\xfcssen Hexadezimalzahlen sein (0-9, A-F)')\n            return False\n    hexa = int(raw_hexa, base=16)\n    return [zahl, kategorie, hexa]\n\neingabe = input('Geben Sie den Produktcode ein [Form 1234A0xBC]: ')\nprodukt = transform_input(eingabe)\nif produkt:\n    print('Produkt', produkt)\nelse:\n    print('Fehlerhafte Eingabe!')\n"))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"obigen-code-analysieren"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Obigen Code analysieren?"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(g,{type:"state",webKey:"938ae28c-2db0-4a32-945f-5189398216b7",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Welche Variante ist praktischer f\xfcr die Programmierer:in?"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)(g,{type:"text",webKey:"e543b0b2-c32c-4187-a100-b91d370aebeb",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Welche Variante ist praktischer f\xfcr die Benutzer:in?"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)(g,{type:"text",webKey:"2b89be5e-f20b-4ffe-a744-35a5cb1b34fa",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was w\xe4re ein vern\xfcnftiger Mittelweg? Copy-Pasten Sie sich eine vern\xfcnftige Variante zusammen!"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=io.py id=c07ab12c-b818-4fe7-bc10-50ad051cbcc6",live_py:!0,title:"io.py",id:"c07ab12c-b818-4fe7-bc10-50ad051cbcc6"},"def transform_input(raw):\n    ...\n\neingabe = input('Geben Sie den Produktcode ein [Form 1234A0xBC]: ')\nprodukt = transform_input(eingabe)\nif produkt:\n    print('Produkt', produkt)\nelse:\n    print('Fehlerhafte Eingabe!')\n")))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"fazit"},"Fazit"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Benutzereingaben sind m\xfchsam..."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Finding")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es gibt keine klaren Regeln, welche Variante im Umgang mit Fehlern besser ist - entweder vorbeugen durch Sicherheitsabfragen oder Fehlerbehandlung mit ",(0,r.kt)("inlineCode",{parentName:"p"},"try-except"),". Die Wahl ist oft auch einfach durch die Philosophie des Programmierers bedingt. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um die Lesbarkeit und Wartbarkeit des Programms zu verbessern, k\xf6nnen Gewisse Richtlinien befolgt werden:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn der Fehler durch eine einfache ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"-Abfrage umgangen werden kann, ist dies meist die bessere L\xf6sung. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn die n\xf6tige(n) ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," Abfrage(n) um dem Fehler vorzubeugen, sehr lange und un\xfcbersichtlich w\xe4re, kann ein ",(0,r.kt)("inlineCode",{parentName:"p"},"try-except")," Block die bessere Wahl sein."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," Block sollte maximal ein par Zeilen beinhalten. Die Idee ist also nicht, ganze Funktionen in ein ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," packen!"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"... und es muss an jeden Edge-Case gedacht werden..."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"}),(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(61546).Z,width:"640",height:"725"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(k,{parentName:"figcaption",bib:{author:"pr3579",source:"https://www.reddit.com/r/ProgrammerHumor/comments/oxq5no/edge_cases_be_like/",licence:"",licence_url:"",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"})),(0,r.kt)("div",{parentName:"div",style:{},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"}),(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(11064).Z,width:"581",height:"690"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(k,{parentName:"figcaption",bib:{author:"iTechSun",source:"https://www.reddit.com/r/ProgrammerHumor/comments/ikb8o1/edge_cases/",licence:"",licence_url:"",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(l,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(g,{type:"state",webKey:"6f414fd4-1b91-4221-95ad-514d854b0c73",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie im NumTrip Spiel die Benutzereingaben, so dass auch bei fehlerhaften Eingaben das Programm nicht abst\xfcrzt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})))))}v.isMDXComponent=!0},61546:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/io-joke-1-6154307a9d629884a2fe18a006c081a0.webp"},11064:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/io-joke-2-36ad517e896de6d7dd4e478d6432d653.jpg"},83800:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/io-joke-3-f47711a63716d0e94efccd661f342314.webp"}}]);