"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,v=c["".concat(m,".").concat(u)]||c[u]||p[u]||i;return a?n.createElement(v,o(o({ref:t},s),{},{components:a})):n.createElement(v,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),r=a(67294),i=a(86010),o=a(72389),d=a(67392),m=a(7094),l=a(12466);const s="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a;const{lazy:o,block:c,defaultValue:u,values:v,groupId:h,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=v?v:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,d.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===u?u:null!=(t=null!=u?u:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,m.U)(),[T,x]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,l.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&N.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,a=C.indexOf(t),n=N[a].value;n!==T&&(S(t),x(n),null!=h&&w(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;a=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.default)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":c},k)},N.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,i.default)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(65488);class i extends n.Component{render(){return n.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win10",values:[{label:"Windows 11",value:"win11"},{label:"Windows 10",value:"win10"},{label:"macOS",value:"mac"}]},this.props.children)}}},92040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=a(83117),r=(a(67294),a(3905)),i=a(85107);const o={sidebar_custom_props:{id:"65e7a7a2-2aee-44cd-854f-63d81861499b"}},d="Podcast",m={unversionedId:"OFI-Projekt/podcast",id:"OFI-Projekt/podcast",title:"Podcast",description:"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/",source:"@site/docs/OFI-Projekt/02-podcast.md",sourceDirName:"OFI-Projekt",slug:"/OFI-Projekt/podcast",permalink:"/OFI-Projekt/podcast",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/OFI-Projekt/02-podcast.md",tags:[],version:"current",lastUpdatedAt:1659946037,formattedLastUpdatedAt:"8. Aug. 2022",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"65e7a7a2-2aee-44cd-854f-63d81861499b"}},sidebar:"sidebar",previous:{title:"Projekt",permalink:"/OFI-Projekt/projekt"},next:{title:"Videos Editieren",permalink:"/Video-Editor/video-editor"}},l={},s=[{value:"Audiodateien Zusammenschneiden",id:"audiodateien-zusammenschneiden",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Comment"),u=p("TabItem"),v={toc:s};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"podcast"},"Podcast"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"erstellen-eines-podcast"},"Erstellen eines Podcast"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/"},"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Nach der Recherche sollten Sie soweit sein, dass Sie ein Script f\xfcr Ihren Podcast erstellen k\xf6nnen. Dabei geht es in einem ersten Schritt darum, eine ",(0,r.kt)("strong",{parentName:"p"},"Gliederung")," in einzelne Abschnitte festzulegen. Es sollte sich ein ",(0,r.kt)("strong",{parentName:"p"},"logischer")," und f\xfcr die H\xf6rerinnen und H\xf6rer packender, nachvollziehbarer ",(0,r.kt)("strong",{parentName:"p"},"Ablauf")," ergeben."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Artikel ",(0,r.kt)("a",{parentName:"p",href:"https://podcast-agentur-hamburg.de/aufbau-einer-podcast-episode/"},'"Der Aufbau einer Podcast-Episode"')," lesen Sie wie ein professioneller Podcast gegliedert werden kann."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Lesen Sie den Artikel und erstellen Sie anschliessend in einem Word-Dokument Ihre eigene Gliederung. Schreiben Sie bei jedem Abschnitt stichwortartig auf, was Sie dort behandeln werden. Teilen Sie das Dokument in Ihrem Team."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ihre Stichworte sollen mindestens so detailliert sein, dass Sie w\xe4hrend der Aufnahme frei sprechen k\xf6nnen. Alternativ k\xf6nnen Sie auch einen vollst\xe4ndigen Text erstellen, denn Sie dann in der Aufnahme lesen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Aber Achtung"),": Denken Sie daran, dass abgelesene Text oft eint\xf6nig klingen und wenn Sie einen Text erstellen, welcher kopierte Bausteine aus einer anderen Quelle enth\xe4lt, m\xfcssen Sie diese f\xfcr den H\xf6rer erkennbar und korrekt zitieren."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"audiodateien-zusammenschneiden"},"Audiodateien Zusammenschneiden"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"audacity"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Audacity"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um einen Podcast zu erstellen, k\xf6nnen Sie im einfachsten Fall Ihre Stimme mit dem Handy aufnehmen und fertig."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie k\xf6nnen aber auch Ihren Text mit Musik oder Ger\xe4uschen untermalen. Dabei k\xf6nnen Sie eigene Aufnahmen oder Material aus dem Internet verwenden. Bei letzterem m\xfcssen Sie allerdings darauf achten, dass Sie keine Urheberrechte verletzten."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcr das Zusammenmischen von verschiedenem Tonmaterial eignet sich die Software Audacity sehr gut."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unter den folgenden Links finden Sie Information zu Audacity und m\xf6glichen Quellen von freier Musik."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"achtung-virenverseuchte-versionen-im-umlauf"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"ACHTUNG: Virenverseuchte Versionen im Umlauf"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn man in Google nach Audacity sucht, wird man auf die Seite ","[audacity.de]"," gelockt. Diese Seite bietet eine ",(0,r.kt)("strong",{parentName:"p"},"VIRENVERSEUCHTE")," Version von Audicity an."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"!! NICHT HERUNTERLADEN !!"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laden Sie Audacity nur mit dem nachfolgenden Link herunter."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://www.audacityteam.org/download/",className:"button button--warning"},"Download Audacity.org")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://freemusicarchive.org/home",className:"button button--primary"},"Free Music Archive")),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube-nocookie.com/embed/Vn7HYyopGXk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("div",{parentName:"div",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h5",{parentName:"div",id:"m4a-dateien"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,r.kt)("inlineCode",{parentName:"h5"},".M4A"),"-Dateien"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Dateiformat ",(0,r.kt)("inlineCode",{parentName:"p"},".M4A")," enth\xe4lt auch Audiodateien, die mit Audacity allerdings nur mit einer zus\xe4tzlichen Bibliothek, ffmpeg, eingelesen werden kann."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,r.kt)(i.Z,{mdxType:"OsTabs"},(0,r.kt)(u,{value:"win10",mdxType:"TabItem"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laden Sie ffmpeg ",(0,r.kt)("a",{parentName:"p",href:"https://lame.buanzo.org/ffmpeg64audacity.php"},"hier https://lame.buanzo.org/ffmpeg64audacity.php")," herunter und installieren Sie es (nicht den Link im Video verwenden!)."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube.com/embed/JAjb0aLj_yw",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),(0,r.kt)(u,{value:"mac",mdxType:"TabItem"},(0,r.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,r.kt)("iframe",{width:"100%",height:"315px",src:"https://www.youtube.com/embed/E9EF6QYJTrI",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))))))}h.isMDXComponent=!0}}]);