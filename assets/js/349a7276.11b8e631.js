"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[15702],{3239:function(I,e,g){g.d(e,{Z:function(){return n}});var i=g(67294),l="noLoginAlert_HSVn",t=g(39960),c=g(71217),a=g(21314),n=(0,c.Pi)((function(){return(0,a.oR)("msalStore").loggedIn?null:i.createElement("div",{className:l},i.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",i.createElement(t.Z,{to:"/login"},"Login"))}))},52084:function(I,e,g){g.d(e,{x:function(){return h},Z:function(){return k}});var i=g(67294),l=g(3435),t={answer:"answer_rKAQ",blue:"blue_V0jO",red:"red_ItqC",green:"green_mP_V",black:"black_n9n0",checkButton:"checkButton_t9Hr",correct:"correct_O0Yq",wrong:"wrong_iuvm",unchecked:"unchecked_Ffwg",edited:"edited_Q98g"},c=g(86010),a=g(71217),n=(0,l.Z)(/\x2D\x2D(\w+)$/,{klass:1}),C=function(I){var e=I.value,g=e,l=void 0;if(n.test(e)){var c=function(I){if(n.test(I))return I.match(n).groups.klass}(e);l=t[c],g=""+e.replace(n,"")}return i.createElement("option",{value:e,className:l},g)},d=g(92814),r=g(51436),A=g(68949),N=g(72389),o=g(21314),s=g(74322),M=(0,l.Z)(/\x2D\x2D(\w+)$/,{klass:1}),m=function(I){return t[function(I){if(M.test(I))return I.match(M).groups.klass}(I)]},D=(0,a.Pi)((function(I){var e,g,l,a=(0,N.Z)(),n=i.useState("unchecked"),M=n[0],D=n[1],u=(0,o.oR)("documentStore").find(I.webKey),Z=function(e){!I.isLegacy&&u.loaded&&(D("unchecked"),u.setData({value:e,type:"string"}))},y=function(e){if(I.checker)return D(I.checker(e)?"correct":"wrong");var g=I.sanitizer?I.sanitizer:function(I){return I};D(g(e)===g(I.solution)?"correct":"wrong")};return i.useEffect((function(){return(0,A.U5)((function(){return u.loaded}),(function(I){I&&y(u.value)}))}),[u]),i.useEffect((function(){u.loaded&&y(u.value)}),[u,a]),a?u.loaded?i.createElement("div",{className:t.answer},I.label&&i.createElement("label",{style:{width:I.labelWidth}},I.label),I.children&&i.createElement("label",null,I.children),I.select?i.createElement("select",{onChange:function(I){return Z(I.target.value)},style:{width:I.width},value:I.isLegacy?null==(e=u.legacyData)?void 0:e.value:u.value,className:m(u.value),disabled:!u.loaded||I.isLegacy},I.select.map((function(I,e){return i.createElement(C,{value:I,key:e})}))):i.createElement("input",{type:"text",style:{width:I.width},onChange:function(I){return Z(I.target.value)},value:I.isLegacy?null==(g=u.legacyData)?void 0:g.value:u.value,disabled:!u.loaded||u.readonly||I.disabled}),(I.solution||I.checker)&&i.createElement("button",{onClick:function(){return y(u.value)},className:(0,c.default)(t[M],t.checkButton)},i.createElement(d.G,{icon:(l=M,"correct"===l?r.f8k:"wrong"===l?r.nYk:r.sph)}))):i.createElement(s.Z,null):i.createElement("div",null,"SSR")})),u=(0,l.Z)(/\x2D\x2D(\w+)$/,{klass:1}),Z=function(I){return t[function(I){if(u.test(I))return I.match(u).groups.klass}(I)]},y=(0,a.Pi)((function(I){var e,g=(0,o.oR)("documentStore").find(I.webKey),l=function(e,i){if(void 0===i&&(i=0),!I.isLegacy&&g.loaded){var l=[].concat(g.data.value.slice(0,i),[e],g.data.value.slice(i+1));g.setData(Object.assign({},g.data,{value:l}))}};return g.loaded?i.createElement("div",{className:t.answer},I.label&&i.createElement("label",null,I.label),(I.isLegacy?(null==(e=g.legacyData)?void 0:e.value)||[]:g.data.value).map((function(e,t){return I.select?i.createElement("select",{key:t,onChange:function(I){return l(I.target.value,t)},value:e,className:Z(e),disabled:!g.loaded||I.isLegacy},I.select.map((function(I,e){return i.createElement(C,{value:I,key:e})}))):i.createElement("input",{key:t,type:"text",onChange:function(I){return l(I.target.value,t)},value:e,disabled:!g.loaded||g.readonly})}))):i.createElement(s.Z,null)})),j=g(83117),b=g(75552),z=(0,a.Pi)((function(I){var e=(0,o.oR)("documentStore").find(I.webKey);return e.loaded?i.createElement("div",null,I.label&&i.createElement("h6",null,I.label),i.createElement(b.Z,(0,j.Z)({model:e},I))):i.createElement(s.Z,null)})),w=g(3239),p=function(I,e){"code"!==e.type&&("use_legacy"===I?(e.setData(e.legacyData),e.saveService.saveNow().then((function(I){I.data&&"ok"===I.data.state&&(0,A.z)((function(){e.legacyData=void 0,e.legacyCleanup&&e.legacyCleanup()}))}))):(0,A.z)((function(){e.legacyData=void 0,e.legacyCleanup&&e.legacyCleanup()})))},x=(0,a.Pi)((function(I){var e=(0,o.oR)("documentStore").find(I.webKey);return e.legacyData?i.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",i.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",i.createElement("div",null,"text"===e.type&&i.createElement(z,{type:"text",webKey:e.webKey,isLegacy:!0}),"string"===e.type&&i.createElement(D,{type:"string",webKey:I.webKey,isLegacy:!0}),"array"===e.type&&i.createElement(y,{type:"array",webKey:I.webKey,size:e.size,isLegacy:!0})),i.createElement("div",null,i.createElement("button",{className:"button button--primary",onClick:function(){return p("use_legacy",e)}},"Ja"),i.createElement("button",{className:"button button--info",onClick:function(){return p("use_current",e)}},"Nein (verwerfen)"))):null})),H=(0,a.Pi)((function(I){return(0,o.oR)("documentStore").find(I.webKey).saveService.isOffline?i.createElement("div",null,i.createElement("span",{className:(0,c.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),T=g(46858),L=g(78982),G=g(97762),h=function(I){return I.replace(/\s+/g,"").toUpperCase()},O=function(I){if(!I.id)return function(){};var e=function(){try{return(0,T.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(I){return"answer"}}(),g=(0,L.rV)(I.id,e);return g&&g.value?function(){return{data:{value:g.value,type:I.type,size:"array"===I.type?I.size:void 0},cleanup:function(){return(0,L.cl)(I.id,e)}}}:function(){}},k=(0,a.Pi)((function(I){var e=(0,o.oR)("documentStore"),g=(0,o.oR)("msalStore"),l=e.find(I.webKey),t=(0,N.Z)();return(0,o.ky)((function(){return function(I){switch(I.type){case"string":return{value:I.default||"",type:"string"};case"text":return{value:I.default||G.renderToString(I.children),type:"text"};case"array":return{value:Array(I.size).fill(""),type:"array",size:I.size}}}(I)}),I.type,I.webKey,!0,O(I)),t?l?i.createElement("div",{"data--web-key":I.webKey},i.createElement(w.Z,null),g.loggedIn&&i.createElement(x,I),g.loggedIn&&i.createElement(H,{webKey:I.webKey}),"text"===I.type&&i.createElement(z,I),"string"===I.type&&i.createElement(D,I),"array"===I.type&&i.createElement(y,I)):i.createElement(s.Z,null):i.createElement("div",null,"SSR")}))},74322:function(I,e,g){g.d(e,{Z:function(){return d}});var i=g(67294),l=g(86010),t="loader_FEpR",c="badge_oWqf",a=g(71217),n=g(92814),C=g(51436),d=(0,a.Pi)((function(){return i.createElement("div",{className:(0,l.default)(t)},i.createElement(n.G,{icon:C.IJ7,spin:!0}),i.createElement("span",{className:(0,l.default)("badge",c)},"Laden..."))}))},75552:function(I,e,g){g.d(e,{Z:function(){return o}});var i=g(67294),l="quillEditor_NxYB",t="quillAnswer_J46I",c="monospace_usc_",a="disableToolbar_bRdP",n=g(86010),C=g(71217),d=g(74322),r=void 0,A=[].concat([["bold","italic","underline"]],[[{header:[1,2,3,!1]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["image"]]),N=function(I){var e=[];if(I.bold||I.italic||I.underline){var g=[];I.bold&&g.push("bold"),I.italic&&g.push("italic"),I.underline&&g.push("underline"),e.push(g)}if(I.h1||I.h2||I.h3){var i=[];I.h1&&i.push(1),I.h2&&i.push(2),I.h3&&i.push(3),i.push(!1),e.push(i)}if(I.color||I.background){var l=[];I.color&&l.push({color:[]}),I.background&&l.push({background:[]}),e.push(l)}if(I.ul||I.ol){var t=[];I.ol&&t.push({list:"ordered"}),I.ul&&t.push({list:"bullet"}),e.push(t)}if(I.formula||I.image){var c=[];I.formula&&c.push("formula"),I.image&&c.push("image"),e.push(c)}return I.code&&e.push(["code-block"]),e},o=(0,C.Pi)((function(I){var e=i.useState(!1),C=e[0],o=e[1],s=i.useState(!1),M=s[0],m=s[1],D=i.useRef(null),u=I.model,Z=function(I){I.preventDefault()};i.useEffect((function(){var e=!0;return function(I,e){if(void 0===e&&(e={}),r)return I();var i=[Promise.all([g.e(97762),g.e(18446),g.e(80324),g.e(76095),g.e(71167)]).then(g.t.bind(g,44290,23)),g.e(76095).then(g.t.bind(g,76095,23)),g.e(17891).then(g.t.bind(g,17891,23)),Promise.all([g.e(40532),g.e(11940)]).then(g.bind(g,11940))],l={"react-quill":0,quill:1,"react-image-compress":2};e.formula&&!window.katex&&(l.katex=i.length,i.push(g.e(41008).then(g.bind(g,41008)),Promise.all([g.e(40532),g.e(50037)]).then(g.bind(g,50037)))),Promise.all(i).then((function(e){r=e[l["react-quill"]].default;var g=e[l.quill].default,i=e[l["react-image-compress"]].default;if("katex"in l){var t=e[l.katex].default;window.katex=t}g.register("modules/imageCompress",i),I()}))}((function(){e&&(m(!0),D&&D.current&&D.current.editor.getModule("toolbar").container.addEventListener("mousedown",Z))}),Object.assign({},I.toolbar||{},I.toolbarAdd||{})),function(){e=!1,D&&D.current&&D.current.editor.getModule("toolbar").container.removeEventListener("mousedown",Z)}}),[I]);return r&&M&&u.loaded?i.createElement("div",{onFocus:function(){return!C&&o(!0)},className:(0,n.default)(l)},i.createElement(r,{ref:D,theme:"snow",readOnly:I.readonly||u.readonly,className:(0,n.default)(t,I.monospace&&c,C?void 0:a),value:u.text||"",onChange:function(e,g,i,l){var t,c;t=e,void 0===c&&(c=0),!I.readonly&&u.canUpdate&&M&&u.setText(t)},modules:{toolbar:I.toolbar?N(I.toolbar):[].concat(A,N(I.toolbarAdd||{})),imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:I.placeholder||"\u270d\ufe0f Antwort..."})):i.createElement(d.Z,null)}))},46858:function(I,e,g){g.d(e,{Vx:function(){return l},Vj:function(){return i},ly:function(){return t}});var i=function(I){if(I)return I.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},l=function(I){if(I)return I.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},t=function(I){return I.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(I,e,g){g.d(e,{rV:function(){return t},cl:function(){return c}});var i=864e5,l=2592e6,t=function(I,e,g){try{if(function(){try{var I=Date.now();I-JSON.parse(localStorage.getItem("last_cleanup")||""+I)>i&&a()}catch(e){return}}(),e){var l=localStorage.getItem(e);if(l){var t=JSON.parse(l);if("object"==typeof t){var c=t[I];return void 0===c?g:c}return g}}var n=localStorage.getItem(I);return n?JSON.parse(n):g}catch(C){return g}},c=function(I,e){try{if(e){var g=t(e,void 0,{expiry:Date.now()+l});return"object"!=typeof g&&(g={expiry:0}),I in g&&delete g[I],void localStorage.setItem(e,JSON.stringify(g))}localStorage.removeItem(I)}catch(i){return}},a=function(){try{var I=Date.now();Object.keys(localStorage).forEach((function(e){var g=t(e,void 0,{expiry:I+l});g.expiry&&g.expiry>I&&localStorage.removeItem(e)})),localStorage.setItem("last_cleanup",""+I)}catch(e){return}}},89200:function(I,e,g){g.r(e),g.d(e,{frontMatter:function(){return C},contentTitle:function(){return d},metadata:function(){return r},assets:function(){return A},toc:function(){return N},default:function(){return s}});var i=g(83117),l=g(80102),t=(g(67294),g(3905)),c=g(84384),a=g(52084),n=["components"],C={title:"4. Von-Neumann-Zyklus"},d="4. Von-Neumann-Zyklus",r={unversionedId:"Computer/Rechnerarchitektur/cycle",id:"version-24i/Computer/Rechnerarchitektur/cycle",title:"4. Von-Neumann-Zyklus",description:"Der Prozessor f\xfchrt immer wieder den gleichen zyklischen Ablauf aus. Dieser Ablauf wird auch Von-Neumann-Zyklus genannt und besteht aus folgenden Schritten:",source:"@site/versioned_docs/version-24i/07-Computer/07-Rechnerarchitektur/04-cycle.md",sourceDirName:"07-Computer/07-Rechnerarchitektur",slug:"/Computer/Rechnerarchitektur/cycle",permalink:"/24i/Computer/Rechnerarchitektur/cycle",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/07-Computer/07-Rechnerarchitektur/04-cycle.md",tags:[],version:"24i",sidebarPosition:4,frontMatter:{title:"4. Von-Neumann-Zyklus"},sidebar:"version-24i/sidebar",previous:{title:"3. Prozessor",permalink:"/24i/Computer/Rechnerarchitektur/cpu"},next:{title:"5. Befehlssatz",permalink:"/24i/Computer/Rechnerarchitektur/insturction-set"}},A={},N=[{value:"1. Befehl laden",id:"1-befehl-laden",level:2},{value:"2. Befehl decodieren",id:"2-befehl-decodieren",level:2},{value:"3. Befehl ausf\xfchren",id:"3-befehl-ausf\xfchren",level:2}],o={toc:N};function s(I){var e=I.components,C=(0,l.Z)(I,n);return(0,t.kt)("wrapper",(0,i.Z)({},o,C,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"4-von-neumann-zyklus"},"4. Von-Neumann-Zyklus"),(0,t.kt)("p",null,"Der Prozessor f\xfchrt immer wieder den gleichen zyklischen Ablauf aus. Dieser Ablauf wird auch ",(0,t.kt)("strong",{parentName:"p"},"Von-Neumann-Zyklus")," genannt und besteht aus folgenden Schritten:"),(0,t.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,t.kt)(c.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:g(29174).Z,mdxType:"Image"})),(0,t.kt)("h2",{id:"1-befehl-laden"},"1. Befehl laden"),(0,t.kt)("p",null,"Der n\xe4chste Befehl wird aus dem Speicher in das Befehlsregister geladen. Dazu wird die Adresse des n\xe4chsten Befehls vom Programmz\xe4hler an das Speicherwerk \xfcbertragen. Der Befehl wird aus dem Speicher \xfcber den Datenbus in das Befehlsregister \xfcbertragen. Anschliessend wird der Programmz\xe4hler um eins erh\xf6ht."),(0,t.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,t.kt)(c.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:g(42349).Z,mdxType:"Image"})),(0,t.kt)("h2",{id:"2-befehl-decodieren"},"2. Befehl decodieren"),(0,t.kt)("p",null,"Nun wird der Befehl, welcher in das Befehlsregister geladen worden ist, decodiert. Das Steuerwerk \xfcbersetzt also einen Code zu einer Anweisung und konfiguriert dann das Rechenwerk so, dass die gew\xfcnschte Operation auch ausgef\xfchrt wird."),(0,t.kt)("p",null,"Beispiel Addition:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Decodieren"),": Das Rechenwerk sieht den Code ",(0,t.kt)("inlineCode",{parentName:"li"},"001000")," und weiss (decodiert), dass dies der Befehl f\xfcr die Addition ist."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Konfiguration"),": Das Rechenwerk konfiguriert nun das Rechenwerk so, dass es zwei Zahlen miteinander Addiert.")),(0,t.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,t.kt)(c.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:g(7780).Z,mdxType:"Image"})),(0,t.kt)("h2",{id:"3-befehl-ausf\xfchren"},"3. Befehl ausf\xfchren"),(0,t.kt)("p",null,"Schliesslich wird der eigentliche Befehl ausgef\xfchrt, indem das Dekodierwerk die Steuersignale an die Komponenten ausl\xf6st. Im n\xe4chsten Abschnitt werden einige typische Befehle erl\xe4utert."),(0,t.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div",id:"take-home-message-aus-cpu-rollenspiel"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Take-Home Message aus CPU-Rollenspiel")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("ul",{parentName:"div"},(0,t.kt)("li",{parentName:"ul"},"Wie schnell war ein schneller/langsamer/durchschnittlicher Zyklus in der Menschen-CPU?"),(0,t.kt)("li",{parentName:"ul"},"Wie viele Zyklen waren f\xfcr die Ausf\xfchrung eines simplen Programms n\xf6tig?")),(0,t.kt)(a.Z,{type:"text",webKey:"56120b26-1904-4dd4-ae34-d5457d98b401",mdxType:"Answer"}))))}s.isMDXComponent=!0},29174:function(I,e){e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjYwOHB4IiBoZWlnaHQ9IjI1NnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNMTc5LjU4OSwzNC45MDVMMTkyLDQwTDE4MC40NzcsNDYuODcyQzE4My4yNDcsNDMuNjU4IDE4Mi44MDMsMzcuNjc1IDE3OS41ODksMzQuOTA1WiIvPgogICAgPHBhdGggZD0iTTEyOCwxMDRMMTI4LDEwMy45OThDMTI4LDcxLjkwNiAxNTEuNjIyLDQ1LjMzMSAxODIuNDI2LDQwLjcxMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgIDxnIGlkPSJCZWZlaGwtYXVzZsO8aHJlbiIgc2VyaWY6aWQ9IkJlZmVobCBhdXNmw7xocmVuIj4KICAgICAgICA8cGF0aCBkPSJNMjQwLDExNkMyNDAsMTA5LjM3NyAyMzQuNjIzLDEwNCAyMjgsMTA0TDI4LDEwNEMyMS4zNzcsMTA0IDE2LDEwOS4zNzcgMTYsMTE2TDE2LDE0MEMxNiwxNDYuNjIzIDIxLjM3NywxNTIgMjgsMTUyTDIyOCwxNTJDMjM0LjYyMywxNTIgMjQwLDE0Ni42MjMgMjQwLDE0MEwyNDAsMTE2WiIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI1Mi4zMDdweCIgeT0iMTM1LjA3NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5CZWZlaGwgYXVzZsO8aHJlbjwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0xMjIuOTA1LDE2NC40MTFMMTI4LDE1MkwxMzQuODcyLDE2My41MjNDMTMxLjY1OCwxNjAuNzUzIDEyNS42NzUsMTYxLjE5NyAxMjIuOTA1LDE2NC40MTFaIi8+CiAgICA8cGF0aCBkPSJNNDgwLDE1Mkw0ODAsMTUyLjAwMkM0ODAsMTg3LjM0NyA0NTEuMzQ3LDIxNiA0MTYuMDAyLDIxNkMzNTIuNDQ2LDIxNiAyNTUuNTU0LDIxNiAxOTEuOTk4LDIxNkMxNTkuOTA2LDIxNiAxMzMuMzMxLDE5Mi4zNzggMTI4LjcxMSwxNjEuNTc0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPGcgaWQ9IkJlZmVobC1kZWNvZGllcmVuIiBzZXJpZjppZD0iQmVmZWhsIGRlY29kaWVyZW4iPgogICAgICAgIDxwYXRoIGQ9Ik01OTIsMTE2QzU5MiwxMDkuMzc3IDU4Ni42MjMsMTA0IDU4MCwxMDRMMzgwLDEwNEMzNzMuMzc3LDEwNCAzNjgsMTA5LjM3NyAzNjgsMTE2TDM2OCwxNDBDMzY4LDE0Ni42MjMgMzczLjM3NywxNTIgMzgwLDE1Mkw1ODAsMTUyQzU4Ni42MjMsMTUyIDU5MiwxNDYuNjIzIDU5MiwxNDBMNTkyLDExNloiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMzk5LjMwMnB4IiB5PSIxMzUuMDg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkJlZmVobCBkZWNvZGllcmVuPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTQ4NS4wOTQsOTEuNTg4TDQ4MCwxMDRMNDczLjEyNyw5Mi40NzhDNDc2LjM0MSw5NS4yNDcgNDgyLjMyNSw5NC44MDIgNDg1LjA5NCw5MS41ODhaIi8+CiAgICA8cGF0aCBkPSJNNDE2LDQwTDQxNiw0MEM0NDguMDkzLDQwIDQ3NC42NjgsNjMuNjIxIDQ3OS4yODksOTQuNDI2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPGcgaWQ9IkJlZmVobC1sYWRlbiIgc2VyaWY6aWQ9IkJlZmVobCBsYWRlbiI+CiAgICAgICAgPHBhdGggZD0iTTQxNiwyOEM0MTYsMjEuMzc3IDQxMC42MjMsMTYgNDA0LDE2TDIwNCwxNkMxOTcuMzc3LDE2IDE5MiwyMS4zNzcgMTkyLDI4TDE5Miw1MkMxOTIsNTguNjIzIDE5Ny4zNzcsNjQgMjA0LDY0TDQwNCw2NEM0MTAuNjIzLDY0IDQxNiw1OC42MjMgNDE2LDUyTDQxNiwyOFoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMjQ4LjMxNnB4IiB5PSI0Ny4wOXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5CZWZlaGwgbGFkZW48L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo="},7780:function(I,e){e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9Ijk0NHB4IiBoZWlnaHQ9IjQxNnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQXVzZ2FiZSI+CiAgICAgICAgPHJlY3QgeD0iODAwIiB5PSIyMDgiIHdpZHRoPSIxMjgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iODI0LjgxMXB4IiB5PSIyMzYuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkF1c2dhYmU8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iU3BlaWNoZXJ3ZXJrIj4KICAgICAgICA8cmVjdCB4PSIxNDQiIHk9IjMwNCIgd2lkdGg9IjY1NSIgaGVpZ2h0PSI5NiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MTAuNDc1cHgiIHk9IjM4OC43MDdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3BlaWNoZXJ3ZXJrPC90ZXh0PgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLW4iIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIG4iPgogICAgICAgICAgICA8cmVjdCB4PSI2NTYiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjY2NS4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIG48L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxjaXJjbGUgY3g9IjU5MiIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwOCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYyNCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjY0MCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTMiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDMiPgogICAgICAgICAgICA8cmVjdCB4PSI0NDgiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjQ1Ny4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDM8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTIiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDIiPgogICAgICAgICAgICA8cmVjdCB4PSIzMDQiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjMxMy4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDI8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTEiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDEiPgogICAgICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE3MC41MzFweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDE8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9IlByb3plc3NvciI+CiAgICAgICAgPHJlY3QgeD0iMTQ0IiB5PSIxNiIgd2lkdGg9IjY1NiIgaGVpZ2h0PSIxNzYiIHN0eWxlPSJmaWxsOnJnYigyMDAsMjMwLDIwMSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDI2LjI0OHB4IiB5PSIzNi4zNDZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UHJvemVzc29yPC90ZXh0PgogICAgICAgIDxnIGlkPSJSZWNoZW53ZXJrIj4KICAgICAgICAgICAgPHJlY3QgeD0iNDgwIiB5PSI0OC41IiB3aWR0aD0iMzA0IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iNTkyLjkxNnB4IiB5PSI2OC44OTVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UmVjaGVud2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IlJlZ2lzdGVyLTIiIHNlcmlmOmlkPSJSZWdpc3RlciAyIj4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjY0MCIgeT0iMTI4LjUiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNjY3LjE2OHB4IiB5PSIxNDguNDY5cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTZweDsiPlJlZ2lzdGVyIDI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgaWQ9IlJlZ2lzdGVyLTEiIHNlcmlmOmlkPSJSZWdpc3RlciAxIj4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ5NiIgeT0iMTI4LjUiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNTI0LjQ1M3B4IiB5PSIxNDguNDY5cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTZweDsiPlJlZ2lzdGVyIDE8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IlN0ZXVlcndlcmsiPgogICAgICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjQ4LjUiIHdpZHRoPSIzMDQiIGhlaWdodD0iMTI4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8dGV4dCB4PSIyNjAuOThweCIgeT0iNjkuMDhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3RldWVyd2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IkJlZmVobHNyZWdpc3RlciI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSIzMjAiIHk9IjEyOC41IiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjMyIiBzdHlsZT0iZmlsbDp3aGl0ZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjMzMC4xNDVweCIgeT0iMTQ4LjU1MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5CZWZlaGxzcmVnaXN0ZXI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgeD0iMzIyLjEwMXB4IiB5PSIxMjEuODk1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkRla29kaWVyd2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IlByb2dyYW1tesOkaGxlciI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSIxNzYiIHk9IjEyOC41IiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjMyIiBzdHlsZT0iZmlsbDp3aGl0ZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjE4MC4yODFweCIgeT0iMTQ4LjQ4OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5Qcm9ncmFtbXrDpGhsZXI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgeD0iMTk5LjI0M3B4IiB5PSIxMjEuODk1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlrDpGhsd2VyazwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iU3lzdGVtYnVzIj4KICAgICAgICA8cmVjdCB4PSIxOTIiIHk9IjIwOCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSI0OCIgc3R5bGU9ImZpbGw6cmdiKDE3NiwxOTAsMTk3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MjMuMDExcHgiIHk9IjIzNi45MzdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+QnVzc3lzdGVtPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IkVpbmdhYmUiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIyMDgiIHdpZHRoPSIxMjgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDIuODgxcHgiIHk9IjIzNi45ODVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+RWluZ2FiZTwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0xODAsMjI2TDE5MiwyMzJMMTgwLDIzOEMxODMsMjM1IDE4MywyMjkgMTgwLDIyNloiLz4KICAgIDxwYXRoIGQ9Ik0xNDQsMjMyTDE4Mi40LDIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTIzNCwxOTYuNUwyNDAsMjA4LjVMMjQ2LDE5Ni41QzI0MywxOTkuNSAyMzcsMTk5LjUgMjM0LDE5Ni41WiIvPgogICAgPHBhdGggZD0iTTIzNCwxNzIuNUwyNDAsMTYwLjVMMjQ2LDE3Mi41QzI0MywxNjkuNSAyMzcsMTY5LjUgMjM0LDE3Mi41WiIvPgogICAgPHBhdGggZD0iTTI0MCwxOTguOUwyNDAsMTcwLjEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik03ODgsMjI2TDgwMCwyMzJMNzg4LDIzOEM3OTEsMjM1IDc5MSwyMjkgNzg4LDIyNloiLz4KICAgIDxwYXRoIGQ9Ik03NTIsMjMyTDc5MC40LDIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTU2NiwxNzIuNUw1NjAsMTYwLjVMNTU0LDE3Mi41QzU1NywxNjkuNSA1NjMsMTY5LjUgNTY2LDE3Mi41WiIvPgogICAgPHBhdGggZD0iTTU2NiwxOTYuNUw1NjAsMjA4LjVMNTU0LDE5Ni41QzU1NywxOTkuNSA1NjMsMTk5LjUgNTY2LDE5Ni41WiIvPgogICAgPHBhdGggZD0iTTU2MCwxNzAuMUw1NjAsMTk4LjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik03MTAsMTcyLjVMNzA0LDE2MC41TDY5OCwxNzIuNUM3MDEsMTY5LjUgNzA3LDE2OS41IDcxMCwxNzIuNVoiLz4KICAgIDxwYXRoIGQ9Ik03MTAsMTk2LjVMNzA0LDIwOC41TDY5OCwxOTYuNUM3MDEsMTk5LjUgNzA3LDE5OS41IDcxMCwxOTYuNVoiLz4KICAgIDxwYXRoIGQ9Ik03MDQsMTcwLjFMNzA0LDE5OC45IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICA8cGF0aCBkPSJNMzkwLDE3Mi41TDM4NCwxNjAuNUwzNzgsMTcyLjVDMzgxLDE2OS41IDM4NywxNjkuNSAzOTAsMTcyLjVaIi8+CiAgICA8cGF0aCBkPSJNMzkwLDE5Ni41TDM4NCwyMDguNUwzNzgsMTk2LjVDMzgxLDE5OS41IDM4NywxOTkuNSAzOTAsMTk2LjVaIi8+CiAgICA8cGF0aCBkPSJNMzg0LDE3MC4xTDM4NCwxOTguOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTQ3Ny41LDI2OEw0NzEuNSwyNTZMNDY1LjUsMjY4QzQ2OC41LDI2NSA0NzQuNSwyNjUgNDc3LjUsMjY4WiIvPgogICAgPHBhdGggZD0iTTQ3Ny41LDI5Mkw0NzEuNSwzMDRMNDY1LjUsMjkyQzQ2OC41LDI5NSA0NzQuNSwyOTUgNDc3LjUsMjkyWiIvPgogICAgPHBhdGggZD0iTTQ3MS41LDI2NS42TDQ3MS41LDI5NC40IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICA8ZyBpZD0iRGVjb2RlIj4KICAgICAgICA8cmVjdCB4PSIzMjAiIHk9IjEyOCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDIxMywwLDApO3N0cm9rZS13aWR0aDo2cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},42349:function(I,e){e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9Ijk0NHB4IiBoZWlnaHQ9IjQxNnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQXVzZ2FiZSI+CiAgICAgICAgPHJlY3QgeD0iODAwIiB5PSIyMDgiIHdpZHRoPSIxMjgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iODI0LjgxMXB4IiB5PSIyMzYuOTg1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkF1c2dhYmU8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iU3BlaWNoZXJ3ZXJrIj4KICAgICAgICA8cmVjdCB4PSIxNDQiIHk9IjMwNCIgd2lkdGg9IjY1NSIgaGVpZ2h0PSI5NiIgc3R5bGU9ImZpbGw6cmdiKDE0NCwyMDIsMjQ5KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MTAuNDc1cHgiIHk9IjM4OC43MDdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3BlaWNoZXJ3ZXJrPC90ZXh0PgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLW4iIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIG4iPgogICAgICAgICAgICA8cmVjdCB4PSI2NTYiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjY2NS4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIG48L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxjaXJjbGUgY3g9IjU5MiIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYwOCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjYyNCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjY0MCIgY3k9IjMzNiIgcj0iNCIvPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTMiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDMiPgogICAgICAgICAgICA8cmVjdCB4PSI0NDgiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjQ1Ny4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDM8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTIiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDIiPgogICAgICAgICAgICA8cmVjdCB4PSIzMDQiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjMxMy4yNDZweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDI8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJTcGVpY2hlcnplbGxlLTEiIHNlcmlmOmlkPSJTcGVpY2hlcnplbGxlIDEiPgogICAgICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6d2hpdGU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE3MC41MzFweCIgeT0iMzQwLjIxNXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5TcGVpY2hlcnplbGxlIDE8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9IlByb3plc3NvciI+CiAgICAgICAgPHJlY3QgeD0iMTQ0IiB5PSIxNiIgd2lkdGg9IjY1NiIgaGVpZ2h0PSIxNzYiIHN0eWxlPSJmaWxsOnJnYigyMDAsMjMwLDIwMSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDI2LjI0OHB4IiB5PSIzNi4zNDZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UHJvemVzc29yPC90ZXh0PgogICAgICAgIDxnIGlkPSJSZWNoZW53ZXJrIj4KICAgICAgICAgICAgPHJlY3QgeD0iNDgwIiB5PSI0OC41IiB3aWR0aD0iMzA0IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImZpbGw6cmdiKDE2NSwyMTQsMTY3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iNTkyLjkxNnB4IiB5PSI2OC44OTVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+UmVjaGVud2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IlJlZ2lzdGVyLTIiIHNlcmlmOmlkPSJSZWdpc3RlciAyIj4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjY0MCIgeT0iMTI4LjUiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNjY3LjE2OHB4IiB5PSIxNDguNDY5cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTZweDsiPlJlZ2lzdGVyIDI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgaWQ9IlJlZ2lzdGVyLTEiIHNlcmlmOmlkPSJSZWdpc3RlciAxIj4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ5NiIgeT0iMTI4LjUiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNTI0LjQ1M3B4IiB5PSIxNDguNDY5cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTZweDsiPlJlZ2lzdGVyIDE8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IlN0ZXVlcndlcmsiPgogICAgICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjQ4LjUiIHdpZHRoPSIzMDQiIGhlaWdodD0iMTI4IiBzdHlsZT0iZmlsbDpyZ2IoMTY1LDIxNCwxNjcpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8dGV4dCB4PSIyNjAuOThweCIgeT0iNjkuMDhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+U3RldWVyd2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IkJlZmVobHNyZWdpc3RlciI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSIzMjAiIHk9IjEyOC41IiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjMyIiBzdHlsZT0iZmlsbDp3aGl0ZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjMzMC4xNDVweCIgeT0iMTQ4LjU1MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5CZWZlaGxzcmVnaXN0ZXI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgeD0iMzIyLjEwMXB4IiB5PSIxMjEuODk1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPkRla29kaWVyd2VyazwvdGV4dD4KICAgICAgICAgICAgPGcgaWQ9IlByb2dyYW1tesOkaGxlciI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSIxNzYiIHk9IjEyOC41IiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjMyIiBzdHlsZT0iZmlsbDp3aGl0ZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjE4MC4yODFweCIgeT0iMTQ4LjQ4OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjE2cHg7Ij5Qcm9ncmFtbXrDpGhsZXI8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHRleHQgeD0iMTk5LjI0M3B4IiB5PSIxMjEuODk1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPlrDpGhsd2VyazwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iU3lzdGVtYnVzIj4KICAgICAgICA8cmVjdCB4PSIxOTIiIHk9IjIwOCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSI0OCIgc3R5bGU9ImZpbGw6cmdiKDE3NiwxOTAsMTk3KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MjMuMDExcHgiIHk9IjIzNi45MzdweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+QnVzc3lzdGVtPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IkVpbmdhYmUiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIyMDgiIHdpZHRoPSIxMjgiIGhlaWdodD0iNDgiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDIuODgxcHgiIHk9IjIzNi45ODVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+RWluZ2FiZTwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0xODAsMjI2TDE5MiwyMzJMMTgwLDIzOEMxODMsMjM1IDE4MywyMjkgMTgwLDIyNloiLz4KICAgIDxwYXRoIGQ9Ik0xNDQsMjMyTDE4Mi40LDIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTIzNCwxOTYuNUwyNDAsMjA4LjVMMjQ2LDE5Ni41QzI0MywxOTkuNSAyMzcsMTk5LjUgMjM0LDE5Ni41WiIvPgogICAgPHBhdGggZD0iTTIzNCwxNzIuNUwyNDAsMTYwLjVMMjQ2LDE3Mi41QzI0MywxNjkuNSAyMzcsMTY5LjUgMjM0LDE3Mi41WiIvPgogICAgPHBhdGggZD0iTTI0MCwxOTguOUwyNDAsMTcwLjEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik03ODgsMjI2TDgwMCwyMzJMNzg4LDIzOEM3OTEsMjM1IDc5MSwyMjkgNzg4LDIyNloiLz4KICAgIDxwYXRoIGQ9Ik03NTIsMjMyTDc5MC40LDIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTU2NiwxNzIuNUw1NjAsMTYwLjVMNTU0LDE3Mi41QzU1NywxNjkuNSA1NjMsMTY5LjUgNTY2LDE3Mi41WiIvPgogICAgPHBhdGggZD0iTTU2NiwxOTYuNUw1NjAsMjA4LjVMNTU0LDE5Ni41QzU1NywxOTkuNSA1NjMsMTk5LjUgNTY2LDE5Ni41WiIvPgogICAgPHBhdGggZD0iTTU2MCwxNzAuMUw1NjAsMTk4LjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik03MTAsMTcyLjVMNzA0LDE2MC41TDY5OCwxNzIuNUM3MDEsMTY5LjUgNzA3LDE2OS41IDcxMCwxNzIuNVoiLz4KICAgIDxwYXRoIGQ9Ik03MTAsMTk2LjVMNzA0LDIwOC41TDY5OCwxOTYuNUM3MDEsMTk5LjUgNzA3LDE5OS41IDcxMCwxOTYuNVoiLz4KICAgIDxwYXRoIGQ9Ik03MDQsMTcwLjFMNzA0LDE5OC45IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICA8cGF0aCBkPSJNMzkwLDE3Mi41TDM4NCwxNjAuNUwzNzgsMTcyLjVDMzgxLDE2OS41IDM4NywxNjkuNSAzOTAsMTcyLjVaIi8+CiAgICA8cGF0aCBkPSJNMzkwLDE5Ni41TDM4NCwyMDguNUwzNzgsMTk2LjVDMzgxLDE5OS41IDM4NywxOTkuNSAzOTAsMTk2LjVaIi8+CiAgICA8cGF0aCBkPSJNMzg0LDE3MC4xTDM4NCwxOTguOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgPHBhdGggZD0iTTQ3Ny41LDI2OEw0NzEuNSwyNTZMNDY1LjUsMjY4QzQ2OC41LDI2NSA0NzQuNSwyNjUgNDc3LjUsMjY4WiIvPgogICAgPHBhdGggZD0iTTQ3Ny41LDI5Mkw0NzEuNSwzMDRMNDY1LjUsMjkyQzQ2OC41LDI5NSA0NzQuNSwyOTUgNDc3LjUsMjkyWiIvPgogICAgPHBhdGggZD0iTTQ3MS41LDI2NS42TDQ3MS41LDI5NC40IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICA8ZyBpZD0iRmV0Y2giPgogICAgICAgIDxwYXRoIGQ9Ik0yMzcuNSwyNzYuNzVMMjI0LDMwMy43NUwyMTAuNSwyNzYuNzVDMjE3LjI1LDI4My41IDIzMC43NSwyODMuNSAyMzcuNSwyNzYuNzVaIiBzdHlsZT0iZmlsbDpyZ2IoMjEzLDAsMCk7Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyNCwxNjAuMjVMMjI0LDI4Mi4xNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDIxMywwLDApO3N0cm9rZS13aWR0aDo2cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjMyMCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDIxMywwLDApO3N0cm9rZS13aWR0aDo2cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgICAgICA8cGF0aCBkPSJNMzcwLjUsMTg3LjI1TDM4NCwxNjAuMjVMMzk3LjUsMTg3LjI1QzM5MC43NSwxODAuNSAzNzcuMjUsMTgwLjUgMzcwLjUsMTg3LjI1WiIgc3R5bGU9ImZpbGw6cmdiKDIxMywwLDApOyIvPgogICAgICAgIDxwYXRoIGQ9Ik0yNzIsMzIwTDI3MiwyMzJMMzg0LDIzMkwzODQsMTgxLjg1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjEzLDAsMCk7c3Ryb2tlLXdpZHRoOjZweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDxnPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIxNTQiIGN5PSIxNDQuNSIgcj0iMjEiIHN0eWxlPSJmaWxsOndoaXRlO3N0cm9rZTpyZ2IoMjEzLDAsMCk7c3Ryb2tlLXdpZHRoOjZweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgICAgICA8dGV4dCB4PSIxNDMuODFweCIgeT0iMTUxLjY4OHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsLUJvbGRNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToyMHB4O2ZpbGw6cmdiKDIxMywwLDApOyI+KzE8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"}}]);