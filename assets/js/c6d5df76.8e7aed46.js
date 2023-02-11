"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[38860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||l[u]||i;return n?a.createElement(g,m(m({ref:t},o),{},{components:n})):a.createElement(g,m({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,m=new Array(i);m[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,m[1]=d;for(var s=2;s<i;s++)m[s]=n[s];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(83117),r=n(67294),i=n(86010),m=n(12466),d=n(76775),p=n(91980),s=n(67392),o=n(50012);function l(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:l(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,d.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,p._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[m,d]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[p,s]=g({queryString:n,groupId:a}),[l,k]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,i]=(0,o.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=null!=p?p:l;return u({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{v&&d(v)}),[v]);return{selectedValue:m,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);d(e),s(e),k(e)}),[s,k,i]),tabValues:i}}var v=n(72389);const h="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:d,selectValue:p,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,m.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==d&&(l(t),p(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=o.indexOf(e.currentTarget)+1;n=null!=(a=o[t])?a:o[0];break}case"ArrowLeft":{var r;const t=o.indexOf(e.currentTarget)-1;n=null!=(r=o[t])?r:o[o.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:m}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,key:t,ref:e=>o.push(e),onKeyDown:u,onClick:c},m,{className:(0,i.default)("tabs__item",f,null==m?void 0:m.className,{"tabs__item--active":d===t})}),null!=n?n:t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,i.default)("tabs-container",h)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},85107:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(74866);const i={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},m=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(n=e.os||t,n.map((e=>({label:i[e],value:e}))))},e.children);var n}},14254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>p,toc:()=>o});var a=n(83117),r=(n(67294),n(3905)),i=n(85107);const m={sidebar_custom_props:{id:"4cc087b3-7cc8-478e-a947-841b63f0198e"}},d="Video Editieren",p={unversionedId:"Video-Editor/video-editor",id:"Video-Editor/video-editor",title:"Video Editieren",description:'Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere Szenen oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.',source:"@site/docs/Video-Editor/01-video-editor.md",sourceDirName:"Video-Editor",slug:"/Video-Editor/video-editor",permalink:"/Video-Editor/video-editor",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Video-Editor/01-video-editor.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:1,frontMatter:{sidebar_custom_props:{id:"4cc087b3-7cc8-478e-a947-841b63f0198e"}},sidebar:"sidebar",previous:{title:"Game-Projekt",permalink:"/Programmieren-2/project/"},next:{title:"v24",permalink:"/category/v24-1"}},s={},o=[{value:"Video Editor \xf6ffnen",id:"video-editor-\xf6ffnen",level:2},{value:"Titel und Text",id:"titel-und-text",level:2},{value:"Zuschneiden und Aufteilen",id:"zuschneiden-und-aufteilen",level:2},{value:"Wiedergabegeschwindigkeit",id:"wiedergabegeschwindigkeit",level:3},{value:"Tonspur",id:"tonspur",level:2},{value:"Tonspuren aufnehmen",id:"tonspuren-aufnehmen",level:3},{value:"Exportieren",id:"exportieren",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=l("Comment"),u=l("TabItem"),g=l("Figure"),k={toc:o};function v(e){let{components:t,...m}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"video-editieren"},"Video Editieren"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere ",(0,r.kt)("strong",{parentName:"p"},"Szenen"),' oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.'),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Dazu kann unter Windows der Video-Editor in der Foto-App und unter Mac die iMovie App verwendet werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um ein Video mit mehreren Szenen zusammenzuschneiden, kann wie folgt vorgegangen werden:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Video-Rohmaterial erstellen:")," Wichtig ist prim\xe4r das ",(0,r.kt)("strong",{parentName:"p"},"Bildmaterial"),", die ",(0,r.kt)("strong",{parentName:"p"},"Tonspur")," kann sp\xe4ter noch aufgenommen und hinzugef\xfcgt werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Videos zuschneiden:")," Ein Video Projekt erstellen, die verschiedenen Sequenzen hinzuf\xfcgen, zuschneiden und fehlerhafte Teile entfernen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Story erz\xe4hlen: Videos anordnen"),": Die einzelnen Clips so anordnen, dass die gew\xfcnschte Geschichte nachvollziehbar und spannend erz\xe4hlt werden kann."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Langweilige/Technische Passagen schneller abspielen"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberg\xe4nge zwischen den Sequenzen hinzuf\xfcgen - Achtung: oft lenken schlichte und relative schnelle \xdcbergangseffekte weniger vom Inhalt ab als pomp\xf6se Effekte."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"im Hinblick auf die folgende Vertonung des Videos: im Hinterkopf halten, wo es viel oder wenig Erkl\xe4rungen braucht"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Tonspur hinzuf\xfcgen"),": \xdcberlegen Sie sich genau, was Sie mitteilen wollen und nehmen Sie anschliessend den Text auf. Vermeiden Sie st\xf6rende Hintergrundger\xe4usche."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wichtige Dinge k\xf6nnen auch mit Text zus\xe4tzlich untermauert werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcr Teile ohne Sprache kann auch Musik verwendet werden. "),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Exportieren des Videos"),": Die einzelnen Videosequenzen, Bilder und Tonspuren zu einem Video zusammenf\xfcgen - dieser Prozess wird ",(0,r.kt)("strong",{parentName:"p"},"Rendering")," genannt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Hilfreiche Links inkl. weiteren Anleitungen:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/erstellen-von-filmen-mit-einem-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6"},"Windows Video-Editor")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://www.apple.com/imovie/"},"iMovie")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"video-editor-\xf6ffnen"},"Video Editor \xf6ffnen"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcber die Fotos-App k\xf6nnen auch Video-Projekte erstellt werden:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Video-Editor",src:n(26207).Z,width:"3000",height:"1906"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video-Editor",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unter Mac OS X muss die Software ",(0,r.kt)("a",{parentName:"p",href:"https://www.apple.com/de/imovie/"},"iMovie \ud83d\udd17")," aus dem App-Store heruntergeladen werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Neues Projekt erstellen",src:n(90916).Z,width:"3104",height:"1904"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Neues Projekt erstellen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Medien per Drag&amp;Drop hinzuf\xfcgen",src:n(72367).Z,width:"3104",height:"1904"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Medien per Drag&Drop hinzuf\xfcgen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"titel-und-text"},"Titel und Text"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zu Beginn eines Videos soll ein Titel angezeigt werden. Die mitwirkenden Personen werden entweder auch auf der Titelseite, oder aber im Abspann vermerkt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wichtige Aussagen im Video k\xf6nnen zus\xe4tzlich mit Text untermauert werden. Die Dauer der Texteinblendung kann jeweils eingestellt werden und sollte min. ",(0,r.kt)("inlineCode",{parentName:"p"},"3s")," dauern."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Hintergrundfarbe einstellen",src:n(93303).Z,width:"3000",height:"1906"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hintergrundfarbe einstellen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",src:n(83902).Z,width:"3000",height:"1906"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Titel hinzuf\xfcgen und Style w\xe4hlen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Hintergrundfarbe einstellen",src:n(13373).Z,width:"3104",height:"1904"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hintergrundfarbe einstellen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",src:n(52154).Z,width:"3104",height:"1904"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Titel hinzuf\xfcgen und Style w\xe4hlen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"zuschneiden-und-aufteilen"},"Zuschneiden und Aufteilen"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Aufteilen von Videos ist besonders hilfreich, wenn"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"fehlerhafte Teile entfernt werden sollen oder"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"die Geschwindigkeit einzelner Teile ver\xe4ndert werden muss."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})))),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Video aufteilen",src:n(25869).Z,width:"3000",height:"1906"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video aufteilen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Video aufteilen",src:n(52677).Z,width:"2880",height:"1800"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video aufteilen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"wiedergabegeschwindigkeit"},"Wiedergabegeschwindigkeit"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"Geschwindigkeit \xe4ndern --max-width=450px",src:n(7218).Z,width:"1630",height:"726"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Geschwindigkeit \xe4ndern",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"Geschwindigkeit \xe4ndern --max-width=450px",src:n(14911).Z,width:"1278",height:"882"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Geschwindigkeit \xe4ndern",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"tonspur"},"Tonspur"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Video besitzt normalerweise bereits eine Tonspur. Das Video kann aber auch neu vertont werden, indem neue Tonspuren hinzugef\xfcgt werden. F\xfcr jede Tonspur kann die Lautst\xe4rke individuell eingestellt werden. So lassen sich auch mehrere Tonspuren unterschiedlicher Lautst\xe4rke \xfcberlagern."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Hintergrundmusik",type:"caution"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Tonspur mit gesprochenem Text soll immer klar und verst\xe4ndlich sein. Lieber verzichtet man auf eine durchgehende Hintergrundmusik, als dass dadurch die Klarheit Stimme leidet."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"}))),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Oben rechts "Benutzerdefiniertes Audio" w\xe4hlen und anschliessend mehrere Audiodateien hinzuf\xfcgen. Die Audiospuren lassen sich durch verschieben der Regler direkt zuschneiden. Die Tonspuren k\xf6nnen auch \xfcberlagert werden.   '),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(19614).Z,width:"3000",height:"1906"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Durch Klicken auf das Lautsprechersymbol kann die Lautst\xe4rke f\xfcr diese Tonspur eingestellt werden. Zudem kann eingestellt werden, ob die Tonspur direkt mit der gew\xe4hlten Lautst\xe4rke abgespielt wird, oder ein \xdcbergang verwendet wird."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{maxWidth:"300px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=300px",src:n(65129).Z,width:"552",height:"322"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:12,mdxType:"Comment"}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Soll die Tonspur des Videos ver\xe4ndert werden, muss zuerst die Tonspur vom Video separiert werden: "),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(86182).Z,width:"2880",height:"1800"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um die Lautst\xe4rke der Tonspur zu \xe4ndern, kann die horizontale Linie in der Tonspur nach Oben/Unten verschoben werden. Zudem lassen sich die Lautst\xe4rken zu Beginn oder am Ende als \xdcbergang Ein- bzw. Ausblenden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(17913).Z,width:"776",height:"548"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:14,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"tonspuren-aufnehmen"},"Tonspuren aufnehmen"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Gesprochener Text wird am besten direkt zum Abspielen des Videos aufgenommen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unter Windows wird zum Aufnehmen einer Tonspur das Programm ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/verwendung-des-sprachrekorders-6fbb53d5-0539-abda-a9a4-0bcb84a778e7"},"Sprachrekorder")," ben\xf6tigt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:30,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Sprache aufnehmen",src:n(32869).Z,width:"1958",height:"1568"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Sprache aufnehmen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:15,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die gespeicherten Aufzeichnungen k\xf6nnen anschliessend als Tonspur hinzugef\xfcgt werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:31,mdxType:"Comment"}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In iMovie ist ein Sprachrekorder direkt eingebaut:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:32,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"Sprache hinzuf\xfcgen --max-width=450px",src:n(10901).Z,width:"1278",height:"894"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Sprache hinzuf\xfcgen",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:16,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"exportieren"},"Exportieren"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ist das Video fertiggestellt, kann es als Videodatei exportiert werden. Beim exportieren wird die Darstellung jedes einzelnen Bildes ",(0,r.kt)("em",{parentName:"p"},"(f\xfcr eine Sekunde Film sind es 30 Bilder)")," berechnet, wobei Text\xfcberlagerungen, Tondateien und Spezialeffekte zusammengef\xfcgt werden. Dieser Prozess kann sehr lange dauern und ist abh\xe4ngig von der Geschwindigkeit der Grafikkarte. Dieser Prozess wird auch ",(0,r.kt)("strong",{parentName:"p"},"Rendering")," genannt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:33,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Oben rechts auf "Fertig stellen" klicken und das Video abspeichern.'),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:34,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{maxWidth:"300px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=300px",src:n(80227).Z,width:"918",height:"602"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:17,mdxType:"Comment"}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Oben rechts auf das "Teilen" Symbol klicken und "Datei exportieren" w\xe4hlen.'),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:35,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{maxWidth:"450px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--max-width=450px",src:n(79795).Z,width:"1724",height:"1070"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:18,mdxType:"Comment"})))))}v.isMDXComponent=!0},90916:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-video-editor-f8315f17192c225ac23957882fe79d12.png"},72367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-video-editor_b-bed6cf8a7909ea1f233ffa4b5e30075d.png"},13373:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-video-editor-bg-color-6d007f3e342bb1d3ec6bf4a7336c8dc0.png"},52154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-video-editor-bg-text-e5feda1ef7844b2871bdbafe2777dd04.png"},52677:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-video-editor-split-265e2068ec3bc0d8278dd804bebd594c.png"},14911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-video-editor-speed-0e4992a59bb254acf308c3ee4154bc06.png"},10901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/06-video-editor-speech-2a9c767a8a9713b97cdcf214e15a3847.png"},86182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/07-video-editor-separate-sound-bd1ea9467cb7012bc89a6179f6b6b93a.png"},17913:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/07-video-editor-sound-1-e13bec2f9023c492731b52e148090473.png"},79795:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09-video-editor-export-229467d7acb4c50afad3fd36e9d79207.png"},26207:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-video-editor-170bede5dbf13fa461b8741c73c1ac85.png"},93303:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-video-editor-bg-color-616e8d1189d5021e10124165d82ba7ca.png"},83902:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-video-editor-bg-text-3a3350dfd4740533701e989d2952f7c4.png"},25869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-video-editor-split-5339f28a8736b785dd4cc73d4d1ad181.png"},7218:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-video-editor-speed-76bf68d078f6537d0fa49d93045bee65.png"},32869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/06-video-editor-speech-13891986a063b5cbc8362fe2b8847a9c.png"},19614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/07-video-editor-sound-1-4f8b851b965dd5e995c29ec09c14aaec.png"},65129:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-video-editor-sound-2-065061b13a364bb695623096c5f1bbae.png"},80227:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09-video-editor-export-e363b9d1f9584cb4e7de54ef407e38b7.png"}}]);