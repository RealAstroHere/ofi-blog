"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45558],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),l=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},72360:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(667294),r=t(386010),a="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",className:(0,r.default)(a,o),hidden:t},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(583117),r=t(667294),a=t(972389),o=t(867392),s=t(707094),d=t(212466),l=t(386010),u="tabList_uSqn",p="tabItem_LplD";function c(e){var n,t,a,c=e.lazy,m=e.block,g=e.defaultValue,f=e.values,h=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),w=(0,o.l)(v,(function(e,n){return e.value===n.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===g?g:null!=(n=null!=g?g:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),T=y.tabGroupChoices,N=y.setTabGroupChoices,z=(0,r.useState)(x),Z=z[0],V=z[1],E=[],O=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=T[h];null!=S&&S!==Z&&v.some((function(e){return e.value===S}))&&V(S)}var F=function(e){var n=e.currentTarget,t=E.indexOf(n),i=v[t].value;i!==Z&&(O(n),V(i),null!=h&&N(h,i))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=E.indexOf(e.currentTarget)+1;t=E[i]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.default)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":m},k)},v.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:F,onClick:F},a,{className:(0,l.default)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(b.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==Z})}))))}function m(e){var n=(0,a.Z)();return r.createElement(c,(0,i.Z)({key:String(n)},e))}},285107:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(21073),r=t(667294),a=t(409877),o=function(e){function n(){return e.apply(this,arguments)||this}return(0,i.Z)(n,e),n.prototype.render=function(){return r.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(r.Component)},605532:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var i,r=t(583117),a=t(480102),o=(t(667294),t(603905)),s=t(285107),d=t(72360),l=["components"],u={title:"Videos Editieren"},p="Video Editieren",c={unversionedId:"Computer/Video-Editor/video-editor",id:"version-24i/Computer/Video-Editor/video-editor",title:"Videos Editieren",description:'Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere Szenen oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.',source:"@site/versioned_docs/version-24i/07-Computer/06-Video-Editor/01-video-editor.md",sourceDirName:"07-Computer/06-Video-Editor",slug:"/Computer/Video-Editor/video-editor",permalink:"/24i/Computer/Video-Editor/video-editor",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/07-Computer/06-Video-Editor/01-video-editor.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"Videos Editieren"},sidebar:"version-24i/sidebar",previous:{title:"Vom USB-Stick starten",permalink:"/24i/Computer/praktikum/os-from-usb"},next:{title:"Kompression",permalink:"/24i/Codes und Daten/compression/"}},m={},g=[{value:"Video Editor \xf6ffnen",id:"video-editor-\xf6ffnen",level:2},{value:"Titel und Text",id:"titel-und-text",level:2},{value:"Zuschneiden und Aufteilen",id:"zuschneiden-und-aufteilen",level:2},{value:"Wiedergabegeschwindigkeit",id:"wiedergabegeschwindigkeit",level:3},{value:"Tonspur",id:"tonspur",level:2},{value:"Tonspuren aufnehmen",id:"tonspuren-aufnehmen",level:3},{value:"Exportieren",id:"exportieren",level:2}],f=(i="Figure",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:g};function k(e){var n=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"video-editieren"},"Video Editieren"),(0,o.kt)("p",null,"Es ist schwierig, ein komplettes Video am St\xfcck zu drehen und dabei genug schnell alles vorzuzeigen, keine Fehler zu machen und aber auch die Zuschauer:innen nicht zu langweilen. Oft gibt es zudem mehrere ",(0,o.kt)("strong",{parentName:"p"},"Szenen"),' oder "Drehorte" (k\xf6nnen auch "Reale Welt" und "Screencast" sein). Deshalb muss ein Video oft nachbearbeitet und zusammengeschnitten werden.'),(0,o.kt)("p",null,"Dazu kann unter Windows der Video-Editor in der Foto-App und unter Mac die iMovie App verwendet werden."),(0,o.kt)("p",null,"Um ein Video mit mehreren Szenen zusammenzuschneiden, kann wie folgt vorgegangen werden:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Video-Rohmaterial erstellen:")," Wichtig ist prim\xe4r das ",(0,o.kt)("strong",{parentName:"li"},"Bildmaterial"),", die ",(0,o.kt)("strong",{parentName:"li"},"Tonspur")," kann sp\xe4ter noch aufgenommen und hinzugef\xfcgt werden."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Videos zuschneiden:")," Ein Video Projekt erstellen, die verschiedenen Sequenzen hinzuf\xfcgen, zuschneiden und fehlerhafte Teile entfernen."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Story erz\xe4hlen: Videos anordnen"),": Die einzelnen Clips so anordnen, dass die gew\xfcnschte Geschichte nachvollziehbar und spannend erz\xe4hlt werden kann.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Langweilige/Technische Passagen schneller abspielen"),(0,o.kt)("li",{parentName:"ul"},"\xdcberg\xe4nge zwischen den Sequenzen hinzuf\xfcgen - Achtung: oft lenken schlichte und relative schnelle \xdcbergangseffekte weniger vom Inhalt ab als pomp\xf6se Effekte."),(0,o.kt)("li",{parentName:"ul"},"im Hinblick auf die folgende Vertonung des Videos: im Hinterkopf halten, wo es viel oder wenig Erkl\xe4rungen braucht"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tonspur hinzuf\xfcgen"),": \xdcberlegen Sie sich genau, was Sie mitteilen wollen und nehmen Sie anschliessend den Text auf. Vermeiden Sie st\xf6rende Hintergrundger\xe4usche.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Wichtige Dinge k\xf6nnen auch mit Text zus\xe4tzlich untermauert werden."),(0,o.kt)("li",{parentName:"ul"},"F\xfcr Teile ohne Sprache kann auch Musik verwendet werden. "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exportieren des Videos"),": Die einzelnen Videosequenzen, Bilder und Tonspuren zu einem Video zusammenf\xfcgen - dieser Prozess wird ",(0,o.kt)("strong",{parentName:"li"},"Rendering")," genannt.")),(0,o.kt)("p",null,"Hilfreiche Links inkl. weiteren Anleitungen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/de-de/windows/erstellen-von-filmen-mit-einem-video-editor-94e651f8-a5be-ae03-3c50-e49f013d47f6"},"Windows Video-Editor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.apple.com/imovie/"},"iMovie"))),(0,o.kt)("h2",{id:"video-editor-\xf6ffnen"},"Video Editor \xf6ffnen"),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"\xdcber die Fotos-App k\xf6nnen auch Video-Projekte erstellt werden:"),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Video-Editor",src:t(322909).Z,width:"3000",height:"1906"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video-Editor",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"Unter Mac OS X muss die Software ",(0,o.kt)("a",{parentName:"p",href:"https://www.apple.com/de/imovie/"},"iMovie \ud83d\udd17")," aus dem App-Store heruntergeladen werden."),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Neues Projekt erstellen",src:t(72994).Z,width:"3104",height:"1904"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Neues Projekt erstellen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Medien per Drag&amp;Drop hinzuf\xfcgen",src:t(151095).Z,width:"3104",height:"1904"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Medien per Drag&Drop hinzuf\xfcgen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,o.kt)("h2",{id:"titel-und-text"},"Titel und Text"),(0,o.kt)("p",null,"Zu Beginn eines Videos soll ein Titel angezeigt werden. Die mitwirkenden Personen werden entweder auch auf der Titelseite, oder aber im Abspann vermerkt."),(0,o.kt)("p",null,"Wichtige Aussagen im Video k\xf6nnen zus\xe4tzlich mit Text untermauert werden. Die Dauer der Texteinblendung kann jeweils eingestellt werden und sollte min. ",(0,o.kt)("inlineCode",{parentName:"p"},"3s")," dauern."),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Hintergrundfarbe einstellen",src:t(806087).Z,width:"3000",height:"1906"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hintergrundfarbe einstellen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",src:t(278988).Z,width:"3000",height:"1906"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Titel hinzuf\xfcgen und Style w\xe4hlen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Hintergrundfarbe einstellen",src:t(352393).Z,width:"3104",height:"1904"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Hintergrundfarbe einstellen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Titel hinzuf\xfcgen und Style w\xe4hlen",src:t(997734).Z,width:"3104",height:"1904"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Titel hinzuf\xfcgen und Style w\xe4hlen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,o.kt)("h2",{id:"zuschneiden-und-aufteilen"},"Zuschneiden und Aufteilen"),(0,o.kt)("p",null,"Das Aufteilen von Videos ist besonders hilfreich, wenn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fehlerhafte Teile entfernt werden sollen oder"),(0,o.kt)("li",{parentName:"ul"},"die Geschwindigkeit einzelner Teile ver\xe4ndert werden muss.")),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Video aufteilen",src:t(771762).Z,width:"3000",height:"1906"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video aufteilen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Video aufteilen",src:t(106521).Z,width:"2880",height:"1800"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Video aufteilen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,o.kt)("h3",{id:"wiedergabegeschwindigkeit"},"Wiedergabegeschwindigkeit"),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)(f,{options:{maxWidth:"450px"},mdxType:"Figure"},(0,o.kt)("img",{alt:"Geschwindigkeit \xe4ndern --max-width=450px",src:t(490568).Z,width:"1630",height:"726"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Geschwindigkeit \xe4ndern",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(f,{options:{maxWidth:"450px"},mdxType:"Figure"},(0,o.kt)("img",{alt:"Geschwindigkeit \xe4ndern --max-width=450px",src:t(297630).Z,width:"1278",height:"882"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Geschwindigkeit \xe4ndern",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,o.kt)("h2",{id:"tonspur"},"Tonspur"),(0,o.kt)("p",null,"Ein Video besitzt normalerweise bereits eine Tonspur. Das Video kann aber auch neu vertont werden, indem neue Tonspuren hinzugef\xfcgt werden. F\xfcr jede Tonspur kann die Lautst\xe4rke individuell eingestellt werden. So lassen sich auch mehrere Tonspuren unterschiedlicher Lautst\xe4rke \xfcberlagern."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div",id:"hintergrundmusik"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Hintergrundmusik")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Die Tonspur mit gesprochenem Text soll immer klar und verst\xe4ndlich sein. Lieber verzichtet man auf eine durchgehende Hintergrundmusik, als dass dadurch die Klarheit Stimme leidet."))),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,'Oben rechts "Benutzerdefiniertes Audio" w\xe4hlen und anschliessend mehrere Audiodateien hinzuf\xfcgen. Die Audiospuren lassen sich durch verschieben der Regler direkt zuschneiden. Die Tonspuren k\xf6nnen auch \xfcberlagert werden.   '),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:t(163123).Z,width:"3000",height:"1906"})),(0,o.kt)("p",null,"Durch Klicken auf das Lautsprechersymbol kann die Lautst\xe4rke f\xfcr diese Tonspur eingestellt werden. Zudem kann eingestellt werden, ob die Tonspur direkt mit der gew\xe4hlten Lautst\xe4rke abgespielt wird, oder ein \xdcbergang verwendet wird."),(0,o.kt)(f,{options:{maxWidth:"300px"},mdxType:"Figure"},(0,o.kt)("img",{alt:"--max-width=300px",src:t(764312).Z,width:"552",height:"322"}))),(0,o.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"Soll die Tonspur des Videos ver\xe4ndert werden, muss zuerst die Tonspur vom Video separiert werden: "),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:t(931430).Z,width:"2880",height:"1800"})),(0,o.kt)("p",null,"Um die Lautst\xe4rke der Tonspur zu \xe4ndern, kann die horizontale Linie in der Tonspur nach Oben/Unten verschoben werden. Zudem lassen sich die Lautst\xe4rken zu Beginn oder am Ende als \xdcbergang Ein- bzw. Ausblenden."),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:t(882176).Z,width:"776",height:"548"})))),(0,o.kt)("h3",{id:"tonspuren-aufnehmen"},"Tonspuren aufnehmen"),(0,o.kt)("p",null,"Gesprochener Text wird am besten direkt zum Abspielen des Videos aufgenommen."),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,"Unter Windows wird zum Aufnehmen einer Tonspur das Programm ",(0,o.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/verwendung-des-sprachrekorders-6fbb53d5-0539-abda-a9a4-0bcb84a778e7"},"Sprachrekorder")," ben\xf6tigt."),(0,o.kt)(f,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Sprache aufnehmen",src:t(5204).Z,width:"1958",height:"1568"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Sprache aufnehmen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)("p",null,"Die gespeicherten Aufzeichnungen k\xf6nnen anschliessend als Tonspur hinzugef\xfcgt werden.")),(0,o.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,"In iMovie ist ein Sprachrekorder direkt eingebaut:"),(0,o.kt)(f,{options:{maxWidth:"450px"},mdxType:"Figure"},(0,o.kt)("img",{alt:"Sprache hinzuf\xfcgen --max-width=450px",src:t(860802).Z,width:"1278",height:"894"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Sprache hinzuf\xfcgen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,o.kt)("h2",{id:"exportieren"},"Exportieren"),(0,o.kt)("p",null,"Ist das Video fertiggestellt, kann es als Videodatei exportiert werden. Beim exportieren wird die Darstellung jedes einzelnen Bildes ",(0,o.kt)("em",{parentName:"p"},"(f\xfcr eine Sekunde Film sind es 30 Bilder)")," berechnet, wobei Text\xfcberlagerungen, Tondateien und Spezialeffekte zusammengef\xfcgt werden. Dieser Prozess kann sehr lange dauern und ist abh\xe4ngig von der Geschwindigkeit der Grafikkarte. Dieser Prozess wird auch ",(0,o.kt)("strong",{parentName:"p"},"Rendering")," genannt."),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("p",null,'Oben rechts auf "Fertig stellen" klicken und das Video abspeichern.'),(0,o.kt)(f,{options:{maxWidth:"300px"},mdxType:"Figure"},(0,o.kt)("img",{alt:"--max-width=300px",src:t(295867).Z,width:"918",height:"602"}))),(0,o.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("p",null,'Oben rechts auf das "Teilen" Symbol klicken und "Datei exportieren" w\xe4hlen.'),(0,o.kt)(f,{options:{maxWidth:"450px"},mdxType:"Figure"},(0,o.kt)("img",{alt:"--max-width=450px",src:t(686322).Z,width:"1724",height:"1070"})))))}k.isMDXComponent=!0},72994:function(e,n,t){n.Z=t.p+"assets/images/01-video-editor-f8315f17192c225ac23957882fe79d12.png"},151095:function(e,n,t){n.Z=t.p+"assets/images/01-video-editor_b-bed6cf8a7909ea1f233ffa4b5e30075d.png"},352393:function(e,n,t){n.Z=t.p+"assets/images/02-video-editor-bg-color-6d007f3e342bb1d3ec6bf4a7336c8dc0.png"},997734:function(e,n,t){n.Z=t.p+"assets/images/03-video-editor-bg-text-e5feda1ef7844b2871bdbafe2777dd04.png"},106521:function(e,n,t){n.Z=t.p+"assets/images/04-video-editor-split-265e2068ec3bc0d8278dd804bebd594c.png"},297630:function(e,n,t){n.Z=t.p+"assets/images/05-video-editor-speed-0e4992a59bb254acf308c3ee4154bc06.png"},860802:function(e,n,t){n.Z=t.p+"assets/images/06-video-editor-speech-2a9c767a8a9713b97cdcf214e15a3847.png"},931430:function(e,n,t){n.Z=t.p+"assets/images/07-video-editor-separate-sound-bd1ea9467cb7012bc89a6179f6b6b93a.png"},882176:function(e,n,t){n.Z=t.p+"assets/images/07-video-editor-sound-1-e13bec2f9023c492731b52e148090473.png"},686322:function(e,n,t){n.Z=t.p+"assets/images/09-video-editor-export-229467d7acb4c50afad3fd36e9d79207.png"},322909:function(e,n,t){n.Z=t.p+"assets/images/01-video-editor-170bede5dbf13fa461b8741c73c1ac85.png"},806087:function(e,n,t){n.Z=t.p+"assets/images/02-video-editor-bg-color-616e8d1189d5021e10124165d82ba7ca.png"},278988:function(e,n,t){n.Z=t.p+"assets/images/03-video-editor-bg-text-3a3350dfd4740533701e989d2952f7c4.png"},771762:function(e,n,t){n.Z=t.p+"assets/images/04-video-editor-split-5339f28a8736b785dd4cc73d4d1ad181.png"},490568:function(e,n,t){n.Z=t.p+"assets/images/05-video-editor-speed-76bf68d078f6537d0fa49d93045bee65.png"},5204:function(e,n,t){n.Z=t.p+"assets/images/06-video-editor-speech-13891986a063b5cbc8362fe2b8847a9c.png"},163123:function(e,n,t){n.Z=t.p+"assets/images/07-video-editor-sound-1-4f8b851b965dd5e995c29ec09c14aaec.png"},764312:function(e,n,t){n.Z=t.p+"assets/images/08-video-editor-sound-2-065061b13a364bb695623096c5f1bbae.png"},295867:function(e,n,t){n.Z=t.p+"assets/images/09-video-editor-export-e363b9d1f9584cb4e7de54ef407e38b7.png"}}]);