"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[13837],{603905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return c}});var t=r(667294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=i,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||a;return r?t.createElement(g,l(l({ref:n},d),{},{components:r})):t.createElement(g,l({ref:n},d))}));function c(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},683965:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var t,i=r(583117),a=r(480102),l=(r(667294),r(603905)),o=(r(644996),["components"]),s={},p="Game-Runner",d={unversionedId:"Programmieren-1/Aufgaben/game_runner",id:"version-24i/Programmieren-1/Aufgaben/game_runner",title:"Game-Runner",description:"Auf https://game.gbsl.website lassen sich die erstellten Games hochladen und spielen. Mit einer kleinen Modifikation k\xf6nnen kann sogar der Punktestand einer Spielerin/Spielers in ein Scoreboard \xfcbernommen werden.",source:"@site/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/14_game_runner.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/game_runner",permalink:"/24i/Programmieren-1/Aufgaben/game_runner",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/14_game_runner.md",tags:[],version:"24i",sidebarPosition:14,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Game Basics - Sterne Fangen",permalink:"/24i/Programmieren-1/Aufgaben/game_basics"},next:{title:"Turtles",permalink:"/24i/category/turtles"}},u={},m=[{value:"Game Hochladen",id:"game-hochladen",level:2},{value:"Anzeigebild hinzuf\xfcgen",id:"anzeigebild-hinzuf\xfcgen",level:2},{value:"Spieloptimierungen",id:"spieloptimierungen",level:2},{value:"Codeoptimierung",id:"codeoptimierung",level:3},{value:"Wettbewerb \ud83e\udd47\ud83e\udd47\ud83e\udd47",id:"wettbewerb-",level:2}],c=(t="Figure",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),g={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"game-runner"},"Game-Runner"),(0,l.kt)("p",null,"Auf ",(0,l.kt)("a",{parentName:"p",href:"https://game.gbsl.website"},"https://game.gbsl.website")," lassen sich die erstellten Games hochladen und spielen. Mit einer kleinen Modifikation k\xf6nnen kann sogar der Punktestand einer Spielerin/Spielers in ein Scoreboard \xfcbernommen werden."),(0,l.kt)("p",null,"Im erstellten Spiel wurde (in den meisten F\xe4llen","*",") eine Funktion ",(0,l.kt)("inlineCode",{parentName:"p"},"set_score")," definiert, \xfcber welche jeweils der neue Score aktualisiert wurde. Um den Score nun auch im Scoreboard zu registrieren, muss dort ",(0,l.kt)("inlineCode",{parentName:"p"},"device.report(new_score)")," aufgerufen werden. Sofern der aktuelle Wert einen neuen Punkte-H\xf6chststand ist, wird er ans Scoreboard geschickt."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"def set_score(new_score):\n    global score\n    score = new_score\n    if score > 10 and level == 1:\n        level_2()\n    elif score < 20 and level == 2:\n        level_1()\n    device.update_text(\n        id='score',\n        text=f'Score: {score}'\n    )\n    device.report(score)\n")),(0,l.kt)("p",null,"*"," Falls keine ",(0,l.kt)("inlineCode",{parentName:"p"},"set_score")," Funktion verwendet wurde, muss \xfcberall dort, wo der ",(0,l.kt)("inlineCode",{parentName:"p"},"score")," ver\xe4ndert wird das ",(0,l.kt)("inlineCode",{parentName:"p"},"device.set_score(score)")," aufgerufen werden."),(0,l.kt)("h2",{id:"game-hochladen"},"Game Hochladen"),(0,l.kt)("p",null,"Ein Game kann als ",(0,l.kt)("inlineCode",{parentName:"p"},".zip")," Ordner hochgeladen werden. Der komprimierte Ordner enth\xe4lt genau ein Python-Programm (z.B. ",(0,l.kt)("inlineCode",{parentName:"p"},"game.py"),") und falls das Spiel Bilder und oder Sound enth\xe4lt, auch diese Ordner."),(0,l.kt)("p",null,"Die Ordnerstruktur k\xf6nnte also in etwa wie folgt aussehen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"game.zip\n    \u251c\u2500\u2500 game.py\n    \u251c\u2500\u2500 Bilder\n    \u2502   \u251c\u2500\u2500 hintergrund.png\n    \u2502   \u251c\u2500\u2500 ghost.gif\n    \u2502   \u2514\u2500\u2500 ghost_yellow.gif\n    \u2514\u2500\u2500 Sound\n        \u251c\u2500\u2500 booooom.mp3\n        \u2514\u2500\u2500 catch.mp3\n")),(0,l.kt)("h2",{id:"anzeigebild-hinzuf\xfcgen"},"Anzeigebild hinzuf\xfcgen"),(0,l.kt)(c,{options:{},mdxType:"Figure"},(0,l.kt)("img",{src:r(606612).Z,width:"846",height:"742"})),(0,l.kt)("p",null,"Es kann ein Anzeigebild f\xfcr das Game hochgeladen werden. Dazu wird dem Zip-Ordner ein Vorschaubild mit dem Namen ",(0,l.kt)("inlineCode",{parentName:"p"},"preview")," (z.b. ",(0,l.kt)("inlineCode",{parentName:"p"},"preview.png"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"preview.jpg")," oder ",(0,l.kt)("inlineCode",{parentName:"p"},"preview.gif"),") hinzugef\xfcgt. Die Ordnerstruktur sieht dann wie folgt aus:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Wichtig"),": Das Vorschaubild muss exakt den Namen ",(0,l.kt)("inlineCode",{parentName:"p"},"preview")," haben, sonst wird es nicht verwendet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"game.zip\n    \u251c\u2500\u2500 game.py\n    \u251c\u2500\u2500 preview.png\n    \u251c\u2500\u2500 Bilder\n    \u2502   \u251c\u2500\u2500 hintergrund.png\n    \u2502   \u251c\u2500\u2500 ghost.gif\n    \u2502   \u2514\u2500\u2500 ghost_yellow.gif\n    \u2514\u2500\u2500 Sound\n        \u251c\u2500\u2500 booooom.mp3\n        \u2514\u2500\u2500 catch.mp3\n")),(0,l.kt)("h2",{id:"spieloptimierungen"},"Spieloptimierungen"),(0,l.kt)("p",null,"Damit das Spiel schneller l\xe4dt, gibt es ein paar Tricks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"entfernen von allen nicht verwendeten Bildern und Sound-Tracks aus den Bilder/Sound Ordnern"),(0,l.kt)("li",{parentName:"ul"},"Die Bildergr\xf6sse verringern, indem die Aufl\xf6sung des Bildes heruntergesetzt wird (bspw. f\xfcr Hintergr\xfcnde auf eine Breite von ",(0,l.kt)("inlineCode",{parentName:"li"},"500px"),", f\xfcr kleine Objekte auf eine Breite von ",(0,l.kt)("inlineCode",{parentName:"li"},"200px"),"). ",(0,l.kt)("strong",{parentName:"li"},"Achtung"),": Durch die Reduktion der Aufl\xf6sung gehen Informationen verloren und das Bild kann u.U. verpixelt werden.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.maclife.de/ratgeber/aendern-bildgroesse-vorschau-app-10080447.html"},"Mac OSX: Vorschau App")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Fotos-verkleinern-in-Windows-10-so-geht-s-4114478.html#Fotos%20mit%20Paint%203D%20verkleinern"},"Windows 10: Paint 3D")))),(0,l.kt)("li",{parentName:"ul"},"Die Dateigr\xf6sse von Sound-Dateien reduzieren. Auch hier geht Soundqualit\xe4t verloren. Oft ist dies aber kaum sp\xfcrbar bei Smartphone/Laptop Lautsprechern. Diese Reduktion der Dateigr\xf6sse heisst ",(0,l.kt)("em",{parentName:"li"},"Komprimierung")," und kann bspw. mit einem Onlinetool gemacht werden:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.mp3smaller.com/"},"mp3smaller")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"Small File Size (MP3 Bitrate 32Kbps)")," w\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.onlineconverter.com/compress-mp3"},"compress-mp3")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"Quality: Best Compression")," w\xe4hlen")))),(0,l.kt)("h3",{id:"codeoptimierung"},"Codeoptimierung"),(0,l.kt)("p",null,"Wenn im Spiel mehrfach (daher auch an einem anderen Ort als ganz am Anfang) ",(0,l.kt)("inlineCode",{parentName:"p"},"device.clear_playground()")," steht, so k\xf6nnen bis auf den ersten Aufruf die Befehle zu ",(0,l.kt)("inlineCode",{parentName:"p"},"device.clean_playground()")," (mit einem ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," statt einem ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," am Ende) verwendet werden. Dies bewirkt, das die Bilder und Sound-Dateien nicht gel\xf6scht werden und somit nicht erneut hochgeladen werden m\xfcssen. Dazu m\xfcssen aber auch alle ",(0,l.kt)("inlineCode",{parentName:"p"},"device.configure_playground()")," Befehle (ausser der Erste!) angepasst werden und die ",(0,l.kt)("inlineCode",{parentName:"p"},"images=")," und ",(0,l.kt)("inlineCode",{parentName:"p"},"audio_tracks=")," Optionen entfernt werden. (Bemerke: Die Option ",(0,l.kt)("inlineCode",{parentName:"p"},"image=")," kann dennoch gesetzt werden.)"),(0,l.kt)("h2",{id:"wettbewerb-"},"Wettbewerb \ud83e\udd47\ud83e\udd47\ud83e\udd47"),(0,l.kt)("p",null,"In jeder Klasse werden Spiele und SpielerInnen pr\xe4miert:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Das am besten bewertete Spiel der Klasse"),(0,l.kt)("li",{parentName:"ul"},"Das am meisten gespielte Spiel der Klasse"),(0,l.kt)("li",{parentName:"ul"},"Die Spielerin/Der Spieler mit dem Highscore beim (gesamthaft) am besten bewerteten Spiel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Zeitraum"),": Montag 25.01.2021 bis Sonntag 31.01.2021"))}k.isMDXComponent=!0},606612:function(e,n,r){n.Z=r.p+"assets/images/preview-image-7d61877964bd2574386f9e0a28c406ed.png"}}]);