"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,b=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(83117),r=n(67294),i=n(86010),s=n(72389),o=n(67392),l=n(7094),m=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:s,block:d,defaultValue:u,values:b,groupId:v,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===u?u:null!=(t=null!=u?u:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.U)(),[x,E]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=v){const e=N[v];null!=e&&e!==x&&y.some((t=>t.value===e))&&E(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==x&&(O(t),E(a),null!=v&&w(v,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":d},h)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:C,onClick:C},s,{className:(0,i.default)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function u(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},85107:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(65488);class i extends a.Component{render(){return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)}}},65648:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(91189),r=n(67294),i=n(92814);const s="videoComponent_YfiL",o="headerClosed_s_Of",l="headerOpen_AzNA",m="minimize_pBQC",c="description_p2GN",p="title_YxV5",d="cardOpen_IEP6";var u=n(51436),b=n(86010);class v extends r.Component{constructor(){super(...arguments),(0,a.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,a.Z)(this,"videoRef",r.createRef()),(0,a.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:n}=e,{innerHeight:a}=window;t<a&&n>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,a.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:n,children:a}=this.props;return r.createElement("div",{ref:this.videoRef,className:s},this.state.open?r.createElement("div",{className:d},r.createElement("div",{className:l},e&&r.createElement("h5",{className:p},e),!this.props.expanded&&r.createElement("button",{className:(0,b.default)("button button--sm button--outline button--secondary",m),onClick:this.onClick},r.createElement(i.G,{icon:u.IQi})),a&&r.createElement("div",{className:c},a)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:t,type:"video/"+(n||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:u.IJ7,spin:!0}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:o},r.createElement("div",{className:p},e||"Video"),a&&r.createElement("div",{className:c},a)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:t,type:"video/"+(n||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:u.IJ7,spin:!0}))))}}},58917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>m,metadata:()=>p,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),i=n(85107),s=n(85162),o=(n(92814),n(44996)),l=n(65648);const m={sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},c="Betriebssystem",p={unversionedId:"BYOD/betriebssystem",id:"version-26e/BYOD/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-26e/02-BYOD/003-betriebssystem.mdx",sourceDirName:"02-BYOD",slug:"/BYOD/betriebssystem",permalink:"/26e/BYOD/betriebssystem",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-26e/02-BYOD/003-betriebssystem.mdx",tags:[],version:"26e",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},sidebar:"version-26e/sidebar",previous:{title:"BYOD Basics",permalink:"/26e/BYOD/"},next:{title:"Dateiexplorer",permalink:"/26e/BYOD/dateiexplorer"}},d={},u=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},v=b("Comment"),h=b("Figure"),f={toc:u};function y(e){let{components:t,...m}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"betriebssystem"},"Betriebssystem"),(0,r.kt)(v,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"globale-suche"},"Globale Suche"),(0,r.kt)(v,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Startmen\xfc")," mit ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "}))," \xf6ffnen  und direkt mit Tippen beginnen."),(0,r.kt)(v,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auf die Lupe ",(0,r.kt)("kbd",{parentName:"p"},(0,r.kt)("i",{parentName:"kbd",className:"mdi-magnify mdi "}))," klicken und Suchanfrage starten."),(0,r.kt)(v,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(v,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(h,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(66901).Z,width:"1641",height:"1294"})),(0,r.kt)(v,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Spotlight")," mit ",(0,r.kt)("kbd",{parentName:"p"},"Cmd"),"+",(0,r.kt)("kbd",{parentName:"p"},"Leertaste")," \xf6ffnen und direkt mit Tippen beginnen."),(0,r.kt)(v,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(v,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(h,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(29021).Z,width:"1383",height:"890"})),(0,r.kt)(v,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"night-shift"},"Night-Shift"),(0,r.kt)(v,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,r.kt)(v,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(l.Z,{src:(0,o.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{src:(0,o.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}y.isMDXComponent=!0},29021:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},66901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);