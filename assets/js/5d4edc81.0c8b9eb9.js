"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[83914],{52084:function(e,t,n){n.d(t,{x:function(){return Z},Z:function(){return P}});var a=n(67294),r=n(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(86010),o=n(71217),s=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var t=e.value,n=t,r=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);r=i[l],n=""+t.replace(s,"")}return a.createElement("option",{value:t,className:r},n)},c=n(92814),d=n(51436),m=n(68949),p=n(72389),g=n(21314),f=n(74322),v=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},h=(0,o.Pi)((function(e){var t,n,r,o=(0,p.Z)(),s=a.useState("unchecked"),v=s[0],h=s[1],k=(0,g.oR)("documentStore").find(e.webKey),y=function(t){!e.isLegacy&&k.loaded&&(h("unchecked"),k.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return h(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};h(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return k.loaded}),(function(e){e&&N(k.value)}))}),[k]),a.useEffect((function(){k.loaded&&N(k.value)}),[k,o]),o?k.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return y(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=k.legacyData)?void 0:t.value:k.value,className:b(k.value),disabled:!k.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return y(e.target.value)},value:e.isLegacy?null==(n=k.legacyData)?void 0:n.value:k.value,disabled:!k.loaded||k.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return N(k.value)},className:(0,l.default)(i[v],i.checkButton)},a.createElement(c.G,{icon:(r=v,"correct"===r?d.f8k:"wrong"===r?d.nYk:d.sph)}))):a.createElement(f.Z,null):a.createElement("div",null,"SSR")})),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},N=(0,o.Pi)((function(e){var t,n=(0,g.oR)("documentStore").find(e.webKey),r=function(t,a){if(void 0===a&&(a=0),!e.isLegacy&&n.loaded){var r=[].concat(n.data.value.slice(0,a),[t],n.data.value.slice(a+1));n.setData(Object.assign({},n.data,{value:r}))}};return n.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),(e.isLegacy?(null==(t=n.legacyData)?void 0:t.value)||[]:n.data.value).map((function(t,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return r(e.target.value,i)},value:t,className:y(t),disabled:!n.loaded||e.isLegacy},e.select.map((function(e,t){return a.createElement(u,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return r(e.target.value,i)},value:t,disabled:!n.loaded||n.readonly})}))):a.createElement(f.Z,null)})),w=n(83117),E=n(75552),x=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(f.Z,null)})),S=n(47271),_=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},C=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore").find(e.webKey);return t.legacyData?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement("div",null,"text"===t.type&&a.createElement(x,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&a.createElement(h,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&a.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return _("use_legacy",t)}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return _("use_current",t)}},"Nein (verwerfen)"))):null})),z=(0,o.Pi)((function(e){return(0,g.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=n(46858),L=n(78982),K=n(97762),Z=function(e){return e.replace(/\s+/g,"").toUpperCase()},I=function(e){if(!e.id)return function(){};var t=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,L.rV)(e.id,t);return n&&n.value?function(){return{data:{value:n.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,L.cl)(e.id,t)}}}:function(){}},P=(0,o.Pi)((function(e){var t=(0,g.oR)("documentStore"),n=(0,g.oR)("msalStore"),r=t.find(e.webKey),i=(0,p.Z)();return(0,g.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||K.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,I(e)),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(S.Z,null),n.loggedIn&&a.createElement(C,e),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(x,e),"string"===e.type&&a.createElement(h,e),"array"===e.type&&a.createElement(N,e)):a.createElement(f.Z,null):a.createElement("div",null,"SSR")}))},47271:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r="noLoginAlert_HRfh",i=n(39960),l=n(71217),o=n(21314),s=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},74322:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),i="loader_FEpR",l="badge_oWqf",o=n(71217),s=n(92814),u=n(51436),c=(0,o.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(s.G,{icon:u.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},75552:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(67294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",s=n(86010),u=n(71217),c=n(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},g=(0,u.Pi)((function(e){var t=a.useState(!1),u=t[0],g=t[1],f=a.useState(!1),v=f[0],b=f[1],h=a.useRef(null),k=e.model,y=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,44290,23)),n.e(76095).then(n.t.bind(n,76095,23)),n.e(17891).then(n.t.bind(n,17891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,11940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,41008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,50037)))),Promise.all(a).then((function(t){d=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(b(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&v&&k.loaded?a.createElement("div",{onFocus:function(){return!u&&g(!0)},className:(0,s.default)(r)},a.createElement(d,{ref:h,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,s.default)(i,e.monospace&&l,u?void 0:o),value:k.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&v&&k.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},46858:function(e,t,n){n.d(t,{Vj:function(){return a},Vx:function(){return r},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{cl:function(){return l},rV:function(){return i}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var s=localStorage.getItem(e);return s?JSON.parse(s):n}catch(u){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},43106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(84384),o=n(52084),s=["components"],u={title:"8. Stromversorgung"},c="8. Stromversorgung",d={unversionedId:"Computer/basics/Stromversorgung",id:"version-24K/Computer/basics/Stromversorgung",title:"8. Stromversorgung",description:"Die Stromversorgung eines Computers erfolgt \xfcber Gleichstrom (DC), das heisst, dass der Wechselstrom unseres Stromnetzes zuerst in Gleichstrom umgewandelt werden muss. Diese Funktion \xfcbernimmt das Netzteil.",source:"@site/versioned_docs/version-24K/07-Computer/01-basics/08-Stromversorgung.md",sourceDirName:"07-Computer/01-basics",slug:"/Computer/basics/Stromversorgung",permalink:"/24K/Computer/basics/Stromversorgung",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/07-Computer/01-basics/08-Stromversorgung.md",tags:[],version:"24K",sidebarPosition:8,frontMatter:{title:"8. Stromversorgung"},sidebar:"version-24K/sidebar",previous:{title:"7. Hauptplatine",permalink:"/24K/Computer/basics/Mainboard"},next:{title:"9. Ebenen",permalink:"/24K/Computer/basics/Ebenen"}},m={},p=[{value:"Kenngr\xf6ssen",id:"kenngr\xf6ssen",level:2},{value:"Leistung und W\xe4rme",id:"leistung-und-w\xe4rme",level:2}],g={toc:p};function f(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"8-stromversorgung"},"8. Stromversorgung"),(0,i.kt)("p",null,"Die Stromversorgung eines Computers erfolgt \xfcber Gleichstrom (DC), das heisst, dass der Wechselstrom unseres Stromnetzes zuerst in Gleichstrom umgewandelt werden muss. Diese Funktion \xfcbernimmt das Netzteil."),(0,i.kt)("p",null,"Das Netzteil eines Desktop-Computers ist stets eingebaut. Bei einem Notebook hingegen \xfcbernimmt ein externes Netzteil die Stromtransformation, da im Innern des Notebooks nicht gen\xfcgend Platz daf\xfcr vorhanden ist."),(0,i.kt)("h2",{id:"kenngr\xf6ssen"},"Kenngr\xf6ssen"),(0,i.kt)("p",null,"F\xfcr das Netzteil gibt es die folgende wichtige Kenngr\xf6sse:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die ",(0,i.kt)("strong",{parentName:"li"},"Leistung")," gibt an, wie viel Energie das Netzteil in einer bestimmten Zeit den Komponenten maximal zur Verf\xfcgung stellen kann. Die Leistung wird gemessen in ",(0,i.kt)("strong",{parentName:"li"},"Watt"),".")),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Smial",author_uri:"https://de.wikipedia.org/wiki/User:Smial",licence:"CC-BY-SA-2.0",licence_url:"https://commons.wikimedia.org/wiki/File:ATX-Netzteil.jpg"},caption:"ATX-Netzteil",options:{},isInline:!1,src:n(39113).Z,alt:"ATX-Netzteil",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"",author_uri:"",licence:"CC0",licence_url:"https://pxhere.com/en/photo/1136740"},caption:"Notebook-Netzteil",options:{},isInline:!1,src:n(13880).Z,alt:"Notebook-Netzteil",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"leistung-und-w\xe4rme"},"Leistung und W\xe4rme"),(0,i.kt)("p",null,"Die meiste Leistung verpufft als Abw\xe4rme, darum brauchen Desktop-PCs (und leistungsf\xe4hige Grafikkarten) eine aktive Prozessork\xfchlung, d.h. einen K\xfchlk\xf6rper mit grosser Oberfl\xe4che und dar\xfcber einen starken L\xfcfter, um die W\xe4rme vom Prozessor wegzubringen."),(0,i.kt)("p",null,"Notebooks verwenden stromsparendere Prozessoren, daher reicht dort ein kleinerer L\xfcfter aus, oder sie haben gar nur eine passive K\xfchlung ohne aktiven L\xfcfter."),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Qurren",author_uri:"https://commons.wikimedia.org/wiki/User:Qurren",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:AMD_Athlon_II_X4_630_heatsink-fan.jpg"},caption:"K\xfchlk\xf6rper und Ventilator",options:{},isInline:!1,src:n(74797).Z,alt:"K\xfchlk\xf6rper und Ventilator",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"Raimond Spekking",author_uri:"https://commons.wikimedia.org/wiki/User:Raymond",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:Acer_TravelMate_P253-M-32344G50Maks_-_motherboard_Q5WV1_LA-7912P_-0219.jpg"},caption:"Notebook-Mainboard mit Prozessork\xfchler",options:{},isInline:!1,src:n(86350).Z,alt:"Notebook-Mainboard mit Prozessork\xfchler",mdxType:"Image"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"stromversorgung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Stromversorgung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Recherchieren Sie im Internet und finden Sie heraus, wie viel Leistung (Watt) folgende Ger\xe4te typischerweise im Betrieb beziehen:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Staubsauger"),(0,i.kt)("li",{parentName:"ul"},"Desktop-PC-Netzteil"),(0,i.kt)("li",{parentName:"ul"},"Notebook-Netzteil"),(0,i.kt)("li",{parentName:"ul"},"Smartphone-Ladeger\xe4t"),(0,i.kt)("li",{parentName:"ul"},"LED-Lampe")))),(0,i.kt)(o.Z,{type:"text",webKey:"3a105b6b-5da9-455a-a654-ef1d86be9d0d",mdxType:"Answer"}),(0,i.kt)("ol",{parentName:"div",start:2},(0,i.kt)("li",{parentName:"ol"},"Wie beurteilen Sie folgende Aussagen? Ist das erw\xe4hnte Ger\xe4t neu oder alt?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ein Notebook verbraucht zum Bearbeiten eines Textdokuments oder Surfen im Internet ca. 7W."),(0,i.kt)("li",{parentName:"ul"},"Ein Desktopcomputer braucht ein 1500W-Netzteil."),(0,i.kt)("li",{parentName:"ul"},"Eine Stereoanlage verbraucht im Standbyzustand knapp 15W."),(0,i.kt)("li",{parentName:"ul"},"Ein Beamer hat einen Standbystromverbrauch von ca. 0.5W.")))),(0,i.kt)(o.Z,{type:"text",webKey:"99af8549-e30f-4fbf-b52a-084c320e5c53",mdxType:"Answer"}))))}f.isMDXComponent=!0},39113:function(e,t,n){t.Z=n.p+"assets/images/08-atx-39957fdb29b464ceafc88c0f7b75a0d0.jpg"},74797:function(e,t,n){t.Z=n.p+"assets/images/08-heatsink-fan-8d9a30bf8d816020a88b9956fef5fc70.jpg"},86350:function(e,t,n){t.Z=n.p+"assets/images/08-notebook-cooling-458f71ca55bc193cdd4f154fdd45b063.jpg"},13880:function(e,t,n){t.Z=n.p+"assets/images/08-power-supply-a130edca0a9da97bee5848c9b6d46e4f.jpg"}}]);