"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[80826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||l[u]||i;return n?r.createElement(k,m(m({ref:t},d),{},{components:n})):r.createElement(k,m({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,m=new Array(i);m[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,m[1]=o;for(var s=2;s<i;s++)m[s]=n[s];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={label:"Vom USB-Stick starten",sidebar_custom_props:{id:"aa61b6d6-743b-4cbe-a24c-71f430c63659"}},m="Vom USB-Stick starten",o={unversionedId:"Computer/praktikum/os-from-usb",id:"Computer/praktikum/os-from-usb",title:"Vom USB-Stick starten",description:"Damit ein Betriebssystem von einem USB-Stick geladen werden kann, muss",source:"@site/docs/Computer/05-praktikum/os-from-usb.md",sourceDirName:"Computer/05-praktikum",slug:"/Computer/praktikum/os-from-usb",permalink:"/Computer/praktikum/os-from-usb",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/05-praktikum/os-from-usb.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",frontMatter:{label:"Vom USB-Stick starten",sidebar_custom_props:{id:"aa61b6d6-743b-4cbe-a24c-71f430c63659"}},sidebar:"sidebar",previous:{title:"Benutzerverwaltung",permalink:"/Computer/os/Material/benutzerverwaltung"},next:{title:"Kryptow\xe4rhung",permalink:"/Cryptocurrency/Kryptowaehrung"}},p={},s=[{value:"Windows",id:"windows",level:2},{value:"Mac",id:"mac",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=d("Comment"),l=d("Figure"),u={toc:s},k="wrapper";function b(e){let{components:t,...i}=e;return(0,a.kt)(k,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"vom-usb-stick-starten"},"Vom USB-Stick starten"),(0,a.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Damit ein Betriebssystem von einem USB-Stick geladen werden kann, muss"),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"die Startreihenfolge (",(0,a.kt)("em",{parentName:"p"},"Boot Order"),") so eingestellt werden, dass der Computer zuerst die USB-Eing\xe4nge nach Startf\xe4higem Speicher \xfcberpr\xfcft"),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("div",{parentName:"li",className:"commentable"},(0,a.kt)("p",{parentName:"div"},"der USB-Stick muss startf\xe4hig (",(0,a.kt)("em",{parentName:"p"},"bootf\xe4hig"),") sein."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Das kostenlose und wohl bekannteste Linux-Betriebssystem heisst Ubuntu und kann ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/desktop"},"hier")," heruntergeladen werden."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Die einfachste Variante um das heruntergeladene Betriebssystem auf einem USB-Stick startf\xe4hig zu machen, ist ",(0,a.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),"."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(l,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"balenaEtcher",src:n(73466).Z,width:"1824",height:"1184"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"balenaEtcher",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,a.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Mit diesem Programm kann eine Abbilddatei eines Betriebssystems (Dateierweiterung ",(0,a.kt)("inlineCode",{parentName:"p"},".iso"),") auf einen USB Stick geschrieben werden. Dabei wird der USB Stick formatiert und ",(0,a.kt)("strong",{parentName:"p"},"s\xe4mtliche Inhalte des USBs gehen verloren"),". Beim Formatieren werden zudem mehrere Speicheraufteilungen vorgenommen (sog. ",(0,a.kt)("em",{parentName:"p"},"Partitionen"),"), so dass der USB-Stick ohne erneute Formatierung nicht mehr als herk\xf6mmliches Speichermedium benutzt werden kann."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Sobald das Betriebssystem auf den USB Stick geschrieben wurde, kann im BIOS die Startreihenfolge so eingestellt werden, dass nun vom USB gebootet wird."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"windows"},"Windows"),(0,a.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Bei Windows muss oft nicht der Weg \xfcber das BIOS gegangen werden. Es reicht, wenn man sich als ",(0,a.kt)("strong",{parentName:"p"},"Administrator")," anmeldet, und anschliessend einen Erweiterten Start durchf\xfchrt:"),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Bei den Einstellungen auf ",(0,a.kt)("inlineCode",{parentName:"p"},"Update und Sicherheit -> Wiederherstellung")," und dort die erweiterten Startoptionen ausw\xe4hlen. Dann erscheint der folgende Screen, wo der Start von einem USB-Stick gew\xe4hlt werden kann:"),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(l,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(64289).Z,width:"761",height:"448"})),(0,a.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"mac"},"Mac"),(0,a.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Unter Mac OS X ist es etwas kniffliger, deshalb hier nur der Link auf eine Anleitung zum Starten des USB's (Abschnitt \"Booting the Drive\"). Das Erstellen des USB's funktioniert aber auch am einfachsten mit balenaEtcher."),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/213396/how-to-boot-a-linux-live-usb-drive-on-your-mac/"},"https://www.howtogeek.com/213396/how-to-boot-a-linux-live-usb-drive-on-your-mac/")),(0,a.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))}b.isMDXComponent=!0},73466:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/balenaEtcher-19d06669c319a1e56ff9bc61e8fb2b65.png"},64289:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/use-a-device-7653f0c8a10bec973473e6ecb7010a7e.png"}}]);