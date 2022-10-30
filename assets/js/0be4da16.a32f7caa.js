"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,b=d["".concat(m,".").concat(u)]||d[u]||l[u]||i;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85107:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(65488);const i={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},s=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(n=e.os||t,n.map((e=>({label:i[e],value:e}))))},e.children);var n}},93183:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(91189),r=n(67294),i=n(92814);const s="videoComponent_YfiL",o="wrapButton_r5TZ",m="headerClosed_s_Of",c="headerOpen_AzNA",p="minimize_pBQC",l="description_p2GN",d="title_YxV5",u="cardOpen_IEP6";var b=n(51436),v=n(86010);class y extends r.Component{constructor(){super(...arguments),(0,a.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,a.Z)(this,"videoRef",r.createRef()),(0,a.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:n}=e,{innerHeight:a}=window;t<a&&n>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,a.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:n,children:a}=this.props;return r.createElement("div",{ref:this.videoRef,className:s},this.state.open?r.createElement("div",{className:u},r.createElement("div",{className:c},e&&r.createElement("h5",{className:d},e),!this.props.expanded&&r.createElement("button",{className:(0,v.default)("button button--sm button--outline button--secondary",p),onClick:this.onClick},r.createElement(i.G,{icon:b.IQi})),a&&r.createElement("div",{className:l},a)),this.state.visible?r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:t,type:"video/"+(n||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:b.IJ7,spin:!0}))):r.createElement("button",{className:(0,v.default)("button button--block button--outline button--secondary",o),onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},r.createElement("div",{className:m},r.createElement("div",{className:d},e||"Video"),a&&r.createElement("div",{className:l},a)),this.state.visible?r.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},r.createElement("source",{src:t,type:"video/"+(n||"mp4")})):r.createElement("div",{style:{height:"150px"}},r.createElement(i.G,{icon:b.IJ7,spin:!0}))))}}},80072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>b});var a=n(83117),r=(n(67294),n(3905)),i=n(85107),s=n(92814),o=n(51417),m=n(44996),c=n(93183);const p={sidebar_custom_props:{id:"a1042614-e833-4c98-9a1a-3da7acf553c0"}},l="Betriebssystem",d={unversionedId:"byod-basics/v24/betriebssystem",id:"byod-basics/v24/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/docs/byod-basics/v24/002-betriebssystem.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/betriebssystem",permalink:"/byod-basics/v24/betriebssystem",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/002-betriebssystem.mdx",tags:[],version:"current",lastUpdatedAt:1661177736,formattedLastUpdatedAt:"22. Aug. 2022",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"a1042614-e833-4c98-9a1a-3da7acf553c0"}},sidebar:"sidebar",previous:{title:"Basics",permalink:"/byod-basics/v24/overview"},next:{title:"Dateiexplorer",permalink:"/byod-basics/v24/dateiexplorer"}},u={},b=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},y=v("Comment"),h=v("TabItem"),f=v("Figure"),g={toc:b};function k(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"betriebssystem"},"Betriebssystem"),(0,r.kt)(y,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"globale-suche"},"Globale Suche"),(0,r.kt)(y,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(h,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Startmen\xfc")," \xf6ffnen (",(0,r.kt)(s.G,{icon:o.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,r.kt)(y,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auf die Lupe klicken und Suchanfrage starten."),(0,r.kt)(y,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(y,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(66901).Z,width:"1641",height:"1294"})),(0,r.kt)(y,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,r.kt)(h,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Spotlight")," \xf6ffnen (",(0,r.kt)("strong",{parentName:"p"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen."),(0,r.kt)(y,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)(y,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(29021).Z,width:"1383",height:"890"})),(0,r.kt)(y,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"night-shift"},"Night-Shift"),(0,r.kt)(y,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,r.kt)(y,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(h,{value:"win",mdxType:"TabItem"},(0,r.kt)(c.Z,{src:(0,m.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(h,{value:"mac",mdxType:"TabItem"},(0,r.kt)(c.Z,{src:(0,m.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}k.isMDXComponent=!0},29021:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},66901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);