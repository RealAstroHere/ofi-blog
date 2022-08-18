"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,u=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return a?n.createElement(u,m(m({ref:t},l),{},{components:a})):n.createElement(u,m({ref:t},l))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,m=new Array(r);m[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,m[1]=o;for(var p=2;p<r;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65488:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(83117),i=a(67294),r=a(86010),m=a(72389),o=a(67392),s=a(7094),p=a(12466);const l="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a;const{lazy:m,block:c,defaultValue:g,values:u,groupId:f,className:k}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=u?u:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),N=(0,o.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===g?g:null!=(t=null!=g?g:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[x,T]=(0,i.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:Z}=(0,p.o5)();if(null!=f){const e=y[f];null!=e&&e!==x&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==x&&(Z(t),T(n),null!=f&&w(f,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var i;const t=C.indexOf(e.currentTarget)-1;a=null!=(i=C[t])?i:C[C.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.default)("tabs-container",l)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":c},k)},b.map((e=>{let{value:t,label:a,attributes:m}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:S,onFocus:O,onClick:O},m,{className:(0,r.default)("tabs__item",d,null==m?void 0:m.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),m?(0,i.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function g(e){const t=(0,m.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),i=a(65488);const r={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},m=e=>{return n.createElement(i.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:"win11",values:(t=e.os||["win11","win10","mac"],t.map((e=>({label:r[e],value:e}))))},e.children);var t}},93006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>v,frontMatter:()=>m,metadata:()=>s,toc:()=>l});var n=a(83117),i=(a(67294),a(3905)),r=a(85107);const m={sidebar_custom_props:{id:"f989c844-97c0-4f04-b1d2-65c266cc862e"}},o="Git 2.37.1",s={unversionedId:"software-installation/git/v2.37.1/index",id:"software-installation/git/v2.37.1/index",title:"Git 2.37.1",description:"\ud83d\udc49 https://git-scm.com/downloads",source:"@site/docs/software-installation/git/v2.37.1/index.md",sourceDirName:"software-installation/git/v2.37.1",slug:"/software-installation/git/v2.37.1/",permalink:"/software-installation/git/v2.37.1/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/software-installation/git/v2.37.1/index.md",tags:[],version:"current",lastUpdatedAt:1660832540,formattedLastUpdatedAt:"18. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"f989c844-97c0-4f04-b1d2-65c266cc862e"}},sidebar:"sidebar",previous:{title:"Planeten mit Monden",permalink:"/snippets/turtle-planets"},next:{title:"Python 3.10.6",permalink:"/software-installation/python/v3.10.6/"}},p={},l=[{value:"Git einrichten",id:"git-einrichten",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=d("Comment"),g=d("TabItem"),u=d("GTabs"),f=d("Figure"),k={toc:l};function v(e){let{components:t,...m}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"git-2371"},"Git 2.37.1"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udc49 ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)(r.Z,{os:["win","mac"],mdxType:"OsTabs"},(0,i.kt)(g,{value:"win",mdxType:"TabItem"},(0,i.kt)(u,{getLabel:e=>e+1+".",highlighted:[2,4,5,10,12],mdxType:"GTabs"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(68978).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Standardoption ist ok",src:a(34338).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Standardoption ist ok",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Praktische Option (optional)",src:a(14797).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Praktische Option (optional)",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(1632).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:":mdi-flash-triangle--orange: VS Code Ausw\xe4hlen!",src:a(33139).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)("i",{parentName:"figcaption",className:"mdi-flash-triangle mdi orange"})," VS Code Ausw\xe4hlen!",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:":mdi-flash-triangle--orange: `main` als Standardname ausw\xe4hlen.",src:a(48399).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)("i",{parentName:"figcaption",className:"mdi-flash-triangle mdi orange"})," ",(0,i.kt)("inlineCode",{parentName:"figcaption"},"main")," als Standardname ausw\xe4hlen.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(99135).Z,width:"499",height:"391"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(49107).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(32319).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(23859).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Die Windows Konsole ist ausreichend.",src:a(55103).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Die Windows Konsole ist ausreichend.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(76121).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Wir brauchen den Credential Manager nicht",src:a(60871).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Wir brauchen den Credential Manager nicht",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:12,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(37007).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:13,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(83929).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:14,mdxType:"Comment"})))),(0,i.kt)(g,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Installieren Sie ",(0,i.kt)("inlineCode",{parentName:"p"},"homebrew"),", wenn es nicht bereits installiert ist"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen: \xd6ffnen Sie ein Terminal (suchen Sie nach ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal")," bei Spotlight)"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie die Version von ",(0,i.kt)("inlineCode",{parentName:"p"},"homebrew")," - wird eine angezeigt, haben Sie's installiert:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew --version\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wenn keine Version angezeigt (bzw. sowas wie ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh command not found"),"), installieren Sie ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"\ud83d\udc49 homebrew")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Geben Sie ins Terminal "),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\n")),(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"ein."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie, ob alles geklappt hat, indem Sie"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"in einem Terminal eintippen - wird eine Version angezeigt, war alles erfolgreich."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"git-einrichten"},"Git einrichten"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Damit die Einrichtung von Git abgeschlossen ist, m\xfcssen wir den Namen und die Email-Adresse, welche f\xfcr die Kennzeichnung von Commits verwendet wird, konfigurieren. Dies k\xf6nnen wir in einer Git-Shell konfigurieren (auf Mac: im ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal"),", auf Windows: in ",(0,i.kt)("inlineCode",{parentName:"p"},"Git Bash"),")."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Dort tippen Sie folgende Kommandos ein (wobei Sie nat\xfcrlich Ihren Namen (oder Github-Nickname) anstatt ",(0,i.kt)("inlineCode",{parentName:"p"},"FooBar")," verwenden, ebenso bei der Mail...)"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global user.name FooBar\ngit config --global user.email foo@bar.ch\n")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen obs geklappt hat:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global user.name\ngit config --global user.email\n")))}v.isMDXComponent=!0},68978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-1-bc65976691f66167e398f2bddb02e326.png"},23859:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-10-c113d2389688b68da0a23609ae266540.png"},55103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-11-7eaefa3e98592fd9d32c32b2f09cffca.png"},76121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-12-0af9f0d09f65c6128ffb26c9bb5e889f.png"},60871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-13-bb61d9abd50c90fdec8d060b2ab1f146.png"},37007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-14-a74eb6a9df0d6d54142f3e3992c89c6d.png"},83929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-15-84e130f820c20edbd85b2add3408a3d5.png"},34338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-2-6db1653791a3924a36b682fad38a7063.png"},14797:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-3-02cff0c236c4f1a503523f78ad8e0497.png"},1632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-4-1bd334eef1bd726d453c6bb578e08f0d.png"},33139:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-5-1b6fd80ce517112f5b81e81a2d31b07f.png"},48399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-6-8de0ef12266d3b27afe678111d1ca559.png"},99135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-7-f568da28f268eb710059ff47c342fdfc.png"},49107:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-8-06138241a826c53bcad38321825b41fc.png"},32319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-9-05c8c039ee93a49115a7487d3f7329c3.png"}}]);