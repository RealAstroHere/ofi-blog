"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[67560],{934673:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(487462),r=a(667294),l=a(386010),i=a(263366),s=a(972389),o=a(986043),c="details_lb9f",u="isBrowser_bmU9",d="collapsibleContent_i85q",m=["summary","children"];function g(e){return!!e&&("SUMMARY"===e.tagName||g(e.parentElement))}function I(e,t){return!!e&&(e===t||I(e.parentElement,t))}function p(e){var t=e.summary,a=e.children,p=(0,i.Z)(e,m),f=(0,s.Z)(),b=(0,r.useRef)(null),N=(0,o.u)({initialState:!p.open}),h=N.collapsed,k=N.setCollapsed,y=(0,r.useState)(p.open),v=y[0],C=y[1];return r.createElement("details",(0,n.Z)({},p,{ref:b,open:v,"data-collapsed":h,className:(0,l.default)(c,f&&u,p.className),onMouseDown:function(e){g(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;g(t)&&I(t,b.current)&&(e.preventDefault(),h?(k(!1),C(!0)):k(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(o.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){k(e),C(!e)}},r.createElement("div",{className:d},a)))}var f="details_b_Ee";function b(e){var t=Object.assign({},e);return r.createElement(p,(0,n.Z)({},t,{className:(0,l.default)("alert alert--info",f,t.className)}))}},682593:function(e,t,a){a.d(t,{x:function(){return x},Z:function(){return A}});var n=a(667294),r=a(970804),l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},i=a(386010),s=a(471217),o=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),c=function(e){var t=e.value,a=t,r=void 0;if(o.test(t)){var i=function(e){if(o.test(e))return e.match(o).groups.klass}(t);r=l[i],a=""+t.replace(o,"")}return n.createElement("option",{value:t,className:r},a)},u=a(592814),d=a(51436),m=a(168949),g=a(972389),I=a(121314),p=a(274322),f=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),b=function(e){return l[function(e){if(f.test(e))return e.match(f).groups.klass}(e)]},N=(0,s.Pi)((function(e){var t,a=(0,g.Z)(),r=n.useState("unchecked"),s=r[0],o=r[1],f=(0,I.oR)("documentStore").find(e.webKey),N=function(e){f.loaded&&(o("unchecked"),f.setData({value:e,type:"string"}))},h=function(t){if(e.checker)return o(e.checker(t)?"correct":"wrong");var a=e.sanitizer?e.sanitizer:function(e){return e};o(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,m.U5)((function(){return f.loaded}),(function(e){e&&h(f.value)}))}),[f]),n.useEffect((function(){f.loaded&&h(f.value)}),[f,a]),a?f.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return N(e.target.value)},style:{width:e.width},value:f.value,className:b(f.value),disabled:!f.loaded},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return N(e.target.value)},value:f.value,disabled:!f.loaded||f.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return h(f.value)},className:(0,i.default)(l[s],l.checkButton)},n.createElement(u.G,{icon:(t=s,"correct"===t?d.f8k:"wrong"===t?d.nYk:d.sph)}))):n.createElement(p.Z,null):n.createElement("div",null,"SSR")})),h=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return l[function(e){if(h.test(e))return e.match(h).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t=(0,I.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);var n=[].concat(t.data.value.slice(0,a),[e],t.data.value.slice(a+1));t.setData(Object.assign({},t.data,{value:n}))};return t.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map((function(r,l){return e.select?n.createElement("select",{key:l,onChange:function(e){return a(e.target.value,l)},value:r,className:k(r),disabled:!t.loaded},e.select.map((function(e,t){return n.createElement(c,{value:e,key:t})}))):n.createElement("input",{key:l,type:"text",onChange:function(e){return a(e.target.value,l)},value:r,disabled:!t.loaded||t.readonly})}))):n.createElement(p.Z,null)})),v=a(487462),C=a(575552),w=(0,s.Pi)((function(e){var t=(0,I.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(C.Z,(0,v.Z)({model:t},e))):n.createElement(p.Z,null)})),Z=a(647271),M=(0,s.Pi)((function(e){return(0,I.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,i.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),E=a(697762),x=function(e){return e.replace(/\s+/g,"").toUpperCase()},A=(0,s.Pi)((function(e){var t=(0,I.oR)("documentStore"),a=(0,I.oR)("msalStore"),r=t.find(e.webKey),l=(0,g.Z)();return(0,I.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||E.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),l?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(Z.Z,null),a.loggedIn&&n.createElement(M,{webKey:e.webKey}),"text"===e.type&&n.createElement(w,e),"string"===e.type&&n.createElement(N,e),"array"===e.type&&n.createElement(y,e)):n.createElement(p.Z,null):n.createElement("div",null,"SSR")}))},647271:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(667294),r="noLoginAlert_HRfh",l=a(239960),i=a(471217),s=a(121314),o=(0,i.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(l.Z,{to:"/login"},"Login"))}))},61014:function(e,t,a){var n=a(972389),r=a(471217),l=a(667294),i=a(121314),s=a(274322),o=a(934673),c=a(386010),u=a(386720),d=a(592814),m=a(51436),g=function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},l.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"}))},I=(0,r.Pi)((function(e){return l.createElement("span",{className:(0,c.default)(u.Z.policy,"badge","badge--"+e.color)},e.name," ",l.createElement(d.G,{icon:m.nYk,onClick:e.onRemove}))})),p=(0,r.Pi)((function(e){var t=l.useState(""),a=t[0],n=t[1],r=l.useState(""),s=r[0],o=r[1],g=l.useState(""),p=g[0],f=g[1],b=(0,i.oR)("policyStore"),N=(0,i.oR)("userStore"),h=b.findPolicy(e.webKey);return h?l.createElement("div",{className:(0,c.default)(u.Z.configContainer)},l.createElement("div",{className:(0,c.default)(u.Z.showControl)},l.createElement(d.G,{icon:h.isConfigOpen?m.nYk:m.cNd,onClick:function(){h.showConfig(!h.isConfigOpen)}})),h.isConfigOpen&&l.createElement("div",{className:(0,c.default)(u.Z.config)},l.createElement("div",{className:(0,c.default)(u.Z.permissions)},Array.from(h.klasses).map((function(e,t){return l.createElement(I,{key:t,name:e,onRemove:function(){return h.removePermission(e,"class")},color:"success"})})),Array.from(h.groups).map((function(e,t){return l.createElement(I,{key:t,name:e,onRemove:function(){return h.removePermission(e,"group")},color:"danger"})})),Array.from(h.users).map((function(e,t){return l.createElement(I,{key:t,name:e,onRemove:function(){return h.removePermission(e,"user")},color:"primary"})}))),l.createElement("div",{className:(0,c.default)(u.Z.update)},l.createElement("input",{type:"text",placeholder:"Klasse",value:a,onChange:function(e){return n(e.target.value)},disabled:h.locked,list:"solution-policy-for-classes"}),l.createElement("datalist",{id:"solution-policy-for-classes"},N.klasses.map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:h.locked,onClick:function(){h.addPermission(a,"class"),n("")}},"Add"),l.createElement("input",{type:"text",placeholder:"Gruppe",value:s,onChange:function(e){return o(e.target.value)},disabled:h.locked,list:"solution-policy-for-groups"}),l.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([].concat(N.groups,b.groups))).map((function(e,t){return l.createElement("option",{key:t,value:e})}))),l.createElement("button",{disabled:h.locked,onClick:function(){h.addPermission(s,"group"),o("")}},"Add"),l.createElement("input",{type:"email",placeholder:"User",value:p,onChange:function(e){return f(e.target.value)},disabled:h.locked,list:"solution-policy-for-users"}),l.createElement("datalist",{id:"solution-policy-for-users"},N.users.map((function(e,t){return l.createElement("option",{key:t,value:e.email})}))),l.createElement("button",{disabled:h.locked,onClick:function(){h.addPermission(p,"user"),f("")}},"Add")))):null})),f=(0,r.Pi)((function(e){var t,a,r=(0,i.oR)("policyStore"),d=(0,i.oR)("userStore"),m=(0,n.Z)();if((0,i.aV)(e.webKey),!m)return l.createElement("div",null,"SSR");var I=r.find(e.webKey);return I?l.createElement("div",{"data--web-key":e.webKey,className:(0,c.default)(u.Z.wrapper,"solution-wrapper")},I.show||null!=(t=d.current)&&t.admin?l.createElement(o.Z,{summary:l.createElement("summary",null,e.title||"L\xf6sung"," ",l.createElement(g,null),!I.show&&l.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,c.default)("alert alert--success",u.Z.solution),open:e.open},(null==(a=d.current)?void 0:a.admin)&&l.createElement(p,{webKey:I.webKey}),e.children):l.createElement("div",{className:(0,c.default)("alert",u.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",l.createElement(g,null))):l.createElement(s.Z,null)}));t.Z=f},546604:function(e,t,a){var n=a(487462),r=a(263366),l=a(386010),i=a(631137),s=a(512624),o=a(667294),c=a(197566),u=a(960549),d=["value","dragging","index"],m=function(e){var t=e.value,a=e.dragging,l=e.index,s=(0,r.Z)(e,d);return o.createElement(i.Rl,{prefixCls:"rc-slider-tooltip",overlay:""+t,visible:a,placement:"top",key:l},o.createElement(i.HH,(0,n.Z)({value:t},s)))},g=function(e){return o.createElement("div",{className:u.Z.colorTile,style:{background:"rgb("+e.r+","+e.g+","+e.b+")"}},o.createElement("div",{className:u.Z.tooltip},"Rot: "+e.r+", Gr\xfcn: "+e.g+", Blau: "+e.b+")"))};t.Z=function(){var e=o.useState(2),t=e[0],a=e[1],n=o.useState(1),r=n[0],i=n[1],d=o.useState([]),I=d[0],p=d[1];return o.useEffect((function(){i(Math.ceil(Math.log2(t)));for(var e=1===t?255:255/(t-1),a=[],n=0;n<t;n+=1)for(var r=Math.round(n*e),l=0;l<t;l+=1){for(var s=[],o=Math.round(l*e),c=0;c<t;c+=1)s.push({r:r,g:o,b:Math.round(c*e)});a.push(s)}p(a)}),[t]),o.createElement("div",{className:(0,l.default)("hero","shadow--lw",c.Z.container,u.Z.cmyk)},o.createElement("div",{className:"container"},o.createElement("p",{className:"hero__subtitle"},"Farbtiefen"),o.createElement("div",{className:(0,l.default)(u.Z.color)},o.createElement("span",{className:(0,l.default)(u.Z.label)},"Farbabstufungen"),o.createElement(s.Z,{value:t,handle:m,onChange:function(e){a(e)},min:1,max:10,dots:!0}),o.createElement("span",{className:(0,l.default)(u.Z.value)},""+t)),o.createElement("div",{className:(0,l.default)(u.Z.color,u.Z.blue,u.Z.property)},o.createElement("span",{className:(0,l.default)(u.Z.label)},"M\xf6gliche Farben"),o.createElement("span",{style:{flexGrow:1}}),o.createElement("span",{className:(0,l.default)(u.Z.value)},""+t*t*t)),o.createElement("div",{className:(0,l.default)(u.Z.color,u.Z.blue,u.Z.property)},o.createElement("span",{className:(0,l.default)(u.Z.label)},"Ben\xf6tigte Bits pro Farbkanal"),o.createElement("span",{style:{flexGrow:1}}),o.createElement("span",{className:(0,l.default)(u.Z.value)},""+r)),o.createElement("div",{className:(0,l.default)(u.Z.color,u.Z.blue,u.Z.property)},o.createElement("span",{className:(0,l.default)(u.Z.label)},"Farbtiefe pro Farbkanal"),o.createElement("span",{style:{flexGrow:1}}),o.createElement("span",{className:(0,l.default)(u.Z.value)},r<2?r+" bit":r+" bits")),o.createElement("div",{className:(0,l.default)(u.Z.color,u.Z.blue,u.Z.property)},o.createElement("span",{className:(0,l.default)(u.Z.label)},"Farbtiefe"),o.createElement("span",{style:{flexGrow:1}}),o.createElement("span",{className:(0,l.default)(u.Z.value)},r<1?"1 bit":3*r+" bits")),o.createElement("div",{className:(0,l.default)(u.Z.tileContainer)},I.map((function(e){return o.createElement("div",{className:(0,l.default)(u.Z.tileRow)},e.map((function(e,t){return o.createElement(g,{key:t,r:e.r,g:e.g,b:e.b})})))})))))}},274322:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(667294),r=a(386010),l="loader_FEpR",i="badge_oWqf",s=a(471217),o=a(592814),c=a(51436),u=(0,s.Pi)((function(){return n.createElement("div",{className:(0,r.default)(l)},n.createElement(o.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},"Laden..."))}))},575552:function(e,t,a){a.d(t,{Z:function(){return I}});var n=a(667294),r="quillEditor_NxYB",l="quillAnswer_J46I",i="monospace_usc_",s="disableToolbar_bRdP",o=a(386010),c=a(471217),u=a(274322),d=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),g=function(e){var t=[];if(e.bold||e.italic||e.underline){var a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var l=[];e.ol&&l.push({list:"ordered"}),e.ul&&l.push({list:"bullet"}),t.push(l)}if(e.formula||e.image){var i=[];e.formula&&i.push("formula"),e.image&&i.push("image"),t.push(i)}return e.code&&t.push(["code-block"]),t},I=(0,c.Pi)((function(e){var t=n.useState(!1),c=t[0],I=t[1],p=n.useState(!1),f=p[0],b=p[1],N=n.useRef(null),h=e.model,k=function(e){e.preventDefault()};n.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),d)return e();var n=[Promise.all([a.e(97762),a.e(18446),a.e(80324),a.e(76095),a.e(71167)]).then(a.t.bind(a,771167,23)),a.e(76095).then(a.t.bind(a,676095,23)),a.e(17891).then(a.t.bind(a,817891,23)),Promise.all([a.e(40532),a.e(11940)]).then(a.bind(a,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=n.length,n.push(a.e(41008).then(a.bind(a,541008)),Promise.all([a.e(40532),a.e(50037)]).then(a.bind(a,250037)))),Promise.all(n).then((function(t){d=t[r["react-quill"]].default;var a=t[r.quill].default,n=t[r["react-image-compress"]].default;if("katex"in r){var l=t[r.katex].default;window.katex=l}a.register("modules/imageCompress",n),e()}))}((function(){t&&(b(!0),N&&N.current&&N.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,N&&N.current&&N.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return d&&f&&h.loaded?n.createElement("div",{onFocus:function(){return!c&&I(!0)},className:(0,o.default)(r)},n.createElement(d,{ref:N,theme:"snow",readOnly:e.readonly||h.readonly,className:(0,o.default)(l,e.monospace&&i,c?void 0:s),value:h.text||"",onChange:function(t,a,n,r){var l,i;l=t,void 0===i&&(i=0),!e.readonly&&h.canUpdate&&f&&h.setText(l)},modules:{toolbar:e.toolbar?g(e.toolbar):[].concat(m,g(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(u.Z,null)}))},257086:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(487462),r=a(263366),l=(a(667294),a(603905)),i=(a(546604),a(682593),a(61014),["components"]),s={title:"1. Grundlagen",label:"1. Grundlagen"},o="1. Grundlagen [^1]",c={unversionedId:"Codes und Daten/Grafikformate/basics",id:"version-24K/Codes und Daten/Grafikformate/basics",title:"1. Grundlagen",description:"Raster- und Vektorgrafik",source:"@site/versioned_docs/version-24K/08-Codes und Daten/02-Grafikformate/01-basics.md",sourceDirName:"08-Codes und Daten/02-Grafikformate",slug:"/Codes und Daten/Grafikformate/basics",permalink:"/24K/Codes und Daten/Grafikformate/basics",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/08-Codes und Daten/02-Grafikformate/01-basics.md",tags:[],version:"24K",sidebarPosition:1,frontMatter:{title:"1. Grundlagen",label:"1. Grundlagen"},sidebar:"version-24K/sidebar",previous:{title:"2. Informationsgehalt",permalink:"/24K/Codes und Daten/compression/redundancy"},next:{title:"2. Farbdarstellung",permalink:"/24K/Codes und Daten/Grafikformate/colors"}},u={},d=[{value:"Raster- und Vektorgrafik",id:"raster--und-vektorgrafik",level:2},{value:"Rastergrafik",id:"rastergrafik",level:2},{value:"Vektorgrafik",id:"vektorgrafik",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},g=m("Figure"),I=m("SourceRef"),p={toc:d};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"1-grundlagen-"},"1. Grundlagen ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("h2",{id:"raster--und-vektorgrafik"},"Raster- und Vektorgrafik"),(0,l.kt)("p",null,"Bei der Speicherung von Grafiken und Bildern im Computer wird zwischen zwei grundlegenden Darstellungsarten unterschieden: der Raster- und der Vektorgrafik."),(0,l.kt)("div",{style:{},className:"flex flex-flex"},(0,l.kt)("div",{parentName:"div",style:{},className:"item"},(0,l.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{alt:"Smiley als Rastergrafik",src:a(633993).Z,width:"416",height:"416"}),(0,l.kt)("figcaption",{parentName:"Figure"},(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Smiley als Rastergrafik",(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,l.kt)(I,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"})))),(0,l.kt)("div",{parentName:"div",style:{},className:"item"},(0,l.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{alt:"Smiley als Vektorgrafik",src:a(496126).Z,width:"416",height:"416"}),(0,l.kt)("figcaption",{parentName:"Figure"},(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Smiley als Vektorgrafik",(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,l.kt)(I,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))))),(0,l.kt)("h2",{id:"rastergrafik"},"Rastergrafik"),(0,l.kt)("p",null,"Bei einer Rastergrafik wird das Bild in viele kleine Quadrate unterteilt. Jedes Quadrat wird mit genau einer Farbe eingef\xe4rbt. Diese Quadrate werden ",(0,l.kt)("strong",{parentName:"p"},"Pixel")," genannt."),(0,l.kt)("p",null,"Die Anzahl Pixel, welche f\xfcr eine Rastergrafik verwendet werden, wird als ",(0,l.kt)("strong",{parentName:"p"},"Aufl\xf6sung")," des Bildes bezeichnet. Sie berechnet sich aus der Breite ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"b")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," und H\xf6he ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"h")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," der Grafik in Pixel."),(0,l.kt)("p",null,"Eine Rastergrafik mit hoher Aufl\xf6sung hat eine bessere Qualit\xe4t, ben\xf6tigt allerdings auch mehr Speicherplatz. Den theoretischen Speicherbedarf einer Rastergrafik h\xe4ngt von der Anzahl Pixel und dem verwendeten Farbmodell ab."),(0,l.kt)("p",null,"Rastergrafiken werden in erster Linie zur Speicherung von Fotos verwendet."),(0,l.kt)("h2",{id:"vektorgrafik"},"Vektorgrafik"),(0,l.kt)("p",null,"Bei einer Vektorgrafik wird das darzustellende Bild aus geometrischen Objekten wie Linien, Kreise oder Rechtecken zusammengesetzt. Das Prinzip ist dasselbe wie bei der Turtle-Grafik - jeder Pfad wird in einem Koordinatensystem beschrieben. Durch Hinein- oder Herauszoomen kann das Bild beliebig vergr\xf6ssert oder verkleinert werden, ohne dass mehr Speicherplatz ben\xf6tigt wird. "),(0,l.kt)("p",null,"Vektorgrafiken haben also zwei grosse Vorteile gegen\xfcber Pixelgrafiken. Erstens ben\xf6tigen sie normalerweise ",(0,l.kt)("strong",{parentName:"p"},"deutlich weniger Speicherplatz")," als eine entsprechende Pixelgrafik, da mit einem Objekt die Farbe von vielen Pixeln festgelegt wird."),(0,l.kt)("p",null,"Zweitens k\xf6nnen Vektorgrafiken ohne Qualit\xe4tseinbusse ",(0,l.kt)("strong",{parentName:"p"},"beliebig vergr\xf6ssert und verkleinert")," werden."),(0,l.kt)("p",null,"Die einzelnen Objekte k\xf6nnen einfarbig sein oder einen Farbverlauf haben, sowie teilweise transparent sein."),(0,l.kt)("p",null,"Vektorgrafiken werden deshalb insbesondere f\xfcr folgende Anwendungen eingesetzt:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Logos"),(0,l.kt)("li",{parentName:"ul"},"Illustrationen"),(0,l.kt)("li",{parentName:"ul"},"Symbole, Icons"),(0,l.kt)("li",{parentName:"ul"},"Schriftarten"),(0,l.kt)("li",{parentName:"ul"},"Strassen- und Landkarten")),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Inspiration: ",(0,l.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/base/?b=code&p=943166"},"S. Rothe, T. Jampen, R. Meyer"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},386720:function(e,t){t.Z={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}},960549:function(e,t){t.Z={image:"image_G9S3",color:"color_umyu",property:"property_ifd7",label:"label_GZzs",value:"value_UOcF",transformed:"transformed_wOfO",red:"red_DUAB",green:"green_DI_q",blue:"blue_OvwO",alpha:"alpha_RPwX",cyan:"cyan_GnDs",magenta:"magenta_mmFp",yellow:"yellow_lgxd",key:"key_k33Z",cmyk:"cmyk_a0LL",copyBadge:"copyBadge_nVEh",copyIcon:"copyIcon_FV_S",tileContainer:"tileContainer_hjZ5",tileRow:"tileRow_Gp1U",colorTile:"colorTile_JCaD",tooltip:"tooltip_pBZE"}},197566:function(e,t){t.Z={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},633993:function(e,t,a){t.Z=a.p+"assets/images/01-smiley-raster-8b3fbe33c1c0c20102f9e5a524689e58.svg"},496126:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQxNnB4IiBoZWlnaHQ9IjQxNnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyMDgiIHI9IjE3NiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMzQsMCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQ0IiByPSIzMiIgc3R5bGU9ImZpbGw6cmdiKDQ4LDc5LDI1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMTQ0IiByPSIzMiIgc3R5bGU9ImZpbGw6cmdiKDQ4LDc5LDI1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTk2LDI0NS43NUM5NiwyOTUuMjg0IDE0Ni4xODYsMzM1LjUgMjA4LDMzNS41QzI2OS44MTQsMzM1LjUgMzIwLDI5NS4yODQgMzIwLDI0NS43NUMyOTMuODY3LDI2MC42MSAyNTIuNjc4LDI3Mi42NzUgMjA4LDI3Mi42NzVDMTYzLjMyMiwyNzIuNjc1IDEyMi4xMzMsMjYwLjYxIDk2LDI0NS43NVoiIHN0eWxlPSJmaWxsOnJnYigyMTMsMCwwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxjaXJjbGUgY3g9Ijk2IiBjeT0iMjQ2IiByPSIyIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTU1LjI0MyIgY3k9IjI2NyIgcj0iMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI2MS4yMzgiIGN5PSIyNjciIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMDEiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMjMiIGN5PSIzMDUiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxNjMiIGN5PSIzMjgiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNTQiIGN5PSIzMjgiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMTUiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyOTIiIGN5PSIzMDUiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMjAiIGN5PSIyNDYiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIzMzUuNSIgcj0iMiIvPgogICAgICAgIDx0ZXh0IHg9Ijg1Ljg1MnB4IiB5PSIyNTIuMzU1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjE8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iODkuNzI1cHgiIHk9IjI4NS40MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4yPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjExNC43MTNweCIgeT0iMzE4LjQwMnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4zPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE1Ni42OTVweCIgeT0iMzQzLjQxNHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij40PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjIwNS4zMDJweCIgeT0iMzQ5LjM1NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij41PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjI1NS41NDlweCIgeT0iMzQwLjg4OXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij42PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjI5NS41NjFweCIgeT0iMzE2LjI1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjc8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMzE5Ljg5OXB4IiB5PSIyNzguMjQ4cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjg8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMzI1LjYyM3B4IiB5PSIyNDguNDAycHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjk8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMjUyLjg1MnB4IiB5PSIyNjAuMjA2cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjEwPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjIwMS45NjVweCIgeT0iMjY4LjY5MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4xMTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNDcuODUycHgiIHk9IjI2NC41NDVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+MTI8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dGV4dCB4PSIxNTYuNTUycHgiIHk9IjE1Ni40MjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+YjwvdGV4dD4KICAgICAgICA8cGF0aCBkPSJNMTM0LDE0N0wxMjgsMTQ0TDEzNCwxNDFMMTMxLDE0NEwxMzQsMTQ3WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNjAsMTQ0TDEzMSwxNDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQ0IiByPSIyIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dGV4dCB4PSIyNTMuNTJweCIgeT0iMTU2LjQyOHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij5jPC90ZXh0PgogICAgICAgIDxwYXRoIGQ9Ik0yMzAsMTQ3TDIyNCwxNDRMMjMwLDE0MUwyMjcsMTQ0TDIzMCwxNDdaIi8+CiAgICAgICAgPHBhdGggZD0iTTI1NiwxNDRMMjI3LDE0NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNTYiIGN5PSIxNDQiIHI9IjIiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zOCwyMTFMMzIsMjA4TDM4LDIwNUwzNSwyMDhMMzgsMjExWiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMDgsMjA4TDM1LDIwOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyMDgiIHI9IjIiLz4KICAgICAgICA8dGV4dCB4PSIyMDQuNTUycHgiIHk9IjIyMC40MjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+YTwvdGV4dD4KICAgIDwvZz4KICAgIDxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjM4NCIgaGVpZ2h0PSIzODQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+Cjwvc3ZnPgo="}}]);