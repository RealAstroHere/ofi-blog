"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[23042],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,p=f["".concat(u,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(p,i(i({ref:t},s),{},{components:n})):r.createElement(p,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return S},Z:function(){return N}});var r=n(667294),a=n(403435),o={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},i=n(386010),l=n(471217),u=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,n=t,a=void 0;if(u.test(t)){var i=function(e){if(u.test(e))return e.match(u).groups.klass}(t);a=o[i],n=""+t.replace(u,"")}return r.createElement("option",{value:t,className:a},n)},s=n(592814),d=n(51436),f=n(168949),m=n(972389),p=n(121314),g=n(274322),b=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return o[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},h=(0,l.Pi)((function(e){var t,n=(0,m.Z)(),a=r.useState("unchecked"),l=a[0],u=a[1],b=(0,p.oR)("documentStore").find(e.webKey),h=function(e){b.loaded&&(u("unchecked"),b.setData({value:e,type:"string"}))},y=function(t){if(e.checker)return u(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};u(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,f.U5)((function(){return b.loaded}),(function(e){e&&y(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&y(b.value)}),[b,n]),n?b.loaded?r.createElement("div",{className:o.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return h(e.target.value)},style:{width:e.width},value:b.value,className:v(b.value),disabled:!b.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return h(e.target.value)},value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(b.value)},className:(0,i.default)(o[l],o.checkButton)},r.createElement(s.G,{icon:(t=l,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),y=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return o[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},k=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:o.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(a,o){return e.select?r.createElement("select",{key:o,onChange:function(e){return n(e.target.value,o)},value:a,className:w(a),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(c,{value:e,key:t})}))):r.createElement("input",{key:o,type:"text",onChange:function(e){return n(e.target.value,o)},value:a,disabled:!t.loaded||t.readonly})}))):r.createElement(g.Z,null)})),E=n(583117),x=n(575552),O=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(x.Z,(0,E.Z)({model:t},e))):r.createElement(g.Z,null)})),C=n(647271),_=(0,l.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=n(697762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},N=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),o=(0,m.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||P.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),o?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(C.Z,null),n.loggedIn&&r.createElement(_,{webKey:e.webKey}),"text"===e.type&&r.createElement(O,e),"string"===e.type&&r.createElement(h,e),"array"===e.type&&r.createElement(k,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),a="noLoginAlert_HRfh",o=n(239960),i=n(471217),l=n(121314),u=(0,i.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(o.Z,{to:"/login"},"Login"))}))},274322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(667294),a=n(386010),o="loader_FEpR",i="badge_oWqf",l=n(471217),u=n(592814),c=n(51436),s=(0,l.Pi)((function(){return r.createElement("div",{className:(0,a.default)(o)},r.createElement(u.G,{icon:c.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",i)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(667294),a="quillEditor_NxYB",o="quillAnswer_J46I",i="monospace_usc_",l="disableToolbar_bRdP",u=n(386010),c=n(471217),s=n(274322),d=void 0,f=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),m=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var o=[];e.ol&&o.push({list:"ordered"}),e.ul&&o.push({list:"bullet"}),t.push(o)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},p=(0,c.Pi)((function(e){var t=r.useState(!1),c=t[0],p=t[1],g=r.useState(!1),b=g[0],v=g[1],h=r.useRef(null),y=e.model,w=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var o=t[a.katex].default;window.katex=o}n.register("modules/imageCompress",r),e()}))}((function(){t&&(v(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&b&&y.loaded?r.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,u.default)(a)},r.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||y.readonly,className:(0,u.default)(o,e.monospace&&i,c?void 0:l),value:y.text||"",onChange:function(t,n,r,a){var o,i;o=t,void 0===i&&(i=0),!e.readonly&&y.canUpdate&&b&&y.setText(o)},modules:{toolbar:e.toolbar?m(e.toolbar):[].concat(f,m(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},304238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var r=n(583117),a=n(480102),o=(n(667294),n(603905)),i=n(682593),l=["components"],u={title:"2. Logische Gatter"},c="2. Logische Gatter",s={unversionedId:"Computer/gates/index",id:"version-24i/Computer/gates/index",title:"2. Logische Gatter",description:"Die logischen Gatter (logic gates) sind die Grundbausteine der digitalen Logik. Sie werden durch die Verkn\xfcpfung von Transistoren gebaut.",source:"@site/versioned_docs/version-24i/07-Computer/02-gates/index.md",sourceDirName:"07-Computer/02-gates",slug:"/Computer/gates/",permalink:"/24i/Computer/gates/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/07-Computer/02-gates/index.md",tags:[],version:"24i",frontMatter:{title:"2. Logische Gatter"},sidebar:"version-24i/sidebar",previous:{title:"9. Ebenen",permalink:"/24i/Computer/basics/Ebenen"},next:{title:"Auftrag",permalink:"/24i/Computer/gates/Auftrag"}},d={},f=[],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},p=m("Figure"),g=m("SourceRef"),b={toc:f};function v(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-logische-gatter"},"2. Logische Gatter"),(0,o.kt)("p",null,"Die logischen Gatter (",(0,o.kt)("em",{parentName:"p"},"logic gates"),") sind die Grundbausteine der digitalen Logik. Sie werden durch die Verkn\xfcpfung von Transistoren gebaut."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Transistoren"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/5wIRJN3DN_8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,o.kt)(i.Z,{type:"text",webKey:"77218889-54e7-4ff2-ac32-10a2de6cb927",mdxType:"Answer"})),(0,o.kt)("p",null,"Durch die logischen Gatter lassen sich ganze Schaltungen zusammenbauen, die dann bspw. eine bin\xe4re Addition durchf\xfchren."),(0,o.kt)(p,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Diagramme logischer Gatter",src:n(795945).Z,width:"860",height:"940"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Diagramme logischer Gatter",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,o.kt)(g,{parentName:"figcaption",bib:{author:"HereToHelp",source:"https://commons.wikimedia.org/wiki/File:Logic_Gates.svg",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-sa/4.0/",edited:!1},mdxType:"SourceRef"}))))}v.isMDXComponent=!0},795945:function(e,t,n){t.Z=n.p+"assets/images/00-logic_gates-4174467280704d500d7d5cc6b3299c90.svg"}}]);