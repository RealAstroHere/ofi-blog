"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[24927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,N=c["".concat(l,".").concat(k)]||c[k]||o[k]||m;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,i=new Array(m);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<m;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34673:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(83117),r=a(67294),m=a(86010),i=a(72389),p=a(86043);const l="details_lb9f",d="isBrowser_bmU9",s="collapsibleContent_i85q";function o(e){return!!e&&("SUMMARY"===e.tagName||o(e.parentElement))}function c(e,t){return!!e&&(e===t||c(e.parentElement,t))}function k(e){let{summary:t,children:a,...k}=e;const N=(0,i.Z)(),g=(0,r.useRef)(null),{collapsed:u,setCollapsed:b}=(0,p.u)({initialState:!k.open}),[h,v]=(0,r.useState)(k.open);return r.createElement("details",(0,n.Z)({},k,{ref:g,open:h,"data-collapsed":u,className:(0,m.default)(l,N&&d,k.className),onMouseDown:e=>{o(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;o(t)&&c(t,g.current)&&(e.preventDefault(),u?(b(!1),v(!0)):b(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(p.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),v(!e)}},r.createElement("div",{className:s},a)))}const N="details_b_Ee";function g(e){let{...t}=e;return r.createElement(k,(0,n.Z)({},t,{className:(0,m.default)("alert alert--info",N,t.className)}))}},61537:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(34673);const m="finding_HjUo";var i=a(86010);const p=e=>n.createElement(r.Z,{summary:n.createElement("summary",null,e.title||"Gewonnene Erkenntnisse",n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),className:(0,i.default)("alert alert--warning",m)},e.children)},44347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(83117),r=(a(67294),a(3905)),m=a(61537);const i={sidebar_label:"Routing im Alltag",sidebar_custom_props:{id:"2afa98e2-36be-4420-8c17-4bed33bd6bfa",source:{name:"informatik.mygymer.ch",ref:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html"}}},p="Routing im Alltag",l={unversionedId:"Netzwerke-of/Routing/routing-alltag",id:"Netzwerke-of/Routing/routing-alltag",title:"Routing im Alltag",description:"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie",source:"@site/docs/Netzwerke-of/003-Routing/01-routing-alltag.md",sourceDirName:"Netzwerke-of/003-Routing",slug:"/Netzwerke-of/Routing/routing-alltag",permalink:"/Netzwerke-of/Routing/routing-alltag",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/003-Routing/01-routing-alltag.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Routing im Alltag",sidebar_custom_props:{id:"2afa98e2-36be-4420-8c17-4bed33bd6bfa",source:{name:"informatik.mygymer.ch",ref:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html"}}},sidebar:"sidebar",previous:{title:"\xdcbungen UTF-8",permalink:"/Netzwerke-of/Codierung/Uebungen"},next:{title:"Routing im Internet",permalink:"/Netzwerke-of/Routing/routing-internet"}},d={},s=[{value:"Verkehrsbetriebe Biel",id:"verkehrsbetriebe-biel",level:2},{value:"Gefundene Analogien",id:"gefundene-analogien",level:2},{value:"Routing f\xfcr Touristen",id:"routing-f\xfcr-touristen",level:2},{value:"Ausfall Schienennetz",id:"ausfall-schienennetz",level:2},{value:"Grosse Gruppe",id:"grosse-gruppe",level:2}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=o("Comment"),k=o("Figure"),N=o("SourceRef"),g=o("Answer"),u={toc:s};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"routing-im-alltag"},"Routing im Alltag"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Vorgehensweise",type:"danger"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"die Aufgaben l\xf6sen und die Ergebnisse notieren"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"vor jedem \xabgewonnene Erkenntnisse\xbb \xfcberlegen Sie kurz, was eine gewonnene Erkenntnis sein k\xf6nnte \u2013 und zwar bevor Sie das K\xe4stchen aufklappen"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"lesen Sie die \xabgewonnenen Erkenntnisse\xbb durch und \xfcberlegen Sie sich, was damit genau gemeint ist"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"falls Sie eine Frage haben oder eine Erkenntnis notiert haben, die nicht aufgelistet wird, dann halten Sie diese fest, damit wir am Schluss dar\xfcber sprechen k\xf6nnen"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir befinden uns auf der ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"Vermittlungs-Schicht"),": Hier werden IP-Pakete vom Start- zum Zielger\xe4t \xfcbertragen. Bei ihrem Weg durch das Internet m\xfcssen die Pakete geleitet werden \u2013 man spricht von ",(0,r.kt)("strong",{parentName:"p"},"Routing"),"."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"verkehrsbetriebe-biel"},"Verkehrsbetriebe Biel"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Durch das Verkehrsnetz der Verkehrsbetriebe Biel wird der \xf6ffentliche Verkehr in der Stadt Biel sichergestellt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(53142).Z,width:"1451",height:"749"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(N,{parentName:"figcaption",bib:{author:"VB TPD",source:"https://www.vb-tpb.ch/de/fahren/linien-netzplan/",licence:"Public Domain",licence_url:"",edited:!0},mdxType:"SourceRef"}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie m\xf6chten mit dem \xd6V vom Gymnasium (L\xe4ndtestrasse 12, Biel/Bienne) zum Sportplatz Mettmoos fahren."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Mit dem Netzplan",type:"aufgabe"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten sehen Sie auf dem Liniennetz?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)(g,{type:"text",webKey:"d6938484-81a6-4240-bbd0-b94ed04bdc72",mdxType:"Answer"})),(0,r.kt)("admonition",{title:"\ud83d\udcbb mit Google Maps",type:"aufgabe"},(0,r.kt)(g,{type:"state",webKey:"ddb3960d-b91a-4bf2-9571-97b32e7169f2",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Welchen Transportoptionen schl\xe4gt Ihnen ",(0,r.kt)("a",{parentName:"p",href:"https://www.google.com/maps/dir/Gymnasium+Biel-Seeland,+L%C3%A4ndtestrasse+12,+2503+Biel/Sports+Ground+Mettmoos,+Parkplatz+Mettmoos,+2504+Biel/@47.1389934,7.2384864,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478e195743e2cd43:0x7eeeab7e9cc7fa72!2m2!1d7.2359916!2d47.1334096!1m5!1m1!1s0x478e192b26b851e1:0x5e85058550f44003!2m2!1d7.2756948!2d47.1390779!3e3"},"\ud83d\udc49 Google Maps")," vor, wenn Sie die Route ",(0,r.kt)("em",{parentName:"p"},"L\xe4ndtestrasse 12")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Sportplatz Mettmoos")," suchen?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Welche Optionen werden vorgeschlagen?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Welches ist gem\xe4ss Google die beste Route?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xc4ndert sich die Route, wenn sie m\xf6glichst kurze Fusswege enthalten soll? (Einstellbar unter ",(0,r.kt)("em",{parentName:"p"},"Routenoptionen"),")"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xc4ndert sich der Reisevorschlag, wenn Sie sp\xe4t in der Nacht eine Verbindung suchen?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))),(0,r.kt)(g,{type:"text",webKey:"482bf3ac-ff0d-44ca-9700-5274cf9fecd4",mdxType:"Answer"})),(0,r.kt)(m.Z,{mdxType:"Finding"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es gibt mehrere Wege, welche ans Ziel f\xfchren."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der optimale Weg ist abh\xe4ngig von den Rahmenbedingungen und kann sich ",(0,r.kt)("strong",{parentName:"p"},"\xe4ndern"),"."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"gefundene-analogien"},"Gefundene Analogien"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"no-table-header"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"WLAN")),(0,r.kt)("td",{parentName:"tr",align:"left"},"zu Fuss bis zur n\xe4chsten Haltestelle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"Sichtbare WLANs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Haltestellen, die zu Fuss erreichbar sind: Bahnhof & Badhausstrasse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"Rechnernetz (LAN)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"mit Bus (f\xfcr weiter entfernte Ziele: Tram, Zug, ...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"Router")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Umsteigen an gewissen Haltestellen")))),(0,r.kt)(c,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"routing-f\xfcr-touristen"},"Routing f\xfcr Touristen"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Datenpakete sind \u2013 anders als wir als Passagiere vom ",(0,r.kt)("em",{parentName:"p"},"\xd6V")," \u2013 nicht intelligent. Sie wissen nicht, wie sie umsteigen m\xfcssen. Dies muss f\xfcr sie \xfcbernommen werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Datenpaket im \xd6V vom Gymer zum Sportplatz Mettmoos m\xfcsste"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"an ",(0,r.kt)("strong",{parentName:"p"},"jeder Haltestelle")," wissen:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ob man Aussteigen oder Umsteigen muss"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"in welchen Bus man als n\xe4chstes einsteigen muss"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ob man am Ziel angekommen ist."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"an jeder ",(0,r.kt)("strong",{parentName:"p"},"Strassenkreuzung")," (wenn zu Fuss unterwegs) wissen:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"welche Abzweigung es nehmen soll"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"ob es am Ziel angekommen ist."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})))))),(0,r.kt)("admonition",{title:"Routing-Tabelle",type:"aufgabe"},(0,r.kt)(g,{type:"state",webKey:"8c827967-6f40-46be-85e1-36476b786edf",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Erstellen Sie f\xfcr das Ziel "Sportplatz Mettmoos" Umsteige-Anleitungen f\xfcr Datenpakete gem\xe4ss obigem Punkt 1. f\xfcr die folgenden Haltestellen:'),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Seehofweg"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bahnhof Biel"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"M\xfchlestrasse/Moulin"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schulen Linde"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bahnhof Mett"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:30,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beispiel-Anleitung:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:31,mdxType:"Comment"})),(0,r.kt)("div",{className:"slim center"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Ort ",(0,r.kt)("i",{parentName:"th",className:"mdi-pin mdi "})),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ziel ",(0,r.kt)("i",{parentName:"th",className:"mdi-target mdi "})),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("i",{parentName:"th",className:"mdi-axis-y-arrow mdi "})," Aktion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Seehofweg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mettmoos"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right-thin mdi "})," Bus Nr. 9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Seehofweg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gymer"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("i",{parentName:"td",className:"mdi-arrow-right-thin mdi "})," Zu Fuss weiter")))),(0,r.kt)(c,{parentName:"div",type:"table",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Halten Sie Ihre Anleitung auf Papier fest und f\xfcgen Sie ein Foto unten ein."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:32,mdxType:"Comment"})),(0,r.kt)(g,{type:"text",webKey:"7bcc9f60-6fe8-4162-b45f-8cda4e248730",mdxType:"Answer"})),(0,r.kt)("admonition",{title:"Andere Ziele",type:"aufgabe"},(0,r.kt)(g,{type:"state",webKey:"984b58cf-3230-4f06-93da-ea49161782ab",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Anleitungen m\xfcssten nat\xfcrlich auch Anweisungen haben f\xfcr andere Ziele."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:33,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Wie w\xfcrden die Umsteigungsanweisungen f\xfcr die 5 obenstehenden Haltestellen f\xfcr das Ziel "Bern" lauten?'),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:34,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Wie f\xfcr das Ziel "Z\xfcrich"?'),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:35,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Muss jede Haltestelle wirklich Anweisungen f\xfcr jedes andere Ziel haben?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:36,mdxType:"Comment"})))),(0,r.kt)(g,{type:"text",webKey:"609cfe7e-bab0-4a50-97c7-7b3ac571fba0",mdxType:"Answer"})),(0,r.kt)(m.Z,{mdxType:"Finding"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Es k\xf6nnen Anweisungen "delegiert" werden: Es muss nur der ',(0,r.kt)("em",{parentName:"p"},"Bahnhof Biel")," wissen, in welchen Zug man einsteigen muss um nach Bern oder Z\xfcrich zu fahren. Die anderen Haltestellen leiten alle Anfragen ausserhalb des Biel-Netzes an den ",(0,r.kt)("em",{parentName:"p"},"Bahnhof Biel")," weiter."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:37,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"ausfall-schienennetz"},"Ausfall Schienennetz"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Wegen Umbauarbeiten f\xe4llt die Linie Nr. 9 ab "Br\xfchlplatz" aus. Welche M\xf6glichkeiten haben Sie, wenn Sie beim ',(0,r.kt)("em",{parentName:"p"},"Seehofweg")," eingestiegen sind, um doch an den Sportplatz zu gelangen?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:38,mdxType:"Comment"}))),(0,r.kt)(m.Z,{mdxType:"Finding"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es gibt verschiedene Wege zum Ziel - auch nicht optimale Wege, die normalerweise nicht benutzt werden. Diese Optionen erm\xf6glichen aber eine gewisse ",(0,r.kt)("strong",{parentName:"p"},"Ausfallsicherheit"),". Im Beispiel oben k\xf6nnen Sie entweder beim Bahnhof Biel oder beim Br\xfchlplatz auf eine andere Verbindung umsteigen. "),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:39,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"grosse-gruppe"},"Grosse Gruppe"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Grose Gruppen",type:"aufgabe"},(0,r.kt)(g,{type:"state",webKey:"374b1bf7-cb9a-422e-b373-8376598a45b8",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"4 Parallelklassen \u2013 also ca. 100 Personen haben beim Sportplatz Mettmoos abgemacht.\nWie kommen sie am schnellsten dahin, wenn wir damit rechnen, dass wegen Corona und dem Feierabendverkehr maximal 25 Personen pro Bus Platz finden?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:40,mdxType:"Comment"})),(0,r.kt)(g,{type:"text",webKey:"a94b88da-f8ab-4cb5-9bdd-dd8f27eede43",mdxType:"Answer"})),(0,r.kt)(m.Z,{mdxType:"Finding"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei Engp\xe4ssen k\xf6nnen verschiedene Wege gleichzeitig benutzt werden. (Load-Balancing)"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:41,mdxType:"Comment"}))))}b.isMDXComponent=!0},53142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vb-verkehrsnetz-b17e10bcbeb65e0a89a8fbdff92e9906.png"}}]);