"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[60906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=l(n),c=a,u=d["".concat(s,".").concat(c)]||d[c]||o[c]||i;return n?r.createElement(u,A(A({ref:t},p),{},{components:n})):r.createElement(u,A({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,A=new Array(i);A[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,A[1]=m;for(var l=2;l<i;l++)A[l]=n[l];return r.createElement.apply(null,A)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>A,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_custom_props:{id:"61458f7e-3f61-4ba0-8017-55f246edd942"}},A="Nachbarzellen kombinieren",m={unversionedId:"Programmieren/NumTrip/felder-aufdecken",id:"version-24ef/Programmieren/NumTrip/felder-aufdecken",title:"Nachbarzellen kombinieren",description:"Wenn die Spieler:in ein Feld ausw\xe4hlt, m\xfcssen alle Nachbarszellen \xfcberpr\xfcft werden, ob Sie dieselbe Zahl enthalten und dann allenfalls kombiniert werden. Falls eine Nachbarszelle dieselbe Zahl enth\xe4lt, so m\xfcssen auch dessen Nachbarszellen \xfcberpr\xfcft werden, ob diese diese Zahl enthalten, usw.",source:"@site/versioned_docs/version-24ef/01-Programmieren/10-NumTrip/07-felder-aufdecken.md",sourceDirName:"01-Programmieren/10-NumTrip",slug:"/Programmieren/NumTrip/felder-aufdecken",permalink:"/24ef/Programmieren/NumTrip/felder-aufdecken",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:7,frontMatter:{sidebar_custom_props:{id:"61458f7e-3f61-4ba0-8017-55f246edd942"}},sidebar:"version-24ef/sidebar",previous:{title:"Spielstart & Eingabe",permalink:"/24ef/Programmieren/NumTrip/user-input"},next:{title:"Felder Auff\xfcllen",permalink:"/24ef/Programmieren/NumTrip/felder-auffuellen"}},s={},l=[{value:"Fl\xe4chen f\xfcllen",id:"fl\xe4chen-f\xfcllen",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},o=p("Comment"),d=p("Figure"),c=p("SourceRef"),u=p("Answer"),k={toc:l};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"nachbarzellen-kombinieren"},"Nachbarzellen kombinieren"),(0,a.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Wenn die Spieler:in ein Feld ausw\xe4hlt, m\xfcssen alle Nachbarszellen \xfcberpr\xfcft werden, ob Sie dieselbe Zahl enthalten und dann allenfalls kombiniert werden. Falls eine Nachbarszelle dieselbe Zahl enth\xe4lt, so m\xfcssen auch dessen Nachbarszellen \xfcberpr\xfcft werden, ob diese diese Zahl enthalten, usw."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Das Aufdecken der Nachbarschaft endet dort, wo ein Feld aufgedeckt wird, das in seiner Nachbarschaft keine gleiche Zahl enth\xe4lt."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    1   2   3   4   5                           1   2   3   4   5  \n  ---------------------                       ---------------------\n1 | 2 | 4 | 1 | 8 | 8 |                     1 | 2 | 4 | 1 | 8 | 8 |\n  ---------------------                       ---------------------\n2 | 4 | 2 | 8 | 4 | 1 |        S2, Z5       2 |   | 2 | 8 |   | 1 |\n  ---------------------       --------\x3e       ---------------------\n3 | 4 | 4 | 4 | 4 | 2 |                     3 |   |   |   |   | 2 |\n  ---------------------                       ---------------------\n4 | 2 | 8 | 1 | 4 | 1 |                     4 | 2 | 8 | 1 |   | 1 |\n  ---------------------                       ---------------------\n5 | 2 | 4 | 4 | 4 | 4 |                     5 | 2 |   |   |   |   |\n  ---------------------                       ---------------------\n")),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"fl\xe4chen-f\xfcllen"},"Fl\xe4chen f\xfcllen"),(0,a.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Dieses Problem ist ein bekanntes Problem aus der Computergrafik. Es tritt zum Beispiel auf, wenn in einer Rastergrafik eine begrenzte Fl\xe4che mit einer bestimmten Farbe gef\xfcllt werden soll."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Gesucht ist also ein Algorithmus, welcher diese Problem l\xf6st.\nWir lernen dabei eine neue Form von Algorithmen kennen, die ",(0,a.kt)("strong",{parentName:"p"},"Rekursion"),"."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(d,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(8170).Z,width:"144",height:"144"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(c,{parentName:"figcaption",bib:{author:"Andr\xe9 Karwath",source:"https://de.wikipedia.org/wiki/Floodfill#/media/Datei:Recursive_Flood_Fill_4_(aka).gif",licence:"CC BY-SA 2.5",licence_url:"https://creativecommons.org/licenses/by-sa/2.5/",edited:!1},mdxType:"SourceRef"}))),(0,a.kt)(o,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Die Grundidee ist folgende:"),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},'Das grosse Problem "ganze Fl\xe4che mit beliebigen Grenzen einf\xe4rben" wird zun\xe4chst reduziert auf das kleinstm\xf6gliche Problem, einen "einzelnen Pixel einf\xe4rben". Daf\xfcr programmieren wir eine Funktion.'),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Diese Funktion wird nun wie folgt erg\xe4nzt:\nIm Anschluss an das Einf\xe4rben des einen Pixels ruft sich die Funktion f\xfcr die Nachbarpixel selber wieder auf, so dass auch diese eingef\xe4rbt werden. Das geht immer so weiter, bis alle Pixel eingef\xe4rbt sind."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Diese sich selber Aufrufen wird als ",(0,a.kt)("strong",{parentName:"p"},"Rekursion")," bezeichnet."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Ganz wichtig dabei ist, zu verstehen, dass der erste Aufruf der Funktion erst dann beendet ist, wenn alle weiteren Aufrufe von sich selber beendet sind. Es entsteht bei der Rekursion also so etwas wie eine Kette von h\xe4ngigen Funktionsaufrufen, welche sich erst dann aufl\xf6st, wenn am Ende die Funktion sich nicht weiter selber aufruft."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Es braucht in der Funktion also eine Entscheidung, ob weitere Aufrufe der Funktion n\xf6tig sind. Beim Einf\xe4rben der Pixel, ist dies der Fall, wenn wir auf einen Pixel stossen, der die Farbe des Randes tr\xe4gt und somit nicht eingef\xe4rbt werden muss."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Fehlt diese Abbruchbedingung, oder ist sie falsch formuliert, l\xe4uft die Rekursion immer weiter. Die Kette der h\xe4ngigen Funktionsaufrufe wird immer l\xe4nger, bis irgendwann der Speicher des Computers aufgebraucht ist. Das ist die grosse Gefahr der Rekursion."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Der hier skizziert Algorithmus heisst Floodfill-Algorithmus. Eine sch\xf6ne Beschreibung, inkl. Python-Implementierung finden Sie hier: \ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Floodfill"},"https://de.wikipedia.org/wiki/Floodfill"),"."),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("div",{parentName:"div",className:"commentable"},(0,a.kt)("h5",{parentName:"div",id:"aufgabe"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe"),(0,a.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)(u,{type:"state",webKey:"a712a5eb-ec5a-4f9c-80f4-0fa444a3dc91",mdxType:"Answer"}),(0,a.kt)("div",{parentName:"div",className:"commentable"},(0,a.kt)("p",{parentName:"div"},'Studieren Sie den Abschnitt "Rekursive Implementierung" im Artikel und entscheiden Sie, welche der beiden Varianten f\xfcr das NumTrip Spiel ben\xf6tigt wird. Passen Sie dann die vorgeschlagene Python-Implementierung auf Ihre Situation im NumTrip-Spiel an.'),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,a.kt)("div",{parentName:"div",className:"commentable"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Wichtig"),': Vorerst "l\xf6schen" wir nur den Zelleninhalt aller Zellen Nachbarszellen (und deren Nachbarszellen), die denselben Zahlenwert enthalten wie die ausgew\xe4hlte Zelle.'),(0,a.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))))}f.isMDXComponent=!0},8170:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/gif;base64,R0lGODlhkACQAKIAAOatc+bm5v/AgP///wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQEyAAAACwAAAAAkACQAAAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcikLOJ/QqHRKrT4x1qx260QFBuCwWOwcm8PlszmAVa+/bjI8Dmaf5vQ0faDPt/d8eHF9g16AgYeEbnYWgouOaoqRhoCSZ5Zrf3uYY5xklJuQl6KZF6Sdp3KJoHmpaK51mq2JsHysg7WeaLK4tKt3vpW5vI/Bm7fFwr+NxrOVyJG5w6bNvc/AytnH1NrO2ybS1YvE0eKT2KHml+Sj6qXg7qjLFeHdhXdc+fpdpvv+Wl7+CaSCZaBBKNDa2RvHLd3Cc/AeKvxGL56qaxEdavTT0P+bx3sZPyajSKHeRpAlTIqEWFHim3kkVFojOUHmSI4hZ65c11GnT4Y5b/5kWdLiK5gjbJbD2PKkUKApjdaZxsylPKYxpSLCWlOrrljodr7kKkHpRJxRrV6kWdYr1bROl7KNYHbsXBAH8zKip9dgwL4I+wEePCWhXbRF1R5VDDaoXMRdGW+Ny9PxWZSJKR8eWhmu2E7sNj99jDmp19BXNaeGLKIu6J6jL8d+55kz7cyf1+beFdb266qqdfv+1Hv276a7p54uThoq7uGLg/O2LJpoZOnKJe/Nqh21cOPfrbdeDjz5ZPPbTXeH3by9bPEhCF8RLL8+kvr7mHDHfr60/g7/roXX2X8eBBgdawRqYGB2dyXI3nsQ3uaggm4hNaF3B0LX2IUUavcWhxgyiB6IGyzYn3MkIqfhifClSFeFZLn4oocWygiBiV/ZYiNf+HFxX4/yFRQkcxGutmJ6ba1HnZHgZYhikvwhGR+MUYbI4oDqRYmjlTlKiReVIz5YHZbj0aikik1uuB96W4rJZIsf4NhmeUca9maRAkoIZZhL5nnnmHrOWCWRgP5pKHF0pqljn066VyiiaDp63JpHzhkpntPVpmiXH17HZ0pAEiakqPiEmsWophJE6KGNkikomzV+aWaDDsgZa5xg+vdqpbcWmOuTu27aaZla9tqArTHKWmyy5Q8gSyuAv8JZa7SuKgsrs9POiqC1vGJ7LLWBciussQw4uy2u2up6I7iTZnnts+WyCyml43obb7rAiiupn/N62i28JaZqBaoCR/FXwVIQjDA/jIpYp5v8thouussCrIC56lL87rnZVswxtPhK+23I1Wr878f3epyxryRP3PHGK4Oscr7NypspvftK3O6eJ8fMAcY0v9xz0DLDTHTKRov8s81q+luvxRkArfQCUpfM8sxTX8z0oprm7PDRVG/tZZwLJ0xf2QzvqPbabLft9ttwxy333HTXbffdeOet99589+3334DnkAAAIfkEBMgAAAAsQABAABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsQABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsIABwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsIABgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsIABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsEABQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsEABgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsEABwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsMABAABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsQAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUABAABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUAAgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsUAAQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsYAAQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsYAAgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAsYAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAscAAwABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBBkAAAAscAAgABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAIfkEBMgAAAAscAAQABAAEAAAAyEIutwqMEr5poX1zqwj78LXiRp5mRa6ASDFttgLq65jKwkAOw=="}}]);