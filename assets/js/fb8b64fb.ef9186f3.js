"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[47461],{3239:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),i="noLoginAlert_boZc",r=n(73727),l=n(71217),o=n(21314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:i},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,t,n){n.d(t,{x:function(){return S},Z:function(){return A}});var a=n(67294),i=n(3435),r={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=n(86010),o=n(71217),c=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),d=function(e){var t=e.value,n=t,i=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);i=r[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:i},n)},s=n(92814),u=n(51436),m=n(68949),g=n(72389),p=n(21314),I=n(74322),k=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),f=function(e){return r[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n,i,o=(0,g.Z)(),c=a.useState("unchecked"),k=c[0],y=c[1],b=(0,p.oR)("documentStore").find(e.webKey),T=function(t){!e.isLegacy&&b.loaded&&(y("unchecked"),b.setData({value:t,type:"string"}))},v=function(t){if(e.checker)return y(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};y(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&v(b.value)}))}),[b]),a.useEffect((function(){b.loaded&&v(b.value)}),[b,o]),o?b.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return T(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,className:f(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return T(e.target.value)},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return v(b.value)},className:(0,l.default)(r[k],r.checkButton)},a.createElement(s.G,{icon:(i=k,"correct"===i?u.f8k:"wrong"===i?u.nYk:u.sph)}))):a.createElement(I.Z,null):a.createElement("div",null,"SSR")})),b=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),T=function(e){return r[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},v=(0,o.Pi)((function(e){var t,n=(0,p.oR)("documentStore").find(e.webKey),i=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var i=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:i}))}};return n.loaded?a.createElement("div",{className:r.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,r){return e.select?a.createElement("select",{key:r,onChange:function(e){return i(e.target.value,r)},value:t,className:T(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(d,{value:e,key:t})}))):a.createElement("input",{key:r,type:"text",onChange:function(e){return i(e.target.value,r)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(I.Z,null)})),M=n(83117),w=n(75552),N=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(w.Z,(0,M.Z)({model:t},e))):a.createElement(I.Z,null)})),h=n(3239),O=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},D=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(N,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(y,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(v,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return O("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return O("use_current",t)}},"Nein (verwerfen)"))):null})),E=(0,o.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=n(46858),x=n(78982),j=n(97762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=function(e){if(!e.id)return function(){};var t=function(){try{return(0,z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,x.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,x.cl)(e.id,t)}}}:function(){}},A=(0,o.Pi)((function(e){var t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),i=t.find(e.webKey),r=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||j.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,Z(e)),r?i?a.createElement("div",{"data--web-key":e.webKey},a.createElement(h.Z,null),n.loggedIn&&a.createElement(D,e),n.loggedIn&&a.createElement(E,{webKey:e.webKey}),"text"===e.type&&a.createElement(N,e),"string"===e.type&&a.createElement(y,e),"array"===e.type&&a.createElement(v,e)):a.createElement(I.Z,null):a.createElement("div",null,"SSR")}))},61014:function(e,t,n){var a=n(72389),i=n(71217),r=n(67294),l=n(21314),o=n(74322),c=n(31173),d=n(86010),s=n(86720),u=n(92814),m=n(51436),g=function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},r.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},p=(0,i.Pi)((function(e){return r.createElement("span",{className:(0,d.default)(s.Z.policy,"badge","badge--"+e.color)},e.name," ",r.createElement(u.G,{icon:m.nYk,onClick:e.onRemove}))})),I=(0,i.Pi)((function(e){var t=r.useState(""),n=t[0],a=t[1],i=r.useState(""),o=i[0],c=i[1],g=r.useState(""),I=g[0],k=g[1],f=(0,l.oR)("policyStore"),y=(0,l.oR)("userStore"),b=f.findPolicy(e.webKey);return b?r.createElement("div",{className:(0,d.default)(s.Z.configContainer)},r.createElement("div",{className:(0,d.default)(s.Z.showControl)},r.createElement(u.G,{icon:b.isConfigOpen?m.nYk:m.cNd,onClick:function(){b.showConfig(!b.isConfigOpen)}})),b.isConfigOpen&&r.createElement("div",{className:(0,d.default)(s.Z.config)},r.createElement("div",{className:(0,d.default)(s.Z.permissions)},Array.from(b.klasses).map((function(e,t){return r.createElement(p,{key:t,name:e,onRemove:function(){return b.removePermission(e,"class")},color:"success"})})),Array.from(b.groups).map((function(e,t){return r.createElement(p,{key:t,name:e,onRemove:function(){return b.removePermission(e,"group")},color:"danger"})})),Array.from(b.users).map((function(e,t){return r.createElement(p,{key:t,name:e,onRemove:function(){return b.removePermission(e,"user")},color:"primary"})}))),r.createElement("div",{className:(0,d.default)(s.Z.update)},r.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return a(e.target.value)},disabled:b.locked,list:"solution-policy-for-classes"}),r.createElement("datalist",{id:"solution-policy-for-classes"},y.klasses.map((function(e,t){return r.createElement("option",{key:t,value:e})}))),r.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(n,"class"),a("")}},"Add"),r.createElement("input",{type:"text",placeholder:"Gruppe",value:o,onChange:function(e){return c(e.target.value)},disabled:b.locked,list:"solution-policy-for-groups"}),r.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(y.groups,f.groups))).map((function(e,t){return r.createElement("option",{key:t,value:e})}))),r.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(o,"group"),c("")}},"Add"),r.createElement("input",{type:"email",placeholder:"User",value:I,onChange:function(e){return k(e.target.value)},disabled:b.locked,list:"solution-policy-for-users"}),r.createElement("datalist",{id:"solution-policy-for-users"},y.users.map((function(e,t){return r.createElement("option",{key:t,value:e.email})}))),r.createElement("button",{disabled:b.locked,onClick:function(){b.addPermission(I,"user"),k("")}},"Add")))):null})),k=(0,i.Pi)((function(e){var t,n,i=(0,l.oR)("policyStore"),u=(0,l.oR)("userStore"),m=(0,a.Z)();if((0,l.aV)(e.webKey),!m)return r.createElement("div",null,"SSR");var p=i.find(e.webKey);return p?r.createElement("div",{"data--web-key":e.webKey,className:(0,d.default)(s.Z.wrapper,"solution-wrapper")},p.show||null!=(t=u.current)&&t.admin?r.createElement(c.Z,{summary:r.createElement("summary",null,e.title||"L\xf6sung"," ",r.createElement(g,null),!p.show&&r.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,d.default)("alert alert--success",s.Z.solution),open:e.open},(null==(n=u.current)?void 0:n.admin)&&r.createElement(I,{webKey:p.webKey}),e.children):r.createElement("div",{className:(0,d.default)("alert",s.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",r.createElement(g,null))):r.createElement(o.Z,null)}));t.Z=k},74322:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),i=n(86010),r="loader_2rVr",l="badge_2s0E",o=n(71217),c=n(92814),d=n(51436),s=(0,o.Pi)((function(){return a.createElement("div",{className:(0,i.default)(r)},a.createElement(c.G,{icon:d.IJ7,spin:!0}),a.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),i="quillEditor_1XRF",r="quillAnswer_oQOS",l="monospace_3rFN",o="disableToolbar_gntN",c=n(86010),d=n(71217),s=n(74322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,d.Pi)((function(e){var t=a.useState(!1),d=t[0],p=t[1],I=a.useState(!1),k=I[0],f=I[1],y=a.useRef(null),b=e.model,T=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,49115)))),Promise.all(a).then((function(t){u=t[i["react-quill"]].default;var n=t[i.quill].default,a=t[i["react-image-compress"]].default;if("katex"in i){var r=t[i.katex].default;window.katex=r}n.register("modules/imageCompress",a),e()}))}((function(){t&&(f(!0),y&&y.current&&y.current.editor.getModule("toolbar").container.addEventListener("mousedown",T))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,y&&y.current&&y.current.editor.getModule("toolbar").container.removeEventListener("mousedown",T)}}),[e]);return u&&k&&b.loaded?a.createElement("div",{onFocus:function(){return!d&&p(!0)},className:(0,c.default)(i)},a.createElement(u,{ref:y,theme:"snow",readOnly:e.readonly||b.readonly,className:(0,c.default)(r,e.monospace&&l,d?void 0:o),value:b.text||"",onChange:function(t,n,a,i){var r,l;r=t,void 0===l&&(l=0),!e.readonly&&b.canUpdate&&k&&b.setText(r)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(s.Z,null)}))},30592:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(67294),i={strukto:"strukto_1th3",statement:"statement_3Yu0",step:"step_3o_T",else:"else_1IU6",header:"header_3S1J",indent:"indent_UuZp",body:"body_1WvU",def:"def_2zKB",if:"if_17Bx",input:"input_1oi9",call:"call_3HIl",bordered:"bordered_3Exi"},r=n(86010),l=function(e){return a.createElement("div",{className:i.step},e.code)},o=function(e){return a.createElement("div",{className:(0,r.default)(i.call,i.step,i.bordered)},e.code)},c=function(e){return a.createElement("div",{className:(0,r.default)(i.step,i.statement)},e.code)},d=function(e){return a.createElement("div",{className:(0,r.default)(i.repeat,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(p,{program:e.block})))},s=function(e){return a.createElement("div",{className:(0,r.default)(i.def,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(p,{program:e.block})))},u=function(e){return a.createElement("div",{className:(0,r.default)(i.input,i.step)},e.code)},m=function(e){return a.createElement("div",{className:(0,r.default)(i.if,i.step,i.indent)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(p,{program:e.block})))},g=function(e){return a.createElement("div",{className:(0,r.default)(i.else,i.step)},a.createElement("div",{className:i.header},e.code),a.createElement("div",{className:i.body},e.block&&a.createElement(p,{program:e.block})))},p=function(e){return a.createElement("div",{className:i.strukto},e.program.map((function(e,t){switch(e.type){case"call":return a.createElement(o,{key:t,code:e.code});case"def":return a.createElement(s,{key:t,code:e.code,block:e.block});case"repeat":return a.createElement(d,{key:t,code:e.code,block:e.block});case"step":return a.createElement(l,{key:t,code:e.code});case"statement":return a.createElement(c,{key:t,code:e.code});case"input":return a.createElement(u,{key:t,code:e.code});case"if":return a.createElement(m,{key:t,code:e.code,block:e.block});case"elif":case"else":return a.createElement(g,{key:t,code:e.code||("else"===e.type?"Sonst":""),block:e.block})}})))},I=p},46858:function(e,t,n){n.d(t,{Vx:function(){return i},Vj:function(){return a},ly:function(){return r}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return r},cl:function(){return l}});var a=864e5,i=2592e6,r=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var i=localStorage.getItem(t);if(i){var r=JSON.parse(i);if("object"==typeof r){var l=r[e];return void 0===l?n:l}return n}}var c=localStorage.getItem(e);return c?JSON.parse(c):n}catch(d){return n}},l=function(e,t){try{if(t){var n=r(t,void 0,{expiry:Date.now()+i});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=r(t,void 0,{expiry:e+i});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},56689:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return g},toc:function(){return p},default:function(){return k}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=n(84384),o=n(61014),c=n(52084),d=n(30592),s=["components"],u={title:"10. Repetition"},m="10. Repetitionsfragen",g={unversionedId:"Programmieren-1/Turtlegrafik/repetition",id:"version-25h/Programmieren-1/Turtlegrafik/repetition",title:"10. Repetition",description:"Algorithmus",source:"@site/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/050-repetition.md",sourceDirName:"04-Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/repetition",permalink:"/25h/Programmieren-1/Turtlegrafik/repetition",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/02-Turtlegrafik/050-repetition.md",tags:[],version:"25h",sidebarPosition:50,frontMatter:{title:"10. Repetition"},sidebar:"version-25h/sidebar",previous:{title:"9. \u2b50\ufe0f While",permalink:"/25h/Programmieren-1/Turtlegrafik/while"},next:{title:"Turtle Befehle",permalink:"/25h/Programmieren-1/Turtlegrafik/turtle-commands"}},p=[{value:"Algorithmus",id:"algorithmus",children:[],level:2},{value:"Code Lesen",id:"code-lesen",children:[],level:2},{value:"Code Ausf\xfchren",id:"code-ausf\xfchren",children:[],level:2},{value:"Struktogramm",id:"struktogramm",children:[],level:2},{value:"Programmieren (am PC)",id:"programmieren-am-pc",children:[],level:2}],I={toc:p};function k(e){var t=e.components,u=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},I,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"10-repetitionsfragen"},"10. Repetitionsfragen"),(0,r.kt)("h2",{id:"algorithmus"},"Algorithmus"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Was ist ein Algorithmus?"),(0,r.kt)("li",{parentName:"ol"},"Welche 5. Strukturelemente enth\xe4lt ein Algorithmus?"),(0,r.kt)("li",{parentName:"ol"},"Erstellen Sie einen Algorithmus f\xfcr das Zusammenfalten eines T-Shirts.",(0,r.kt)(c.Z,{type:"text",webKey:"fc3fa312-7e89-421d-96eb-a799f502d1e1",mdxType:"Answer"}))),(0,r.kt)("h2",{id:"code-lesen"},"Code Lesen"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In welchem Code-Teil wird das Viereck mit der Stiftdicke ",(0,r.kt)("inlineCode",{parentName:"li"},"5")," gezeichnet."),(0,r.kt)("li",{parentName:"ol"},"Welche Seitenl\xe4nge hat das Dreieck mit Stiftdicke ",(0,r.kt)("inlineCode",{parentName:"li"},"7"),"?"),(0,r.kt)("li",{parentName:"ol"},"Bei welchen Koordinaten wird das F\xfcnfeck mit Stiftdicke ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," gezeichnet?"),(0,r.kt)("li",{parentName:"ol"},"F\xfcgen Sie ein Quadrat mit der Seitenl\xe4nge ",(0,r.kt)("inlineCode",{parentName:"li"},"20")," bei der Koordinate ",(0,r.kt)("inlineCode",{parentName:"li"},"(20, 10)")," und der Stiftdicke ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," hinzu."),(0,r.kt)("li",{parentName:"ol"},"Unterstreichen Sie in den Zeilen ",(0,r.kt)("inlineCode",{parentName:"li"},"1-12")," alle ",(0,r.kt)("strong",{parentName:"li"},"Parameter")),(0,r.kt)("li",{parentName:"ol"},"Markieren Sie in den Zeilen ",(0,r.kt)("inlineCode",{parentName:"li"},"1-12")," alle ",(0,r.kt)("strong",{parentName:"li"},"Befehlsnamen"))),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"Turtle Ausgabe",options:{},isInline:!1,src:n(40930).Z,alt:"Turtle Ausgabe",mdxType:"Image"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n\npensize(2)\nfor i in range(3):\n    forward(18)\n    left(120)\nmove(-20, 30)\n\npensize(5)\nfor i in range(4):\n    forward(27)\n    left(90)\n\nmove(30, 10)\nfor i in range(5):\n    forward(13)\n    left(72)\n\nmove(80, 80)\npensize(3)\nfor i in range(4):\n    forward(77)\n    left(90)\n\nmove(-40, -20)\nfor i in range(5):\n    forward(23)\n    left(72)\n\nmove(-80, 80)\npensize(7)\nfor i in range(3):\n    forward(44)\n    left(120)\n")),(0,r.kt)(c.Z,{type:"text",webKey:"9a817631-40e8-4f41-8dc7-2285b9c1e8f1",toolbar:{code:1,color:1,background:1,bold:1,italic:1,underline:1},mdxType:"Answer"}),(0,r.kt)(o.Z,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Zeilen ",(0,r.kt)("inlineCode",{parentName:"li"},"15-17")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"44")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"(-40, -20)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-py"},"move(20, 10)\npensize(3)\nfor i in range(4):\n    forward(20)\n    left(90)\n"))))),(0,r.kt)("h2",{id:"code-ausf\xfchren"},"Code Ausf\xfchren"),(0,r.kt)("p",null,"Zeichnen Sie die Ausgabe des folgenden Programms"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\ndef square():\n    for i in range(4):\n        forward(10)\n        right(90)\n\nforward(30)\nleft(90)\nforward(10)\nright(90)\n\nfor i in range(3):\n    forward(10)\n    right(90)\n    forward(10)\n    left(90)\n    forward(10)\n    left(90)\n    forward(10)\n    right(90)\n\nleft(90)\nsquare()\n")),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:n(46369).Z,mdxType:"Image"})),(0,r.kt)(o.Z,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\ndef square():\n    for i in range(4):\n        forward(10)\n        right(90)\n\nforward(30)\nleft(90)\nforward(10)\nright(90)\nfor i in range(3):\n    forward(10)\n    right(90)\n    forward(10)\n    left(90)\n    forward(10)\n    left(90)\n    forward(10)\n    right(90)\nleft(90)\nsquare()\n"))),(0,r.kt)("h2",{id:"struktogramm"},"Struktogramm"),(0,r.kt)("p",null,"Zeichnen Sie f\xfcr folgende Ausgangslage ein Struktogramm:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Die Benutzer:in wird nach ihrer Lieblingszahl gefragt. Die eingegebene Zahl wird verdoppelt und mit 3 addiert. So oft zeichnet man nun 55 Schritte vorw\xe4rts mit einer Drehung um 113\xb0 am Ende.")),(0,r.kt)("p",null,"Zusatz:\nAnstatt ",(0,r.kt)("inlineCode",{parentName:"p"},"113\xb0")," soll soviel gedreht werden, dass eine geschlossene Figur entsteht. "),(0,r.kt)(o.Z,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,r.kt)(d.Z,{program:[{type:"input",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"zahl")," = Geben Sie Ihre Lieblingszahl ein")},{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("span",{className:"var"},"zahl")," mal 2 und plus 3 rechnen")},{type:"repeat",code:(0,r.kt)("span",null,(0,r.kt)("u",null,(0,r.kt)("span",{className:"var"},"zahl"))," mal wiederholen:"),block:[{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"55")," Schritte vorw\xe4rts gehen")},{type:"step",code:(0,r.kt)("span",null,(0,r.kt)("u",null,"113"),"\xb0 nach rechts drehen")}]}],mdxType:"Strukto"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\nzahl = input('Geben Sie Ihre Lieblingszahl ein')\nzahl = int(zahl)\nzahl = zahl * 2 + 3\n\nfor i in range(zahl):\n    forward(15)\n    right(113)\n    # right(360 / zahl)\n\n"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"programmieren-am-pc"},"Programmieren (am PC)"),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"text-vervielfachen"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Text vervielfachen")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In Python kann Text verfielf\xe4ltigt werden, indem er mit der gew\xfcnschten Anzahl wiederholungen multipliziert wird:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"print('Hallo' * 3)\nprint('\ud83c\udf32 ' * 24)\n")))),(0,r.kt)("p",null,"Schreiben Sie einen Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"dreieck"),", der ein Dreieck in Textform ausgibt. Die Gr\xf6sse des Dreiecks soll als Parameter \xfcbergeben werden k\xf6nnen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=dreieck.py versioned id=7fa89fa8-b8ae-4939-94de-df8e00ae57d4",live_py:!0,title:"dreieck.py",versioned:!0,id:"7fa89fa8-b8ae-4939-94de-df8e00ae57d4"},"")),(0,r.kt)("p",null,"Pr\xfcfen Sie ihr Programm mit folgendem Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"dreieck(1)\ndreieck(3)\ndreieck(5)\n")),(0,r.kt)("p",null,"sollte die folgende Ausgabe erzeugen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*\n* \n* *\n* * *\n* \n* *\n* * *\n* * * *\n* * * * *\n")),(0,r.kt)(o.Z,{webKey:"9dd6cc59-3264-4243-b654-d1ddcda0912d",mdxType:"Solution"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"\ndef dreieck(gr\xf6sse):\n    # gr\xf6sse mal wiederholen\n    for i in range(gr\xf6sse):\n        # i beginnt bei 0, deswegen +1 rechnen\n        print('*' * (i + 1))\n\ndreieck(1)\ndreieck(3)\ndreieck(5)\n"))))}k.isMDXComponent=!0},86720:function(e,t){t.Z={wrapper:"wrapper_1t86",disabled:"disabled_1w22",hint:"hint_VeYI",solution:"solution_30mD",configContainer:"configContainer_1SRI",showControl:"showControl_3Dnp",config:"config_3-uD",permissions:"permissions_Rfm_",policy:"policy_18bE"}},40930:function(e,t){t.Z="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9iYmE2YWM2MF9hMmMwXzRhYjBfYjZmOF9hNGU1MDdhN2Y0MGVfc3ZnIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE4NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIxNTYsODgsMjU2LDE4NyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjE4IiB5Mj0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMjsiPjwvbGluZT4KPGxpbmUgeDE9IjE4IiB5MT0iMCIgeDI9IjkuMDAwMDAwMDAwMDAwMDA0IiB5Mj0iLTE1LjU4ODQ1NzI2ODExOTg5NiIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMjsiPjwvbGluZT4KPGxpbmUgeDE9IjkuMDAwMDAwMDAwMDAwMDA0IiB5MT0iLTE1LjU4ODQ1NzI2ODExOTg5NiIgeDI9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHkyPSItMy41NTI3MTM2Nzg4MDA1MDFlLTE1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAyOyI+PC9saW5lPgo8bGluZSB4MT0iLTMuNTUyNzEzNjc4ODAwNTAxZS0xNSIgeTE9Ii0zLjU1MjcxMzY3ODgwMDUwMWUtMTUiIHgyPSItMjAiIHkyPSItMy41NTI3MTM2Nzg4MDA1MDFlLTE1IiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAyOyI+PC9saW5lPgo8bGluZSB4MT0iLTIwIiB5MT0iLTMwIiB4Mj0iNyIgeTI9Ii0yOS45OTk5OTk5OTk5OTk5OTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjciIHkxPSItMjkuOTk5OTk5OTk5OTk5OTkzIiB4Mj0iNy4wMDAwMDAwMDAwMDAwMDgiIHkyPSItNTYuOTk5OTk5OTk5OTk5OTkiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjcuMDAwMDAwMDAwMDAwMDA4IiB5MT0iLTU2Ljk5OTk5OTk5OTk5OTk5IiB4Mj0iLTE5Ljk5OTk5OTk5OTk5OTk5MyIgeTI9Ii01NyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iLTE5Ljk5OTk5OTk5OTk5OTk5MyIgeTE9Ii01NyIgeDI9Ii0yMC4wMDAwMDAwMDAwMDAwMDQiIHkyPSItMzAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9Ii0yMC4wMDAwMDAwMDAwMDAwMDQiIHkxPSItMzAiIHgyPSIzMCIgeTI9Ii0zMCIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiPjwvbGluZT4KPGxpbmUgeDE9IjMwIiB5MT0iLTEwIiB4Mj0iNDMiIHkyPSItOS45OTk5OTk5OTk5OTk5OTMiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjQzIiB5MT0iLTkuOTk5OTk5OTk5OTk5OTkzIiB4Mj0iNDcuMDE3MjIwOTI2ODc0MzIiIHkyPSItMjIuMzYzNzM0NzExODM2OTg3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSI0Ny4wMTcyMjA5MjY4NzQzMiIgeTE9Ii0yMi4zNjM3MzQ3MTE4MzY5ODciIHgyPSIzNi41MDAwMDAwMDAwMDAwMTQiIHkyPSItMzAuMDA0OTQyOTkxNjM5MTQ0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIzNi41MDAwMDAwMDAwMDAwMTQiIHkxPSItMzAuMDA0OTQyOTkxNjM5MTQ0IiB4Mj0iMjUuOTgyNzc5MDczMTI1NjkiIHkyPSItMjIuMzYzNzM0NzExODM3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA1OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIyNS45ODI3NzkwNzMxMjU2OSIgeTE9Ii0yMi4zNjM3MzQ3MTE4MzciIHgyPSIzMCIgeTI9Ii0xMC4wMDAwMDAwMDAwMDAwMDIiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDU7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9IjMwIiB5MT0iLTEwLjAwMDAwMDAwMDAwMDAwMiIgeDI9IjgwIiB5Mj0iLTEwLjAwMDAwMDAwMDAwMDAwMiIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogNTsiPjwvbGluZT4KPGxpbmUgeDE9IjgwIiB5MT0iLTgwIiB4Mj0iMTU3IiB5Mj0iLTc5Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIxNTciIHkxPSItNzkuOTk5OTk5OTk5OTk5OTQiIHgyPSIxNTYuOTk5OTk5OTk5OTk5OTEiIHkyPSItMTU2Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSIxNTYuOTk5OTk5OTk5OTk5OTEiIHkxPSItMTU2Ljk5OTk5OTk5OTk5OTk0IiB4Mj0iNzkuOTk5OTk5OTk5OTk5OTEiIHkyPSItMTU3IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSI3OS45OTk5OTk5OTk5OTk5MSIgeTE9Ii0xNTciIHgyPSI3OS45OTk5OTk5OTk5OTk5OSIgeTI9Ii04MCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMzsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iNzkuOTk5OTk5OTk5OTk5OTkiIHkxPSItODAiIHgyPSItNDAiIHkyPSItODAiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDM7Ij48L2xpbmU+CjxsaW5lIHgxPSItNDAiIHkxPSIyMCIgeDI9Ii0xNyIgeTI9IjIwLjAwMDAwMDAwMDAwMDAyIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMTciIHkxPSIyMC4wMDAwMDAwMDAwMDAwMiIgeDI9Ii05Ljg5MjYwOTEyOTM3NjE4NiIgeTI9Ii0xLjg3NDI5OTg3NDc4ODUwMTgiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDM7IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KPGxpbmUgeDE9Ii05Ljg5MjYwOTEyOTM3NjE4NiIgeTE9Ii0xLjg3NDI5OTg3NDc4ODUwMTgiIHgyPSItMjguNDk5OTk5OTk5OTk5OTYiIHkyPSItMTUuMzkzMzYwNjc3NTE1NDA1IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMjguNDk5OTk5OTk5OTk5OTYiIHkxPSItMTUuMzkzMzYwNjc3NTE1NDA1IiB4Mj0iLTQ3LjEwNzM5MDg3MDYyMzc3IiB5Mj0iLTEuODc0Mjk5ODc0Nzg4NTQyNyIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMzsiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgo8bGluZSB4MT0iLTQ3LjEwNzM5MDg3MDYyMzc3IiB5MT0iLTEuODc0Mjk5ODc0Nzg4NTQyNyIgeDI9Ii00MCIgeTI9IjIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItNDAiIHkxPSIyMCIgeDI9Ii04MCIgeTI9IjIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAzOyI+PC9saW5lPgo8bGluZSB4MT0iLTgwIiB5MT0iLTgwIiB4Mj0iLTM2IiB5Mj0iLTc5Ljk5OTk5OTk5OTk5OTk0IiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItMzYiIHkxPSItNzkuOTk5OTk5OTk5OTk5OTQiIHgyPSItNTcuOTk5OTk5OTk5OTk5ODYiIHkyPSItMTE4LjEwNTExNzc2NjUxNTMyIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjxsaW5lIHgxPSItNTcuOTk5OTk5OTk5OTk5ODYiIHkxPSItMTE4LjEwNTExNzc2NjUxNTMyIiB4Mj0iLTc5Ljk5OTk5OTk5OTk5OTgzIiB5Mj0iLTgwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiA3OyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkiPgo8cG9seWdvbiBwb2ludHM9IjAsMCAsLTUsLTkgLDAsLTcgLDUsLTkgIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzkuOTk5OTk5OTk5OTk5ODMsLTgwLjApIHJvdGF0ZSgtMjI1MCwwLDApIj48L3BvbHlnb24+CjwvZz4KPG1ldGFkYXRhPjxyYXc+ZnJvbSB0dXJ0bGUgaW1wb3J0ICoKCmRlZiBtb3ZlKHgsIHkpOgogICAgcGVudXAoKQogICAgZ290byh4LCB5KQogICAgcGVuZG93bigpCgpwZW5zaXplKDIpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCgxOCkKICAgIGxlZnQoMTIwKQptb3ZlKC0yMCwgMzApCgpwZW5zaXplKDUpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCgyNykKICAgIGxlZnQoOTApCgptb3ZlKDMwLCAxMCkKZm9yIGkgaW4gcmFuZ2UoNSk6CiAgICBmb3J3YXJkKDEzKQogICAgbGVmdCg3MikKCm1vdmUoODAsIDgwKQpwZW5zaXplKDMpCmZvciBpIGluIHJhbmdlKDQpOgogICAgZm9yd2FyZCg3NykKICAgIGxlZnQoOTApCgptb3ZlKC00MCwgLTIwKQpmb3IgaSBpbiByYW5nZSg1KToKICAgIGZvcndhcmQoMjMpCiAgICBsZWZ0KDcyKQoKbW92ZSgtODAsIDgwKQpwZW5zaXplKDcpCmZvciBpIGluIHJhbmdlKDMpOgogICAgZm9yd2FyZCg0NCkKICAgIGxlZnQoMTIwKSA8L3Jhdz48L21ldGFkYXRhPjwvc3ZnPg=="},46369:function(e,t,n){t.Z=n.p+"assets/images/09-coord-07deb3712930d10252b769c94b4e20fe.svg"}}]);