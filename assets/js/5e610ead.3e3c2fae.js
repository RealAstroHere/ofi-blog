"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7500],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>N});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},d=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(t),N=r,v=c["".concat(l,".").concat(N)]||c[N]||s[N]||i;return t?n.createElement(v,m(m({ref:a},d),{},{components:t})):n.createElement(v,m({ref:a},d))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var o=2;o<i;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},34673:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(83117),r=t(67294),i=t(86010),m=t(72389),p=t(86043);const l="details_lb9f",o="isBrowser_bmU9",d="collapsibleContent_i85q";function s(e){return!!e&&("SUMMARY"===e.tagName||s(e.parentElement))}function c(e,a){return!!e&&(e===a||c(e.parentElement,a))}function N(e){let{summary:a,children:t,...N}=e;const v=(0,m.Z)(),k=(0,r.useRef)(null),{collapsed:h,setCollapsed:u}=(0,p.u)({initialState:!N.open}),[g,f]=(0,r.useState)(N.open);return r.createElement("details",(0,n.Z)({},N,{ref:k,open:g,"data-collapsed":h,className:(0,i.default)(l,v&&o,N.className),onMouseDown:e=>{s(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const a=e.target;s(a)&&c(a,k.current)&&(e.preventDefault(),h?(u(!1),f(!0)):u(!0))}}),null!=a?a:r.createElement("summary",null,"Details"),r.createElement(p.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),f(!e)}},r.createElement("div",{className:d},t)))}const v="details_b_Ee";function k(e){let{...a}=e;return r.createElement(N,(0,n.Z)({},a,{className:(0,i.default)("alert alert--info",v,a.className)}))}},13155:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(71217),r=t(67294),i=t(34673),m=t(86010),p=t(86720);const l=()=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",style:{marginTop:"5px"}},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),o=(0,n.Pi)((e=>{let{title:a}=e;return r.createElement("div",{className:(0,m.default)(p.Z.wrapper,"hint-wrapper")},r.createElement(i.Z,{summary:r.createElement("summary",null,a||"Hinweis"," ",r.createElement(l,null)),className:(0,m.default)("alert alert--warning",p.Z.hint)},e.children))}))},42958:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>l,toc:()=>d});var n=t(83117),r=(t(67294),t(3905)),i=t(13155);const m={sidebar_custom_props:{id:"b3872ad6-c78b-4672-ad8f-7d86d8156dba"}},p="Textverarbeitung",l={unversionedId:"Programmieren-1/Python/strings",id:"Programmieren-1/Python/strings",title:"Textverarbeitung",description:"In Python lassen sich Texte ver\xe4ndern.",source:"@site/docs/Programmieren-1/03-Python/03-strings.md",sourceDirName:"Programmieren-1/03-Python",slug:"/Programmieren-1/Python/strings",permalink:"/Programmieren-1/Python/strings",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/03-Python/03-strings.md",tags:[],version:"current",lastUpdatedAt:1659798183,formattedLastUpdatedAt:"6. Aug. 2022",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"b3872ad6-c78b-4672-ad8f-7d86d8156dba"}},sidebar:"sidebar",previous:{title:"Python Befehle",permalink:"/Programmieren-1/Python/Befehle"},next:{title:"Test 25h",permalink:"/Programmieren-1/Testumgebung/25h-test/Probe"}},o={},d=[{value:"Gross- und Kleinschreibung",id:"gross--und-kleinschreibung",level:2},{value:"Text ersetzen",id:"text-ersetzen",level:2},{value:"Gr\xfcfnisch",id:"gr\xfcfnisch",level:2},{value:"Beispiel",id:"beispiel",level:2}],s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=s("Comment"),N=s("Solution"),v={toc:d};function k(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"textverarbeitung"},"Textverarbeitung"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"textverarbeitung-1"},"Textverarbeitung"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Python lassen sich Texte ver\xe4ndern."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"gross--und-kleinschreibung"},"Gross- und Kleinschreibung"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"upper"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},"upper()")),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\ngross = text.upper()\n\nprint(gross)\n')))),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"lower"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},"lower()")),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\nklein = text.lower()\n\nprint(klein)\n')))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"text-ersetzen"},"Text ersetzen"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"replace"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},"replace()")),(0,r.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit replace(alt, neu) k\xf6nnen Text-Teile in einem Text ersetzt werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\n\n# Alle . durch !!! ersetzen\ntext = text.replace(".", "!!!")\n\nprint(text)\n')))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"gross---kleinschreibung"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Gross- & Kleinschreibung"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Python nimmts genau beim ersetzen - die Gross- & Kleinschreibung spielt eine Rolle!"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im folgenden Beispiel wird etwa nur das kleingeschriebene ",(0,r.kt)("inlineCode",{parentName:"p"},"ich")," ersetzt, jedoch auch wenn es inmitten eines Textes auftritt."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\ntext = text.replace("ich", "ICH")\n\nprint(text)\n')))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"gr\xfcfnisch"},"Gr\xfcfnisch"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Gr\xfcfnisch ist in der Schweiz unter Jugendlichen und Kindern eine verbreitete Spielsprache. Diese Sprache wird von vielen Kindern und Jugendlichen auch als Geheimsprache benutzt. Bei \u201eGr\xfcfnisch\u201c werden die Vokale ",(0,r.kt)("strong",{parentName:"p"},"a"),", ",(0,r.kt)("strong",{parentName:"p"},"e"),", ",(0,r.kt)("strong",{parentName:"p"},"i"),", ",(0,r.kt)("strong",{parentName:"p"},"o"),", ",(0,r.kt)("strong",{parentName:"p"},"u"),", ",(0,r.kt)("strong",{parentName:"p"},"\xe4"),", ",(0,r.kt)("strong",{parentName:"p"},"\xf6")," und ",(0,r.kt)("strong",{parentName:"p"},"\xfc")," durch ",(0,r.kt)("strong",{parentName:"p"},"anafa"),", ",(0,r.kt)("strong",{parentName:"p"},"enefe"),", ",(0,r.kt)("strong",{parentName:"p"},"inifi"),", ",(0,r.kt)("strong",{parentName:"p"},"onofo"),", ",(0,r.kt)("strong",{parentName:"p"},"unufu"),", ",(0,r.kt)("strong",{parentName:"p"},"\xe4n\xe4f\xe4"),", ",(0,r.kt)("strong",{parentName:"p"},"\xf6n\xf6f\xf6")," und ",(0,r.kt)("strong",{parentName:"p"},"\xfcn\xfcf\xfc")," ersetzt (z. B.: \u201eHanafallonofo\u201c = \u201eHallo\u201c). Ausnahme: Bei Diphthongen/Zwielauten wird nur der erste verl\xe4ngert (z. B. \u201eau\u201c \u21d2 \u201eanafau\u201c). ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beispiel"},"Beispiel"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Gymnasium Biel Seeland")," heisst auf Gr\xfcfnisch ",(0,r.kt)("inlineCode",{parentName:"p"},"Gymnanafasinifiunufum Binifienefel-Senefeenefelanafand")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"deutsch--gr\xfcfnisch"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Deutsch \u2192 Gr\xfcfnisch"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:10,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie ein Programm, welches"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"die Benutzer:in nach einem deutschen Satz fragt"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"diesen Satz zu Gr\xfcfnisch umwandelt"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"den gr\xfcfnischen Satz ausgibt"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zeichnen Sie in einem ersten Schritt zusammen mit ihrer Pultnachbar:in ein Struktogramm f\xfcr das Programm."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=zu__gr\xfcfnisch.py id=3b676c25-0261-4b06-9a4c-93c6acf7fe97",live_py:!0,title:"zu__gr\xfcfnisch.py",id:"3b676c25-0261-4b06-9a4c-93c6acf7fe97"},"from cowsay import cow\n\n")),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zusatz \u2b50\ufe0f: Verwenden Sie anstelle von ",(0,r.kt)("inlineCode",{parentName:"p"},"print()")," den Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"cow()")," - was passiert? "),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"Hint"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ersetzen Sie jeden Vokal nacheinander, wobei Sie das Resultat immer wieder in derselben Variable speichern:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'a'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'anafa'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'e'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'enefe'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'i'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'inifi'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'o'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'onofo'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'u'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'unufu'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'\xe4'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'\xe4n\xe4f\xe4'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'\xf6'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'\xf6n\xf6f\xf6'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"'\xfc'")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"'\xfcn\xfcf\xfc'")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"}))))),(0,r.kt)(i.Z,{title:"Weitere Figuren",mdxType:"Hint"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Anstelle von ",(0,r.kt)("inlineCode",{parentName:"p"},"cow()")," k\xf6nnen auch andere Figuren verwendet werden. Diese muss dann aber auch aus der Bibliothek ",(0,r.kt)("inlineCode",{parentName:"p"},"cowsay")," importiert werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"beavis")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"cheese")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"daemon")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"cow")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"dragon")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"ghostbusters")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"kitty")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"meow")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"milk")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:30,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"stegosaurus")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:31,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"stimpy")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:32,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"turkey")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:33,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"turtle")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:34,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"tux")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:35,mdxType:"Comment"}))))),(0,r.kt)(N,{webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import cow\ntext = input('Berndeutschen Satz?')\n\ngr\xfcfnisch = text.lower()\ngr\xfcfnisch = gr\xfcfnisch.replace('a', 'anafa')\ngr\xfcfnisch = gr\xfcfnisch.replace('e', 'enefe')\ngr\xfcfnisch = gr\xfcfnisch.replace('i', 'inifi')\ngr\xfcfnisch = gr\xfcfnisch.replace('o', 'onofo')\ngr\xfcfnisch = gr\xfcfnisch.replace('u', 'unufu')\ngr\xfcfnisch = gr\xfcfnisch.replace('\xe4', '\xe4n\xe4f\xe4')\ngr\xfcfnisch = gr\xfcfnisch.replace('\xf6', '\xf6n\xf6f\xf6')\ngr\xfcfnisch = gr\xfcfnisch.replace('\xfc', '\xfcn\xfcf\xfc')\n\ncow(gr\xfcfnisch)\n"))),(0,r.kt)(N,{title:"\u2b50\ufe0f Kurzschreibweise",webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import beavis\ntext = input('Berndeutschen Satz?')\n\ngr\xfcfnisch = text.lower()\nfor vokal in 'aeiou\xe4\xf6\xfc':\n    neu = f'{vokal}n{vokal}f{vokal}'\n    gr\xfcfnisch = gr\xfcfnisch.replace(vokal, neu)\nbeavis(gr\xfcfnisch)\n"))),(0,r.kt)(N,{title:"\u2b50\ufe0f Zusatz: Diphthonge",webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import beavis\nimport itertools\ntext = input('Berndeutschen Satz?')\n\ngr\xfcfnisch = text.lower()\n# alle Diphdonge durch Grossbuchstaben ersetzen\nfor diphdong in ['aa', 'ae', 'ai', 'ao', 'au', 'a\xe4', 'a\xf6', 'a\xfc', 'ee', 'ea', 'ei', 'eo', 'eu', 'e\xe4', 'e\xf6', 'e\xfc', 'ii', 'ia', 'ie', 'io', 'iu', 'i\xe4', 'i\xf6', 'i\xfc', 'oo', 'oa', 'oe', 'oi', 'ou', 'o\xe4', 'o\xf6', 'o\xfc', 'uu', 'ua', 'ue', 'ui', 'uo', 'u\xe4', 'u\xf6', 'u\xfc', '\xe4\xe4', '\xe4a', '\xe4e', '\xe4i', '\xe4o', '\xe4u', '\xe4\xf6', '\xe4\xfc', '\xf6\xf6', '\xf6a', '\xf6e', '\xf6i', '\xf6o', '\xf6u', '\xf6\xe4', '\xf6\xfc', '\xfc\xfc', '\xfca', '\xfce', '\xfci', '\xfco', '\xfcu', '\xfc\xe4', '\xfc\xf6']:\n    gr\xfcfnisch.replace(diphdong, diphdong.upper())\n\nfor vokal in 'aeiou\xe4\xf6\xfc':\n    neu = f'{vokal}n{vokal}f{vokal}'\n    gr\xfcfnisch = gr\xfcfnisch.replace(vokal, neu)\n\n# alle grossen Diphonge auf Gr\xfcfnisch \xfcbersetzen\nfor diphdong in ['AA', 'AE', 'AI', 'AO', 'AU', 'A\xc4', 'A\xd6', 'A\xdc', 'EE', 'EA', 'EI', 'EO', 'EU', 'E\xc4', 'E\xd6', 'E\xdc', 'II', 'IA', 'IE', 'IO', 'IU', 'I\xc4', 'I\xd6', 'I\xdc', 'OO', 'OA', 'OE', 'OI', 'OU', 'O\xc4', 'O\xd6', 'O\xdc', 'UU', 'UA', 'UE', 'UI', 'UO', 'U\xc4', 'U\xd6', 'U\xdc', '\xc4\xc4', '\xc4A', '\xc4E', '\xc4I', '\xc4O', '\xc4U', '\xc4\xd6', '\xc4\xdc', '\xd6\xd6', '\xd6A', '\xd6E', '\xd6I', '\xd6O', '\xd6U', '\xd6\xc4', '\xd6\xdc', '\xdc\xdc', '\xdcA', '\xdcE', '\xdcI', '\xdcO', '\xdcU', '\xdc\xc4', '\xdc\xd6']:\n    vokal1 = diphdong[0].lower() # erster Buchstabe\n    vokal2 = diphdong[1].lower() # zweiter Buchstabe\n    neu = f'{vokal1}n{vokal1}f{vokal1}'\n    gr\xfcfnisch.replace(diphdong, f'{neu}{vokal2}')\n    \nbeavis(gr\xfcfnisch)\n"))))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"gr\xfcfnisch--deutsch"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Gr\xfcfnisch \u2192 Deutsch"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:11,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"K\xf6nnen Sie auch ein Programm schreiben, welches vom Gr\xfcfnisch ins Berndeutsch \xfcbersetzt?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:36,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=von_gr\xfcfnisch.py id=c3fd9f11-7cae-40b7-8c5a-78568036676e",live_py:!0,title:"von_gr\xfcfnisch.py",id:"c3fd9f11-7cae-40b7-8c5a-78568036676e"},"")),(0,r.kt)(N,{webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import beavis\ntext = input('Berndeutschen Satz?')\n\nberndeutsch = text.lower()\nberndeutsch = berndeutsch.replace('anafa', 'a')\nberndeutsch = berndeutsch.replace('enefe', 'e')\nberndeutsch = berndeutsch.replace('inifi', 'i')\nberndeutsch = berndeutsch.replace('onofo', 'o')\nberndeutsch = berndeutsch.replace('unufu', 'u')\nberndeutsch = berndeutsch.replace('\xe4n\xe4f\xe4', '\xe4')\nberndeutsch = berndeutsch.replace('\xf6n\xf6f\xf6', '\xf6')\nberndeutsch = berndeutsch.replace('\xfcn\xfcf\xfc', '\xfc')\n\nbeavis(berndeutsch)\n"))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle: ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/Spielsprache#Gr%C3%BCfnisch"},"Wikipedia")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:37,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}k.isMDXComponent=!0},86720:(e,a,t)=>{t.d(a,{Z:()=>n});const n={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);