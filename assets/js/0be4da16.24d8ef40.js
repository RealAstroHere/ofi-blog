"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6988],{85107:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(65488);const s={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},r=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(i.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:s[e],value:e}))))},e.children);var a}},65648:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(91189),i=a(67294),s=a(92814);const r="videoComponent_YfiL",m="wrapButton_r5TZ",o="headerClosed_s_Of",d="headerOpen_AzNA",p="minimize_pBQC",l="description_p2GN",c="title_YxV5",b="cardOpen_IEP6";var h=a(51436),v=a(86010);class u extends i.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",i.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:a}=e,{innerHeight:n}=window;t<n&&a>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:a,children:n}=this.props;return i.createElement("div",{ref:this.videoRef,className:r},this.state.open?i.createElement("div",{className:b},i.createElement("div",{className:d},e&&i.createElement("h5",{className:c},e),!this.props.expanded&&i.createElement("button",{className:(0,v.default)("button button--sm button--outline button--secondary",p),onClick:this.onClick},i.createElement(s.G,{icon:h.IQi})),n&&i.createElement("div",{className:l},n)),this.state.visible?i.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},i.createElement("source",{src:t,type:"video/"+(a||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(s.G,{icon:h.IJ7,spin:!0}))):i.createElement("button",{className:(0,v.default)("button button--block button--outline button--secondary",m),onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},i.createElement("div",{className:o},i.createElement("div",{className:c},e||"Video"),n&&i.createElement("div",{className:l},n)),this.state.visible?i.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},i.createElement("source",{src:t,type:"video/"+(a||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(s.G,{icon:h.IJ7,spin:!0}))))}}},80072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>l,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var n=a(83117),i=(a(67294),a(3905)),s=(a(61839),a(85107)),r=a(92814),m=a(51417),o=a(44996),d=a(65648);const p={sidebar_custom_props:{id:"a1042614-e833-4c98-9a1a-3da7acf553c0"}},l="Betriebssystem",c={unversionedId:"byod-basics/v24/betriebssystem",id:"byod-basics/v24/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/docs/byod-basics/v24/002-betriebssystem.mdx",sourceDirName:"byod-basics/v24",slug:"/byod-basics/v24/betriebssystem",permalink:"/byod-basics/v24/betriebssystem",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v24/002-betriebssystem.mdx",tags:[],version:"current",lastUpdatedAt:1661177736,formattedLastUpdatedAt:"22. Aug. 2022",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"a1042614-e833-4c98-9a1a-3da7acf553c0"}},sidebar:"sidebar",previous:{title:"Basics",permalink:"/byod-basics/v24/overview"},next:{title:"Dateiexplorer",permalink:"/byod-basics/v24/dateiexplorer"}},b={},h=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=v("Comment"),y=v("TabItem"),k=v("Figure"),g={toc:h};function N(e){let{components:t,...p}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"betriebssystem"},"Betriebssystem"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"globale-suche"},"Globale Suche"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)(s.Z,{mdxType:"OsTabs"},(0,i.kt)(y,{value:"win",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Startmen\xfc")," \xf6ffnen (",(0,i.kt)(r.G,{icon:m.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Auf die Lupe klicken und Suchanfrage starten."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(66901).Z,width:"1641",height:"1294"})),(0,i.kt)(u,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,i.kt)(y,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Spotlight")," \xf6ffnen (",(0,i.kt)("strong",{parentName:"p"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(k,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(29021).Z,width:"1383",height:"890"})),(0,i.kt)(u,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"night-shift"},"Night-Shift"),(0,i.kt)(u,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,i.kt)(u,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)(s.Z,{mdxType:"OsTabs"},(0,i.kt)(y,{value:"win",mdxType:"TabItem"},(0,i.kt)(d.Z,{src:(0,o.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,i.kt)(y,{value:"mac",mdxType:"TabItem"},(0,i.kt)(d.Z,{src:(0,o.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}N.isMDXComponent=!0},29021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},66901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);