"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[18618],{90203:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);const r="noLoginAlert_HRfh";var o=a(39960),i=a(46670),l=a(21314);const s=(0,i.Pi)((()=>(0,l.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010);const o="loader_FEpR",i="badge_oWqf",l="overlay_cqDg";var s=a(99603),c=a(59417);const d=e=>n.createElement("div",{className:(0,r.default)(o,e.overlay&&l)},n.createElement(s.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",i)},e.caption||"Laden..."))},99882:(e,t,a)=>{a.d(t,{Z:()=>oe});var n=a(87462),r=a(67294),o=a(3024),i=a(95665),l=a.n(i),s=a(10412),c=a(46858);const d=function(e,t){void 0===t&&(t=0);let a=3735928559^t,n=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),a=Math.imul(a^r,2654435761),n=Math.imul(n^r,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),(n>>>0).toString(16).padStart(8,"0")+(a>>>0).toString(16).padStart(8,"0")};var m=a(6645),p=a(86010),u=a(46670),g=a(21314),h=a(72389);const b=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),y=(0,u.Pi)((e=>{const[t,n]=r.useState();return r.useEffect((()=>{Promise.all([a.e(16606),a.e(91086)]).then(a.bind(a,91086)).then((e=>{n(e)}))}),[]),(0,h.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(b,e)}));var f=a(52616);const v="brythonGraphicsResult_Zcg1",w="brythonGraphicsResultHead_Te8f",E="spacer_VytD",N="slimStrippedButton__QpN";var C=a(61212);const _=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),S=(e,t)=>{"root"===e.type?e.children.forEach((e=>{S(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},k=e=>{const t=[],{properties:a,tagName:n,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...k(e))})),n){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${_(a)}>`),o.forEach((e=>{t.push(...k(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to}})),t.push(`<rect ${_(a)}></rect>`);break;case"g":if(0===(o||[]).length)return t;t.push(`<g ${_(a)}>`),o.forEach((e=>{t.push(...k(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;a[t.attributeName]=t.to}})),t.push(`<line ${_(a)}></line>`);break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),a.style&&/\s*display:\s*none;\s*/.test(a.style)&&(a.style=a.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${_(a)}></circle>`);break;case"text":var i="";o.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to}})),t.push(`<text ${_(a)}>${i}</text>`);break;case"polygon":var l="0,0,0",s="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),a[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(l=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push(`<polygon ${_(a)} transform="translate(${s}) rotate(${l})"></polygon>`)}return t},x=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},A=(e,t,a,n)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:`${r.x-5},${r.y-5},${r.width+10},${r.height+10}`,width:r.width+10,height:r.height+10};var i=e.outerHTML,l='<?xml version="1.0" standalone="no"?>';const s=document.createElement("div");let c=0;if(n||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),a=t.querySelectorAll("animate"),n=Array.from(a).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(n.length>0){const e=n[n.length-1],a=t.getElementById("animation_frame0");if(a){const t=document.createElement("rect");t.innerHTML=`  <rect><animate id="looper_animation" begin="0;animation_frame${e}.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>`,a.parentElement.insertBefore(t,a),a.setAttribute("begin","looper_animation.end"),a.setAttribute("width",`${o.width}`)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",`${o.width}`),e.setAttribute("to",`${o.width}`)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",`${o.height}`),t.setAttribute("width",`${o.width}`),s.innerHTML=`${l}\r\n${t.outerHTML}`,c=Array.from(t.querySelectorAll("animate")).map(x).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const a=(0,C.Q)(e);return t&&S(a,t),k(a).join("\n")})(`${l}${i}`,o);s.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),n=document.createElement("raw");n.innerHTML=a||"",t.appendChild(n),e.appendChild(t)}var d=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=c>0?`${t}__${(Math.round(10*c)/10).toString().replace(".","_")}s.svg`:`${t}.svg`,document.body.appendChild(p),p.click(),document.body.removeChild(p)};var Z=a(99603),R=a(59417),B=a(61193),K=a.n(B);const T=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},L=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),a=(0,g.oR)("documentStore");return r.createElement(K(),{onStop:T,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:v},r.createElement("div",{className:w},r.createElement("span",null,"Output"),r.createElement("span",{className:E}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{a.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(Z.G,{icon:R.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),G=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(L,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&A(e,`${t.codeId}`,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(Z.G,{icon:R.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&A(e,`${t.codeId}`,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(Z.G,{icon:R.q7m}))))})})),$=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const a=[];let n=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&a.push(`${n}-${n+t}`),n+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:`{${a.join(",")}}`},o.join("")))}));var P=a(93024),D=a(68949);const I=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,p.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(Z.G,{icon:t.executing?P.Bmx:R.zc,spin:t.executing}))})),H=(0,u.Pi)((e=>{let{slim:t,title:a,resettable:n,webKey:o,lang:i,noCompare:l,download:s}=e;const[c,d]=r.useState(!1),u=(0,g.oR)("documentStore").find(o);if(!u)return null;return r.useEffect((()=>{let e;const t=(0,D.U5)((()=>u.saveService.state),((t,a)=>{"save"===a&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[u]),r.createElement("div",{className:(0,p.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},a),!u.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),u.saveService.isOffline&&r.createElement("span",{className:(0,p.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===u.saveService.state&&r.createElement(Z.G,{icon:R.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(Z.G,{icon:R.f8k,style:{color:"var(--ifm-color-success)"}})),u.hasEdits&&!u.showRaw&&n&&r.createElement("button",{onClick:()=>{if(!n)return;if(u.readonly)return void u.setData({code:u.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&u.setData({code:u.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(Z.G,{icon:R.X7o})),s&&!u.showRaw&&r.createElement("button",{className:(0,p.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([u.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const n="python"===i?".py":`.${i}`,r=a===i?u.webKey:a,o=r.endsWith(n)?r:`${r}${n}`;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(Z.G,{icon:R.q7m})),u.hasEdits&&!l&&r.createElement("button",{className:(0,p.default)(m.Z.showRawButton,m.Z.headerButton,u.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,D.aD)((()=>u.showRaw=!u.showRaw)),title:u.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},u.showRaw?r.createElement(Z.G,{icon:R.w49}):r.createElement(Z.G,{icon:R.rxY}))),"python"===i&&r.createElement(I,{webKey:o}))}));var M=a(56771);const z=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(L,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var a=t.toDataURL("image/png");a=(a=a.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var n=document.createElement("a");n.href=a,n.download=`${e}.png`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(Z.G,{icon:R.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),O=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),a=t.find(e.webKey);return r.useEffect((()=>(0,D.U5)((()=>a.execCounter),(t=>{"python"===e.lang&&t>0&&(a.clearLogMessages(),(0,M.m)("script-exec",{type:a.isDummy?"read-only":"editable",webKey:a.webKey}),window.brython(1,{ids:[f.h5.scriptSource(a.codeId)]}))}))),[a]),r.createElement(r.Fragment,null,r.createElement(H,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(y,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,p.default)(m.Z.result)},t.opendGraphicsModalWebKey===a.webKey&&r.createElement(r.Fragment,null,a.hasTurtleOutput&&r.createElement(G,{webKey:e.webKey}),a.hasCanvasOutput&&r.createElement(z,{webKey:e.webKey}),!a.hasCanvasOutput&&!a.hasTurtleOutput&&r.createElement(L,{webKey:e.webKey})),r.createElement($,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(a.codeId)})))})),V=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),a=r.useCallback((e=>{if(e.detail){const a=e.detail;if("done"===a.type)return(0,D.z)((()=>t.executing=!1));t.addLogMessage(a)}}),[t]),n=((e,t)=>{const a=r.useRef(null);return r.useCallback((n=>{a.current&&t(a.current),a.current=n,a.current&&e(a.current)}),[e,t])})((e=>{e.addEventListener(f.jS,a)}),(e=>{e.removeEventListener(f.jS,a)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:n})}));var F=a(90203),U=a(34805),W=a(4817),j=a.n(W),Q=a(87410),q=a(84538);const X=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:Q.Z.highlight(e,Q.Z.languages.python,"python")}})},Y=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),a=(0,g.oR)("userStore"),n=t.find(e.webKey),[o,i]=r.useState(1),[l,s]=r.useState(!1);return r.useEffect((()=>(0,D.U5)((()=>t.find(e.webKey)?.id),(a=>{a&&a>0&&(i(1),l&&t.find(e.webKey)?.loadVersions())}))),[]),n.versioned?r.createElement("div",{className:(0,p.default)(m.Z.codeHistory)},r.createElement("details",{open:l,onClick:e=>{e.preventDefault(),e.stopPropagation(),l||n.loadVersions(),s(!l)},className:(0,p.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},n.versionsLoaded?`${n.versions.length} Versions`:"Load Versions"),r.createElement(Z.G,{className:(0,p.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===n.versionsLoaded,icon:R.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),n.loadVersions()}})),r.createElement("div",{className:(0,p.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,p.default)(m.Z.versionControl)},r.createElement(q.Z,{value:o,onChange:e=>{i(e)},min:1,max:n.versions.length-1,dots:n.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",o)),r.createElement("div",{className:(0,p.default)(m.Z.diffViewer)},n.versions.length>1&&r.createElement(j(),{leftTitle:n.versions[o-1].version,rightTitle:r.createElement("div",null,n.versions[o].version,n.versions[o].pasted&&a.current?.admin&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:n.versions[o-1].data.code,newValue:n.versions[o].data.code,renderContent:X}))))):null})),J=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore");(0,g.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const a=t.find(e.webKey),n=(0,h.Z)();return r.useEffect((()=>{a&&a.precode!==e.precode&&(0,D.z)((()=>{a.precode=e.precode}))}),[a]),n?a?r.createElement("div",{className:(0,p.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(F.Z,null),r.createElement("div",{className:(0,p.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(V,{webKey:e.webKey}),r.createElement(O,e),r.createElement(Y,{webKey:e.webKey}))):r.createElement(U.Z,null):r.createElement("div",null,"SSR")}));var ee=a(25934),te=a(81570),ae=a(38985);const ne={},re=(e,t)=>{const a=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ne[a]||(ne[a]={});const n=d(t);ne[a][n]||(ne[a][n]=Object.keys(ne[a]).length+1);return e?(0,c.Vx)(e):`${ne[a][n]}`};function oe(e){if(e.reference)return r.createElement(l(),e);const t=(e.className||"").match(/language-(?<lang>\w*)/);let a=t?.groups?.lang?.toLocaleLowerCase()??"";if("py"===a&&(a="python"),e.live_jsx)return r.createElement(te.Z,(0,n.Z)({scope:ae.Z},e));if(e.live_py&&s.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),i=t.match(/\n###\s*PRE.*?\n/);let l="",s=t;i&&(l=t.slice(0,i.index||0),s=t.slice((i.index||0)+i[0].length));const d=re(e.title,s),[m]=r.useState(e.id||(0,ee.Z)());return r.createElement(J,(0,n.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:m,code:s,codeId:d,readonly:!!e.readonly,lang:a,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:l,showLineNumbers:!(e.slim&&!/\n/.test(s)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||a}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86390);const o={playgroundWrapper:"playgroundWrapper_ADS_",playgroundContainer:"playgroundContainer_J_zN"};function i(e){return n.createElement("div",{className:o.playgroundWrapper},n.createElement("div",{className:o.playgroundContainer},n.createElement(r.Z,e)))}},46858:(e,t,a)=>{a.d(t,{Vj:()=>n,Vx:()=>r,ly:()=>o});const n=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},34532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o='import pgzrun\n\nTITLE = "Paint"\nWIDTH = 800\nHEIGHT = 800\n\nfarbwahl = Actor("button_red")\nfarbwahl.farbe = 255, 0, 0\nfarbwahl.top = 10\nfarbwahl.left = 10\n\nloeschen = Actor("button_grey")\nloeschen.top = 70\nloeschen.left = 10\n\n\ndef on_mouse_down(pos):\n    if farbwahl.collidepoint(pos):\n        if farbwahl.image == "button_red":\n            farbwahl.image = "button_blue"\n            farbwahl.farbe = 0, 0, 255\n        elif farbwahl.image == "button_blue":\n            farbwahl.image = "button_green"\n            farbwahl.farbe = 0, 255, 0\n        elif farbwahl.image == "button_green":\n            farbwahl.image = "button_yellow"\n            farbwahl.farbe = 255, 255, 0\n        elif farbwahl.image == "button_yellow":\n            farbwahl.image = "button_red"\n            farbwahl.farbe = 255, 0, 0\n    if loeschen.collidepoint(pos):\n        screen.clear()\n\n\ndef on_mouse_move(pos, buttons):\n    if buttons:\n        screen.draw.filled_circle(pos, 2, farbwahl.farbe)\n\n\ndef draw():\n    farbwahl.draw()\n    loeschen.draw()\n\npgzrun.go()\n';var i=a(99882);const l={sidebar_custom_props:{id:"96182e0c-3a6b-4eb0-8916-cc267904e1d3",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},s="Zeichenprogramm",c={unversionedId:"Programmieren-2/PyGameZero-Referenz/A-examples/paint/index",id:"version-25h/Programmieren-2/PyGameZero-Referenz/A-examples/paint/index",title:"Zeichenprogramm",description:"---",source:"@site/versioned_docs/version-25h/09-Programmieren-2/00-PyGameZero-Referenz/A-examples/2-paint/index.md",sourceDirName:"09-Programmieren-2/00-PyGameZero-Referenz/A-examples/2-paint",slug:"/Programmieren-2/PyGameZero-Referenz/A-examples/paint/",permalink:"/25h/Programmieren-2/PyGameZero-Referenz/A-examples/paint/",draft:!1,tags:[],version:"25h",frontMatter:{sidebar_custom_props:{id:"96182e0c-3a6b-4eb0-8916-cc267904e1d3",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-25h/sidebar",previous:{title:"Pong",permalink:"/25h/Programmieren-2/PyGameZero-Referenz/A-examples/pong/"},next:{title:"Tippspiel",permalink:"/25h/Programmieren-2/PyGameZero-Referenz/A-examples/typing/"}},d={},m=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"Grafiken",id:"grafiken",level:2},{value:"Programm",id:"programm",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("Comment"),g=p("Figure"),h={toc:m},b="wrapper";function y(e){let{components:t,...l}=e;return(0,r.kt)(b,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"zeichenprogramm"},"Zeichenprogramm"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"beschreibung"},"Beschreibung"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Zeichenprogramm"),(0,r.kt)(u,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(93543).Z,width:"800",height:"824"})),(0,r.kt)(u,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"grafiken"},"Grafiken"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(8890).Z,width:"49",height:"49"})),(0,r.kt)(u,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(u,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)(i.Z,{language:"python",mdxType:"CodeBlock"},o))}y.isMDXComponent=!0},6645:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},8890:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAABbklEQVR42u2avUoDQRSF7wOY7E4abRQMYmFh4Qv4ABsFsdCwSvpYBH8KC0F8knS62gg2lgErExWfQFIIYkDcxspmzJl4FxXExmIGzsCB+Wm+jztT3RH5HL362OJNWml307iD3G1WrG9RNnCCV74ObPoI/VfA7QS69VJDNx+aU/Z1f87l/WjBuygbOIvqDPmll8b3KuAj+G952p5xEuAXvf+D3dmR7c60fWlN2ufmuHcBV75XdZxvB/PFO5HbjTjHQg0HWxNeCmjAp6x6pUQneuCzgIYSlKAEJShBCUpQghKUoAQlKEEJSlCCEpSgBCUoQQlKUIIS/yFxnRo3QQ8MB+iJ+Szws2cHfrlaH0k8tqpBdU/BC27wy8WKKcqCtmpI7V8E/HK2bGxnzdgQfxSAG/xyshTlmFyuGqvvw/eAE7zgBr9ktegci1ADfjlOSo2QJcDvPqlkSbkdZBWG3N++C53WyodZEvXDgI/64FX2D1dgNlufmRXqAAAALXRFWHRTb2Z0d2FyZQBieS5ibG9vZGR5LmNyeXB0by5pbWFnZS5QTkcyNEVuY29kZXKoBn/uAAAAAElFTkSuQmCC"},93543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/screenshot-paint-e85892d1766669d1185a68c4a72ea2a3.png"}}]);