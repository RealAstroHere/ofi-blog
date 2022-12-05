"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[24056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return r?a.createElement(h,s(s({ref:t},m),{},{components:r})):a.createElement(h,s({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71107:(e,t,r)=>{r.d(t,{ZP:()=>f});var a=r(83117),n=r(67294);const l={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var s=r(86010),o=r(96921);let i;!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(i||(i={}));const c={[i.Holiday]:"mdi-island",[i.Event]:"mdi-calendar",[i.Test]:"mdi-school",[i.Info]:"mdi-information"};class m extends n.Component{render(){const{align:e,icon:t,date:r}=this.props;var a=this.props.value;return r&&(a=(e=>{const t=e.getDay();return n.createElement("span",{style:{fontFamily:"monospace"}},o.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(r)),n.createElement("td",{align:e},a,t?" ":"",t)}}const p=e=>{var t=new Date(e.getFullYear(),0,1),r=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(r/7)+1};class d extends n.Component{icon(){return this.props.icon?n.createElement("i",{className:(0,s.default)(this.props.icon,"mdi")}):this.props.type?n.createElement("i",{className:(0,s.default)(c[this.props.type],"mdi")}):void 0}render(){const{type:e,cells:t}=this.props,r={className:[]};this.props.className&&r.className.push(this.props.className),e&&r.className.push(l[e]);var o=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=t[this.props.dateIndex];"string"==typeof e&&(o=(e=>{const t=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)})(e))&&p(new Date)===p(o)&&r.className.push(r.className+" "+l.currentWeek)}return n.createElement("tr",(0,a.Z)({},r,{className:(0,s.default)(...r.className),style:{background:this.props.color}}),t.map(((e,t)=>{const r={value:e};return 0===t&&(r.icon=this.icon()),this.props.alignments&&this.props.alignments.length>t?r.align=this.props.alignments[t]:r.align="left",n.createElement(m,(0,a.Z)({},r,{key:t,date:this.props.dateIndex===t?o:void 0}))})))}}class f extends n.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),t=this.props.order?this.props.order(this.props.rows):this.props.rows;return n.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,s.default)(l["ofi-table"],l[this.props.size],l[this.props.compact&&"compact"],l[this.props.celled&&"celled"],l[this.props.striped&&"striped"],l[this.props.collapsing&&"collapsing"],l[this.props.selectable&&"selectable"])},n.createElement("thead",null,this.props.header&&n.createElement("tr",null,this.props.header.map(((e,t)=>{var r;const a=((null==(r=this.props.alignments)?void 0:r.length)||0)>t?this.props.alignments[t]:"left";return n.createElement("th",{align:a,key:t},e)})))),n.createElement("tbody",null,t.map(((t,r)=>n.createElement(d,(0,a.Z)({alignments:this.props.alignments},t,{key:r,dateIndex:e}))))))}}},62982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>P,frontMatter:()=>p,metadata:()=>f,toc:()=>u});var a=r(83117),n=(r(67294),r(3905)),l=r(71107),s=r(96921);const o=JSON.parse('[{"cells":["16.08.2022","Einstieg","ICT Einstieg"]},{"cells":["23.08.2022","ICT","BYOD Basics"]},{"cells":["30.08.2022","ICT","BYOD Basics"]},{"cells":["06.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["13.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["20.09.2022","Sonderwoche",""],"type":"holiday"},{"cells":["27.09.2022","Herbstferien",""],"type":"holiday"},{"cells":["04.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["11.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["18.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["25.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["01.11.2022","ICT","Kurztest Office"],"type":"test"},{"cells":["08.11.2022","Informatik Biber","Wettbewerb"],"type":"event"},{"cells":["15.11.2022","Programmieren",""]},{"cells":["17.11.2022","Notenschluss Zwischenzeugnis",""],"type":"event"},{"cells":["22.11.2022","Programmieren",""]},{"cells":["29.11.2022","Programmieren",""]},{"cells":["06.12.2022","Kantonaler Fachschaftstag",""],"type":"holiday"},{"cells":["13.12.2022","Programmieren",""]},{"cells":["15.12.2022","A & B. 14:00-15:30","Probe (schriftlich & praktisch)"],"type":"test"},{"cells":["20.12.2022","Programmieren",""]},{"cells":["27.12.2022","Winterferien",""],"type":"holiday"},{"cells":["04.01.2023","Winterferien",""],"type":"holiday"},{"cells":["11.01.2023","Codes und Daten","Einstieg"]},{"cells":["18.01.2023","Codes und Daten","Zeichencodierung"],"type":"test"},{"cells":["25.01.2023","Codes und Daten","Zeichencodierung"]},{"cells":["01.02.2023","Codes und Daten","Zahlensysteme"]},{"cells":["25.01.2023","Notenschluss",""],"type":"event"},{"cells":["03.02.2023","Semesterende",""],"type":"event"}]'),i=JSON.parse('[{"cells":["18.08.2022","B","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["25.08.2022","A","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["01.09.2022","B","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["08.09.2022","A","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["15.09.2022","B","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["22.09.2022","Sonderwoche","",""],"type":"holiday"},{"cells":["29.09.2022","Herbstferien","",""],"type":"holiday"},{"cells":["06.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["13.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["20.10.2022","A","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["27.10.2022","B","Programmieren 1","Unterprogramme und Fehler"]},{"cells":["03.11.2022","A","Programmieren 1","Unterprogramme und Fehler"]},{"cells":["10.11.2022","B","Programmieren 1","Parameter"]},{"cells":["17.11.2022","A","Programmieren 1","Parameter"]},{"cells":["24.11.2022","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["01.12.2022","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["08.12.2022","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["15.12.2022","A & B. 14:00-15:30","Programmieren","Probe (schriftlich & praktisch)"],"type":"test"},{"cells":["22.12.2022","A&B Frei","",""],"type":"holiday"},{"cells":["29.12.2022","Winterferien","",""],"type":"holiday"},{"cells":["06.01.2023","Winterferien","",""],"type":"holiday"},{"cells":["13.01.2023","A","Programmieren 1","Verzweigungen"]},{"cells":["20.01.2023","B","Programmieren 1","Mini Projekt"]},{"cells":["25.01.2023","Notenschluss","",""],"type":"event"},{"cells":["27.01.2023","A","Programmieren 1","Mini Projekt"]},{"cells":["03.02.2023","B","Programmieren 1","Mini Projekt"]},{"cells":["03.02.2023","Semesterende","",""],"type":"event"}]'),c=JSON.parse('[{"color":"#ffff004d","cells":["Aviva","A","3.11.2022"]},{"color":"#ffff004d","cells":["Benjamin","A","3.11.2022"]},{"color":"#ffff004d","cells":["David","A","3.11.2022"]},{"color":"#ffff004d","cells":["Enes","A","3.11.2022"]},{"color":"#ffff004d","cells":["Florian","A","3.11.2022"]},{"color":"#ffff004d","cells":["Jacy","A","3.11.2022"]},{"color":"#ffff004d","cells":["Jamina","A","17.11.2022"]},{"color":"#ffff004d","cells":["Janik","A","17.11.2022"]},{"color":"#ffff004d","cells":["Jari","A","17.11.2022"]},{"color":"#ffff004d","cells":["Jasmin","A","17.11.2022"]},{"color":"#ffff004d","cells":["Naomi","A","17.11.2022"]},{"color":"#ffff004d","cells":["Sanja","A","17.11.2022"]},{"color":"#ff76002e","cells":["Fabian","B","27.10.2022"]},{"color":"#ff76002e","cells":["Ida","B","27.10.2022"]},{"color":"#ff76002e","cells":["Jaya","B","27.10.2022"]},{"color":"#ff76002e","cells":["Lena","B","27.10.2022"]},{"color":"#ff76002e","cells":["Leo","B","27.10.2022"]},{"color":"#ff76002e","cells":["Logethan","B","27.10.2022"]},{"color":"#ff76002e","cells":["Nell","B","10.11.2022"]},{"color":"#ff76002e","cells":["Nico","B","10.11.2022"]},{"color":"#ff76002e","cells":["Paul","B","10.11.2022"]},{"color":"#ff76002e","cells":["Sara","B","10.11.2022"]},{"color":"#ff76002e","cells":["Tobias","B","10.11.2022"]},{"color":"#ff76002e","cells":["Zo\xe9","B","10.11.2022"]}]');var m=r(71106);const p={sidebar_position:.1,sidebar_label:"26e",sidebar_custom_props:{id:"b690a135-2569-4a4c-80cf-a9fbf3833b3c"}},d=void 0,f={unversionedId:"home",id:"version-26e/home",title:"home",description:"<Snowfall",source:"@site/versioned_docs/version-26e/home.md",sourceDirName:".",slug:"/home",permalink:"/26e/home",draft:!1,tags:[],version:"26e",lastUpdatedAt:1669987273,formattedLastUpdatedAt:"2. Dez. 2022",sidebarPosition:.1,frontMatter:{sidebar_position:.1,sidebar_label:"26e",sidebar_custom_props:{id:"b690a135-2569-4a4c-80cf-a9fbf3833b3c"}},sidebar:"version-26e/sidebar",next:{title:"Browser",permalink:"/26e/ICT-Grundlagen/Browser"}},h={},u=[],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},y=g("Comment"),v=g("Solution"),b=g("Tabs"),k=g("TabItem"),N={toc:u};function P(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(m.Z,{style:{position:"fixed",width:"100vw",height:"100vh"},mdxType:"Snowfall"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"26e-informatik"},"26e Informatik"),(0,n.kt)(y,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)("h5",{parentName:"div",id:"word-probe"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Word Probe"),(0,n.kt)(y,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)(v,{webKey:"5ba6b51b-db2a-461c-a3d1-ac934806624f",open:!0,title:"Link zur Probe",mdxType:"Solution"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("a",{parentName:"p",href:"/text-templates/01-p26"},"\ud83d\udc49 Hier gehts zur Pr\xfcfung")),(0,n.kt)(y,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))))),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)("h5",{parentName:"div",id:"byod-test-pr\xfcfungsdaten"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"BYOD-Test Pr\xfcfungsdaten"),(0,n.kt)(y,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Bereiten Sie sich auf das angegebene Datum f\xfcr die BYOD-Pr\xfcfung vor."),(0,n.kt)(y,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)("div",{parentName:"div"},(0,n.kt)("details",{parentName:"div"},(0,n.kt)("summary",{parentName:"details"},"Pr\xfcfungsliste"),(0,n.kt)(l.ZP,{header:["Name","Halbklasse","Datum"],compact:!0,selectable:!0,rows:c,order:(0,s.Fl)(2),mdxType:"Table"}))),(0,n.kt)(y,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})))),(0,n.kt)(b,{defaultValue:"theorie",values:[{label:"Einzellektion",value:"theorie"},{label:"Praktikum",value:"hk"}],mdxType:"Tabs"},(0,n.kt)(k,{value:"theorie",mdxType:"TabItem"},(0,n.kt)(l.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,order:(0,s.Fl)(),mdxType:"Table"})),(0,n.kt)(k,{value:"hk",mdxType:"TabItem"},(0,n.kt)(l.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,order:(0,s.Fl)(),mdxType:"Table"}))))}P.isMDXComponent=!0}}]);