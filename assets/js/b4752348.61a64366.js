"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7434],{3905:(e,n,a)=>{a.d(n,{Zo:()=>o,kt:()=>u});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):m(m({},n),e)),a},o=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||l[u]||i;return a?t.createElement(h,m(m({ref:n},o),{},{components:a})):t.createElement(h,m({ref:n},o))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,m=new Array(i);m[0]=c;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,m[1]=d;for(var s=2;s<i;s++)m[s]=a[s];return t.createElement.apply(null,m)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},32296:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var t=a(83117),r=(a(67294),a(3905));const i={sidebar_custom_props:{id:"f20b6803-3b70-40cd-8ba8-3f9be83b2a7d"}},m="\u2b50 Daten speichern & laden",d={unversionedId:"Programmieren/NumTrip/load-data",id:"version-24ef/Programmieren/NumTrip/load-data",title:"\u2b50 Daten speichern & laden",description:"Das NumTrip Spiel startet derzeit jedesmal wenn wir es starten von neuem. Das heisst, der Spielstand des letzten Spiels wurde nicht gespeichert. Die spielende Person muss also entweder jedes Spiel in einem Zug durchspielen, oder verliert Ihren Fortschritt.",source:"@site/versioned_docs/version-24ef/01-Programmieren/10-NumTrip/06-load-data.md",sourceDirName:"01-Programmieren/10-NumTrip",slug:"/Programmieren/NumTrip/load-data",permalink:"/24ef/Programmieren/NumTrip/load-data",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:6,frontMatter:{sidebar_custom_props:{id:"f20b6803-3b70-40cd-8ba8-3f9be83b2a7d"}},sidebar:"version-24ef/sidebar",previous:{title:"Spielstart & Eingabe",permalink:"/24ef/Programmieren/NumTrip/user-input"},next:{title:"Nachbarzellen kombinieren",permalink:"/24ef/Programmieren/NumTrip/felder-aufdecken"}},p={},s=[{value:"Wie funktioniert speichern?",id:"wie-funktioniert-speichern",level:2},{value:"In Python ",id:"in-python-",level:2},{value:"Speichern",id:"speichern",level:3},{value:"Laden",id:"laden",level:3},{value:"Ausprobieren",id:"ausprobieren",level:2}],o=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},l=o("Comment"),c=o("Figure"),u=o("Answer"),h={toc:s};function k(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"-daten-speichern--laden"},"\u2b50 Daten speichern & laden"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das NumTrip Spiel startet derzeit jedesmal wenn wir es starten von neuem. Das heisst, der Spielstand des letzten Spiels wurde nicht gespeichert. Die spielende Person muss also entweder jedes Spiel in einem Zug durchspielen, oder verliert Ihren Fortschritt. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Moderne Programme und Spiele haben meistens die M\xf6glichkeit, Daten und Informationen permanent zu speichern. Das bedeutet, die Daten sind auch nach dem stoppen und Neustarten des Programms noch vorhanden. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"wie-funktioniert-speichern"},"Wie funktioniert speichern?"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn wir in Python eine Variable generieren wird diese im Arbeitsspeicher (RAM) des Rechners gespeichert. Wie Ihr bestimmt wisst, ist der Arbeitsspeicher ",(0,r.kt)("em",{parentName:"p"},"fl\xfcchtig"),". Das heisst, wenn der Computer ausgeschalten wird oder das Programm beendet wird gehen die Informationen verloren. Der einzige Speicher, der auch nach einem Neustart noch vorhanden ist, ist die ",(0,r.kt)("em",{parentName:"p"},"Festplatte")," (z.B. SSD). Wir brauchen also eine M\xf6glichkeit, die wichtigsten Informationen auf die Festplatte zu speichern. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Typischerweise funktioniert dies durch Dateien auf dem Computer. Ihr kennt das schon von anderen Programmen. Wenn Ihr z.B. im Word eine Textdatei bearbeitet, werdet Ihr beim speichern gefragt wo die Datei gespeichert werden sollte und wie sie heissen soll. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{parentName:"Figure",src:"https://support.content.office.net/de-de/media/c587dc7a-7860-48d5-af26-6e275de6f57a.png",alt:"Referenzen",title:""}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Referenzen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nachdem dieser Dialog ausgef\xfchrt wird ist die Datei permanent auf der Festplatte gespeichert und kann auch wieder aufgerufen werden."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"in-python-"},"In Python ",(0,r.kt)("i",{parentName:"h2",className:"mdi-language-python mdi "})),(0,r.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Programmiersprachen verwenden oft sogenannte ",(0,r.kt)("em",{parentName:"p"},"standardisierte Dateiformate")," um Daten zu Speichern. Diese sind nichts anderes, als eine Abmachung dar\xfcber, in welchem Format die Datei gespeichert ist. Wenn Ihr an das Beispiel der Word Datei zur\xfcckdenkt f\xe4llt euch bestimmt auf, das diese Dateien z.B. die Endung ",(0,r.kt)("em",{parentName:"p"},".docx")," haben. Dies dient dem Zweck, dass andere Programme wissen, in welchem Format die Informationen in dieser Datei gespeichert sind, und wie sie beim \xf6ffnen interpretiert werden sollten."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein solches Dateiformat ist ",(0,r.kt)("strong",{parentName:"p"},"JSON"),". Dieses kommt urspr\xfcnglich von der Programmiersprache ",(0,r.kt)("em",{parentName:"p"},"JavaScript"),", wurde mittlerweile aber in vielen anderen Sprachen aufgenommen, unter anderem von Python. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn wir mit JSON arbeiten wollen, importieren wir das Modul dazu ganz einfach:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import json\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir k\xf6nnen aber nicht jegliche Variablen direkt in JSON speichern! Dazu ben\xf6tigen wir eine ",(0,r.kt)("em",{parentName:"p"},"Datensammlung"),":"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"daten = {}\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In diese Datensammlung k\xf6nnen wir nun unsere Variablen hineinschreiben. Im folgenden Beispiel wird der Inhalt der Variable ",(0,r.kt)("inlineCode",{parentName:"p"},"spielfeld")," in die Datensammlung ",(0,r.kt)("inlineCode",{parentName:"p"},"daten")," unter dem Namen ",(0,r.kt)("inlineCode",{parentName:"p"},"spielfeld")," geschrieben:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"daten['spielfeld'] = spielfeld\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir k\xf6nnen beliebig viele Variablen in die selbe Datensammlung packen:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# selbe Datensammlung 'daten' wie oben\ndaten['hoehe'] = hoehe\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"speichern"},"Speichern"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn die Datensammlung alle Informationen enth\xe4lt, die wir speichern wollen, k\xf6nnen wir diese nun sehr einfach in eine Datei schreiben:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"dateiname = 'numtrip.json'\ndaten = {}\nwith open(dateiname, 'w') as f:\n        json.dump(daten, f)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der ",(0,r.kt)("inlineCode",{parentName:"p"},"dateiname")," ist das selbe, was wir bei Word beim speichern angeben - Der Name der Datei auf dem Computer. Die Option ",(0,r.kt)("inlineCode",{parentName:"p"},"'w'")," steht f\xfcr ",(0,r.kt)("em",{parentName:"p"},"write")," (schreiben) und bedeutet, dass wir die Datei bearbeiten wollen. Das ",(0,r.kt)("inlineCode",{parentName:"p"},"as datei")," bedeutet, dass wir im Programm unter dem Namen ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," (f\xfcr ",(0,r.kt)("inlineCode",{parentName:"p"},"file"),") auf die ge\xf6ffnete Datei zugreifen k\xf6nnen. "),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie sehen, dass nach der Zeile, welche die Datei \xf6ffnet, ein Doppelpunkt und ein einger\xfcckter Block folgt. Wir k\xf6nnen in diesem einger\xfcckten Block mit der Datei arbeiten. Sobald wir den einger\xfcckten Block verlassen, wird die Datei gespeichert und wir haben keinen Zugriff mehr darauf, bis wir sie erneut \xf6ffnen."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Letztendlich gibt es nur noch die Zeile ",(0,r.kt)("inlineCode",{parentName:"p"},"json.dump(daten, datei)"),". Diese sagt dem JSON Modul, dass es die Datensammlung ",(0,r.kt)("inlineCode",{parentName:"p"},"daten")," in die ge\xf6ffnete Datei ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," speichern soll."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"laden"},"Laden"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn wir Informationen in eine Datei gespeichert haben, m\xf6chten wir diese nat\xfcrlich auch wider ins Programm laden. Dies funktioniert ebenfalls sehr \xe4hnlich:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"with open(dateiname) as f:\n        daten = json.load(f)\n        spielfeld = daten['spielfeld']\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Achtet darauf, dass wir hier auch die ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," funktion von Python benutzen um die Datei zu \xf6ffnen, dieses mal fehlt aber die option ",(0,r.kt)("inlineCode",{parentName:"p"},"w"),". Da wir die Daten nur lesen und laden wollen, ben\xf6tigen wir nicht die Schreibrechte. Die Datei ist jetzt also im ",(0,r.kt)("em",{parentName:"p"},"schreibgesch\xfctzten")," Modus ge\xf6ffnet. Mit der offenen datei k\xf6nnen wir die Informationen ganz einfach mit Hilfe des JSON moduls wieder in eine Datensammlung laden (",(0,r.kt)("inlineCode",{parentName:"p"},"daten"),").\nNun m\xfcssen wir nur noch die Informationen aus der Datensammlung in unsere Variablen kriegen. Auf die Eintr\xe4ge in einer Datensammlung wird mit der Notation ",(0,r.kt)("inlineCode",{parentName:"p"},"meine_datensammlung['mein_eintrag']")," zugegriffen."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"ausprobieren"},"Ausprobieren"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(u,{type:"state",webKey:"6436d3e7-6f0a-4600-af53-4e0a8c8cf8c7",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Dateiname\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/io/1-daten-speichern.py")),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"EF-Informatik/exercises/io/2-daten-laden.py"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verwenden Sie untenstehende Code-Snippets ",(0,r.kt)("inlineCode",{parentName:"p"},"daten_speichern.py")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"daten_laden.py")," und f\xfchren Sie diese auf Ihrem Computer aus. Achten Sie darauf, dass beide im selben Ordner auf Ihrem Computer sind."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfchren Sie das Snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"daten_speichern.py")," aus. Finden sie die entstandene Datei auf ihrem Computer und schauen Sie sich deren Inhalt in einem Text-Editor an (z.B. VSCode, Notepad, etc.)."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfchren Sie das Snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"daten_laden.py")," aus und schauen Sie sich den Output auf der Kommandozeile an."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bonus: \xd6ffnen Sie die Datei erneut im Text Editor und ver\xe4ndern Sie die Teilnehmerliste: Ver\xe4ndern Sie einen Namen, l\xf6schen sie einen, oder f\xfcgen Sie einen hinzu. F\xfchren Sie danach erneut das Snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"daten_laden.py")," aus. Was f\xe4llt Ihnen auf?"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})))),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import json\n\ndef laden(dateiname):\n    with open(dateiname) as f:\n        datensammlung = json.load(f)\n        return datensammlung['teilnehmer:innen']\n\nteilnehmer = laden('daten.json')\nprint(teilnehmer)\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import json\n\n\ndef speichern(teilnehmer, dateiname):\n\n    datensammlung = {}\n    datensammlung['teilnehmer:innen'] = teilnehmer\n\n    with open(dateiname, 'w') as f:\n        json.dump(datensammlung, f)\n\n\nteilnehmer = ['Anna', 'Bob', 'Theo', 'Karim', 'Robert']\n\nspeichern(teilnehmer, 'daten.json')\n\n")))))}k.isMDXComponent=!0}}]);