"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[12364],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),y=n,m=d["".concat(i,".").concat(y)]||d[y]||u[y]||l;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.default)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(83117),n=a(67294),l=a(86010),o=a(72389),p=a(67392),i=a(7094),c=a(12466);const s="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:y,values:m,groupId:b,className:_}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,p.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===y?y:null!=(t=null!=y?y:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:N}=(0,i.U)(),[C,O]=(0,n.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==C&&g.some((t=>t.value===e))&&O(e)}const P=e=>{const t=e.currentTarget,a=w.indexOf(t),r=g[a].value;r!==C&&(E(t),O(r),null!=b&&N(b,String(r)))},T=e=>{var t;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{var r;const t=w.indexOf(e.currentTarget)+1;a=null!=(r=w[t])?r:w[0];break}case"ArrowLeft":{var n;const t=w.indexOf(e.currentTarget)-1;a=null!=(n=w[t])?n:w[w.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.default)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":d},_)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:P},o,{className:(0,l.default)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function y(e){const t=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},98824:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const l="label_htSN",o="icon_Nz7l";var p=a(65488),i=a(85162);const c=e=>"s-"+e,s=e=>r.createElement(p.Z,{defaultValue:c(0),values:e.children.map(((t,a)=>{const p=(e.highlighted||[]).includes(a),i=r.createElement("span",{className:(0,n.default)(l)},p&&r.createElement("span",{className:(0,n.default)(o)},e.hilightIcon||"\u26a0\ufe0f"),e.getLabel(a));return{value:c(a),label:i}}))},e.children.map(((e,t)=>r.createElement(i.Z,{value:c(t),key:t},e))))},43768:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(83117),n=(a(67294),a(3905)),l=a(98824);const o={sidebar_custom_props:{id:"0faa446a-08da-498c-833a-d20bd6767021"}},p="Python Playground",i={type:"mdx",permalink:"/playground",source:"@site/src/pages/playground.md",title:"Python Playground",description:"P${idx + 1}.py}>",frontMatter:{sidebar_custom_props:{id:"0faa446a-08da-498c-833a-d20bd6767021"}}},c=[],s=(u="Comment",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const d={toc:c};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"python-playground"},"Python Playground"),(0,n.kt)(s,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)(l.Z,{getLabel:e=>"P"+(e+1)+".py",mdxType:"GTabs"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__1.py id=e1097f86-c945-4c06-81cd-bb52c8811cb8",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__1.py",id:"e1097f86-c945-4c06-81cd-bb52c8811cb8"},"print('Hello Playground')\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__2.py id=295139dc-1933-4621-ac18-61c90ca8507e",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__2.py",id:"295139dc-1933-4621-ac18-61c90ca8507e"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__3.py id=ff5585ae-0e76-471e-8922-7f600c1ef4e7",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__3.py",id:"ff5585ae-0e76-471e-8922-7f600c1ef4e7"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__4.py id=1b00b838-77b2-44f3-9d4b-ecccc21dff2b",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__4.py",id:"1b00b838-77b2-44f3-9d4b-ecccc21dff2b"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__5.py id=29edb88a-a9de-45b9-85fc-18bc1d373329",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__5.py",id:"29edb88a-a9de-45b9-85fc-18bc1d373329"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__6.py id=ef8e64d5-c895-4ca0-8085-87a0b2c84a98",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__6.py",id:"ef8e64d5-c895-4ca0-8085-87a0b2c84a98"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__7.py id=268b6247-3d89-4ab2-aad0-6d306009c8ba",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__7.py",id:"268b6247-3d89-4ab2-aad0-6d306009c8ba"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__8.py id=8c1d9a40-cafd-4753-804e-29601a254e2a",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__8.py",id:"8c1d9a40-cafd-4753-804e-29601a254e2a"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__9.py id=e34d8b0e-27c8-412c-957c-db6d948963db",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__9.py",id:"e34d8b0e-27c8-412c-957c-db6d948963db"},"")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py noCompare persist title=python__playground__10.py id=147e6e5b-a656-4fcb-8a78-50671e9dc2d7",live_py:!0,noCompare:!0,persist:!0,title:"python__playground__10.py",id:"147e6e5b-a656-4fcb-8a78-50671e9dc2d7"},""))))}y.isMDXComponent=!0}}]);