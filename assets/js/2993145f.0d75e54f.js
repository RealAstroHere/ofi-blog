"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[76649],{52084:function(e,t,n){n.d(t,{x:function(){return P},Z:function(){return L}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),d=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(d.test(t)){var l=function(e){if(d.test(e))return e.match(d).groups.klass}(t);r=i[l],n=""+t.replace(d,"")}return a.createElement("option",{value:t,className:r},n)},c=n(92814),m=n(51436),s=n(68949),p=n(72389),f=n(21314),g=n(74322),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),d=a.useState("unchecked"),k=d[0],N=d[1],v=(0,f.oR)("documentStore").find(e.webKey),b=function(t){!e.isLegacy&&v.loaded&&(N("unchecked"),v.setData({value:t,type:"string"}))},y=function(t){if(e.checker)return N(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};N(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,s.U5)((function(){return v.loaded}),(function(e){e&&y(v.value)}))}),[v]),a.useEffect((function(){v.loaded&&y(v.value)}),[v,o]),o?v.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=v.legacyData)?void 0:t.value:v.value,className:h(v.value),disabled:!v.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:e.isLegacy?null==(n=v.legacyData)?void 0:n.value:v.value,disabled:!v.loaded||v.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return y(v.value)},className:(0,l.default)(i[k],i.checkButton)},a.createElement(c.G,{icon:(r=k,"correct"===r?m.f8k:"wrong"===r?m.nYk:m.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR")})),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},y=(0,o.Pi)((function(e){var t,n=(0,f.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:b(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(g.Z,null)})),w=n(83117),D=n(75552),E=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(D.Z,(0,w.Z)({model:t},e))):a.createElement(g.Z,null)})),C=n(47271),x=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,s.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,s.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},S=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(E,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(N,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(y,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return x("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return x("use_current",t)}},"Nein (verwerfen)"))):null})),_=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=n(46858),B=n(78982),I=n(97762),P=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=function(e){if(!e.id)return function(){};var t=function(){try{return(0,z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,B.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,B.cl)(e.id,t)}}}:function(){}},L=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||I.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,Z(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(C.Z,null),n.loggedIn&&a.createElement(S,e),n.loggedIn&&a.createElement(_,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(N,e),"array"===e.type&&a.createElement(y,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),d=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),d=n(92814),u=n(51436),c=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(d.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",d=n(86010),u=n(71217),c=n(74322),m=void 0,s=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],f=t[1],g=a.useState(!1),k=g[0],h=g[1],N=a.useRef(null),v=e.model,b=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){m=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(h(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return m&&k&&v.loaded?a.createElement("div",{onFocus:function(){return!u&&f(!0)},className:(0,d.default)(r)},a.createElement(m,{ref:N,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,d.default)(i,e.monospace&&l,u?void 0:o),value:v.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&k&&v.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(s,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return a},Vx:function(){return r},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return l},rV:function(){return i}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var d=localStorage.getItem(e);return d?JSON.parse(d):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},50118:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return s}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(52084),o=["components"],d={title:"6. Dateiformate erkennen",label:"6. Dateiformate erkennen"},u="6. Dateiformate erkennen [^1]",c={unversionedId:"Codierung/Grafikformate/files",id:"version-25h/Codierung/Grafikformate/files",title:"6. Dateiformate erkennen",description:"Eine Datei ist eine Ansammlung bin\xe4rer Daten, also eine Aneinanderreihung von Bits. Die bin\xe4re Darstellung der Datei, in welcher dieser Text gespeichert ist, beginnt so:",source:"@site/versioned_docs/version-25h/05-Codierung/02-Grafikformate/06-files.md",sourceDirName:"05-Codierung/02-Grafikformate",slug:"/Codierung/Grafikformate/files",permalink:"/25h/Codierung/Grafikformate/files",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/02-Grafikformate/06-files.md",tags:[],version:"25h",sidebarPosition:6,frontMatter:{title:"6. Dateiformate erkennen",label:"6. Dateiformate erkennen"},sidebar:"version-25h/sidebar",previous:{title:"5. Vektorgrafik",permalink:"/25h/Codierung/Grafikformate/vector"},next:{title:"1. Huffman-Codierung",permalink:"/25h/Codierung/Compression/huffman"}},m={},s=[{value:"Dateiformat",id:"dateiformat",level:2},{value:"Dateiendung",id:"dateiendung",level:2},{value:"Magische Bytes",id:"magische-bytes",level:2},{value:"<em>Internet Media Type</em>",id:"internet-media-type",level:2},{value:"Wichtige Dateiformate",id:"wichtige-dateiformate",level:2}],p={toc:s};function f(e){var t=e.components,d=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"6-dateiformate-erkennen-"},"6. Dateiformate erkennen ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Eine Datei ist eine Ansammlung bin\xe4rer Daten, also eine Aneinanderreihung von Bits. Die bin\xe4re Darstellung der Datei, in welcher dieser Text gespeichert ist, beginnt so:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"00100011 00100000 01000100 01100001 01110100 01100101 01101001 01100101 01101110 00001010 00101101 00101101 00101101 00001010 00001010 01000101 01101001 01101110 01100101 00100000 01000100 01100001 01110100 01100101 \u2026")),(0,i.kt)("h2",{id:"dateiformat"},"Dateiformat"),(0,i.kt)("p",null,"Die f\xfcr eine Datei verwendete Codierung wird auch ",(0,i.kt)("strong",{parentName:"p"},"Dateiformat")," genannt. Anhand der bin\xe4ren Daten alleine ist nicht erkennbar, was f\xfcr eine Codierung f\xfcr eine Datei verwendet wurde."),(0,i.kt)("p",null,"Ohne diese zus\xe4tzliche Information k\xf6nnen die Daten aber nicht decodiert werden. Bei jeder Datei muss also zus\xe4tzlich angegeben werden, welche Codierung f\xfcr diese Datei verwendet wurde."),(0,i.kt)("p",null,"Es gibt drei Ans\xe4tze, das Dateiformat (also die Codierung) einer Datei zu erkennen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dateiendung"),(0,i.kt)("li",{parentName:"ul"},"Magische Bytes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Internet Media Type"))),(0,i.kt)("h2",{id:"dateiendung"},"Dateiendung"),(0,i.kt)("p",null,"Eine Dateiendung wie ",(0,i.kt)("em",{parentName:"p"},".docx")," oder ",(0,i.kt)("em",{parentName:"p"},".jpg")," wird an den Dateinamen angeh\xe4ngt. Eine Dateiendung beginnt immer mit einem Punkt. So wird sie vom Dateinamen abgetrennt. Ein Betriebssystem wie Windows oder macOS verwendet die Dateiendung, um zu ermitteln, mit welcher Anwendung eine Datei ge\xf6ffnet werden soll."),(0,i.kt)("h2",{id:"magische-bytes"},"Magische Bytes"),(0,i.kt)("p",null,"Viele Dateiformate verwenden magische Bytes am Dateianfang zur Kennzeichnung, wie die enthaltenen Informationen codiert sind."),(0,i.kt)("p",null,"Beispielsweise beginnt jede ",(0,i.kt)("em",{parentName:"p"},".jpg"),"-Datei mit der Bitfolge ",(0,i.kt)("inlineCode",{parentName:"p"},"11111111 11011000 11111111"),". Diese Darstellung ist etwas lang und umst\xe4ndlich, daher wird h\xe4ufig das Hexadezimalsystem (16-er System) verwendet."),(0,i.kt)("h2",{id:"internet-media-type"},(0,i.kt)("em",{parentName:"h2"},"Internet Media Type")),(0,i.kt)("p",null,"Der ",(0,i.kt)("em",{parentName:"p"},"Internet Media Type")," oder ",(0,i.kt)("em",{parentName:"p"},"MIME-Type")," ist ein Standard, mit welchem Codierungen f\xfcr die \xdcbermittlung von Daten im Internet angegeben werden. So teilt ein Webserver einem Browser per ",(0,i.kt)("em",{parentName:"p"},"Internet Media Type")," mit, ob er einen Text, ein Bild oder ein Video \xfcbermittelt. Auch bei der \xdcbermittlung von E-Mails wird dieses System verwendet."),(0,i.kt)("p",null,"Ein ",(0,i.kt)("em",{parentName:"p"},"Internet Media Type")," besteht immer aus einem Haupt- und einem Untertype. Es gibt folgende Haupttypen:"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Typ"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Bedeutung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"application")),(0,i.kt)("td",{parentName:"tr",align:"left"},"anwendungsspezifische Codierungen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"audio")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Audiodaten")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"image")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Grafiken")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"text")),(0,i.kt)("td",{parentName:"tr",align:"left"},"f\xfcr Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"video")),(0,i.kt)("td",{parentName:"tr",align:"left"},"f\xfcr Videomaterial"))))),(0,i.kt)("h2",{id:"wichtige-dateiformate"},"Wichtige Dateiformate"),(0,i.kt)("div",{className:"slim-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Bezeichnung"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Dateiendung"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Internet Media Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Magische Bytes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"JPEG-Bild"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".jpg")," / ",(0,i.kt)("em",{parentName:"td"},".jpeg")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"image/jpeg")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FF D8 FF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Portable Network Graphics"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".png")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"image/png")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"89 50 4E 47 0D 0A 1A 0A"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ZIP-Datei"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".zip")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"application/zip")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Word-Datei"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".docx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"application/vnd.openxmlformats\u2026")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"),(0,i.kt)("br",null),"(ist eigentlich eine ZIP-Datei)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Excel-Datei"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".xlsx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"application/vnd.openxmlformats\u2026")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"50 4B 03 04"),(0,i.kt)("br",null),"(ist eigentlich eine ZIP-Datei)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Portable Document Format"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".pdf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"application/pdf")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"25 50 44 46 2D"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Textdatei"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".txt")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"text/plain")),(0,i.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,i.kt)("br",null),"(ohne magische Bytes)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Webseite"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".html")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"text/html")),(0,i.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,i.kt)("br",null),"(ohne magische Bytes)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Python-Programm"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},".py")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"text/python")),(0,i.kt)("td",{parentName:"tr",align:"left"},"reine Textdatei",(0,i.kt)("br",null),"(ohne magische Bytes)"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"verlorene-dateiendungen"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Verlorene Dateiendungen")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bei den folgenden Dateien ging die Dateiendung verloren. Finden Sie mit ",(0,i.kt)("a",{parentName:"p",href:"https://hexed.it/"},"https://hexed.it/")," heraus, welche Dateiendung die jeweilige Datei hat, f\xfcgen Sie die Dateiendung hinzu und \xf6ffnen Sie diese."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{target:"_blank",href:n(78220).Z},"download")),(0,i.kt)(l.Z,{type:"text",webKey:"56a24e71-16af-409b-9e36-9049e30413b3",mdxType:"Answer"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"file1: "),(0,i.kt)("li",{parentName:"ul"},"file2: "),(0,i.kt)("li",{parentName:"ul"},"file3:"))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=206603"},"S. Rothe, T. Jampen, R. Meyer"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},78220:function(e,t,n){t.Z=n.p+"assets/files/files-59607b7e760dc4a5aade4a9bbcc441ae.zip"}}]);