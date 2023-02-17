"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[74538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,u=c["".concat(o,".").concat(k)]||c[k]||l[k]||i;return n?a.createElement(u,d(d({ref:t},p),{},{components:n})):a.createElement(u,d({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,d[1]=m;for(var s=2;s<i;s++)d[s]=n[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>N,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const i={sidebar_custom_props:{id:"17985a5c-152e-4d27-ae98-1da79fa518ef"}},d="Installation",m={unversionedId:"EF-IOT-Workshop/node-red/installation/index",id:"EF-IOT-Workshop/node-red/installation/index",title:"Installation",description:"Verwendete Dienste",source:"@site/docs/EF-IOT-Workshop/01-node-red/01-installation/index.md",sourceDirName:"EF-IOT-Workshop/01-node-red/01-installation",slug:"/EF-IOT-Workshop/node-red/installation/",permalink:"/EF-IOT-Workshop/node-red/installation/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-IOT-Workshop/01-node-red/01-installation/index.md",tags:[],version:"current",lastUpdatedAt:1676655719,formattedLastUpdatedAt:"17. Feb. 2023",frontMatter:{sidebar_custom_props:{id:"17985a5c-152e-4d27-ae98-1da79fa518ef"}},sidebar:"sidebar",previous:{title:"Node-RED",permalink:"/EF-IOT-Workshop/node-red/"},next:{title:"L\xf6ten",permalink:"/EF-IOT-Workshop/soldering/"}},o={},s=[{value:"Verwendete Dienste",id:"verwendete-dienste",level:2},{value:"Datenbank erstellen",id:"datenbank-erstellen",level:2},{value:"Node-RED auf Render.com installieren",id:"node-red-auf-rendercom-installieren",level:2},{value:"Installation \xdcberpr\xfcfen",id:"installation-\xfcberpr\xfcfen",level:2},{value:"Immer Online",id:"immer-online",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},l=p("Comment"),c=p("Figure"),k=p("Answer"),u={toc:s};function N(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"installation"},"Installation"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"verwendete-dienste"},"Verwendete Dienste"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Datenbank\n"),(0,r.kt)("dd",{parentName:"dl"},"PostgreSQL von ",(0,r.kt)("a",{parentName:"dd",href:"https://www.elephantsql.com/"},"ElephantSQL.com")),(0,r.kt)("dt",{parentName:"dl"},"Hosting Server\n"),(0,r.kt)("dd",{parentName:"dl"},"Plattform as a Service (PaaS) von ",(0,r.kt)("a",{parentName:"dd",href:"https://render.com/"},"Render.com"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir verwenden kostenlose Dienste, um Node-RED zu installieren. Diese Dienste bieten eine gewisse Anzahl von Ressourcen (z.B. Speicherplatz, Datenbanken, ...) kostenlos an. Sobald diese Ressourcen aufgebraucht sind, m\xfcssen Sie entweder auf eine kostenpflichtige Version upgraden oder auf einen anderen Anbieter ausweichen. Damit Node-RED durchgehend laufen kann, konfigurieren wir die Datenbank nicht bei render.com (dort wird sie nach 3 Monaten automatisch wieder abgeschalten), sondern bei ElephantSQL.com, wo eine Datenbank kostenlos zur Verf\xfcgung steht."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"datenbank-erstellen"},"Datenbank erstellen"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie sich einen kostenlosen Account bei ",(0,r.kt)("a",{parentName:"p",href:"https://www.elephantsql.com/"},"ElephantSQL.com")),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcber ",(0,r.kt)("strong",{parentName:"p",className:"underline"},(0,r.kt)("i",{parentName:"strong",className:"mdi-plus mdi "})," Create New Instance")," eine neue Datenbank erstellen:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Name\n"),(0,r.kt)("dd",{parentName:"dl"},"node-red"),(0,r.kt)("dt",{parentName:"dl"},"Plan\n"),(0,r.kt)("dd",{parentName:"dl"},"Tiny Turtle (Free)"),(0,r.kt)("dt",{parentName:"dl"},"Region\n"),(0,r.kt)("dd",{parentName:"dl"},"Region:EU-West-1 (Ireland)"),(0,r.kt)("dt",{parentName:"dl"},"Tags\n"),(0,r.kt)("dd",{parentName:"dl"},"(optional), bspw. ",(0,r.kt)("inlineCode",{parentName:"dd"},"render"))),(0,r.kt)(l,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Datenbank URL ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"postgres://",(0,r.kt)("a",{parentName:"strong",href:"mailto:...@lucky.db.elephantsql.com.."},"...@lucky.db.elephantsql.com.."),".")," kopieren - wir brauchen sie sp\xe4ter beim erstellen von Node RED."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(80785).Z,width:"2191",height:"805"})),(0,r.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"node-red-auf-rendercom-installieren"},"Node-RED auf Render.com installieren"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie sich einen kostenlosen Account bei ",(0,r.kt)("a",{parentName:"p",href:"https://render.com/"},"Render.com")),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Eine Node-RED Instanz mit einem kostenlosen Server von ",(0,r.kt)("a",{parentName:"p",href:"https://render.com"},"Render")," erzeugen, indem Sie auf den folgenden Link klicken:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("a",{href:"https://render.com/deploy?repo=https://github.com/lebalz/node-red-render-no-db"},(0,r.kt)("img",{src:"https://render.com/images/deploy-to-render-button.svg",alt:"Deploy to Render"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"(falls der Link nicht funktioniert: \ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/lebalz/node-red-render-no-db"},"https://render.com/deploy?repo=https://github.com/lebalz/node-red-render-no-db"),")"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("admonition",{parentName:"li",title:"Achtung",type:"caution"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Setzen Sie den Benutzernamen auf ",(0,r.kt)("strong",{parentName:"p"},"admin")," und w\xe4hlen Sie ein sicheres Passwort (Sie brauchen es jedesmal, wenn Sie auf Node-RED zugreifen wollen.)"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(32545).Z,width:"1512",height:"1141"})),(0,r.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nachdem Sie auf ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"Apply")," geklickt haben, dauert es ungef\xe4hr 5 Minuten, bis die Seite online gestellt ist. Auf Ihrem ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"Dashboard")," sehen Sie den aktuellen Fortschritt:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Sobald der Status auf `Deploy succeeded` bzw. `Available` steht, ist das Aufsetzen der Website fertig.",src:n(36262).Z,width:"1879",height:"547"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Sobald der Status auf ",(0,r.kt)("inlineCode",{parentName:"figcaption"},"Deploy succeeded")," bzw. ",(0,r.kt)("inlineCode",{parentName:"figcaption"},"Available")," steht, ist das Aufsetzen der Website fertig.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(l,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unter dem Web Service ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"node-red")," kann die URL, unter welcher Ihr pers\xf6nlicher Node-RED Dienst verf\xfcgbar ist, nachgeschaut werden:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(95488).Z,width:"1894",height:"691"})),(0,r.kt)(l,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Hat alles geklappt, k\xf6nnen Sie sich mit den selbst gew\xe4hlten Login-Daten aus dem ",(0,r.kt)("em",{parentName:"p"},"ersten Schritt")," einloggen:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{width:"350px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--width=350px",src:n(97626).Z,width:"895",height:"480"})),(0,r.kt)(l,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Hinweis"),": Nach dem ersten ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy succeeded")," dauert es beim ersten Zugriff auf die Webseite bis zu 2 Minuten, bis die Webseite angezeigt wird. Den Grund daf\xfcr erfahren Sie weiter unten."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"installation-\xfcberpr\xfcfen"},"Installation \xdcberpr\xfcfen"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Erster Flow erzeugen",type:"aufgabe"},(0,r.kt)(k,{type:"state",webKey:"5e83c82b-90cc-4cdf-819d-ad9bdffd3b99",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie Ihren ersten Flow und \xdcberpr\xfcfen Sie, das alles genau so funktioniert wie im Video:"),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("video",{style:{maxWidth:"100%"},controls:!0},(0,r.kt)("source",{src:n(98996).Z})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"immer-online"},"Immer Online"),(0,r.kt)(l,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um Rechenzeit und somit auch Kosten zu sparen, werden inaktive Server in einen Ruhezustand versetzt. Ein Server gilt als inaktiv, wenn er l\xe4nger als 15 Minuten keine Webseite mehr anzeigen musste. Um einen inaktiven Server zu aktivieren, dauert es bis zu 2 Minuten (dies ist der Grund, weshalb Sie im letzten Installationsschritt so lange auf das erste Anzeigen warten mussten). Damit unsere Flows st\xe4ndig aktiv bleiben, erzeugen wir einen Flow, welcher alle 5 Minuten die Startseite aufruft und somit verhindert, dass Node-RED in den Ruhezustand versetzt wird."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("video",{style:{maxWidth:"100%"},controls:!0},(0,r.kt)("source",{src:n(76626).Z}))),(0,r.kt)("admonition",{title:"KeepAlive umsetzen",type:"aufgabe"},(0,r.kt)(k,{type:"state",webKey:"7364675c-08f5-4653-9d9b-c256e7c8240b",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erzeugen Sie den ",(0,r.kt)("inlineCode",{parentName:"p"},"KeepAlive")," Flow und markieren Sie diese Aufgabe als erledigt."),(0,r.kt)(l,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))))}N.isMDXComponent=!0},98996:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/flow-1-7df421f6ecddbd022fc00e2efaded85f.mp4"},76626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/node-red-keep-running-7d77abcdd040c0651b1e6e01cbbd49bb.mp4"},80785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/elephant-db-33614ab22653fcdd4e7bf6f1b6cbc15a.png"},32545:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-red-install-01-eddc0a2e4f711c73e27f9361dc5f3e1e.png"},36262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-red-install-02-ee453768def5f2c754d4ab86b1e25a90.png"},95488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-red-install-03-df2735e00971e335a90bcd12f9b1a310.png"},97626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-red-login-screen-4eb3a5a540ad00000feafe40381efdab.png"}}]);