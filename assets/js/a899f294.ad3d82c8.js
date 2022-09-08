"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[70272],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,v=c["".concat(o,".").concat(u)]||c[u]||d[u]||i;return t?n.createElement(v,m(m({ref:a},s),{},{components:t})):n.createElement(v,m({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,m=new Array(i);m[0]=c;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,m[1]=l;for(var p=2;p<i;p++)m[p]=t[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65488:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(83117),r=t(67294),i=t(86010),m=t(72389),l=t(67392),o=t(7094),p=t(12466);const s="tabList__CuJ",d="tabItem_LNqP";function c(e){var a,t;const{lazy:m,block:c,defaultValue:u,values:v,groupId:f,className:k}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:N.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),g=(0,l.l)(b,((e,a)=>e.value===a.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===u?u:null!=(a=null!=u?u:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?a:N[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[x,T]=(0,r.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=f){const e=y[f];null!=e&&e!==x&&b.some((a=>a.value===e))&&T(e)}const O=e=>{const a=e.currentTarget,t=C.indexOf(a),n=b[t].value;n!==x&&(S(a),T(n),null!=f&&w(f,String(n)))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=C.indexOf(e.currentTarget)+1;t=null!=(n=C[a])?n:C[0];break}case"ArrowLeft":{var r;const a=C.indexOf(e.currentTarget)-1;t=null!=(r=C[a])?r:C[C.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":c},k)},b.map((e=>{let{value:a,label:t,attributes:m}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>C.push(e),onKeyDown:E,onFocus:O,onClick:O},m,{className:(0,i.default)("tabs__item",d,null==m?void 0:m.className,{"tabs__item--active":x===a})}),null!=t?t:a)}))),m?(0,r.cloneElement)(N.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function u(e){const a=(0,m.Z)();return r.createElement(c,(0,n.Z)({key:String(a)},e))}},85107:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(67294),r=t(65488);const i={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},m=e=>{const a=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(r.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:a[0],values:(t=e.os||a,t.map((e=>({label:i[e],value:e}))))},e.children);var t}},29475:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>m,metadata:()=>o,toc:()=>s});var n=t(83117),r=(t(67294),t(3905)),i=t(85107);const m={label:"4. \xdcbung",sidebar_custom_props:{id:"bb1ec326-d699-4eb2-b275-27ce24172ca7"}},l="Rastergrafik praktisch",o={unversionedId:"Codes-and-Data/Grafikformate-v24/uebung",id:"Codes-and-Data/Grafikformate-v24/uebung",title:"Rastergrafik praktisch",description:"1. Machen Sie ein Portr\xe4t-Foto (mit der Kamera-App!)",source:"@site/docs/Codes-and-Data/02-Grafikformate-v24/04-uebung.md",sourceDirName:"Codes-and-Data/02-Grafikformate-v24",slug:"/Codes-and-Data/Grafikformate-v24/uebung",permalink:"/Codes-and-Data/Grafikformate-v24/uebung",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/02-Grafikformate-v24/04-uebung.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:4,frontMatter:{label:"4. \xdcbung",sidebar_custom_props:{id:"bb1ec326-d699-4eb2-b275-27ce24172ca7"}},sidebar:"sidebar",previous:{title:"3. Rastergrafik",permalink:"/Codes-and-Data/Grafikformate-v24/raster"},next:{title:"5. Vektorgrafik",permalink:"/Codes-and-Data/Grafikformate-v24/vector"}},p={},s=[],d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=d("Comment"),u=d("Answer"),v=d("TabItem"),f=d("Figure"),k=d("SourceRef"),N={toc:s};function b(e){let{components:a,...m}=e;return(0,r.kt)("wrapper",(0,n.Z)({},N,m,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"rastergrafik-praktisch"},"Rastergrafik praktisch"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"1-signaltelegramthreemawhatsapp-1"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"1. Signal/Telegram/Threema/WhatsApp"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Machen Sie ein Portr\xe4t-Foto (mit der Kamera-App!)"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Untersuchen Sie das Foto:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erkennen Sie einzelne Wimpern auf dem Foto?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wie viel Speicherplatz braucht das Foto?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In welchem Format ist es abgespeichert?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schicken Sie das Foto der Pultnachbar:in und beantworten Sie die Frage (2) mit dem empfangenen Bild erneut. Welche Unterschiede stellen Sie fest?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Versuchen Sie unterschiedliche Messenger-Apps (Signal, Threema, Telegram, WhatsApp) aus: gibt es Unterschiede bei den Bildgr\xf6ssen?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})))),(0,r.kt)(u,{type:"text",webKey:"952e52df-458b-493b-95fd-e4a636af4ae8",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"2-jpeg-format-1-1"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"2. JPEG-Format ",(0,r.kt)("sup",{parentName:"h5",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das folgende Foto hat im Original eine Aufl\xf6sung von ",(0,r.kt)("inlineCode",{parentName:"p"},"6016\xd74016")," Pixel mit einer Farbtiefe von 3 Byte."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Berechnen Sie die theoretische Speichergr\xf6sse in Megabyte."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laden Sie das Originalbild unter dem folgenden Link herunter:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{target:"_blank",href:t(11051).Z},"Originalbild")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Finden Sie heraus, wie gross der tats\xe4chliche Speicherbedarf des Bildes in Megabyte ist. Notieren Sie diese Zahl."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xd6ffnen Sie das Bild in einer Foto-App (unter ",(0,r.kt)("strong",{parentName:"p"},"Mac"),": in der Vorschau)."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Exportieren Sie das Bild mehrmals nacheinander als JPEG-Datei mit den Qualit\xe4ten 90%, 80%, 50% und 10%. Vergleichen Sie die Bilder und die Dateigr\xf6ssen. Was stellen Sie fest?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})))),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(v,{value:"win",mdxType:"TabItem"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Foto App \xf6ffnen und als Kopie exportieren:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(83698).Z,width:"800",height:"533"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),"  "),(0,r.kt)(v,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mac: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ablage > Exportieren"),", als Dateiformat ",(0,r.kt)("inlineCode",{parentName:"p"},"JPEG")," w\xe4hlen, die Qualit\xe4t muss auf dem Slider abgesch\xe4tzt werden."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(32314).Z,width:"1338",height:"962"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:t(44880).Z,width:"1514",height:"1124"})),(0,r.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),"  ")),(0,r.kt)("ol",{parentName:"div",start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Kann die Qualit\xe4t wiederhergestellt werden? \xd6ffnen Sie das zuvor mit der Qualit\xe4t von 10% exportierte Bild und exportieren Sie es erneut mit einer Qualit\xe4t von 100%. Was stellen Sie fest? Wie widerspiegelt sich dies in der Dateigr\xf6sse und der Bildqualit\xe4t beim Betrachten?"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Island",src:t(82345).Z,width:"600",height:"400"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Island",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(k,{parentName:"figcaption",bib:{author_name:"Nico Gr\xfctter",author_uri:"https://pixabay.com/de/users/nicos_fotowelt-2354795/",licence:"Pixabay",source_name:"Pixabay",source_uri:"https://pixabay.com/images/id-5104370/"},mdxType:"SourceRef"}))),(0,r.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,r.kt)(u,{type:"text",webKey:"2e1c4773-da2e-42da-b506-f158fa968916",mdxType:"Answer"}))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle: ",(0,r.kt)("a",{parentName:"p",href:"https://informatik.mygymer.ch/base/?b=code&p=922802"},"S. Rothe, T. Jampen, R. Meyer")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}b.isMDXComponent=!0},11051:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/iceland-0647a0c203282b3fd2b30061efda42d8.jpg"},82345:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/iceland-9ba07fe6a39fe5bbe88a2d922f434b48.jpg"},32314:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/jpeg-quality-1-osx-ef6d2789dcea529aa5408dbfd55f55f8.png"},44880:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/jpeg-quality-2-osx-ffe9c6611b8ff2cb61b741ebfdbf7b97.png"},83698:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/jpeg-quality-windows-fe883868b26976cf6a10d443077748df.gif"}}]);