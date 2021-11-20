"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[88671],{3239:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),a="noLoginAlert_boZc",i=t(73727),l=t(71217),s=t(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.rU,{to:"/login"},"Login"))}))},52084:function(e,n,t){t.d(n,{x:function(){return K},Z:function(){return L}});var r=t(67294),a=t(26528),i={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX"},l=t(86010),s=t(71217),o=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),u=function(e){var n=e.value,t=n,a=void 0;if(o.test(n)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(n);a=i[l],t=""+n.replace(o,"")}return r.createElement("option",{value:n,className:a},t)},c=t(92814),d=t(51436),m=t(68949),f=t(72389),h=t(21314),p=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){return i[function(e){if(p.test(e))return e.match(p).groups.klass}(e)]},v=(0,s.Pi)((function(e){var n,t,a,s=(0,f.Z)(),o=r.useState("unchecked"),p=o[0],v=o[1],b=(0,h.oR)("documentStore").find(e.webKey),w=function(n){!e.isLegacy&&b.loaded&&(v("unchecked"),b.setData({value:n,type:"string"}))},k=function(n){if(e.checker)return v(e.checker(n)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};v(t(n)===t(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return b.loaded}),(function(e){e&&k(b.value)}))}),[b]),r.useEffect((function(){b.loaded&&k(b.value)}),[b,s]),s?b.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return w(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(n=b.legacyData)?void 0:n.value:b.value,className:g(b.value),disabled:!b.loaded||e.isLegacy},e.select.map((function(e,n){return r.createElement(u,{value:e,key:n})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return w(e.target.value)},value:e.isLegacy?null==(t=b.legacyData)?void 0:t.value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return k(b.value)},className:(0,l.default)(i[p],i.checkButton)},r.createElement(c.G,{icon:(a=p,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement("div",null,"Loading..."):r.createElement("div",null,"SSR")})),b=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),w=function(e){return i[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},k=(0,s.Pi)((function(e){var n,t=(0,h.oR)("documentStore").find(e.webKey),a=function(n,r){if(void 0===r&&(r=0),!e.isLegacy&&t.loaded){var a=[].concat(t.data.value.slice(0,r),[n],t.data.value.slice(r+1));t.setData(Object.assign({},t.data,{value:a}))}};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(n=t.legacyData)?void 0:n.value)||[]:t.data.value).map((function(n,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:n,className:w(n),disabled:!t.loaded||e.isLegacy},e.select.map((function(e,n){return r.createElement(u,{value:e,key:n})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:n,disabled:!t.loaded||t.readonly})}))):r.createElement("div",null,"Loading...")})),y=t(87462),S=t(75552),E=(0,s.Pi)((function(e){var n=(0,h.oR)("documentStore").find(e.webKey);return n.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(S.Z,(0,y.Z)({model:n},e))):r.createElement("div",null,"Loading...")})),P=t(3239),N=function(e,n){"code"!==n.type&&("use_legacy"===e?(n.setData(n.legacyData),n.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()}))}))):(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()})))},z=(0,s.Pi)((function(e){var n=(0,h.oR)("documentStore").find(e.webKey);return n.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===n.type&&r.createElement(E,{type:"text",webKey:n.webKey,isLegacy:!0}),"string"===n.type&&r.createElement(v,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===n.type&&r.createElement(k,{type:"array",webKey:e.webKey,size:n.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return N("use_legacy",n)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return N("use_current",n)}},"Nein (verwerfen)"))):null})),x=(0,s.Pi)((function(e){return(0,h.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),D=t(46858),_=t(78982),C=t(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},Z=function(e){if(!e.id)return function(){};var n=function(){try{return(0,D.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),t=(0,_.rV)(e.id,n);return t&&t.value?function(){return{data:{value:t.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,_.cl)(e.id,n)}}}:function(){}},L=(0,s.Pi)((function(e){var n=(0,h.oR)("documentStore"),t=(0,h.oR)("msalStore"),a=n.find(e.webKey),i=(0,f.Z)();return(0,h.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||C.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,Z(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(P.Z,null),t.loggedIn&&r.createElement(z,e),t.loggedIn&&r.createElement(x,{webKey:e.webKey}),"text"===e.type&&r.createElement(E,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(k,e)):r.createElement("div",null,"Loading..."):r.createElement("div",null,"SSR")}))},46663:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(86010),a=t(71217),i=t(67294),l="pwContainer_1i6_",s="note_3wJs",o="zeros_1kJ4",u="container_COBa",c={achievement:0,notice:1,warning:2,insecure:3},d={instantly:"sofort",forever:"nie"},m=[{singular:"Nanosekunde",plural:"Nanosekunden",seconds:1e-9},{singular:"Mikrosekunde",plural:"Mikrosekunden",seconds:1e-6},{singular:"Millisekunde",plural:"Millisekunden",abbreviations:["ms","msec"],seconds:.001},{singular:"second",plural:"Sekunden",abbreviations:["s","sec","secs"],seconds:1},{singular:"Minute",plural:"Minuten",abbreviations:["m","min","mins"],seconds:60},{singular:"Stunde",plural:"Stunden",abbreviations:["h"],seconds:3600},{singular:"Tag",plural:"Tagen",seconds:86400},{singular:"Woche",plural:"Wochen",seconds:604800},{singular:"Monat",plural:"Monaten",seconds:2626560},{singular:"Jahr",plural:"Jahren",seconds:31557600}],f={Millionen:6,Milliarden:9,Billionen:12,Billiarden:15,Trillionen:18,Trilliarden:21,Quadrillionen:24,Quadrilliarden:27,Quintillionen:30,Quintilliarden:33,Sextillionen:36,Sextilliarden:39,Septillionen:42,Septilliarden:45,Oktillionen:48,Oktilliarden:51,Nonillionen:54,Nonilliarden:57,Dezillionen:60,Dezilliarden:63},h={common:{name:"Top {{ value }} h\xe4ufigste Passw\xf6rter",message:"Ihr Passwort wird sehr h\xe4ufig verwendet. Es kann fast augenblicklich geknackt werden."},xkcd:{name:"xkcd",message:"https://xkcd.com/936/"},jeff:{name:"Es gibt immer eine Hintert\xfcr",message:"'The guy who made the software was called Jeff Jeffty Jeff. Born on the first of Jeff, nineteen-jeffty-jeff.'"},lengthVeryShort:{name:"Sehr kurz",message:"Ihr Passwort ist sehr kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},possiblyWord:{name:"Wort oder Name",message:"Ihr Passwort sieht wie ein Wort aus dem W\xf6rterbuch oder ein Name aus. Ein Name mit pers\xf6nlichem Bezug k\xf6nnte einfach erraten werden. Ein Wort aus dem W\xf6rterbuch kann sehr schnell geknackt werden."},onlyNumbers:{name:"Nur Zahlen",message:"Ihr Passwort besteht nur aus Zahlen. F\xfcgen Sie Buchstaben und Symbole hinzu, um es sicherer zu machen."},wordAndNumber:{name:"Wort und Zahl",message:"Ihr Passwort besteht nur aus einem Wort und ein paar Ziffern. Dies ist eine h\xe4ufige Kombination und kann sehr rasch geknackt werden."},lengthShort:{name:"Kurz",message:"Ihr Passwort ist ziemlich kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},justLetters:{name:"Nur Buchstaben",message:"Ihr Passwort besteht nur aus Buchstaben. F\xfcgen Sie Zahlen und Symbole hinzu, um es sicherer zu machen."},noSymbols:{name:"Keine Symbole",message:"Ihr Passwort enth\xe4lt nur Zahlen und Buchstaben. F\xfcgen Sie ein Symbol hinzu, um es sicherer zu machen."},telephone:{name:"Telefonnummer oder Datum",message:"Ihr Passwort k\xf6nnte eine Telefonnummer oder ein Datum sein. Falls es einen pers\xf6nlichen Bezug hat, kann es einfach zu erraten sein."},repeatedPattern:{name:"Wiederholendes Muster",message:"Wiederholende Zeichen oder Muster k\xf6nnen Ihr Passwort vorhersagbar machen."},nonStandardCharacters:{name:"Spezialzeichen",message:"Ihr Passwort enth\xe4lt ein Spezialzeichen und ist dadurch sicherer."},lengthLong:{name:"Lang",message:"Ihr Passwort ist l\xe4nger als sechzehn Zeichen."}},p={0:"achievement_3Y0G",1:"notice_3hgM",2:"warning_3B62",3:"insecure_3MAl"},g={0:"badge--success",1:"badge--primary",2:"badge--warning",3:"badge--danger"},v=(0,a.Pi)((function(){var e=i.useRef(null),n=i.useState(!1),t=n[0],a=n[1],v=i.useState(1),b=v[0],w=v[1],k=i.useState(""),y=k[0],S=k[1],E=i.useState(""),P=E[0],N=E[1],z=i.useState([]),x=z[0],D=z[1],_=i.useState(""),C=_[0],K=_[1];return i.useEffect((function(){var e;(e="/js/hsimp.min.js",new Promise((function(n,t){var r=document.createElement("script");document.body.appendChild(r),r.async=!0,r.onload=n,r.onerror=t,r.src=e}))).then((function(){var e=window.hsimp;e.setDictionary(d),e.setPeriodDictionary(m),e.setNamedNumberDictionary(f),e.setCheckerDictionary(h),a(!0)}))}),[]),i.useEffect((function(){if(t&&e.current&&C){var n={outputTime:function(e,n){N(e)},outputChecks:function(e,n){var t=0;e.forEach((function(e){t=Math.max(t,c[e.level])})),n||(t=1),w(t),D(e)}};window.hsimp(n,e.current)}else N("")}),[C,t,e]),i.useEffect((function(){if(!P)return S("");var e=P.split(" "),n=e[e.length-1],t=e[e.length-2],r=e[e.length-3],a=f[t];if(void 0===r||void 0===a||a<10)S("");else{var i=r.padEnd(a+r.length,"0").replace(/\B(?=(\d{3})+(?!\d))/g,"'");S(i+" "+n)}}),[P]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",u,l,p[b])},i.createElement("p",{className:"hero__subtitle"},"Passwort Checker"),i.createElement("h4",null,"Wie sicher ist mein Passwort?"),i.createElement("input",{placeholder:"Passwort",ref:e,type:"password",onChange:function(e){return K(e.target.value)}}),P&&i.createElement("span",{className:(0,r.default)("badge",g[b])},P),P&&i.createElement("div",null,"Ein Computer kann das eingegebene Passwort ",i.createElement("b",null,function(e){return e&&"sofort"!==e&&"nie"!==e?"in "+e:e}(P))," erraten."),y&&i.createElement("div",{className:(0,r.default)(o)},"(in ",y,".)"),i.createElement("div",null,i.createElement("ul",null,x.map((function(e,n){return i.createElement("li",{key:n},i.createElement("b",null,e.name),": ",e.message)})))),i.createElement("div",{className:(0,r.default)(s)},"* Die eingegebenen Passw\xf6rter werden direkt auf Ihrem Ger\xe4t analysiert und werden weder gespeichert noch \xfcbers Internet verschickt."))}))},75552:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(67294),a="quillAnswer_oQOS",i="monospace_3rFN",l=t(86010),s=t(71217),o=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]]),c=function(e){var n=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),n.push(t)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),n.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),n.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),n.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),n.push(l)}return n},d=(0,s.Pi)((function(e){var n=r.useState(!1),s=n[0],d=n[1],m=r.useState(!1),f=m[0],h=m[1],p=r.useRef(null),g=e.model,v=function(e){e.preventDefault()};r.useEffect((function(){var n=!0;return function(e,n){if(void 0===n&&(n={}),o)return e();var r=[Promise.all([t.e(97762),t.e(82930),t.e(76095),t.e(71167)]).then(t.t.bind(t,44290,23)),t.e(76095).then(t.t.bind(t,76095,23)),t.e(17891).then(t.t.bind(t,17891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};n.formula&&!window.katex&&(a.katex=r.length,r.push(t.e(41008).then(t.bind(t,41008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,50037)))),Promise.all(r).then((function(n){o=n[a["react-quill"]].default;var t=n[a.quill].default,r=n[a["react-image-compress"]].default;if("katex"in a){var i=n[a.katex].default;window.katex=i}t.register("modules/imageCompress",r),e()}))}((function(){n&&(h(!0),p&&p.current&&p.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),e.toolbar),function(){n=!1,p&&p.current&&p.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return o&&f&&g.loaded?r.createElement("div",{onFocus:function(){return!s&&d(!0)}},r.createElement(o,{ref:p,theme:"snow",readOnly:e.readonly||g.readonly,className:(0,l.default)(a,e.monospace&&i,s?void 0:"disable-toolbar"),value:g.text||"",onChange:function(n,t,r,a){var i,l;i=n,void 0===l&&(l=0),!e.readonly&&g.canUpdate&&f&&g.setText(i)},modules:{toolbar:e.toolbar?c(e.toolbar):u,imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/png",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")}))},21314:function(e,n,t){t.d(n,{oR:function(){return l},ky:function(){return s},RN:function(){return o}});var r=t(68949),a=t(67294),i=t(16731),l=function(e){return a.useContext(i.Nx)[e]},s=function(e,n,t,l,s,o){var u=a.useState(!1),c=u[0],d=u[1];a.useEffect((function(){i.Ux.documentStore.provideDocument(e(),n,t,l,s,o).finally((function(){d(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(r){c&&r&&i.Ux.documentStore.provideDocument(e(),n,t,l,s,o,!0)}))}),[c]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(r){c&&!r&&i.Ux.documentStore.provideDocument(e(),n,t,l,s,o,!0)}))}),[c])},o=function(e){var n=a.useState(!1),t=n[0],l=n[1];a.useEffect((function(){i.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){l(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.userStore.currentView}),(function(n,r){t&&n&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[t]),a.useEffect((function(){return(0,r.U5)((function(){return i.Ux.msalStore.isApiOffline}),(function(n,r){t&&!n&&r&&i.Ux.timedTopicStore.provideTopic(e,!0)}))}),[t])}},46858:function(e,n,t){t.d(n,{Vx:function(){return a},Vj:function(){return r},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,n,t){t.d(n,{rV:function(){return i},cl:function(){return l}});var r=864e5,a=2592e6,i=function(e,n,t){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&s()}catch(n){return}}(),n){var a=localStorage.getItem(n);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?t:l}return t}}var o=localStorage.getItem(e);return o?JSON.parse(o):t}catch(u){return t}},l=function(e,n){try{if(n){var t=i(n,void 0,{expiry:Date.now()+a});return"object"!=typeof t&&(t={expiry:0}),e in t&&delete t[e],void localStorage.setItem(n,JSON.stringify(t))}localStorage.removeItem(e)}catch(r){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(n){var t=i(n,void 0,{expiry:e+a});t.expiry&&t.expiry>e&&localStorage.removeItem(n)})),localStorage.setItem("last_cleanup",""+e)}catch(n){return}}},16258:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return f},default:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=t(84384),s=t(46663),o=t(52084),u=["components"],c={title:"Sichere Passw\xf6rter"},d="Sichere Passw\xf6rter",m={unversionedId:"Kryptologie/Hashfunktionen/passwords",id:"Kryptologie/Hashfunktionen/passwords",isDocsHomePage:!1,title:"Sichere Passw\xf6rter",description:"--width=500px",source:"@site/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/passwords",permalink:"/Kryptologie/Hashfunktionen/passwords",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",tags:[],version:"current",lastUpdatedAt:1637061762,formattedLastUpdatedAt:"11/16/2021",sidebarPosition:2,frontMatter:{title:"Sichere Passw\xf6rter"},sidebar:"sidebar",previous:{title:"Authentifizierung",permalink:"/Kryptologie/Hashfunktionen/Authentifizierung"},next:{title:"Passw\xf6rter Speichern",permalink:"/Kryptologie/Hashfunktionen/save-passwords"}},f=[{value:"Tipps f\xfcr gute Passw\xf6rter",id:"tipps-f\xfcr-gute-passw\xf6rter",children:[],level:2},{value:"Gute, merkbare Passw\xf6rter",id:"gute-merkbare-passw\xf6rter",children:[{value:"1. Anfangsbuchstaben",id:"1-anfangsbuchstaben",children:[],level:3},{value:"2. Vier zuf\xe4llige W\xf6rter",id:"2-vier-zuf\xe4llige-w\xf6rter",children:[],level:3},{value:"3. Passwortmanager \ud83c\udfc5",id:"3-passwortmanager-",children:[],level:3}],level:2}],h={toc:f};function p(e){var n=e.components,c=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},h,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sichere-passw\xf6rter"},"Sichere Passw\xf6rter"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"XKCD",source:"https://xkcd.com/936/",licence:"Creative Commons 2",licence_url:"https://creativecommons.org/licenses/by-nc/2.5/",edited:!1},caption:"",options:{width:"500px"},isInline:!1,src:t(66153).Z,alt:"--width=500px",mdxType:"Image"})),(0,i.kt)(s.Z,{mdxType:"PasswordChecker"}),(0,i.kt)("h2",{id:"tipps-f\xfcr-gute-passw\xf6rter"},"Tipps f\xfcr gute Passw\xf6rter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"W\xe4hlen Sie f\xfcr jede Webseite ein individuelles Passwort"),(0,i.kt)("li",{parentName:"ul"},"Das Passwort ist mindestens 8 Zeichen lang"),(0,i.kt)("li",{parentName:"ul"},"Es kommen Buchstaben (gross und klein), Zahlen und Sonderzeichen vor")),(0,i.kt)("h2",{id:"gute-merkbare-passw\xf6rter"},"Gute, merkbare Passw\xf6rter"),(0,i.kt)("p",null,"Es gibt Strategien, um gute Passw\xf6rter zu erstellen, die man sich einfach merken kann."),(0,i.kt)("h3",{id:"1-anfangsbuchstaben"},"1. Anfangsbuchstaben"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Jeden Abend vor dem Schlafen trinke ich eine Tasse Kr\xe4utertee!")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"JA4dStieTKt!"))),(0,i.kt)("h3",{id:"2-vier-zuf\xe4llige-w\xf6rter"},"2. Vier zuf\xe4llige W\xf6rter"),(0,i.kt)("p",null,"W\xe4hlen Sie vier zuf\xe4llige W\xf6rter. Verwenden Sie beispielsweise einen ",(0,i.kt)("a",{parentName:"p",href:"https://capitalizemytitle.com/zufallswort-generator/"},"Webdienst")," dazu.\n\xdcberlegen Sie sich anschliessend eine Visualisierung, mit welcher Sie sich diese W\xf6rter merken k\xf6nnen."),(0,i.kt)("p",null,"Weiter k\xf6nnen Buchstaben durch Sonderzeichen und Zahlen ersetzt werden, z.B. jedes 2te ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," wird zu einer ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", oder alle ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," werden als ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," geschrieben."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wahrscheinlich, Utopisch, Futurlos, Propeller")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Wahr$chein1ichUt0pi$chFuturl0$Pr0pe1ler")),(0,i.kt)("h3",{id:"3-passwortmanager-"},"3. Passwortmanager \ud83c\udfc5"),(0,i.kt)("p",null,"Am sichersten ist es, zuf\xe4llige Passw\xf6rter zu verwenden, welche Sie in einem Passwortmanager verwalten.\nSo m\xfcssen Sie sich nur ein (sicheres!) Passwort merken; dasjenige f\xfcr den Passwortmanager.\nIm Manager k\xf6nnen Sie f\xfcr jeden Dienst automatisch ein sicheres Passwort erzeugen lassen.\nF\xfcr g\xe4ngige Passwort-Manager gibt es auch Browser-Plugins, welche das Ausf\xfcllen von Passw\xf6rtern unterst\xfctzen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bitwarden.com/"},"BitWarden")," (\ud83c\udfc5 Empfehlung) - gute Basis-Funktionen und einfaches Handling, zudem Open Source (Kerckhoffs Prinzip \ud83d\ude09)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://keepass.info/"},"KeePass")," - auch Open Source"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.lastpass.com/"},"LastPass"))),(0,i.kt)(o.Z,{type:"text",webKey:"9568cbe5-e9dc-4471-9e5e-03ebf92aa10a",placeholder:"Notizen...",mdxType:"Answer"}))}p.isMDXComponent=!0},66153:function(e,n,t){n.Z=t.p+"assets/images/xkcd_password_strength-eb683b06e819cdf273fffc96247a5775.png"}}]);