"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[71027],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>k});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,d=c["".concat(l,".").concat(k)]||c[k]||o[k]||m;return t?n.createElement(d,p(p({ref:e},N),{},{components:t})):n.createElement(d,p({ref:e},N))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65488:(a,e,t)=>{t.d(e,{Z:()=>k});var n=t(83117),s=t(67294),m=t(86010),p=t(72389),r=t(67392),l=t(7094),i=t(12466);const N="tabList__CuJ",o="tabItem_LNqP";function c(a){var e,t;const{lazy:p,block:c,defaultValue:k,values:d,groupId:h,className:u}=a,g=s.Children.map(a.children,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),y=(0,r.l)(v,((a,e)=>a.value===e.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((a=>a.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===k?k:null!=(e=null!=k?k:null==(t=g.find((a=>a.props.default)))?void 0:t.props.value)?e:g[0].props.value;if(null!==b&&!v.some((a=>a.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((a=>a.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:f}=(0,l.U)(),[x,T]=(0,s.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:D}=(0,i.o5)();if(null!=h){const a=w[h];null!=a&&a!==x&&v.some((e=>e.value===a))&&T(a)}const M=a=>{const e=a.currentTarget,t=C.indexOf(e),n=v[t].value;n!==x&&(D(e),T(n),null!=h&&f(h,String(n)))},z=a=>{var e;let t=null;switch(a.key){case"Enter":M(a);break;case"ArrowRight":{var n;const e=C.indexOf(a.currentTarget)+1;t=null!=(n=C[e])?n:C[0];break}case"ArrowLeft":{var s;const e=C.indexOf(a.currentTarget)-1;t=null!=(s=C[e])?s:C[C.length-1];break}}null==(e=t)||e.focus()};return s.createElement("div",{className:(0,m.default)("tabs-container",N)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.default)("tabs",{"tabs--block":c},u)},v.map((a=>{let{value:e,label:t,attributes:p}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:a=>C.push(a),onKeyDown:z,onClick:M},p,{className:(0,m.default)("tabs__item",o,null==p?void 0:p.className,{"tabs__item--active":x===e})}),null!=t?t:e)}))),p?(0,s.cloneElement)(g.filter((a=>a.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==x})))))}function k(a){const e=(0,p.Z)();return s.createElement(c,(0,n.Z)({key:String(e)},a))}},66051:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(67294),s=t(65488);class m extends n.Component{render(){return n.createElement(s.Z,{groupId:"taschenrechner",defaultValue:"ti30",values:[{label:"TI-30 eco RS",value:"ti30"},{label:"TI-30X IIS",value:"ti30X"}]},this.props.children)}}},22398:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>N});var n=t(83117),s=(t(67294),t(3905)),m=t(66051);const p={sidebar_custom_props:{id:"ad525a57-dcbe-4ecf-a668-37b40c0ab41c"}},r="Taschenrechner",l={unversionedId:"Math/Taschenrechner/index",id:"Math/Taschenrechner/index",title:"Taschenrechner",description:"Erlaubte Taschenrechner",source:"@site/docs/Math/Taschenrechner/index.md",sourceDirName:"Math/Taschenrechner",slug:"/Math/Taschenrechner/",permalink:"/Math/Taschenrechner/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Math/Taschenrechner/index.md",tags:[],version:"current",lastUpdatedAt:1659946037,formattedLastUpdatedAt:"8. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"ad525a57-dcbe-4ecf-a668-37b40c0ab41c"}},sidebar:"sidebar",previous:{title:"Black Box",permalink:"/Math/BlackBox/"},next:{title:"1. Webserver und HTTP",permalink:"/Netzwerke-ef/Server/"}},i={},N=[{value:"Winkel",id:"winkel",level:2},{value:"Umrechnung mit Minuten/Sekunden",id:"umrechnung-mit-minutensekunden",level:3},{value:"<code>DD\u25baDMS</code>",id:"dddms",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd",level:4},{value:"<code>DD\u25baDMS</code>",id:"dddms-1",level:4},{value:"<code>DMS\u25baDD</code>",id:"dmsdd-1",level:4}],o=a=>function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)},c=o("Comment"),k=o("Figure"),d=o("TabItem"),h={toc:N};function u(a){let{components:e,...p}=a;return(0,s.kt)("wrapper",(0,n.Z)({},h,p,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h1",{parentName:"div",id:"taschenrechner"},"Taschenrechner"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Erlaubte Taschenrechner"),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{style:{},className:"flex flex-cards"},(0,s.kt)("div",{parentName:"div",style:{},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",className:"commentable"},(0,s.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"TI-30 eco RS",src:t(76769).Z,width:"850",height:"1570"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"TI-30 eco RS",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,s.kt)("div",{parentName:"div",style:{},className:"item card"},(0,s.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,s.kt)("div",{parentName:"div",className:"commentable"},(0,s.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,s.kt)("img",{alt:"TI-30X IIS",src:t(42842).Z,width:"853",height:"1570"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"TI-30X IIS",(0,s.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,s.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))))),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h2",{parentName:"div",id:"winkel"},"Winkel"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h3",{parentName:"div",id:"umrechnung-mit-minutensekunden"},"Umrechnung mit Minuten/Sekunden"),(0,s.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Diese Umrechnung ist gedacht f\xfcr Winkeleinheiten (Dezimal zu Grad ",(0,s.kt)("inlineCode",{parentName:"p"},"\xb0"),", Minuten ",(0,s.kt)("inlineCode",{parentName:"p"},"'"),", Sekunden ",(0,s.kt)("inlineCode",{parentName:"p"},"''")," und umgekehrt)."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"DD")," steht f\xfcr die Dezimaleinheit (Decimal Degree), ",(0,s.kt)("inlineCode",{parentName:"p"},"DMS")," f\xfcr Grad, Minuten, Sekunden (Degree, Minutes, Seconds)."),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,s.kt)(m.Z,{mdxType:"TRTabs"},(0,s.kt)(d,{value:"ti30",mdxType:"TabItem"},(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dddms"},(0,s.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2.66"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"9"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"6"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"DD\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dmsdd"},(0,s.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"4"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2.84")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2.5024")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Danger")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("div",{parentName:"div",className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Minuten und Sekunden m\xfcssen in obiger Schreibweise immer zwei Stellen aufweisen! ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"8"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"9"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3\xb0 8' 9''")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))))))),"  muss also als ",(0,s.kt)("inlineCode",{parentName:"p"},"3.0809")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"2nd")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"DMS\u25baDD")," eingegeben werden. "),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))))),(0,s.kt)(d,{value:"ti30X",mdxType:"TabItem"},(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dddms-1"},(0,s.kt)("inlineCode",{parentName:"h4"},"DD\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2.66"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"9"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"6"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2.66\xb0 = 2\xb0 39' 36''")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"9"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"6"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2.66")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"\xb0 ' ''")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"\u25baDMS")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h4",{parentName:"div",id:"dmsdd-1"},(0,s.kt)("inlineCode",{parentName:"h4"},"DMS\u25baDD")),(0,s.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Beispiel: ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xb0"),(0,s.kt)("mn",{parentName:"mrow"},"5"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"4"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"),(0,s.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2032"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2.84")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\xb0 50' 24'' = 2.84")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.751892em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\xb0"),(0,s.kt)("span",{parentName:"span",className:"mord"},"5"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord"},"."),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"),(0,s.kt)("span",{parentName:"span",className:"mord"},"4")))))),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Eingabe: ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"\xb0")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"50")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"'")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"24")," > ",(0,s.kt)("inlineCode",{parentName:"p"},"''")),(0,s.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})))))}u.isMDXComponent=!0},76769:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/TI-30-576feff68058d9fb4bc334570a233fb9.jpg"},42842:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/TI-30XIIS-d1d1fd0126bba0cefd758c9ab68c85e8.jpg"}}]);