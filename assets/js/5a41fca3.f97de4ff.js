"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=l,g=m["".concat(o,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(67294),r=n(86010),i=n(72389),s=n(86043);const o="details_lb9f",d="isBrowser_bmU9",c="collapsibleContent_i85q";function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;const g=(0,i.Z)(),h=(0,l.useRef)(null),{collapsed:f,setCollapsed:k}=(0,s.u)({initialState:!p.open}),[b,v]=(0,l.useState)(p.open);return l.createElement("details",(0,a.Z)({},p,{ref:h,open:b,"data-collapsed":f,className:(0,r.default)(o,g&&d,p.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;u(t)&&m(t,h.current)&&(e.preventDefault(),f?(k(!1),v(!0)):k(!0))}}),null!=t?t:l.createElement("summary",null,"Details"),l.createElement(s.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),v(!e)}},l.createElement("div",{className:c},n)))}const g="details_b_Ee";function h(e){let{...t}=e;return l.createElement(p,(0,a.Z)({},t,{className:(0,r.default)("alert alert--info",g,t.className)}))}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.default)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),l=n(67294),r=n(86010),i=n(72389),s=n(67392),o=n(7094),d=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:p,values:g,groupId:h,className:f}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===p?p:null!=(t=null!=p?p:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,o.U)(),[E,z]=(0,l.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=h){const e=w[h];null!=e&&e!==E&&b.some((t=>t.value===e))&&z(e)}const Z=e=>{const t=e.currentTarget,n=S.indexOf(t),a=b[n].value;a!==E&&(x(t),z(a),null!=h&&y(h,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var l;const t=S.indexOf(e.currentTarget)-1;n=null!=(l=S[t])?l:S[S.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.default)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":m},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>S.push(e),onKeyDown:R,onFocus:Z,onClick:Z},i,{className:(0,r.default)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function p(e){const t=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},82593:(e,t,n)=>{n.d(t,{x:()=>Z,Z:()=>R});var a=n(67294);const l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var r=n(86010),i=n(71217);const s=/--(?<klass>\w+)$/,o=e=>{let t,{value:n}=e,r=n;if(s.test(n)){const e=(e=>{if(s.test(e))return e.match(s).groups.klass})(n);t=l[e],r=""+n.replace(s,"")}return a.createElement("option",{value:n,className:t},r)};var d=n(92814),c=n(51436),u=n(68949),m=n(72389),p=n(21314),g=n(74322);const h=/--(?<klass>\w+)$/,f=e=>l[(e=>{if(h.test(e))return e.match(h).groups.klass})(e)],k=(0,i.Pi)((e=>{const t=(0,m.Z)(),[n,i]=a.useState("unchecked"),s=(0,p.oR)("documentStore").find(e.webKey),h=e=>{s.loaded&&(i("unchecked"),s.setData({value:e,type:"string"}))},k=t=>{if(e.checker)return i(e.checker(t)?"correct":"wrong");const n=e.sanitizer?e.sanitizer:e=>e;i(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((()=>(0,u.U5)((()=>s.loaded),(e=>{e&&k(s.value)}))),[s]),a.useEffect((()=>{s.loaded&&k(s.value)}),[s,t]),t?s.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:e=>h(e.target.value),style:{width:e.width},value:s.value,className:f(s.value),disabled:!s.loaded},e.select.map(((e,t)=>a.createElement(o,{value:e,key:t})))):a.createElement("input",{type:"text",style:{width:e.width},onChange:e=>h(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:()=>k(s.value),className:(0,r.default)(l[n],l.checkButton)},a.createElement(d.G,{icon:(b=n,"correct"===b?c.f8k:"wrong"===b?c.nYk:c.sph)}))):a.createElement(g.Z,null):a.createElement("div",null,"SSR");var b})),b=/--(?<klass>\w+)$/,v=e=>l[(e=>{if(b.test(e))return e.match(b).groups.klass})(e)],N=(0,i.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);const a=[...t.data.value.slice(0,n),e,...t.data.value.slice(n+1)];t.setData({...t.data,value:a})};return t.loaded?a.createElement("div",{className:l.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map(((l,r)=>e.select?a.createElement("select",{key:r,onChange:e=>n(e.target.value,r),value:l,className:v(l),disabled:!t.loaded},e.select.map(((e,t)=>a.createElement(o,{value:e,key:t})))):a.createElement("input",{key:r,type:"text",onChange:e=>n(e.target.value,r),value:l,disabled:!t.loaded||t.readonly})))):a.createElement(g.Z,null)}));var w=n(87462),y=n(75552);const E=(0,i.Pi)((e=>{const t=(0,p.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(y.Z,(0,w.Z)({model:t},e))):a.createElement(g.Z,null)}));var z=n(47271);const S=(0,i.Pi)((e=>(0,p.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,r.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var x=n(97762);const Z=e=>e.replace(/\s+/g,"").toUpperCase(),R=(0,i.Pi)((e=>{const t=(0,p.oR)("documentStore"),n=(0,p.oR)("msalStore"),l=t.find(e.webKey),r=(0,m.Z)();return(0,p.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||x.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),r?l?a.createElement("div",{"data--web-key":e.webKey},a.createElement(z.Z,null),n.loggedIn&&a.createElement(S,{webKey:e.webKey}),"text"===e.type&&a.createElement(E,e),"string"===e.type&&a.createElement(k,e),"array"===e.type&&a.createElement(N,e)):a.createElement(g.Z,null):a.createElement("div",null,"SSR")}))},47271:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);const l="noLoginAlert_HRfh";var r=n(39960),i=n(71217),s=n(21314);const o=(0,i.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:l},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(r.Z,{to:"/login"},"Login"))))},81013:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(34673);const r="finding_HjUo";var i=n(86010);const s=e=>a.createElement(l.Z,{summary:a.createElement("summary",null,e.title||"Gewonnene Erkenntnisse",a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),className:(0,i.default)("alert alert--warning",r)},e.children)},85107:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(65488);class r extends a.Component{render(){return a.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)}}},74322:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(86010);const r="loader_FEpR",i="badge_oWqf";var s=n(71217),o=n(92814),d=n(51436);const c=(0,s.Pi)((()=>a.createElement("div",{className:(0,l.default)(r)},a.createElement(o.G,{icon:d.IJ7,spin:!0}),a.createElement("span",{className:(0,l.default)("badge",i)},"Laden..."))))},75552:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294);const l="quillEditor_NxYB",r="quillAnswer_J46I",i="monospace_usc_",s="disableToolbar_bRdP";var o=n(86010),d=n(71217),c=n(74322),u=void 0;const m=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],p=e=>{const t=[];if(e.bold||e.italic||e.underline){const n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){const n=[];e.h1&&n.push(1),e.h2&&n.push(2),e.h3&&n.push(3),n.push(!1),t.push(n)}if(e.color||e.background){const n=[];e.color&&n.push({color:[]}),e.background&&n.push({background:[]}),t.push(n)}if(e.ul||e.ol){const n=[];e.ol&&n.push({list:"ordered"}),e.ul&&n.push({list:"bullet"}),t.push(n)}if(e.formula||e.image){const n=[];e.formula&&n.push("formula"),e.image&&n.push("image"),t.push(n)}return e.code&&t.push(["code-block"]),t},g=(0,d.Pi)((e=>{const[t,d]=a.useState(!1),[g,h]=a.useState(!1),f=a.useRef(null),{model:k}=e,b=e=>{e.preventDefault()};a.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();const a=[Promise.all([n.e(7762),n.e(8446),n.e(324),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(532),n.e(1940)]).then(n.bind(n,11940))],l={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(l.katex=a.length,a.push(n.e(1008).then(n.bind(n,41008)),Promise.all([n.e(532),n.e(37)]).then(n.bind(n,50037)))),Promise.all(a).then((t=>{u=t[l["react-quill"]].default;const n=t[l.quill].default,a=t[l["react-image-compress"]].default;if("katex"in l){const e=t[l.katex].default;window.katex=e}n.register("modules/imageCompress",a),e()}))}((()=>{t&&(h(!0),f&&f.current&&f.current.editor.getModule("toolbar").container.addEventListener("mousedown",b))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,f&&f.current&&f.current.editor.getModule("toolbar").container.removeEventListener("mousedown",b)}}),[e]);return u&&g&&k.loaded?a.createElement("div",{onFocus:()=>!t&&d(!0),className:(0,o.default)(l)},a.createElement(u,{ref:f,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,o.default)(r,e.monospace&&i,t?void 0:s),value:k.text||"",onChange:(t,n,a,l)=>{var r,i;r=t,void 0===i&&(i=0),!e.readonly&&k.canUpdate&&g&&k.setText(r)},modules:{toolbar:e.toolbar?p(e.toolbar):[...m,...p(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(c.Z,null)}))},44347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(87462),l=(n(67294),n(3905)),r=n(82593),i=n(81013);n(85162),n(85107);const s={title:"Routing im Alltag"},o="Routing im Alltag [^1]",d={unversionedId:"Netzwerke-of/Routing/routing-alltag",id:"Netzwerke-of/Routing/routing-alltag",title:"Routing im Alltag",description:"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie",source:"@site/docs/Netzwerke-of/003-Routing/01-routing-alltag.md",sourceDirName:"Netzwerke-of/003-Routing",slug:"/Netzwerke-of/Routing/routing-alltag",permalink:"/Netzwerke-of/Routing/routing-alltag",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/003-Routing/01-routing-alltag.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"12.10.2021",sidebarPosition:1,frontMatter:{title:"Routing im Alltag"},sidebar:"sidebar",previous:{title:"Routing",permalink:"/category/routing"},next:{title:"Routing im Internet",permalink:"/Netzwerke-of/Routing/routing-internet"}},c={},u=[{value:"Verkehrsbetriebe Biel",id:"verkehrsbetriebe-biel",level:2},{value:"gefundene Analogien",id:"gefundene-analogien",level:2},{value:"Routing f\xfcr Touristen",id:"routing-f\xfcr-touristen",level:2},{value:"Ausfall Schienennetz",id:"ausfall-schienennetz",level:2},{value:"Grosse Gruppe",id:"grosse-gruppe",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},p=m("Figure"),g=m("SourceRef"),h={toc:u};function f(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"routing-im-alltag-"},"Routing im Alltag ",(0,l.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"vorgehensweise"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Vorgehensweise")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"die Aufgaben l\xf6sen und die Ergebnisse notieren"),(0,l.kt)("li",{parentName:"ul"},"vor jedem \xabgewonnene Erkenntnisse\xbb \xfcberlegen Sie kurz, was eine gewonnene Erkenntnis sein k\xf6nnte \u2013 und zwar bevor Sie das K\xe4stchen aufklappen"),(0,l.kt)("li",{parentName:"ul"},"lesen Sie die \xabgewonnenen Erkenntnisse\xbb durch und \xfcberlegen Sie sich, was damit genau gemeint ist"),(0,l.kt)("li",{parentName:"ul"},"falls Sie eine Frage haben oder eine Erkenntnis notiert haben, die nicht aufgelistet wird, dann halten Sie diese fest, damit wir am Schluss dar\xfcber sprechen k\xf6nnen")))),(0,l.kt)("p",null,"Wir befinden uns auf der ",(0,l.kt)("a",{parentName:"p",href:"/Netzwerke-of/Schichtenmodell/Vermittlungsschicht"},"Vermittlungs-Schicht"),": Hier werden IP-Pakete vom Start- zum Zielger\xe4t \xfcbertragen. Bei ihrem Weg durch das Internet m\xfcssen die Pakete geleitet werden \u2013 man spricht von ",(0,l.kt)("strong",{parentName:"p"},"Routing"),"."),(0,l.kt)("h2",{id:"verkehrsbetriebe-biel"},"Verkehrsbetriebe Biel"),(0,l.kt)("p",null,"Durch das Verkehrsnetz der Verkehrsbetriebe Biel wird der \xf6ffentliche Verkehr in der Stadt Biel sichergestellt."),(0,l.kt)(p,{options:{},mdxType:"Figure"},(0,l.kt)("img",{src:n(53142).Z,width:"1451",height:"749"}),(0,l.kt)("figcaption",{parentName:"Figure"},(0,l.kt)(g,{parentName:"figcaption",bib:{author:"VB TPD",source:"https://www.vb-tpb.ch/de/fahren/linien-netzplan/",licence:"Public Domain",licence_url:"",edited:!0},mdxType:"SourceRef"}))),(0,l.kt)("p",null,"Sie m\xf6chten mit dem \xd6V vom Gymnasium (L\xe4ndtestrasse 12, Biel/Bienne) zum Sportplatz Mettmoos fahren."),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"mit-dem-netzplan"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Mit dem Netzplan")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten sehen Sie auf dem Liniennetz?"),(0,l.kt)(r.Z,{type:"text",id:"q1",webKey:"d6938484-81a6-4240-bbd0-b94ed04bdc72",mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"-mit-google-maps"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"\ud83d\udcbb mit Google Maps")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Welchen Transportoptionen schl\xe4gt Ihnen ",(0,l.kt)("a",{parentName:"p",href:"https://www.google.com/maps/dir/Gymnasium+Biel-Seeland,+L%C3%A4ndtestrasse+12,+2503+Biel/Sports+Ground+Mettmoos,+Parkplatz+Mettmoos,+2504+Biel/@47.1389934,7.2384864,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478e195743e2cd43:0x7eeeab7e9cc7fa72!2m2!1d7.2359916!2d47.1334096!1m5!1m1!1s0x478e192b26b851e1:0x5e85058550f44003!2m2!1d7.2756948!2d47.1390779!3e3"},"Google Maps")," vor, wenn Sie die Route ",(0,l.kt)("em",{parentName:"p"},"L\xe4ndtestrasse 12")," \u2192 ",(0,l.kt)("em",{parentName:"p"},"Sportplatz Mettmoos")," suchen?"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Welche Optionen werden vorgeschlagen?"),(0,l.kt)("li",{parentName:"ul"},"Welches ist gem\xe4ss Google die beste Route?"),(0,l.kt)("li",{parentName:"ul"},"\xc4ndert sich die Route, wenn sie m\xf6glichst kurze Fusswege enthalten soll? (Einstellbar unter ",(0,l.kt)("em",{parentName:"li"},"Routenoptionen"),")"),(0,l.kt)("li",{parentName:"ul"},"\xc4ndert sich der Reisevorschlag, wenn Sie sp\xe4t in der Nacht eine Verbindung suchen?")),(0,l.kt)(r.Z,{type:"text",id:"q2",webKey:"482bf3ac-ff0d-44ca-9700-5274cf9fecd4",mdxType:"Answer"}))),(0,l.kt)(i.Z,{mdxType:"Finding"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Es gibt mehrere Wege, welche ans Ziel f\xfchren."),(0,l.kt)("li",{parentName:"ul"},"Der optimale Weg ist abh\xe4ngig von den Rahmenbedingungen und kann sich ",(0,l.kt)("strong",{parentName:"li"},"\xe4ndern"),"."))),(0,l.kt)("h2",{id:"gefundene-analogien"},"gefundene Analogien"),(0,l.kt)("div",{className:"no-table-header"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"}),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"WLAN")),(0,l.kt)("td",{parentName:"tr",align:"left"},"zu Fuss bis zur n\xe4chsten Haltestelle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"Sichtbare WLANs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Haltestellen, die zu Fuss erreichbar sind: Bahnhof & Badhausstrasse")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"Rechnernetz (LAN)")),(0,l.kt)("td",{parentName:"tr",align:"left"},"mit Bus (f\xfcr weiter entfernte Ziele: Tram, Zug, ...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("strong",{parentName:"td"},"Router")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Umsteigen an gewissen Haltestellen"))))),(0,l.kt)("h2",{id:"routing-f\xfcr-touristen"},"Routing f\xfcr Touristen"),(0,l.kt)("p",null,"Datenpakete sind \u2013 anders als wir als Passagiere vom ",(0,l.kt)("em",{parentName:"p"},"\xd6V")," \u2013 nicht intelligent. Sie wissen nicht, wie sie umsteigen m\xfcssen. Dies muss f\xfcr sie \xfcbernommen werden."),(0,l.kt)("p",null,"Ein Datenpaket im \xd6V vom Gymer zum Sportplatz Mettmoos m\xfcsste"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"an ",(0,l.kt)("strong",{parentName:"li"},"jeder Haltestelle")," wissen:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ob man Aussteigen oder Umsteigen muss"),(0,l.kt)("li",{parentName:"ul"},"in welchen Bus man einsteigen muss"),(0,l.kt)("li",{parentName:"ul"},"ob man am Ziel angekommen ist.")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"an jeder Strassenkreuzung (wenn zu Fuss unterwegs) wissen:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"welche Abzweigung es nehmen soll"),(0,l.kt)("li",{parentName:"ul"},"ob es am Ziel angekommen ist.")),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"routing-tabelle"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Routing-Tabelle")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'Erstellen Sie f\xfcr das Ziel "Sportplatz Mettmoos" Umsteige-Anleitungen f\xfcr Datenpakete gem\xe4ss obigem Punkt 1. f\xfcr die folgenden Haltestellen:'),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Seehofweg"),(0,l.kt)("li",{parentName:"ul"},"Bahnhof Biel"),(0,l.kt)("li",{parentName:"ul"},"M\xfchlestrasse/Moulin"),(0,l.kt)("li",{parentName:"ul"},"Schulen Linde"),(0,l.kt)("li",{parentName:"ul"},"Bahnhof Mett")),(0,l.kt)("p",{parentName:"div"},"Beispiel-Anleitung: ",(0,l.kt)("strong",{parentName:"p"},"Seehofweg")," \u2192 Bus Nr. 9"),(0,l.kt)(r.Z,{type:"text",id:"q3",webKey:"7bcc9f60-6fe8-4162-b45f-8cda4e248730",mdxType:"Answer"}))),(0,l.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div",id:"andere-ziele"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,l.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Andere Ziele")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Die Anleitungen m\xfcssten nat\xfcrlich auch Anweisungen haben f\xfcr andere Ziele."),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},'Wie w\xfcrden die Umsteigungsanweisungen f\xfcr die 5 obenstehenden Haltestellen f\xfcr das Ziel "Bern" lauten?'),(0,l.kt)("li",{parentName:"ul"},'Wie f\xfcr das Ziel "Z\xfcrich"?'),(0,l.kt)("li",{parentName:"ul"},"Muss jede Haltestelle wirklich Anweisungen f\xfcr jedes andere Ziel haben?")),(0,l.kt)(r.Z,{type:"text",id:"q4",webKey:"609cfe7e-bab0-4a50-97c7-7b3ac571fba0",mdxType:"Answer"}))),(0,l.kt)(i.Z,{mdxType:"Finding"},(0,l.kt)("p",null,'Es k\xf6nnen Anweisungen "delegiert" werden: Es muss nur der ',(0,l.kt)("em",{parentName:"p"},"Bahnhof Biel")," wissen, in welchen Zug man einsteigen muss um nach Bern oder Z\xfcrich zu fahren. Die anderen Haltestellen leiten alle Anfragen ausserhalb des Biel-Netzes an den ",(0,l.kt)("em",{parentName:"p"},"Bahnhof Biel")," weiter.")),(0,l.kt)("h2",{id:"ausfall-schienennetz"},"Ausfall Schienennetz"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'Wegen Umbauarbeiten f\xe4llt die Linie Nr. 9 ab "Br\xfchlplatz" aus. Welche M\xf6glichkeiten haben Sie, wenn Sie beim ',(0,l.kt)("em",{parentName:"p"},"Seehofweg")," eingestiegen sind, um doch an den Sportplatz zu gelangen?")),(0,l.kt)(i.Z,{mdxType:"Finding"},(0,l.kt)("p",null,"Es gibt verschiedene Wege zum Ziel - auch nicht optimale Wege, die normalerweise nicht benutzt werden. Diese Optionen erm\xf6glichen aber eine gewisse ",(0,l.kt)("strong",{parentName:"p"},"Ausfallsicherheit"),". Im Beispiel oben k\xf6nnen Sie entweder beim Bahnhof Biel oder beim Br\xfchlplatz auf eine andere Verbindung umsteigen. ")),(0,l.kt)("h2",{id:"grosse-gruppe"},"Grosse Gruppe"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"4 Parallelklassen \u2013 also ca. 100 Personen haben beim Sportplatz Mettmoos abgemacht.\nWie kommen sie am schnellsten dahin, wenn wir damit rechnen, dass wegen Corona und dem Feierabendverkehr maximal 25 Personen pro Bus Platz finden?")),(0,l.kt)(i.Z,{mdxType:"Finding"},(0,l.kt)("p",null,"Bei Engp\xe4ssen k\xf6nnen verschiedene Wege gleichzeitig benutzt werden. (Load-Balancing)")),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,l.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html"},"informatik.mygymer.ch"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},53142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vb-verkehrsnetz-b17e10bcbeb65e0a89a8fbdff92e9906.png"}}]);