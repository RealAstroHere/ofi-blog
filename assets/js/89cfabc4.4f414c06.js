"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34673:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(83117),i=t(67294),r=t(86010),l=t(72389),o=t(86043);const s="details_lb9f",c="isBrowser_bmU9",p="collapsibleContent_i85q";function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function d(e,n){return!!e&&(e===n||d(e.parentElement,n))}function u(e){let{summary:n,children:t,...u}=e;const h=(0,l.Z)(),f=(0,i.useRef)(null),{collapsed:g,setCollapsed:k}=(0,o.u)({initialState:!u.open}),[v,N]=(0,i.useState)(u.open);return i.createElement("details",(0,a.Z)({},u,{ref:f,open:v,"data-collapsed":g,className:(0,r.default)(s,h&&c,u.className),onMouseDown:e=>{m(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;m(n)&&d(n,f.current)&&(e.preventDefault(),g?(k(!1),N(!0)):k(!0))}}),null!=n?n:i.createElement("summary",null,"Details"),i.createElement(o.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),N(!e)}},i.createElement("div",{className:p},t)))}const h="details_b_Ee";function f(e){let{...n}=e;return i.createElement(u,(0,a.Z)({},n,{className:(0,r.default)("alert alert--info",h,n.className)}))}},13155:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(71217),i=t(67294),r=t(34673),l=t(86010),o=t(86720);const s=()=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16",style:{marginTop:"5px"}},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),c=(0,a.Pi)((e=>{let{title:n}=e;return i.createElement("div",{className:(0,l.default)(o.Z.wrapper,"hint-wrapper")},i.createElement(r.Z,{summary:i.createElement("summary",null,n||"Hinweis"," ",i.createElement(s,null)),className:(0,l.default)("alert alert--warning",o.Z.hint)},e.children))}))},16284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(83117),i=(t(67294),t(3905)),r=t(13155);const l={title:"Textverarbeitung"},o="Textverarbeitung",s={unversionedId:"Programmieren-1/Python/strings",id:"version-25h/Programmieren-1/Python/strings",title:"Textverarbeitung",description:"In Python lassen sich Texte ver\xe4ndern.",source:"@site/versioned_docs/version-25h/04-Programmieren-1/03-Python/03-strings.md",sourceDirName:"04-Programmieren-1/03-Python",slug:"/Programmieren-1/Python/strings",permalink:"/25h/Programmieren-1/Python/strings",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/04-Programmieren-1/03-Python/03-strings.md",tags:[],version:"25h",sidebarPosition:3,frontMatter:{title:"Textverarbeitung"},sidebar:"version-25h/sidebar",previous:{title:"Python Befehle",permalink:"/25h/Programmieren-1/Python/Befehle"},next:{title:"Test 25h",permalink:"/25h/Programmieren-1/Test/Probe"}},c={},p=[{value:"Gross- und Kleinschreibung",id:"gross--und-kleinschreibung",level:2},{value:"Text ersetzen",id:"text-ersetzen",level:2},{value:"Gr\xfcfnisch",id:"gr\xfcfnisch",level:2},{value:"Beispiel",id:"beispiel",level:2}],m=(d="Solution",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const u={toc:p};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"textverarbeitung"},"Textverarbeitung"),(0,i.kt)("p",null,"In Python lassen sich Texte ver\xe4ndern."),(0,i.kt)("h2",{id:"gross--und-kleinschreibung"},"Gross- und Kleinschreibung"),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"upper"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"upper()"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\ngross = text.upper()\n\nprint(gross)\n')))),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"lower"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"lower()"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\nklein = text.lower()\n\nprint(klein)\n')))),(0,i.kt)("h2",{id:"text-ersetzen"},"Text ersetzen"),(0,i.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"replace"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"replace()"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Mit replace(alt, neu) k\xf6nnen Text-Teile in einem Text ersetzt werden."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\n\n# Alle . durch !!! ersetzen\ntext = text.replace(".", "!!!")\n\nprint(text)\n')))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"gross---kleinschreibung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Gross- & Kleinschreibung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Python nimmts genau beim ersetzen - die Gross- & Kleinschreibung spielt eine Rolle!"),(0,i.kt)("p",{parentName:"div"},"Im folgenden Beispiel wird etwa nur das kleingeschriebene ",(0,i.kt)("inlineCode",{parentName:"p"},"ich")," ersetzt, jedoch auch wenn es inmitten eines Textes auftritt."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},'text = "Hallo ich bin Alfred. Ich schreibe an einem wichtigen Buch."\ntext = text.replace("ich", "ICH")\n\nprint(text)\n')))),(0,i.kt)("h2",{id:"gr\xfcfnisch"},"Gr\xfcfnisch"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gr\xfcfnisch ist in der Schweiz unter Jugendlichen und Kindern eine verbreitete Spielsprache. Diese Sprache wird von vielen Kindern und Jugendlichen auch als Geheimsprache benutzt. Bei \u201eGr\xfcfnisch\u201c werden die Vokale ",(0,i.kt)("strong",{parentName:"p"},"a"),", ",(0,i.kt)("strong",{parentName:"p"},"e"),", ",(0,i.kt)("strong",{parentName:"p"},"i"),", ",(0,i.kt)("strong",{parentName:"p"},"o"),", ",(0,i.kt)("strong",{parentName:"p"},"u"),", ",(0,i.kt)("strong",{parentName:"p"},"\xe4"),", ",(0,i.kt)("strong",{parentName:"p"},"\xf6")," und ",(0,i.kt)("strong",{parentName:"p"},"\xfc")," durch ",(0,i.kt)("strong",{parentName:"p"},"anafa"),", ",(0,i.kt)("strong",{parentName:"p"},"enefe"),", ",(0,i.kt)("strong",{parentName:"p"},"inifi"),", ",(0,i.kt)("strong",{parentName:"p"},"onofo"),", ",(0,i.kt)("strong",{parentName:"p"},"unufu"),", ",(0,i.kt)("strong",{parentName:"p"},"\xe4n\xe4f\xe4"),", ",(0,i.kt)("strong",{parentName:"p"},"\xf6n\xf6f\xf6")," und ",(0,i.kt)("strong",{parentName:"p"},"\xfcn\xfcf\xfc")," ersetzt (z. B.: \u201eHanafallonofo\u201c = \u201eHallo\u201c). Ausnahme: Bei Diphthongen/Zwielauten wird nur der erste verl\xe4ngert (z. B. \u201eau\u201c \u21d2 \u201eanafau\u201c). ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,i.kt)("h2",{id:"beispiel"},"Beispiel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Gymnasium Biel Seeland")," heisst auf Gr\xfcfnisch ",(0,i.kt)("inlineCode",{parentName:"p"},"Gymnanafasinifiunufum Binifienefel-Senefeenefelanafand")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"deutsch--gr\xfcfnisch"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Deutsch \u2192 Gr\xfcfnisch")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Erstellen Sie ein Programm, welches"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"die Benutzer:in nach einem deutschen Satz fragt"),(0,i.kt)("li",{parentName:"ul"},"diesen Satz zu Gr\xfcfnisch umwandelt"),(0,i.kt)("li",{parentName:"ul"},"den gr\xfcfnischen Satz ausgibt")),(0,i.kt)("p",{parentName:"div"},"Zeichnen Sie in einem ersten Schritt zusammen mit ihrer Pultnachbar:in ein Struktogramm f\xfcr das Programm."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=zu__gr\xfcfnisch.py id=3b676c25-0261-4b06-9a4c-93c6acf7fe97",live_py:!0,title:"zu__gr\xfcfnisch.py",id:"3b676c25-0261-4b06-9a4c-93c6acf7fe97"},"from cowsay import cow\n\n")),(0,i.kt)("p",{parentName:"div"},"Zusatz \u2b50\ufe0f: Verwenden Sie anstelle von ",(0,i.kt)("inlineCode",{parentName:"p"},"print()")," den Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"cow()")," - was passiert? "),(0,i.kt)(r.Z,{mdxType:"Hint"},(0,i.kt)("p",{parentName:"div"},"Ersetzen Sie jeden Vokal nacheinander, wobei Sie das Resultat immer wieder in derselben Variable speichern:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'a'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'anafa'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'e'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'enefe'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'i'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'inifi'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'o'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'onofo'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'u'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'unufu'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'\xe4'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'\xe4n\xe4f\xe4'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'\xf6'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'\xf6n\xf6f\xf6'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"'\xfc'")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"'\xfcn\xfcf\xfc'")))),(0,i.kt)(r.Z,{title:"Weitere Figuren",mdxType:"Hint"},(0,i.kt)("p",{parentName:"div"},"Anstelle von ",(0,i.kt)("inlineCode",{parentName:"p"},"cow()")," k\xf6nnen auch andere Figuren verwendet werden. Diese muss dann aber auch aus der Bibliothek ",(0,i.kt)("inlineCode",{parentName:"p"},"cowsay")," importiert werden."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"beavis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cheese")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"daemon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dragon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ghostbusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kitty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"milk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stegosaurus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stimpy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"turkey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"turtle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tux")))),(0,i.kt)(m,{webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import cow\ntext = input('Berndeutschen Satz?')\n\ngr\xfcfnisch = text.lower()\ngr\xfcfnisch = gr\xfcfnisch.replace('a', 'anafa')\ngr\xfcfnisch = gr\xfcfnisch.replace('e', 'enefe')\ngr\xfcfnisch = gr\xfcfnisch.replace('i', 'inifi')\ngr\xfcfnisch = gr\xfcfnisch.replace('o', 'onofo')\ngr\xfcfnisch = gr\xfcfnisch.replace('u', 'unufu')\ngr\xfcfnisch = gr\xfcfnisch.replace('\xe4', '\xe4n\xe4f\xe4')\ngr\xfcfnisch = gr\xfcfnisch.replace('\xf6', '\xf6n\xf6f\xf6')\ngr\xfcfnisch = gr\xfcfnisch.replace('\xfc', '\xfcn\xfcf\xfc')\n\ncow(gr\xfcfnisch)\n"))),(0,i.kt)(m,{title:"\u2b50\ufe0f Kurzschreibweise",webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import beavis\ntext = input('Berndeutschen Satz?')\n\ngr\xfcfnisch = text.lower()\nfor vokal in 'aeiou\xe4\xf6\xfc':\n    neu = f'{vokal}n{vokal}f{vokal}'\n    gr\xfcfnisch = gr\xfcfnisch.replace(vokal, neu)\nbeavis(gr\xfcfnisch)\n"))),(0,i.kt)(m,{title:"\u2b50\ufe0f Zusatz: Diphthonge",webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import beavis\nimport itertools\ntext = input('Berndeutschen Satz?')\n\ngr\xfcfnisch = text.lower()\n# alle Diphdonge durch Grossbuchstaben ersetzen\nfor diphdong in ['aa', 'ae', 'ai', 'ao', 'au', 'a\xe4', 'a\xf6', 'a\xfc', 'ee', 'ea', 'ei', 'eo', 'eu', 'e\xe4', 'e\xf6', 'e\xfc', 'ii', 'ia', 'ie', 'io', 'iu', 'i\xe4', 'i\xf6', 'i\xfc', 'oo', 'oa', 'oe', 'oi', 'ou', 'o\xe4', 'o\xf6', 'o\xfc', 'uu', 'ua', 'ue', 'ui', 'uo', 'u\xe4', 'u\xf6', 'u\xfc', '\xe4\xe4', '\xe4a', '\xe4e', '\xe4i', '\xe4o', '\xe4u', '\xe4\xf6', '\xe4\xfc', '\xf6\xf6', '\xf6a', '\xf6e', '\xf6i', '\xf6o', '\xf6u', '\xf6\xe4', '\xf6\xfc', '\xfc\xfc', '\xfca', '\xfce', '\xfci', '\xfco', '\xfcu', '\xfc\xe4', '\xfc\xf6']:\n    gr\xfcfnisch.replace(diphdong, diphdong.upper())\n\nfor vokal in 'aeiou\xe4\xf6\xfc':\n    neu = f'{vokal}n{vokal}f{vokal}'\n    gr\xfcfnisch = gr\xfcfnisch.replace(vokal, neu)\n\n# alle grossen Diphonge auf Gr\xfcfnisch \xfcbersetzen\nfor diphdong in ['AA', 'AE', 'AI', 'AO', 'AU', 'A\xc4', 'A\xd6', 'A\xdc', 'EE', 'EA', 'EI', 'EO', 'EU', 'E\xc4', 'E\xd6', 'E\xdc', 'II', 'IA', 'IE', 'IO', 'IU', 'I\xc4', 'I\xd6', 'I\xdc', 'OO', 'OA', 'OE', 'OI', 'OU', 'O\xc4', 'O\xd6', 'O\xdc', 'UU', 'UA', 'UE', 'UI', 'UO', 'U\xc4', 'U\xd6', 'U\xdc', '\xc4\xc4', '\xc4A', '\xc4E', '\xc4I', '\xc4O', '\xc4U', '\xc4\xd6', '\xc4\xdc', '\xd6\xd6', '\xd6A', '\xd6E', '\xd6I', '\xd6O', '\xd6U', '\xd6\xc4', '\xd6\xdc', '\xdc\xdc', '\xdcA', '\xdcE', '\xdcI', '\xdcO', '\xdcU', '\xdc\xc4', '\xdc\xd6']:\n    vokal1 = diphdong[0].lower() # erster Buchstabe\n    vokal2 = diphdong[1].lower() # zweiter Buchstabe\n    neu = f'{vokal1}n{vokal1}f{vokal1}'\n    gr\xfcfnisch.replace(diphdong, f'{neu}{vokal2}')\n    \nbeavis(gr\xfcfnisch)\n"))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"gr\xfcfnisch--deutsch"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Gr\xfcfnisch \u2192 Deutsch")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"K\xf6nnen Sie auch ein Programm schreiben, welches vom Gr\xfcfnisch ins Berndeutsch \xfcbersetzt?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=von_gr\xfcfnisch.py id=c3fd9f11-7cae-40b7-8c5a-78568036676e",live_py:!0,title:"von_gr\xfcfnisch.py",id:"c3fd9f11-7cae-40b7-8c5a-78568036676e"},"")),(0,i.kt)(m,{webKey:"e2368d96-664c-4c52-86aa-496a5e936cdd",mdxType:"Solution"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from cowsay import beavis\ntext = input('Berndeutschen Satz?')\n\nberndeutsch = text.lower()\nberndeutsch = berndeutsch.replace('anafa', 'a')\nberndeutsch = berndeutsch.replace('enefe', 'e')\nberndeutsch = berndeutsch.replace('inifi', 'i')\nberndeutsch = berndeutsch.replace('onofo', 'o')\nberndeutsch = berndeutsch.replace('unufu', 'u')\nberndeutsch = berndeutsch.replace('\xe4n\xe4f\xe4', '\xe4')\nberndeutsch = berndeutsch.replace('\xf6n\xf6f\xf6', '\xf6')\nberndeutsch = berndeutsch.replace('\xfcn\xfcf\xfc', '\xfc')\n\nbeavis(berndeutsch)\n"))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Spielsprache#Gr%C3%BCfnisch"},"Wikipedia"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},86720:(e,n,t)=>{t.d(n,{Z:()=>a});const a={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);