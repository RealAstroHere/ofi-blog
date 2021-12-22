"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[92701],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(83117),r=t(67294),i=t(72389),l=t(79443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(1436),s=t(86010),d="tabItem_1uMI";function m(e){var n,t,i,l=e.lazy,m=e.block,p=e.defaultValue,k=e.values,c=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,u.lx)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(n=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=h[0])?void 0:i.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),z=b.tabGroupChoices,y=b.setTabGroupChoices,S=(0,r.useState)(N),D=S[0],w=S[1],E=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var P=z[c];null!=P&&P!==D&&g.some((function(e){return e.value===P}))&&w(P)}var C=function(e){var n=e.currentTarget,t=E.indexOf(n),a=g[t].value;a!==D&&(_(n),w(a),null!=c&&y(c,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":m},f)},g.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===n?0:-1,"aria-selected":D===n,key:n,ref:function(e){return E.push(e)},onKeyDown:T,onFocus:C,onClick:C},i,{className:(0,s.default)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":D===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==D})}))))}function p(e){var n=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},85107:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(21073),r=t(67294),i=t(26396),l=function(e){function n(){return e.apply(this,arguments)||this}return(0,a.Z)(n,e),n.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(r.Component)},65648:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(44415),r=t(21073),i=t(91189),l=t(67294),o=t(92814),u="videoComponent_187V",s="headerClosed_1HK6",d="headerOpen_hP6H",m="minimize_1JZh",p="description_2U1a",k="title_1XFt",c="cardOpen_1vws",f=t(51436),h=t(86010),g=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return n=e.call.apply(e,[this].concat(r))||this,(0,i.Z)((0,a.Z)(n),"state",{open:!!n.props.expanded,visible:!1}),(0,i.Z)((0,a.Z)(n),"videoRef",l.createRef()),(0,i.Z)((0,a.Z)(n),"isInViewport",(function(){var e=n.videoRef.current.getBoundingClientRect(),t=e.top,a=e.bottom;t<window.innerHeight&&a>0?n.state.visible||n.setState({visible:!0}):n.state.visible&&n.setState({visible:!1})})),(0,i.Z)((0,a.Z)(n),"onClick",(function(){n.setState({open:!n.state.open}),n.isInViewport()})),n}(0,r.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},t.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},t.render=function(){var e=this.props,n=e.title,t=e.src,a=e.type,r=e.children;return l.createElement("div",{ref:this.videoRef,className:u},this.state.open?l.createElement("div",{className:c},l.createElement("div",{className:d},n&&l.createElement("h5",{className:k},n),!this.props.expanded&&l.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",m),onClick:this.onClick},l.createElement(o.G,{icon:f.IQi})),r&&l.createElement("div",{className:p},r)),this.state.visible?l.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},l.createElement("source",{src:t,type:"video/"+(a||"mp4")})):l.createElement("div",{style:{height:"150px"}},l.createElement(o.G,{icon:f.IJ7,spin:!0}))):l.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},l.createElement("div",{className:s},l.createElement("div",{className:k},n||"Video"),r&&l.createElement("div",{className:p},r)),this.state.visible?l.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},l.createElement("source",{src:t,type:"video/"+(a||"mp4")})):l.createElement("div",{style:{height:"150px"}},l.createElement(o.G,{icon:f.IJ7,spin:!0}))))},n}(l.Component)},82828:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return k},default:function(){return f}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),l=t(84384),o=t(85107),u=(t(44996),t(65648),t(58215)),s=(t(92814),["components"]),d={},m="\u270d\ufe0f Pr\xfcfungsfragen",p={unversionedId:"byod-basics/v25/Skills/pruefungsfragen",id:"byod-basics/v25/Skills/pruefungsfragen",title:"\u270d\ufe0f Pr\xfcfungsfragen",description:"Vorbereitung",source:"@site/docs/byod-basics/v25/003-Skills/009-pruefungsfragen.mdx",sourceDirName:"byod-basics/v25/003-Skills",slug:"/byod-basics/v25/Skills/pruefungsfragen",permalink:"/byod-basics/v25/Skills/pruefungsfragen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/003-Skills/009-pruefungsfragen.mdx",tags:[],version:"current",lastUpdatedAt:1630013996,formattedLastUpdatedAt:"8/26/2021",sidebarPosition:9,frontMatter:{},sidebar:"sidebar",previous:{title:"Software",permalink:"/byod-basics/v25/Skills/software"},next:{title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",permalink:"/byod-basics/v25/Skills/material_python"}},k=[{value:"Vorbereitung",id:"vorbereitung",children:[],level:3},{value:"Pr\xfcfung",id:"pr\xfcfung",children:[],level:3},{value:"Szenario 1",id:"szenario-1",children:[],level:2},{value:"Szenario 2",id:"szenario-2",children:[],level:2},{value:"Szenario 3",id:"szenario-3",children:[],level:2},{value:"Szenario 4",id:"szenario-4",children:[],level:2},{value:"Szenario 5",id:"szenario-5",children:[],level:2},{value:"Szenario 6",id:"szenario-6",children:[],level:2},{value:"Szenario 7",id:"szenario-7",children:[],level:2},{value:"Szenario 8",id:"szenario-8",children:[],level:2},{value:"Szenario 9",id:"szenario-9",children:[],level:2},{value:"Szenario 10",id:"szenario-10",children:[],level:2},{value:"Szenario 11",id:"szenario-11",children:[],level:2},{value:"Szenario 12",id:"szenario-12",children:[],level:2},{value:"Szenario 13",id:"szenario-13",children:[],level:2},{value:"Szenario 14",id:"szenario-14",children:[],level:2},{value:"Szenario 15",id:"szenario-15",children:[],level:2},{value:"Szenario 16",id:"szenario-16",children:[],level:2},{value:"Szenario 17",id:"szenario-17",children:[],level:2},{value:"Szenario 18",id:"szenario-18",children:[],level:2},{value:"Szenario 19",id:"szenario-19",children:[],level:2},{value:"Szenario 20",id:"szenario-20",children:[],level:2},{value:"Szenario 21",id:"szenario-21",children:[],level:2},{value:"Szenario 22",id:"szenario-22",children:[],level:2},{value:"Szenario 23",id:"szenario-23",children:[],level:2},{value:"Szenario 24",id:"szenario-24",children:[],level:2},{value:"Szenario 25",id:"szenario-25",children:[],level:2},{value:"Szenario 26",id:"szenario-26",children:[],level:2},{value:"Szenario 27",id:"szenario-27",children:[],level:2},{value:"Szenario 28",id:"szenario-28",children:[],level:2},{value:"Szenario 29",id:"szenario-29",children:[],level:2},{value:"Szenario 30",id:"szenario-30",children:[],level:2}],c={toc:k};function f(e){var n=e.components,d=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,d,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-pr\xfcfungsfragen"},"\u270d\ufe0f Pr\xfcfungsfragen"),(0,i.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vorbereitung der Pr\xfcfung"),(0,i.kt)("li",{parentName:"ul"},"Material ",(0,i.kt)("a",{target:"_blank",href:t(61159).Z},"material_byod.zip")," herunterladen"),(0,i.kt)("li",{parentName:"ul"},"material_byod.zip entpacken und nach OneDrive verschieben"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wichtig"),': Eine Kopie von "material_byod.zip" muss weiterhin im Downloads-Ordner sein, damit alle Fragen sinnvoll sind.')),(0,i.kt)("h3",{id:"pr\xfcfung"},"Pr\xfcfung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es werden Ihnen ",(0,i.kt)("strong",{parentName:"li"},"10")," der untenstehenden Szenarien zugelost"),(0,i.kt)("li",{parentName:"ul"},"Sie haben min. 2 Minuten Zeit, um die Fragen vorg\xe4ngig zu sortieren"),(0,i.kt)("li",{parentName:"ul"},"Die Pr\xfcfung beginnt mit einem leeren Desktop und ohne vorg\xe4ngig ge\xf6ffnete Programme.\nDie heruntergeladenen Dateien m\xfcssen im Original vorliegen und die Programme auf der Website m\xfcssen zur\xfcckgesetzt sein."),(0,i.kt)("li",{parentName:"ul"},"Sie haben ",(0,i.kt)("strong",{parentName:"li"},"5 Minuten")," Zeit, um die Szenarien vorzuzeigen"),(0,i.kt)("li",{parentName:"ul"},"F\xfcr jedes korrekt vorgezeigte Szenario erhalten Sie ",(0,i.kt)("strong",{parentName:"li"},"1 Punkt"),", f\xfcr teilweise korrekte Szenarien (bspw. Maus statt Tastatur verwendet) gibt es 0.5 Punkte.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Notenskala"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Punkte"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"9.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"7.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"6.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"5.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"3.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1"))))),"\xa0",(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"szenario-1"},"Szenario 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'einen neuen Ordner namens "Flattermaus" im OneDrive Ordner "material_byod" erstellen'),(0,i.kt)("li",{parentName:"ul"},"diesen Ordner immer synchronisieren")),(0,i.kt)("h2",{id:"szenario-2"},"Szenario 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nightshift Modus von 21:30 bis 06:00 einschalten")),(0,i.kt)("h2",{id:"szenario-3"},"Szenario 3"),(0,i.kt)(o.Z,{mdxType:"OsTabs"},(0,i.kt)(u.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster Datei-Explorer erstellen"),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_explorer" umbenennen'),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben'))),(0,i.kt)(u.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster von Finder erstellen"),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_finder" umbenennen'),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben')))),(0,i.kt)("h2",{id:"szenario-4"},"Szenario 4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloads ordner \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Sortieren nach \xc4nderungsdatum, so dass die zuletzt heruntergeladenen Dokumente zuoberst angezeigt werden")),(0,i.kt)("h2",{id:"szenario-5"},"Szenario 5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'\xd6ffnen Sie das Bild "sonnenuntergang.jpg" und f\xfcgen Sie die Beschriftungen "Palme" und "Sonne" hinzu.')),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:void 0,caption:"Edited",options:{},isInline:!1,src:t(2329).Z,alt:"Edited",mdxType:"Image"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Die Schriftfarbe & Gr\xf6sse kann frei gew\xe4hlt werden, sie muss aber lesbar sein.")),(0,i.kt)("h2",{id:"szenario-6"},"Szenario 6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einen neuen virtuellen Desktop erstellen"),(0,i.kt)("li",{parentName:"ul"},"Auf neuem virtuellen Desktop einen Internet-Browser \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Auf dem anderen virtuellen Desktop Powerpoint starten")),(0,i.kt)("h2",{id:"szenario-7"},"Szenario 7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sonnenuntergang.docx")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt nur mit der Tastatur und ohne Maus!)"),(0,i.kt)("li",{parentName:"ul"},'"ipsum dolor sit amet" ausw\xe4hlen und l\xf6schen'),(0,i.kt)("li",{parentName:"ul"},"Den ganzen zweiten Absatz ausw\xe4hlen und l\xf6schen"),(0,i.kt)("li",{parentName:"ul"},"Dokument abspeichern")),(0,i.kt)("h2",{id:"szenario-8"},"Szenario 8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Datei-Explorer und das Mail-Programm \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Mit Tasten-Shortcuts zwischen diesen Programmen hin- und herwechseln")),(0,i.kt)("h2",{id:"szenario-9"},"Szenario 9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mail-Programm \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Signatur-Einstellungen \xf6ffnen und eine Signatur erstellen (oder wenn vorhanden \xe4ndern)")),(0,i.kt)("h2",{id:"szenario-10"},"Szenario 10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen und den ganzen Code kopieren"),(0,i.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Nachricht mit einer kurzen Begr\xfcssung, dem kopierten Code und einem kurzen Gruss an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-11"},"Szenario 11"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Ein Bildschrim-Video erstellen in welchem die Ausf\xfchrung des Programms gezeigt wird."),(0,i.kt)("li",{parentName:"ul"},'Bildschrimaufnahme im Ordner "material_byod" abspeichern/dorthin verschieben.')),(0,i.kt)("h2",{id:"szenario-12"},"Szenario 12"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Die kompirmierte Datei "material_byod.zip" vom Downloads-Ordner in den Ordner "material_byod" unter OneDrive verschieben.')),(0,i.kt)("h2",{id:"szenario-13"},"Szenario 13"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" komprimieren'),(0,i.kt)("li",{parentName:"ul"},"Den komprimierten Ordner per Mail an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-14"},"Szenario 14"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'In der globalen Suche nach "fledermaus.docx" suchen und dieses Dokument \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},"Den Wikipedia Link \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Die Einleitung kopieren und im Word Dokument einf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Das Word-Dokument speichern")),(0,i.kt)("h2",{id:"szenario-15"},"Szenario 15"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"hello_world.py")," \xf6ffnen "),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt nur noch mit der Tastatur ohne Maus!)"),(0,i.kt)("li",{parentName:"ul"},"den ganzen Text ausw\xe4hlen und l\xf6schen"),(0,i.kt)("li",{parentName:"ul"},"abspeichern"),(0,i.kt)("li",{parentName:"ul"},"\xc4nderung r\xfcckg\xe4ngig machen und wieder speichern")),(0,i.kt)("h2",{id:"szenario-16"},"Szenario 16"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"hello_world.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt nur noch mit der Tastatur ohne Maus!)"),(0,i.kt)("li",{parentName:"ul"},'Den Text "It\'s a beautiful Day." ausw\xe4hlen, ausschneiden und vor "Hello World" einf\xfcgen. (Resultat: ',(0,i.kt)("inlineCode",{parentName:"li"},'print("It\'s a beautiful Day. Hello World!")'),")"),(0,i.kt)("li",{parentName:"ul"},"abspeichern")),(0,i.kt)("h2",{id:"szenario-17"},"Szenario 17"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"create_mesh.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Nach der Zahl ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," suchen. Wie oft kommt es im Programm vor?")),(0,i.kt)("h2",{id:"szenario-18"},"Szenario 18"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"klammern.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"im Python-Programm folgenden Code eintippen:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'print("Klammern: (), [], {}")')),(0,i.kt)("li",{parentName:"ul"},"Das Programm ausf\xfchren")),(0,i.kt)("h2",{id:"szenario-19"},"Szenario 19"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm ",(0,i.kt)("inlineCode",{parentName:"li"},"klammern.py")," \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"im Python-Programm folgenden Code eintippen:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'print("Sonderzeichen: #, &, <, >")')),(0,i.kt)("li",{parentName:"ul"},"Programm ausf\xfchren")),(0,i.kt)("h2",{id:"szenario-20"},"Szenario 20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'ToDo-App \xf6ffnen und einen neuen Task erfassen: "Absenzenheft unterschreiben lassen"')),(0,i.kt)("h2",{id:"szenario-21"},"Szenario 21"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Powerpoint-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"szenario-22"},"Szenario 22"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Excel-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"szenario-23"},"Szenario 23"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Word-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"szenario-24"},"Szenario 24"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Auf Forms eine neue Umfrage mit dem Titel "Testumfrage" erstellen'),(0,i.kt)("li",{parentName:"ul"},"Start Datum auf den 6.12.2021 setzen"),(0,i.kt)("li",{parentName:"ul"},"Eine Antwort pro Person zulassen"),(0,i.kt)("li",{parentName:"ul"},"Link zum Ausf\xfcllen kopieren und per Teams an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-25"},"Szenario 25"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Auf Google nach "Kalender" suchen'),(0,i.kt)("li",{parentName:"ul"},"Mit Touch-Gesten durch die Ergebnisse scrollen"),(0,i.kt)("li",{parentName:"ul"},"einen Link anklicken, die URL kopiereneinen neuen Tab \xf6ffnen und auf bitly.com gehen"),(0,i.kt)("li",{parentName:"ul"},"den kopierten Link k\xfcrzen")),(0,i.kt)("h2",{id:"szenario-26"},"Szenario 26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Ein 5 Sekunden Ausschnitt aus dem Video "yogi_bear.mp4" ausschneiden.'),(0,i.kt)("li",{parentName:"ul"},'Das zugeschnittene Video im Ordner "material_byod" unter dem Namen "bear" abspeichern.')),(0,i.kt)("h2",{id:"szenario-27"},"Szenario 27"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Video-Konferenz mit Herrn Hofer starten"),(0,i.kt)("li",{parentName:"ul"},"Den Bildschirm freigeben")),(0,i.kt)("h2",{id:"szenario-28"},"Szenario 28"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" zur Bearbeitung freigeben'),(0,i.kt)("li",{parentName:"ul"},"Den Link per Teams an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"szenario-29"},"Szenario 29"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" immer auf ihrem Laptop synchronisieren'),(0,i.kt)("li",{parentName:"ul"},'Dateien aus dem Ordner "programme" nicht mehr immer synchronisieren.')),(0,i.kt)("h2",{id:"szenario-30"},"Szenario 30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Die Datei "sonnenuntergang.docx" auf Ihrem Laptop l\xf6schen'),(0,i.kt)("li",{parentName:"ul"},'Online im OneDrive Papierkorb die Datei "sonnenuntergang.docx" wiederherstellen'),(0,i.kt)("li",{parentName:"ul"},"\xdcberpr\xfcfen dass die Datei wieder auf Ihren Laptop synchronisiert wird.")))}f.isMDXComponent=!0},61159:function(e,n,t){n.Z=t.p+"assets/files/material_byod-385466718ccf495cab050182c5ea4920.zip"},2329:function(e,n,t){n.Z=t.p+"assets/images/sonnenuntergang_edited-4839412ca1802816f73a445aa4ad138b.jpg"},44415:function(e,n,t){function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return a}})}}]);