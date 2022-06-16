"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[44027],{682593:function(e,t,n){n.d(t,{x:function(){return A},Z:function(){return _}});var a=n(667294),r=n(403435),i={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},l=n(386010),s=n(471217),c=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),o=function(e){var t=e.value,n=t,r=void 0;if(c.test(t)){var l=function(e){if(c.test(e))return e.match(c).groups.klass}(t);r=i[l],n=""+t.replace(c,"")}return a.createElement("option",{value:t,className:r},n)},d=n(592814),u=n(51436),m=n(168949),f=n(972389),b=n(121314),h=n(274322),g=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),p=function(e){return i[function(e){if(g.test(e))return e.match(g).groups.klass}(e)]},v=(0,s.Pi)((function(e){var t,n=(0,f.Z)(),r=a.useState("unchecked"),s=r[0],c=r[1],g=(0,b.oR)("documentStore").find(e.webKey),v=function(e){g.loaded&&(c("unchecked"),g.setData({value:e,type:"string"}))},k=function(t){if(e.checker)return c(e.checker(t)?"correct":"wrong");var n=e.sanitizer?e.sanitizer:function(e){return e};c(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,m.U5)((function(){return g.loaded}),(function(e){e&&k(g.value)}))}),[g]),a.useEffect((function(){g.loaded&&k(g.value)}),[g,n]),n?g.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",{style:{width:e.labelWidth}},e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return v(e.target.value)},style:{width:e.width},value:g.value,className:p(g.value),disabled:!g.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{type:"text",style:{width:e.width},onChange:function(e){return v(e.target.value)},value:g.value,disabled:!g.loaded||g.readonly||e.disabled}),(e.solution||e.checker)&&a.createElement("button",{onClick:function(){return k(g.value)},className:(0,l.default)(i[s],i.checkButton)},a.createElement(d.G,{icon:(t=s,"correct"===t?u.f8k:"wrong"===t?u.nYk:u.sph)}))):a.createElement(h.Z,null):a.createElement("div",null,"SSR")})),k=(0,r.Z)(/\x2D\x2D(\w+)$/,{klass:1}),N=function(e){return i[function(e){if(k.test(e))return e.match(k).groups.klass}(e)]},y=(0,s.Pi)((function(e){var t=(0,b.oR)("documentStore").find(e.webKey),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return t.loaded?a.createElement("div",{className:i.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:N(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(o,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.readonly})}))):a.createElement(h.Z,null)})),w=n(583117),E=n(575552),F=(0,s.Pi)((function(e){var t=(0,b.oR)("documentStore").find(e.webKey);return t.loaded?a.createElement("div",null,e.label&&a.createElement("h6",null,e.label),a.createElement(E.Z,(0,w.Z)({model:t},e))):a.createElement(h.Z,null)})),x=n(647271),z=(0,s.Pi)((function(e){return(0,b.oR)("documentStore").find(e.webKey).saveService.isOffline?a.createElement("div",null,a.createElement("span",{className:(0,l.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),S=n(697762),A=function(e){return e.replace(/\s+/g,"").toUpperCase()},_=(0,s.Pi)((function(e){var t=(0,b.oR)("documentStore"),n=(0,b.oR)("msalStore"),r=t.find(e.webKey),i=(0,f.Z)();return(0,b.ky)((function(){return function(e){switch(e.type){case"string":return{value:e.default||"",type:"string"};case"text":return{value:e.default||S.renderToString(e.children),type:"text"};case"array":return{value:Array(e.size).fill(""),type:"array",size:e.size}}}(e)}),e.type,e.webKey,!0),i?r?a.createElement("div",{"data--web-key":e.webKey},a.createElement(x.Z,null),n.loggedIn&&a.createElement(z,{webKey:e.webKey}),"text"===e.type&&a.createElement(F,e),"string"===e.type&&a.createElement(v,e),"array"===e.type&&a.createElement(y,e)):a.createElement(h.Z,null):a.createElement("div",null,"SSR")}))},647271:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(667294),r="noLoginAlert_HRfh",i=n(239960),l=n(471217),s=n(121314),c=(0,l.Pi)((function(){return(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.Z,{to:"/login"},"Login"))}))},792302:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(386010),r=n(667294),i="container_GwNw",l="A_T38E",s="PUB_yjj_",c="B_c62f",o="MIXA_Gd8i",d="MIXB_CGO5",u="PRIVA_myYZ",m="PRIVB_yZfW",f="colorPicker_gndF",b="colorBucket_vssC",h="mixed_mKvb",g="caption__7Oz",p=n(946910),v=n.n(p),k=n(990532),N=function(e){return"#"+(16777215^Number("0x1"+e.substring(1))).toString(16).substr(1).toUpperCase()},y=function(e,t,n){t/=100,n/=100;var a=(1-Math.abs(2*n-1))*t,r=a*(1-Math.abs(e/60%2-1)),i=n-a/2,l=0,s=0,c=0;0<=e&&e<60?(l=a,s=r,c=0):60<=e&&e<120?(l=r,s=a,c=0):120<=e&&e<180?(l=0,s=a,c=r):180<=e&&e<240?(l=0,s=r,c=a):240<=e&&e<300?(l=r,s=0,c=a):300<=e&&e<360&&(l=a,s=0,c=r);var o=Math.round(255*(l+i)).toString(16),d=Math.round(255*(s+i)).toString(16),u=Math.round(255*(c+i)).toString(16);return 1==o.length&&(o="0"+l),1==d.length&&(d="0"+s),1==u.length&&(u="0"+c),"#"+o+d+u},w=function(e){var t=r.useState(60),n=t[0],p=t[1],w=r.useState("#ffff00"),E=w[0],F=w[1],x=r.useState(230),z=x[0],S=x[1],A=r.useState("#ffff00"),_=A[0],Z=A[1],B=r.useState(100),C=B[0],K=B[1],D=r.useState("#ffff00"),M=D[0],P=D[1],L=r.useState("#ffff00"),I=L[0],R=L[1],G=r.useState("#ffff00"),V=G[0],T=G[1],W=r.useState("#ffff00"),j=W[0],q=W[1],O=r.useState("#ffff00"),H=O[0],U=O[1];return r.useEffect((function(){F(y(n,100,50))}),[n]),r.useEffect((function(){Z(y(z,100,50))}),[z]),r.useEffect((function(){P(y(C,100,50))}),[C]),r.useEffect((function(){R("#"+v().mixColors([E,M]))}),[E,M]),r.useEffect((function(){T("#"+v().mixColors([_,M]))}),[_,M]),r.useEffect((function(){var e=v().mixColors([E,M,_]);q("#"+e),U("#"+e)}),[E,M,_]),r.createElement("div",{className:i},r.createElement("div",{className:(0,a.default)(l)},r.createElement(k.Z,{className:(0,a.default)(f,"umami--click--color-exchange-colorpicker"),hue:n,onInput:function(e){return p(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(g)},r.createElement("span",{className:"badge badge--secondary",style:{background:E,color:N(E)}},"Alice"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(s)},r.createElement(k.Z,{className:f,hue:C,onInput:function(e){return K(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(g)},r.createElement("span",{className:"badge badge--secondary",style:{background:M,color:N(M)}},"\xd6ffentlich")," ","Eve \ud83d\udd76")),r.createElement("div",{className:(0,a.default)(c)},r.createElement(k.Z,{className:f,hue:z,onInput:function(e){return S(e)},initiallyCollapsed:!0}),r.createElement("div",{className:(0,a.default)(g)},r.createElement("span",{className:"badge badge--secondary",style:{background:_,color:N(_)}},"Bob"),"'s Geheimfarbe")),r.createElement("div",{className:(0,a.default)(o,h)},r.createElement("div",{className:b,style:{background:I}}),r.createElement("div",{className:(0,a.default)(g)},r.createElement("span",{className:"badge badge--secondary",style:{background:E,color:N(E)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:M,color:N(M)}},"\xd6ffentlich"))),r.createElement("div",{className:(0,a.default)(d,h)},r.createElement("div",{className:b,style:{background:V}}),r.createElement("div",{className:(0,a.default)(g)},r.createElement("span",{className:"badge badge--secondary",style:{background:M,color:N(M)}},"\xd6ffentlich"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:_,color:N(_)}},"Bob"))),r.createElement("div",{className:(0,a.default)(u,h)},r.createElement("div",{className:b,style:{background:j}}),r.createElement("div",{className:(0,a.default)(g)},r.createElement("span",{className:"badge badge--secondary",style:{background:E,color:N(E)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:V,color:N(V)}},"Mischung"))),r.createElement("div",{className:(0,a.default)(m,h)},r.createElement("div",{className:b,style:{background:H}}),r.createElement("div",{className:(0,a.default)(g)},r.createElement("span",{className:"badge badge--secondary",style:{background:I,color:N(I)}},"Mischung"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:_,color:N(_)}},"Bob"))))}},274322:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(667294),r=n(386010),i="loader_FEpR",l="badge_oWqf",s=n(471217),c=n(592814),o=n(51436),d=(0,s.Pi)((function(){return a.createElement("div",{className:(0,r.default)(i)},a.createElement(c.G,{icon:o.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",l)},"Laden..."))}))},575552:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(667294),r="quillEditor_NxYB",i="quillAnswer_J46I",l="monospace_usc_",s="disableToolbar_bRdP",c=n(386010),o=n(471217),d=n(274322),u=void 0,m=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),f=function(e){var t=[];if(e.bold||e.italic||e.underline){var n=[];e.bold&&n.push("bold"),e.italic&&n.push("italic"),e.underline&&n.push("underline"),t.push(n)}if(e.h1||e.h2||e.h3){var a=[];e.h1&&a.push(1),e.h2&&a.push(2),e.h3&&a.push(3),a.push(!1),t.push(a)}if(e.color||e.background){var r=[];e.color&&r.push({color:[]}),e.background&&r.push({background:[]}),t.push(r)}if(e.ul||e.ol){var i=[];e.ol&&i.push({list:"ordered"}),e.ul&&i.push({list:"bullet"}),t.push(i)}if(e.formula||e.image){var l=[];e.formula&&l.push("formula"),e.image&&l.push("image"),t.push(l)}return e.code&&t.push(["code-block"]),t},b=(0,o.Pi)((function(e){var t=a.useState(!1),o=t[0],b=t[1],h=a.useState(!1),g=h[0],p=h[1],v=a.useRef(null),k=e.model,N=function(e){e.preventDefault()};a.useEffect((function(){var t=!0;return function(e,t){if(void 0===t&&(t={}),u)return e();var a=[Promise.all([n.e(97762),n.e(18446),n.e(80324),n.e(76095),n.e(71167)]).then(n.t.bind(n,771167,23)),n.e(76095).then(n.t.bind(n,676095,23)),n.e(17891).then(n.t.bind(n,817891,23)),Promise.all([n.e(40532),n.e(11940)]).then(n.bind(n,911940))],r={"react-quill":0,quill:1,"react-image-compress":2};t.formula&&!window.katex&&(r.katex=a.length,a.push(n.e(41008).then(n.bind(n,541008)),Promise.all([n.e(40532),n.e(50037)]).then(n.bind(n,250037)))),Promise.all(a).then((function(t){u=t[r["react-quill"]].default;var n=t[r.quill].default,a=t[r["react-image-compress"]].default;if("katex"in r){var i=t[r.katex].default;window.katex=i}n.register("modules/imageCompress",a),e()}))}((function(){t&&(p(!0),v&&v.current&&v.current.editor.getModule("toolbar").container.addEventListener("mousedown",N))}),Object.assign({},e.toolbar||{},e.toolbarAdd||{})),function(){t=!1,v&&v.current&&v.current.editor.getModule("toolbar").container.removeEventListener("mousedown",N)}}),[e]);return u&&g&&k.loaded?a.createElement("div",{onFocus:function(){return!o&&b(!0)},className:(0,c.default)(r)},a.createElement(u,{ref:v,theme:"snow",readOnly:e.readonly||k.readonly,className:(0,c.default)(i,e.monospace&&l,o?void 0:s),value:k.text||"",onChange:function(t,n,a,r){var i,l;i=t,void 0===l&&(l=0),!e.readonly&&k.canUpdate&&g&&k.setText(i)},modules:{toolbar:e.toolbar?f(e.toolbar):[].concat(m,f(e.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement(d.Z,null)}))},151072:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return f}});var a=n(583117),r=n(480102),i=(n(667294),n(603905)),l=n(792302),s=n(682593),c=["components"],o={title:"Geheime Farbe"},d="Geheime Farbe [^1]",u={unversionedId:"Kryptologie/Asymmetrisch/secret-color",id:"version-24f/Kryptologie/Asymmetrisch/secret-color",title:"Geheime Farbe",description:"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr eine ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage geheim bleiben. Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden.",source:"@site/versioned_docs/version-24f/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",sourceDirName:"06-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/secret-color",permalink:"/24f/Kryptologie/Asymmetrisch/secret-color",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/04-Asymmetrisch/02-secret-color.md",tags:[],version:"24f",sidebarPosition:2,frontMatter:{title:"Geheime Farbe"},sidebar:"version-24f/sidebar",previous:{title:"Schl\xfcsselaustausch",permalink:"/24f/Kryptologie/Asymmetrisch/key-exchange"},next:{title:"Asymmetrie",permalink:"/24f/Kryptologie/Asymmetrisch/asymmetrie"}},m={},f=[{value:"Alice und Bob",id:"alice-und-bob",level:2},{value:"Eve",id:"eve",level:2},{value:"Ausprobieren",id:"ausprobieren",level:2}],b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=b("Figure"),g=b("SourceRef"),p={toc:f};function v(e){var t=e.components,o=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geheime-farbe-"},"Geheime Farbe ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr ",(0,i.kt)("strong",{parentName:"p"},"eine")," ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage ",(0,i.kt)("strong",{parentName:"p"},"geheim bleiben"),". Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden."),(0,i.kt)("h2",{id:"alice-und-bob"},"Alice und Bob"),(0,i.kt)("p",null,"Sie haben eine Idee und gehen wie folgt vor:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Alice und Bob mischen sich je in einem Farbk\xfcbel eine pers\xf6nliche, geheime Farbe, die sie niemandem mitteilen (private Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Alice w\xe4hlt nun zus\xe4tzlich eine Farbe, die nicht geheim gehalten wird. Sie f\xfcllt zwei grosse Farbk\xfcbel mit dieser Farbe, einen beh\xe4lt sie f\xfcr sich selbst, den anderen schickt sie per Post an Bob (gemeinsame Farbe genannt)."),(0,i.kt)("li",{parentName:"ol"},"Im n\xe4chsten Schritt mischen sich Alice und Bob je in einem leeren Farbk\xfcbel eine neue Farbe: Sie nehmen dazu genau dieselbe Menge der eigenen privaten Farbe und der gemeinsamen Farbe. Diese neue Farbe schicken sie sich wieder gegenseitig zu."),(0,i.kt)("li",{parentName:"ol"},"Im letzten Schritt nehmen sie zwei Einheiten der soeben erhaltenen Farbe und eine Einheit der privaten Farbe und erhalten die gemeinsame private Farbe, mit der sie die Teile des neuen Kunstwerks bemalen.")),(0,i.kt)("h2",{id:"eve"},"Eve"),(0,i.kt)("p",null,"Die neugierige Journalistin Eve m\xf6chte unbedingt wissen, was Alice und Bob aushecken, um noch vor der Vernissage einen exklusiven Zeitungsbericht zu ver\xf6ffentlichen. Daher versucht sie, an die gemeinsame private Farbe zu gelangen. Sie \xfcberwacht die Post und f\xfcllt sich von jeder transportierten Farbe ein wenig in eigene Beh\xe4lter ab."),(0,i.kt)("h2",{id:"ausprobieren"},"Ausprobieren"),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"geheime-farbe-herausfinden"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geheime Farbe herausfinden")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bestimmen Sie je eine Farbe f\xfcr Alice und Bob und schauen Sie sich die Ergebnisse an."),(0,i.kt)("p",{parentName:"div"},"Wieso erhalten Alice und Bob schlussendlich dieselbe Farbe?"),(0,i.kt)(s.Z,{type:"text",webKey:"11388720-93d0-403f-94f0-64b6f1ae4752",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"wieso-kennt-eve-die-geheime-farbe-nicht"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Wieso kennt Eve die geheime Farbe nicht?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich: wieso kann Eve aus den verschickten Farben die geheime Farbe nicht herstellen?"),(0,i.kt)(s.Z,{type:"text",webKey:"a627b60d-54bd-4a3e-a870-510d014364cf",mdxType:"Answer"}))),(0,i.kt)(l.Z,{mdxType:"ColorExchange"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-digitale-farben--echte-farben"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Digitale Farben \u2260 Echte Farben")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Im obigen Modell musste getrickst werden: In der digitalen Welt werden Farben durch die Erzeugung von Lichtwellen unterschiedlicher Wellenl\xe4nge erzeugt. Dabei wird bei der \xdcberlagerung aller Frequenzspektren weisses Licht erzeugt. Dies wird auch ",(0,i.kt)("strong",{parentName:"p"},"additives Farbmodell")," genannt. Im ",(0,i.kt)("strong",{parentName:"p"},"Gegensatz"),' dazu werden Farben in der realen Welt je nach Oberfl\xe4che nur gewisse Wellenl\xe4nfen reflektiert und die anderen werden von der Oberfl\xe4che "verschluckt". Werden mehrere Farben gemischt, f\xfchrt dies dazu, dass alle sichtbaren Wellenl\xe4ngen "verschluckt" werden und daher ein Braun/Schwarz entsteht. Dieses ist das ',(0,i.kt)("strong",{parentName:"p"},"subtraktive Farbmodell"),"."),(0,i.kt)(h,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"digitales (links) und reales (rechts) Farbmodell",src:n(707179).Z,width:"1081",height:"538"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"digitales (links) und reales (rechts) Farbmodell",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(g,{parentName:"figcaption",bib:{author:"networkcaptain",source:"https://imgur.com/t/yellow/H7uboyb",licence:"Imgur",licence_url:"https://imgur.com/tos",edited:!1},mdxType:"SourceRef"}))))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=242355"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}v.isMDXComponent=!0},707179:function(e,t,n){t.Z=n.p+"assets/images/color-models-7e7e0e964ddb2129e58215d8002957b0.png"}}]);