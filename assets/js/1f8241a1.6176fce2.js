"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,h=m["".concat(o,".").concat(p)]||m[p]||c[p]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(83117),i=n(67294),r=n(86010),l=n(72389),s=n(67392),o=n(7094),d=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:p,values:h,groupId:k,className:g}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===p?p:null!=(t=null!=p?p:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,o.U)(),[z,x]=(0,i.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:P}=(0,d.o5)();if(null!=k){const e=w[k];null!=e&&e!==z&&f.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==z&&(P(t),x(a),null!=k&&y(k,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var i;const t=S.indexOf(e.currentTarget)-1;n=null!=(i=S[t])?i:S[S.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.default)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":m},g)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:e=>S.push(e),onKeyDown:T,onFocus:j,onClick:j},l,{className:(0,r.default)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(b.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function p(e){const t=(0,l.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},85107:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(65488);class r extends a.Component{render(){return a.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)}}},24857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(83117),i=(n(67294),n(3905));n(85107),n(85162);const r={title:"Projekt"},l="Projekt: Partnerpraktikum",s={unversionedId:"OFI-Projekt/projekt",id:"OFI-Projekt/projekt",title:"Projekt",description:"Im Partnerpraktikum suchen Sie sich in Zweiergruppen selbst\xe4ndig ein Thema aus, welches Sie interessiert.",source:"@site/docs/OFI-Projekt/01-projekt.md",sourceDirName:"OFI-Projekt",slug:"/OFI-Projekt/projekt",permalink:"/OFI-Projekt/projekt",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/OFI-Projekt/01-projekt.md",tags:[],version:"current",lastUpdatedAt:1659430238,formattedLastUpdatedAt:"2. Aug. 2022",sidebarPosition:1,frontMatter:{title:"Projekt"},sidebar:"sidebar",previous:{title:"Notizen",permalink:"/Netzwerke-of/notes.nosync"},next:{title:"Podcast",permalink:"/OFI-Projekt/podcast"}},o={},d=[{value:"Ablauf",id:"ablauf",level:2},{value:"Beurteilung",id:"beurteilung",level:2},{value:"Selbstkritische Reflexion",id:"selbstkritische-reflexion",level:3},{value:"1. Themenwahl und Ideensuche",id:"1-themenwahl-und-ideensuche",level:3},{value:"2. Umsetzung des Projekts starten",id:"2-umsetzung-des-projekts-starten",level:3},{value:"3. Woche",id:"3-woche",level:3},{value:"4. Woche",id:"4-woche",level:3},{value:"5. Letzte Woche(n)",id:"5-letzte-wochen",level:3},{value:"Ideensammlung",id:"ideensammlung",level:2},{value:"Algorithmen",id:"algorithmen",level:3},{value:"Programmieren von zuf\xe4lligen Labyrinthen",id:"programmieren-von-zuf\xe4lligen-labyrinthen",level:4},{value:"Wie funktionieren Bitcoins?",id:"wie-funktionieren-bitcoins",level:4},{value:"Big Data / Data Mining",id:"big-data--data-mining",level:3},{value:"Was ist Big Data und wie beeinflusst es unser Leben?",id:"was-ist-big-data-und-wie-beeinflusst-es-unser-leben",level:4},{value:"Simulation",id:"simulation",level:3},{value:"Insightmaker",id:"insightmaker",level:4},{value:"Sensoren",id:"sensoren",level:3},{value:"Feuchtigkeits- und Temperaturanzeige",id:"feuchtigkeits--und-temperaturanzeige",level:4},{value:"Machine Learning",id:"machine-learning",level:3},{value:"Artificial Intelligence, Machine Learning, Deep Learning - was bedeuten diese Begriffe?",id:"artificial-intelligence-machine-learning-deep-learning---was-bedeuten-diese-begriffe",level:4},{value:"Wie funktionieren Suchvorschl\xe4ge auf Google?",id:"wie-funktionieren-suchvorschl\xe4ge-auf-google",level:4}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=u("Figure"),m=u("Answer"),p=u("SourceRef"),h={toc:d};function k(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"projekt-partnerpraktikum"},"Projekt: Partnerpraktikum"),(0,i.kt)("p",null,"Im Partnerpraktikum suchen Sie sich in Zweiergruppen selbst\xe4ndig ein Thema aus, welches Sie interessiert."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"abgabe-per-onedrivehttpserzbe-mysharepointcomfgpersonalbalthasar_hofer_gbsl_chejyultxvy2jepvplilzfdnqbjoqqztxequvrjyodr9-3fg-bis-am-22062022-um-2000-uhr"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Abgabe per ",(0,i.kt)("a",{parentName:"h5",href:"https://erzbe-my.sharepoint.com/:f:/g/personal/balthasar_hofer_gbsl_ch/EjYULtxVY2JEpvpliLzFdNQBjoQqzTXeQUvrJyodr9-3Fg"},"OneDrive")," bis am 22.06.2022 um 20:00 Uhr")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Abgabe"),": Bis am 22.06.2022 um ",(0,i.kt)("strong",{parentName:"p"},"20:00 Uhr")),(0,i.kt)("p",{parentName:"div"},"Es wird ein ",(0,i.kt)("strong",{parentName:"p"},".zip-Ordner")," mit dem Namen ",(0,i.kt)("inlineCode",{parentName:"p"},"name_vorname.zip")," (bzw. f\xfcr Gruppen ",(0,i.kt)("inlineCode",{parentName:"p"},"name1_vorname1_name2_vorname2.zip"),") per untenstehndem ",(0,i.kt)("em",{parentName:"p"},"Hochladen-Knopf")," auf OneDrive abgegeben."),(0,i.kt)("p",{parentName:"div"},"Darin enthalten sind:"),(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Was"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Dateiname"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Selbstkritische Reflexion (eine pro Gruppe)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".pdf")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"reflexion.pdf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Podcast / Videobeitrag"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".mp3")," / ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},".mp4")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"podcast.mp3")," / ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"videobeitrag.mp4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Skript (Gliederung) des Podcasts / Videobeitrags"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".pdf")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"skript.pdf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Projektmaterial (Programmcode, Projektdateien)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ordner"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"material/"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(ev. Tagebucheintr\xe4ge ","*",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},".pdf")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"tagebuch_vorname.pdf"))))),(0,i.kt)("p",{parentName:"div"},"*"," Wer das Tagebuch nicht auf der Website erfasst hat, kann dieses auch als PDF abgeben. Die auf der Website erfassten Tageb\xfccher werden zum Abgabezeitpunkt eingesammelt."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:f:/g/personal/balthasar_hofer_gbsl_ch/EjYULtxVY2JEpvpliLzFdNQBjoQqzTXeQUvrJyodr9-3Fg",className:"button button--success"},"Projekt hochladen")))),(0,i.kt)("h2",{id:"ablauf"},"Ablauf"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gruppengr\xf6sse"),": max. 2 Personen"),(0,i.kt)("p",null,"Suchen Sie sich ein Thema, in welches Sie sich innerhalb von 5 Doppellektionen einarbeiten k\xf6nnen. Ihr Projekt darf auch einen praktischen Teil beinhalten (muss aber nicht)."),(0,i.kt)("p",null,"Das Endprodukt ihres Projekts ist ein ",(0,i.kt)("strong",{parentName:"p"},"Podcast")," oder wenn Visualisierungen zwingend sind ein Videobeitrag von 4-7 Minuten. Zudem wird eine schriftliche Reflexion zum Arbeitsprozess und dem Projekt verfasst, der in die Beurteilung einfliesst."),(0,i.kt)("h2",{id:"beurteilung"},"Beurteilung"),(0,i.kt)(c,{options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(6602).Z,width:"1040",height:"956"})),(0,i.kt)(c,{options:{},mdxType:"Figure"},(0,i.kt)("img",{src:n(29457).Z,width:"1036",height:"1194"})),(0,i.kt)("h3",{id:"selbstkritische-reflexion"},"Selbstkritische Reflexion"),(0,i.kt)("p",null,"In der schriftlichen Selbstreflexion blicken Sie auf Ihr Praktikumsprojekt zur\xfcck. Sie gehen dabei auf die folgenden Punkte ein und beleuchten diese differenziert und durchaus selbstkritisch:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arbeitsprozess",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Zeiteinteilung"),(0,i.kt)("li",{parentName:"ul"},"Nutzen der Unterrichtszeit"),(0,i.kt)("li",{parentName:"ul"},"Nutzen von Hilfestellungen"),(0,i.kt)("li",{parentName:"ul"},"Konzentrationsphasen"),(0,i.kt)("li",{parentName:"ul"},"ev. Arbeiten und Koordination im Team"))),(0,i.kt)("li",{parentName:"ul"},"Lernerfolg",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wie viel konnte ich neu dazulernen?"),(0,i.kt)("li",{parentName:"ul"},"Bin ich zufrieden damit? "),(0,i.kt)("li",{parentName:"ul"},"Wo h\xe4tten Sie sich mehr erw\xfcnscht? "),(0,i.kt)("li",{parentName:"ul"},"Inwiefern wurden Ihre Erwartungen an die Lernerfahrung erf\xfcllt?"))),(0,i.kt)("li",{parentName:"ul"},"Podcast",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wie zufrieden sind Sie mit dem Podcast/Videobeitrag?"),(0,i.kt)("li",{parentName:"ul"},"Wo best\xfcnde noch Verbesserungspotential?"))),(0,i.kt)("li",{parentName:"ul"},"Selbstbeurteilung",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wie beurteilen Sie Ihre Leistung? "),(0,i.kt)("li",{parentName:"ul"},"Was w\xfcrden Sie anders machen, was w\xfcrden Sie besser machen? "),(0,i.kt)("li",{parentName:"ul"},"Sind Sie zufrieden mit dem Endprodukt? "),(0,i.kt)("li",{parentName:"ul"},"Wo liegen die St\xe4rken, wo die schw\xe4chen Ihres Projekts? "),(0,i.kt)("li",{parentName:"ul"},"Was gefiel Ihnen gut? "),(0,i.kt)("li",{parentName:"ul"},"Was gefiel Ihnen weniger gut? "),(0,i.kt)("li",{parentName:"ul"},"Welche Aspekte erscheinen Ihnen besonders relevant/erw\xe4hnenswert?")))),(0,i.kt)("p",null,"Die selbstkritische Reflexion sollte im Minimum ",(0,i.kt)("strong",{parentName:"p"},"500")," W\xf6rter lang sein."),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"verf\xfcgbare-hardware-an-der-schule"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Verf\xfcgbare Hardware an der Schule")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Schule bietet begrenzte Hardware-St\xfcckzahlen, um sich z.B. im Rahmen eines Hardware-Projekts mit den M\xf6glichkeiten der folgenden Ger\xe4te","*"," auseinanderzusetzen."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Micro:Bit Platine"),(0,i.kt)("li",{parentName:"ul"},"Maqueen Roboter (Gesteuert \xfcber Micro:Bit)"),(0,i.kt)("li",{parentName:"ul"},"3D Drucker"),(0,i.kt)("li",{parentName:"ul"},"EV3 Roboter (k\xf6nnen nur an der Schule gebraucht werden)"),(0,i.kt)("li",{parentName:"ul"},"Arduinos inkl. mehrerer Sensoren, WLAN-Kompatibel"),(0,i.kt)("li",{parentName:"ul"},"Raspberry PI 3 (ohne WIFI)"),(0,i.kt)("li",{parentName:"ul"},"LoRaWan Modul (LILYGO\xae TTGO Meshtastic T-Beam V1.1 ESP32 LoRa 433/868/915/923Mhz Wireless Module WiFi GPS NEO-6M With OLED Display for Arduino)")),(0,i.kt)("p",{parentName:"div"},"*"," ",(0,i.kt)("em",{parentName:"p"},"Erfordert die R\xfccksprache mit Herrn Hofer, um die Verf\xfcgbarkeiten zu organisieren")))),(0,i.kt)("h3",{id:"1-themenwahl-und-ideensuche"},"1. Themenwahl und Ideensuche"),(0,i.kt)("p",null,"Informieren Sie sich \xfcber Themen, die Sie spannend finden. Tauschen Sie sich anschliessend mit den Klassenkamerad:innen aus und finden Sie eine Projektpartner:in, welche Ihre Interessen teilt. Entscheiden Sie sich f\xfcr ein Thema und schreiben Sie einen Projektantrag in folgender Vorlage:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:w:/g/personal/balthasar_hofer_gbsl_ch/EcKlfnWD2TtLspneUsiwOsMBQR7xaockSJxd3gWfmRBeXQ?e=rs2BeS",className:"button button--warning"},"Vorlage Herunterladen")),(0,i.kt)("p",null,"F\xfcllen Sie den Projektantrag aus und laden Sie den Antrag bis am Mittwoch, 11.05.2022 um 22:00 Uhr hoch:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:f:/g/personal/balthasar_hofer_gbsl_ch/EngM_xyRiRtJrKMFIdUqLZYBBbeRRRhusbCxkwRb-x5PqA",className:"button button--success"},"Projektantrag Hochladen")),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-1"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(m,{type:"text",webKey:"333ae706-c77e-465f-9273-bef1881c0f7a",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"2-umsetzung-des-projekts-starten"},"2. Umsetzung des Projekts starten"),(0,i.kt)("p",null,"Projektantrag gem\xe4ss R\xfcckmeldung anpassen und mit der Umsetzung starten."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-2"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 2")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(m,{type:"text",webKey:"ea52e8bd-853a-4485-9bf5-47975c622d95",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"3-woche"},"3. Woche"),(0,i.kt)("p",null,"Selbst\xe4ndiges Arbeiten an den Projekten. Holen Sie sich bei Fragen oder Unklarheiten fr\xfchzeitig Hilfe bei Herrn Hofer."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-3"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(m,{type:"text",webKey:"0955d986-daef-4df3-aa2b-c9f47dcde123",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"4-woche"},"4. Woche"),(0,i.kt)("p",null,"Selbst\xe4ndiges Arbeiten an den Projekten. Holen Sie sich bei Fragen oder Unklarheiten fr\xfchzeitig Hilfe bei Herrn Hofer."),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-4"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 4")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(m,{type:"text",webKey:"0881427c-f098-4059-8727-813cebef5315",mdxType:"Answer"}))),(0,i.kt)("h3",{id:"5-letzte-wochen"},"5. Letzte Woche(n)"),(0,i.kt)("p",null,"Vorbereitung und Aufnehmen der Podcasts"),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-5"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Arbeitstagebuch Woche 5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(m,{type:"text",webKey:"52a1172b-ae18-464d-8772-0a4d419b9bf8",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"arbeitstagebuch-woche-6"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"(Arbeitstagebuch Woche 6)")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(m,{type:"text",webKey:"55889af3-43f7-47cf-84fb-35c01fdcf28a",mdxType:"Answer"}))),(0,i.kt)("h2",{id:"ideensammlung"},"Ideensammlung"),(0,i.kt)("p",null,"M\xf6gliche Ideen - Sie d\xfcrfen aber auch einen eigenen Projektvorschlag ausarbeiten."),(0,i.kt)("h3",{id:"algorithmen"},"Algorithmen"),(0,i.kt)("h4",{id:"programmieren-von-zuf\xe4lligen-labyrinthen"},"Programmieren von zuf\xe4lligen Labyrinthen"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/zRuVhq0Kgnw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,i.kt)("h4",{id:"wie-funktionieren-bitcoins"},"Wie funktionieren Bitcoins?"),(0,i.kt)("p",null,"Sie setzen sich mit dem Thema Blockchain und Bitcoins auseinander. "),(0,i.kt)(c,{options:{},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://www.leparisien.fr/resizer/pgNoLN8LeaWEP6mjBtM5JTPYJhE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/J5WMRGQC4NEZXAPJERTHG7MXBA.jpg",alt:"",title:""})),(0,i.kt)("h3",{id:"big-data--data-mining"},"Big Data / Data Mining"),(0,i.kt)("h4",{id:"was-ist-big-data-und-wie-beeinflusst-es-unser-leben"},"Was ist Big Data und wie beeinflusst es unser Leben?"),(0,i.kt)("p",null,"Sie lesen zum Beispiel das Buch von Hannah Fry",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," und beleuchten den kritisch den Einfluss der permanenten Datensammlung auf unsere Gesellschaft."),(0,i.kt)(c,{options:{width:"300px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"--width=300px",src:n(1774).Z,width:"1695",height:"2610"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(p,{parentName:"figcaption",bib:{author:"Hannah Fry",source:"https://www.chbeck.de/fry-hello-world/product/26909221",licence:"C.H. Beck",licence_url:"",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:b:/g/personal/balthasar_hofer_gbsl_ch/Ef6zr_CP9kdNlGNj5ABP_DUBMkbxk7ptsspnIhkqVhNgtg?e=xIIKE2",className:"button button--warning"},"Herunterladen")),(0,i.kt)("h3",{id:"simulation"},"Simulation"),(0,i.kt)("p",null,"Mit Simulationen l\xe4sst sich die Wirklichkeit modellhaft abbilden und darin k\xf6nnen Theorien \xfcberpr\xfcft und getestet werden."),(0,i.kt)("h4",{id:"insightmaker"},"Insightmaker"),(0,i.kt)("p",null,"Sie arbeiten sich in ein Simulationsprogramm, bspw. ins kostenlose ",(0,i.kt)("a",{parentName:"p",href:"https://insightmaker.com"},"Insightmaker"),", ein und modellieren damit ein Ph\xe4nomen wie etwa eine R\xe4uber-Beute-Beziehung, eine Monte-Carlos Simulation oder das Game of Life."),(0,i.kt)("p",null,"Die beiden Seiten ",(0,i.kt)("a",{parentName:"p",href:"https://oinf.ch/kurs/simulationen"},"https://oinf.ch/kurs/simulationen")," und ",(0,i.kt)("a",{parentName:"p",href:"https://craft.dos/bwNrfufaSrdE3V"},"https://craft.dos/bwNrfufaSrdE3V")," geben einen guten \xdcberblick und Hilfestellungen f\xfcr das Vorgehen und entsprechende Simulationen."),(0,i.kt)(c,{options:{},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://insightmaker.com/images/diagram_slide.png",alt:"",title:""})),(0,i.kt)("h3",{id:"sensoren"},"Sensoren"),(0,i.kt)("h4",{id:"feuchtigkeits--und-temperaturanzeige"},"Feuchtigkeits- und Temperaturanzeige"),(0,i.kt)("p",null,"Sie schliessen einen Feuchtigkeitssensor sowie einen Temperatursensor an einen Arduino an. \xdcber die Arduino IDE werden die Sensorwerte eingelesen und auf einem Ausgabeger\xe4t angezeigt."),(0,i.kt)(c,{options:{},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://www.circuitbasics.com/wp-content/uploads/2015/12/Arduino-DHT11-Humidity-and-Temperature-Sensor-With-LCD-Output.png",alt:"",title:""})),(0,i.kt)("h3",{id:"machine-learning"},"Machine Learning"),(0,i.kt)("h4",{id:"artificial-intelligence-machine-learning-deep-learning---was-bedeuten-diese-begriffe"},"Artificial Intelligence, Machine Learning, Deep Learning - was bedeuten diese Begriffe?"),(0,i.kt)("p",null,"Sie recherchieren \xfcber die Bedeutung der Modew\xf6rter AI, ML und DL und setzen diese in einen Kontext."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/"},"https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/")),(0,i.kt)("h4",{id:"wie-funktionieren-suchvorschl\xe4ge-auf-google"},"Wie funktionieren Suchvorschl\xe4ge auf Google?"),(0,i.kt)("p",null,"Sie lesen sich ins Buch von Tommaso Teofili, ",(0,i.kt)("a",{parentName:"p",href:"https://www.manning.com/books/deep-learning-for-search"},"Deep Learning for Search_2019"),(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ein und berichten \xfcber die Funktionsweise von Suchalgorithmen."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A practical approach that shows you the state of the art in using neural networks, AI, and deep learning in the development of search engines.")),(0,i.kt)(c,{options:{width:"300px"},mdxType:"Figure"},(0,i.kt)("img",{parentName:"Figure",src:"https://human-centered.ai/wordpress/wp-content/uploads/2017/11/Deep-Learning-subset-of-Machine-Learning-subset-of-Artificial-Intelligence.jpg",alt:"--width=300px",title:""})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://erzbe-my.sharepoint.com/:b:/g/personal/balthasar_hofer_gbsl_ch/Ec6EDPPeV8ZFuZ137SimNOwBtbqfQDqe6nWwlzjNVWKkcQ?e=qjlZVW",className:"button button--warning"},"Herunterladen")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("em",{parentName:"li"},"Die Buchausschnitte sind urheberrechtlich gesch\xfctzt und d\xfcrfen ausschliesslich f\xfcr den schulischen Gebrauch verwendet werden. Die Weitergabe ist verboten."),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},29457:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beurteilung_praktisch-88e8e83d1b49f3bf350e3faebdcc9d84.png"},6602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beurteilung_theorie-1b0dc0d820dbbec1f4710cce714b25d2.png"},1774:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/book-cover_hannah-fry_hello-world-3f56445da0da4cd38e7c41fad1383c3c.jpeg"}}]);