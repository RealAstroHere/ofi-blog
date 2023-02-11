"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[18476],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>c});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),l=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},s=function(e){var a=l(e.components);return t.createElement(d.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},_=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),_=l(n),c=r,N=_["".concat(d,".").concat(c)]||_[c]||o[c]||i;return n?t.createElement(N,m(m({ref:a},s),{},{components:n})):t.createElement(N,m({ref:a},s))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,m=new Array(i);m[0]=_;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var l=2;l<i;l++)m[l]=n[l];return t.createElement.apply(null,m)}return t.createElement.apply(null,n)}_.displayName="MDXCreateElement"},93249:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=n(83117),r=(n(67294),n(3905));const i={image:"./images/hangman.png",sidebar_custom_props:{id:"55b1da57-268c-415b-abce-5203e155afac"}},m="Hangman",p={unversionedId:"EF-Software-Engineering/Hangman",id:"EF-Software-Engineering/Hangman",title:"Hangman",description:"Bottom-up Funktionen",source:"@site/docs/EF-Software-Engineering/02-Hangman.md",sourceDirName:"EF-Software-Engineering",slug:"/EF-Software-Engineering/Hangman",permalink:"/EF-Software-Engineering/Hangman",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Software-Engineering/02-Hangman.md",tags:[],version:"current",lastUpdatedAt:1666958902,formattedLastUpdatedAt:"28. Okt. 2022",sidebarPosition:2,frontMatter:{image:"./images/hangman.png",sidebar_custom_props:{id:"55b1da57-268c-415b-abce-5203e155afac"}},sidebar:"sidebar",previous:{title:"Techniken im Software Engineering",permalink:"/EF-Software-Engineering/Techniken"},next:{title:"Excel",permalink:"/Excel/"}},d={image:n(17730).Z},l=[{value:"Bottom-up Funktionen",id:"bottom-up-funktionen",level:2},{value:"Funktionen",id:"funktionen",level:3},{value:"Funktionsk\xf6rper",id:"funktionsk\xf6rper",level:3},{value:"Variablen",id:"variablen",level:3},{value:"\u2b50 Zuf\xe4llige W\xf6rter generieren",id:"-zuf\xe4llige-w\xf6rter-generieren",level:2},{value:"\u2b50 Hangman ASCII-Bilder",id:"-hangman-ascii-bilder",level:2}],s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},o=s("Comment"),_=s("Figure"),c=s("Answer"),N=s("Solution"),k={toc:l};function g(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},k,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"hangman"},"Hangman"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(_,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(17730).Z,width:"962",height:"535"})),(0,r.kt)(o,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"bottom-up-funktionen"},"Bottom-up Funktionen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"funktionen"},"Funktionen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{style:{alignItems:"flex-end"},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def show():\n    pass\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def is_valid(inp):\n    return True\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def eingabe():\n    pass\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def auswerten(valid_inp):\n    pass\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def gewonnen():\n    return False\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def game_over():\n    pass\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def play():\n    pass\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"funktionsk\xf6rper"},"Funktionsk\xf6rper"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{style:{alignItems:"flex-end"},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"for buchstabe in gesucht:\n    if buchstabe not in gefunden:\n        return False\nreturn True\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"if valid_inp in gesucht:\n    gefunden.append(valid_inp)\nelse:\n    falsch_geraten.append(valid_inp)\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"buchstabe = input('Buchstabe? ')\nwhile not is_valid(buchstabe):\n    buchstabe = input('Buchstabe? ')\nreturn buchstabe.lower()\n")))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"360px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image code__card card__body"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"print('Falsche Buchstaben:', falsch_geraten)\nfor buchstabe in gesucht:\n    if buchstabe in gefunden:\n        print(buchstabe, end=' ')\n    else:\n        print('_', end=' ')\nprint('')\n"))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"variablen"},"Variablen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Variablen\ngesucht = 'test'\n\ngefunden = []\nfalsch_geraten = []\n")),(0,r.kt)("admonition",{title:"Hangman",type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"d4a9b21d-e021-4b0c-8a49-29f4b0343037",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Dateiname\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/hangman.py"))),(0,r.kt)(o,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ordnen Sie die vorhandenen Funktionsk\xf6rper den richtigen Funktionsdefinitionen zu und f\xfcgen Sie die Variablen ganz oben im Skript ein."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wo werden die verschiedenen Variablen verwendet? Was wird darin gespeichert?"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Kommentieren Sie die Funktionen. Was machen Sie?"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei Eingaben: Was f\xfcr Parameter werden erwartet?"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei R\xfcckgabewerten: Was wird zur\xfcckgegeben"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Machen Sie einen ersten Commit"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Implementieren Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"play")," gem\xe4ss dem Top-down Entwurf"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Implementieren Sie die Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"game_over"),". Die Funktion gibt ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," zur\xfcck, falls mehr als 10 mal falsch geraten wurde oder falls das Spiel gewonnen wurde."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Spiel funktioniert \ud83e\udd73 Doch was soll passieren, wenn mehr als ein Buchstabe oder eine Zahl eingegeben wird? Setzen Sie diese Richtlinien in der Funktionen ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid")," um. Folgender Link k\xf6nnte hilfreich sein"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html#str.isalpha"},"https://docs.python.org/3/library/stdtypes.html#str.isalpha")),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Commit & Push"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\u2b50 Generieren Sie zuf\xe4llige W\xf6rter: ",(0,r.kt)("a",{parentName:"p",href:"#-zuf%C3%A4llige-w%C3%B6rter-generieren"},"\ud83d\udc49 Zuf\xe4llige W\xf6rter")),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\u2b50 Zeigen Sie ASCII-Bilder f\xfcr den Spielstand an: ",(0,r.kt)("a",{parentName:"p",href:"#-hangman-ascii-bilder"},"\ud83d\udc49 ASCII-Bilder")),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Markieren Sie die Aufgabe als erledigt."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))),(0,r.kt)(N,{webKey:"1fbc3641-2ce5-44b0-965f-1ee88cb427cd",title:"play()",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def play():\n    while not game_over():\n        show()\n        inp = eingabe()\n        auswerten(inp)\n    if gewonnen():\n        print('Gewonnen :)')\n    else:\n        print('Verloren :(', gesucht)\n"))),(0,r.kt)(N,{webKey:"749e7a03-c454-4b6e-9948-7f008d45b117",title:"game_over()",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def game_over():\n    if len(falsch_geraten) > 10:\n        return True\n    return gewonnen()\n"))),(0,r.kt)(N,{webKey:"8b29fa01-6dab-4d69-9195-322d4f922de5",title:"is_valid()",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def is_valid(inp):\n    if len(inp) != 1:\n        return False;\n    return inp.isalpha()\n")))),(0,r.kt)("admonition",{title:"Erneut Spielen",type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"d30992cb-4781-4f87-ba31-4030b4293095",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sobald man verloren hat, soll man gefragt werden, ob man erneut spielen m\xf6chte."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Weiterspielen\n"),(0,r.kt)("dd",{parentName:"dl"},"1) Neues Wort setzen (siehe Kapitel Zuf\xe4llige W\xf6rter generieren)"),(0,r.kt)("dd",{parentName:"dl"},"2) Spielst\xe4nde zur\xfccksetzen"),(0,r.kt)("dd",{parentName:"dl"},"3) Wieder spielen"),(0,r.kt)("dt",{parentName:"dl"},"Programm beenden\n"),(0,r.kt)("dd",{parentName:"dl"},"mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"dd"},"exit()")," das ganze Programm sofort beenden")),(0,r.kt)(o,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"-zuf\xe4llige-w\xf6rter-generieren"},"\u2b50 Zuf\xe4llige W\xf6rter generieren"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um zuf\xe4llige, deutsche W\xf6rter zu generieren, kann man die Bibliothek ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MaximilianFreitag/Zufallswort"},"zufallsworte")," installieren, indem im Python-Terminal von VS Code folgender Befehl eingegeben wird:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install zufallsworte\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Anschliessend kann wie folgt ein zuf\xe4lliges Wort abgefragt werden:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import zufallsworte as zufall\n\nwort = zufall.zufallswoerter(1)[0]  # gibt ein Zufallswort zur\xfcck\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"-hangman-ascii-bilder"},"\u2b50 Hangman ASCII-Bilder"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"\nHANGMANS_RAW = ''' 18 Zeichen ergeben ein Bild...\n                                         __________        __________        __________        __________        __________        __________        __________        __________        __________     \n                       |                 |                 |/                |/        |       |/        |       |/        |       |/        |       |/        |       |/        |       |/        |    \n                       |                 |                 |                 |                 |         O       |         O       |         O       |         O       |         O       |         O    \n                       |                 |                 |                 |                 |                 |         |       |        -|       |        -|       |        -|-      |        -|-   \n                       |                 |                 |                 |                 |                 |                 |                 |          \\      |          \\      |        / \\   \n                       |                 |                 |                 |                 |                 |                 |                 |                 |                 |  GAME OVER   \n    _________         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______         _|_______     \n___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ ___/         \\___ \n'''.split('\\n')[1:-1] # ohne erste und letzte Zeile\n\n# enth\xe4lt 11 ASCII-Bilder, f\xfcr jeden Spiel-Zustand einen\nHANGMANS = ['\\n'.join([line[i : i + 18] for line in HANGMANS_RAW]) for i in range(0, 11 * 18, 18)]\n\ndef get_hangman(nr):\n    '''\n    nr: int values from 0 to 10\n    '''\n    return HANGMANS[nr]\n\nprint(get_hangman(6))\n")))}g.isMDXComponent=!0},17730:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/hangman-afbdcc883fedc9abd7c8aaf52f19af98.png"}}]);