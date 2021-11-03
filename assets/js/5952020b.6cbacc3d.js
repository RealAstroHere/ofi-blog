"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9438],{13919:function(e,n,r){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function t(e){return void 0!==e&&!i(e)}r.d(n,{b:function(){return i},Z:function(){return t}})},44996:function(e,n,r){r.d(n,{C:function(){return a},Z:function(){return l}});var i=r(52263),t=r(13919);function a(){var e=(0,i.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,i){var a=void 0===i?{}:i,l=a.forcePrependBaseUrl,o=void 0!==l&&l,s=a.absolute,d=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,t.b)(r))return r;if(o)return n+r;var u=r.startsWith(n)?r:n+r.replace(/^\//,"");return d?e+u:u}(a,r,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},18561:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var i=r(87462),t=r(63366),a=(r(67294),r(3905)),l=r(26626),o=(r(44996),["components"]),s={},d="Game-Runner",u={unversionedId:"Programmieren-1/Aufgaben/game_runner",id:"version-24K/Programmieren-1/Aufgaben/game_runner",isDocsHomePage:!1,title:"Game-Runner",description:"Auf https://game.gbsl.website lassen sich die erstellten Games hochladen und spielen. Mit einer kleinen Modifikation k\xf6nnen kann sogar der Punktestand einer Spielerin/Spielers in ein Scoreboard \xfcbernommen werden.",source:"@site/versioned_docs/version-24K/04-Programmieren-1/Aufgaben/14_game_runner.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/game_runner",permalink:"/24K/Programmieren-1/Aufgaben/game_runner",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/04-Programmieren-1/Aufgaben/14_game_runner.md",tags:[],version:"24K",sidebarPosition:14,frontMatter:{},sidebar:"version-24K/sidebar",previous:{title:"Game Basics - Sterne Fangen",permalink:"/24K/Programmieren-1/Aufgaben/game_basics"},next:{title:"Ein Python Algorithmus",permalink:"/24K/Programmieren-1/Turtles/intro"}},p=[{value:"Game Hochladen",id:"game-hochladen",children:[],level:2},{value:"Anzeigebild hinzuf\xfcgen",id:"anzeigebild-hinzuf\xfcgen",children:[],level:2},{value:"Spieloptimierungen",id:"spieloptimierungen",children:[{value:"Codeoptimierung",id:"codeoptimierung",children:[],level:3}],level:2},{value:"Wettbewerb \ud83e\udd47\ud83e\udd47\ud83e\udd47",id:"wettbewerb-",children:[],level:2}],m={toc:p};function g(e){var n=e.components,s=(0,t.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"game-runner"},"Game-Runner"),(0,a.kt)("p",null,"Auf ",(0,a.kt)("a",{parentName:"p",href:"https://game.gbsl.website"},"https://game.gbsl.website")," lassen sich die erstellten Games hochladen und spielen. Mit einer kleinen Modifikation k\xf6nnen kann sogar der Punktestand einer Spielerin/Spielers in ein Scoreboard \xfcbernommen werden."),(0,a.kt)("p",null,"Im erstellten Spiel wurde (in den meisten F\xe4llen","*",") eine Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"set_score")," definiert, \xfcber welche jeweils der neue Score aktualisiert wurde. Um den Score nun auch im Scoreboard zu registrieren, muss dort ",(0,a.kt)("inlineCode",{parentName:"p"},"device.report(new_score)")," aufgerufen werden. Sofern der aktuelle Wert einen neuen Punkte-H\xf6chststand ist, wird er ans Scoreboard geschickt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def set_score(new_score):\n    global score\n    score = new_score\n    if score > 10 and level == 1:\n        level_2()\n    elif score < 20 and level == 2:\n        level_1()\n    device.update_text(\n        id='score',\n        text=f'Score: {score}'\n    )\n    device.report(score)\n")),(0,a.kt)("p",null,"*"," Falls keine ",(0,a.kt)("inlineCode",{parentName:"p"},"set_score")," Funktion verwendet wurde, muss \xfcberall dort, wo der ",(0,a.kt)("inlineCode",{parentName:"p"},"score")," ver\xe4ndert wird das ",(0,a.kt)("inlineCode",{parentName:"p"},"device.set_score(score)")," aufgerufen werden."),(0,a.kt)("h2",{id:"game-hochladen"},"Game Hochladen"),(0,a.kt)("p",null,"Ein Game kann als ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," Ordner hochgeladen werden. Der komprimierte Ordner enth\xe4lt genau ein Python-Programm (z.B. ",(0,a.kt)("inlineCode",{parentName:"p"},"game.py"),") und falls das Spiel Bilder und oder Sound enth\xe4lt, auch diese Ordner."),(0,a.kt)("p",null,"Die Ordnerstruktur k\xf6nnte also in etwa wie folgt aussehen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"game.zip\n    \u251c\u2500\u2500 game.py\n    \u251c\u2500\u2500 Bilder\n    \u2502   \u251c\u2500\u2500 hintergrund.png\n    \u2502   \u251c\u2500\u2500 ghost.gif\n    \u2502   \u2514\u2500\u2500 ghost_yellow.gif\n    \u2514\u2500\u2500 Sound\n        \u251c\u2500\u2500 booooom.mp3\n        \u2514\u2500\u2500 catch.mp3\n")),(0,a.kt)("h2",{id:"anzeigebild-hinzuf\xfcgen"},"Anzeigebild hinzuf\xfcgen"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:r(1370).Z,mdxType:"Image"})),(0,a.kt)("p",null,"Es kann ein Anzeigebild f\xfcr das Game hochgeladen werden. Dazu wird dem Zip-Ordner ein Vorschaubild mit dem Namen ",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," (z.b. ",(0,a.kt)("inlineCode",{parentName:"p"},"preview.png"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"preview.jpg")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"preview.gif"),") hinzugef\xfcgt. Die Ordnerstruktur sieht dann wie folgt aus:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wichtig"),": Das Vorschaubild muss exakt den Namen ",(0,a.kt)("inlineCode",{parentName:"p"},"preview")," haben, sonst wird es nicht verwendet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"game.zip\n    \u251c\u2500\u2500 game.py\n    \u251c\u2500\u2500 preview.png\n    \u251c\u2500\u2500 Bilder\n    \u2502   \u251c\u2500\u2500 hintergrund.png\n    \u2502   \u251c\u2500\u2500 ghost.gif\n    \u2502   \u2514\u2500\u2500 ghost_yellow.gif\n    \u2514\u2500\u2500 Sound\n        \u251c\u2500\u2500 booooom.mp3\n        \u2514\u2500\u2500 catch.mp3\n")),(0,a.kt)("h2",{id:"spieloptimierungen"},"Spieloptimierungen"),(0,a.kt)("p",null,"Damit das Spiel schneller l\xe4dt, gibt es ein paar Tricks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"entfernen von allen nicht verwendeten Bildern und Sound-Tracks aus den Bilder/Sound Ordnern"),(0,a.kt)("li",{parentName:"ul"},"Die Bildergr\xf6sse verringern, indem die Aufl\xf6sung des Bildes heruntergesetzt wird (bspw. f\xfcr Hintergr\xfcnde auf eine Breite von ",(0,a.kt)("inlineCode",{parentName:"li"},"500px"),", f\xfcr kleine Objekte auf eine Breite von ",(0,a.kt)("inlineCode",{parentName:"li"},"200px"),"). ",(0,a.kt)("strong",{parentName:"li"},"Achtung"),": Durch die Reduktion der Aufl\xf6sung gehen Informationen verloren und das Bild kann u.U. verpixelt werden.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.maclife.de/ratgeber/aendern-bildgroesse-vorschau-app-10080447.html"},"Mac OSX: Vorschau App")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.heise.de/tipps-tricks/Fotos-verkleinern-in-Windows-10-so-geht-s-4114478.html#Fotos%20mit%20Paint%203D%20verkleinern"},"Windows 10: Paint 3D")))),(0,a.kt)("li",{parentName:"ul"},"Die Dateigr\xf6sse von Sound-Dateien reduzieren. Auch hier geht Soundqualit\xe4t verloren. Oft ist dies aber kaum sp\xfcrbar bei Smartphone/Laptop Lautsprechern. Diese Reduktion der Dateigr\xf6sse heisst ",(0,a.kt)("em",{parentName:"li"},"Komprimierung")," und kann bspw. mit einem Onlinetool gemacht werden:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mp3smaller.com/"},"mp3smaller")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Small File Size (MP3 Bitrate 32Kbps)")," w\xe4hlen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.onlineconverter.com/compress-mp3"},"compress-mp3")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Quality: Best Compression")," w\xe4hlen")))),(0,a.kt)("h3",{id:"codeoptimierung"},"Codeoptimierung"),(0,a.kt)("p",null,"Wenn im Spiel mehrfach (daher auch an einem anderen Ort als ganz am Anfang) ",(0,a.kt)("inlineCode",{parentName:"p"},"device.clear_playground()")," steht, so k\xf6nnen bis auf den ersten Aufruf die Befehle zu ",(0,a.kt)("inlineCode",{parentName:"p"},"device.clean_playground()")," (mit einem ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," statt einem ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," am Ende) verwendet werden. Dies bewirkt, das die Bilder und Sound-Dateien nicht gel\xf6scht werden und somit nicht erneut hochgeladen werden m\xfcssen. Dazu m\xfcssen aber auch alle ",(0,a.kt)("inlineCode",{parentName:"p"},"device.configure_playground()")," Befehle (ausser der Erste!) angepasst werden und die ",(0,a.kt)("inlineCode",{parentName:"p"},"images=")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"audio_tracks=")," Optionen entfernt werden. (Bemerke: Die Option ",(0,a.kt)("inlineCode",{parentName:"p"},"image=")," kann dennoch gesetzt werden.)"),(0,a.kt)("h2",{id:"wettbewerb-"},"Wettbewerb \ud83e\udd47\ud83e\udd47\ud83e\udd47"),(0,a.kt)("p",null,"In jeder Klasse werden Spiele und SpielerInnen pr\xe4miert:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Das am besten bewertete Spiel der Klasse"),(0,a.kt)("li",{parentName:"ul"},"Das am meisten gespielte Spiel der Klasse"),(0,a.kt)("li",{parentName:"ul"},"Die Spielerin/Der Spieler mit dem Highscore beim (gesamthaft) am besten bewerteten Spiel")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Zeitraum"),": Montag 25.01.2021 bis Sonntag 31.01.2021"))}g.isMDXComponent=!0},1370:function(e,n,r){n.Z=r.p+"assets/images/preview-image-7d61877964bd2574386f9e0a28c406ed.png"}}]);