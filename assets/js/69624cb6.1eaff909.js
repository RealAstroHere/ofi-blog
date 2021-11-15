"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[14860],{63432:function(e,t,n){n.d(t,{ZP:function(){return v}});var r,o,l=n(87462),s=n(26528),i=n(94578),a=n(67294),p=n(92814),c=n(51436),d={"ofi-table":"ofi-table_PWza",holiday:"holiday_2UxX",event:"event_2NQ2",test:"test_3z-p",selectable:"selectable_3poS",info:"info_2kxM",currentWeek:"currentWeek_2Orb",collapsing:"collapsing_AbTw",striped:"striped_1-4d",celled:"celled_kPfT",compact:"compact_2GyZ",tiny:"tiny_2YgH",small:"small_P_xa",normal:"normal_VkiZ",large:"large_1u8O"},u=n(86010);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(o||(o={}));var h=((r={})[o.Holiday]=c.skR,r[o.Event]=c.$nv,r[o.Test]=c.Xf_,r[o.Info]=c.YHc,r),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,n=e.icon,r=e.date,o=this.props.value;return r&&(o=function(e){var t=e.getDay();return a.createElement("span",{style:{fontFamily:"monospace"}},f[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(r)),a.createElement("td",{align:t},o,n?" ":"",n)},t}(a.Component),f=["So","Mo","Di","Mi","Do","Fr","Sa"],y=function(e){var t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(n/7)+1},g=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var n=t.prototype;return n.icon=function(){if(this.props.type)return a.createElement(p.G,{icon:h[this.props.type]})},n.render=function(){var e=this,t=this.props,n=t.type,r=t.cells,o={};n&&(o.className=d[n]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var p=r[this.props.dateIndex];"string"==typeof p&&(i=function(e){var t=e.match((0,s.Z)(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(p))&&y(new Date)===y(i)&&(o.className=o.className+" "+d.currentWeek)}return a.createElement("tr",o,r.map((function(t,n){var r={value:t};return 0===n&&(r.icon=e.icon()),e.props.alignments&&e.props.alignments.length>n?r.align=e.props.alignments[n]:r.align="left",a.createElement(m,(0,l.Z)({},r,{key:n,date:e.props.dateIndex===n?i:void 0}))})))},t}(a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return a.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,u.default)(d["ofi-table"],d[this.props.size],d[this.props.compact&&"compact"],d[this.props.celled&&"celled"],d[this.props.striped&&"striped"],d[this.props.collapsing&&"collapsing"],d[this.props.selectable&&"selectable"])},a.createElement("thead",null,this.props.header&&a.createElement("tr",null,this.props.header.map((function(t,n){var r,o=((null==(r=e.props.alignments)?void 0:r.length)||0)>n?e.props.alignments[n]:"left";return a.createElement("th",{align:o,key:n},t)})))),a.createElement("tbody",null,this.props.rows.map((function(n,r){return a.createElement(g,(0,l.Z)({alignments:e.props.alignments},n,{key:r,dateIndex:t}))}))))},t}(a.Component)},5716:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),s=n(63432),i=["components"],a={sidebar_position:1},p="24L",c={unversionedId:"home",id:"version-24L/home",isDocsHomePage:!1,title:"24L",description:"<Table",source:"@site/versioned_docs/version-24L/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24L/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/home.mdx",tags:[],version:"24L",lastUpdatedAt:1634634325,formattedLastUpdatedAt:"10/19/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24L/sidebar",next:{title:"Basics",permalink:"/24L/BYOD-Basics/overview"}},d=[],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"24l"},"24L"),(0,l.kt)(s.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","Schulstart","Asufall"],type:"holiday"},{cells:["23.08.2021","Netzwerke","Schichtenmodell, TCP/IP-Schichtenmodell"]},{cells:["30.08.2021","Netzwerke","Codierung, IP-Adresse"]},{cells:["06.09.2021","Netzwerke","Routing & DNS"]},{cells:["13.09.2021","Netzwerke","Protokolle, World Wide Web"]},{cells:["20.09.2021","Netzwerke","Workshop"]},{cells:["27.09.2021","Umweltwoche",""],type:"holiday"},{cells:["04.10.2021","Herbstferien",""],type:"holiday"},{cells:["11.10.2021","Herbstferien",""],type:"holiday"},{cells:["18.10.2021","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","Netzwerke","Test"],type:"test"},{cells:["01.11.2021","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{cells:["08.11.2021","Kryptologie","Semaine d'\xe9tudes"],type:"holiday"},{cells:["15.11.2021","Kryptologie","Symmetrische Verschl\xfcsselung"]},{cells:["22.11.2021","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{cells:["29.11.2021","Kryptologie","Hashfunktion"]},{cells:["06.12.2021","Kryptologie","Digitale Signaturen"]},{cells:["13.12.2021","Kryptologie","Test"],type:"test"},{cells:["20.12.2021","Kryptologie","Steganographie oder Funktionsweise Corona Tracing"]},{cells:["27.12.2021","Winterferien",""],type:"holiday"},{cells:["03.01.2022","Winterferien",""],type:"holiday"},{cells:["10.01.2022","Datenbanken",""]},{cells:["17.01.2022","Datenbanken",""]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["24.01.2022","Datenbanken",""]}],mdxType:"Table"}))}h.isMDXComponent=!0}}]);