"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[12510],{3239:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),i="noLoginAlert_boZc",r=a(73727),l=a(71217),c=a(21314),s=(0,l.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:n.createElement("div",{className:i},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.rU,{to:"/login"},"Login"))}))},52084:function(e,t,a){a.d(t,{x:function(){return S},Z:function(){return L}});var n=a(67294),i=a(28900),r={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=a(86010),c=a(71217),s=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),o=function(e){var t=e.value,a=t,i=void 0;if(s.test(t)){var l=function(e){if(s.test(e))return e.match(s).groups.klass}(t);i=r[l],a=""+t.replace(s,"")}return n.createElement("option",{value:t,className:i},a)},u=a(92814),d=a(51436),m=a(68949),g=a(72389),p=a(21314),b=a(74322),f=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),y=function(e){return r[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},v=(0,c.Pi)((function(e){var t,a,i,c=(0,g.Z)(),s=n.useState("unchecked"),f=s[0],v=s[1],h=(0,p.oR)("documentStore").find(e.webKey),I=function(t){!e.isLegacy&&h.loaded&&(v("unchecked"),h.setData({value:t,type:"string"}))},N=function(t){if(e.checker)return v(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};v(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,m.U5)((function(){return h.loaded}),(function(e){e&&N(h.value)}))}),[h]),n.useEffect((function(){h.loaded&&N(h.value)}),[h,c]),c?h.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return I(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(t=h.legacyData)?void 0:t.value:h.value,className:y(h.value),disabled:!h.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(o,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return I(e.target.value)},value:e.isLegacy?null==(a=h.legacyData)?void 0:a.value:h.value,disabled:!h.loaded||h.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return N(h.value)},className:(0,l.default)(r[f],r.checkButton)},n.createElement(u.G,{icon:(i=f,"correct"===i?d.f8k:"wrong"===i?d.nYk:d.sph)}))):n.createElement(b.Z,null):n.createElement("div",null,"SSR")})),h=(0,i.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),I=function(e){return r[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},N=(0,c.Pi)((function(e){var t,a=(0,p.oR)("documentStore").find(e.webKey),i=function(t,n){if(void 0===n&&(n=0),!e.isLegacy&&a.loaded){var i=[].concat(a.data.value.slice(0,n),[t],a.data.value.slice(n+1));a.setData(Object.assign({},a.data,{value:i}))}};return a.loaded?n.createElement("div",{className:r.answer},e.label&&n.createElement("label",null,e.label),(e.isLegacy?(null==(t=a.legacyData)?void 0:t.value)||[]:a.data.value).map((function(t,r){return e.select?n.createElement("select",{key:r,onChange:function(e){return i(e.target.value,r)},value:t,className:I(t),disabled:!a.loaded||e.isLegacy},e.select.map((function(e,t){return n.createElement(o,{value:e,key:t})}))):n.createElement("input",{key:r,type:"text",onChange:function(e){return i(e.target.value,r)},value:t,disabled:!a.loaded||a.readonly})}))):n.createElement(b.Z,null)})),k=a(83117),C=a(75552),w=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(C.Z,(0,k.Z)({model:t},e))):n.createElement(b.Z,null)})),x=a(3239),Z=function(e,t){"code"!==t.type&&("use_legacy"===e?(t.setData(t.legacyData),t.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()}))}))):(0,m.z)((function(){t.legacyData=void 0,t.legacyCleanup&&t.legacyCleanup()})))},E=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.legacyData?n.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",n.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",n.createElement("div",null,"text"===t.type&&n.createElement(w,{type:"text",webKey:t.webKey,isLegacy:!0}),"string"===t.type&&n.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===t.type&&n.createElement(N,{type:"array",webKey:e.webKey,size:t.size,isLegacy:!0})),n.createElement("div",null,n.createElement("button",{className:"button button--primary",onClick:function(){return Z("use_legacy",t)}},"Ja"),n.createElement("button",{className:"button button--info",onClick:function(){return Z("use_current",t)}},"Nein (verwerfen)"))):null})),D=(0,c.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=a(46858),A=a(78982),M=a(97762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},H=function(e){if(!e.id)return function(){};var t=function(){try{return(0,z.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),a=(0,A.rV)(e.id,t);return a&&a.value?function(){return{data:{value:a.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,A.cl)(e.id,t)}}}:function(){}},L=(0,c.Pi)((function(e){var t=(0,p.oR)("documentStore"),a=(0,p.oR)("msalStore"),i=t.find(e.webKey),r=(0,g.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||M.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,H(e)),r?i?n.createElement("div",{"data--web-key":e.webKey},n.createElement(x.Z,null),a.loggedIn&&n.createElement(E,e),a.loggedIn&&n.createElement(D,{webKey:e.webKey}),"text"===e.type&&n.createElement(w,e),"string"===e.type&&n.createElement(v,e),"array"===e.type&&n.createElement(N,e)):n.createElement(b.Z,null):n.createElement("div",null,"SSR")}))},74322:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),i=a(86010),r="loader_2rVr",l="badge_2s0E",c=a(71217),s=a(92814),o=a(51436),u=(0,c.Pi)((function(){return n.createElement("div",{className:(0,i.default)(r)},n.createElement(s.G,{icon:o.IJ7,spin:!0}),n.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},75552:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),i="quillEditor_1XRF",r="quillAnswer_oQOS",l="monospace_3rFN",c="disableToolbar_gntN",s=a(86010),o=a(71217),u=a(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var r=[];e.ol&&r.push({list:"ordered"}),e.ul&&r.push({list:"bullet"}),t.push(r)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},p=(0,o.Pi)((function(e){var t=n.useState(!1),o=t[0],p=t[1],b=n.useState(!1),f=b[0],y=b[1],v=n.useRef(null),h=e.model,I=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var n=[Promise.all([a.e(97762),a.e(82930),a.e(76095),a.e(71167)]).then(a.t.bind(a,44290,23)),a.e(76095).then(a.t.bind(a,76095,23)),a.e(17891).then(a.t.bind(a,17891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,11940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=n.length,n.push(a.e(41008).then(a.bind(a,41008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,49115)))),Promise.all(n).then((function(t){d=t[i["react-quill"]].default;var a=t[i.quill].default,n=t[i["react-image-compress"]].default;if("katex"in i){var r=t[i.katex].default;window.katex=r}a.register("modules/imageCompress",n),e()}))}((function(){t&&(y(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",I))}),e.toolbar),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",I)}}),[e]);return d&&f&&h.loaded?n.createElement("div",{onFocus:function(){return!o&&p(!0)},className:(0,s.default)(i)},n.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,s.default)(r,e.monospace&&l,o?void 0:c),value:h.text||"",onChange:function(t,a,n,i){var r,l;r=t,void 0===l&&(l=0),!e.readonly&&h.canUpdate&&f&&h.setText(r)},modules:{toolbar:e.toolbar?g(e.toolbar):m,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(u.Z,null)}))},46858:function(e,t,a){a.d(t,{Vx:function(){return i},Vj:function(){return n},ly:function(){return r}});var n=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},i=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},r=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,a){a.d(t,{rV:function(){return r},cl:function(){return l}});var n=864e5,i=2592e6,r=function(e,t,a){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>n&&c()}catch(t){return}}(),t){var i=localStorage.getItem(t);if(i){var r=JSON.parse(i);if("object"==typeof r){var l=r[e];return void 0===l?a:l}return a}}var s=localStorage.getItem(e);return s?JSON.parse(s):a}catch(o){return a}},l=function(e,t){try{if(t){var a=r(t,void 0,{expiry:Date.now()+i});return"object"!=typeof a&&(a={expiry:0}),e in a&&delete a[e],void localStorage.setItem(t,JSON.stringify(a))}localStorage.removeItem(e)}catch(n){return}},c=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var a=r(t,void 0,{expiry:e+i});a.expiry&&a.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},92633:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),l=a(84384),c=a(52084),s=["components"],o={},u="2. EVAS-Prinzip",d={unversionedId:"Computer/basics/EVAS",id:"Computer/basics/EVAS",title:"2. EVAS-Prinzip",description:"Das EVAS-Prinzip beschreibt ein Grundprinzip der Datenverarbeitung. Die Abk\xfcrzung leitet sich aus den ersten Buchstaben der Begriffe Eingabe, Verarbeitung, Ausgabe und Speicherung ab.",source:"@site/docs/Computer/01-basics/02-EVAS.md",sourceDirName:"Computer/01-basics",slug:"/Computer/basics/EVAS",permalink:"/Computer/basics/EVAS",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/01-basics/02-EVAS.md",tags:[],version:"current",lastUpdatedAt:1641654572,formattedLastUpdatedAt:"1/8/2022",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"1. Computerkategorien",permalink:"/Computer/basics/kategorien"},next:{title:"3. Prozessor",permalink:"/Computer/basics/cpu"}},m=[{value:"Ein- und Ausgabeger\xe4te",id:"ein--und-ausgabeger\xe4te",children:[],level:2}],g={toc:m};function p(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-evas-prinzip"},"2. EVAS-Prinzip"),(0,r.kt)("p",null,"Das ",(0,r.kt)("strong",{parentName:"p"},"EVAS-Prinzip")," beschreibt ein Grundprinzip der Datenverarbeitung. Die Abk\xfcrzung leitet sich aus den ersten Buchstaben der Begriffe ",(0,r.kt)("strong",{parentName:"p"},"Eingabe"),", ",(0,r.kt)("strong",{parentName:"p"},"Verarbeitung"),", ",(0,r.kt)("strong",{parentName:"p"},"Ausgabe")," und ",(0,r.kt)("strong",{parentName:"p"},"Speicherung")," ab."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:a(8848).Z,mdxType:"Image"})),(0,r.kt)("p",null,"Daten m\xfcssen zuerst in den Computer gelangen. Dazu ist ein ",(0,r.kt)("strong",{parentName:"p"},"Eingabeger\xe4t")," notwendig, welches Informationen aus der Umwelt in digitale Daten umwandelt. Diese Informationen k\xf6nnen Bewegungen oder Aktionen der Benutzer:innen, Messwerte oder digitale Nachrichten eines anderen Computers sein."),(0,r.kt)("p",null,"Im Ger\xe4t werden die Daten ",(0,r.kt)("strong",{parentName:"p"},"gespeichert")," und ",(0,r.kt)("strong",{parentName:"p"},"verarbeitet"),"."),(0,r.kt)("p",null,"Ein ",(0,r.kt)("strong",{parentName:"p"},"Ausgabeger\xe4t")," wandelt Daten wieder in Informationen f\xfcr die Umwelt um. Diese k\xf6nnen beispielsweise visuell oder akustisch sein, um die Sinne der Benutzer:innen anzusprechen. Es kann sich aber auch um digitale Nachrichten handeln, die an andere Computer weitergeleitet werden."),(0,r.kt)("h2",{id:"ein--und-ausgabeger\xe4te"},"Ein- und Ausgabeger\xe4te"),(0,r.kt)("p",null,"Typische Ein- und Ausgabeger\xe4te f\xfcr Computer sind:"),(0,r.kt)("div",{style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Tanya Ferrera",author_uri:"https://pixabay.com/de/users/sthenostudio-875253/",licence:"CC0",licence_url:"https://pixabay.com/images/id-1409743/"},caption:"Tastatur",options:{},isInline:!1,src:a(89765).Z,alt:"Tastatur",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"OpenClipart-Vectors",author_uri:"https://pixabay.com/de/users/openclipart-vectors-30363/",licence:"CC0",licence_url:"https://pixabay.com/images/id-160032/"},caption:"Maus",options:{},isInline:!1,src:a(93996).Z,alt:"Maus",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"KMJ",author_uri:"https://de.wikipedia.org/wiki/User:KMJ",licence:"CC-BY-SA-3.0",licence_url:"https://commons.wikimedia.org/wiki/File:Webcam_Apple_iSight.jpg"},caption:"Webcam",options:{},isInline:!1,src:a(33635).Z,alt:"Webcam",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"OpenClipart-Vectors",author_uri:"https://pixabay.com/de/users/openclipart-vectors-30363/",licence:"CC0",licence_url:"https://pixabay.com/images/id-159612/"},caption:"Drucker",options:{},isInline:!1,src:a(16657).Z,alt:"Drucker",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Clker-Free-Vector-Images",author_uri:"https://pixabay.com/de/users/clker-free-vector-images-3736/",licence:"CC0",licence_url:"https://pixabay.com/images/id-32872/"},caption:"Bildschirm",options:{},isInline:!1,src:a(1980).Z,alt:"Bildschirm",mdxType:"Image"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 33.333333333333336% - calc(2 * 0.4em))"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)(l.Z,{bib:{author:"Bruno",author_uri:"https://pixabay.com/de/users/bru-no-1161770/",licence:"CC0",licence_url:"https://pixabay.com/images/id-971968/"},caption:"Lautsprecher",options:{},isInline:!1,src:a(94362).Z,alt:"Lautsprecher",mdxType:"Image"}))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"aufgabe"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten f\xfcr die Ein- und Ausgabe von Daten hat Ihr Smartphone? Versuchen Sie, m\xf6glichst alle aufzuschreiben. Bilden Sie dabei folgende Kategorien:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"nur Eingabeger\xe4t"),(0,r.kt)("li",{parentName:"ul"},"Ein- und Ausgabeger\xe4t"),(0,r.kt)("li",{parentName:"ul"},"nur Ausgabeger\xe4t")),(0,r.kt)("p",{parentName:"div"},"Hilfreiche App: ",(0,r.kt)("a",{parentName:"p",href:"https://phyphox.org/"},"PhyPhox")),(0,r.kt)(c.Z,{type:"text",webKey:"ddb7899f-aa03-4095-aa29-b5f053d46b14",mdxType:"Answer"}))))}p.isMDXComponent=!0},8848:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjY0MHB4IiBoZWlnaHQ9IjE5MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQXVzZ2FiZSI+CiAgICAgICAgPHJlY3QgeD0iNDY0IiB5PSIxOC44MzUiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNTA0LjgxMXB4IiB5PSI0Ny44MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BdXNnYWJlPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IlNwZWljaGVydW5nIj4KICAgICAgICA8cmVjdCB4PSIyNDAiIHk9IjEyOCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0OCIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIyNjQuMDQzcHgiIHk9IjE1Ny4xNDJweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3BlaWNoZXJ1bmc8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iVmVyYXJiZWl0dW5nIj4KICAgICAgICA8cmVjdCB4PSIyNDAiIHk9IjE2IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjI2My4xNjRweCIgeT0iNDQuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlZlcmFyYmVpdHVuZzwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJFaW5nYWJlIj4KICAgICAgICA8cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSIxNjAiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNTguODgxcHgiIHk9IjQ0Ljk4NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5FaW5nYWJlPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTIyOCwzNEwyNDAsNDBMMjI4LDQ2QzIzMSw0MyAyMzEsMzcgMjI4LDM0WiIvPgogICAgPHBhdGggZD0iTTE3Niw0MEwyMzAuNCw0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTQ1MiwzNEw0NjQsNDBMNDUyLDQ2QzQ1NSw0MyA0NTUsMzcgNDUyLDM0WiIvPgogICAgPHBhdGggZD0iTTQwMCw0MEw0NTQuNCw0MCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTMyNiw3NkwzMjAsNjRMMzE0LDc2QzMxNyw3MyAzMjMsNzMgMzI2LDc2WiIvPgogICAgPHBhdGggZD0iTTMyNiwxMTZMMzIwLDEyOEwzMTQsMTE2QzMxNywxMTkgMzIzLDExOSAzMjYsMTE2WiIvPgogICAgPHBhdGggZD0iTTMyMCw3My42TDMyMCwxMTguNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgo8L3N2Zz4K"},89765:function(e,t,a){t.Z=a.p+"assets/images/02-keyboard-1d67851dad91a191004eb43f3f797542.png"},1980:function(e,t,a){t.Z=a.p+"assets/images/02-monitor-f40d6a2e974480de4c1374898be628d4.png"},93996:function(e,t,a){t.Z=a.p+"assets/images/02-mouse-d8db9c200fb155ae86b149c64aabe146.png"},16657:function(e,t,a){t.Z=a.p+"assets/images/02-printer-4aaaa2cf18b042f1174eaf2d0e94b3fa.png"},94362:function(e,t,a){t.Z=a.p+"assets/images/02-speakers-7fc0a79dfb6949a9b9903585c9d660a3.png"},33635:function(e,t,a){t.Z=a.p+"assets/images/02-webcam-8773575869b6c62d5e51fcb0db7e2b27.png"}}]);