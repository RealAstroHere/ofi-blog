"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[91831],{52084:function(e,t,n){n.d(t,{x:function(){return L},Z:function(){return K}});var r=n(67294),a=n(3435),l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},o=n(86010),c=n(71217),i=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,a=void 0;if(i.test(t)){var o=function(e){if(i.test(e))return e.match(i).groups.klass}(t);a=l[o],n=""+t.replace(i,"")}return r.createElement("option",{value:t,className:a},n)},s=n(92814),d=n(51436),m=n(68949),f=n(72389),p=n(21314),g=n(74322),v=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return l[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},h=(0,c.Pi)((function(e){var t,n,a,c=(0,f.Z)(),i=r.useState("unchecked"),v=i[0],h=i[1],b=(0,p.oR)("documentStore").find(e.webKey),w=function(t){!e.isLegacy&&b.loaded&&(h("unchecked"),b.setData({value:t,type:"string"}))},k=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&k(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&k(b.value)}),[b,c]),c?b.loaded?r.createElement("div",{className:l.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:y(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(b.value)},className:(0,o.default)(l[v],l.checkButton)},r.createElement(s.G,{icon:(a=v,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(g.Z,null):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),w=function(e){return l[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},k=(0,c.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),a=function(t,r){if(void 0===r&&(r=0),!e.isLegacy&&n.loaded){var a=[].concat(n.data.value.slice(0,r),[t],n.data.value.slice(r+1));n.setData(Object.assign({},n.data,{value:a}))}};return n.loaded?r.createElement("div",{className:l.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,l){return e.select?r.createElement("select",{key:l,onChange:function(e){return a(e.target.value,l)},value:t,className:w(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return r.createElement(u,{value:e,key:t})}))):r.createElement("input",{key:l,type:"text",onChange:function(e){return a(e.target.value,l)},value:t,disabled:!n.loaded||n.readonly})}))):r.createElement(g.Z,null)})),E=n(83117),N=n(75552),x=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(N.Z,(0,E.Z)({model:t},e))):r.createElement(g.Z,null)})),C=n(47271),S=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},_=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===t.type&&r.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&r.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return S("use_legacy",t)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return S("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,o.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),P=n(46858),z=n(78982),Z=n(97762),L=function(e){return e.replace(/\s+/g,"").toUpperCase()},R=function(e){if(!e.id)return function(){};var t=function(){try{return(0,P.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,z.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,z.cl)(e.id,t)}}}:function(){}},K=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),a=t.find(e.webKey),l=(0,f.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,R(e)),l?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(C.Z,null),n.loggedIn&&r.createElement(_,e),n.loggedIn&&r.createElement(D,{webKey:e.webKey}),"text"===e.type&&r.createElement(x,e),"string"===e.type&&r.createElement(h,e),"array"===e.type&&r.createElement(k,e)):r.createElement(g.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a="noLoginAlert_HRfh",l=n(39960),o=n(71217),c=n(21314),i=(0,o.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(l.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),l="loader_FEpR",o="badge_oWqf",c=n(71217),i=n(92814),u=n(51436),s=(0,c.Pi)((function(){return r.createElement("div",{className:(0,a.default)(l)},r.createElement(i.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",o)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="quillEditor_NxYB",l="quillAnswer_J46I",o="monospace_usc_",c="disableToolbar_bRdP",i=n(86010),u=n(71217),s=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var o=[];e.formula&&o.push("formula"),e.image&&o.push("image"),t.push(o)}return e.code&&t.push(["code-block"]),t},p=(0,u.Pi)((function(e){var t=r.useState(!1),u=t[0],p=t[1],g=r.useState(!1),v=g[0],y=g[1],h=r.useRef(null),b=e.model,w=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=r.length,r.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(r).then((function(t){d=t[a["react-quill"]].default;var n=t[a.quill].default,r=t[a["react-image-compress"]].default;if("katex"in a){var l=t[a.katex].default;window.katex=l}n.register("modules/imageCompress",r),e()}))}((function(){t&&(y(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",w))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",w)}}),[e]);return d&&v&&b.loaded?r.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,i.default)(a)},r.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,i.default)(l,e.monospace&&o,u?void 0:c),value:b.text||"",onChange:function(t,n,r,a){var l,o;l=t,void 0===o&&(o=0),!e.readonly&&b.canUpdate&&v&&b.setText(l)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(s.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return r},Vx:function(){return a},ly:function(){return l}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},l=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return o},rV:function(){return l}});var r=864e5,a=2592e6,l=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&c()}catch(t){return}}(),t){var a=localStorage.getItem(t);if(a){var l=JSON.parse(a);if("object"==typeof l){var o=l[e];return void 0===o?n:o}return n}}var i=localStorage.getItem(e);return i?JSON.parse(i):n}catch(u){return n}},o=function(e,t){try{if(t){var n=l(t,void 0,{expiry:Date.now()+a});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(r){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=l(t,void 0,{expiry:e+a});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},22792:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=n(52084),c=["components"],i={title:"3. Prozessor"},u="3. Prozessor",s={unversionedId:"Computer/architecture/cpu",id:"Computer/architecture/cpu",title:"3. Prozessor",description:"---",source:"@site/docs/Computer/03-architecture/03-cpu.md",sourceDirName:"Computer/03-architecture",slug:"/Computer/architecture/cpu",permalink:"/Computer/architecture/cpu",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/03-architecture/03-cpu.md",tags:[],version:"current",lastUpdatedAt:1646727987,formattedLastUpdatedAt:"3/8/2022",sidebarPosition:3,frontMatter:{title:"3. Prozessor"},sidebar:"sidebar",previous:{title:"2. Bussystem",permalink:"/Computer/architecture/bus"},next:{title:"4. Von-Neumann-Zyklus",permalink:"/Computer/architecture/cycle"}},d={},m=[],f={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"3-prozessor"},"3. Prozessor"),(0,l.kt)("hr",null),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("iframe",{width:"100%",height:"515",src:"https://www.youtube-nocookie.com/embed/aue3hIQvhzo",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,l.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"take-home-message-aus-cpu-rollenspiel"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message aus CPU-Rollenspiel")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)(o.Z,{type:"text",webKey:"c5ab98ee-a2a4-4a97-9f03-3d632fd16adf",mdxType:"Answer"}))))}p.isMDXComponent=!0}}]);