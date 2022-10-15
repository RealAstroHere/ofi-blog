"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[59493],{65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),s=a(67294),i=a(86010),r=a(72389),l=a(67392),o=a(7094),m=a(12466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a;const{lazy:r,block:c,defaultValue:u,values:b,groupId:h,className:v}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===u?u:null!=(t=null!=u?u:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:w}=(0,o.U)(),[T,x]=(0,s.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,m.o5)();if(null!=h){const e=f[h];null!=e&&e!==T&&y.some((t=>t.value===e))&&x(e)}const _=e=>{const t=e.currentTarget,a=E.indexOf(t),n=y[a].value;n!==T&&(C(t),x(n),null!=h&&w(h,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var s;const t=E.indexOf(e.currentTarget)-1;a=null!=(s=E[t])?s:E[E.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,i.default)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":c},v)},y.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:S,onFocus:_,onClick:_},r,{className:(0,i.default)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),r?(0,s.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,r.Z)();return s.createElement(c,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(65488);const i={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},r=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(s.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:i[e],value:e}))))},e.children);var a}},93183:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(91189),s=a(67294),i=a(92814);const r="videoComponent_YfiL",l="wrapButton_r5TZ",o="headerClosed_s_Of",m="headerOpen_AzNA",d="minimize_pBQC",p="description_p2GN",c="title_YxV5",u="cardOpen_IEP6";var b=a(51436),h=a(86010);class v extends s.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",s.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:a}=e,{innerHeight:n}=window;t<n&&a>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:a,children:n}=this.props;return s.createElement("div",{ref:this.videoRef,className:r},this.state.open?s.createElement("div",{className:u},s.createElement("div",{className:m},e&&s.createElement("h5",{className:c},e),!this.props.expanded&&s.createElement("button",{className:(0,h.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},s.createElement(i.G,{icon:b.IQi})),n&&s.createElement("div",{className:p},n)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:t,type:"video/"+(a||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(i.G,{icon:b.IJ7,spin:!0}))):s.createElement("button",{className:(0,h.default)("button button--block button--outline button--secondary",l),onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:o},s.createElement("div",{className:c},e||"Video"),n&&s.createElement("div",{className:p},n)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:t,type:"video/"+(a||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(i.G,{icon:b.IJ7,spin:!0}))))}}},48665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(83117),s=(a(67294),a(3905)),i=(a(61839),a(85107)),r=(a(92814),a(44996)),l=a(93183);const o={sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},m="Betriebssystem",d={unversionedId:"BYOD-Basics/Skills/betriebssystem",id:"version-25h/BYOD-Basics/Skills/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/003-betriebssystem.mdx",sourceDirName:"02-BYOD-Basics/003-Skills",slug:"/BYOD-Basics/Skills/betriebssystem",permalink:"/25h/BYOD-Basics/Skills/betriebssystem",draft:!1,tags:[],version:"25h",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"0c0e490e-4719-4d74-b91b-79b230e4a505"}},sidebar:"version-25h/sidebar",previous:{title:"Skills",permalink:"/25h/category/skills"},next:{title:"Dateiexplorer",permalink:"/25h/BYOD-Basics/Skills/dateiexplorer"}},p={},c=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},b=u("Comment"),h=u("TabItem"),v=u("Figure"),k={toc:c};function y(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h1",{parentName:"div",id:"betriebssystem"},"Betriebssystem"),(0,s.kt)(b,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h2",{parentName:"div",id:"globale-suche"},"Globale Suche"),(0,s.kt)(b,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,s.kt)(i.Z,{mdxType:"OsTabs"},(0,s.kt)(h,{value:"win",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("div",{parentName:"li",className:"commentable"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Startmen\xfc")," mit ",(0,s.kt)("kbd",{parentName:"p"},(0,s.kt)("i",{parentName:"kbd",className:"mdi-microsoft-windows mdi "}))," \xf6ffnen  und direkt mit Tippen beginnen."),(0,s.kt)(b,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("div",{parentName:"li",className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Auf die Lupe ",(0,s.kt)("kbd",{parentName:"p"},(0,s.kt)("i",{parentName:"kbd",className:"mdi-magnify mdi "}))," klicken und Suchanfrage starten."),(0,s.kt)(b,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})))),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,s.kt)(b,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)(v,{parentName:"div",options:{},mdxType:"Figure"},(0,s.kt)("img",{src:a(66901).Z,width:"1641",height:"1294"})),(0,s.kt)(b,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,s.kt)(h,{value:"mac",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("div",{parentName:"li",className:"commentable"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Spotlight")," mit ",(0,s.kt)("kbd",{parentName:"p"},"Cmd"),"+",(0,s.kt)("kbd",{parentName:"p"},"Leertaste")," \xf6ffnen und direkt mit Tippen beginnen."),(0,s.kt)(b,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,s.kt)(b,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)(v,{parentName:"div",options:{},mdxType:"Figure"},(0,s.kt)("img",{src:a(29021).Z,width:"1383",height:"890"})),(0,s.kt)(b,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("h2",{parentName:"div",id:"night-shift"},"Night-Shift"),(0,s.kt)(b,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,s.kt)("div",{className:"commentable"},(0,s.kt)("p",{parentName:"div"},"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,s.kt)(b,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,s.kt)(i.Z,{mdxType:"OsTabs"},(0,s.kt)(h,{value:"win",mdxType:"TabItem"},(0,s.kt)(l.Z,{src:(0,r.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,s.kt)(h,{value:"mac",mdxType:"TabItem"},(0,s.kt)(l.Z,{src:(0,r.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}y.isMDXComponent=!0},29021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},66901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);