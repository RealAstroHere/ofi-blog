"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[87416],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},682593:function(e,t,n){n.d(t,{x:function(){return S},Z:function(){return O}});var r=n(667294),i=n(403435),a={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),o=n(471217),u=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),s=function(e){var t=e.value,n=t,i=void 0;if(u.test(t)){var l=function(e){if(u.test(e))return e.match(u).groups.klass}(t);i=a[l],n=""+t.replace(u,"")}return r.createElement("option",{value:t,className:i},n)},c=n(592814),d=n(51436),m=n(168949),p=n(972389),f=n(121314),h=n(274322),g=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return a[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},b=(0,o.Pi)((function(e){var t,n=(0,p.Z)(),i=r.useState("unchecked"),o=i[0],u=i[1],g=(0,f.oR)("documentStore").find(e.webKey),b=function(e){g.loaded&&(u("unchecked"),g.setData({value:e,type:"string"}))},v=function(t){if(e.checker)return u(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};u(n(t)===n(e.solution)?"correct":"wrong")};return r.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&v(g.value)}))}),[g]),r.useEffect((function(){g.loaded&&v(g.value)}),[g,n]),n?g.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return b(e.target.value)},style:{width:e.width},value:g.value,className:k(g.value),disabled:!g.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return b(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&r.createElement("button",{onClick:function(){return v(g.value)},className:(0,l.default)(a[o],a.checkButton)},r.createElement(c.G,{icon:(t=o,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):r.createElement(h.Z,null):r.createElement("div",null,"SSR")})),v=(0,i.Z)(/\x2D\x2D(\w+)$/,{klass:1}),y=function(e){return a[function(e){if(v.test(e))return e.match(v).groups.klass}(e)]},w=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var r=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:r}))};return t.loaded?r.createElement("div",{className:a.answer},e.label&&r.createElement("label",null,e.label),t.data.value.map((function(i,a){return e.select?r.createElement("select",{key:a,onChange:function(e){return n(e.target.value,a)},value:i,className:y(i),disabled:!t.loaded},e.select.map((function(e,t){return r.createElement(s,{value:e,key:t})}))):r.createElement("input",{key:a,type:"text",onChange:function(e){return n(e.target.value,a)},value:i,disabled:!t.loaded||t.readonly})}))):r.createElement(h.Z,null)})),N=n(583117),E=n(575552),z=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore").find(e.webKey);return t.loaded?r.createElement("div",null,e.label&&r.createElement("h6",null,e.label),r.createElement(E.Z,(0,N.Z)({model:t},e))):r.createElement(h.Z,null)})),x=n(647271),P=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?r.createElement("div",null,r.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),_=n(697762),S=function(e){return e.replace(/\s+/g,"").toUpperCase()},O=(0,o.Pi)((function(e){var t=(0,f.oR)("documentStore"),n=(0,f.oR)("msalStore"),i=t.find(e.webKey),a=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||_.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),a?i?r.createElement("div",{"data--web-key":e.webKey},r.createElement(x.Z,null),n.loggedIn&&r.createElement(P,{webKey:e.webKey}),"text"===e.type&&r.createElement(z,e),"string"===e.type&&r.createElement(b,e),"array"===e.type&&r.createElement(w,e)):r.createElement(h.Z,null):r.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),i="noLoginAlert_HRfh",a=n(239960),l=n(471217),o=n(121314),u=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:r.createElement("div",{className:i},r.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",r.createElement(a.Z,{to:"/login"},"Login"))}))},274322:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(667294),i=n(386010),a="loader_FEpR",l="badge_oWqf",o=n(471217),u=n(592814),s=n(51436),c=(0,o.Pi)((function(){return r.createElement("div",{className:(0,i.default)(a)},r.createElement(u.G,{icon:s.IJ7,spin:!0}),r.createElement("span",{className:(0,i.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(667294),i="quillEditor_NxYB",a="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",u=n(386010),s=n(471217),c=n(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var r=[];e.h1&&r.push(1),e.h2&&r.push(2),e.h3&&r.push(3),r.push(!1),t.push(r)}if(e.color||e.background){var i=[];e.color&&i.push({color:[]}),e.background&&i.push({background:[]}),t.push(i)}if(e.ul||e.ol){var a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},f=(0,s.Pi)((function(e){var t=r.useState(!1),s=t[0],f=t[1],h=r.useState(!1),g=h[0],k=h[1],b=r.useRef(null),v=e.model,y=function(e){e.preventDefault()};r.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var r=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],i={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(i.katex=r.length,r.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(r).then((function(t){d=t[i["react-quill"]].default;var n=t[i.quill].default,r=t[i["react-image-compress"]].default;if("katex"in i){var a=t[i.katex].default;window.katex=a}n.register("modules/imageCompress",r),e()}))}((function(){t&&(k(!0),b&&b.current&&b.current.editor.getModule("toolbar").container.addEventListener("mousedown",y))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,b&&b.current&&b.current.editor.getModule("toolbar").container.removeEventListener("mousedown",y)}}),[e]);return d&&g&&v.loaded?r.createElement("div",{onFocus:function(){return!s&&f(!0)},className:(0,u.default)(i)},r.createElement(d,{ref:b,theme:"snow",readOnly:e.readonly||v.readonly,className:(0,u.default)(a,e.monospace&&l,s?void 0:o),value:v.text||"",onChange:function(t,n,r,i){var a,l;a=t,void 0===l&&(l=0),!e.readonly&&v.canUpdate&&g&&v.setText(a)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement(c.Z,null)}))},639579:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(583117),i=n(480102),a=(n(667294),n(603905)),l=n(682593),o=["components"],u={title:"Authentifizierung"},s="Authentifizierung [^1]",c={unversionedId:"Kryptologie/Hashfunktionen/Authentifizierung",id:"version-24f/Kryptologie/Hashfunktionen/Authentifizierung",title:"Authentifizierung",description:"Authentifizierung (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person authentisiert sich dabei.",source:"@site/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",sourceDirName:"06-Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/Authentifizierung",permalink:"/24f/Kryptologie/Hashfunktionen/Authentifizierung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/05-Hashfunktionen/01-Authentifizierung.mdx",tags:[],version:"24f",sidebarPosition:1,frontMatter:{title:"Authentifizierung"},sidebar:"version-24f/sidebar",previous:{title:"Hashfunktionen",permalink:"/24f/category/hashfunktionen"},next:{title:"Sichere Passw\xf6rter",permalink:"/24f/Kryptologie/Hashfunktionen/passwords"}},d={},m=[{value:"Wissen",id:"wissen-1",level:2},{value:"Besitz",id:"besitz-1",level:2},{value:"Merkmal",id:"merkmal-1",level:2}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},f=p("Figure"),h=p("SourceRef"),g={toc:m};function k(e){var t=e.components,u=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentifizierung-"},"Authentifizierung ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Authentifizierung")," (engl. authentication) ist das \xdcberpr\xfcfen einer Berechtigung. Die zu \xfcberpr\xfcfende Person ",(0,a.kt)("strong",{parentName:"p"},"authentisiert")," sich dabei."),(0,a.kt)("p",null,"Es gibt drei verschiedene Wege, wie sich eine Person authentisieren kann:"),(0,a.kt)("div",{style:{},className:"flex flex-cards"},(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(211752).Z,width:"640",height:"360"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(h,{parentName:"figcaption",bib:{author:"Gino Crescoli",source:"https://pixabay.com/images/id-2781614/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},mdxType:"SourceRef"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"wissen"},"Wissen"),(0,a.kt)("p",{parentName:"div"},"Die Person weiss etwas, z.B. ein Passwort oder eine Pin"))),(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(106568).Z,width:"640",height:"360"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(h,{parentName:"figcaption",bib:{author:"Uwe Baumann",source:"https://pixabay.com/images/id-96233/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},mdxType:"SourceRef"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"besitz"},"Besitz"),(0,a.kt)("p",{parentName:"div"},"Die Person besitzt etwas, z.B. eine Kreditkarte oder einen Schl\xfcssel."))),(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,a.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:n(252919).Z,width:"640",height:"360"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)(h,{parentName:"figcaption",bib:{author:"Abdullah Boraik",source:"https://pixabay.com/images/id-3072296/",licence:"Creative Commons CC0",licence_url:"https://creativecommons.org/publicdomain/zero/1.0/",edited:!1},mdxType:"SourceRef"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("h4",{parentName:"div",id:"merkmal"},"Merkmal"),(0,a.kt)("p",{parentName:"div"},"Die Person wird \xfcber k\xf6rperliches Merkmal identifiziert, z.B. einen Fingerabdruck oder die Iris.")))),(0,a.kt)("p",null,"Jede dieser drei Methoden hat Vor- und Nachteile. Um die Nachteile auszugleichen kann eine sogenannte ",(0,a.kt)("strong",{parentName:"p"},"Zwei-Faktor-Authentifizierung")," verwendet werden, welche sich gleichzeitig auf zwei der drei Methoden abst\xfctzt."),(0,a.kt)("h2",{id:"wissen-1"},"Wissen"),(0,a.kt)("p",null,"Mit dieser Methode authentisiert sich die Person, indem sie eine bestimmte Information ",(0,a.kt)("strong",{parentName:"p"},"weiss"),", beispielsweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ein Passwort,"),(0,a.kt)("li",{parentName:"ul"},"eine Zahlenkombination f\xfcr ein Fahrradschloss,"),(0,a.kt)("li",{parentName:"ul"},"ein pers\xf6nliche Identifikationsnummer (PIN) oder"),(0,a.kt)("li",{parentName:"ul"},"die Antwort auf eine Sicherheitsfrage.")),(0,a.kt)("p",null,"Die Information muss vor der Authentifizierung vereinbart worden sein. Wenn die Information erraten oder abgefangen worden ist, kann sie problemlos ge\xe4ndert werden."),(0,a.kt)("p",null,"Diese Authentifizierungsmethode hat folgende Schwachpunkte:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Information kann vergessen werden."),(0,a.kt)("li",{parentName:"ul"},"Sie kann erraten oder abgefangen werden.")),(0,a.kt)("h2",{id:"besitz-1"},"Besitz"),(0,a.kt)("p",null,"Diese Methode \xfcberpr\xfcft, ob die Person einen bestimmten Gegenstand ",(0,a.kt)("strong",{parentName:"p"},"besitzt"),". Typische Gegenst\xe4nde sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schl\xfcssel"),(0,a.kt)("li",{parentName:"ul"},"Chipkarten (z.B. Bankkarten)"),(0,a.kt)("li",{parentName:"ul"},"SIM-Karte"),(0,a.kt)("li",{parentName:"ul"},"Smartphone")),(0,a.kt)("p",null,"Solche Gegenst\xe4nde m\xfcssen ",(0,a.kt)("strong",{parentName:"p"},"eindeutig identifizierbar")," sein, deshalb ist die Erstellung oder das Ersetzen mit Kosten verbunden."),(0,a.kt)("p",null,"Diese Methode hat folgende Schwachpunkte:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Gegenstand kann verloren gehen oder gestohlen werden."),(0,a.kt)("li",{parentName:"ul"},"Er kann gef\xe4lscht werden.")),(0,a.kt)("h2",{id:"merkmal-1"},"Merkmal"),(0,a.kt)("p",null,"Die Person kann auch \xfcber ein k\xf6perliches oder biometrisches Merkmal identifiziert werden. Es werden viele unterschiedliche Merkmale verwendet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handschrift"),(0,a.kt)("li",{parentName:"ul"},"Fingerabdruck"),(0,a.kt)("li",{parentName:"ul"},"Gesichtsform"),(0,a.kt)("li",{parentName:"ul"},"Tippverhalten"),(0,a.kt)("li",{parentName:"ul"},"Stimme"),(0,a.kt)("li",{parentName:"ul"},"Iris"),(0,a.kt)("li",{parentName:"ul"},"Retina"),(0,a.kt)("li",{parentName:"ul"},"Venenmuster"),(0,a.kt)("li",{parentName:"ul"},"Erbinformation (DNS)")),(0,a.kt)("p",null,"Die biometrische Authentifizierung ist sehr bequem, da keine Gegenst\xe4nde mitgef\xfchrt und keine Informationen gemerkt werden m\xfcssen."),(0,a.kt)("p",null,"Viele biometrische Merkmale sind jedoch \xf6ffentlich zug\xe4nglich und einfach f\xe4lschbar. Dadurch sind Authentifizierungsmethoden wie Fingerabdruck- oder Gesichtserkennung sehr unsicher."),(0,a.kt)(l.Z,{type:"text",webKey:"16d7b0eb-9f50-4571-9edf-c7647ebfb53d",placeholder:"Notizen...",mdxType:"Answer"}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/2-security/2-authentication/"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},252919:function(e,t,n){t.Z=n.p+"assets/images/eye-c0fed789d1f5582b4f95247ffd6a68cb.jpg"},106568:function(e,t,n){t.Z=n.p+"assets/images/keys-0f24801bad086e1e23028d7fe6bcedce.jpg"},211752:function(e,t,n){t.Z=n.p+"assets/images/password-a69419d8d9811db7fc00737a889a4ff7.jpg"}}]);