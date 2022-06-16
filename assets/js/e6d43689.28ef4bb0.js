"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4898],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),h=a,p=m["".concat(o,".").concat(h)]||m[h]||d[h]||i;return t?r.createElement(p,s(s({ref:n},c),{},{components:t})):r.createElement(p,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},682593:function(e,n,t){t.d(n,{x:function(){return x},Z:function(){return C}});var r=t(667294),a=t(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},s=t(386010),l=t(471217),o=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),u=function(e){var n=e.value,t=n,a=void 0;if(o.test(n)){var s=function(e){if(o.test(e))return e.match(o).groups.klass}(n);a=i[s],t=""+n.replace(o,"")}return r.createElement("option",{value:n,className:a},t)},c=t(592814),d=t(51436),m=t(168949),h=t(972389),p=t(121314),f=t(274322),g=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,l.Pi)((function(e){var n,t=(0,h.Z)(),a=r.useState("unchecked"),l=a[0],o=a[1],g=(0,p.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(o("unchecked"),g.setData({value:e,type:"string"}))},w=function(n){if(e.checker)return o(e.checker(n)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};o(t(n)===t(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&w(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&w(g.value)}),[g,t]),t?g.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:b(g.value),disabled:!g.loaded},e.select.map((function(e,n){return r.createElement(u,{value:e,key:n})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return w(g.value)},className:(0,s.default)(i[l],i.checkButton)},r.createElement(c.G,{icon:(n=l,"correct"===n?d.f8k:"wrong"===n?d.nYk:d.sph)}))):r.createElement(f.Z,null):r.createElement("div",null,"SSR")})),w=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},y=(0,l.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey),t=function(e,t){void 0===t&&(t=0);var r=[].concat(n.data.value.slice(0,t),[e],n.data.value.slice(t+1));n.setData(Object.assign({},n.data,{value:r}))};return n.loaded?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),n.data.value.map((function(a,i){return e.select?r.createElement("select",{key:i,onChange:function(e){return t(e.target.value,i)},value:a,className:k(a),disabled:!n.loaded},e.select.map((function(e,n){return r.createElement(u,{value:e,key:n})}))):r.createElement("input",{key:i,type:"text",onChange:function(e){return t(e.target.value,i)},value:a,disabled:!n.loaded||n.readonly})}))):r.createElement(f.Z,null)})),E=t(583117),P=t(575552),S=(0,l.Pi)((function(e){var n=(0,p.oR)("documentStore").find(e.webKey);return n.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(P.Z,(0,E.Z)({model:n},e))):r.createElement(f.Z,null)})),N=t(647271),_=(0,l.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,s.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),z=t(697762),x=function(e){return e.replace(/\s+/g,"").toUpperCase()},C=(0,l.Pi)((function(e){var n=(0,p.oR)("documentStore"),t=(0,p.oR)("msalStore"),a=n.find(e.webKey),i=(0,h.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?a?r.createElement("div",{"data--web-key":e.webKey},r.createElement(N.Z,null),t.loggedIn&&r.createElement(_,{webKey:e.webKey}),"text"===e.type&&r.createElement(S,e),"string"===e.type&&r.createElement(v,e),"array"===e.type&&r.createElement(y,e)):r.createElement(f.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(667294),a="noLoginAlert_HRfh",i=t(239960),s=t(471217),l=t(121314),o=(0,s.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:r.createElement("div",{className:a},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(i.Z,{to:"/login"},"Login"))}))},430575:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(386010),a=t(471217),i=t(667294),s="pwContainer_eQcZ",l="achievement_al8G",o="notice_akVE",u="warning_kDn7",c="insecure_Zw0i",d="note_QSD2",m="zeros_lAEQ",h=t(197566),p={achievement:0,notice:1,warning:2,insecure:3},f={instantly:"sofort",forever:"nie"},g=[{singular:"Nanosekunde",plural:"Nanosekunden",seconds:1e-9},{singular:"Mikrosekunde",plural:"Mikrosekunden",seconds:1e-6},{singular:"Millisekunde",plural:"Millisekunden",abbreviations:["ms","msec"],seconds:.001},{singular:"second",plural:"Sekunden",abbreviations:["s","sec","secs"],seconds:1},{singular:"Minute",plural:"Minuten",abbreviations:["m","min","mins"],seconds:60},{singular:"Stunde",plural:"Stunden",abbreviations:["h"],seconds:3600},{singular:"Tag",plural:"Tagen",seconds:86400},{singular:"Woche",plural:"Wochen",seconds:604800},{singular:"Monat",plural:"Monaten",seconds:2626560},{singular:"Jahr",plural:"Jahren",seconds:31557600}],b={Millionen:6,Milliarden:9,Billionen:12,Billiarden:15,Trillionen:18,Trilliarden:21,Quadrillionen:24,Quadrilliarden:27,Quintillionen:30,Quintilliarden:33,Sextillionen:36,Sextilliarden:39,Septillionen:42,Septilliarden:45,Oktillionen:48,Oktilliarden:51,Nonillionen:54,Nonilliarden:57,Dezillionen:60,Dezilliarden:63},v={common:{name:"Top {{ value }} h\xe4ufigste Passw\xf6rter",message:"Ihr Passwort wird sehr h\xe4ufig verwendet. Es kann fast augenblicklich geknackt werden."},xkcd:{name:"xkcd",message:"https://xkcd.com/936/"},jeff:{name:"Es gibt immer eine Hintert\xfcr",message:"'The guy who made the software was called Jeff Jeffty Jeff. Born on the first of Jeff, nineteen-jeffty-jeff.'"},lengthVeryShort:{name:"Sehr kurz",message:"Ihr Passwort ist sehr kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},possiblyWord:{name:"Wort oder Name",message:"Ihr Passwort sieht wie ein Wort aus dem W\xf6rterbuch oder ein Name aus. Ein Name mit pers\xf6nlichem Bezug k\xf6nnte einfach erraten werden. Ein Wort aus dem W\xf6rterbuch kann sehr schnell geknackt werden."},onlyNumbers:{name:"Nur Zahlen",message:"Ihr Passwort besteht nur aus Zahlen. F\xfcgen Sie Buchstaben und Symbole hinzu, um es sicherer zu machen."},wordAndNumber:{name:"Wort und Zahl",message:"Ihr Passwort besteht nur aus einem Wort und ein paar Ziffern. Dies ist eine h\xe4ufige Kombination und kann sehr rasch geknackt werden."},lengthShort:{name:"Kurz",message:"Ihr Passwort ist ziemlich kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},justLetters:{name:"Nur Buchstaben",message:"Ihr Passwort besteht nur aus Buchstaben. F\xfcgen Sie Zahlen und Symbole hinzu, um es sicherer zu machen."},noSymbols:{name:"Keine Symbole",message:"Ihr Passwort enth\xe4lt nur Zahlen und Buchstaben. F\xfcgen Sie ein Symbol hinzu, um es sicherer zu machen."},telephone:{name:"Telefonnummer oder Datum",message:"Ihr Passwort k\xf6nnte eine Telefonnummer oder ein Datum sein. Falls es einen pers\xf6nlichen Bezug hat, kann es einfach zu erraten sein."},repeatedPattern:{name:"Wiederholendes Muster",message:"Wiederholende Zeichen oder Muster k\xf6nnen Ihr Passwort vorhersagbar machen."},nonStandardCharacters:{name:"Spezialzeichen",message:"Ihr Passwort enth\xe4lt ein Spezialzeichen und ist dadurch sicherer."},lengthLong:{name:"Lang",message:"Ihr Passwort ist l\xe4nger als sechzehn Zeichen."}},w={0:l,1:o,2:u,3:c},k={0:"badge--success",1:"badge--primary",2:"badge--warning",3:"badge--danger"},y=(0,a.Pi)((function(){var e=i.useRef(null),n=i.useState(!1),t=n[0],a=n[1],l=i.useState(1),o=l[0],u=l[1],c=i.useState(""),y=c[0],E=c[1],P=i.useState(""),S=P[0],N=P[1],_=i.useState([]),z=_[0],x=_[1],C=i.useState(""),Z=C[0],O=C[1];return i.useEffect((function(){var e;(e="/js/hsimp.min.js",new Promise((function(n,t){var r=document.createElement("script");document.body.appendChild(r),r.async=!0,r.onload=n,r.onerror=t,r.src=e}))).then((function(){var e=window.hsimp;e.setDictionary(f),e.setPeriodDictionary(g),e.setNamedNumberDictionary(b),e.setCheckerDictionary(v),a(!0)}))}),[]),i.useEffect((function(){if(t&&e.current&&Z){var n={outputTime:function(e,n){N(e)},outputChecks:function(e,n){var t=0;e.forEach((function(e){t=Math.max(t,p[e.level])})),n||(t=1),u(t),x(e)}};window.hsimp(n,e.current)}else N("")}),[Z,t,e]),i.useEffect((function(){if(!S)return E("");var e=S.split(" "),n=e[e.length-1],t=e[e.length-2],r=e[e.length-3],a=b[t];if(void 0===r||void 0===a||a<10)E("");else{var i=r.padEnd(a+r.length,"0").replace(/\B(?=(\d{3})+(?!\d))/g,"'");E(i+" "+n)}}),[S]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",h.Z.container,s,w[o])},i.createElement("p",{className:"hero__subtitle"},"Passwort Checker"),i.createElement("h4",null,"Wie sicher ist mein Passwort?"),i.createElement("input",{placeholder:"Passwort",ref:e,type:"password",onChange:function(e){return O(e.target.value)}}),S&&i.createElement("span",{className:(0,r.default)("badge",k[o])},S),S&&i.createElement("div",null,"Ein Computer kann das eingegebene Passwort ",i.createElement("b",null,function(e){return e&&"sofort"!==e&&"nie"!==e?"in "+e:e}(S))," erraten."),y&&i.createElement("div",{className:(0,r.default)(m)},"(in ",y,".)"),i.createElement("div",null,i.createElement("ul",null,z.map((function(e,n){return i.createElement("li",{key:n},i.createElement("b",null,e.name),": ",e.message)})))),i.createElement("div",{className:(0,r.default)(d)},"* Die eingegebenen Passw\xf6rter werden direkt auf Ihrem Ger\xe4t analysiert und werden weder gespeichert noch \xfcbers Internet verschickt."))}))},274322:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(667294),a=t(386010),i="loader_FEpR",s="badge_oWqf",l=t(471217),o=t(592814),u=t(51436),c=(0,l.Pi)((function(){return r.createElement("div",{className:(0,a.default)(i)},r.createElement(o.G,{icon:u.IJ7,spin:!0}),r.createElement("span",{className:(0,a.default)("badge",s)},"Laden..."))}))},575552:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(667294),a="quillEditor_NxYB",i="quillAnswer_J46I",s="monospace_usc_",l="disableToolbar_bRdP",o=t(386010),u=t(471217),c=t(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),h=function(e){var n=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),n.push(t)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),n.push(r)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),n.push(a)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),n.push(i)}if(e.formula||e.image){var s=[];e.formula&&s.push("formula"),e.image&&s.push("image"),n.push(s)}return e.code&&n.push(["code-block"]),n},p=(0,u.Pi)((function(e){var n=r.useState(!1),u=n[0],p=n[1],f=r.useState(!1),g=f[0],b=f[1],v=r.useRef(null),w=e.model,k=function(e){e.preventDefault()};r.useEffect((function(){var n=!0;return function(e,n){if(void 0===n&&(n={}),d)return e();var r=[Promise.all([t.e(97762),t.e(18446),t.e(80324),t.e(76095),t.e(71167)]).then(t.t.bind(t,771167,23)),t.e(76095).then(t.t.bind(t,676095,23)),t.e(17891).then(t.t.bind(t,817891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};n.formula&&!window.katex&&(a.katex=r.length,r.push(t.e(41008).then(t.bind(t,541008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,250037)))),Promise.all(r).then((function(n){d=n[a["react-quill"]].default;var t=n[a.quill].default,r=n[a["react-image-compress"]].default;if("katex"in a){var i=n[a.katex].default;window.katex=i}t.register("modules/imageCompress",r),e()}))}((function(){n&&(b(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){n=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&g&&w.loaded?r.createElement("div",{onFocus:function(){return!u&&p(!0)},className:(0,o.default)(a)},r.createElement(d,{ref:v,theme:"snow",readOnly:e.readonly||w.readonly,className:(0,o.default)(i,e.monospace&&s,u?void 0:l),value:w.text||"",onChange:function(n,t,r,a){var i,s;i=n,void 0===s&&(s=0),!e.readonly&&w.canUpdate&&g&&w.setText(i)},modules:{toolbar:e.toolbar?h(e.toolbar):[].concat(m,h(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(c.Z,null)}))},401162:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var r=t(583117),a=t(480102),i=(t(667294),t(603905)),s=t(430575),l=t(682593),o=["components"],u={title:"Sichere Passw\xf6rter"},c="Sichere Passw\xf6rter",d={unversionedId:"Kryptologie/Hashfunktionen/passwords",id:"version-24f/Kryptologie/Hashfunktionen/passwords",title:"Sichere Passw\xf6rter",description:"--width=500px",source:"@site/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/02-passwords.md",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/passwords",permalink:"/24f/Kryptologie/Hashfunktionen/passwords",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/02-passwords.md",tags:[],version:"24f",sidebarPosition:2,frontMatter:{title:"Sichere Passw\xf6rter"},sidebar:"version-24f/sidebar",previous:{title:"Authentifizierung",permalink:"/24f/Kryptologie/Hashfunktionen/Authentifizierung"},next:{title:"Passw\xf6rter Speichern",permalink:"/24f/Kryptologie/Hashfunktionen/save-passwords"}},m={},h=[{value:"Tipps f\xfcr gute Passw\xf6rter",id:"tipps-f\xfcr-gute-passw\xf6rter",level:2},{value:"Gute, merkbare Passw\xf6rter",id:"gute-merkbare-passw\xf6rter",level:2},{value:"1. Anfangsbuchstaben",id:"1-anfangsbuchstaben",level:3},{value:"2. Vier zuf\xe4llige W\xf6rter",id:"2-vier-zuf\xe4llige-w\xf6rter",level:3},{value:"3. Passwortmanager \ud83c\udfc5",id:"3-passwortmanager-",level:3}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},f=p("Figure"),g=p("SourceRef"),b={toc:h};function v(e){var n=e.components,u=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,u,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sichere-passw\xf6rter"},"Sichere Passw\xf6rter"),(0,i.kt)(f,{options:{width:"500px"},mdxType:"Figure"},(0,i.kt)("img",{alt:"--width=500px",src:t(161036).Z,width:"740",height:"601"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)(g,{parentName:"figcaption",bib:{author:"XKCD",source:"https://xkcd.com/936/",licence:"Creative Commons 2",licence_url:"https://creativecommons.org/licenses/by-nc/2.5/",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(s.Z,{mdxType:"PasswordChecker"}),(0,i.kt)("h2",{id:"tipps-f\xfcr-gute-passw\xf6rter"},"Tipps f\xfcr gute Passw\xf6rter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"W\xe4hlen Sie f\xfcr jede Webseite ein individuelles Passwort"),(0,i.kt)("li",{parentName:"ul"},"Das Passwort ist mindestens 8 Zeichen lang"),(0,i.kt)("li",{parentName:"ul"},"Es kommen Buchstaben (gross und klein), Zahlen und Sonderzeichen vor")),(0,i.kt)("h2",{id:"gute-merkbare-passw\xf6rter"},"Gute, merkbare Passw\xf6rter"),(0,i.kt)("p",null,"Es gibt Strategien, um gute Passw\xf6rter zu erstellen, die man sich einfach merken kann."),(0,i.kt)("h3",{id:"1-anfangsbuchstaben"},"1. Anfangsbuchstaben"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Jeden Abend vor dem Schlafen trinke ich eine Tasse Kr\xe4utertee!")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"JA4dStieTKt!"))),(0,i.kt)("h3",{id:"2-vier-zuf\xe4llige-w\xf6rter"},"2. Vier zuf\xe4llige W\xf6rter"),(0,i.kt)("p",null,"W\xe4hlen Sie vier zuf\xe4llige W\xf6rter. Verwenden Sie beispielsweise einen ",(0,i.kt)("a",{parentName:"p",href:"https://capitalizemytitle.com/zufallswort-generator/"},"Webdienst")," dazu.\n\xdcberlegen Sie sich anschliessend eine Visualisierung, mit welcher Sie sich diese W\xf6rter merken k\xf6nnen."),(0,i.kt)("p",null,"Weiter k\xf6nnen Buchstaben durch Sonderzeichen und Zahlen ersetzt werden, z.B. jedes 2te ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," wird zu einer ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", oder alle ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," werden als ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," geschrieben."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wahrscheinlich, Utopisch, Futurlos, Propeller")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Wahr$chein1ichUt0pi$chFuturl0$Pr0pe1ler")),(0,i.kt)("h3",{id:"3-passwortmanager-"},"3. Passwortmanager \ud83c\udfc5"),(0,i.kt)("p",null,"Am sichersten ist es, zuf\xe4llige Passw\xf6rter zu verwenden, welche Sie in einem Passwortmanager verwalten.\nSo m\xfcssen Sie sich nur ein (sicheres!) Passwort merken; dasjenige f\xfcr den Passwortmanager.\nIm Manager k\xf6nnen Sie f\xfcr jeden Dienst automatisch ein sicheres Passwort erzeugen lassen.\nF\xfcr g\xe4ngige Passwort-Manager gibt es auch Browser-Plugins, welche das Ausf\xfcllen von Passw\xf6rtern unterst\xfctzen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bitwarden.com/"},"BitWarden")," (\ud83c\udfc5 Empfehlung) - gute Basis-Funktionen und einfaches Handling, zudem Open Source (Kerckhoffs Prinzip \ud83d\ude09)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://keepass.info/"},"KeePass")," - auch Open Source"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.lastpass.com/"},"LastPass"))),(0,i.kt)(l.Z,{type:"text",webKey:"9568cbe5-e9dc-4471-9e5e-03ebf92aa10a",placeholder:"Notizen...",mdxType:"Answer"}))}v.isMDXComponent=!0},197566:function(e,n){n.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},161036:function(e,n,t){n.Z=t.p+"assets/images/xkcd_password_strength-eb683b06e819cdf273fffc96247a5775.png"}}]);