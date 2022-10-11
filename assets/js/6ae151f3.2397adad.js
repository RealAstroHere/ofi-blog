"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[24056],{63432:(e,t,l)=>{l.d(t,{ZP:()=>f});var a=l(83117),r=l(67294);const s={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"};var n=l(86010),o=l(96921);let i;!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(i||(i={}));const c={[i.Holiday]:"mdi-beach",[i.Event]:"mdi-calendar",[i.Test]:"mdi-school",[i.Info]:"mdi-information"};class m extends r.Component{render(){const{align:e,icon:t,date:l}=this.props;var a=this.props.value;return l&&(a=(e=>{const t=e.getDay();return r.createElement("span",{style:{fontFamily:"monospace"}},o.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")})(l)),r.createElement("td",{align:e},a,t?" ":"",t)}}const d=e=>{var t=new Date(e.getFullYear(),0,1),l=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(l/7)+1};class p extends r.Component{icon(){if(this.props.type)return r.createElement("i",{className:(0,n.default)(c[this.props.type],"mdi")})}render(){const{type:e,cells:t}=this.props,l={className:[]};this.props.className&&l.className.push(this.props.className),e&&l.className.push(s[e]);var o=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){const e=t[this.props.dateIndex];"string"==typeof e&&(o=(e=>{const t=e.match(/(?<d>\d+)\.(?<m>\d+)\.(?<y>\d+)/);if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)})(e))&&d(new Date)===d(o)&&l.className.push(l.className+" "+s.currentWeek)}return r.createElement("tr",(0,a.Z)({},l,{className:(0,n.default)(...l.className),style:{background:this.props.color}}),t.map(((e,t)=>{const l={value:e};return 0===t&&(l.icon=this.icon()),this.props.alignments&&this.props.alignments.length>t?l.align=this.props.alignments[t]:l.align="left",r.createElement(m,(0,a.Z)({},l,{key:t,date:this.props.dateIndex===t?o:void 0}))})))}}class f extends r.Component{render(){const e=(this.props.header||[]).indexOf("Datum"),t=this.props.order?this.props.order(this.props.rows):this.props.rows;return r.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,n.default)(s["ofi-table"],s[this.props.size],s[this.props.compact&&"compact"],s[this.props.celled&&"celled"],s[this.props.striped&&"striped"],s[this.props.collapsing&&"collapsing"],s[this.props.selectable&&"selectable"])},r.createElement("thead",null,this.props.header&&r.createElement("tr",null,this.props.header.map(((e,t)=>{var l;const a=((null==(l=this.props.alignments)?void 0:l.length)||0)>t?this.props.alignments[t]:"left";return r.createElement("th",{align:a,key:t},e)})))),r.createElement("tbody",null,t.map(((t,l)=>r.createElement(p,(0,a.Z)({alignments:this.props.alignments},t,{key:l,dateIndex:e}))))))}}},62982:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>h});var a=l(83117),r=(l(67294),l(3905)),s=(l(61839),l(63432)),n=l(96921);const o=JSON.parse('[{"cells":["16.08.2022","Einstieg","ICT Einstieg"]},{"cells":["23.08.2022","ICT","BYOD Basics"]},{"cells":["30.08.2022","ICT","BYOD Basics"]},{"cells":["06.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["13.09.2022","ICT","Office: Layout und Gliederung"]},{"cells":["20.09.2022","Sonderwoche",""],"type":"holiday"},{"cells":["27.09.2022","Herbstferien",""],"type":"holiday"},{"cells":["04.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["11.10.2022","Herbstferien",""],"type":"holiday"},{"cells":["18.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["25.10.2022","ICT","Office: Layout und Gliederung"]},{"cells":["01.11.2022","ICT","Kurztest Office"],"type":"test"},{"cells":["08.11.2022","Informatik Biber","Wettbewerb"],"type":"event"},{"cells":["15.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["17.11.2022","Notenschluss Zwischenzeugnis",""],"type":"event"},{"cells":["22.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["29.11.2022","Daten","Office: Tabellenkalkulation"]},{"cells":["06.12.2022","Kantonaler Fachschaftstag",""],"type":"holiday"},{"cells":["13.12.2022","Daten","Datenbanken"]},{"cells":["20.12.2022","Daten","Datenbanken"]},{"cells":["27.12.2022","Winterferien",""],"type":"holiday"},{"cells":["04.01.2023","Winterferien",""],"type":"holiday"},{"cells":["11.01.2023","Daten","Wiederholung"]},{"cells":["18.01.2023","Daten","Kurztest Daten"],"type":"test"},{"cells":["25.01.2023","Codes und Daten","Zeichencodierung"]},{"cells":["01.02.2023","Codes und Daten","Zahlensysteme"]},{"cells":["25.01.2023","Notenschluss",""],"type":"event"},{"cells":["03.02.2023","Semesterende",""],"type":"event"}]'),i=JSON.parse('[{"cells":["18.08.2022","B","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["25.08.2022","A","Programmieren 1","Algorithmen & RoboZZle"]},{"cells":["01.09.2022","B","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["08.09.2022","A","Programmieren 1","Algorithmen & Einstieg Turtlegrafik"]},{"cells":["15.09.2022","B","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["22.09.2022","Sonderwoche","",""],"type":"holiday"},{"cells":["29.09.2022","Herbstferien","",""],"type":"holiday"},{"cells":["06.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["13.10.2022","Herbstferien","",""],"type":"holiday"},{"cells":["20.10.2022","A","Programmieren 1","Wiederholte Ausf\xfchrung"]},{"cells":["27.10.2022","B","Programmieren 1","Unterprogramme"]},{"cells":["03.11.2022","A","Programmieren 1","Unterprogramme"]},{"cells":["10.11.2022","B","Programmieren 1","Parameter"]},{"cells":["17.11.2022","A","Programmieren 1","Parameter"]},{"cells":["24.11.2022","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["01.12.2022","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["08.12.2022","B","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["15.12.2022","A","Programmieren 1","Variablen, Eingabe & Ausgabe"]},{"cells":["22.12.2022","B","Programmieren 1","Verzweigungen"]},{"cells":["29.12.2022","Winterferien","",""],"type":"holiday"},{"cells":["06.01.2023","Winterferien","",""],"type":"holiday"},{"cells":["13.01.2023","A","Programmieren 1","Verzweigungen"]},{"cells":["20.01.2023","B","Programmieren 1","Mini Projekt"]},{"cells":["25.01.2023","Notenschluss","",""],"type":"event"},{"cells":["27.01.2023","A","Programmieren 1","Mini Projekt"]},{"cells":["03.02.2023","B","Programmieren 1","Mini Projekt"]},{"cells":["03.02.2023","Semesterende","",""],"type":"event"}]'),c=JSON.parse('[{"color":"#ffff004d","cells":["Aviva","A","3.11.2022"]},{"color":"#ffff004d","cells":["Benjamin","A","3.11.2022"]},{"color":"#ffff004d","cells":["David","A","3.11.2022"]},{"color":"#ffff004d","cells":["Enes","A","3.11.2022"]},{"color":"#ffff004d","cells":["Florian","A","3.11.2022"]},{"color":"#ffff004d","cells":["Jacy","A","3.11.2022"]},{"color":"#ffff004d","cells":["Jamina","A","17.11.2022"]},{"color":"#ffff004d","cells":["Janik","A","17.11.2022"]},{"color":"#ffff004d","cells":["Jari","A","17.11.2022"]},{"color":"#ffff004d","cells":["Jasmin","A","17.11.2022"]},{"color":"#ffff004d","cells":["Naomi","A","17.11.2022"]},{"color":"#ffff004d","cells":["Sanja","A","17.11.2022"]},{"color":"#ff76002e","cells":["Fabian","B","27.10.2022"]},{"color":"#ff76002e","cells":["Ida","B","27.10.2022"]},{"color":"#ff76002e","cells":["Jaya","B","27.10.2022"]},{"color":"#ff76002e","cells":["Lena","B","27.10.2022"]},{"color":"#ff76002e","cells":["Leo","B","27.10.2022"]},{"color":"#ff76002e","cells":["Logethan","B","27.10.2022"]},{"color":"#ff76002e","cells":["Nell","B","10.11.2022"]},{"color":"#ff76002e","cells":["Nico","B","10.11.2022"]},{"color":"#ff76002e","cells":["Paul","B","10.11.2022"]},{"color":"#ff76002e","cells":["Sara","B","10.11.2022"]},{"color":"#ff76002e","cells":["Tobias","B","10.11.2022"]},{"color":"#ff76002e","cells":["Zo\xe9","B","10.11.2022"]}]'),m={sidebar_position:.1,sidebar_label:"26e",sidebar_custom_props:{id:"b690a135-2569-4a4c-80cf-a9fbf3833b3c"}},d="26e Informatik",p={unversionedId:"home",id:"version-26e/home",title:"26e Informatik",description:"Bereiten Sie sich auf das angegebene Datum f\xfcr die BYOD-Pr\xfcfung vor.",source:"@site/versioned_docs/version-26e/home.md",sourceDirName:".",slug:"/home",permalink:"/26e/home",draft:!1,tags:[],version:"26e",lastUpdatedAt:1665478689,formattedLastUpdatedAt:"11. Okt. 2022",sidebarPosition:.1,frontMatter:{sidebar_position:.1,sidebar_label:"26e",sidebar_custom_props:{id:"b690a135-2569-4a4c-80cf-a9fbf3833b3c"}},sidebar:"version-26e/sidebar",next:{title:"Browser",permalink:"/26e/ICT-Grundlagen/Browser"}},f={},h=[],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=g("Comment"),b=g("Tabs"),y=g("TabItem"),v={toc:h};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"26e-informatik"},"26e Informatik"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"byod-test-pr\xfcfungsdaten"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"BYOD-Test Pr\xfcfungsdaten"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bereiten Sie sich auf das angegebene Datum f\xfcr die BYOD-Pr\xfcfung vor."),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("div",{parentName:"div"},(0,r.kt)("details",{parentName:"div"},(0,r.kt)("summary",{parentName:"details"},"Pr\xfcfungsliste"),(0,r.kt)(s.ZP,{header:["Name","Halbklasse","Datum"],compact:!0,selectable:!0,rows:c,order:(0,n.Fl)(2),mdxType:"Table"}))),(0,r.kt)(u,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})))),(0,r.kt)(b,{defaultValue:"theorie",values:[{label:"Einzellektion",value:"theorie"},{label:"Praktikum",value:"hk"}],mdxType:"Tabs"},(0,r.kt)(y,{value:"theorie",mdxType:"TabItem"},(0,r.kt)(s.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:o,order:(0,n.Fl)(),mdxType:"Table"})),(0,r.kt)(y,{value:"hk",mdxType:"TabItem"},(0,r.kt)(s.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,order:(0,n.Fl)(),mdxType:"Table"}))))}k.isMDXComponent=!0}}]);