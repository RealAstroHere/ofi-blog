"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[38860],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,k=c["".concat(p,".").concat(u)]||c[u]||l[u]||r;return a?n.createElement(k,m(m({ref:t},o),{},{components:a})):n.createElement(k,m({ref:t},o))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,m=new Array(r);m[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,m[1]=d;for(var s=2;s<r;s++)m[s]=a[s];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),i=a(67294),r=a(86010),m=a(72389),d=a(67392),p=a(7094),s=a(12466);const o="tabList__CuJ",l="tabItem_LNqP";function c(e){var t,a;const{lazy:m,block:c,defaultValue:u,values:k,groupId:g,className:v}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,d.l)(N,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===u?u:null!=(t=null!=u?u:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,p.U)(),[x,T]=(0,i.useState)(b),z=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==x&&N.some((t=>t.value===e))&&T(e)}const Z=e=>{const t=e.currentTarget,a=z.indexOf(t),n=N[a].value;n!==x&&(C(t),T(n),null!=g&&w(g,String(n)))},V=e=>{var t;let a=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{var n;const t=z.indexOf(e.currentTarget)+1;a=null!=(n=z[t])?n:z[0];break}case"ArrowLeft":{var i;const t=z.indexOf(e.currentTarget)-1;a=null!=(i=z[t])?i:z[z.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.default)("tabs-container",o)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":c},v)},N.map((e=>{let{value:t,label:a,attributes:m}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>z.push(e),onKeyDown:V,onClick:Z},m,{className:(0,r.default)("tabs__item",l,null==m?void 0:m.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),m?(0,i.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,m.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),i=a(65488);const r={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},m=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(i.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:r[e],value:e}))))},e.children);var a}},14254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var n=a(83117),i=(a(67294),a(3905)),r=a(85107);const m={sidebar_custom_props:{id:"4cc087b3-7cc8-478e-a947-841b63f0198e"}},d="Video Editieren",p={unversionedId:"Video-Editor/video-editor",id:"Video-Editor/video-editor",title:"Video Editieren",description:'Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere Szenen oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.',source:"@site/docs/Video-Editor/01-video-editor.md",sourceDirName:"Video-Editor",slug:"/Video-Editor/video-editor",permalink:"/Video-Editor/video-editor",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Video-Editor/01-video-editor.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:1,frontMatter:{sidebar_custom_props:{id:"4cc087b3-7cc8-478e-a947-841b63f0198e"}},sidebar:"sidebar",previous:{title:"Podcast",permalink:"/OFI-Projekt/podcast"},next:{title:"v24",permalink:"/category/v24-1"}},s={},o=[{value:"Video Editor \xf6ffnen",id:"video-editor-\xf6ffnen",level:2},{value:"Titel und Text",id:"titel-und-text",level:2},{value:"Zuschneiden und Aufteilen",id:"zuschneiden-und-aufteilen",level:2},{value:"Wiedergabegeschwindigkeit",id:"wiedergabegeschwindigkeit",level:3},{value:"Tonspur",id:"tonspur",level:2},{value:"Tonspuren aufnehmen",id:"tonspuren-aufnehmen",level:3},{value:"Exportieren",id:"exportieren",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=l("Comment"),u=l("TabItem"),k=l("Figure"),g={toc:o};function v(e){let{components:t,...m}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"video-editieren"},"Video Editieren"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere ",(0,i.kt)("strong",{parentName:"p"},"Szenen"),' oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.'),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Dazu kann unter Windows der Video-Editor in der Foto-App und unter Mac die iMovie App verwendet werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Um ein Video mit mehreren Szenen zusammenzuschneiden, kann wie folgt vorgegangen werden:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Video-Rohmaterial erstellen:")," Wichtig ist prim\xe4r das ",(0,i.kt)("strong",{parentName:"p"},"Bildmaterial"),", die ",(0,i.kt)("strong",{parentName:"p"},"Tonspur")," kann sp\xe4ter noch aufgenommen und hinzugef\xfcgt werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Videos zuschneiden:")," Ein Video Projekt erstellen, die verschiedenen Sequenzen hinzuf\xfcgen, zuschneiden und fehlerhafte Teile entfernen."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Story erz\xe4hlen: Videos anordnen"),": Die einzelnen Clips so anordnen, dass die gew\xfcnschte Geschichte nachvollziehbar und spannend erz\xe4hlt werden kann."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Langweilige/Technische Passagen schneller abspielen"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberg\xe4nge zwischen den Sequenzen hinzuf\xfcgen - Achtung: oft lenken schlichte und relative schnelle \xdcbergangseffekte weniger vom Inhalt ab als pomp\xf6se Effekte."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"im Hinblick auf die folgende Vertonung des Videos: im Hinterkopf halten, wo es viel oder wenig Erkl\xe4rungen braucht"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Tonspur hinzuf\xfcgen"),": \xdcberlegen Sie sich genau, was Sie mitteilen wollen und nehmen Sie anschliessend den Text auf. Vermeiden Sie st\xf6rende Hintergrundger\xe4usche."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wichtige Dinge k\xf6nnen auch mit Text zus\xe4tzlich untermauert werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"F\xfcr Teile ohne Sprache kann auch Musik verwendet werden. "),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Exportieren des Videos"),": Die einzelnen Videosequenzen, Bilder und Tonspuren zu einem Video zusammenf\xfcgen - dieser Prozess wird ",(0,i.kt)("strong",{parentName:"p"},"Rendering")," genannt."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Hilfreiche Links inkl. weiteren Anleitungen:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/erstellen-von-filmen-mit-einem-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6"},"Windows Video-Editor")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://www.apple.com/imovie/"},"iMovie")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"video-editor-\xf6ffnen"},"Video Editor \xf6ffnen"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcber die Fotos-App k\xf6nnen auch Video-Projekte erstellt werden:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Video-Editor",src:a(26207).Z,width:"3000",height:"1906"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video-Editor",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unter Mac OS X muss die Software ",(0,i.kt)("a",{parentName:"p",href:"https://www.apple.com/de/imovie/"},"iMovie \ud83d\udd17")," aus dem App-Store heruntergeladen werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Neues Projekt erstellen",src:a(90916).Z,width:"3104",height:"1904"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Neues Projekt erstellen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Medien per Drag&amp;Drop hinzuf\xfcgen",src:a(72367).Z,width:"3104",height:"1904"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Medien per Drag&Drop hinzuf\xfcgen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"titel-und-text"},"Titel und Text"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Zu Beginn eines Videos soll ein Titel angezeigt werden. Die mitwirkenden Personen werden entweder auch auf der Titelseite, oder aber im Abspann vermerkt."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wichtige Aussagen im Video k\xf6nnen zus\xe4tzlich mit Text untermauert werden. Die Dauer der Texteinblendung kann jeweils eingestellt werden und sollte min. ",(0,i.kt)("inlineCode",{parentName:"p"},"3s")," dauern."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Hintergrundfarbe einstellen",src:a(93303).Z,width:"3000",height:"1906"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hintergrundfarbe einstellen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",src:a(83902).Z,width:"3000",height:"1906"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Titel hinzuf\xfcgen und Style w\xe4hlen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"}))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Hintergrundfarbe einstellen",src:a(13373).Z,width:"3104",height:"1904"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hintergrundfarbe einstellen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",src:a(52154).Z,width:"3104",height:"1904"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Titel hinzuf\xfcgen und Style w\xe4hlen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"zuschneiden-und-aufteilen"},"Zuschneiden und Aufteilen"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Das Aufteilen von Videos ist besonders hilfreich, wenn"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"fehlerhafte Teile entfernt werden sollen oder"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"die Geschwindigkeit einzelner Teile ver\xe4ndert werden muss."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})))),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Video aufteilen",src:a(25869).Z,width:"3000",height:"1906"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video aufteilen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"}))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Video aufteilen",src:a(52677).Z,width:"2880",height:"1800"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video aufteilen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"wiedergabegeschwindigkeit"},"Wiedergabegeschwindigkeit"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"Geschwindigkeit \xe4ndern --max-width=450px",src:a(7218).Z,width:"1630",height:"726"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Geschwindigkeit \xe4ndern",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"}))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"Geschwindigkeit \xe4ndern --max-width=450px",src:a(14911).Z,width:"1278",height:"882"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Geschwindigkeit \xe4ndern",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"tonspur"},"Tonspur"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein Video besitzt normalerweise bereits eine Tonspur. Das Video kann aber auch neu vertont werden, indem neue Tonspuren hinzugef\xfcgt werden. F\xfcr jede Tonspur kann die Lautst\xe4rke individuell eingestellt werden. So lassen sich auch mehrere Tonspuren unterschiedlicher Lautst\xe4rke \xfcberlagern."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"hintergrundmusik"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Hintergrundmusik"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Tonspur mit gesprochenem Text soll immer klar und verst\xe4ndlich sein. Lieber verzichtet man auf eine durchgehende Hintergrundmusik, als dass dadurch die Klarheit Stimme leidet."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})))),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},'Oben rechts "Benutzerdefiniertes Audio" w\xe4hlen und anschliessend mehrere Audiodateien hinzuf\xfcgen. Die Audiospuren lassen sich durch verschieben der Regler direkt zuschneiden. Die Tonspuren k\xf6nnen auch \xfcberlagert werden.   '),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(19614).Z,width:"3000",height:"1906"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Durch Klicken auf das Lautsprechersymbol kann die Lautst\xe4rke f\xfcr diese Tonspur eingestellt werden. Zudem kann eingestellt werden, ob die Tonspur direkt mit der gew\xe4hlten Lautst\xe4rke abgespielt wird, oder ein \xdcbergang verwendet wird."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{maxWidth:"300px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"--max-width=300px",src:a(65129).Z,width:"552",height:"322"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:12,mdxType:"Comment"}))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Soll die Tonspur des Videos ver\xe4ndert werden, muss zuerst die Tonspur vom Video separiert werden: "),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(86182).Z,width:"2880",height:"1800"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:13,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Um die Lautst\xe4rke der Tonspur zu \xe4ndern, kann die horizontale Linie in der Tonspur nach Oben/Unten verschoben werden. Zudem lassen sich die Lautst\xe4rken zu Beginn oder am Ende als \xdcbergang Ein- bzw. Ausblenden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(17913).Z,width:"776",height:"548"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:14,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"tonspuren-aufnehmen"},"Tonspuren aufnehmen"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Gesprochener Text wird am besten direkt zum Abspielen des Videos aufgenommen."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unter Windows wird zum Aufnehmen einer Tonspur das Programm ",(0,i.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/verwendung-des-sprachrekorders-6fbb53d5-0539-abda-a9a4-0bcb84a778e7"},"Sprachrekorder")," ben\xf6tigt."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:30,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Sprache aufnehmen",src:a(32869).Z,width:"1958",height:"1568"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Sprache aufnehmen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:15,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die gespeicherten Aufzeichnungen k\xf6nnen anschliessend als Tonspur hinzugef\xfcgt werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:31,mdxType:"Comment"}))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In iMovie ist ein Sprachrekorder direkt eingebaut:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:32,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"Sprache hinzuf\xfcgen --max-width=450px",src:a(10901).Z,width:"1278",height:"894"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Sprache hinzuf\xfcgen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:16,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"exportieren"},"Exportieren"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ist das Video fertiggestellt, kann es als Videodatei exportiert werden. Beim exportieren wird die Darstellung jedes einzelnen Bildes ",(0,i.kt)("em",{parentName:"p"},"(f\xfcr eine Sekunde Film sind es 30 Bilder)")," berechnet, wobei Text\xfcberlagerungen, Tondateien und Spezialeffekte zusammengef\xfcgt werden. Dieser Prozess kann sehr lange dauern und ist abh\xe4ngig von der Geschwindigkeit der Grafikkarte. Dieser Prozess wird auch ",(0,i.kt)("strong",{parentName:"p"},"Rendering")," genannt."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:33,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},'Oben rechts auf "Fertig stellen" klicken und das Video abspeichern.'),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:34,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{maxWidth:"300px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"--max-width=300px",src:a(80227).Z,width:"918",height:"602"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:17,mdxType:"Comment"}))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},'Oben rechts auf das "Teilen" Symbol klicken und "Datei exportieren" w\xe4hlen.'),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:35,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"--max-width=450px",src:a(79795).Z,width:"1724",height:"1070"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:18,mdxType:"Comment"})))))}v.isMDXComponent=!0},90916:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-video-editor-f8315f17192c225ac23957882fe79d12.png"},72367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-video-editor_b-bed6cf8a7909ea1f233ffa4b5e30075d.png"},13373:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-video-editor-bg-color-6d007f3e342bb1d3ec6bf4a7336c8dc0.png"},52154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03-video-editor-bg-text-e5feda1ef7844b2871bdbafe2777dd04.png"},52677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04-video-editor-split-265e2068ec3bc0d8278dd804bebd594c.png"},14911:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05-video-editor-speed-0e4992a59bb254acf308c3ee4154bc06.png"},10901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06-video-editor-speech-2a9c767a8a9713b97cdcf214e15a3847.png"},86182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/07-video-editor-separate-sound-bd1ea9467cb7012bc89a6179f6b6b93a.png"},17913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/07-video-editor-sound-1-e13bec2f9023c492731b52e148090473.png"},79795:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/09-video-editor-export-229467d7acb4c50afad3fd36e9d79207.png"},26207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-video-editor-170bede5dbf13fa461b8741c73c1ac85.png"},93303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-video-editor-bg-color-616e8d1189d5021e10124165d82ba7ca.png"},83902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03-video-editor-bg-text-3a3350dfd4740533701e989d2952f7c4.png"},25869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04-video-editor-split-5339f28a8736b785dd4cc73d4d1ad181.png"},7218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05-video-editor-speed-76bf68d078f6537d0fa49d93045bee65.png"},32869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06-video-editor-speech-13891986a063b5cbc8362fe2b8847a9c.png"},19614:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/07-video-editor-sound-1-4f8b851b965dd5e995c29ec09c14aaec.png"},65129:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/08-video-editor-sound-2-065061b13a364bb695623096c5f1bbae.png"},80227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/09-video-editor-export-e363b9d1f9584cb4e7de54ef407e38b7.png"}}]);