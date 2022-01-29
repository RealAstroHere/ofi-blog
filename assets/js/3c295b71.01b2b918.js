"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[16136],{63432:function(e,t,l){l.d(t,{ZP:function(){return v}});var s,r,n=l(83117),o=l(3435),i=l(21073),a=l(67294),c=l(92814),p=l(51436),d={"ofi-table":"ofi-table_vQDJ",holiday:"holiday_X3CJ",event:"event_kQKt",test:"test_MrRG",selectable:"selectable_vQxW",info:"info_zGJT",currentWeek:"currentWeek_Pnu7",collapsing:"collapsing_d0sD",striped:"striped_TrfX",celled:"celled_N0Rr",compact:"compact_IdyI",tiny:"tiny_pWmG",small:"small_g6zt",normal:"normal_CYjM",large:"large_KfPV"},u=l(86010),h=l(96921);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(r||(r={}));var m=((s={})[r.Holiday]=p.skR,s[r.Event]=p.$nv,s[r.Test]=p.Xf_,s[r.Info]=p.YHc,s),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,l=e.icon,s=e.date,r=this.props.value;return s&&(r=function(e){var t=e.getDay();return a.createElement("span",{style:{fontFamily:"monospace"}},h.p3[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(s)),a.createElement("td",{align:t},r,l?" ":"",l)},t}(a.Component),g=function(e){var t=new Date(e.getFullYear(),0,1),l=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(l/7)+1},f=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var l=t.prototype;return l.icon=function(){if(this.props.type)return a.createElement(c.G,{icon:m[this.props.type]})},l.render=function(){var e=this,t=this.props,l=t.type,s=t.cells,r={className:[]};this.props.className&&r.className.push(this.props.className),l&&r.className.push(d[l]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var c=s[this.props.dateIndex];"string"==typeof c&&(i=function(e){var t=e.match((0,o.Z)(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(c))&&g(new Date)===g(i)&&r.className.push(r.className+" "+d.currentWeek)}return a.createElement("tr",(0,n.Z)({},r,{className:u.default.apply(void 0,r.className)}),s.map((function(t,l){var s={value:t};return 0===l&&(s.icon=e.icon()),e.props.alignments&&e.props.alignments.length>l?s.align=e.props.alignments[l]:s.align="left",a.createElement(y,(0,n.Z)({},s,{key:l,date:e.props.dateIndex===l?i:void 0}))})))},t}(a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return a.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,u.default)(d["ofi-table"],d[this.props.size],d[this.props.compact&&"compact"],d[this.props.celled&&"celled"],d[this.props.striped&&"striped"],d[this.props.collapsing&&"collapsing"],d[this.props.selectable&&"selectable"])},a.createElement("thead",null,this.props.header&&a.createElement("tr",null,this.props.header.map((function(t,l){var s,r=((null==(s=e.props.alignments)?void 0:s.length)||0)>l?e.props.alignments[l]:"left";return a.createElement("th",{align:r,key:l},t)})))),a.createElement("tbody",null,this.props.rows.map((function(l,s){return a.createElement(f,(0,n.Z)({alignments:e.props.alignments},l,{key:s,dateIndex:t}))}))))},t}(a.Component)},6404:function(e,t,l){l.r(t),l.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var s=l(83117),r=l(80102),n=(l(67294),l(3905)),o=l(63432),i=JSON.parse('[{"cells":["26.01.2022","Computer","Logische Schaltungen 1"]},{"cells":["02.02.2022","Computer","Logische Schaltungen 2"]},{"cells":["09.02.2022","Computer","Video erstellen: Halbaddierer"]},{"cells":["16.02.2022","Sportwoche",""],"type":"holiday"},{"cells":["23.02.2022","Computer","Video finalisieren&schneiden"]},{"cells":["02.03.2022","Besuch Bundeshaus",""],"type":"holiday"},{"cells":["06.03.2022","Videoabgabe",""],"type":"test"},{"cells":["09.03.2022","Computer","Rechnerarchitektur"]},{"cells":["16.03.2022","Computer","Rechnerarchitektur"]},{"cells":["23.03.2022","Computer","Betriebssysteme"]},{"cells":["30.03.2022","Bilder","Grafikformate"]},{"cells":["06.04.2022","Sonderwoche",""],"type":"holiday"},{"cells":["13.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["20.04.2022","Fr\xfchlingsferien",""],"type":"holiday"},{"cells":["27.04.2022","Bilder","Kompression"]},{"cells":["04.05.2022","Bilder","Urheberrecht"]},{"cells":["11.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["18.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["25.05.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["01.06.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["08.06.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["15.06.2022","Pr\xe4ventionswoche",""],"type":"holiday"},{"cells":["23.06.2022","Projektabgabe",""],"type":"test"},{"cells":["22.06.2022","Projekt","\ud83d\ude80\ud83d\udea6\ud83e\udde8\ud83e\ude9a\u2699\ufe0f\ud83c\udf21\ud83e\udd16"]},{"cells":["29.06.2022","Projekt Austauschen",""]},{"cells":["30.06.2022","Notenschluss",""],"type":"event"},{"cells":["06.07.2022","\ud83d\udea7",""]}]'),a=["components"],c={sidebar_position:1},p="24K",d={unversionedId:"home",id:"version-24K/home",title:"24K",description:"<Table",source:"@site/versioned_docs/version-24K/home.mdx",sourceDirName:".",slug:"/home",permalink:"/24K/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/home.mdx",tags:[],version:"24K",lastUpdatedAt:1643488361,formattedLastUpdatedAt:"1/29/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24K/sidebar",next:{title:"BYOD Basics",permalink:"/24K/category/byod-basics"}},u=[],h={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,a);return(0,n.kt)("wrapper",(0,s.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"24k"},"24K"),(0,n.kt)(o.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:i,mdxType:"Table"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"3. Semester"),(0,n.kt)(o.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["18.08.2021","Netzwerke","Schichtenmodell, TCP/IP-Schichtenmodell"]},{cells:["25.08.2021","Netzwerke","Codierung, IP-Adresse"]},{cells:["01.09.2021","Netzwerke","Routing & DNS"]},{cells:["08.09.2021","Netzwerke","Protokolle, World Wide Web"]},{cells:["15.09.2021","Netzwerke","Workshop"]},{cells:["22.09.2021","Netzwerke","Test"],type:"test"},{cells:["29.09.2021","Umweltwoche",""],type:"holiday"},{cells:["06.10.2021","Herbstferien",""],type:"holiday"},{cells:["13.10.2021","Herbstferien",""],type:"holiday"},{cells:["20.10.2021","Herbstferien",""],type:"holiday"},{cells:["27.10.2021","Kryptologie","Antike Verschl\xfcsselungsverfahren"]},{cells:["03.11.2021","Kryptologie","Symmetrische Verschl\xfcsselung"]},{cells:["10.11.2021","Kryptologie","Semaine d'\xe9tudes"],type:"holiday"},{cells:["17.11.2021","Kryptologie","Asymmetrische Verschl\xfcsselung"]},{cells:["24.11.2021","Kryptologie","Hashfunktion"]},{cells:["01.12.2021","Kryptologie","Digitale Signaturen"]},{cells:["08.12.2021","Kryptologie","Kryptologie im Alltag"]},{cells:["15.12.2021","Kryptologie","Test"],type:"test"},{cells:["22.12.2021","Kryptologie","Steganographie oder Funktionsweise Corona Tracing"]},{cells:["29.12.2021","Winterferien",""],type:"holiday"},{cells:["05.01.2022","Winterferien",""],type:"holiday"},{cells:["12.01.2022","Computer","Grundlagen"]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["19.01.2022","Computer","Digitale Schaltungen"]},{cells:["26.01.2022","Computer",""]}],mdxType:"Table"})))}m.isMDXComponent=!0}}]);