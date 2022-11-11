"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[21110],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,k=c["".concat(o,".").concat(u)]||c[u]||l[u]||i;return t?n.createElement(k,m(m({ref:a},p),{},{components:t})):n.createElement(k,m({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=c;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,m[1]=s;for(var d=2;d<i;d++)m[d]=t[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},47308:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(67294),r=t(86010);const i={browserWindow:"browserWindow_yPfJ",browserWindowHeader:"browserWindowHeader_wZIS",buttons:"buttons_zwH1",dot:"dot_ZAty",browserWindowAddressBar:"browserWindowAddressBar_wTY6",browserType:"browserType_z_w8",spacer:"spacer_K9AZ",browserWindowMenuIcon:"browserWindowMenuIcon_pPcI",bar:"bar_zMS1",browserWindowBody:"browserWindowBody_fsGG"},m={chrome:"mdi-google-chrome",edge:"mdi-microsoft-edge",firefox:"mdi-firefox",safari:"mdi-apple-safari"},s={chrome:"blue",edge:"cyan",firefox:"orange",safari:"blue"},o={copied:"mdi-clipboard-check",error:"mdi-clipboard-text-off",spin:"mdi-loading"},d={copied:"green",error:"red",spin:"black"};function p(e){let{children:a,minHeight:t,copy:p,url:l="http://localhost:3000",browser:c}=e;const[u,k]=n.useState("none");n.useEffect((()=>{if(["none","spin","ready"].includes(u))return;const e=setTimeout((()=>k("none")),2e3);return()=>clearTimeout(e)}),[u]);return n.createElement("div",{className:i.browserWindow,style:{minHeight:t}},n.createElement("div",{className:i.browserWindowHeader},n.createElement("div",{className:i.buttons},n.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.default)(i.browserWindowAddressBar,"text--truncate")},c&&n.createElement("i",{className:(0,r.default)("mdi",m[c],s[c],i.browserType)}),n.createElement("a",{href:l,target:"_blank",onClick:e=>{if(p){e.preventDefault(),e.stopPropagation(),k("spin");try{navigator.clipboard.writeText(l).then((()=>{k("copied")})).catch((e=>{k("error"),console.warn(e)}))}catch(a){console.warn(a),k("error")}}}},l),"none"!==u&&n.createElement(n.Fragment,null,n.createElement("div",{className:i.spacer}),n.createElement("i",{className:(0,r.default)("mdi",o[u],d[u],i.copyState)}))),n.createElement("div",{className:i.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:i.bar}),n.createElement("span",{className:i.bar}),n.createElement("span",{className:i.bar})))),n.createElement("div",{className:i.browserWindowBody},a))}},61358:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294);const r="searchFigure_bRld",i="searchContainer_5Ot9",m="searchIcon_EBiD";var s=t(86010);const o=e=>n.createElement("figure",{className:r},n.createElement("div",{className:i},n.createElement("p",{style:{margin:0}},n.createElement("slot",null,e.children)),n.createElement("i",{className:(0,s.default)(m,"mdi","mdi-magnify")})),e.caption&&n.createElement("figcaption",null,e.caption))},9106:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>o,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=t(83117),r=(t(67294),t(3905)),i=t(61358),m=t(47308);const s={sidebar_custom_props:{id:"e653a077-4d2c-4323-9ea6-6594d7609ae1"}},o="Docusaurus v2.2.0",d={type:"mdx",permalink:"/docusaurus/v2.2.0/",source:"@site/src/pages/docusaurus/v2.2.0/index.md",title:"Docusaurus v2.2.0",description:"Docusaurus ist ein praktisches Dokumentations- und Blog Framework, welches ein Projekt in eine Website verwandelt.",frontMatter:{sidebar_custom_props:{id:"e653a077-4d2c-4323-9ea6-6594d7609ae1"}}},p=[{value:"Individualisieren",id:"individualisieren",level:2},{value:"Farben",id:"farben",level:3},{value:"Logo",id:"logo",level:3},{value:"Website Lokal ausprobieren",id:"website-lokal-ausprobieren",level:2}],l=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=l("Comment"),u=l("Figure"),k=l("Answer"),g={toc:p};function N(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"docusaurus-v220"},"Docusaurus v2.2.0"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(88998).Z,width:"200",height:"200"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," ist ein praktisches Dokumentations- und Blog Framework, welches ein Projekt in eine Website verwandelt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In general, a framework is a real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Framework gibt also immer eine geiwsse Struktur vor, damit es funktionieren kann. Im vorliegenden Fall m\xfcssen wir uns an die vorgegebene (bzw. konfigurierte)  Ordner-Struktur, damit das Framework autmatisiert aus all unseren Markdown-Dokumenten eine Webseite erstellt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"EF-Informatik # Github Repository Ordner\n\u251c\u2500\u2500 blog        # Blog Eintr\xe4ge\n\u2502   \u251c\u2500\u2500 2022-08-26-wiedereinstieg-python.md\n\u2502   \u2514\u2500\u2500 2022-11-07-about-software-engineering\n\u2502       \u251c\u2500\u2500 images  # enth\xe4lt alle Bilder f\xfcr diesen  Blog\n\u2502       |   \u251c\u2500\u2500 top-down.png\n\u2502       |   \u2514\u2500\u2500 bottom-up.png\n\u2502       \u2514\u2500\u2500 index.md      # erzeugt die Seite /2022/11/07/about-software-engineering\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 greeting.md  # erzeugt die Seite /docs/greeting\n\u2502   \u2514\u2500\u2500 guide\n\u2502       \u251c\u2500\u2500 index.md  # erzeugt die Seite /docs/guide\n\u2502       \u2514\u2500\u2500 setup.md    # erzeugt die Seite /docs/guide/setup\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n|       \u251c\u2500\u2500 ... # wie bei den blogs, nur werden diese Seiten nirgends direkt angezeigt,\n|               # man muss die URL kennen...\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Ihrem Github-Repository brauchen Sie die Ordner ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"blog")," und ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"docs"),", jeweils mit mindestens einem Eintrag."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"anleitung"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Anleitung"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(k,{type:"state",webKey:"a1d16f50-2452-465b-b546-93c9eb0d89fd",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Material\n"),(0,r.kt)("dd",{parentName:"dl"},"Vorkonfigurierte Dateien f\xfcr Docusaurus v2.2.0 ",(0,r.kt)("a",{target:"_blank",href:t(16983).Z},"\ud83d\udc49 Herunterladen"))),(0,r.kt)(c,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Uncommitete \xc4nderungen? ",(0,r.kt)("i",{parentName:"p",className:"mdi-arrow-right mdi "})," Commit & Push."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{target:"_blank",href:t(16983).Z},"Material")," herunterladen, entpacken und den ganzen Inhalt in Ihr Repository kopieren. Das sollte dann in etwa so aussehen:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{width:"300px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"Struktur im Repository --width=300px",src:t(58700).Z,width:"406",height:"643"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Struktur im Repository",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"wichtig"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Wichtig"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Datei ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"docs/about-me.md")," und den Ordner ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"blog")," braucht es zwingend, sonst versucht Docusaurus etwas zu suchen, was nicht existiert (",(0,r.kt)("i",{parentName:"p",className:"mdi-arrow-right mdi "})," Docusaurus Traurig ",(0,r.kt)("i",{parentName:"p",className:"mdi-arrow-right mdi "})," Sie traurig ",(0,r.kt)("i",{parentName:"p",className:"mdi-emoticon-cry mdi "}),")"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Github-Benutzername und Name des Repository in ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"docusaurus.config.js")," \xe4ndern."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Beispiel f\xfcr bh0fer, EF-Informatik",src:t(37830).Z,width:"1293",height:"265"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Beispiel f\xfcr bh0fer, EF-Informatik",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Alle \xc4nderungen hinzuf\xfcgen, Commit & Push."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Seite wird automatisch erzeugt und auf Github ver\xf6ffentlicht. Es dauert jeweils 1-5 Minuten (\u2615...), bis dies geschehen ist. Um die Webseite auch unter einer URL abrufbar zu machen, muss unter ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"Settings > Pages > Branch > gh-pages")," ",(0,r.kt)("strong",{parentName:"p"},"Github Pages")," aktiviert werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(15644).Z,width:"1524",height:"1104"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"private-repositories"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Private Repositories"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei kostenlosen Accounts k\xf6nnen nur \xf6ffentliche Repositories als Website zug\xe4ngig gemacht werden. Unter ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"Settings > General > Danger Zone (zuunterst auf der Seite)")," kann die Sichtbarkeit ge\xe4ndert werden (",(0,r.kt)("em",{parentName:"p"},"Change repository visibility"),")."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wird danach noch keine URL angezeigt, k\xf6nnen Sie durch einen neu gepushten Commit bezwecken, dass die Seite neu erzeugt wird und anschliessend abrufbar ist. "),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"individualisieren"},"Individualisieren"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nat\xfcrlich kann die Website nach den eigenen W\xfcnschen individualisiert werden. Die gr\xf6ssten Effekte haben die Websitenfarbe und das Logo."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"farben"},"Farben"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Docusaurus arbeitet mit zwei Hauptfarben - eine f\xfcr den Light-Mode und eine andere f\xfcr den Dark-Mode. Damit das Design konsistent wirkt, braucht es von den Hauptfarben eine ganze Farbreihe von 7 Abstufungen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit diesem ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima"},"\ud83d\udc49 Tool")," lassen sich diese Abstufungen einfach erzeugen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{width:"500px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--width=500px",src:t(24645).Z,width:"1087",height:"1360"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der Code-Teil muss kopiert und im CSS-File ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"src/css/custom.scss")," ersetzt werden:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"**Achtung**: die weiteren Werte sollten nicht ver\xe0ndert werden",src:t(97775).Z,width:"1782",height:"697"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)("strong",{parentName:"figcaption"},"Achtung"),": die weiteren Werte sollten nicht ver\xe0ndert werden",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"logo"},"Logo"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Ordner ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"static/img/")," befinden sich die beiden Bild-Dateien ",(0,r.kt)("inlineCode",{parentName:"p"},"logo.svg")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"favicon.ico"),"."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Logo sollte quadratisch sein, und nicht mehr als 300kb gross sein.  Falls Sie selber gerade kein inspirierendes Logo im Kopf haben: Ein Logo kann mit kostenlosen Webapps leicht zuf\xe4llig auf Basis einiger Stichw\xf6rter erzeugt werden (dazu braucht es kein all zu grosses k\xfcnstlerisches Flair \ud83d\ude09). Suchen Sie nach einem entsprechenden Logo Generator..."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,r.kt)(m.Z,{url:"https://google.com",mdxType:"BrowserWindow"},(0,r.kt)(i.Z,{mdxType:"SearchBox"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"free Logo Generator"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ersetzen Sie das vorhandene Logo durch das neue. Falls das neue Logo nicht die Dateiendung ",(0,r.kt)("inlineCode",{parentName:"p"},".svg")," aufweist, so m\xfcssen Sie dies im Konfigurationsfile ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"docusaurus.config.js")," entsprechend anpassen gehen:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(72968).Z,width:"1243",height:"367"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das ",(0,r.kt)("inlineCode",{parentName:"p"},"favicon.ico")," ist das kleine Bildchen oben links in einem Browser-Tab. Dies kann auf Basis Ihres Logos leicht erzeugt werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,r.kt)(m.Z,{url:"https://google.com",mdxType:"BrowserWindow"},(0,r.kt)(i.Z,{mdxType:"SearchBox"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"png to ico"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"website-lokal-ausprobieren"},"Website Lokal ausprobieren"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um die Website lokal auszuprobieren, muss zuerst ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"NodeJS")," installiert und konfiguriert werden. Anschliessend kann die Seite lokal gestartet und unter der Lokalen Netzwerkadresse beim Port 3000 (",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),") gefunden werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"anleitung-f\xfcr-die-installation"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Anleitung f\xfcr die Installation"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(k,{type:"state",webKey:"9f0a578f-72a6-43e5-af47-1b9afb8cbde1",mdxType:"Answer"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NodeJS LTS mit den Standard-Optionen installieren (vermutlich x64) \ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In VS-Code unter ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"Terminal>New Terminal")," ein neues Terminal \xf6ffnen und \xfcberpr\xfcfen, ob Node installiert wurde (sollte die aktuelle Version ausgeben):"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node --version\n")),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Falls es nicht verf\xfcgbar ist: Laptop neu starten und erneut versuchen (vlt. wurde es einfach nicht gefunden...)"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Den Paket-Manager ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," installieren, indem in die Kommandozeile/Terminal folgendes eingegeben wird:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global yarn\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nun m\xfcssen alle Pakete f\xfcr Docusaurus installiert werden:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Und schliesslich Dokusaurus mit einem lokalen Server starten"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run start\n")),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Seite ist nun unter \ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," erreichbar.  "),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit ",(0,r.kt)("kbd",{parentName:"p"},"ctrl")," + ",(0,r.kt)("kbd",{parentName:"p"},"c")," kann der lokale Server wieder beendet werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:30,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xc4nderungen an Markdowns werden direkt \xfcbernommen, ohne den Server neu zu starten oder die Webseite neu zu laden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:31,mdxType:"Comment"})))))}N.isMDXComponent=!0},16983:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/docusaurus-e4e2bcdacb4961f2c6af01b64cc5c996.zip"},58700:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/dir-structure-e4b3137a2799e23bbf3b79b6493fe383.png"},37830:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/docusaurus-config-f78340c172c86df92c81b81b16a8092c.png"},88998:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/docusaurus_keytar-0cb85c4468d358b2028c7ab2a38aa3ff.svg"},15644:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/gh-pages-63d3f24fd3fd368d58e1da2ebc02c1d1.png"},24645:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ifm-colors-66d446c31fca1ee835e0672d90333c18.png"},97775:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/ifm-css-7ec1fa396587d3092b9dc4254b9120fe.png"},72968:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/logo-config-a727b21bbbb4825e111971693ac2b622.png"}}]);