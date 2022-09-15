"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[13377],{65488:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(83117),i=a(67294),r=a(86010),m=a(72389),p=a(67392),s=a(7094),l=a(12466);const o="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a;const{lazy:m,block:c,defaultValue:k,values:v,groupId:u,className:g}=e,N=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,p.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===k?k:null!=(t=null!=k?k:null==(a=N.find((e=>e.props.default)))?void 0:a.props.value)?t:N[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[x,T]=(0,i.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,l.o5)();if(null!=u){const e=b[u];null!=e&&e!==x&&h.some((t=>t.value===e))&&T(e)}const Z=e=>{const t=e.currentTarget,a=C.indexOf(t),n=h[a].value;n!==x&&(I(t),T(n),null!=u&&w(u,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var i;const t=C.indexOf(e.currentTarget)-1;a=null!=(i=C[t])?i:C[C.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.default)("tabs-container",o)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":c},g)},h.map((e=>{let{value:t,label:a,attributes:m}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:S,onFocus:Z,onClick:Z},m,{className:(0,r.default)("tabs__item",d,null==m?void 0:m.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),m?(0,i.cloneElement)(N.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,m.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),i=a(65488);const r={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},m=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(i.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:r[e],value:e}))))},e.children);var a}},9576:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>s,toc:()=>o});var n=a(83117),i=(a(67294),a(3905)),r=(a(61839),a(85107));const m={sidebar_custom_props:{id:"a241d178-8c66-4f90-9469-8ca558bd7a26"}},p="VS Code 1.59",s={unversionedId:"software-installation/vs-code/v1.59/index",id:"software-installation/vs-code/v1.59/index",title:"VS Code 1.59",description:"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar.",source:"@site/docs/software-installation/vs-code/v1.59/index.md",sourceDirName:"software-installation/vs-code/v1.59",slug:"/software-installation/vs-code/v1.59/",permalink:"/software-installation/vs-code/v1.59/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/software-installation/vs-code/v1.59/index.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"a241d178-8c66-4f90-9469-8ca558bd7a26"}},sidebar:"sidebar",previous:{title:"Python 3.9",permalink:"/software-installation/python/v3.9/"},next:{title:"VS Code 1.70",permalink:"/software-installation/vs-code/v1.70/"}},l={},o=[{value:"Installieren",id:"installieren",level:2},{value:"Konfigurieren",id:"konfigurieren",level:2},{value:"Python Interpreter",id:"python-interpreter",level:3},{value:"Verwenden",id:"verwenden",level:2},{value:"1. Wo ist was?",id:"1-wo-ist-was",level:3},{value:"2. Python Befehle ausprobieren",id:"2-python-befehle-ausprobieren",level:3},{value:"3. Einen Ordner \xf6ffnen",id:"3-einen-ordner-\xf6ffnen",level:3},{value:"4. Ein neues Python Script erstellen",id:"4-ein-neues-python-script-erstellen",level:3},{value:"5. Einzelne Programm-Schritte nachvollziehen (debuggen)",id:"5-einzelne-programm-schritte-nachvollziehen-debuggen",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=d("Comment"),k=d("Figure"),v=d("TabItem"),u={toc:o};function g(e){let{components:t,...m}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"vs-code-159"},"VS Code 1.59"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("blockquote",null,(0,i.kt)("div",{parentName:"blockquote",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar. ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"installieren"},"Installieren"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unter ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"https://code.visualstudio.com/")," die aktuelle Version von Python herunterladen. "),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Surface Pro X -> ",(0,i.kt)("inlineCode",{parentName:"p"},"ARM")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Windows -> ",(0,i.kt)("inlineCode",{parentName:"p"},"64 bit")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Mac mit M1 Chip -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Apple Silicon")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Download Optionen",src:a(18870).Z,width:"3104",height:"1904"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Download Optionen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die heruntergeladene Datei doppelklicken"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Folgende Optionen bei der Installation ber\xfccksichtigen:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Installations-Optionen"),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(v,{value:"win",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 1.",src:a(11802).Z,width:"1498",height:"1046"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 2.",src:a(51745).Z,width:"1498",height:"1046"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 3.",src:a(73537).Z,width:"1498",height:"1046"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 4.",src:a(3311).Z,width:"1498",height:"1046"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 5.",src:a(6315).Z,width:"1498",height:"1046"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 5.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 6.",src:a(11600).Z,width:"1498",height:"1046"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 6.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 7.",src:a(88053).Z,width:"1498",height:"1046"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 7.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Fertig \ud83e\udd73"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))))),(0,i.kt)(v,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die heruntergeladene Datei ist eine komprimierte ",(0,i.kt)("inlineCode",{parentName:"p"},".zip"),"-Datei - nach dem Doppelklicken befindet sich im Download-Ordner eine Datei `Visual Studio Code.app``"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die Datei ",(0,i.kt)("inlineCode",{parentName:"p"},"Visual Studio Code.app"),' in den Ordner "Programme" ziehen.'),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 3.",src:a(44585).Z,width:"818",height:"908"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Fertig \ud83e\udd73"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))))))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"konfigurieren"},"Konfigurieren"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Damit die richtigen Voreinstellungen geladen werden, muss eine Erweiterung, ein sog. Plugin, installiert werden. Unter ",(0,i.kt)("inlineCode",{parentName:"p"},"Erweiterungen")," nach dem Plugin ",(0,i.kt)("strong",{parentName:"p"},"gbsl-informatik")," suchen und dieses installieren."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"VS Code Plugins",src:a(34714).Z,width:"2272",height:"1760"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"VS Code Plugins",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"python-interpreter"},"Python Interpreter"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Um Python-Programme auszuf\xfchren, ist ein \xdcbersetzer der Befehle zu Maschinenverst\xe4ndlichem Code notwendig. Diese Aufgabe \xfcbernimmt der ",(0,i.kt)("strong",{parentName:"p"},"Python Interpreter"),". Auf einem Ger\xe4t sind meist mehrere verschiedene Python-Interpreter installiert - in VS Code soll aber der von uns installierte Interpreter verwendet werden:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(v,{value:"win",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Es muss immer \xfcberpr\xfcft werden, dass der von uns installierte Interpreter ausgew\xe4hlt ist."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Interpreter Ausw\xe4hlen",src:a(49914).Z,width:"1550",height:"1080"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Interpreter Ausw\xe4hlen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"}))),(0,i.kt)(v,{value:"mac",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Der ",(0,i.kt)("strong",{parentName:"p"},"zuletzt")," installierte Python-Interpreter ist jeweils unter ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/python3")," (in der zweiten Zeile vermerkt) verf\xfcgbar. Es muss immer \xfcberpr\xfcft werden, dass dieser Interpreter ausgew\xe4hlt ist."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Interpreter Ausw\xe4hlen",src:a(8676).Z,width:"880",height:"604"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Interpreter Ausw\xe4hlen",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Eine andere Version verwenden"),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unter ",(0,i.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks/Python.framework/Versions/")," sind alle Python-Versionen verf\xfcgbar. Beim Konfigurieren des Interpreters kann \xfcber ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter interpreter path...")," auch dieser Pfad angegeben werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Beispiel-Pfad f\xfcr die Version 3.9:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"/Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9\n"))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Welcher Interpreter wird aktuell verwendet?"),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Mit folgendem Python-Programm kann man herausfinden, wo sich der Python Interpreter befindet:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import sys\nprint(sys.executable)\n"))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"verwenden"},"Verwenden"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"In VS Code lassen sich einzelne Dateien oder Ordner \xf6ffnen. Damit alle relevanten Dateien beim Ausf\xfchren von Python-Programmen von VS Code gefunden werden, sollten immer ganze Ordner ge\xf6ffnet werden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"1-wo-ist-was"},"1. Wo ist was?"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Alle im moment ge\xf6ffneten Programme sind auf der linken Seite im Dateiexplorer zu sehen."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(74557).Z,width:"2272",height:"1760"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:12,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"2-python-befehle-ausprobieren"},"2. Python Befehle ausprobieren"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(95934).Z,width:"2272",height:"1760"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:13,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"3-einen-ordner-\xf6ffnen"},"3. Einen Ordner \xf6ffnen"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xd6ffnen Sie jeweils einen ganzen Ordner, in welchem sich Ihre Python Scripts befinden."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(87905).Z,width:"2054",height:"1582"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:14,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"4-ein-neues-python-script-erstellen"},"4. Ein neues Python Script erstellen"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},'Um ein neues Python Script hinzuzuf\xfcgen, klicken Sie "New File". Wichtig: ',(0,i.kt)("strong",{parentName:"p"},"Die Dateiendung des Skripts muss ",(0,i.kt)("inlineCode",{parentName:"strong"},".py")," sein!")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(24296).Z,width:"2272",height:"1760"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:15,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h3",{parentName:"div",id:"5-einzelne-programm-schritte-nachvollziehen-debuggen"},"5. Einzelne Programm-Schritte nachvollziehen (debuggen)"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(94594).Z,width:"2054",height:"1536"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:16,mdxType:"Comment"})),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Quelle: ",(0,i.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Visual_Studio_Code"},"wikipedia")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}g.isMDXComponent=!0},87905:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01_open_folder-6b8c50bf8bdbe5ca661f3a205f7a46e0.png"},24296:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02_create_file-28fa79b6e9402bb63491ad46d045d1f6.png"},74557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03_workbench-ad181c29f7e8eb911dee87a30601f490.png"},94594:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/04_debug-c784828bbbf44ed5b654de1ec294e660.png"},95934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05_ipython-0f140f77b1fdcda1caa6e3e48d398353.png"},44585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-01-5872446b74c32e0d5a2ce83678fe2d6e.png"},8676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-configure-python-interpreter-67015f759d16c72b412e28ebed0c2711.png"},18870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vscode-download-3e1dc5f9d925fa7c5093e7a1651b3bb0.png"},34714:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vscode-plugins-0c606baa8b2ba3e15dfb2a76194e917d.png"},11802:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-01-dc8eb8cf9e34639b8ec37e83b2bf300d.png"},51745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-02-9c9854461dbf29288b13fe0c5806e58d.png"},73537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-03-9de93d64a534850600758d4d5e3d0a5b.png"},3311:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-04-496ef2b5f696f9dfe852580f4b2069b4.png"},6315:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-05-432431227c0f183f79405080829692ca.png"},11600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-06-3b922ac653e5d24d4e62b150c17d50e6.png"},88053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-07-7449c627f872fef6f1f4012589d65fbc.png"},49914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-configure-python-interpreter-a8db42baa9a40b35935eb98222843bb2.png"}}]);