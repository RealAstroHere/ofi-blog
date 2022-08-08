"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),r=a(67294),i=a(86010),l=a(72389),o=a(67392),s=a(7094),p=a(12466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:u,values:f,groupId:g,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=f?f:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===u?u:null!=(t=null!=u?u:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[x,T]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=g){const e=b[g];null!=e&&e!==x&&N.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=C.indexOf(t),n=N[a].value;n!==x&&(I(t),T(n),null!=g&&w(g,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;a=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":d},k)},N.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:Z,onFocus:O,onClick:O},l,{className:(0,i.default)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(65488);class i extends n.Component{render(){return n.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win10",values:[{label:"Windows 11",value:"win11"},{label:"Windows 10",value:"win10"},{label:"macOS",value:"mac"}]},this.props.children)}}},82549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(83117),r=(a(67294),a(3905)),i=a(85107);const l={sidebar_custom_props:{id:"c9ac425b-88bc-4c7e-a1bb-2a6940d7ab84"}},o="1. Python",s={unversionedId:"software-installation/python-3.9",id:"software-installation/python-3.9",title:"1. Python",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/docs/software-installation/python-3.9.mdx",sourceDirName:"software-installation",slug:"/software-installation/python-3.9",permalink:"/software-installation/python-3.9",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/software-installation/python-3.9.mdx",tags:[],version:"current",lastUpdatedAt:1659946037,formattedLastUpdatedAt:"8. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"c9ac425b-88bc-4c7e-a1bb-2a6940d7ab84"}},sidebar:"sidebar",previous:{title:"Planeten mit Monden",permalink:"/snippets/turtle-planets"},next:{title:"2. VS Code",permalink:"/software-installation/vscode-1.59"}},p={},m=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Comment"),u=c("TabItem"),f=c("Figure"),g={toc:m};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"1-python"},"1. Python"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"python-installieren"},"Python installieren"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unter ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),", unter Mac OSX ",(0,r.kt)("inlineCode",{parentName:"p"},".pkg"),")"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Folgende Optionen bei der Installation ber\xfccksichtigen:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win10",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 1.",src:a(21706).Z,width:"1494",height:"1010"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 2.",src:a(37673).Z,width:"1494",height:"1010"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 3.",src:a(77074).Z,width:"1494",height:"1010"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 4.",src:a(29240).Z,width:"1494",height:"1010"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Fertig \ud83e\udd73"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 1.",src:a(47174).Z,width:"1464",height:"1112"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 2.",src:a(78472).Z,width:"1464",height:"1112"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 3.",src:a(30084).Z,width:"1464",height:"1112"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 4.",src:a(88673).Z,width:"1464",height:"1112"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 5.",src:a(22078).Z,width:"1468",height:"1112"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 5.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 6.",src:a(32335).Z,width:"1468",height:"1112"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 6.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 7.",src:a(29016).Z,width:"1110",height:"532"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 7.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Installationsschritt 8.",src:a(50225).Z,width:"1578",height:"1112"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 8.",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(d,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Fertig \ud83e\udd73"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))))))}k.isMDXComponent=!0},47174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},78472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},30084:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},88673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},22078:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},32335:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},29016:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},50225:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},21706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},37673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},77074:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},29240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);