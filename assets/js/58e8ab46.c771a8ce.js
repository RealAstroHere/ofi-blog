"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[62185],{65488:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(83117),i=a(67294),r=a(86010),m=a(72389),s=a(67392),p=a(7094),o=a(12466);const l="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a;const{lazy:m,block:c,defaultValue:g,values:u,groupId:k,className:f}=e,N=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=u?u:N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===g?g:null!=(t=null!=g?g:null==(a=N.find((e=>e.props.default)))?void 0:a.props.value)?t:N[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,p.U)(),[T,x]=(0,i.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:Z}=(0,o.o5)();if(null!=k){const e=y[k];null!=e&&e!==T&&b.some((t=>t.value===e))&&x(e)}const G=e=>{const t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==T&&(Z(t),x(n),null!=k&&w(k,String(n)))},F=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var i;const t=C.indexOf(e.currentTarget)-1;a=null!=(i=C[t])?i:C[C.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.default)("tabs-container",l)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":c},f)},b.map((e=>{let{value:t,label:a,attributes:m}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:F,onFocus:G,onClick:G},m,{className:(0,r.default)("tabs__item",d,null==m?void 0:m.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),m?(0,i.cloneElement)(N.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function g(e){const t=(0,m.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},85107:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),i=a(65488);const r={mac:"macOS",win:"Windows",win10:"Windows 10",win11:"Windows 11"},m=e=>{const t=Array.isArray(e.children)?e.children.map((e=>e.props.value)):["win11","win10","macOS"];return n.createElement(i.Z,{groupId:"operating-systems",defaultValue:e.os?e.os[0]:t[0],values:(a=e.os||t,a.map((e=>({label:r[e],value:e}))))},e.children);var a}},38995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=a(83117),i=(a(67294),a(3905)),r=(a(61839),a(85107));const m={sidebar_custom_props:{id:"f989c844-97c0-4f04-b1d2-65c266cc862e"}},s="Git 2.37.1",p={unversionedId:"Programmieren/Infrastruktur/Git-install/index",id:"version-24ef/Programmieren/Infrastruktur/Git-install/index",title:"Git 2.37.1",description:"Installiert?",source:"@site/versioned_docs/version-24ef/01-Programmieren/02-Infrastruktur/03-Git-install/index.md",sourceDirName:"01-Programmieren/02-Infrastruktur/03-Git-install",slug:"/Programmieren/Infrastruktur/Git-install/",permalink:"/24ef/Programmieren/Infrastruktur/Git-install/",draft:!1,tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"f989c844-97c0-4f04-b1d2-65c266cc862e"}},sidebar:"version-24ef/sidebar",previous:{title:"Git Grundlagen",permalink:"/24ef/Programmieren/Infrastruktur/git"},next:{title:"GitHub",permalink:"/24ef/Programmieren/Infrastruktur/github"}},o={},l=[{value:"Git einrichten",id:"git-einrichten",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=d("Comment"),g=d("Answer"),u=d("TabItem"),k=d("GTabs"),f=d("Figure"),N={toc:l};function b(e){let{components:t,...m}=e;return(0,i.kt)("wrapper",(0,n.Z)({},N,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"git-2371"},"Git 2.37.1"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)(g,{type:"state",webKey:"d24faf11-ba87-4e17-8e12-2fe834b60268",mdxType:"Answer"},"Installiert?"),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udc49 ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)(r.Z,{os:["win","mac"],mdxType:"OsTabs"},(0,i.kt)(u,{value:"win",mdxType:"TabItem"},(0,i.kt)(k,{getLabel:e=>e+1+".",highlighted:[2,4,5,10,12],mdxType:"GTabs"},(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(37051).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Standardoption ist ok",src:a(70775).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Standardoption ist ok",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Praktische Option (optional)",src:a(8224).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Praktische Option (optional)",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(11809).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:":mdi-flash-triangle--orange: VS Code Ausw\xe4hlen!",src:a(52891).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)("i",{parentName:"figcaption",className:"mdi-flash-triangle mdi orange"})," VS Code Ausw\xe4hlen!",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:":mdi-flash-triangle--orange: `main` als Standardname ausw\xe4hlen.",src:a(82749).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)("i",{parentName:"figcaption",className:"mdi-flash-triangle mdi orange"})," ",(0,i.kt)("inlineCode",{parentName:"figcaption"},"main")," als Standardname ausw\xe4hlen.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(75144).Z,width:"499",height:"391"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(85250).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(75165).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(52418).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Die Windows Konsole ist ausreichend.",src:a(77167).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Die Windows Konsole ist ausreichend.",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:10,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(80364).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:11,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"Wir brauchen den Credential Manager nicht",src:a(3760).Z,width:"499",height:"392"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Wir brauchen den Credential Manager nicht",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,i.kt)(c,{parentName:"div",type:"figure",nr:12,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(91666).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:13,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)(f,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{src:a(69359).Z,width:"499",height:"392"})),(0,i.kt)(c,{parentName:"div",type:"figure",nr:14,mdxType:"Comment"})))),(0,i.kt)(u,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Installieren Sie ",(0,i.kt)("inlineCode",{parentName:"p"},"homebrew"),", wenn es nicht bereits installiert ist"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen: \xd6ffnen Sie ein Terminal (suchen Sie nach ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal")," bei Spotlight)"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie die Version von ",(0,i.kt)("inlineCode",{parentName:"p"},"homebrew")," - wird eine angezeigt, haben Sie's installiert:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew --version\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wenn keine Version angezeigt (bzw. sowas wie ",(0,i.kt)("inlineCode",{parentName:"p"},"zsh command not found"),"), installieren Sie ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"\ud83d\udc49 homebrew")),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Geben Sie ins Terminal "),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git\n")),(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"ein."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen Sie, ob alles geklappt hat, indem Sie"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"in einem Terminal eintippen - wird eine Version angezeigt, war alles erfolgreich."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"git-einrichten"},"Git einrichten"),(0,i.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Damit die Einrichtung von Git abgeschlossen ist, m\xfcssen wir den Namen und die Email-Adresse, welche f\xfcr die Kennzeichnung von Commits verwendet wird, konfigurieren. Dies k\xf6nnen wir in einer Git-Shell konfigurieren (auf Mac: im ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal"),", auf Windows: in ",(0,i.kt)("inlineCode",{parentName:"p"},"Git Bash"),")."),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Dort tippen Sie folgende Kommandos ein (wobei Sie nat\xfcrlich Ihren Namen (oder Github-Nickname) anstatt ",(0,i.kt)("inlineCode",{parentName:"p"},"FooBar")," verwenden, ebenso bei der Mail...)"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global user.name FooBar\ngit config --global user.email foo@bar.ch\n")),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberpr\xfcfen obs geklappt hat:"),(0,i.kt)(c,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global user.name\ngit config --global user.email\n")))}b.isMDXComponent=!0},37051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-1-bc65976691f66167e398f2bddb02e326.png"},52418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-10-c113d2389688b68da0a23609ae266540.png"},77167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-11-7eaefa3e98592fd9d32c32b2f09cffca.png"},80364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-12-0af9f0d09f65c6128ffb26c9bb5e889f.png"},3760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-13-bb61d9abd50c90fdec8d060b2ab1f146.png"},91666:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-14-a74eb6a9df0d6d54142f3e3992c89c6d.png"},69359:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-15-84e130f820c20edbd85b2add3408a3d5.png"},70775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-2-6db1653791a3924a36b682fad38a7063.png"},8224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-3-02cff0c236c4f1a503523f78ad8e0497.png"},11809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-4-1bd334eef1bd726d453c6bb578e08f0d.png"},52891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-5-1b6fd80ce517112f5b81e81a2d31b07f.png"},82749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-6-8de0ef12266d3b27afe678111d1ca559.png"},75144:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-7-f568da28f268eb710059ff47c342fdfc.png"},85250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-8-06138241a826c53bcad38321825b41fc.png"},75165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-9-05c8c039ee93a49115a7487d3f7329c3.png"}}]);