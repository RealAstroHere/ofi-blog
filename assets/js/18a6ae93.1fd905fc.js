"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[48344],{682593:function(e,t,a){a.d(t,{x:function(){return v},Z:function(){return E}});var n=a(667294),r=a(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},s=a(386010),l=a(471217),m=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,a=t,r=void 0;if(m.test(t)){var s=function(e){if(m.test(e))return e.match(m).groups.klass}(t);r=i[s],a=""+t.replace(m,"")}return n.createElement("option",{value:t,className:r},a)},o=a(592814),g=a(51436),u=a(168949),d=a(972389),p=a(121314),N=a(274322),I=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),M=function(e){return i[function(e){if(I.test(e))return e.match(I).groups.klass}(e)]},k=(0,l.Pi)((function(e){var t,a=(0,d.Z)(),r=n.useState("unchecked"),l=r[0],m=r[1],I=(0,p.oR)("documentStore").find(e.webKey),k=function(e){I.loaded&&(m("unchecked"),I.setData({value:e,type:"string"}))},h=function(t){if(e.checker)return m(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};m(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,u.U5)((function(){return I.loaded}),(function(e){e&&h(I.value)}))}),[I]),n.useEffect((function(){I.loaded&&h(I.value)}),[I,a]),a?I.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return k(e.target.value)},style:{width:e.width},value:I.value,className:M(I.value),disabled:!I.loaded},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return k(e.target.value)},value:I.value,disabled:!I.loaded||I.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return h(I.value)},className:(0,s.default)(i[l],i.checkButton)},n.createElement(o.G,{icon:(t=l,"correct"===t?g.f8k:"wrong"===t?g.nYk:g.sph)}))):n.createElement(N.Z,null):n.createElement("div",null,"SSR")})),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),C=function(e){return i[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},f=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);var n=[].concat(t.data.value.slice(0,a),[e],t.data.value.slice(a+1));t.setData(Object.assign({},t.data,{value:n}))};return t.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return a(e.target.value,i)},value:r,className:C(r),disabled:!t.loaded},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return a(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):n.createElement(N.Z,null)})),b=a(583117),y=a(575552),w=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(y.Z,(0,b.Z)({model:t},e))):n.createElement(N.Z,null)})),D=a(647271),x=(0,l.Pi)((function(e){return(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,s.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),A=a(697762),v=function(e){return e.replace(/\s+/g,"").toUpperCase()},E=(0,l.Pi)((function(e){var t=(0,p.oR)("documentStore"),a=(0,p.oR)("msalStore"),r=t.find(e.webKey),i=(0,d.Z)();return(0,p.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||A.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(D.Z,null),a.loggedIn&&n.createElement(x,{webKey:e.webKey}),"text"===e.type&&n.createElement(w,e),"string"===e.type&&n.createElement(k,e),"array"===e.type&&n.createElement(f,e)):n.createElement(N.Z,null):n.createElement("div",null,"SSR")}))},647271:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(667294),r="noLoginAlert_HRfh",i=a(239960),s=a(471217),l=a(121314),m=(0,s.Pi)((function(){return(0,l.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.Z,{to:"/login"},"Login"))}))},669014:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(403435),r=a(386010),i=a(667294),s={bit:"bit_TKsr",on:"on_Gc1_",charHistory:"charHistory__gY3",cable:"cable_RfeZ",off:"off_hKYl",bitContainer:"bitContainer_bA2H",svgContainer:"svgContainer_ZfG3",out:"out_fofC",sentBits:"sentBits_FAYg",first:"first_VPza",processed:"processed_up44",octet:"octet_Y1qi"},l=a(197566),m=a(376030),c=["title","titleId"];function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=function(e){var t=e.title,a=e.titleId,n=g(e,c);return i.createElement("svg",o({viewBox:"0 0 500 450",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,i.createElement("path",{style:{fill:"transparent",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:4,stroke:"#000",paintOrder:"fill"},d:"M434.055 80.455c.339.059-152.586-1.51-196.471-.273-82.386 2.322-89.439 22.004-100.53 42.758-14.311 26.781 5.825 58.009 47.186 65.986 59.245 11.426.375.639 58.91 10.895 109.13 19.12.575.236 109.833 18.975 68.99 11.833 77.441 107.219 35.431 144.445-33.505 29.691-69.634 58.914-191.461 59.425-.349.001-88.743-.963-89.26-1.683"}))},d=function(e){e&&e.forEach((function(e){e&&m.Z.remove(e)}))},p=function(e){e.forEach((function(e){e&&e.pause()}))},N=function(e){e.forEach((function(e){e&&e.play()}))},I=["button","button--sm","button--primary","button--outline"],M=function(e){var t=e.match((0,n.Z)(/(1{0,4}0)/,{control:1}));return t?t.groups.control.length:0},k=function(){var e=i.useState("idle"),t=e[0],a=e[1],n=i.useRef(null),c=i.useState("latin1"),o=c[0],g=c[1],k=i.useRef([]),h=i.useRef(null),C=i.useState([]),f=C[0],b=C[1],y=i.useState("01010010 01100101 01110100 01101111"),w=y[0],D=y[1],x=i.useState([]),A=x[0],v=x[1],E=i.useState({top:0,left:0}),z=E[0],T=E[1],j=i.useState(""),L=j[0],Z=j[1],O=i.useState([]),S=O[0],U=O[1],B=i.useState(-1),H=B[0],P=B[1],Y=i.useState(null),R=Y[0],W=Y[1],F=i.useState(!1),J=F[0],G=F[1];return i.useEffect((function(){D("latin1"===o?"01010010 01100101 01110100 01101111":"11100010 10101101 10010000")}),[o]),i.useEffect((function(){if(n.current!==t)switch(n.current=t,R&&"running"!==t&&clearTimeout(R),t){case"pause":p(f);break;case"continue":N(f),a("running");break;case"running":J&&(G(!1),U([]));break;case"stop":d(k.current),v([]),Z(""),U([]),a("idle");break;case"start":d(k.current);var e=function(e){var t=[],a=e.replace(/\s+/g,"");for(a.length%8!=0&&(a=a.padStart(a.length+a.length%8,"0"));a.length>0;)t.push(a.slice(0,8)),a=a.slice(8);return t}(w);D(e.join(" ")),v([]),Z(""),U([]),setTimeout((function(){Z(e.join(""))}),0),a("running")}}),[t,R,J]),i.useEffect((function(){if(h.current){var e=h.current.querySelector("svg>circle.cable_svg__binDecoderOut");if(e){var t=e.getBoundingClientRect(),a=h.current.getBoundingClientRect();T({left:t.left-a.left,top:t.top-a.top})}}}),[]),i.useEffect((function(){p(f),d(k.current),v([]),Z(""),U([]),a("idle"),R&&clearTimeout(R)}),[o]),i.useEffect((function(){if(k.current&&h.current){var e=h.current.querySelector("svg>path"),t=m.Z.path(e);P(-1);var a=k.current.map((function(e,a){if(e)return(0,m.Z)({targets:[e],translateX:t("x"),translateY:t("y"),rotate:t("angle"),easing:"linear",duration:4e3,delay:90*a+100*Math.floor(a/8),loop:!1,complete:function(e){P(a)}})}));b(a)}}),[k,h,L]),i.useEffect((function(){var e=L.substr(H,1);if(e){var t=[].concat(S);k.current&&k.current[H]&&(k.current[H].style.display="none");var n=S.length>0&&(H+1)%8==0,r=n;if("latin1"===o)t.push(e);else{var i=8*Math.floor(H/8),s=M(L.substr(i,8)),l=M(L.substr(i+8,8));r=r&&(1===s||2!==l),H%8>=s&&t.push(e)}if(U(t),r){p(f);var m=t.join(""),c=parseInt(m,2),g={bin:m,ord:c,char:String.fromCodePoint(c)};v([].concat(A,[g])),G(!0),W(setTimeout((function(){U([]),N(f.slice(H)),G(!1)}),1e3))}else n&&(p(f),W(setTimeout((function(){N(f.slice(H))}),1e3)));H===f.length-1&&a("idle")}}),[H,o]),i.createElement("div",{className:(0,r.default)("hero","shadow--lw",l.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Bin Decoder"),i.createElement("h4",null,"Modus"),i.createElement("div",{className:(0,r.default)("buttongroup",s.modes)},i.createElement("button",{className:r.default.apply(void 0,I.concat(["latin1"===o&&"button--active"])),onClick:function(){return g("latin1")}},"Latin1"),i.createElement("button",{className:r.default.apply(void 0,I.concat(["utf8"===o&&"button--active"])),onClick:function(){return g("utf8")}},"UTF-8")),i.createElement("div",{className:s.inputContainer},i.createElement("textarea",{placeholder:"Bin\xe4re Zeichenkette",className:(0,r.default)(l.Z.input),value:w,onChange:function(e){return D(e.target.value.replace(/[^01\s]/g,"1"))},rows:3}),i.createElement("div",{className:(0,r.default)("buttongroup",s.modes)},["start","idle"].includes(t)?i.createElement("button",{className:r.default.apply(void 0,I),onClick:function(){return a("start")}},"Start"):i.createElement(i.Fragment,null,i.createElement("button",{className:r.default.apply(void 0,I),onClick:function(){return a("running"===t?"pause":"continue")}},"running"===t?"Pause":"Fortsetzen"),i.createElement("button",{className:r.default.apply(void 0,I),onClick:function(){return a("stop")}},"Stop"))),i.createElement("div",{className:(0,r.default)(s.sentBits)},L.split("").map((function(e,t){var a=t>0&&t%8==0;return i.createElement("div",{className:(0,r.default)(s.bit,H>=t&&s.processed,a&&s.first,"1"===e?s.on:s.off),key:t},e)}))),i.createElement("div",null,L.split("").map((function(e,t){return i.createElement("div",{key:t,ref:function(e){return k.current[t]=e},className:(0,r.default)(s.bitContainer)},i.createElement("div",{className:(0,r.default)(s.bit,"1"===e?s.on:s.off)},i.createElement("span",{className:(0,r.default)(s.text)},e)))})),i.createElement("div",{ref:h,className:(0,r.default)(s.svgContainer)},i.createElement(u,{className:(0,r.default)(s.cable)}),i.createElement("div",{className:(0,r.default)(s.out),style:{top:z.top,left:z.left}},i.createElement("textarea",{value:A.map((function(e){return e.char})).join(""),disabled:!0}),i.createElement("div",{className:(0,r.default)(s.octet)},S.map((function(e,t){return i.createElement("div",{className:(0,r.default)(s.bit,"1"===e&&s.on,"0"===e&&s.off),key:t},e)}))),i.createElement("div",{className:(0,r.default)(s.charHistory)},i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Chr"),i.createElement("th",null,"Dec"),i.createElement("th",null,"Bin"))),i.createElement("tbody",null,A.slice().reverse().map((function(e,t){return i.createElement("tr",{key:t},i.createElement("td",null,e.char),i.createElement("td",null,e.ord),i.createElement("td",null,e.bin))})))))))))))}},274322:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(667294),r=a(386010),i="loader_FEpR",s="badge_oWqf",l=a(471217),m=a(592814),c=a(51436),o=(0,l.Pi)((function(){return n.createElement("div",{className:(0,r.default)(i)},n.createElement(m.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",s)},"Laden..."))}))},575552:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",s="monospace_usc_",l="disableToolbar_bRdP",m=a(386010),c=a(471217),o=a(274322),g=void 0,u=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),d=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var s=[];e.formula&&s.push("formula"),e.image&&s.push("image"),t.push(s)}return e.code&&t.push(["code-block"]),t},p=(0,c.Pi)((function(e){var t=n.useState(!1),c=t[0],p=t[1],N=n.useState(!1),I=N[0],M=N[1],k=n.useRef(null),h=e.model,C=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),g)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,771167,23)),a.e(76095).then(a.t.bind(a,676095,23)),a.e(17891).then(a.t.bind(a,817891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,541008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,250037)))),Promise.all(n).then((function(t){g=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}a.register("modules/imageCompress",n),e()}))}((function(){t&&(M(!0),k&&k.current&&k.current.editor.getModule("toolbar").container.addEventListener("mousedown",C))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,k&&k.current&&k.current.editor.getModule("toolbar").container.removeEventListener("mousedown",C)}}),[e]);return g&&I&&h.loaded?n.createElement("div",{onFocus:function(){return!c&&p(!0)},className:(0,m.default)(r)},n.createElement(g,{ref:k,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,m.default)(i,e.monospace&&s,c?void 0:l),value:h.text||"",onChange:function(t,a,n,r){var i,s;i=t,void 0===s&&(s=0),!e.readonly&&h.canUpdate&&I&&h.setText(i)},modules:{toolbar:e.toolbar?d(e.toolbar):[].concat(u,d(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(o.Z,null)}))},678942:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return g},default:function(){return M},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n,r=a(583117),i=a(480102),s=(a(667294),a(603905)),l=a(669014),m=a(682593),c=["components"],o={title:"5. UTF-8"},g=void 0,u={unversionedId:"Codierung/Zeichencodierung/UTF8",id:"version-25h/Codierung/Zeichencodierung/UTF8",title:"5. UTF-8",description:"5. UTF-8",source:"@site/versioned_docs/version-25h/05-Codierung/01-Zeichencodierung/05-UTF8.mdx",sourceDirName:"05-Codierung/01-Zeichencodierung",slug:"/Codierung/Zeichencodierung/UTF8",permalink:"/25h/Codierung/Zeichencodierung/UTF8",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/05-Codierung/01-Zeichencodierung/05-UTF8.mdx",tags:[],version:"25h",sidebarPosition:5,frontMatter:{title:"5. UTF-8"},sidebar:"version-25h/sidebar",previous:{title:"4. Unicode / UTF-8",permalink:"/25h/Codierung/Zeichencodierung/Unicode"},next:{title:"6. \xdcbungen",permalink:"/25h/Codierung/Zeichencodierung/Uebungen"}},d={},p=[{value:"5. UTF-8",id:"5-utf-8",level:3},{value:"Ausprobieren",id:"ausprobieren",level:2},{value:"Mehrstufige Codierung ",id:"mehrstufige-codierung-",level:2}],N=(n="Figure",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),I={toc:p};function M(e){var t=e.components,n=(0,i.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"5-utf-8"},"5. UTF-8"),(0,s.kt)("p",null,"Werden Unicode-Zeichen ins bin\xe4re \xfcbersetzt wird klar, dass diese Zahlen nicht mehr nur mit einem Byte dargestellt werden k\xf6nnen. Beispielsweise ist dem Affen-Emoji \ud83d\udc12 die Zahl ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"12801"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msub"},"8"),(0,s.kt)("mn",{parentName:"msub"},"10"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"128018_{10}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.79444em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," zugewiesen, was der Bin\xe4rzahl ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"00000001"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005"),(0,s.kt)("mn",{parentName:"mrow"},"11110100"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005"),(0,s.kt)("mn",{parentName:"mrow"},"0001001"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msub"},"0"),(0,s.kt)("mn",{parentName:"msub"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"00000001\\:11110100\\:00010010_{2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.79444em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"}))))))))))," entspricht, also ",(0,s.kt)("inlineCode",{parentName:"p"},"3")," Bytes Speicherplatz ben\xf6tigt."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"UTF-8")," ist ein Code, der Unicode-Zeichen in Bitmuster \xfcbersetzt. Ein Unicode-Zeichen wird mit ein bis vier Bytes (daher 8-32 bit) dargestellt. Die folgende Tabelle zeigt, wie die Codierung funktioniert:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"right"},"Unicode-Bereich"),(0,s.kt)("th",{parentName:"tr",align:"right"},"Bitmuster"),(0,s.kt)("th",{parentName:"tr",align:"right"},"Anzahl Bit"),(0,s.kt)("th",{parentName:"tr",align:"right"},"Byte 1: Anzahl Kontroll-Bits"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"0 bis 127"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"0xxxxxxx")),(0,s.kt)("td",{parentName:"tr",align:"right"},"7"),(0,s.kt)("td",{parentName:"tr",align:"right"},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"128 bis 2047"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"110xxxxx 10xxxxxx")),(0,s.kt)("td",{parentName:"tr",align:"right"},"11"),(0,s.kt)("td",{parentName:"tr",align:"right"},"3")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"2048 bis 65535"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"1110xxxx 10xxxxxx 10xxxxxx")),(0,s.kt)("td",{parentName:"tr",align:"right"},"16"),(0,s.kt)("td",{parentName:"tr",align:"right"},"4")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"ab 65536"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"11110xxx 10xxxxxx 10xxxxxx 10xxxxxx")),(0,s.kt)("td",{parentName:"tr",align:"right"},"21"),(0,s.kt)("td",{parentName:"tr",align:"right"},"5")))),(0,s.kt)("p",null,"Unicode-Zeichen mit einer Nummer zwischen 0 und 127 werden mit einem Byte dargestellt, welches mit ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," beginnt. Somit ist UTF-8 in diesem Bereich identisch mit ASCII (und Latin 1)."),(0,s.kt)("p",null,"F\xfcr die anderen Zeichen wird mehr als ein Byte verwendet. Dabei beginnt jedes Byte mit einer oder mehreren ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),", gefolgt von einer ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),". Die Anzahl ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," im ersten Byte definieren, wie viele Bytes f\xfcr das Zeichen verwendet werden. Die folgenden Bytes werden mit ",(0,s.kt)("inlineCode",{parentName:"p"},"10")," markiert. Die ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," werden mit der Bin\xe4rdarstellung der Unicode-Nummer aufgef\xfcllt."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"right"},"Zeichen"),(0,s.kt)("th",{parentName:"tr",align:"right"},"Nummer"),(0,s.kt)("th",{parentName:"tr",align:"right"},"Bitmuster"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"A"),(0,s.kt)("td",{parentName:"tr",align:"right"},"65"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"01000001"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"\xe4"),(0,s.kt)("td",{parentName:"tr",align:"right"},"228"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"11000011 10100100"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Schwarze Sonne mit Strahlen \u2600"),(0,s.kt)("td",{parentName:"tr",align:"right"},"9728"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"11100010 10011000 10000000"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Affe \ud83d\udc12"),(0,s.kt)("td",{parentName:"tr",align:"right"},"128018"),(0,s.kt)("td",{parentName:"tr",align:"right"},(0,s.kt)("inlineCode",{parentName:"td"},"11110000 10011111 10010000 10010010"))))),(0,s.kt)("p",null,"Der Vorteil dieser Codierung ist, dass am Beginn eines Bytes erkannt wird, ob es sich um den Anfang die Fortsetzung eines Zeichens handelt."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"right"},"Beginn"),(0,s.kt)("th",{parentName:"tr",align:"right"},"Bedeutung"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"0\u2026"),(0,s.kt)("td",{parentName:"tr",align:"right"},"ASCII-Zeichen")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"10\u2026"),(0,s.kt)("td",{parentName:"tr",align:"right"},"Fortsetzung eines Zeichens mit mehreren Bytes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"110\u2026"),(0,s.kt)("td",{parentName:"tr",align:"right"},"Beginn eines Zeichens mit zwei Bytes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"1110\u2026"),(0,s.kt)("td",{parentName:"tr",align:"right"},"Beginn eines Zeichens mit drei Bytes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"11110\u2026"),(0,s.kt)("td",{parentName:"tr",align:"right"},"Beginn eines Zeichens mit vier Bytes")))),(0,s.kt)("p",null,"Dies wird deutlich, wenn man dies als Bin\xe4rbaum darstellt:"),(0,s.kt)(N,{options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"UTF-8 Pr\xe4fix",src:a(174536).Z,width:"352",height:"272"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"UTF-8 Pr\xe4fix",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)("h2",{id:"ausprobieren"},"Ausprobieren"),(0,s.kt)(l.Z,{mdxType:"BinDecoder"}),(0,s.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,s.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Codieren Sie Ihre zwei lieblings Emojis als UTF-8 Bin\xe4r-Kette. Verwenden Sie dazu die Hilfe von Python."),(0,s.kt)(m.Z,{type:"text",webKey:"91f5e478-a09b-495f-93a4-d7169ae34fdc",mdxType:"Answer"}))),(0,s.kt)("h2",{id:"mehrstufige-codierung-"},"Mehrstufige Codierung ",(0,s.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("p",null,"Oft werden Informationen mehrstufig codiert. So wird beispielsweise die Information \xabIch bin m\xfcde.\xbb als Emoji dargestellt. Das Handy ordnet dem Emoji die entsprechende Unicode-Nummer zu. Diese wird mit UTF-8 in eine Bitfolge \xfcbersetzt, welche \xfcber das Mobilfunknetz \xfcbermittelt wird."),(0,s.kt)("p",null,"Das Handy des Empf\xe4ngers \xfcbersetzt die Bitfolge wieder zur\xfcck in eine Unicode-Nummer und das entsprechende Emoji. Die Interpretation des Emojis muss vom Empf\xe4nger selbst vorgenommen werden."),(0,s.kt)(N,{options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"Unicode zu UTF-8",src:a(129039).Z,width:"640",height:"480"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Unicode zu UTF-8",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Remix ",(0,s.kt)("a",{parentName:"li",href:"https://rothe.io/?page=code/3-text/5-code/"},"rothe.io"),(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}M.isMDXComponent=!0},197566:function(e,t){t.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},129039:function(e,t,a){t.Z=a.p+"assets/images/unicode-bc37ec32b4ed168997cc95c70475b7c7.svg"},174536:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjM1MnB4IiBoZWlnaHQ9IjI3MnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTkyLDI0QzE5MiwxOS41ODUgMTg4LjQxNSwxNiAxODQsMTZMNzIsMTZDNjcuNTg1LDE2IDY0LDE5LjU4NSA2NCwyNEw2NCw0MEM2NCw0NC40MTUgNjcuNTg1LDQ4IDcyLDQ4TDE4NCw0OEMxODguNDE1LDQ4IDE5Miw0NC40MTUgMTkyLDQwTDE5MiwyNFoiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTAyLjc5NXB4IiB5PSIzOS43NTZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPkFTQ0lJPC90ZXh0PgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTI4OCwxMTlDMjg4LDExNC41ODUgMjg0LjQxNSwxMTEgMjgwLDExMUwxNjgsMTExQzE2My41ODUsMTExIDE2MCwxMTQuNTg1IDE2MCwxMTlMMTYwLDEzNUMxNjAsMTM5LjQxNSAxNjMuNTg1LDE0MyAxNjgsMTQzTDI4MCwxNDNDMjg0LjQxNSwxNDMgMjg4LDEzOS40MTUgMjg4LDEzNUwyODgsMTE5WiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIxNzUuNTgzcHgiIHk9IjEzMi4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPnp3ZWkgQnl0ZXM8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjYzNiwxNDAuNjE4TDE2MCwxMzguNDk3TDE1Ny44NzksMTQ0Ljg2MUwxNTcuODc5LDE0MC42MThMMTUzLjYzNiwxNDAuNjE4WiIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyOCwxNzAuNDk3QzEyOCwxNzAuNDk3IDE1MC43MzUsMTQ3Ljc2MiAxNTcuODc5LDE0MC42MTgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIxMjcuMTdweCIgeT0iMTU3Ljg3MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjEyNS4yMTdweCIgeT0iMjEyLjg3MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MTwvdGV4dD4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjEyMCIgY3k9IjE3OC40OTciIHI9IjgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTU3Ljg3OSwyMTIuMTMzTDE2MCwyMTguNDk3TDE1My42MzYsMjE2LjM3NkwxNTcuODc5LDIxNi4zNzZMMTU3Ljg3OSwyMTIuMTMzWiIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyOCwxODYuNDk3QzEyOCwxODYuNDk3IDE1MC43MzUsMjA5LjIzMiAxNTcuODc5LDIxNi4zNzYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxNjgiIGN5PSIyMTguNjE5IiByPSI4IiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIwNCwxMjgpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwMS40NTIsMjAxLjE2NEwyMDgsMjAyLjYxOUwyMDIuOTA3LDIwNi45ODVMMjA1LjA5LDIwMy4zNDdMMjAxLjQ1MiwyMDEuMTY0WiIvPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3NiwyMTAuNjE5QzE3NiwyMTAuNjE5IDE5Ny4yMDEsMjA1LjMxOSAyMDUuMDksMjAzLjM0NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMDIuOTA3LDIzMC4yNTNMMjA4LDIzNC42MTlMMjAxLjQ1MiwyMzYuMDc0TDIwNS4wOSwyMzMuODkyTDIwMi45MDcsMjMwLjI1M1oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzYsMjI2LjYxOUMxNzYsMjI2LjYxOSAxOTcuMjAxLDIzMS45MTkgMjA1LjA5LDIzMy44OTIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIxNzUuMTdweCIgeT0iMjA2LjM3NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjE3My44MjJweCIgeT0iMjQ0Ljk5NHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyMHB4OyI+MTwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zMzYsMjMyQzMzNiwyMjcuNTg1IDMzMi40MTUsMjI0IDMyOCwyMjRMMjE2LDIyNEMyMTEuNTg1LDIyNCAyMDgsMjI3LjU4NSAyMDgsMjMyTDIwOCwyNDhDMjA4LDI1Mi40MTUgMjExLjU4NSwyNTYgMjE2LDI1NkwzMjgsMjU2QzMzMi40MTUsMjU2IDMzNiwyNTIuNDE1IDMzNiwyNDhMMzM2LDIzMloiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMjI4LjM1N3B4IiB5PSIyNDUuMDU0cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjIwcHg7Ij52aWVyIEJ5dGVzPC90ZXh0PgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTMzNiwxODRDMzM2LDE3OS41ODUgMzMyLjQxNSwxNzYgMzI4LDE3NkwyMTYsMTc2QzIxMS41ODUsMTc2IDIwOCwxNzkuNTg1IDIwOCwxODRMMjA4LDIwMEMyMDgsMjA0LjQxNSAyMTEuNTg1LDIwOCAyMTYsMjA4TDMyOCwyMDhDMzMyLjQxNSwyMDggMzM2LDIwNC40MTUgMzM2LDIwMEwzMzYsMTg0WiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIyMjUuOTc4cHgiIHk9IjE5Ny4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPmRyZWkgQnl0ZXM8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTA1LjYzNiw4OS4xMjFMMTEyLDg3TDEwOS44NzksOTMuMzY0TDEwOS44NzksODkuMTIxTDEwNS42MzYsODkuMTIxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik04MCwxMTlDODAsMTE5IDEwMi43MzUsOTYuMjY1IDEwOS44NzksODkuMTIxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9Ijc5LjE3cHgiIHk9IjEwNi4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjA8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iNzcuMjE3cHgiIHk9IjE2MS4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjE8L3RleHQ+CiAgICAgICAgPGNpcmNsZSBjeD0iNzIiIGN5PSIxMjciIHI9IjgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTEwOS44NzksMTYwLjYzNkwxMTIsMTY3TDEwNS42MzYsMTY0Ljg3OUwxMDkuODc5LDE2NC44NzlMMTA5Ljg3OSwxNjAuNjM2WiIvPgogICAgICAgIDxwYXRoIGQ9Ik04MCwxMzVDODAsMTM1IDEwMi43MzUsMTU3LjczNSAxMDkuODc5LDE2NC44NzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMjM5Ljk0Niw3MkMyMzkuOTQ2LDY3LjU4NSAyMzYuMzYyLDY0IDIzMS45NDYsNjRMMTIwLDY0QzExNS41ODUsNjQgMTEyLDY3LjU4NSAxMTIsNzJMMTEyLDg4QzExMiw5Mi40MTUgMTE1LjU4NSw5NiAxMjAsOTZMMjMxLjk0Niw5NkMyMzYuMzYyLDk2IDIzOS45NDYsOTIuNDE1IDIzOS45NDYsODhMMjM5Ljk0Niw3MloiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTIzLjAxOXB4IiB5PSI4NS4wNTRweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPkZvcnRzZXR6dW5nPC90ZXh0PgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTTU3LjYzNiw0Mi4xMjFMNjQsNDBMNjEuODc5LDQ2LjM2NEw2MS44NzksNDIuMTIxTDU3LjYzNiw0Mi4xMjFaIi8+CiAgICAgICAgPHBhdGggZD0iTTMyLDcyQzMyLDcyIDU0LjczNSw0OS4yNjUgNjEuODc5LDQyLjEyMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSIzMS4xN3B4IiB5PSI1OS4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjA8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMjkuMjE3cHgiIHk9IjExNC4zNzVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MjBweDsiPjE8L3RleHQ+CiAgICAgICAgPGNpcmNsZSBjeD0iMjQiIGN5PSI4MCIgcj0iOCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDQsMTI4KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNjEuODc5LDExMy42MzZMNjQsMTIwTDU3LjYzNiwxMTcuODc5TDYxLjg3OSwxMTcuODc5TDYxLjg3OSwxMTMuNjM2WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMiw4OEMzMiw4OCA1NC43MzUsMTEwLjczNSA2MS44NzksMTE3Ljg3OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDwvZz4KPC9zdmc+Cg=="}}]);