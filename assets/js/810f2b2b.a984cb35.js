"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1464],{82593:(e,t,a)=>{a.d(t,{x:()=>S,Z:()=>A});var n=a(67294);const l={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"};var r=a(86010),i=a(71217);const s=/--(?<klass>\w+)$/,c=e=>{let t,{value:a}=e,r=a;if(s.test(a)){const e=(e=>{if(s.test(e))return e.match(s).groups.klass})(a);t=l[e],r=""+a.replace(s,"")}return n.createElement("option",{value:a,className:t},r)};var o=a(92814),d=a(51436),m=a(68949),u=a(72389),h=a(21314),b=a(74322);const g=/--(?<klass>\w+)$/,p=e=>l[(e=>{if(g.test(e))return e.match(g).groups.klass})(e)],f=(0,i.Pi)((e=>{const t=(0,u.Z)(),[a,i]=n.useState("unchecked"),s=(0,h.oR)("documentStore").find(e.webKey),g=e=>{s.loaded&&(i("unchecked"),s.setData({value:e,type:"string"}))},f=t=>{if(e.checker)return i(e.checker(t)?"correct":"wrong");const a=e.sanitizer?e.sanitizer:e=>e;i(a(t)===a(e.solution)?"correct":"wrong")};return n.useEffect((()=>(0,m.U5)((()=>s.loaded),(e=>{e&&f(s.value)}))),[s]),n.useEffect((()=>{s.loaded&&f(s.value)}),[s,t]),t?s.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&n.createElement("label",null,e.children),e.select?n.createElement("select",{onChange:e=>g(e.target.value),style:{width:e.width},value:s.value,className:p(s.value),disabled:!s.loaded},e.select.map(((e,t)=>n.createElement(c,{value:e,key:t})))):n.createElement("input",{type:"text",style:{width:e.width},onChange:e=>g(e.target.value),value:s.value,disabled:!s.loaded||s.readonly||e.disabled}),(e.solution||e.checker)&&n.createElement("button",{onClick:()=>f(s.value),className:(0,r.default)(l[a],l.checkButton)},n.createElement(o.G,{icon:(v=a,"correct"===v?d.f8k:"wrong"===v?d.nYk:d.sph)}))):n.createElement(b.Z,null):n.createElement("div",null,"SSR");var v})),v=/--(?<klass>\w+)$/,k=e=>l[(e=>{if(v.test(e))return e.match(v).groups.klass})(e)],N=(0,i.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),a=function(e,a){void 0===a&&(a=0);const n=[...t.data.value.slice(0,a),e,...t.data.value.slice(a+1)];t.setData({...t.data,value:n})};return t.loaded?n.createElement("div",{className:l.answer},e.label&&n.createElement("label",null,e.label),t.data.value.map(((l,r)=>e.select?n.createElement("select",{key:r,onChange:e=>a(e.target.value,r),value:l,className:k(l),disabled:!t.loaded},e.select.map(((e,t)=>n.createElement(c,{value:e,key:t})))):n.createElement("input",{key:r,type:"text",onChange:e=>a(e.target.value,r),value:l,disabled:!t.loaded||t.readonly})))):n.createElement(b.Z,null)}));var y=a(87462),w=a(75552);const E=(0,i.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return t.loaded?n.createElement("div",null,e.label&&n.createElement("h6",null,e.label),n.createElement(w.Z,(0,y.Z)({model:t},e))):n.createElement(b.Z,null)}));var F=a(47271);const x=(0,i.Pi)((e=>(0,h.oR)("documentStore").find(e.webKey).saveService.isOffline?n.createElement("div",null,n.createElement("span",{className:(0,r.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null));var z=a(97762);const S=e=>e.replace(/\s+/g,"").toUpperCase(),A=(0,i.Pi)((e=>{const t=(0,h.oR)("documentStore"),a=(0,h.oR)("msalStore"),l=t.find(e.webKey),r=(0,u.Z)();return(0,h.ky)((()=>(e=>{switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||z.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}})(e)),e.type,e.webKey,!0),r?l?n.createElement("div",{"data--web-key":e.webKey},n.createElement(F.Z,null),a.loggedIn&&n.createElement(x,{webKey:e.webKey}),"text"===e.type&&n.createElement(E,e),"string"===e.type&&n.createElement(f,e),"array"===e.type&&n.createElement(N,e)):n.createElement(b.Z,null):n.createElement("div",null,"SSR")}))},47271:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294);const l="noLoginAlert_HRfh";var r=a(39960),i=a(71217),s=a(21314);const c=(0,i.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:n.createElement("div",{className:l},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(r.Z,{to:"/login"},"Login"))))},74322:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),l=a(86010);const r="loader_FEpR",i="badge_oWqf";var s=a(71217),c=a(92814),o=a(51436);const d=(0,s.Pi)((()=>n.createElement("div",{className:(0,l.default)(r)},n.createElement(c.G,{icon:o.IJ7,spin:!0}),n.createElement("span",{className:(0,l.default)("badge",i)},"Laden..."))))},75552:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(67294);const l="quillEditor_NxYB",r="quillAnswer_J46I",i="monospace_usc_",s="disableToolbar_bRdP";var c=a(86010),o=a(71217),d=a(74322),m=void 0;const u=[["bold","italic","underline"],[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]],h=e=>{const t=[];if(e.bold||e.italic||e.underline){const a=[];e.bold&&a.push("bold"),e.italic&&a.push("italic"),e.underline&&a.push("underline"),t.push(a)}if(e.h1||e.h2||e.h3){const a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){const a=[];e.color&&a.push({color:[]}),e.background&&a.push({background:[]}),t.push(a)}if(e.ul||e.ol){const a=[];e.ol&&a.push({list:"ordered"}),e.ul&&a.push({list:"bullet"}),t.push(a)}if(e.formula||e.image){const a=[];e.formula&&a.push("formula"),e.image&&a.push("image"),t.push(a)}return e.code&&t.push(["code-block"]),t},b=(0,o.Pi)((e=>{const[t,o]=n.useState(!1),[b,g]=n.useState(!1),p=n.useRef(null),{model:f}=e,v=e=>{e.preventDefault()};n.useEffect((()=>{let t=!0;return function(e,t){if(void 0===t&&(t={}),m)return e();const n=[Promise.all([a.e(7762),a.e(8446),a.e(324),a.e(6095),a.e(1167)]).then(a.t.bind(a,44290,23)),a.e(6095).then(a.t.bind(a,76095,23)),a.e(7891).then(a.t.bind(a,17891,23)),Promise.all([a.e(532),a.e(1940)]).then(a.bind(a,11940))],l={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(l.katex=n.length,n.push(a.e(1008).then(a.bind(a,41008)),Promise.all([a.e(532),a.e(37)]).then(a.bind(a,50037)))),Promise.all(n).then((t=>{m=t[l["react-quill"]].default;const a=t[l.quill].default,n=t[l["react-image-compress"]].default;if("katex"in l){const e=t[l.katex].default;window.katex=e}a.register("modules/imageCompress",n),e()}))}((()=>{t&&(g(!0),p&&p.current&&p.current.editor.getModule("toolbar").container.addEventListener("mousedown",v))}),{...e.toolbar||{},...e.toolbarAdd||{}}),()=>{t=!1,p&&p.current&&p.current.editor.getModule("toolbar").container.removeEventListener("mousedown",v)}}),[e]);return m&&b&&f.loaded?n.createElement("div",{onFocus:()=>!t&&o(!0),className:(0,c.default)(l)},n.createElement(m,{ref:p,theme:"snow",readOnly:e.readonly||f.readonly,className:(0,c.default)(r,e.monospace&&i,t?void 0:s),value:f.text||"",onChange:(t,a,n,l)=>{var r,i;r=t,void 0===i&&(i=0),!e.readonly&&f.canUpdate&&b&&f.setText(r)},modules:{toolbar:e.toolbar?h(e.toolbar):[...u,...h(e.toolbarAdd||{})],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):n.createElement(d.Z,null)}))},1060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>S,default:()=>P,frontMatter:()=>z,metadata:()=>A,toc:()=>B});var n=a(87462),l=a(67294),r=a(3905),i=a(86010);const s="container_GwNw",c="A_T38E",o="PUB_yjj_",d="B_c62f",m="MIXA_Gd8i",u="MIXB_CGO5",h="PRIVA_myYZ",b="PRIVB_yZfW",g="colorPicker_gndF",p="colorBucket_vssC",f="mixed_mKvb",v="caption__7Oz";var k=a(46910),N=a.n(k),y=a(90532);const w=e=>"#"+(16777215^Number("0x1"+e.substring(1))).toString(16).substr(1).toUpperCase(),E=(e,t,a)=>{t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,l=n*(1-Math.abs(e/60%2-1)),r=a-n/2,i=0,s=0,c=0;0<=e&&e<60?(i=n,s=l,c=0):60<=e&&e<120?(i=l,s=n,c=0):120<=e&&e<180?(i=0,s=n,c=l):180<=e&&e<240?(i=0,s=l,c=n):240<=e&&e<300?(i=l,s=0,c=n):300<=e&&e<360&&(i=n,s=0,c=l);let o=Math.round(255*(i+r)).toString(16),d=Math.round(255*(s+r)).toString(16),m=Math.round(255*(c+r)).toString(16);return 1==o.length&&(o="0"+i),1==d.length&&(d="0"+s),1==m.length&&(m="0"+c),"#"+o+d+m},F=e=>{const[t,a]=l.useState(60),[n,r]=l.useState("#ffff00"),[k,F]=l.useState(230),[x,z]=l.useState("#ffff00"),[S,A]=l.useState(100),[_,B]=l.useState("#ffff00"),[C,Z]=l.useState("#ffff00"),[K,M]=l.useState("#ffff00"),[P,L]=l.useState("#ffff00"),[I,D]=l.useState("#ffff00");return l.useEffect((()=>{r(E(t,100,50))}),[t]),l.useEffect((()=>{z(E(k,100,50))}),[k]),l.useEffect((()=>{B(E(S,100,50))}),[S]),l.useEffect((()=>{Z("#"+N().mixColors([n,_]))}),[n,_]),l.useEffect((()=>{M("#"+N().mixColors([x,_]))}),[x,_]),l.useEffect((()=>{const e=N().mixColors([n,_,x]);L("#"+e),D("#"+e)}),[n,_,x]),l.createElement("div",{className:s},l.createElement("div",{className:(0,i.default)(c)},l.createElement(y.Z,{className:(0,i.default)(g,"umami--click--color-exchange-colorpicker"),hue:t,onInput:e=>a(e),initiallyCollapsed:!0}),l.createElement("div",{className:(0,i.default)(v)},l.createElement("span",{className:"badge badge--secondary",style:{background:n,color:w(n)}},"Alice"),"'s Geheimfarbe")),l.createElement("div",{className:(0,i.default)(o)},l.createElement(y.Z,{className:g,hue:S,onInput:e=>A(e),initiallyCollapsed:!0}),l.createElement("div",{className:(0,i.default)(v)},l.createElement("span",{className:"badge badge--secondary",style:{background:_,color:w(_)}},"\xd6ffentlich")," ","Eve \ud83d\udd76")),l.createElement("div",{className:(0,i.default)(d)},l.createElement(y.Z,{className:g,hue:k,onInput:e=>F(e),initiallyCollapsed:!0}),l.createElement("div",{className:(0,i.default)(v)},l.createElement("span",{className:"badge badge--secondary",style:{background:x,color:w(x)}},"Bob"),"'s Geheimfarbe")),l.createElement("div",{className:(0,i.default)(m,f)},l.createElement("div",{className:p,style:{background:C}}),l.createElement("div",{className:(0,i.default)(v)},l.createElement("span",{className:"badge badge--secondary",style:{background:n,color:w(n)}},"Alice"),l.createElement("span",null,"+"),l.createElement("span",{className:"badge badge--secondary",style:{background:_,color:w(_)}},"\xd6ffentlich"))),l.createElement("div",{className:(0,i.default)(u,f)},l.createElement("div",{className:p,style:{background:K}}),l.createElement("div",{className:(0,i.default)(v)},l.createElement("span",{className:"badge badge--secondary",style:{background:_,color:w(_)}},"\xd6ffentlich"),l.createElement("span",null,"+"),l.createElement("span",{className:"badge badge--secondary",style:{background:x,color:w(x)}},"Bob"))),l.createElement("div",{className:(0,i.default)(h,f)},l.createElement("div",{className:p,style:{background:P}}),l.createElement("div",{className:(0,i.default)(v)},l.createElement("span",{className:"badge badge--secondary",style:{background:n,color:w(n)}},"Alice"),l.createElement("span",null,"+"),l.createElement("span",{className:"badge badge--secondary",style:{background:K,color:w(K)}},"Mischung"))),l.createElement("div",{className:(0,i.default)(b,f)},l.createElement("div",{className:p,style:{background:I}}),l.createElement("div",{className:(0,i.default)(v)},l.createElement("span",{className:"badge badge--secondary",style:{background:C,color:w(C)}},"Mischung"),l.createElement("span",null,"+"),l.createElement("span",{className:"badge badge--secondary",style:{background:x,color:w(x)}},"Bob"))))};var x=a(82593);const z={title:"Geheime Farbe"},S="Geheime Farbe [^1]",A={unversionedId:"Kryptologie/Asymmetrisch/secret-color",id:"Kryptologie/Asymmetrisch/secret-color",title:"Geheime Farbe",description:"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr eine ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage geheim bleiben. Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden.",source:"@site/docs/Kryptologie/04-Asymmetrisch/02-secret-color.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/secret-color",permalink:"/Kryptologie/Asymmetrisch/secret-color",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/02-secret-color.md",tags:[],version:"current",lastUpdatedAt:1636453565,formattedLastUpdatedAt:"9.11.2021",sidebarPosition:2,frontMatter:{title:"Geheime Farbe"},sidebar:"sidebar",previous:{title:"Schl\xfcsselaustausch",permalink:"/Kryptologie/Asymmetrisch/key-exchange"},next:{title:"Asymmetrie",permalink:"/Kryptologie/Asymmetrisch/asymmetrie"}},_={},B=[{value:"Alice und Bob",id:"alice-und-bob",level:2},{value:"Eve",id:"eve",level:2},{value:"Ausprobieren",id:"ausprobieren",level:2}],C=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},Z=C("Figure"),K=C("SourceRef"),M={toc:B};function P(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},M,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geheime-farbe-"},"Geheime Farbe ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr ",(0,r.kt)("strong",{parentName:"p"},"eine")," ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage ",(0,r.kt)("strong",{parentName:"p"},"geheim bleiben"),". Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden."),(0,r.kt)("h2",{id:"alice-und-bob"},"Alice und Bob"),(0,r.kt)("p",null,"Sie haben eine Idee und gehen wie folgt vor:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Alice und Bob mischen sich je in einem Farbk\xfcbel eine pers\xf6nliche, geheime Farbe, die sie niemandem mitteilen (private Farbe genannt)."),(0,r.kt)("li",{parentName:"ol"},"Alice w\xe4hlt nun zus\xe4tzlich eine Farbe, die nicht geheim gehalten wird. Sie f\xfcllt zwei grosse Farbk\xfcbel mit dieser Farbe, einen beh\xe4lt sie f\xfcr sich selbst, den anderen schickt sie per Post an Bob (gemeinsame Farbe genannt)."),(0,r.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt mischen sich Alice und Bob je in einem leeren Farbk\xfcbel eine neue Farbe: Sie nehmen dazu genau dieselbe Menge der eigenen privaten Farbe und der gemeinsamen Farbe. Diese neue Farbe schicken sie sich wieder gegenseitig zu."),(0,r.kt)("li",{parentName:"ol"},"Im letzten Schritt nehmen sie zwei Einheiten der soeben erhaltenen Farbe und eine Einheit der privaten Farbe und erhalten die gemeinsame private Farbe, mit der sie die Teile des neuen Kunstwerks bemalen.")),(0,r.kt)("h2",{id:"eve"},"Eve"),(0,r.kt)("p",null,"Die neugierige Journalistin Eve m\xf6chte unbedingt wissen, was Alice und Bob aushecken, um noch vor der Vernissage einen exklusiven Zeitungsbericht zu ver\xf6ffentlichen. Daher versucht sie, an die gemeinsame private Farbe zu gelangen. Sie \xfcberwacht die Post und f\xfcllt sich von jeder transportierten Farbe ein wenig in eigene Beh\xe4lter ab."),(0,r.kt)("h2",{id:"ausprobieren"},"Ausprobieren"),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"geheime-farbe-herausfinden"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geheime Farbe herausfinden")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bestimmen Sie je eine Farbe f\xfcr Alice und Bob und schauen Sie sich die Ergebnisse an."),(0,r.kt)("p",{parentName:"div"},"Wieso erhalten Alice und Bob schlussendlich dieselbe Farbe?"),(0,r.kt)(x.Z,{type:"text",webKey:"11388720-93d0-403f-94f0-64b6f1ae4752",mdxType:"Answer"}))),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"wieso-kennt-eve-die-geheime-farbe-nicht"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Wieso kennt Eve die geheime Farbe nicht?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich: wieso kann Eve aus den verschickten Farben die geheime Farbe nicht herstellen?"),(0,r.kt)(x.Z,{type:"text",webKey:"a627b60d-54bd-4a3e-a870-510d014364cf",mdxType:"Answer"}))),(0,r.kt)(F,{mdxType:"ColorExchange"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div",id:"\ufe0f-digitale-farben--echte-farben"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Digitale Farben \u2260 Echte Farben")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Im obigen Modell musste getrickst werden: In der digitalen Welt werden Farben durch die Erzeugung von Lichtwellen unterschiedlicher Wellenl\xe4nge erzeugt. Dabei wird bei der \xdcberlagerung aller Frequenzspektren weisses Licht erzeugt. Dies wird auch ",(0,r.kt)("strong",{parentName:"p"},"additives Farbmodell")," genannt. Im ",(0,r.kt)("strong",{parentName:"p"},"Gegensatz"),' dazu werden Farben in der realen Welt je nach Oberfl\xe4che nur gewisse Wellenl\xe4nfen reflektiert und die anderen werden von der Oberfl\xe4che "verschluckt". Werden mehrere Farben gemischt, f\xfchrt dies dazu, dass alle sichtbaren Wellenl\xe4ngen "verschluckt" werden und daher ein Braun/Schwarz entsteht. Dieses ist das ',(0,r.kt)("strong",{parentName:"p"},"subtraktive Farbmodell"),"."),(0,r.kt)(Z,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"digitales (links) und reales (rechts) Farbmodell",src:a(53131).Z,width:"1081",height:"538"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"digitales (links) und reales (rechts) Farbmodell",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(K,{parentName:"figcaption",bib:{author:"networkcaptain",source:"https://imgur.com/t/yellow/H7uboyb",licence:"Imgur",licence_url:"https://imgur.com/tos",edited:!1},mdxType:"SourceRef"}))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=242355"},"rothe.io"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}P.isMDXComponent=!0},53131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/color-models-7e7e0e964ddb2129e58215d8002957b0.png"}}]);