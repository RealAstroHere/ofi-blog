"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[88671],{52084:function(e,n,t){t.d(n,{x:function(){return K},Z:function(){return W}});var r=t(67294),a=t(3435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=t(86010),s=t(71217),o=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var n=e.value,t=n,a=void 0;if(o.test(n)){var l=function(e){if(o.test(e))return e.match(o).groups.klass}(n);a=i[l],t=""+n.replace(o,"")}return r.createElement("option",{value:n,className:a},t)},c=t(92814),d=t(51436),m=t(68949),h=t(72389),p=t(21314),f=t(74322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},b=(0,s.Pi)((function(e){var n,t,a,s=(0,h.Z)(),o=r.useState("unchecked"),g=o[0],b=o[1],w=(0,p.oR)("documentStore").find(e.webKey),k=function(n){!e.isLegacy&&w.loaded&&(b("unchecked"),w.setData({value:n,type:"string"}))},y=function(n){if(e.checker)return b(e.checker(n)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};b(t(n)===t(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return w.loaded}),(function(e){e&&y(w.value)}))}),[w]),r.useEffect((function(){w.loaded&&y(w.value)}),[w,s]),s?w.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:e.isLegacy?null==(n=w.legacyData)?void 0:n.value:w.value,className:v(w.value),disabled:!w.loaded||e.isLegacy},e.select.map((function(e,n){return r.createElement(u,{value:e,key:n})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:e.isLegacy?null==(t=w.legacyData)?void 0:t.value:w.value,disabled:!w.loaded||w.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return y(w.value)},className:(0,l.default)(i[g],i.checkButton)},r.createElement(c.G,{icon:(a=g,"correct"===a?d.f8k:"wrong"===a?d.nYk:d.sph)}))):r.createElement(f.Z,null):r.createElement("div",null,"SSR")})),w=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},y=(0,s.Pi)((function(e){var n,t=(0,p.oR)("documentStore").find(e.webKey),a=function(n,r){if(void 0===r&&(r=0),!e.isLegacy&&t.loaded){var a=[].concat(t.data.value.slice(0,r),[n],t.data.value.slice(r+1));t.setData(Object.assign({},t.data,{value:a}))}};return t.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),(e.isLegacy?(null==(n=t.legacyData)?void 0:n.value)||[]:t.data.value).map((function(n,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:n,className:k(n),disabled:!t.loaded||e.isLegacy},e.select.map((function(e,n){return r.createElement(u,{value:e,key:n})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:n,disabled:!t.loaded||t.readonly})}))):r.createElement(f.Z,null)})),E=t(83117),S=t(75552),P=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey);return n.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(S.Z,(0,E.Z)({model:n},e))):r.createElement(f.Z,null)})),N=t(47271),_=function(e,n){"code"!==n.type&&("use_legacy"===e?(n.setData(n.legacyData),n.saveService.saveNow().then((function(e){e.data&&"ok"===e.data.state&&(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()}))}))):(0,m.z)((function(){n.legacyData=void 0,n.legacyCleanup&&n.legacyCleanup()})))},z=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey);return n.legacyData?r.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",r.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",r.createElement("div",null,"text"===n.type&&r.createElement(P,{type:"text",webKey:n.webKey,isLegacy:!0}),"string"===n.type&&r.createElement(b,{type:"string",webKey:e.webKey,isLegacy:!0}),"array"===n.type&&r.createElement(y,{type:"array",webKey:e.webKey,size:n.size,isLegacy:!0})),r.createElement("div",null,r.createElement("button",{className:"button button--primary",onClick:function(){return _("use_legacy",n)}},"Ja"),r.createElement("button",{className:"button button--info",onClick:function(){return _("use_current",n)}},"Nein (verwerfen)"))):null})),x=(0,s.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),C=t(46858),D=t(78982),Z=t(97762),K=function(e){return e.replace(/\s+/g,"").toUpperCase()},I=function(e){if(!e.id)return function(){};var n=function(){try{return(0,C.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),t=(0,D.rV)(e.id,n);return t&&t.value?function(){return{data:{value:t.value,type:e.type,size:"array"===e.type?e.size:void 0},cleanup:function(){return(0,D.cl)(e.id,n)}}}:function(){}},W=(0,s.Pi)((function(e){var n=(0,p.oR)("documentStore"),t=(0,p.oR)("msalStore"),a=n.find(e.webKey),i=(0,h.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0,I(e)),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(N.Z,null),t.loggedIn&&r.createElement(z,e),t.loggedIn&&r.createElement(x,{webKey:e.webKey}),"text"===e.type&&r.createElement(P,e),"string"===e.type&&r.createElement(b,e),"array"===e.type&&r.createElement(y,e)):r.createElement(f.Z,null):r.createElement("div",null,"SSR")}))},47271:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294),a="noLoginAlert_HRfh",i=t(39960),l=t(71217),s=t(21314),o=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},30575:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(86010),a=t(71217),i=t(67294),l="pwContainer_eQcZ",s="achievement_al8G",o="notice_akVE",u="warning_kDn7",c="insecure_Zw0i",d="note_QSD2",m="zeros_lAEQ",h=t(97566),p={achievement:0,notice:1,warning:2,insecure:3},f={instantly:"sofort",forever:"nie"},g=[{singular:"Nanosekunde",plural:"Nanosekunden",seconds:1e-9},{singular:"Mikrosekunde",plural:"Mikrosekunden",seconds:1e-6},{singular:"Millisekunde",plural:"Millisekunden",abbreviations:["ms","msec"],seconds:.001},{singular:"second",plural:"Sekunden",abbreviations:["s","sec","secs"],seconds:1},{singular:"Minute",plural:"Minuten",abbreviations:["m","min","mins"],seconds:60},{singular:"Stunde",plural:"Stunden",abbreviations:["h"],seconds:3600},{singular:"Tag",plural:"Tagen",seconds:86400},{singular:"Woche",plural:"Wochen",seconds:604800},{singular:"Monat",plural:"Monaten",seconds:2626560},{singular:"Jahr",plural:"Jahren",seconds:31557600}],v={Millionen:6,Milliarden:9,Billionen:12,Billiarden:15,Trillionen:18,Trilliarden:21,Quadrillionen:24,Quadrilliarden:27,Quintillionen:30,Quintilliarden:33,Sextillionen:36,Sextilliarden:39,Septillionen:42,Septilliarden:45,Oktillionen:48,Oktilliarden:51,Nonillionen:54,Nonilliarden:57,Dezillionen:60,Dezilliarden:63},b={common:{name:"Top {{ value }} h\xe4ufigste Passw\xf6rter",message:"Ihr Passwort wird sehr h\xe4ufig verwendet. Es kann fast augenblicklich geknackt werden."},xkcd:{name:"xkcd",message:"https://xkcd.com/936/"},jeff:{name:"Es gibt immer eine Hintert\xfcr",message:"'The guy who made the software was called Jeff Jeffty Jeff. Born on the first of Jeff, nineteen-jeffty-jeff.'"},lengthVeryShort:{name:"Sehr kurz",message:"Ihr Passwort ist sehr kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},possiblyWord:{name:"Wort oder Name",message:"Ihr Passwort sieht wie ein Wort aus dem W\xf6rterbuch oder ein Name aus. Ein Name mit pers\xf6nlichem Bezug k\xf6nnte einfach erraten werden. Ein Wort aus dem W\xf6rterbuch kann sehr schnell geknackt werden."},onlyNumbers:{name:"Nur Zahlen",message:"Ihr Passwort besteht nur aus Zahlen. F\xfcgen Sie Buchstaben und Symbole hinzu, um es sicherer zu machen."},wordAndNumber:{name:"Wort und Zahl",message:"Ihr Passwort besteht nur aus einem Wort und ein paar Ziffern. Dies ist eine h\xe4ufige Kombination und kann sehr rasch geknackt werden."},lengthShort:{name:"Kurz",message:"Ihr Passwort ist ziemlich kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},justLetters:{name:"Nur Buchstaben",message:"Ihr Passwort besteht nur aus Buchstaben. F\xfcgen Sie Zahlen und Symbole hinzu, um es sicherer zu machen."},noSymbols:{name:"Keine Symbole",message:"Ihr Passwort enth\xe4lt nur Zahlen und Buchstaben. F\xfcgen Sie ein Symbol hinzu, um es sicherer zu machen."},telephone:{name:"Telefonnummer oder Datum",message:"Ihr Passwort k\xf6nnte eine Telefonnummer oder ein Datum sein. Falls es einen pers\xf6nlichen Bezug hat, kann es einfach zu erraten sein."},repeatedPattern:{name:"Wiederholendes Muster",message:"Wiederholende Zeichen oder Muster k\xf6nnen Ihr Passwort vorhersagbar machen."},nonStandardCharacters:{name:"Spezialzeichen",message:"Ihr Passwort enth\xe4lt ein Spezialzeichen und ist dadurch sicherer."},lengthLong:{name:"Lang",message:"Ihr Passwort ist l\xe4nger als sechzehn Zeichen."}},w={0:s,1:o,2:u,3:c},k={0:"badge--success",1:"badge--primary",2:"badge--warning",3:"badge--danger"},y=(0,a.Pi)((function(){var e=i.useRef(null),n=i.useState(!1),t=n[0],a=n[1],s=i.useState(1),o=s[0],u=s[1],c=i.useState(""),y=c[0],E=c[1],S=i.useState(""),P=S[0],N=S[1],_=i.useState([]),z=_[0],x=_[1],C=i.useState(""),D=C[0],Z=C[1];return i.useEffect((function(){var e;(e="/js/hsimp.min.js",new Promise((function(n,t){var r=document.createElement("script");document.body.appendChild(r),r.async=!0,r.onload=n,r.onerror=t,r.src=e}))).then((function(){var e=window.hsimp;e.setDictionary(f),e.setPeriodDictionary(g),e.setNamedNumberDictionary(v),e.setCheckerDictionary(b),a(!0)}))}),[]),i.useEffect((function(){if(t&&e.current&&D){var n={outputTime:function(e,n){N(e)},outputChecks:function(e,n){var t=0;e.forEach((function(e){t=Math.max(t,p[e.level])})),n||(t=1),u(t),x(e)}};window.hsimp(n,e.current)}else N("")}),[D,t,e]),i.useEffect((function(){if(!P)return E("");var e=P.split(" "),n=e[e.length-1],t=e[e.length-2],r=e[e.length-3],a=v[t];if(void 0===r||void 0===a||a<10)E("");else{var i=r.padEnd(a+r.length,"0").replace(/\B(?=(\d{3})+(?!\d))/g,"'");E(i+" "+n)}}),[P]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",h.Z.container,l,w[o])},i.createElement("p",{className:"hero__subtitle"},"Passwort Checker"),i.createElement("h4",null,"Wie sicher ist mein Passwort?"),i.createElement("input",{placeholder:"Passwort",ref:e,type:"password",onChange:function(e){return Z(e.target.value)}}),P&&i.createElement("span",{className:(0,r.default)("badge",k[o])},P),P&&i.createElement("div",null,"Ein Computer kann das eingegebene Passwort ",i.createElement("b",null,function(e){return e&&"sofort"!==e&&"nie"!==e?"in "+e:e}(P))," erraten."),y&&i.createElement("div",{className:(0,r.default)(m)},"(in ",y,".)"),i.createElement("div",null,i.createElement("ul",null,z.map((function(e,n){return i.createElement("li",{key:n},i.createElement("b",null,e.name),": ",e.message)})))),i.createElement("div",{className:(0,r.default)(d)},"* Die eingegebenen Passw\xf6rter werden direkt auf Ihrem Ger\xe4t analysiert und werden weder gespeichert noch \xfcbers Internet verschickt."))}))},74322:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),a=t(86010),i="loader_FEpR",l="badge_oWqf",s=t(71217),o=t(92814),u=t(51436),c=(0,s.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(o.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",l)},"Laden..."))}))},75552:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(67294),a="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",o=t(86010),u=t(71217),c=t(74322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),h=function(e){var n=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),n.push(t)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),n.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),n.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),n.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),n.push(l)}return e.code&&n.push(["code-block"]),n},p=(0,u.Pi)((function(e){var n=r.useState(!1),u=n[0],p=n[1],f=r.useState(!1),g=f[0],v=f[1],b=r.useRef(null),w=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var n=!0;return function(e,n){if(void 0===n&&(n={}),d)return e();var r=[Promise.all([t.e(97762),t.e(18446),t.e(80324),t.e(76095),t.e(71167)]).then(t.t.bind(t,44290,23)),t.e(76095).then(t.t.bind(t,76095,23)),t.e(17891).then(t.t.bind(t,17891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,11940))],a={"react-quill":0,quill:1,"react-image-compress":2};n.formula&&!window.katex&&(a.katex=r.length,r.push(t.e(41008).then(t.bind(t,41008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,50037)))),Promise.all(r).then((function(n){d=n[a["react-quill"]].default;var t=n[a.quill].default,r=n[a["react-image-compress"]].default;if("katex"in a){var i=n[a.katex].default;window.katex=i}t.register("modules/imageCompress",r),e()}))}((function(){n&&(v(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){n=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&g&&w.loaded?r.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,o.default)(a)},r.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||w.readonly,className:(0,o.default)(i,e.monospace&&l,u?void 0:s),value:w.text||"",onChange:function(n,t,r,a){var i,l;i=n,void 0===l&&(l=0),!e.readonly&&w.canUpdate&&g&&w.setText(i)},modules:{toolbar:e.toolbar?h(e.toolbar):[].concat(m,h(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(c.Z,null)}))},46858:function(e,n,t){t.d(n,{Vj:function(){return r},Vx:function(){return a},ly:function(){return i}});var r=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},a=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,n,t){t.d(n,{cl:function(){return l},rV:function(){return i}});var r=864e5,a=2592e6,i=function(e,n,t){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>r&&s()}catch(n){return}}(),n){var a=localStorage.getItem(n);if(a){var i=JSON.parse(a);if("object"==typeof i){var l=i[e];return void 0===l?t:l}return t}}var o=localStorage.getItem(e);return o?JSON.parse(o):t}catch(u){return t}},l=function(e,n){try{if(n){var t=i(n,void 0,{expiry:Date.now()+a});return"object"!=typeof t&&(t={expiry:0}),e in t&&delete t[e],void localStorage.setItem(n,JSON.stringify(t))}localStorage.removeItem(e)}catch(r){return}},s=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(n){var t=i(n,void 0,{expiry:e+a});t.expiry&&t.expiry>e&&localStorage.removeItem(n)})),localStorage.setItem("last_cleanup",""+e)}catch(n){return}}},16258:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=t(84384),s=t(30575),o=t(52084),u=["components"],c={title:"Sichere Passw\xf6rter"},d="Sichere Passw\xf6rter",m={unversionedId:"Kryptologie/Hashfunktionen/passwords",id:"Kryptologie/Hashfunktionen/passwords",title:"Sichere Passw\xf6rter",description:"--width=500px",source:"@site/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/passwords",permalink:"/Kryptologie/Hashfunktionen/passwords",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",tags:[],version:"current",lastUpdatedAt:1637061762,formattedLastUpdatedAt:"11/16/2021",sidebarPosition:2,frontMatter:{title:"Sichere Passw\xf6rter"},sidebar:"sidebar",previous:{title:"Authentifizierung",permalink:"/Kryptologie/Hashfunktionen/Authentifizierung"},next:{title:"Passw\xf6rter Speichern",permalink:"/Kryptologie/Hashfunktionen/save-passwords"}},h={},p=[{value:"Tipps f\xfcr gute Passw\xf6rter",id:"tipps-f\xfcr-gute-passw\xf6rter",level:2},{value:"Gute, merkbare Passw\xf6rter",id:"gute-merkbare-passw\xf6rter",level:2},{value:"1. Anfangsbuchstaben",id:"1-anfangsbuchstaben",level:3},{value:"2. Vier zuf\xe4llige W\xf6rter",id:"2-vier-zuf\xe4llige-w\xf6rter",level:3},{value:"3. Passwortmanager \ud83c\udfc5",id:"3-passwortmanager-",level:3}],f={toc:p};function g(e){var n=e.components,c=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sichere-passw\xf6rter"},"Sichere Passw\xf6rter"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"XKCD",source:"https://xkcd.com/936/",licence:"Creative Commons 2",licence_url:"https://creativecommons.org/licenses/by-nc/2.5/",edited:!1},caption:"",options:{width:"500px"},isInline:!1,src:t(51892).Z,alt:"--width=500px",mdxType:"Image"})),(0,i.kt)(s.Z,{mdxType:"PasswordChecker"}),(0,i.kt)("h2",{id:"tipps-f\xfcr-gute-passw\xf6rter"},"Tipps f\xfcr gute Passw\xf6rter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"W\xe4hlen Sie f\xfcr jede Webseite ein individuelles Passwort"),(0,i.kt)("li",{parentName:"ul"},"Das Passwort ist mindestens 8 Zeichen lang"),(0,i.kt)("li",{parentName:"ul"},"Es kommen Buchstaben (gross und klein), Zahlen und Sonderzeichen vor")),(0,i.kt)("h2",{id:"gute-merkbare-passw\xf6rter"},"Gute, merkbare Passw\xf6rter"),(0,i.kt)("p",null,"Es gibt Strategien, um gute Passw\xf6rter zu erstellen, die man sich einfach merken kann."),(0,i.kt)("h3",{id:"1-anfangsbuchstaben"},"1. Anfangsbuchstaben"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Jeden Abend vor dem Schlafen trinke ich eine Tasse Kr\xe4utertee!")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"JA4dStieTKt!"))),(0,i.kt)("h3",{id:"2-vier-zuf\xe4llige-w\xf6rter"},"2. Vier zuf\xe4llige W\xf6rter"),(0,i.kt)("p",null,"W\xe4hlen Sie vier zuf\xe4llige W\xf6rter. Verwenden Sie beispielsweise einen ",(0,i.kt)("a",{parentName:"p",href:"https://capitalizemytitle.com/zufallswort-generator/"},"Webdienst")," dazu.\n\xdcberlegen Sie sich anschliessend eine Visualisierung, mit welcher Sie sich diese W\xf6rter merken k\xf6nnen."),(0,i.kt)("p",null,"Weiter k\xf6nnen Buchstaben durch Sonderzeichen und Zahlen ersetzt werden, z.B. jedes 2te ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," wird zu einer ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", oder alle ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," werden als ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," geschrieben."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wahrscheinlich, Utopisch, Futurlos, Propeller")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Wahr$chein1ichUt0pi$chFuturl0$Pr0pe1ler")),(0,i.kt)("h3",{id:"3-passwortmanager-"},"3. Passwortmanager \ud83c\udfc5"),(0,i.kt)("p",null,"Am sichersten ist es, zuf\xe4llige Passw\xf6rter zu verwenden, welche Sie in einem Passwortmanager verwalten.\nSo m\xfcssen Sie sich nur ein (sicheres!) Passwort merken; dasjenige f\xfcr den Passwortmanager.\nIm Manager k\xf6nnen Sie f\xfcr jeden Dienst automatisch ein sicheres Passwort erzeugen lassen.\nF\xfcr g\xe4ngige Passwort-Manager gibt es auch Browser-Plugins, welche das Ausf\xfcllen von Passw\xf6rtern unterst\xfctzen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bitwarden.com/"},"BitWarden")," (\ud83c\udfc5 Empfehlung) - gute Basis-Funktionen und einfaches Handling, zudem Open Source (Kerckhoffs Prinzip \ud83d\ude09)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://keepass.info/"},"KeePass")," - auch Open Source"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.lastpass.com/"},"LastPass"))),(0,i.kt)(o.Z,{type:"text",webKey:"9568cbe5-e9dc-4471-9e5e-03ebf92aa10a",placeholder:"Notizen...",mdxType:"Answer"}))}g.isMDXComponent=!0},97566:function(e,n){n.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},51892:function(e,n,t){n.Z=t.p+"assets/images/xkcd_password_strength-eb683b06e819cdf273fffc96247a5775.png"}}]);