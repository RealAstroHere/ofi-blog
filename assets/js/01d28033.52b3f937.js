"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[55612],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return I}});var i=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),g=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=g(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=g(n),I=a,m=d["".concat(o,".").concat(I)]||d[I]||u[I]||l;return n?i.createElement(m,r(r({ref:t},s),{},{components:n})):i.createElement(m,r({ref:t},s))}));function I(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var g=2;g<l;g++)r[g]=n[g];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},563160:function(e,t,n){n.d(t,{Z:function(){return A}});var i=n(583117),a=n(667294),l=n(386010),r=n(480102),c=n(972389),o=n(986043),g="details_lb9f",s="isBrowser_bmU9",u="collapsibleContent_i85q",d=["summary","children"];function I(e){return!!e&&("SUMMARY"===e.tagName||I(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}function C(e){var t=e.summary,n=e.children,i=(0,r.Z)(e,d),C=(0,c.Z)(),b=(0,a.useRef)(null),A=(0,o.u)({initialState:!i.open}),p=A.collapsed,N=A.setCollapsed,h=(0,a.useState)(i.open),y=h[0],f=h[1];return a.createElement("details",Object.assign({},i,{ref:b,open:y,"data-collapsed":p,className:(0,l.default)(g,C&&s,i.className),onMouseDown:function(e){I(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;I(t)&&m(t,b.current)&&(e.preventDefault(),p?(N(!1),f(!0)):N(!0))}}),t||a.createElement("summary",null,"Details"),a.createElement(o.z,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),f(!e)}},a.createElement("div",{className:u},n)))}var b="details_BAp3";function A(e){var t=Object.assign({},e);return a.createElement(C,(0,i.Z)({},t,{className:(0,l.default)("alert alert--info",b,t.className)}))}},682593:function(e,t,n){n.d(t,{x:function(){return T},Z:function(){return j}});var i=n(667294),a=n(403435),l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},r=n(386010),c=n(471217),o=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),g=function(e){var t=e.value,n=t,a=void 0;if(o.test(t)){var r=function(e){if(o.test(e))return e.match(o).groups.klass}(t);a=l[r],n=""+t.replace(o,"")}return i.createElement("option",{value:t,className:a},n)},s=n(592814),u=n(51436),d=n(168949),I=n(972389),m=n(121314),C=n(274322),b=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),A=function(e){return l[function(e){if(b.test(e))return e.match(b).groups.klass}(e)]},p=(0,c.Pi)((function(e){var t,n=(0,I.Z)(),a=i.useState("unchecked"),c=a[0],o=a[1],b=(0,m.oR)("documentStore").find(e.webKey),p=function(e){b.loaded&&(o("unchecked"),b.setData({value:e,type:"string"}))},N=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};o(n(t)===n(e.solution)?"correct":"wrong")};return i.useEffect((function(){return(0,d.U5)((function(){return b.loaded}),(function(e){e&&N(b.value)}))}),[b]),i.useEffect((function(){b.loaded&&N(b.value)}),[b,n]),n?b.loaded?i.createElement("div",{className:l.answer},e.label&&i.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&i.createElement("label",null,e.children),e.select?i.createElement("select",{onChange:function(e){return p(e.target.value)},style:{width:e.width},value:b.value,className:A(b.value),disabled:!b.loaded},e.select.map((function(e,t){return i.createElement(g,{value:e,key:t})}))):i.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return p(e.target.value)},value:b.value,disabled:!b.loaded||b.readonly||e.disabled}),(e.solution||e.checker)&&i.createElement("button",{onClick:function(){return N(b.value)},className:(0,r.default)(l[c],l.checkButton)},i.createElement(s.G,{icon:(t=c,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):i.createElement(C.Z,null):i.createElement("div",null,"SSR")})),N=(0,a.Z)(/\x2D\x2D(\w+)$/,{klass:1}),h=function(e){return l[function(e){if(N.test(e))return e.match(N).groups.klass}(e)]},y=(0,c.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var i=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:i}))};return t.loaded?i.createElement("div",{className:l.answer},e.label&&i.createElement("label",null,e.label),t.data.value.map((function(a,l){return e.select?i.createElement("select",{key:l,onChange:function(e){return n(e.target.value,l)},value:a,className:h(a),disabled:!t.loaded},e.select.map((function(e,t){return i.createElement(g,{value:e,key:t})}))):i.createElement("input",{key:l,type:"text",onChange:function(e){return n(e.target.value,l)},value:a,disabled:!t.loaded||t.readonly})}))):i.createElement(C.Z,null)})),f=n(583117),M=n(575552),w=(0,c.Pi)((function(e){var t=(0,m.oR)("documentStore").find(e.webKey);return t.loaded?i.createElement("div",null,e.label&&i.createElement("h6",null,e.label),i.createElement(M.Z,(0,f.Z)({model:t},e))):i.createElement(C.Z,null)})),D=n(647271),v=(0,c.Pi)((function(e){return(0,m.oR)("documentStore").find(e.webKey).saveService.isOffline?i.createElement("div",null,i.createElement("span",{className:(0,r.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),Z=n(697762),T=function(e){return e.replace(/\s+/g,"").toUpperCase()},j=(0,c.Pi)((function(e){var t=(0,m.oR)("documentStore"),n=(0,m.oR)("msalStore"),a=t.find(e.webKey),l=(0,I.Z)();return(0,m.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||Z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),l?a?i.createElement("div",{"data--web-key":e.webKey},i.createElement(D.Z,null),n.loggedIn&&i.createElement(v,{webKey:e.webKey}),"text"===e.type&&i.createElement(w,e),"string"===e.type&&i.createElement(p,e),"array"===e.type&&i.createElement(y,e)):i.createElement(C.Z,null):i.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(667294),a="noLoginAlert_HRfh",l=n(239960),r=n(471217),c=n(121314),o=(0,r.Pi)((function(){return(0,c.oR)("msalStore").loggedIn?null:i.createElement("div",{className:a},i.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",i.createElement(l.Z,{to:"/login"},"Login"))}))},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},l=n(592814),r=n(51436),c=n(386010),o=function(e){return i.createElement("span",{className:a.details},i.createElement("span",{className:(0,c.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,c.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,c.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},i.createElement("span",{className:(0,c.default)("badge badge--secondary")},i.createElement(l.G,{icon:r.Xjp}))))},g=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},s=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+g(n.size)+")",t.maxHeight=g(n.size),delete n.size),n.height&&(t.maxHeight=g(n.height),t.height=g(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+g(n.width)+")",t.width=g(n.width),delete n.width),t=Object.assign({},t,n),i.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return i.createElement(s,e);var t=i.useState(!1),n=(t[0],t[1]),l=i.useState(!1),r=l[0],g=l[1],u=e.caption&&"undefined"!==e.caption,d=e.bib||u;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,c.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,i,a,l,r;t=e.currentTarget.getBoundingClientRect(),i=e.clientX,a=e.clientY,l=t.left<=i&&t.right>=i,r=t.top<=a&&t.bottom>=a,l&&r||n(!1)}},i.createElement(s,e),d&&i.createElement("figcaption",null,u&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,c.default)(a.bib,r?a.visible:void 0),onClick:function(){return g(!r)}},"@"),r&&i.createElement(o,e.bib)))}},61014:function(e,t,n){var i=n(972389),a=n(471217),l=n(667294),r=n(121314),c=n(274322),o=n(563160),g=n(386010),s=n(386720),u=n(592814),d=n(51436),I=function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},l.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},m=(0,a.Pi)((function(e){return l.createElement("span",{className:(0,g.default)(s.Z.policy,"badge","badge--"+e.color)},e.name," ",l.createElement(u.G,{icon:d.nYk,onClick:e.onRemove}))})),C=(0,a.Pi)((function(e){var t=l.useState(""),n=t[0],i=t[1],a=l.useState(""),c=a[0],o=a[1],I=l.useState(""),C=I[0],b=I[1],A=(0,r.oR)("policyStore"),p=(0,r.oR)("userStore"),N=A.findPolicy(e.webKey);return N?l.createElement("div",{className:(0,g.default)(s.Z.configContainer)},l.createElement("div",{className:(0,g.default)(s.Z.showControl)},l.createElement(u.G,{icon:N.isConfigOpen?d.nYk:d.cNd,onClick:function(){N.showConfig(!N.isConfigOpen)}})),N.isConfigOpen&&l.createElement("div",{className:(0,g.default)(s.Z.config)},l.createElement("div",{className:(0,g.default)(s.Z.permissions)},Array.from(N.klasses).map((function(e,t){return l.createElement(m,{key:t,name:e,onRemove:function(){return N.removePermission(e,"class")},color:"success"})})),Array.from(N.groups).map((function(e,t){return l.createElement(m,{key:t,name:e,onRemove:function(){return N.removePermission(e,"group")},color:"danger"})})),Array.from(N.users).map((function(e,t){return l.createElement(m,{key:t,name:e,onRemove:function(){return N.removePermission(e,"user")},color:"primary"})}))),l.createElement("div",{className:(0,g.default)(s.Z.update)},l.createElement("input",{type:"text",placeholder:"Klasse",value:n,onChange:function(e){return i(e.target.value)},disabled:N.locked,list:"solution-policy-for-classes"}),l.createElement("datalist",{id:"solution-policy-for-classes"},p.klasses.map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:N.locked,onClick:function(){N.addPermission(n,"class"),i("")}},"Add"),l.createElement("input",{type:"text",placeholder:"Gruppe",value:c,onChange:function(e){return o(e.target.value)},disabled:N.locked,list:"solution-policy-for-groups"}),l.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(p.groups,A.groups))).map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:N.locked,onClick:function(){N.addPermission(c,"group"),o("")}},"Add"),l.createElement("input",{type:"email",placeholder:"User",value:C,onChange:function(e){return b(e.target.value)},disabled:N.locked,list:"solution-policy-for-users"}),l.createElement("datalist",{id:"solution-policy-for-users"},p.users.map((function(e,t){return l.createElement("option",{key:t,value:e.email})}))),l.createElement("button",{disabled:N.locked,onClick:function(){N.addPermission(C,"user"),b("")}},"Add")))):null})),b=(0,a.Pi)((function(e){var t,n,a=(0,r.oR)("policyStore"),u=(0,r.oR)("userStore"),d=(0,i.Z)();if((0,r.aV)(e.webKey),!d)return l.createElement("div",null,"SSR");var m=a.find(e.webKey);return m?l.createElement("div",{"data--web-key":e.webKey,className:(0,g.default)(s.Z.wrapper,"solution-wrapper")},m.show||null!=(t=u.current)&&t.admin?l.createElement(o.Z,{summary:l.createElement("summary",null,e.title||"L\xf6sung"," ",l.createElement(I,null),!m.show&&l.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,g.default)("alert alert--success",s.Z.solution),open:e.open},(null==(n=u.current)?void 0:n.admin)&&l.createElement(C,{webKey:m.webKey}),e.children):l.createElement("div",{className:(0,g.default)("alert",s.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",l.createElement(I,null))):l.createElement(c.Z,null)}));t.Z=b},274322:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(667294),a=n(386010),l="loader_FEpR",r="badge_oWqf",c=n(471217),o=n(592814),g=n(51436),s=(0,c.Pi)((function(){return i.createElement("div",{className:(0,a.default)(l)},i.createElement(o.G,{icon:g.IJ7,spin:!0}),i.createElement("span",{className:(0,a.default)("badge",r)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(667294),a="quillEditor_NxYB",l="quillAnswer_J46I",r="monospace_usc_",c="disableToolbar_bRdP",o=n(386010),g=n(471217),s=n(274322),u=void 0,d=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),I=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var i=[];e.h1&&i.push(1),e.h2&&i.push(2),e.h3&&i.push(3),i.push(!1),t.push(i)}if(e.color||e.background){var a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var r=[];e.formula&&r.push("formula"),e.image&&r.push("image"),t.push(r)}return e.code&&t.push(["code-block"]),t},m=(0,g.Pi)((function(e){var t=i.useState(!1),g=t[0],m=t[1],C=i.useState(!1),b=C[0],A=C[1],p=i.useRef(null),N=e.model,h=function(e){e.preventDefault()};i.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var i=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],a={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(a.katex=i.length,i.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(i).then((function(t){u=t[a["react-quill"]].default;var n=t[a.quill].default,i=t[a["react-image-compress"]].default;if("katex"in a){var l=t[a.katex].default;window.katex=l}n.register("modules/imageCompress",i),e()}))}((function(){t&&(A(!0),p&&p.current&&p.current.editor.getModule("toolbar").container.addEventListener("mousedown",h))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,p&&p.current&&p.current.editor.getModule("toolbar").container.removeEventListener("mousedown",h)}}),[e]);return u&&b&&N.loaded?i.createElement("div",{onFocus:function(){return!g&&m(!0)},className:(0,o.default)(a)},i.createElement(u,{ref:p,theme:"snow",readOnly:e.readonly||N.readonly,className:(0,o.default)(l,e.monospace&&r,g?void 0:c),value:N.text||"",onChange:function(t,n,i,a){var l,r;l=t,void 0===r&&(r=0),!e.readonly&&N.canUpdate&&b&&N.setText(l)},modules:{toolbar:e.toolbar?I(e.toolbar):[].concat(d,I(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):i.createElement(s.Z,null)}))},822255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return I},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var i=n(583117),a=n(480102),l=(n(667294),n(603905)),r=n(884384),c=n(682593),o=n(61014),g=["components"],s={title:"Verfahren kombinieren"},u="Verfahren kombinieren [^1]",d={unversionedId:"Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",id:"version-24L/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",title:"Verfahren kombinieren",description:"F\xfcr uns ist Wichtig:",source:"@site/versioned_docs/version-24L/06-Kryptologie/06-Digitale-Signaturen/03-Verfahren-kombinieren.md",sourceDirName:"06-Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",permalink:"/24L/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/06-Kryptologie/06-Digitale-Signaturen/03-Verfahren-kombinieren.md",tags:[],version:"24L",sidebarPosition:3,frontMatter:{title:"Verfahren kombinieren"},sidebar:"version-24L/sidebar",previous:{title:"Integrit\xe4t",permalink:"/24L/Kryptologie/Digitale-Signaturen/Integritaet"},next:{title:"Zertifizierungsstellen",permalink:"/24L/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen"}},I={},m=[{value:"Hashwerte",id:"hashwerte",level:2},{value:"Digitale Signaturen richtig verwenden",id:"digitale-signaturen-richtig-verwenden",level:2}],C={toc:m};function b(e){var t=e.components,s=(0,a.Z)(e,g);return(0,l.kt)("wrapper",(0,i.Z)({},C,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"verfahren-kombinieren-"},"Verfahren kombinieren ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("p",null,"F\xfcr uns ist Wichtig:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Die Dokumente sind stets lesbar und trotzdem vor Manipulationen gesch\xfctzt."),(0,l.kt)("li",{parentName:"ul"},"Asymmetrische Verfahren sollen eingesetzt werden, aber nicht zum Verschl\xfcsseln des ganzen Dokuments, weil dies langsam ist.")),(0,l.kt)("p",null,"Aus diesem Grund m\xfcssen wir \u2013 \xe4hnlich wie bei der asymmetrischen Verschl\xfcsselung \u2013 auch bei den digitalen Signaturen \xabnachbessern\xbb, wenn es um den konkreten Einsatz im Alltag geht."),(0,l.kt)("h2",{id:"hashwerte"},"Hashwerte"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hashwerte")," derselben Hashfunktion haben stets ",(0,l.kt)("strong",{parentName:"p"},"dieselbe L\xe4nge"),". Sie sind im Vergleich zum eingegebenen Text sehr kurz (wie der Fingerabdruck eines Menschen sehr klein ist im Vergleich zu all dem, was den Menschen mit diesem Fingerabdruck ausmacht)."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Anstelle des gesamten Textes signieren wir nur den Hashwert, das beseitigt die beiden obengenannten Nachteile.")),(0,l.kt)("h2",{id:"digitale-signaturen-richtig-verwenden"},"Digitale Signaturen richtig verwenden"),(0,l.kt)("p",null,"Wir versuchen, mehrere Verfahren zu kombinieren und deren Vorteile zu nutzen. Einerseits berechnen wir den Hashwert eines Dokuments, andererseits \xabverschl\xfcsseln\xbb wir nur diesen Hashwert asymmetrisch. Somit reduziert sich der Einsatz von asymmetrischer Verschl\xfcsselung wiederum auf ganz kurze Werte. Zudem bleibt das Dokument intakt und stets lesbar."),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=559733",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Digitale Signatur: Hashwert und asymmetrische Verschl\xfcsselung",options:{},isInline:!1,src:n(859652).Z,alt:"Digitale Signatur: Hashwert und asymmetrische Verschl\xfcsselung",mdxType:"Image"})),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"digitale-signaturen-\xfcberpr\xfcfen"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Digitale Signaturen \xfcberpr\xfcfen")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich, wie man eine solche digital signierte Nachricht \xfcberpr\xfcfen kann. Zeichnen Sie die ben\xf6tigten Schritte auf."),(0,l.kt)(c.Z,{type:"text",webKey:"99cd9f5a-6715-44a8-89cf-c79770c0740b",mdxType:"Answer"}),(0,l.kt)(o.Z,{webKey:"5bacd9c8-2222-47c2-bc1d-e90116caf1d0",mdxType:"Solution"},(0,l.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,l.kt)(r.Z,{bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=559733",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},caption:"Digitale Signatur \xfcberpr\xfcfen",options:{},isInline:!1,src:n(914728).Z,alt:"Digitale Signatur \xfcberpr\xfcfen",mdxType:"Image"}))))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=559733"},"rothe.io"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},859652:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjU5MHB4IiBoZWlnaHQ9IjI4MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQ2FscXVlLTEiIHNlcmlmOmlkPSJDYWxxdWUgMSI+CiAgICAgICAgPGcgaWQ9IktsYXJ0ZXh0Ij4KICAgICAgICAgICAgPHJlY3QgeD0iMTM5LjY0OSIgeT0iMzYuMjYiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMTM0LjEyNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw1MC4wMTU2LC01MC4yODM3KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTAyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxMTguNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMDAxMDAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjEzNC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTExMTA8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTUwLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDAwMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxNjYuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMTAxMTAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE4Mi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTAxMTE8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTk4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIyMTQuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjEwMTAwMTAxPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE2MS45MDVweCIgeT0iMjYuMDUycHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LbGFydGV4dDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IlNpdHp1bmdzc2NobMO8c3NlbCI+CiAgICAgICAgICAgIDxyZWN0IHg9IjMwMS4wNDUiIHk9IjIyMS4zMTEiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMjIuNzA0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8dGV4dCB4PSIzMDUuNjM2cHgiIHk9IjIzNy41NjZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjAxMTAwMDExPC90ZXh0PgogICAgICAgICAgICA8dGV4dCB4PSIyOTUuMzAycHgiIHk9IjI2Mi4zOTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDsiPnByaXZhdGVyIFNjaGzDvHNzZWw8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHZWhlaW10ZXh0Ij4KICAgICAgICAgICAgPGcgaWQ9InN5bW0uLUdlaGVpbXRleHQiIHNlcmlmOmlkPSJzeW1tLiBHZWhlaW10ZXh0Ij4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ2OS40NzQiIHk9IjM2LjI2IiB3aWR0aD0iODUuOTg2IiBoZWlnaHQ9IjEzNC4xMjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDM3OS44NDEsLTUwLjI4MzcpIj4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTAyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTE4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTAwMTAwMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTM0LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTExMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTUwLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDAwMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTY2LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTEwMTEwMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTgyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDExMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTk4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMjE0LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDEwMDEwMTwvdGV4dD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjQ3NC4wMDVweCIgeT0iMjYuMTk5cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5TaWduaWVydGVyIDx0c3BhbiB4PSI1MjguNDhweCA1MzQuNDhweCA1NDEuMTU0cHggIiB5PSIyNi4xOTlweCAyNi4xOTlweCAyNi4xOTlweCAiPlRleDwvdHNwYW4+dDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iYXN5bW0uLUdlaGVpbXRleHQiIHNlcmlmOmlkPSJhc3ltbS4gR2VoZWltdGV4dCI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSI0NjkuNDc0IiB5PSIxNzMuNzM3IiB3aWR0aD0iODUuOTg2IiBoZWlnaHQ9IjIyLjcwNCIgc3R5bGU9ImZpbGw6cmdiKDExNiwxOTEsNjEpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNDc0LjA2NXB4IiB5PSIxODkuNzAzcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTAxMDExMDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cmVjdCB4PSI0NjQuNTgzIiB5PSIzMC45OTMiIHdpZHRoPSI5NS43NjgiIGhlaWdodD0iMTcxLjAyNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTEyNy42NDksMTc4LjgwMUwxMzkuNjQ5LDE4NC44MDFMMTI3LjY0OSwxOTAuODAxQzEzMC42NDksMTg3LjgwMSAxMzAuNjQ5LDE4MS44MDEgMTI3LjY0OSwxNzguODAxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik03Ni40OTksMTg0LjgwMUwxMzAuMDQ5LDE4NC44MDEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTc2LjQ5OSw3NC4yMjVMMTM5LjY0OSw3NC4yMjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTQ1Ny40NzQsMTc4LjczNEw0NjkuNDc0LDE4NC43MzRMNDU3LjQ3NCwxOTAuNzM0QzQ2MC40NzQsMTg3LjczNCA0NjAuNDc0LDE4MS43MzQgNDU3LjQ3NCwxNzguNzM0WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0zOTMuMzQ2LDE4NC43MzRMNDU5Ljg3NCwxODQuNzM0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik00NTcuNDc0LDY4LjIyNUw0NjkuNDc0LDc0LjIyNUw0NTcuNDc0LDgwLjIyNUM0NjAuNDc0LDc3LjIyNSA0NjAuNDc0LDcxLjIyNSA0NTcuNDc0LDY4LjIyNVoiLz4KICAgICAgICA8cGF0aCBkPSJNMjI1LjYzNCw3NC4yMjVMNDU5Ljg3NCw3NC4yMjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTI4NC40NDgsMTc4LjgwMUwyOTYuNDQ4LDE4NC44MDFMMjg0LjQ0OCwxOTAuODAxQzI4Ny40NDgsMTg3LjgwMSAyODcuNDQ4LDE4MS44MDEgMjg0LjQ0OCwxNzguODAxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMjUuNjM0LDE4NC44MDFMMjg2Ljg0OCwxODQuODAxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMzcuNjQ2LDIxMi4wMTlMMzQzLjY0NiwyMDAuMDE5TDM0OS42NDYsMjEyLjAxOUMzNDYuNjQ2LDIwOS4wMTkgMzQwLjY0NiwyMDkuMDE5IDMzNy42NDYsMjEyLjAxOVoiLz4KICAgICAgICA8cGF0aCBkPSJNMzQzLjY0NiwyMjEuMzExTDM0My42NDYsMjA5LjYxOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNzAuNDk5LDEwMS40M0w3Ni40OTksMTEzLjQzTDgyLjQ5OSwxMDEuNDNDNzkuNDk5LDEwNC40MyA3My40OTksMTA0LjQzIDcwLjQ5OSwxMDEuNDNaIi8+CiAgICAgICAgPHBhdGggZD0iTTc2LjQ5OSwxMDMuODNMNzYuNDk5LDc0LjIyNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNzYuNDk5LDE4NC44MDFMNzYuNDk5LDE0NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8ZyBpZD0ic3ltbS4tVmVyc2NobMO8c3NlbHVuZyIgc2VyaWY6aWQ9InN5bW0uIFZlcnNjaGzDvHNzZWx1bmciPgogICAgICAgICAgICA8cmVjdCB4PSIyOC4wNSIgeT0iMTEzLjQzIiB3aWR0aD0iOTYuODk4IiBoZWlnaHQ9IjMwLjU3IiBzdHlsZT0iZmlsbDpyZ2IoMjUxLDE2MywwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iNDEuNDFweCIgeT0iMTMzLjAxM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+SGFzaGZ1bmt0aW9uPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iYXN5bW0uLVZlcnNjaGzDvHNzZWx1bmciIHNlcmlmOmlkPSJhc3ltbS4gVmVyc2NobMO8c3NlbHVuZyI+CiAgICAgICAgICAgIDxyZWN0IHg9IjI5NS4xOTciIHk9IjE2OS40NDkiIHdpZHRoPSI5Ni44OTgiIGhlaWdodD0iMzAuNTciIHN0eWxlPSJmaWxsOnJnYigxMTYsMTkxLDYxKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwzNS4wMDQ0LDc5LjA2KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIyNjguNjc0cHgiIHk9IjEwMi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+YXN5bW1ldHJpc2NoZTwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjI2NS4zMjNweCIgeT0iMTE0LjkwM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+Vjx0c3BhbiB4PSIyNzIuNjY1cHggMjc5LjMzOXB4ICIgeT0iMTE0LjkwM3B4IDExNC45MDNweCAiPmVyPC90c3Bhbj5zY2hsw7xzc2VsdW5nPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJhc3ltbS4tR2VoZWltdGV4dDEiIHNlcmlmOmlkPSJhc3ltbS4gR2VoZWltdGV4dCI+CiAgICAgICAgICAgIDxyZWN0IHg9IjEzOS42NDkiIHk9IjE3My4xNjEiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMjIuNzA0IiBzdHlsZT0iZmlsbDpyZ2IoMjUxLDE2MywwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iMTQ0LjIzOXB4IiB5PSIxODkuMTI3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTExMDExMTwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0ibGF5ZXIxIj4KICAgIDwvZz4KPC9zdmc+Cg=="},914728:function(e,t,n){t.Z=n.p+"assets/images/hash-asymm-signature-verification-binary-cfadbaf94840ded97cee996d7fb8ec16.svg"}}]);