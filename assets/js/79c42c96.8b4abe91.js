"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[10385],{7488:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(83117),r=n(67294),i=n(86010),l=n(36162),o="details_BAp3";function c(e){var t=Object.assign({},e);return r.createElement(l.PO,(0,a.Z)({},t,{className:(0,i.default)("alert alert--info",o,t.className)}))}},52084:function(e,t,n){n.d(t,{x:function(){return M},Z:function(){return R}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),d=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},s=n(92814),u=n(51436),m=n(68949),p=n(72389),f=n(21314),g=n(74322),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),c=a.useState("unchecked"),k=c[0],N=c[1],v=(0,f.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&v.loaded&&(N("unchecked"),v.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};N(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),a.useEffect((function(){v.loaded&&y(v.value)}),[v,o]),o?v.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:h(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=v.legacyData)?void 0:n.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(v.value)},className:(0,l.default)(i[k],i.checkButton)},a.createElement(s.G,{icon:(r=k,"correct"===r?u.f8k:"wrong"===r?u.nYk:u.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),w=n(83117),E=n(75552),C=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(g.Z,null)})),S=n(47271),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},Z=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(C,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),L=n(46858),D=n(78982),_=n(97762),M=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=function(e){if(!e.id)return function(){};var t=function(){try{return(0,L.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,D.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,D.cl)(e.id,t)}}}:function(){}},R=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||_.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,P(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(Z,e),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(C,e),"string"===e.type&&a.createElement(N,e),"array"===e.type&&a.createElement(y,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},61014:function(e,t,n){var a=n(72389),r=n(71217),i=n(67294),l=n(21314),o=n(74322),c=n(7488),d=n(86010),s=n(86720),u=n(92814),m=n(51436),p=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},i.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},f=(0,r.Pi)((function(e){return i.createElement("span",{className:(0,d.default)(s.Z.policy,"badge","badge--"+e.color)},e.name," ",i.createElement(u.G,{icon:m.nYk,onClick:e.onRemove}))})),g=(0,r.Pi)((function(e){var t=i.useState(""),n=t[0],a=t[1],r=i.useState(""),o=r[0],c=r[1],p=i.useState(""),g=p[0],k=p[1],h=(0,l.oR)("policyStore"),N=(0,l.oR)("userStore"),v=h.findPolicy(e.webKey);return v?i.createElement("div",{className:(0,d.default)(s.Z.configContainer)},i.createElement("div",{className:(0,d.default)(s.Z.showControl)},i.createElement(u.G,{icon:v.isConfigOpen?m.nYk:m.cNd,onClick:function(){v.showConfig(!v.isConfigOpen)}})),v.isConfigOpen&&i.createElement("div",{className:(0,d.default)(s.Z.config)},i.createElement("div",{className:(0,d.default)(s.Z.permissions)},Array.from(v.klasses).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return v.removePermission(e,"class")},color:"success"})})),Array.from(v.groups).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return v.removePermission(e,"group")},color:"danger"})})),Array.from(v.users).map((function(e,t){return i.createElement(f,{key:t,name:e,onRemove:function(){return v.removePermission(e,"user")},color:"primary"})}))),i.createElement("div",{className:(0,d.default)(s.Z.update)},i.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return a(e.target.value)},disabled:v.locked,list:"solution-policy-for-classes"}),i.createElement("datalist",{id:"solution-policy-for-classes"},N.klasses.map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(n,"class"),a("")}},"Add"),i.createElement("input",{type:"text",placeholder:"Gruppe",value:o,onChange:function(e){return c(e.target.value)},disabled:v.locked,list:"solution-policy-for-groups"}),i.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(N.groups,h.groups))).map((function(e,t){return i.createElement("option",{key:t,value:e})}))),i.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(o,"group"),c("")}},"Add"),i.createElement("input",{type:"email",placeholder:"User",value:g,onChange:function(e){return k(e.target.value)},disabled:v.locked,list:"solution-policy-for-users"}),i.createElement("datalist",{id:"solution-policy-for-users"},N.users.map((function(e,t){return i.createElement("option",{key:t,value:e.email})}))),i.createElement("button",{disabled:v.locked,onClick:function(){v.addPermission(g,"user"),k("")}},"Add")))):null})),k=(0,r.Pi)((function(e){var t,n,r=(0,l.oR)("policyStore"),u=(0,l.oR)("userStore"),m=(0,a.Z)();if((0,l.aV)(e.webKey),!m)return i.createElement("div",null,"SSR");var f=r.find(e.webKey);return f?i.createElement("div",{"data--web-key":e.webKey,className:(0,d.default)(s.Z.wrapper,"solution-wrapper")},f.show||null!=(t=u.current)&&t.admin?i.createElement(c.Z,{summary:i.createElement("summary",null,e.title||"L\xf6sung"," ",i.createElement(p,null),!f.show&&i.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,d.default)("alert alert--success",s.Z.solution),open:e.open},(null==(n=u.current)?void 0:n.admin)&&i.createElement(g,{webKey:f.webKey}),e.children):i.createElement("div",{className:(0,d.default)("alert",s.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",i.createElement(p,null))):i.createElement(o.Z,null)}));t.Z=k},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),c=n(92814),d=n(51436),s=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:d.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=n(86010),d=n(71217),s=n(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,d.Pi)((function(e){var t=a.useState(!1),d=t[0],f=t[1],g=a.useState(!1),k=g[0],h=g[1],N=a.useRef(null),v=e.model,b=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){u=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&k&&v.loaded?a.createElement("div",{onFocus:function(){return!d&&f(!0)},className:(0,c.default)(r)},a.createElement(u,{ref:N,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,c.default)(i,e.monospace&&l,d?void 0:o),value:v.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&k&&v.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return a},Vx:function(){return r},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return l},rV:function(){return i}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(d){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},20106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return f}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(52084),c=n(61014),d=["components"],s={title:"1. Morsecode",label:"1. Morsecode"},u=void 0,m={unversionedId:"Codes-and-Data/Anwendungen/morsecode",id:"Codes-and-Data/Anwendungen/morsecode",title:"1. Morsecode",description:"Der Morsecode (auch Morsealphabet oder Morsezeichen genannt) ist ein gebr\xe4uchlicher Code zur telegrafischen \xdcbermittlung von Buchstaben, Ziffern und weiterer Zeichen. Er bestimmt das Zeitschema, nach dem ein diskretes Signal ein- und ausgeschaltet wird.",source:"@site/docs/Codes-and-Data/04-Anwendungen/01-morsecode.md",sourceDirName:"Codes-and-Data/04-Anwendungen",slug:"/Codes-and-Data/Anwendungen/morsecode",permalink:"/Codes-and-Data/Anwendungen/morsecode",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/04-Anwendungen/01-morsecode.md",tags:[],version:"current",lastUpdatedAt:1647003288,formattedLastUpdatedAt:"3/11/2022",sidebarPosition:1,frontMatter:{title:"1. Morsecode",label:"1. Morsecode"},sidebar:"sidebar",previous:{title:"2. Informationsgehalt",permalink:"/Codes-and-Data/Compression/redundancy"},next:{title:"2. QR Code",permalink:"/Codes-and-Data/Anwendungen/qr-code"}},p={},f=[{value:"Tabelle zur Codierung",id:"tabelle-zur-codierung",level:2}],g={toc:f};function k(e){var t=e.components,s=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Der Morsecode (auch Morsealphabet oder Morsezeichen genannt) ist ein gebr\xe4uchlicher Code zur telegrafischen \xdcbermittlung von Buchstaben, Ziffern und weiterer Zeichen. Er bestimmt das Zeitschema, nach dem ein diskretes Signal ein- und ausgeschaltet wird.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Hp.Baumeler",source:"https://de.wikipedia.org/wiki/Morsecode#/media/Datei:Morsetaste.jpg",licence:"CC 4.0",licence_url:"https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses",edited:!1},caption:"Morsetaste der Firma Hasler Bern, ca. 1900",options:{},isInline:!1,src:n(3161).Z,alt:"Morsetaste der Firma Hasler Bern, ca. 1900",mdxType:"Image"})),(0,i.kt)("h2",{id:"tabelle-zur-codierung"},"Tabelle zur Codierung"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Buchstabe"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\u2212")),(0,i.kt)("td",{parentName:"tr",align:"center"},"K"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7-")),(0,i.kt)("td",{parentName:"tr",align:"center"},"U"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"B"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"L"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7-\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"V"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"C"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"M"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--")),(0,i.kt)("td",{parentName:"tr",align:"center"},"W"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7--"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"D"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"N"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"E"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"O"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"---")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-\xb7--"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"F"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"P"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7--\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Z"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--\xb7\xb7"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"G"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Q"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--\xb7-")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xc4"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7-\xb7-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"H"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"R"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7-\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xd6"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"---\xb7"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"I"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"S"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7\xb7")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\xdc"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7\xb7--"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"J"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"\xb7---")),(0,i.kt)("td",{parentName:"tr",align:"center"},"T"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:"center"},"CH"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"----")))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"morse-code"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Morse-Code")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Schreiben Sie ein Wort mit 6 Buchstaben in Morse-Code."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Entziffern Sie die codierten Worte Ihrer Pultnachbar:innen."),(0,i.kt)("li",{parentName:"ul"},"Wie viele Zeichen wurden verwendet?"),(0,i.kt)("li",{parentName:"ul"},"Was hat der Morsecode mit der Huffman-Codierung zu tun? Finden Sie Parallelen?"),(0,i.kt)("li",{parentName:"ul"},"Erstellen Sie eine praktischere Tabelle f\xfcr die Decodierung von Nachrichten")),(0,i.kt)(o.Z,{type:"text",webKey:"5ff9bd7e-6bad-4728-8396-849167bba91a",mdxType:"Answer"}),(0,i.kt)(c.Z,{webKey:"3673feb3-e73e-4ebd-b152-024b8826c571",mdxType:"Solution"},(0,i.kt)("p",{parentName:"div"},'Das Decodieren von Morse-Code ist bedeutend einfacher, wenn die Tabelle als bin\xe4ren Baum dargestellt wird. Es ist zu sehen, dass die h\xe4ufigen Buchstaben weniger Zeichen ben\xf6tigen, als die seltenen Buchstaben. Das Prinzip ist dasselbe wie bei den Huffman-B\xe4umen, wobei hier ein Punkt "nach Links" und ein Strich "nach Rechts" bedeutet. Zudem ist braucht es im Vergleich zur Huffman-Codierung ',(0,i.kt)("strong",{parentName:"p"},"zwingend")," Abst\xe4nde zwischen den einzelnen Buchstaben - ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7\xb7\xb7\xb7\xb7\xb7")," k\xf6nnte sonst ",(0,i.kt)("inlineCode",{parentName:"p"},"EEEEEE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EIEI")," oder aber auch ",(0,i.kt)("inlineCode",{parentName:"p"},"EIS")," heissen. Deshalb braucht es einen Takt, in welchem immer nur ein Zeichen \xfcbertragen wird: Bei ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7\xb7")," ",(0,i.kt)("inlineCode",{parentName:"p"},"\xb7\xb7\xb7")," ist klar, dass es ",(0,i.kt)("inlineCode",{parentName:"p"},"EIS")," heisst.  "),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"                                \u2190 \xb7                - \u2192\n                    E                                           T\n                    \xb7                                           -\n           \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572                        \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572\n          I                    A                      N                    M\n         \xb7\xb7                    \xb7-                    -\xb7                    --\n     \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572            \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572            \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572            \u2571\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u203e\u2572\n    S          u          R          W          D          K          G          O   \n   \xb7\xb7\xb7        \xb7\xb7-        \xb7-\xb7        \xb7--        -\xb7\xb7        -\xb7-        --\xb7        ---\n   \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572        \u2571 \u2572  \n  H   V      F   \xdc      L   \xc4      P   J      B   X      C   Y      Z   Q      \xd6  CH \n\xb7\xb7\xb7\xb7 \xb7\xb7\xb7-  \xb7\xb7-\xb7 \xb7\xb7--  \xb7-\xb7\xb7 \xb7-\xb7-  \xb7--\xb7 \xb7---  -\xb7\xb7\xb7 -\xb7\xb7-  -\xb7-\xb7 -\xb7--  --\xb7\xb7 --\xb7-  ---\xb7 ----\n"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"verwendung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Verwendung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Recherchieren Sie im Internet,"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\xfcber welche Medien Morsezeichen \xfcbertragen werden k\xf6nnen (bspw. als elektrischer Puls \xfcber eine Leitung)"),(0,i.kt)("li",{parentName:"ul"},"wo Morsezeichen auch heute noch eingesetzt werden.")),(0,i.kt)(o.Z,{type:"text",webKey:"ae2462eb-94cf-48bb-9c8e-9f5c31a0c8da",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"akkustischer-morsecode"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Akkustischer Morsecode")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Gehen Sie in Vierergruppen zu einem Treppengel\xe4nder, jeweils zwei Personen an einem Ende des Gel\xe4nders."),(0,i.kt)("p",{parentName:"div"},"K\xf6nnen Sie sich ausschliesslich \xfcber akkustische Morsezeichen verst\xe4ndigen? Verschicken- und empfangen Sie jeweils ein Wort mit mindestens 6 Buchstaben."),(0,i.kt)(o.Z,{type:"text",webKey:"b255835a-4c39-42a0-8a35-42d34595823f",placeholder:"Notizen...",mdxType:"Answer"}))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Morsecode"},"Wikipedia"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},3161:function(e,t,n){t.Z=n.p+"assets/images/morsetaste-feaa9c57c632186a43ebd66d4c275362.jpeg"}}]);