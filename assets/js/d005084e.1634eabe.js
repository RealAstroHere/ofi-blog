"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[85561],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=i,c=k["".concat(s,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},685162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(667294),i=n(386010),l="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.default)(l,r),hidden:n},t)}},665488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(487462),i=n(667294),l=n(386010),r=n(972389),o=n(867392),s=n(707094),p=n(212466),m="tabList__CuJ",u="tabItem_LNqP";function k(e){var t,n,r=e.lazy,k=e.block,d=e.defaultValue,c=e.values,f=e.groupId,h=e.className,N=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=N.find((function(e){return e.props.default})))?void 0:n.props.value)?t:N[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),C=T.tabGroupChoices,y=T.setTabGroupChoices,w=(0,i.useState)(v),Z=w[0],x=w[1],O=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=C[f];null!=E&&E!==Z&&g.some((function(e){return e.value===E}))&&x(E)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==Z&&(D(t),x(a),null!=f&&y(f,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=O.indexOf(e.currentTarget)+1;n=null!=(a=O[i])?a:O[0];break;case"ArrowLeft":var l,r=O.indexOf(e.currentTarget)-1;n=null!=(l=O[r])?l:O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.default)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":k},h)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:I,onClick:I},r,{className:(0,l.default)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(N.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function d(e){var t=(0,r.Z)();return i.createElement(k,(0,a.Z)({key:String(t)},e))}},285107:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(894578),i=n(667294),l=n(665488),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},765648:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(497326),i=n(894578),l=n(204942),r=n(667294),o=n(592814),s="videoComponent_YfiL",p="headerClosed_s_Of",m="headerOpen_AzNA",u="minimize_pBQC",k="description_p2GN",d="title_YxV5",c="cardOpen_IEP6",f=n(51436),h=n(386010),N=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,(0,l.Z)((0,a.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,l.Z)((0,a.Z)(t),"videoRef",r.createRef()),(0,l.Z)((0,a.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,a=e.bottom;n<window.innerHeight&&a>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,l.Z)((0,a.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,a=e.type,i=e.children;return r.createElement("div",{ref:this.videoRef,className:s},this.state.open?r.createElement("div",{className:c},r.createElement("div",{className:m},t&&r.createElement("h5",{className:d},t),!this.props.expanded&&r.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",u),onClick:this.onClick},r.createElement(o.G,{icon:f.IQi})),i&&r.createElement("div",{className:k},i)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(o.G,{icon:f.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:p},r.createElement("div",{className:d},t||"Video"),i&&r.createElement("div",{className:k},i)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:n,type:"video/"+(a||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(o.G,{icon:f.IJ7,spin:!0}))))},t}(r.Component)},802788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return f},default:function(){return T},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return g}});var a,i=n(487462),l=n(263366),r=(n(667294),n(603905)),o=n(285107),s=n(644996),p=n(765648),m=n(685162),u=n(592814),k=n(951417),d=["components"],c={},f="Systemnavigation",h={unversionedId:"BYOD-Basics/navigation",id:"version-24o/BYOD-Basics/navigation",title:"Systemnavigation",description:"Tastatur",source:"@site/versioned_docs/version-24o/02-BYOD-Basics/004-navigation.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/navigation",permalink:"/24o/BYOD-Basics/navigation",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/02-BYOD-Basics/004-navigation.mdx",tags:[],version:"24o",sidebarPosition:4,frontMatter:{},sidebar:"version-24o/sidebar",previous:{title:"Dateiexplorer",permalink:"/24o/BYOD-Basics/dateiexplorer"},next:{title:"Software",permalink:"/24o/BYOD-Basics/software"}},N={},g=[{value:"Tastatur",id:"tastatur",level:2},{value:"Tastenk\xfcrzel",id:"tastenk\xfcrzel",level:3},{value:"Pfeiltasten",id:"pfeiltasten",level:3},{value:"Klammern",id:"klammern",level:3},{value:"Weitere g\xe4ngige Zeichen",id:"weitere-g\xe4ngige-zeichen",level:3},{value:"Touch-Gesten",id:"touch-gesten",level:2},{value:"Klicken durch Tippen",id:"klicken-durch-tippen",level:3},{value:"Rechtsklick",id:"rechtsklick",level:3},{value:"Scrollen",id:"scrollen",level:3},{value:"Alle Programme Anzeigen",id:"alle-programme-anzeigen",level:3},{value:"Virtuelle Desktops",id:"virtuelle-desktops",level:3},{value:"Erstellen",id:"erstellen",level:4},{value:"Wechseln",id:"wechseln",level:4}],b=(a="Figure",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),v={toc:g};function T(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"systemnavigation"},"Systemnavigation"),(0,r.kt)("h2",{id:"tastatur"},"Tastatur"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Win")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Windows"),"-Taste) ",(0,r.kt)(u.G,{icon:k.ts2,mdxType:"FontAwesomeIcon"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,r.kt)("strong",{parentName:"li"},"\u21e7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Feststelltaste")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Caps-Lock"),"-Taste) ",(0,r.kt)("strong",{parentName:"li"},"\u21ea")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,r.kt)("em",{parentName:"li"},"Fn")))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Befehlstaste"),"-Taste) ",(0,r.kt)("strong",{parentName:"li"},"\u2318")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,r.kt)("strong",{parentName:"li"},"\u21e7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Option")," oder ",(0,r.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste) ",(0,r.kt)("strong",{parentName:"li"},"\u2325")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,r.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste) ",(0,r.kt)("strong",{parentName:"li"},"\u2303")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Feststelltaste")," ",(0,r.kt)("strong",{parentName:"li"},"\u21ea")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,r.kt)("em",{parentName:"li"},"Fn"))))),(0,r.kt)("h3",{id:"tastenk\xfcrzel"},"Tastenk\xfcrzel"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Explorer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Explorer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,r.kt)("em",{parentName:"li"},"Shift-Ctrl-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-A"),": Alle Objekte ausw\xe4hlen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-P"),": Das aktuelle Dokument drucken."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-S"),": Das aktuelle Dokument sichern."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-T"),": Einen neuen Tab \xf6ffnen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(u.G,{icon:k.ts2,mdxType:"FontAwesomeIcon"}),(0,r.kt)("b",null,"-Tabulatortaste"),": Alle ge\xf6ffneten Apps anzeigen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alt-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)"))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Finder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Finder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,r.kt)("em",{parentName:"li"},"Shift-Cmd-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-A"),": Alle Objekte ausw\xe4hlen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-P"),": Das aktuelle Dokument drucken."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-S"),": Das aktuelle Dokument sichern."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-T"),": Einen neuen Tab \xf6ffnen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)")))),(0,r.kt)("h3",{id:"pfeiltasten"},"Pfeiltasten"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ctrl-Shift-Pfeiltasten")," ganze W\xf6rter selektieren"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Win-Pfeiltasten")," Fenster auf dem Bildschirm anordnen"))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alt-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shift-Alt-Pfeiltasten")," ganze W\xf6rter selektieren")))),(0,r.kt)("h3",{id:"klammern"},"Klammern"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"()")," (normalerweise: ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift + 8")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift + 9"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"{}")," (normalerweise: ",(0,r.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xe4")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Alt Gr + $)"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[]")," (normalerweise: ",(0,r.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xfc")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Alt Gr + !"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backtick ",(0,r.kt)("code",null,"`"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift + ^")," und dann ein Leerschlag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"))))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"()")," ",(0,r.kt)("inlineCode",{parentName:"p"},"shift + 8")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"shift + 9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"{}")," ",(0,r.kt)("inlineCode",{parentName:"p"},"option+(")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"option+)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[]")," ",(0,r.kt)("inlineCode",{parentName:"p"},"option+5")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"option+6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backtick ",(0,r.kt)("code",null,"`"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift + ^"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmd+Click")))))),(0,r.kt)("h3",{id:"weitere-g\xe4ngige-zeichen"},"Weitere g\xe4ngige Zeichen"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Alt Gr + 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Alt Gr + 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + 6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Shift + <")))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"option + g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"option + 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"option + 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"shift + 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"shift + 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"shift + 6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"shift + 7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"shift + option + 7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"shift + >"))))),(0,r.kt)("h2",{id:"touch-gesten"},"Touch-Gesten"),(0,r.kt)("h3",{id:"klicken-durch-tippen"},"Klicken durch Tippen"),(0,r.kt)("p",null,"Auf modernen Touchpads reicht ein Antippen aus, um einen Klick auszul\xf6sen."),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(2253).Z,width:"592",height:"618"}))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(180800).Z,width:"592",height:"618"})))),(0,r.kt)("h3",{id:"rechtsklick"},"Rechtsklick"),(0,r.kt)("p",null,"Auch hier kann wahlweise Geklickt oder nur getippt werdem."),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(568234).Z,width:"592",height:"618"}))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(137089).Z,width:"592",height:"618"})))),(0,r.kt)("h3",{id:"scrollen"},"Scrollen"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(739788).Z,width:"592",height:"618"}))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(127710).Z,width:"592",height:"618"})))),(0,r.kt)("h3",{id:"alle-programme-anzeigen"},"Alle Programme Anzeigen"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(371242).Z,width:"592",height:"618"})),(0,r.kt)("p",null,"(",(0,r.kt)("em",{parentName:"p"},"Diese Option ist nicht bei allen Touchpads verf\xfcgbar."),")")),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,"Mission Control"),(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(763407).Z,width:"592",height:"618"})))),(0,r.kt)("h3",{id:"virtuelle-desktops"},"Virtuelle Desktops"),(0,r.kt)("p",null,"Mit virtuellen Desktops lassen sich mehrere Arbeitsbereiche und Fensteranordnungen erstellen."),(0,r.kt)("h4",{id:"erstellen"},"Erstellen"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"Virtuelle Desktops: Mit ",(0,r.kt)("inlineCode",{parentName:"p"},"Win-Tabulatortaste")," alle ge\xf6ffneten Fenster anzeigen und oben im Fenster einen neuen Virtuellen Desktop erstellen:"),(0,r.kt)(p.Z,{src:(0,s.Z)("/img/byod-basics/win/create_virtual_desktops.mp4"),mdxType:"Video"})),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(p.Z,{src:(0,s.Z)("/img/byod-basics/osx/create_virtual_desktops.mp4"),mdxType:"Video"}))),(0,r.kt)("h4",{id:"wechseln"},"Wechseln"),(0,r.kt)("p",null,"Mit folgenden Gesten kann zwischen diesen Desktops hin- und hergewechselt werden.","*"),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(499368).Z,width:"592",height:"618"}))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(b,{options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(387953).Z,width:"592",height:"618"})))),(0,r.kt)("p",null,"*"," Je nach Voreinstellungen ist diese Geste mit nur 3 statt 4 Fingern zu machen."),(0,r.kt)(o.Z,{mdxType:"OsTabs"},(0,r.kt)(m.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"Weitere Gesten ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/touchpad-gesten-f%C3%BCr-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741"},"hier"))),(0,r.kt)(m.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,"Weitere Gesten ",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/de-ch/HT204895"},"hier")))))}T.isMDXComponent=!0},387953:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},180800:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},763407:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},137089:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},127710:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},499368:function(e,t,n){t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},2253:function(e,t,n){t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},371242:function(e,t,n){t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},568234:function(e,t,n){t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},739788:function(e,t,n){t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"}}]);