"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6819],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var k=n.createContext({}),m=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(k.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,l=e.originalType,k=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),o=m(a),b=d,u=o["".concat(k,".").concat(b)]||o[b]||s[b]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function b(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var l=a.length,i=new Array(l);i[0]=o;var r={};for(var k in t)hasOwnProperty.call(t,k)&&(r[k]=t[k]);r.originalType=e,r.mdxType="string"==typeof e?e:d,i[1]=r;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),d=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,d.default)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(83117),d=a(67294),l=a(86010),i=a(72389),r=a(67392),k=a(7094),m=a(12466);const p="tabList__CuJ",s="tabItem_LNqP";function o(e){var t,a;const{lazy:i,block:o,defaultValue:b,values:u,groupId:c,className:N}=e,h=d.Children.map(e.children,(e=>{if((0,d.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,r.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===b?b:null!=(t=null!=b?b:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:T}=(0,k.U)(),[w,C]=(0,d.useState)(g),Z=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=c){const e=y[c];null!=e&&e!==w&&f.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,a=Z.indexOf(t),n=f[a].value;n!==w&&(x(t),C(n),null!=c&&T(c,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=Z.indexOf(e.currentTarget)+1;a=null!=(n=Z[t])?n:Z[0];break}case"ArrowLeft":{var d;const t=Z.indexOf(e.currentTarget)-1;a=null!=(d=Z[t])?d:Z[Z.length-1];break}}null==(t=a)||t.focus()};return d.createElement("div",{className:(0,l.default)("tabs-container",p)},d.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":o},N)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return d.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>Z.push(e),onKeyDown:E,onFocus:S,onClick:S},i,{className:(0,l.default)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),i?(0,d.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):d.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,i.Z)();return d.createElement(o,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),d=a(65488);class l extends n.Component{render(){return n.createElement(d.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)}}},65648:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(91189),d=a(67294),l=a(92814);const i="videoComponent_YfiL",r="headerClosed_s_Of",k="headerOpen_AzNA",m="minimize_pBQC",p="description_p2GN",s="title_YxV5",o="cardOpen_IEP6";var b=a(51436),u=a(86010);class c extends d.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",d.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:a}=e,{innerHeight:n}=window;t<n&&a>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:a,children:n}=this.props;return d.createElement("div",{ref:this.videoRef,className:i},this.state.open?d.createElement("div",{className:o},d.createElement("div",{className:k},e&&d.createElement("h5",{className:s},e),!this.props.expanded&&d.createElement("button",{className:(0,u.default)("button button--sm button--outline button--secondary",m),onClick:this.onClick},d.createElement(l.G,{icon:b.IQi})),n&&d.createElement("div",{className:p},n)),this.state.visible?d.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},d.createElement("source",{src:t,type:"video/"+(a||"mp4")})):d.createElement("div",{style:{height:"150px"}},d.createElement(l.G,{icon:b.IJ7,spin:!0}))):d.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},d.createElement("div",{className:r},d.createElement("div",{className:s},e||"Video"),n&&d.createElement("div",{className:p},n)),this.state.visible?d.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},d.createElement("source",{src:t,type:"video/"+(a||"mp4")})):d.createElement("div",{style:{height:"150px"}},d.createElement(l.G,{icon:b.IJ7,spin:!0}))))}}},44065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>s,toc:()=>b});var n=a(83117),d=(a(67294),a(3905)),l=a(85107),i=a(44996),r=a(65648),k=a(85162);const m={},p="Systemnavigation",s={unversionedId:"byod-basics/v25/Skills/navigation",id:"byod-basics/v25/Skills/navigation",title:"Systemnavigation",description:"Tastatur",source:"@site/docs/byod-basics/v25/003-Skills/005-navigation.mdx",sourceDirName:"byod-basics/v25/003-Skills",slug:"/byod-basics/v25/Skills/navigation",permalink:"/byod-basics/v25/Skills/navigation",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/003-Skills/005-navigation.mdx",tags:[],version:"current",lastUpdatedAt:1657284461,formattedLastUpdatedAt:"8. Juli 2022",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Dateiexplorer",permalink:"/byod-basics/v25/Skills/dateiexplorer"},next:{title:"Software",permalink:"/byod-basics/v25/Skills/software"}},o={},b=[{value:"Tastatur",id:"tastatur",level:2},{value:"Tastenk\xfcrzel",id:"tastenk\xfcrzel",level:3},{value:"Pfeiltasten",id:"pfeiltasten",level:3},{value:"Klammern",id:"klammern",level:3},{value:"Weitere g\xe4ngige Zeichen",id:"weitere-g\xe4ngige-zeichen",level:3},{value:"Link \xd6ffnen",id:"link-\xf6ffnen",level:3},{value:"Touch-Gesten",id:"touch-gesten",level:2},{value:"Klicken durch Tippen",id:"klicken-durch-tippen",level:3},{value:"Rechtsklick",id:"rechtsklick",level:3},{value:"Scrollen",id:"scrollen",level:3},{value:"Alle Programme Anzeigen",id:"alle-programme-anzeigen",level:3},{value:"Virtuelle Desktops",id:"virtuelle-desktops",level:3},{value:"Erstellen",id:"erstellen",level:4},{value:"Wechseln",id:"wechseln",level:4}],u=(c="Figure",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",e)});var c;const N={toc:b};function h(e){let{components:t,...m}=e;return(0,d.kt)("wrapper",(0,n.Z)({},N,m,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"systemnavigation"},"Systemnavigation"),(0,d.kt)("h2",{id:"tastatur"},"Tastatur"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "})),", ",(0,d.kt)("kbd",{parentName:"li"},"Win")," Windows-Taste"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-shift mdi "})),", ",(0,d.kt)("kbd",{parentName:"li"},"Shift")," (oder ",(0,d.kt)("kbd",{parentName:"li"},"Umschalttaste"),")"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Alt")," (oder ",(0,d.kt)("kbd",{parentName:"li"},"Wahltaste"),")"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," (oder ",(0,d.kt)("kbd",{parentName:"li"},"Control"),"-Taste)"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-caps mdi "}))," Feststelltaste (oder ",(0,d.kt)("kbd",{parentName:"li"},"Caps-Lock"),"-Taste), ",(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-caps mdi "}))),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-tab mdi "}))," Tabulator-Taste"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-esc mdi "}))," Escape-Taste"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Funktionstaste")," ",(0,d.kt)("kbd",{parentName:"li"},"Fn")))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," (oder ",(0,d.kt)("kbd",{parentName:"li"},"Befehlstaste"),") ",(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-command mdi "}))),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Shift")," (oder ",(0,d.kt)("kbd",{parentName:"li"},"Umschalttaste"),") ",(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-shift mdi "}))),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Alt")," (oder ",(0,d.kt)("kbd",{parentName:"li"},"option")," oder ",(0,d.kt)("kbd",{parentName:"li"},"Wahltaste"),"-Taste) ",(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-option mdi "}))," "),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," (oder ",(0,d.kt)("kbd",{parentName:"li"},"Control")," + ",(0,d.kt)("kbd",{parentName:"li"},"Taste"),"-Taste) ",(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-control mdi "}))),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-caps mdi "}))," Feststelltaste ,  ",(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-caps mdi "}))),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-tab mdi "}))," Tabulator-Taste"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-esc mdi "}))," Escape-Taste"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"fn")," Funktionstaste")))),(0,d.kt)("h3",{id:"tastenk\xfcrzel"},"Tastenk\xfcrzel"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Explorer."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Explorer."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Sie k\xf6nnen anschliessend zum Wiederholen den Tastaturkurzbefehl\n',(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"A"),": Alle Objekte ausw\xe4hlen."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"P"),": Das aktuelle Dokument drucken."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"S"),": Das aktuelle Dokument sichern."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"T"),": Einen neuen Tab \xf6ffnen."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "}))," + ",(0,d.kt)("kbd",{parentName:"li"},"Tabulatortaste ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-tab mdi "})),": Alle ge\xf6ffneten Apps anzeigen."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Alt")," + ",(0,d.kt)("kbd",{parentName:"li"},"Tabulatortaste ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-tab mdi "})),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Enter ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-return mdi "})),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)"))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Finder."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Finder."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Sie k\xf6nnen anschliessend zum Wiederholen den Tastaturkurzbefehl ',(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"A"),": Alle Objekte ausw\xe4hlen."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"P"),": Das aktuelle Dokument drucken."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"S"),": Das aktuelle Dokument sichern."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"T"),": Einen neuen Tab \xf6ffnen."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"Tabulatortaste ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-tab mdi "})),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Cmd")," + ",(0,d.kt)("kbd",{parentName:"li"},"Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Enter ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-return mdi "})),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)")))),(0,d.kt)("h3",{id:"pfeiltasten"},"Pfeiltasten"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Pfeiltasten")," Text ausw\xe4hlen"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Ctrl")," + ",(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Pfeiltasten")," ganze W\xf6rter selektieren"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Win")," + ",(0,d.kt)("kbd",{parentName:"li"},"Pfeiltasten")," Fenster auf dem Bildschirm anordnen"))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Pfeiltasten")," Text ausw\xe4hlen"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Alt ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-option mdi "}))," + ",(0,d.kt)("kbd",{parentName:"li"},"Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("kbd",{parentName:"li"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"li"},"Alt ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-option mdi "}))," + ",(0,d.kt)("kbd",{parentName:"li"},"Pfeiltasten")," ganze W\xf6rter selektieren")))),(0,d.kt)("h3",{id:"klammern"},"Klammern"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)("dl",null,(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"(")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"8")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},")")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"9")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"{")),(0,d.kt)("dd",{parentName:"dl"},"Normalerweise ",(0,d.kt)("kbd",{parentName:"dd"},"Alt Gr")," + ",(0,d.kt)("kbd",{parentName:"dd"},"\xe4")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"}")),(0,d.kt)("dd",{parentName:"dl"},"Normalerweise ",(0,d.kt)("kbd",{parentName:"dd"},"Alt Gr")," + ",(0,d.kt)("kbd",{parentName:"dd"},"$")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"[")),(0,d.kt)("dd",{parentName:"dl"},"Normalerweise ",(0,d.kt)("kbd",{parentName:"dd"},"Alt Gr")," + ",(0,d.kt)("kbd",{parentName:"dd"},"\xfc")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"]")),(0,d.kt)("dd",{parentName:"dl"},"Normalerweise ",(0,d.kt)("kbd",{parentName:"dd"},"Alt Gr")," + ",(0,d.kt)("kbd",{parentName:"dd"},"!")))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)("dl",null,(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"(")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"8")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},")")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"9")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"{")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Option ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-option mdi "}))," + ",(0,d.kt)("kbd",{parentName:"dd"},"(")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"}")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Option ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-option mdi "}))," + ",(0,d.kt)("kbd",{parentName:"dd"},")")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"[")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Option ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-option mdi "}))," + ",(0,d.kt)("kbd",{parentName:"dd"},"5")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"]")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Option ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-apple-keyboard-option mdi "}))," + ",(0,d.kt)("kbd",{parentName:"dd"},"6"))))),(0,d.kt)("h3",{id:"weitere-g\xe4ngige-zeichen"},"Weitere g\xe4ngige Zeichen"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)("dl",null,(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("code",null,"`")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"^")," + ",(0,d.kt)("kbd",{parentName:"dd"},"Leerschlage")," (Backtick)"),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"@")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Alt Gr")," + ",(0,d.kt)("kbd",{parentName:"dd"},"2")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"#")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Alt Gr")," + ",(0,d.kt)("kbd",{parentName:"dd"},"3")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"*")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"3")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"*")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"3")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"%")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"5")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"&")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"6")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"/")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"7")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"\\")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"7")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"<")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"<")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},">")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"<")))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)("dl",null,(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("code",null,"`")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"Shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"^")," + ",(0,d.kt)("kbd",{parentName:"dd"},"Leerschlage")," (Backtick)"),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"@")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"option")," + ",(0,d.kt)("kbd",{parentName:"dd"},"g")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"+")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"option")," + ",(0,d.kt)("kbd",{parentName:"dd"},"1")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"#")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"option")," + ",(0,d.kt)("kbd",{parentName:"dd"},"3")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"*")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"3")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"%")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"5")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"&")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"6")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"/")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"7")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"\\")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},"option")," + ",(0,d.kt)("kbd",{parentName:"dd"},"7")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},"<")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"<")),(0,d.kt)("dt",{parentName:"dl"},(0,d.kt)("inlineCode",{parentName:"dt"},">")),(0,d.kt)("dd",{parentName:"dl"},(0,d.kt)("kbd",{parentName:"dd"},"shift")," + ",(0,d.kt)("kbd",{parentName:"dd"},">"))))),(0,d.kt)("h3",{id:"link-\xf6ffnen"},"Link \xd6ffnen"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"Links in bspw. in Word/Powerpoint \xf6ffnen "),(0,d.kt)("li",{parentName:"ul"},"Link auf einer Webseite in einem neuen Tab \xf6ffnen"),(0,d.kt)("li",{parentName:"ul"},"...")),(0,d.kt)("p",null,(0,d.kt)("kbd",{parentName:"p"},"Cmd")," + ",(0,d.kt)("i",{parentName:"p",className:"mdi-mouse mdi "})," ",(0,d.kt)("em",{parentName:"p"},"Click")),(0,d.kt)("h2",{id:"touch-gesten"},"Touch-Gesten"),(0,d.kt)("h3",{id:"klicken-durch-tippen"},"Klicken durch Tippen"),(0,d.kt)("p",null,"Auf modernen Touchpads reicht ein Antippen aus, um einen Klick auszul\xf6sen."),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(2253).Z,width:"592",height:"618"}))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(80800).Z,width:"592",height:"618"})))),(0,d.kt)("h3",{id:"rechtsklick"},"Rechtsklick"),(0,d.kt)("p",null,"Auch hier kann wahlweise Geklickt oder nur getippt werden."),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(68234).Z,width:"592",height:"618"}))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(37089).Z,width:"592",height:"618"})))),(0,d.kt)("h3",{id:"scrollen"},"Scrollen"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(39788).Z,width:"592",height:"618"}))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(27710).Z,width:"592",height:"618"})))),(0,d.kt)("h3",{id:"alle-programme-anzeigen"},"Alle Programme Anzeigen"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(71242).Z,width:"592",height:"618"})),(0,d.kt)("p",null,"(",(0,d.kt)("em",{parentName:"p"},"Diese Option ist nicht bei allen Touchpads verf\xfcgbar."),")")),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)("p",null,"Mission Control"),(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(63407).Z,width:"592",height:"618"})))),(0,d.kt)("h3",{id:"virtuelle-desktops"},"Virtuelle Desktops"),(0,d.kt)("p",null,"Mit virtuellen Desktops lassen sich mehrere Arbeitsbereiche und Fensteranordnungen erstellen."),(0,d.kt)("h4",{id:"erstellen"},"Erstellen"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)("p",null,"Virtuelle Desktops: Mit ",(0,d.kt)("kbd",{parentName:"p"},(0,d.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "})),"+",(0,d.kt)("kbd",{parentName:"p"},"Tabulator ",(0,d.kt)("i",{parentName:"kbd",className:"mdi-keyboard-tab mdi "}))," alle ge\xf6ffneten Fenster anzeigen und oben im Fenster einen neuen Virtuellen Desktop erstellen:"),(0,d.kt)(r.Z,{src:(0,i.Z)("/img/byod-basics/win/create_virtual_desktops.mp4"),mdxType:"Video"})),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)(r.Z,{src:(0,i.Z)("/img/byod-basics/osx/create_virtual_desktops.mp4"),mdxType:"Video"}))),(0,d.kt)("h4",{id:"wechseln"},"Wechseln"),(0,d.kt)("p",null,"Mit folgenden Gesten kann zwischen diesen Desktops hin- und hergewechselt werden.","*"),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(99368).Z,width:"592",height:"618"}))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)(u,{options:{},mdxType:"Figure"},(0,d.kt)("img",{src:a(87953).Z,width:"592",height:"618"})))),(0,d.kt)("p",null,"*"," Je nach Voreinstellungen ist diese Geste mit nur 3 statt 4 Fingern zu machen."),(0,d.kt)(l.Z,{mdxType:"OsTabs"},(0,d.kt)(k.Z,{value:"win",mdxType:"TabItem"},(0,d.kt)("p",null,"Weitere Gesten ",(0,d.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/touchpad-gesten-f%C3%BCr-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741"},"hier"))),(0,d.kt)(k.Z,{value:"mac",mdxType:"TabItem"},(0,d.kt)("p",null,"Weitere Gesten ",(0,d.kt)("a",{parentName:"p",href:"https://support.apple.com/de-ch/HT204895"},"hier")))))}h.isMDXComponent=!0},87953:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},80800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},63407:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},37089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},27710:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},99368:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},2253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},71242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},68234:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},39788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"}}]);