"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[43819],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(667294),i=n(386010),a="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.default)(a,o),hidden:n},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(583117),i=n(667294),a=n(972389),o=n(867392),l=n(707094),s=n(212466),p=n(386010),u="tabList_uSqn",d="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,m=e.block,f=e.defaultValue,g=e.values,h=e.groupId,k=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),x=N.tabGroupChoices,I=N.setTabGroupChoices,Z=(0,i.useState)(y),P=Z[0],S=Z[1],T=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=x[h];null!=C&&C!==P&&b.some((function(e){return e.value===C}))&&S(C)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==P&&(O(t),S(r),null!=h&&I(h,r))},F=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,p.default)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.default)("tabs",{"tabs--block":m},k)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return T.push(e)},onKeyDown:F,onFocus:E,onClick:E},a,{className:(0,p.default)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(v.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,a.Z)();return i.createElement(c,(0,r.Z)({key:String(t)},e))}},285107:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(21073),i=n(667294),a=n(409877),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return i.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},521761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var r,i=n(583117),a=n(480102),o=(n(667294),n(603905)),l=n(285107),s=n(72360),p=["components"],u={title:"2. VS Code"},d="VS Code",c={unversionedId:"Software/vscode",id:"version-24i/Software/vscode",title:"2. VS Code",description:"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar.",source:"@site/versioned_docs/version-24i/03-Software/02-vscode.mdx",sourceDirName:"03-Software",slug:"/Software/vscode",permalink:"/24i/Software/vscode",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/03-Software/02-vscode.mdx",tags:[],version:"24i",sidebarPosition:2,frontMatter:{title:"2. VS Code"},sidebar:"version-24i/sidebar",previous:{title:"1. Python",permalink:"/24i/Software/python"},next:{title:"Programmieren-1",permalink:"/24i/category/programmieren-1"}},m={},f=[{value:"Installieren",id:"installieren",level:2},{value:"Konfigurieren",id:"konfigurieren",level:2},{value:"Python Interpreter",id:"python-interpreter",level:3},{value:"Verwenden",id:"verwenden",level:2},{value:"1. Wo ist was?",id:"1-wo-ist-was",level:3},{value:"2. Python Befehle ausprobieren",id:"2-python-befehle-ausprobieren",level:3},{value:"3. Einen Ordner \xf6ffnen",id:"3-einen-ordner-\xf6ffnen",level:3},{value:"4. Ein neues Python Script erstellen",id:"4-ein-neues-python-script-erstellen",level:3},{value:"5. Einzelne Programm-Schritte nachvollziehen (debuggen)",id:"5-einzelne-programm-schritte-nachvollziehen-debuggen",level:3}],g=(r="Figure",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:f};function k(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vs-code"},"VS Code"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar. ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,o.kt)("h2",{id:"installieren"},"Installieren"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unter ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"https://code.visualstudio.com/")," die aktuelle Version von Python herunterladen. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Surface Pro X -> ",(0,o.kt)("inlineCode",{parentName:"li"},"ARM")),(0,o.kt)("li",{parentName:"ul"},"Windows -> ",(0,o.kt)("inlineCode",{parentName:"li"},"64 bit")),(0,o.kt)("li",{parentName:"ul"},"Mac mit M1 Chip -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Apple Silicon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Download Optionen",src:n(861022).Z,width:"3104",height:"1904"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Download Optionen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))))),(0,o.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken"),(0,o.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Installations-Optionen"),(0,o.kt)(l.Z,{mdxType:"OsTabs"},(0,o.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 1.",src:n(722338).Z,width:"1498",height:"1046"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 2.",src:n(280222).Z,width:"1498",height:"1046"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 3.",src:n(607885).Z,width:"1498",height:"1046"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 4.",src:n(166769).Z,width:"1498",height:"1046"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 5.",src:n(553782).Z,width:"1498",height:"1046"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 5.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 6.",src:n(534794).Z,width:"1498",height:"1046"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 6.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 7.",src:n(320708).Z,width:"1498",height:"1046"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 7.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei ist eine komprimierte ",(0,o.kt)("inlineCode",{parentName:"li"},".zip"),"-Datei - nach dem Doppelklicken befindet sich im Download-Ordner eine Datei `Visual Studio Code.app``"),(0,o.kt)("li",{parentName:"ol"},"Die Datei ",(0,o.kt)("inlineCode",{parentName:"li"},"Visual Studio Code.app"),' in den Ordner "Programme" ziehen.'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 3.",src:n(16387).Z,width:"818",height:"908"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"konfigurieren"},"Konfigurieren"),(0,o.kt)("p",null,"Damit die richtigen Voreinstellungen geladen werden, muss eine Erweiterung, ein sog. Plugin, installiert werden. Unter ",(0,o.kt)("inlineCode",{parentName:"p"},"Erweiterungen")," nach dem Plugin ",(0,o.kt)("strong",{parentName:"p"},"gbsl-informatik")," suchen und dieses installieren."),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"VS Code Plugins",src:n(589343).Z,width:"2272",height:"1760"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"VS Code Plugins",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)("h3",{id:"python-interpreter"},"Python Interpreter"),(0,o.kt)("p",null,"Um Python-Programme auszuf\xfchren, ist ein \xdcbersetzer der Befehle zu Maschinenverst\xe4ndlichem Code notwendig. Diese Aufgabe \xfcbernimmt der ",(0,o.kt)("strong",{parentName:"p"},"Python Interpreter"),". Auf einem Ger\xe4t sind meist mehrere verschiedene Python-Interpreter installiert - in VS Code soll aber der von uns installierte Interpreter verwendet werden:"),(0,o.kt)(l.Z,{mdxType:"OsTabs"},(0,o.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Es muss immer \xfcberpr\xfcft werden, dass der von uns installierte Interpreter ausgew\xe4hlt ist."))),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Interpreter Ausw\xe4hlen",src:n(275053).Z,width:"1550",height:"1080"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Interpreter Ausw\xe4hlen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Der ",(0,o.kt)("strong",{parentName:"p"},"zuletzt")," installierte Python-Interpreter ist jeweils unter ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/python3")," (in der zweiten Zeile vermerkt) verf\xfcgbar. Es muss immer \xfcberpr\xfcft werden, dass dieser Interpreter ausgew\xe4hlt ist."))),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Interpreter Ausw\xe4hlen",src:n(62041).Z,width:"880",height:"604"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Interpreter Ausw\xe4hlen",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Eine andere Version verwenden"),(0,o.kt)("p",null,"Unter ",(0,o.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks/Python.framework/Versions/")," sind alle Python-Versionen verf\xfcgbar. Beim Konfigurieren des Interpreters kann \xfcber ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter interpreter path...")," auch dieser Pfad angegeben werden."),(0,o.kt)("p",null,"Beispiel-Pfad f\xfcr die Version 3.9:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9\n"))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Welcher Interpreter wird aktuell verwendet?"),(0,o.kt)("p",null,"Mit folgendem Python-Programm kann man herausfinden, wo sich der Python Interpreter befindet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import sys\nprint(sys.executable)\n"))),(0,o.kt)("h2",{id:"verwenden"},"Verwenden"),(0,o.kt)("p",null,"In VS Code lassen sich einzelne Dateien oder Ordner \xf6ffnen. Damit alle relevanten Dateien beim Ausf\xfchren von Python-Programmen von VS Code gefunden werden, sollten immer ganze Ordner ge\xf6ffnet werden."),(0,o.kt)("h3",{id:"1-wo-ist-was"},"1. Wo ist was?"),(0,o.kt)("p",null,"Alle im moment ge\xf6ffneten Programme sind auf der linken Seite im Dateiexplorer zu sehen."),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:n(838012).Z,width:"2272",height:"1760"})),(0,o.kt)("h3",{id:"2-python-befehle-ausprobieren"},"2. Python Befehle ausprobieren"),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:n(413279).Z,width:"2272",height:"1760"})),(0,o.kt)("h3",{id:"3-einen-ordner-\xf6ffnen"},"3. Einen Ordner \xf6ffnen"),(0,o.kt)("p",null,"\xd6ffnen Sie jeweils einen ganzen Ordner, in welchem sich Ihre Python Scripts befinden."),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:n(474161).Z,width:"2054",height:"1582"})),(0,o.kt)("h3",{id:"4-ein-neues-python-script-erstellen"},"4. Ein neues Python Script erstellen"),(0,o.kt)("p",null,'Um ein neues Python Script hinzuzuf\xfcgen, klicken Sie "New File". Wichtig: ',(0,o.kt)("strong",{parentName:"p"},"Die Dateiendung des Skripts muss ",(0,o.kt)("inlineCode",{parentName:"strong"},".py")," sein!")),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:n(886827).Z,width:"2272",height:"1760"})),(0,o.kt)("h3",{id:"5-einzelne-programm-schritte-nachvollziehen-debuggen"},"5. Einzelne Programm-Schritte nachvollziehen (debuggen)"),(0,o.kt)(g,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:n(410863).Z,width:"2054",height:"1536"})),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,o.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Visual_Studio_Code"},"wikipedia"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},474161:function(e,t,n){t.Z=n.p+"assets/images/01_open_folder-6b8c50bf8bdbe5ca661f3a205f7a46e0.png"},886827:function(e,t,n){t.Z=n.p+"assets/images/02_create_file-28fa79b6e9402bb63491ad46d045d1f6.png"},838012:function(e,t,n){t.Z=n.p+"assets/images/03_workbench-ad181c29f7e8eb911dee87a30601f490.png"},410863:function(e,t,n){t.Z=n.p+"assets/images/04_debug-c784828bbbf44ed5b654de1ec294e660.png"},413279:function(e,t,n){t.Z=n.p+"assets/images/05_ipython-0f140f77b1fdcda1caa6e3e48d398353.png"},16387:function(e,t,n){t.Z=n.p+"assets/images/osx-01-5872446b74c32e0d5a2ce83678fe2d6e.png"},62041:function(e,t,n){t.Z=n.p+"assets/images/osx-configure-python-interpreter-67015f759d16c72b412e28ebed0c2711.png"},861022:function(e,t,n){t.Z=n.p+"assets/images/vscode-download-3e1dc5f9d925fa7c5093e7a1651b3bb0.png"},589343:function(e,t,n){t.Z=n.p+"assets/images/vscode-plugins-0c606baa8b2ba3e15dfb2a76194e917d.png"},722338:function(e,t,n){t.Z=n.p+"assets/images/win-01-dc8eb8cf9e34639b8ec37e83b2bf300d.png"},280222:function(e,t,n){t.Z=n.p+"assets/images/win-02-9c9854461dbf29288b13fe0c5806e58d.png"},607885:function(e,t,n){t.Z=n.p+"assets/images/win-03-9de93d64a534850600758d4d5e3d0a5b.png"},166769:function(e,t,n){t.Z=n.p+"assets/images/win-04-496ef2b5f696f9dfe852580f4b2069b4.png"},553782:function(e,t,n){t.Z=n.p+"assets/images/win-05-432431227c0f183f79405080829692ca.png"},534794:function(e,t,n){t.Z=n.p+"assets/images/win-06-3b922ac653e5d24d4e62b150c17d50e6.png"},320708:function(e,t,n){t.Z=n.p+"assets/images/win-07-7449c627f872fef6f1f4012589d65fbc.png"},275053:function(e,t,n){t.Z=n.p+"assets/images/win-configure-python-interpreter-a8db42baa9a40b35935eb98222843bb2.png"}}]);