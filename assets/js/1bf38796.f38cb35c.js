"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[97835],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},685162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(667294),a=n(386010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.default)(i,o),hidden:n},t)}},665488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(487462),a=n(667294),i=n(386010),o=n(972389),l=n(867392),s=n(707094),u=n(212466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,b=e.values,f=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),E=w.tabGroupChoices,N=w.setTabGroupChoices,x=(0,a.useState)(k),O=x[0],T=x[1],Z=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=E[f];null!=C&&C!==O&&y.some((function(e){return e.value===C}))&&T(C)}var I=function(e){var t=e.currentTarget,n=Z.indexOf(t),r=y[n].value;r!==O&&(S(t),T(r),null!=f&&N(f,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=Z.indexOf(e.currentTarget)+1;n=null!=(r=Z[a])?r:Z[0];break;case"ArrowLeft":var i,o=Z.indexOf(e.currentTarget)-1;n=null!=(i=Z[o])?i:Z[Z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.default)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":p},v)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return Z.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,i.default)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},285107:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(894578),a=n(667294),i=n(665488),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(a.Component)},765648:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(497326),a=n(894578),i=n(204942),o=n(667294),l=n(592814),s="videoComponent_YfiL",u="headerClosed_s_Of",c="headerOpen_AzNA",d="minimize_pBQC",p="description_p2GN",m="title_YxV5",b="cardOpen_IEP6",f=n(51436),v=n(386010),h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,(0,i.Z)((0,r.Z)(t),"state",{open:!!t.props.expanded,visible:!1}),(0,i.Z)((0,r.Z)(t),"videoRef",o.createRef()),(0,i.Z)((0,r.Z)(t),"isInViewport",(function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,r=e.bottom;n<window.innerHeight&&r>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})})),(0,i.Z)((0,r.Z)(t),"onClick",(function(){t.setState({open:!t.state.open}),t.isInViewport()})),t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,r=e.type,a=e.children;return o.createElement("div",{ref:this.videoRef,className:s},this.state.open?o.createElement("div",{className:b},o.createElement("div",{className:c},t&&o.createElement("h5",{className:m},t),!this.props.expanded&&o.createElement("button",{className:(0,v.default)("button button--sm button--outline button--secondary",d),onClick:this.onClick},o.createElement(l.G,{icon:f.IQi})),a&&o.createElement("div",{className:p},a)),this.state.visible?o.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},o.createElement("source",{src:n,type:"video/"+(r||"mp4")})):o.createElement("div",{style:{height:"150px"}},o.createElement(l.G,{icon:f.IJ7,spin:!0}))):o.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},o.createElement("div",{className:u},o.createElement("div",{className:m},t||"Video"),a&&o.createElement("div",{className:p},a)),this.state.visible?o.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},o.createElement("source",{src:n,type:"video/"+(r||"mp4")})):o.createElement("div",{style:{height:"150px"}},o.createElement(l.G,{icon:f.IJ7,spin:!0}))))},t}(o.Component)},403322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return b},toc:function(){return v}});var r,a=n(487462),i=n(263366),o=(n(667294),n(603905)),l=n(285107),s=n(685162),u=(n(592814),n(644996)),c=n(765648),d=["components"],p={},m="Betriebssystem",b={unversionedId:"byod-basics/v25/Skills/betriebssystem",id:"byod-basics/v25/Skills/betriebssystem",title:"Betriebssystem",description:"Globale Suche",source:"@site/docs/byod-basics/v25/003-Skills/003-betriebssystem.mdx",sourceDirName:"byod-basics/v25/003-Skills",slug:"/byod-basics/v25/Skills/betriebssystem",permalink:"/byod-basics/v25/Skills/betriebssystem",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/003-Skills/003-betriebssystem.mdx",tags:[],version:"current",lastUpdatedAt:1657188670,formattedLastUpdatedAt:"7.7.2022",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Skills",permalink:"/category/skills"},next:{title:"Dateiexplorer",permalink:"/byod-basics/v25/Skills/dateiexplorer"}},f={},v=[{value:"Globale Suche",id:"globale-suche",level:2},{value:"Night-Shift",id:"night-shift",level:2}],h=(r="Figure",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),y={toc:v};function g(e){var t=e.components,r=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,o.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,o.kt)(l.Z,{mdxType:"OsTabs"},(0,o.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Startmen\xfc")," mit ",(0,o.kt)("kbd",{parentName:"li"},(0,o.kt)("span",{parentName:"kbd",className:"mdi-microsoft-windows mdi"}))," \xf6ffnen  und direkt mit Tippen beginnen."),(0,o.kt)("li",{parentName:"ul"},"Auf die Lupe ",(0,o.kt)("kbd",{parentName:"li"},(0,o.kt)("span",{parentName:"kbd",className:"mdi-magnify mdi"}))," klicken und Suchanfrage starten.")),(0,o.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,o.kt)(h,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:n(266901).Z,width:"1641",height:"1294"}))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Spotlight")," mit ",(0,o.kt)("kbd",{parentName:"li"},"Cmd"),"+",(0,o.kt)("kbd",{parentName:"li"},"Leertaste")," \xf6ffnen und direkt mit Tippen beginnen.")),(0,o.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,o.kt)(h,{options:{},mdxType:"Figure"},(0,o.kt)("img",{src:n(929021).Z,width:"1383",height:"890"})))),(0,o.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,o.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,o.kt)(l.Z,{mdxType:"OsTabs"},(0,o.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)(c.Z,{src:(0,u.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(c.Z,{src:(0,u.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}g.isMDXComponent=!0},929021:function(e,t,n){t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},266901:function(e,t,n){t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);