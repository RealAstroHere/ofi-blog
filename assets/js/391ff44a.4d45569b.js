"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5757],{603905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return p}});var n=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),d=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(t),p=r,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return t?n.createElement(f,l(l({ref:a},s),{},{components:t})):n.createElement(f,l({ref:a},s))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},682593:function(e,a,t){t.d(a,{x:function(){return E},Z:function(){return P}});var n=t(667294),r=t(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=t(386010),o=t(471217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),d=function(e){var a=e.value,t=a,r=void 0;if(c.test(a)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(a);r=i[l],t=""+a.replace(c,"")}return n.createElement("option",{value:a,className:r},t)},s=t(592814),u=t(51436),m=t(168949),p=t(972389),f=t(121314),b=t(274322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),v=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},h=(0,o.Pi)((function(e){var a,t=(0,p.Z)(),r=n.useState("unchecked"),o=r[0],c=r[1],g=(0,f.oR)("documentStore").find(e.webKey),h=function(e){g.loaded&&(c("unchecked"),g.setData({value:e,type:"string"}))},w=function(a){if(e.checker)return c(e.checker(a)?"correct":"wrong");var t=e.sanitizer?e.sanitizer:function(e){return e};c(t(a)===t(e.solution)?"correct":"wrong")};return n.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&w(g.value)}))}),[g]),n.useEffect((function(){g.loaded&&w(g.value)}),[g,t]),t?g.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:function(e){return h(e.target.value)},style:{width:e.width},value:g.value,className:v(g.value),disabled:!g.loaded},e.select.map((function(e,a){return n.createElement(d,{value:e,key:a})}))):n.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return h(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:function(){return w(g.value)},className:(0,l.default)(i[o],i.checkButton)},n.createElement(s.G,{icon:(a=o,"correct"===a?u.f8k:"wrong"===a?u.nYk:u.sph)}))):n.createElement(b.Z,null):n.createElement("div",null,"SSR")})),w=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),k=function(e){return i[function(e){if(w.test(e))return e.match(w).groups.klass}(e)]},N=(0,o.Pi)((function(e){var a=(0,f.oR)("documentStore").find(e.webKey),t=function(e,t){void 0===t&&(t=0);var n=[].concat(a.data.value.slice(0,t),[e],a.data.value.slice(t+1));a.setData(Object.assign({},a.data,{value:n}))};return a.loaded?n.createElement("div",{className:i.answer},e.label&&n.createElement("label",null,e.label),a.data.value.map((function(r,i){return e.select?n.createElement("select",{key:i,onChange:function(e){return t(e.target.value,i)},value:r,className:k(r),disabled:!a.loaded},e.select.map((function(e,a){return n.createElement(d,{value:e,key:a})}))):n.createElement("input",{key:i,type:"text",onChange:function(e){return t(e.target.value,i)},value:r,disabled:!a.loaded||a.readonly})}))):n.createElement(b.Z,null)})),z=t(583117),y=t(575552),x=(0,o.Pi)((function(e){var a=(0,f.oR)("documentStore").find(e.webKey);return a.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(y.Z,(0,z.Z)({model:a},e))):n.createElement(b.Z,null)})),Z=t(647271),F=(0,o.Pi)((function(e){return(0,f.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),L=t(697762),E=function(e){return e.replace(/\s+/g,"").toUpperCase()},P=(0,o.Pi)((function(e){var a=(0,f.oR)("documentStore"),t=(0,f.oR)("msalStore"),r=a.find(e.webKey),i=(0,p.Z)();return(0,f.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||L.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?n.createElement("div",{"data--web-key":e.webKey},n.createElement(Z.Z,null),t.loggedIn&&n.createElement(F,{webKey:e.webKey}),"text"===e.type&&n.createElement(x,e),"string"===e.type&&n.createElement(h,e),"array"===e.type&&n.createElement(N,e)):n.createElement(b.Z,null):n.createElement("div",null,"SSR")}))},647271:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(667294),r="noLoginAlert_HRfh",i=t(239960),l=t(471217),o=t(121314),c=(0,l.Pi)((function(){return(0,o.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(i.Z,{to:"/login"},"Login"))}))},274322:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(667294),r=t(386010),i="loader_FEpR",l="badge_oWqf",o=t(471217),c=t(592814),d=t(51436),s=(0,o.Pi)((function(){return n.createElement("div",{className:(0,r.default)(i)},n.createElement(c.G,{icon:d.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",o="disableToolbar_bRdP",c=t(386010),d=t(471217),s=t(274322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),p=function(e){var a=[];if(e.bold||e.italic||e.underline){var t=[];e.bold&&t.push("bold"),e.italic&&t.push("italic"),e.underline&&t.push("underline"),a.push(t)}if(e.h1||e.h2||e.h3){var n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),a.push(n)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),a.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),a.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),a.push(l)}return e.code&&a.push(["code-block"]),a},f=(0,d.Pi)((function(e){var a=n.useState(!1),d=a[0],f=a[1],b=n.useState(!1),g=b[0],v=b[1],h=n.useRef(null),w=e.model,k=function(e){e.preventDefault()};n.useEffect((function(){var a=!0;return function(e,a){if(void 0===a&&(a={}),u)return e();var n=[Promise.all([t.e(97762),t.e(18446),t.e(80324),t.e(76095),t.e(71167)]).then(t.t.bind(t,771167,23)),t.e(76095).then(t.t.bind(t,676095,23)),t.e(17891).then(t.t.bind(t,817891,23)),Promise.all([t.e(40532),t.e(11940)]).then(t.bind(t,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};a.formula&&!window.katex&&(r.katex=n.length,n.push(t.e(41008).then(t.bind(t,541008)),Promise.all([t.e(40532),t.e(50037)]).then(t.bind(t,250037)))),Promise.all(n).then((function(a){u=a[r["react-quill"]].default;var t=a[r.quill].default,n=a[r["react-image-compress"]].default;if("katex"in r){var i=a[r.katex].default;window.katex=i}t.register("modules/imageCompress",n),e()}))}((function(){a&&(v(!0),h&&h.current&&h.current.editor.getModule("toolbar").container.addEventListener("mousedown",k))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){a=!1,h&&h.current&&h.current.editor.getModule("toolbar").container.removeEventListener("mousedown",k)}}),[e]);return u&&g&&w.loaded?n.createElement("div",{onFocus:function(){return!d&&f(!0)},className:(0,c.default)(r)},n.createElement(u,{ref:h,theme:"snow",readOnly:e.readonly||w.readonly,className:(0,c.default)(i,e.monospace&&l,d?void 0:o),value:w.text||"",onChange:function(a,t,n,r){var i,l;i=a,void 0===l&&(l=0),!e.readonly&&w.canUpdate&&g&&w.setText(i)},modules:{toolbar:e.toolbar?p(e.toolbar):[].concat(m,p(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(s.Z,null)}))},525149:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p}});var n,r=t(583117),i=t(480102),l=(t(667294),t(603905)),o=t(682593),c=["components"],d={title:"RoboZZle"},s="RoboZZle",u={unversionedId:"Programmieren-1/Algorithmen/Uebungen/robozzle",id:"version-25h/Programmieren-1/Algorithmen/Uebungen/robozzle",title:"RoboZZle",description:"Puzzle 1",source:"@site/versioned_docs/version-25h/04-Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",sourceDirName:"04-Programmieren-1/01-Algorithmen/100-Uebungen",slug:"/Programmieren-1/Algorithmen/Uebungen/robozzle",permalink:"/25h/Programmieren-1/Algorithmen/Uebungen/robozzle",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",tags:[],version:"25h",sidebarPosition:1,frontMatter:{title:"RoboZZle"},sidebar:"version-25h/sidebar",previous:{title:"Uebungen",permalink:"/25h/category/uebungen"},next:{title:"Turtlegrafik",permalink:"/25h/category/turtlegrafik"}},m={},p=[],f=(n="Figure",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),b={toc:p};function g(e){var a=e.components,n=(0,i.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"robozzle"},"RoboZZle"),(0,l.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/MmqBVWi_Pc0?start=21",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-1"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 1")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12419"},"Puzzle 1")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(597044).Z,width:"268",height:"183"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a1",webKey:"49f55f64-13b9-4f15-b138-1335c09281b5",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-2"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 2")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2741"},"Puzzle 2")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(750568).Z,width:"247",height:"244"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a2",webKey:"2b9029cf-9593-4ab8-a49a-eec034c27b0c",label:"L\xf6sung F1",size:3,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-3"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 3")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10858"},"Puzzle 3")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(583208).Z,width:"241",height:"241"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a3",webKey:"f8f87665-1d2b-4559-b3ba-fbd604061d2a",label:"L\xf6sung F1",size:7,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-4"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 4")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12511"},"Puzzle 4")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(760929).Z,width:"308",height:"281"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a4",webKey:"d3b5b747-6a4d-4658-a05f-0026e20ce326",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-5"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 5")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10895"},"Puzzle 5")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(316430).Z,width:"412",height:"213"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a5",webKey:"13b53721-50de-4630-abe7-7f1cd5f4ea8e",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-6"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 6.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10048"},"Puzzle 6")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(884585).Z,width:"412",height:"265"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a6a",webKey:"ef5632a1-8885-415d-a1dc-50b810b19ba2",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a6b",webKey:"49c1b7a8-b457-437a-a147-a5ad75c7f2fe",label:"L\xf6sung F2",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-7"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 7.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2748"},"Puzzle 7")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(271777).Z,width:"165",height:"317"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a7",webKey:"1f50b198-7ef4-48b6-bbdc-68452baa7952",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-8"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 8.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=140"},"Puzzle 8")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(859897).Z,width:"840",height:"67"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a8",webKey:"59c65a0b-5ae1-4287-b25f-567b598a67a4",label:"L\xf6sung F1",size:6,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-9"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 9.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=1040"},"Puzzle 9")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(149646).Z,width:"281",height:"284"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a9",webKey:"a290e5cd-caae-4dc5-acfb-e435f072645c",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"aufgabe-10"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 10.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=87"},"Puzzle 10")),(0,l.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(57333).Z,width:"461",height:"372"})),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a10a",webKey:"2d443973-fd5e-4432-90a3-45dd0c6932fd",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,l.kt)(o.Z,{type:"array",id:"robozzle_a10b",webKey:"14b2fdbd-cb85-4175-9016-bf43e252fcf0",label:"L\xf6sung F2",size:3,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))))}g.isMDXComponent=!0},597044:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a1-9f88e1913a1251d499bdfb0a2c7fb2b7.png"},57333:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a10-c715bd3fb509c1d38ff2f9fd71177302.png"},750568:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a2-b543492edbe8b6375cf700f5988d3ee5.png"},583208:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a3-161aca72f309f94bd52b0b113745717b.png"},760929:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a4-4409a04081e5d33f9e8a364227172666.png"},316430:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a5-152d08fb7bcd5be8b0342534e1465859.png"},884585:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a6-874c825cfa7a6ce99aec0506367ab2c3.png"},271777:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a7-04e86296810da925b2665cd89167c460.png"},859897:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a8-02d9e336651d2befe3b2f5178908c732.png"},149646:function(e,a,t){a.Z=t.p+"assets/images/RoboZZle_a9-12892684d0b832904433762ae750c699.png"}}]);