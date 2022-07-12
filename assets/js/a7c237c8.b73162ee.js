"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7605],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82593:(e,t,a)=>{a.d(t,{x:()=>_,Z:()=>z});var n=a(67294);const r={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var i=a(86010),l=a(71217);const s=/--(?<klass>\w+)$/,o=e=>{let t,{value:a}=e,i=a;if(s.test(a)){const e=(e=>{if(s.test(e))return e.match(s).groups.klass})(a);t=r[e],i=""+a.replace(s,"")}return n.createElement("option",{value:a,className:t},i)};var d=a(92814),c=a(51436),p=a(68949),m=a(72389),u=a(21314),h=a(74322);const g=/--(?<klass>\w+)$/,k=e=>r[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],f=(0,l.Pi)((e=>{const t=(0,m.Z)(),[a,l]=n.useState("unchecked"),s=(0,u.oR)("documentStore").find(e.webKey),g=e=>{s.loaded&&(l("unchecked"),s.setData({value:e,type:"string"}))},f=t=>{if(e.checker)return l(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;l(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,p.U5)((()=>s.loaded),(e=>{e&&f(s.value)}))),[s]),n.useEffect((()=>{s.loaded&&f(s.value)}),[s,t]),t?s.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:s.value,className:k(s.value),disabled:!s.loaded},e.select.map(((e,t)=>n.createElement(o,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>f(s.value),className:(0,i.default)(r[a],r.checkButton)},n.createElement(d.G,{icon:(b=a,"correct"===b?c.f8k:"wrong"===b?c.nYk:c.sph)}))):n.createElement(h.Z,null):n.createElement("div",null,"SSR");var b})),b=/--(?<klass>\w+)$/,N=e=>r[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],v=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map(((r,i)=>e.select?n.createElement("select",{key:i,onChange:e=>a(e.target.value,i),value:r,className:N(r),disabled:!t.loaded},e.select.map(((e,t)=>n.createElement(o,{value:e,key:t})))):n.createElement("input",{key:i,type:"text",onChange:e=>a(e.target.value,i),value:r,disabled:!t.loaded||t.readonly})))):n.createElement(h.Z,null)}));var w=a(87462),y=a(75552);const x=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(y.Z,(0,w.Z)({model:t},e))):n.createElement(h.Z,null)}));var E=a(47271);const S=(0,l.Pi)((e=>(0,u.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var C=a(97762);const _=e=>e.replace(/\s+/g,"").toUpperCase(),z=(0,l.Pi)((e=>{const t=(0,u.oR)("documentStore"),a=(0,u.oR)("msalStore"),r=t.find(e.webKey),i=(0,m.Z)();return(0,u.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(E.Z,null),a.loggedIn&&n.createElement(S,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(f,e),"array"===e.type&&n.createElement(v,e)):n.createElement(h.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294);const r="noLoginAlert_HRfh";var i=a(39960),l=a(71217),s=a(21314);const o=(0,l.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.Z,{to:"/login"},"Login"))))},61387:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(86010),r=a(97566),i=a(67294);const l=e=>{const t=e.match(/^(?<control>1{1,4}0)/);return t?t.groups.control.length-1:0},s=e=>{let t=e.replace(/[^01]/g,"");t.length%8!=0&&(t=t.padStart(8*Math.floor(t.length/8)+8,"0"));const a=((e,t)=>{if(t<=0)throw"Invalid chunk size";const a=[];for(let n=0,r=e.length;n<r;n+=t)a.push(e.slice(n,n+t));return a})(t.split(""),8).map((e=>e.join(""))),n=[],r=[];let i=0;return a.forEach((e=>{0===i?i=l(e):i>0&&(e.startsWith("10")||(console.warn("invalid sequence, expected to start with 10",e),i=l(e)));const t=e.replace(/^1{1,4}0/,"");r.push(t),i-=1,i<=0&&(n.push(r.join("")),r.splice(0))})),n.map((e=>((e,t)=>{e=e.trim().replace(/^0+/,""),t&&e.length>t&&(e=e.slice(e.length-t));try{const t=parseInt(e,2);return String.fromCodePoint(t)}catch{return}})(e))).join("")},o=e=>{const[t,a]=i.useState(""),[l,o]=i.useState("");return i.useEffect((()=>{const e=t.split("\n").map((e=>s(e))).join("\n");o(e)}),[t]),i.createElement("div",{className:(0,n.default)("hero","shadow--lw",r.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Bin\xe4r Decodierer"),i.createElement("div",{className:(0,n.default)()},i.createElement("textarea",{placeholder:"Bin\xe4re Zeichenkette",className:(0,n.default)(r.Z.input),rows:t.split("\n").length,value:t,onChange:e=>a(e.target.value)})),i.createElement("div",{className:(0,n.default)()},i.createElement("textarea",{placeholder:"Text",className:(0,n.default)(r.Z.input),rows:l.split("\n").length,value:l,disabled:!0}))))}},74322:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010);const i="loader_FEpR",l="badge_oWqf";var s=a(71217),o=a(92814),d=a(51436);const c=(0,s.Pi)((()=>n.createElement("div",{className:(0,r.default)(i)},n.createElement(o.G,{icon:d.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))))},75552:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294);const r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP";var o=a(86010),d=a(71217),c=a(74322),p=void 0;const m=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],u=e=>{const t=[];if(e.bold||e.italic||e.underline){const a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){const a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){const a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){const a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){const a=[];e.formula&&a.push("formula"),e.image&&a.push("image"),t.push(a)}return e.code&&t.push(["code-block"]),t},h=(0,d.Pi)((e=>{const[t,d]=n.useState(!1),[h,g]=n.useState(!1),k=n.useRef(null),{model:f}=e,b=e=>{e.preventDefault()};n.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),p)return e();const n=[Promise.all([a.e(7762),a.e(8446),a.e(324),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(532),a.e(1940)]).then(a.bind(a,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(1008).then(a.bind(a,41008)),Promise.all([a.e(532),a.e(37)]).then(a.bind(a,50037)))),Promise.all(n).then((t=>{p=t[r["react-quill"]].default;const a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){const e=t[r.katex].default;window.katex=e}a.register("modules/imageCompress",n),e()}))}((()=>{t&&(g(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return p&&h&&f.loaded?n.createElement("div",{onFocus:()=>!t&&d(!0),className:(0,o.default)(r)},n.createElement(p,{ref:k,theme:"snow",readOnly:e.readonly||f.readonly,className:(0,o.default)(i,e.monospace&&l,t?void 0:s),value:f.text||"",onChange:(t,a,n,r)=>{var i,l;i=t,void 0===l&&(l=0),!e.readonly&&f.canUpdate&&h&&f.setText(i)},modules:{toolbar:e.toolbar?u(e.toolbar):[...m,...u(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(c.Z,null)}))},739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(82593),l=a(61387);const s={title:"3. Fehlerkorrektur"},o="3. Fehlerkorrektur",d={unversionedId:"Codierung/Anwendungen/fehlerkorrektur",id:"version-25h/Codierung/Anwendungen/fehlerkorrektur",title:"3. Fehlerkorrektur",description:"--width=250",source:"@site/versioned_docs/version-25h/05-Codierung/04-Anwendungen/03-fehlerkorrektur.md",sourceDirName:"05-Codierung/04-Anwendungen",slug:"/Codierung/Anwendungen/fehlerkorrektur",permalink:"/25h/Codierung/Anwendungen/fehlerkorrektur",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/04-Anwendungen/03-fehlerkorrektur.md",tags:[],version:"25h",sidebarPosition:3,frontMatter:{title:"3. Fehlerkorrektur"},sidebar:"version-25h/sidebar",previous:{title:"2. QR Code",permalink:"/25h/Codierung/Anwendungen/qr-code"},next:{title:"3D Schl\xfcsselanh\xe4nger",permalink:"/25h/Codierung/Anwendungen/3d-druck/qr"}},c={},p=[{value:"Parit\xe4tspr\xfcfung (Parit\xe4tsbit)",id:"parit\xe4tspr\xfcfung-parit\xe4tsbit",level:2},{value:"Beispiel",id:"beispiel",level:3},{value:"EAN-13",id:"ean-13",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=m("Figure"),h=m("SourceRef"),g={toc:p};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-fehlerkorrektur"},"3. Fehlerkorrektur"),(0,r.kt)(u,{options:{width:"250"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--width=250",src:a(14015).Z,width:"625",height:"646"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)(h,{parentName:"figcaption",bib:{author:"Berchtold",source:"https://lehrerfortbildung-bw.de/u_matnatech/imp/gym/bp2016/fb1/1_i1_duc/2_kopiervorlagen/2_xo/",licence:"CC 3.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/3.0/de/",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)("p",null,"Im Unterricht haben Sie gesehen, wie die umgedrehte Karte sofort entdeckt wurde - ",(0,r.kt)("em",{parentName:"p"},"Zauberei!?!?")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgaben"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgaben")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Beschreiben Sie, nach welchem Prinzip Herr Hofer das ",(0,r.kt)("inlineCode",{parentName:"p"},"5x5"),"-Muster zu einem ",(0,r.kt)("inlineCode",{parentName:"p"},"6x6"),"-Muster erg\xe4nzt hat."),(0,r.kt)(i.Z,{type:"text",webKey:"18145a45-4a97-47aa-9905-aeb5c332a7da",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Spielen Sie das ",(0,r.kt)("inlineCode",{parentName:"p"},"XO"),"-Spiel",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," mit verschiedenen Mustern durch. Jede Spieler:in darf zweimal \u201eraten\u201c."))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Von nun an soll das gelegte ",(0,r.kt)("inlineCode",{parentName:"strong"},"6x6"),"-Muster nicht mehr ge\xe4ndert werden.")),(0,r.kt)("ol",{parentName:"div",start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xdcberpr\xfcfen Sie, ob es eine Position in diesen ",(0,r.kt)("inlineCode",{parentName:"p"},"6x6"),"-Muster gibt, bei der die Drehung einer Karte nicht erkannt wird.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zwei nebeneinander liegende K\xe4rtchen werden umgedreht. \xdcberpr\xfcfen Sie, ob der Fehler erkannt werden kann. Wenn ja, k\xf6nnen Sie den Fehler auch korrigieren?"),(0,r.kt)(i.Z,{type:"text",webKey:"9c67d9c3-6abc-4c3d-bd9e-f4f23fd97023",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Nun werden zwei beliebige K\xe4rtchen umgedreht. \xdcberpr\xfcfen Sie wieder, ob der Fehler erkannt und korrigiert werden kann.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Geben Sie an, wie viele M\xf6glichkeiten zur Korrektur gefunden werden k\xf6nnen. Markieren Sie farbig (zusammengeh\xf6rende K\xe4rtchenpaare jeweils in einer Farbe) in den abgegebenen leeren ",(0,r.kt)("inlineCode",{parentName:"p"},"6x6"),"-Raster diejenigen Positionen von K\xe4rtchen, welche zur Korrektur in Frage kommen. Wiederholen Sie Aufgabe 5 noch zwei bis drei weitere Male und erg\xe4nzen Sie die K\xe4stchen. Halten Sie Ihre Erkenntnisse mit einem Bild unten fest."),(0,r.kt)(i.Z,{type:"text",webKey:"f0e8b85a-0552-4f87-84a4-8590a57ba25b",mdxType:"Answer"}))))),(0,r.kt)("h2",{id:"parit\xe4tspr\xfcfung-parit\xe4tsbit"},"Parit\xe4tspr\xfcfung (Parit\xe4tsbit)"),(0,r.kt)("p",null,"Eine Information soll bin\xe4r codiert und anschliessend \xfcbertragen werden. Dabei soll erkannt werden, ob diese fehlerfrei \xfcbertragen wurde. Eine sehr einfache Methode zur Fehlererkennung bei bin\xe4r codierten Informationen ist die Parit\xe4tspr\xfcfung."),(0,r.kt)("p",null,"Dabei wird die Anzahl der Einsen der bin\xe4r codierten Information gez\xe4hlt:"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Ist sie ungerade, wird an die Bitfolge eine \u201e1\u201c angeh\xe4ngt, so dass die Anzahl der \u201eEinsen\u201c gerade wird."),(0,r.kt)("li",{parentName:"ul"},"Ist sie gerade, wird an die Bitfolge eine \u201e0\u201c angeh\xe4ngt, so dass die Anzahl der Einsen gerade bleibt."))),(0,r.kt)("p",null,"Man spricht hierbei von einer geraden Parit\xe4t. Das angeh\xe4ngte Bit wird Parit\xe4tsbit genannt."),(0,r.kt)("h3",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,"Bin\xe4r codierte Information (7 Bit lang): ",(0,r.kt)("inlineCode",{parentName:"p"},"100110")),(0,r.kt)("p",null,"Zu \xfcbertragender Code mit Parit\xe4tsbit (7+1 Bit lang): ",(0,r.kt)("inlineCode",{parentName:"p"},"1001101")),(0,r.kt)("p",null,"Das Parit\xe4tsbit ist hier 1."),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"parit\xe4tsbit"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Parit\xe4tsbit")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Schreiben Sie mit Parit\xe4tsbit:"),(0,r.kt)(i.Z,{type:"string",webKey:"cbe3446d-5d38-4720-9548-5c0e937ca7a1",solution:"1011010",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"101101")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"101101")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))))),(0,r.kt)(i.Z,{type:"string",webKey:"7be93021-5e4a-45e5-a897-be2051d54151",solution:"10101010100010",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1010101010001")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1010101010001")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))))),(0,r.kt)("p",{parentName:"div"},"Sie erhalten 10 Bit-Sequenzen, wobei jede Sequenz mit einem Parit\xe4tsbit abgeschlossen ist."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"10110100\n11000011\n11101011\n01000011\n11100001\n11001010\n11100100\n01110011\n11001010\n11010010\n")),(0,r.kt)(i.Z,{type:"string",webKey:"d52350db-9392-45f9-b547-95f47170c3e6",solution:"10",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},"Wie viele zus\xe4tzliche Bits waren f\xfcr die Fehlererkennung n\xf6tig?")),(0,r.kt)(i.Z,{type:"string",webKey:"1c50aa68-bb3e-4421-99e3-272ffc16cc5f",solution:"2",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},"Wie viele zus\xe4tzliche Bits Sequenzen sind kaputt?")),(0,r.kt)("p",{parentName:"div"},"Entfernen die fehlerhaft \xfcbertragenen Sequenzen und entfernen Sie alle Parit\xe4ts-Bits. Welche Nachricht wird angezeigt?"),(0,r.kt)(l.Z,{mdxType:"Bin2Text"}),(0,r.kt)(i.Z,{type:"text",webKey:"3600db39-dc95-4a5b-beb4-752509e5567a",mdxType:"Answer"}),(0,r.kt)("p",{parentName:"div"},"Wieso wird ein ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," statt der Buchstabe ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," angezeigt? (",(0,r.kt)("inlineCode",{parentName:"p"},"b")," ist bin\xe4r ",(0,r.kt)("inlineCode",{parentName:"p"},"1100010"),"). Weshalb wurde dies nicht als Fehler erkannt? "),(0,r.kt)(i.Z,{type:"text",webKey:"d217e695-dd2f-437c-92f4-eeb4e9c982b4",mdxType:"Answer"}))),(0,r.kt)("h2",{id:"ean-13"},"EAN-13"),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item"},(0,r.kt)("p",{parentName:"div"},"Letzthin beim Vorbereiten im Kaffee nebenan, wollte ich eine Packung Kaffee kaufen - doch das Einscannen des Codes ging nicht, so dass der Strichcode einer anderen Packung eingelesen werden musste..."),(0,r.kt)("p",{parentName:"div"},"Doch wie funktioniert das? Weshalb wurde erkannt, dass der Code kaputt war?"),(0,r.kt)("p",{parentName:"div"},"Nach einer kurzen Recherche: Die Strichcodes auf Verpackungen sind sog. ",(0,r.kt)("strong",{parentName:"p"},"EAN-13-Codes")," (EAN = European Article Number). Doch wie funktionieren diese?")),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item"},(0,r.kt)(u,{parentName:"div",options:{width:"250px"},mdxType:"Figure"},(0,r.kt)("img",{alt:"EAN 13 --width=250px",src:a(35258).Z,width:"582",height:"941"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"EAN 13",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Was k\xf6nnte passieren, wenn ein Strichcode verdreckt oder besch\xe4digt ist?"),(0,r.kt)(i.Z,{type:"text",webKey:"a54b9818-5715-4442-a836-9a639ea4e649",mdxType:"Answer"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Die ersten 12 Stellen des (richtigen) EAN-13 Codes der Baslercaf\xe9 Verpackung lautet: ",(0,r.kt)("inlineCode",{parentName:"p"},"7610 4430 0204"),". Wie berechnet sich daraus nun die letzte Stelle, die Pr\xfcfziffer? Erkennen Sie das System? (Einfachheitshalber wurde eine weitere EAN-Nummer abgedruckt ",(0,r.kt)("inlineCode",{parentName:"p"},"4260 0806 8005"),")."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"F\xfchren Sie zu diesen Codierungen die beiden untenstehende Rechnungen aus und halten Sie die Ergebnisse fest."),(0,r.kt)(u,{parentName:"li",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(58141).Z,width:"1518",height:"278"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ermitteln Sie anhand der beiden Beispiele, wie die letzte Ziffer mit der Rechnung zusammenh\xe4ngt und beschreiben Sie das gefundene Verfahren."),(0,r.kt)(i.Z,{type:"text",webKey:"611e1a17-f69d-4cc9-9c47-d1777d17a333",mdxType:"Answer"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Berechnen Sie auch f\xfcr die folgenden Strichcodes die Pr\xfcfziffer:"),(0,r.kt)(u,{parentName:"li",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(62107).Z,width:"1518",height:"328"})))),(0,r.kt)(i.Z,{type:"string",webKey:"f6bb3360-2bae-4ebd-81a4-00d9b61dbbaa",solution:"2",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},"401035527731")),(0,r.kt)(i.Z,{type:"string",webKey:"3a0d5a1c-4eac-4dea-874d-c6ca5d9c4200",solution:"7",mdxType:"Answer"},(0,r.kt)("p",{parentName:"div"},"400781730180")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Inspirationsquelle: ",(0,r.kt)("a",{parentName:"li",href:"https://lehrerfortbildung-bw.de/u_matnatech/imp/gym/bp2016/fb1/1_i1_duc/2_kopiervorlagen/2_xo/"},"lehrerfortbildung-bw.de"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},97566:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},35258:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ean13-blaser-9cde588e872de841580c887c690da8b7.jpg"},62107:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ean13-exercise-150ca29f0517a1e44ba38f0cac21eb43.png"},58141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ean13-rechnung-52b758136ce0c2ccafd39f3609d8b115.png"},14015:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xo-game-0eb7cf82a04cde21612fef9c9907f7ff.png"}}]);