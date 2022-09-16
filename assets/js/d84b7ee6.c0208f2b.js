"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[23124],{65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),i=a(67294),r=a(86010),s=a(72389),l=a(67392),o=a(7094),p=a(12466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:s,block:d,defaultValue:u,values:g,groupId:k,className:f}=e,N=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===u?u:null!=(t=null!=u?u:null==(a=N.find((e=>e.props.default)))?void 0:a.props.value)?t:N[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:w}=(0,o.U)(),[x,T]=(0,i.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:Z}=(0,p.o5)();if(null!=k){const e=b[k];null!=e&&e!==x&&h.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=I.indexOf(t),n=h[a].value;n!==x&&(Z(t),T(n),null!=k&&w(k,String(n)))},F=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=I.indexOf(e.currentTarget)+1;a=null!=(n=I[t])?n:I[0];break}case"ArrowLeft":{var i;const t=I.indexOf(e.currentTarget)-1;a=null!=(i=I[t])?i:I[I.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.default)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":d},f)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>I.push(e),onKeyDown:F,onFocus:C,onClick:C},s,{className:(0,r.default)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),s?(0,i.cloneElement)(N.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,s.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),i=a(65488);const r={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},s=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(i.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:r[e],value:e}))))},e.children);var a}},59913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(83117),i=(a(67294),a(3905)),r=(a(61839),a(85107));const s={sidebar_custom_props:{id:"c9ac425b-88bc-4c7e-a1bb-2a6940d7ab84"}},l="Python 3.9",o={unversionedId:"software-installation/python/v3.9/index",id:"software-installation/python/v3.9/index",title:"Python 3.9",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/docs/software-installation/python/v3.9/index.md",sourceDirName:"software-installation/python/v3.9",slug:"/software-installation/python/v3.9/",permalink:"/software-installation/python/v3.9/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/software-installation/python/v3.9/index.md",tags:[],version:"current",lastUpdatedAt:1661177736,formattedLastUpdatedAt:"22. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"c9ac425b-88bc-4c7e-a1bb-2a6940d7ab84"}},sidebar:"sidebar",previous:{title:"Python 3.10.6",permalink:"/software-installation/python/v3.10.6/"},next:{title:"VS Code 1.59",permalink:"/software-installation/vs-code/v1.59/"}},p={},m=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=c("Comment"),u=c("TabItem"),g=c("Figure"),k={toc:m};function f(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"python-39"},"Python 3.9"),(0,i.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Unter ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,i.kt)("inlineCode",{parentName:"p"},".exe"),", unter Mac OSX ",(0,i.kt)("inlineCode",{parentName:"p"},".pkg"),")"),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Folgende Optionen bei der Installation ber\xfccksichtigen:"),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,i.kt)(r.Z,{mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 1.",src:a(88621).Z,width:"1494",height:"1010"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 2.",src:a(53344).Z,width:"1494",height:"1010"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 3.",src:a(99418).Z,width:"1494",height:"1010"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 4.",src:a(22309).Z,width:"1494",height:"1010"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Fertig \ud83e\udd73"),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 1.",src:a(22071).Z,width:"1464",height:"1112"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 2.",src:a(90838).Z,width:"1464",height:"1112"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 3.",src:a(69418).Z,width:"1464",height:"1112"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 4.",src:a(70500).Z,width:"1464",height:"1112"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 5.",src:a(43646).Z,width:"1468",height:"1112"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 5.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 6.",src:a(57818).Z,width:"1468",height:"1112"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 6.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 7.",src:a(81669).Z,width:"1110",height:"532"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 7.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Installationsschritt 8.",src:a(88138).Z,width:"1578",height:"1112"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 8.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(d,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Fertig \ud83e\udd73"),(0,i.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})))))))}f.isMDXComponent=!0},22071:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},90838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},69418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},70500:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},43646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},57818:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},81669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},88138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},88621:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},53344:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},99418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},22309:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);