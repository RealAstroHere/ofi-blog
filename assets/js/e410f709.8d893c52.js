"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[99728],{90203:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="noLoginAlert_HRfh";var o=n(39960),i=n(71217),s=n(21314);const l=(0,i.Pi)((()=>(0,s.oR)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010);const o="loader_FEpR",i="badge_oWqf",s="overlay_cqDg";var l=n(92814),c=n(51436);const d=e=>a.createElement("div",{className:(0,r.default)(o,e.overlay&&s)},a.createElement(l.G,{icon:c.IJ7,spin:!0}),a.createElement("span",{className:(0,r.default)("badge",i)},e.caption||"Laden..."))},99882:(e,t,n)=>{n.d(t,{Z:()=>oe});var a=n(83117),r=n(67294),o=n(3024),i=n(95665),s=n.n(i),l=n(10412),c=n(46858);const d=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),n=Math.imul(n^r,2654435761),a=Math.imul(a^r,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,"0")+(n>>>0).toString(16).padStart(8,"0")};var m=n(6645),p=n(86010),u=n(71217),g=n(21314),y=n(72389);const h=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),b=(0,u.Pi)((e=>{const[t,a]=r.useState();return r.useEffect((()=>{Promise.all([n.e(16606),n.e(91086)]).then(n.bind(n,91086)).then((e=>{a(e)}))}),[]),(0,y.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(h,e)}));var v=n(52616);const f="brythonGraphicsResult_Zcg1",w="brythonGraphicsResultHead_Te8f",E="spacer_VytD",N="slimStrippedButton__QpN";var k=n(61212);const C=e=>Object.entries(e||{}).map((e=>e[0]+'="'+e[1]+'"')).join(" "),_=(e,t)=>{"root"===e.type?e.children.forEach((e=>{_(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},S=e=>{const t=[],{properties:n,tagName:a,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...S(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push("<svg "+C(n)+">"),o.forEach((e=>{t.push(...S(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),n[t.attributeName]=t.to}})),t.push("<rect "+C(n)+"></rect>");break;case"g":if(0===(o||[]).length)return t;t.push("<g "+C(n)+">"),o.forEach((e=>{t.push(...S(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push("<line "+C(n)+"></line>");break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push("<circle "+C(n)+"></circle>");break;case"text":var i="";o.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),n[t.attributeName]=t.to}})),t.push("<text "+C(n)+">"+i+"</text>");break;case"polygon":var s="0,0,0",l="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(s=e.properties.to);break;case"animateMotion":"to"in e.properties&&(l=e.properties.to)}})),t.push("<polygon "+C(n)+' transform="translate('+l+") rotate("+s+')"></polygon>')}return t},x=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},Z=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:r.x-5+","+(r.y-5)+","+(r.width+10)+","+(r.height+10),width:r.width+10,height:r.height+10};var i=e.outerHTML,s='<?xml version="1.0" standalone="no"?>';const l=document.createElement("div");let c=0;if(a||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),n=t.querySelectorAll("animate"),a=Array.from(n).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(a.length>0){const e=a[a.length-1],n=t.getElementById("animation_frame0");if(n){const t=document.createElement("rect");t.innerHTML='  <rect><animate id="looper_animation" begin="0;animation_frame'+e+'.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>',n.parentElement.insertBefore(t,n),n.setAttribute("begin","looper_animation.end"),n.setAttribute("width",""+o.width)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",""+o.width),e.setAttribute("to",""+o.width)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",""+o.height),t.setAttribute("width",""+o.width),l.innerHTML=s+"\r\n"+t.outerHTML,c=Array.from(t.querySelectorAll("animate")).map(x).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const n=(0,k.Q)(e);return t&&_(n,t),S(n).join("\n")})(""+s+i,o);l.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=l.querySelector("svg"),t=document.createElement("metadata"),a=document.createElement("raw");a.innerHTML=n||"",t.appendChild(a),e.appendChild(t)}var d=new Blob([l.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=c>0?t+"__"+(Math.round(10*c)/10).toString().replace(".","_")+"s.svg":t+".svg",document.body.appendChild(p),p.click(),document.body.removeChild(p)};var T=n(92814),B=n(51436),R=n(61193),L=n.n(R);const P=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},K=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=(0,g.oR)("documentStore");return r.createElement(L(),{onStop:P,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:f},r.createElement("div",{className:w},r.createElement("span",null,"Output"),r.createElement("span",{className:E}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{n.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:B.NBC})))),r.createElement("div",{id:v.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),G=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(v.h5.turtleSvgContainer(t.codeId));e&&Z(e,""+t.codeId,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:B.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(v.h5.turtleSvgContainer(t.codeId));e&&Z(e,""+t.codeId,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:B.q7m}))))})})),D=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const n=[];let a=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&n.push(a+"-"+(a+t)),a+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:"{"+n.join(",")+"}"},o.join("")))}));var M=n(51417),I=n(68949);const H=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,p.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(T.G,{icon:t.executing?M.Bmx:B.zc,spin:t.executing}))})),A=(0,u.Pi)((e=>{let{slim:t,title:n,resettable:a,webKey:o,lang:i,noCompare:s,download:l}=e;const[c,d]=r.useState(!1),u=(0,g.oR)("documentStore").find(o);if(!u)return null;return r.useEffect((()=>{let e;const t=(0,I.U5)((()=>u.saveService.state),((t,n)=>{"save"===n&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[u]),r.createElement("div",{className:(0,p.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},n),!u.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),u.saveService.isOffline&&r.createElement("span",{className:(0,p.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===u.saveService.state&&r.createElement(T.G,{icon:B.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(T.G,{icon:B.f8k,style:{color:"var(--ifm-color-success)"}})),u.hasEdits&&!u.showRaw&&a&&r.createElement("button",{onClick:()=>{if(!a)return;if(u.readonly)return void u.setData({code:u.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&u.setData({code:u.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(T.G,{icon:B.X7o})),l&&!u.showRaw&&r.createElement("button",{className:(0,p.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([u.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const a="python"===i?".py":"."+i,r=n===i?u.webKey:n,o=r.endsWith(a)?r:""+r+a;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(T.G,{icon:B.q7m})),u.hasEdits&&!s&&r.createElement("button",{className:(0,p.default)(m.Z.showRawButton,m.Z.headerButton,u.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,I.aD)((()=>u.showRaw=!u.showRaw)),title:u.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},u.showRaw?r.createElement(T.G,{icon:B.w49}):r.createElement(T.G,{icon:B.rxY}))),"python"===i&&r.createElement(H,{webKey:o}))}));var F=n(56771);const O=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey);return r.createElement(K,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var n=t.toDataURL("image/png");n=(n=n.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var a=document.createElement("a");a.href=n,a.download=e+".png",document.body.appendChild(a),a.click(),document.body.removeChild(a)}})(v.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(T.G,{icon:B.q7m}))),main:r.createElement("canvas",{id:v.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),z=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore"),n=t.find(e.webKey);return r.useEffect((()=>(0,I.U5)((()=>n.execCounter),(t=>{"python"===e.lang&&t>0&&(n.clearLogMessages(),(0,F.m)("script-exec",{type:n.isDummy?"read-only":"editable",webKey:n.webKey}),window.brython(1,{ids:[v.h5.scriptSource(n.codeId)]}))}))),[n]),r.createElement(r.Fragment,null,r.createElement(A,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,p.default)(m.Z.result)},t.opendGraphicsModalWebKey===n.webKey&&r.createElement(r.Fragment,null,n.hasTurtleOutput&&r.createElement(G,{webKey:e.webKey}),n.hasCanvasOutput&&r.createElement(O,{webKey:e.webKey}),!n.hasCanvasOutput&&!n.hasTurtleOutput&&r.createElement(K,{webKey:e.webKey})),r.createElement(D,{webKey:e.webKey}),r.createElement("div",{id:v.h5.outputDiv(n.codeId)})))})),V=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore").find(e.webKey),n=r.useCallback((e=>{if(e.detail){const n=e.detail;if("done"===n.type)return(0,I.z)((()=>t.executing=!1));t.addLogMessage(n)}}),[t]),a=((e,t)=>{const n=r.useRef(null);return r.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])})((e=>{e.addEventListener(v.jS,n)}),(e=>{e.removeEventListener(v.jS,n)}));return r.createElement("div",{id:v.h5.component(t.codeId),ref:a})}));var U=n(90203),j=n(34805),q=n(4817),W=n.n(q),Y=n(87410),$=n(35926);const X=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:Y.Z.highlight(e,Y.Z.languages.python,"python")}})},J=(0,u.Pi)((e=>{var t;const n=(0,g.oR)("documentStore"),a=(0,g.oR)("userStore"),o=n.find(e.webKey),[i,s]=r.useState(1),[l,c]=r.useState(!1);return r.useEffect((()=>(0,I.U5)((()=>{var t;return null==(t=n.find(e.webKey))?void 0:t.id}),(t=>{var a;t&&t>0&&(s(1),l&&(null==(a=n.find(e.webKey))||a.loadVersions()))}))),[]),o.versioned?r.createElement("div",{className:(0,p.default)(m.Z.codeHistory)},r.createElement("details",{open:l,onClick:e=>{e.preventDefault(),e.stopPropagation(),l||o.loadVersions(),c(!l)},className:(0,p.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},o.versionsLoaded?o.versions.length+" Versions":"Load Versions"),r.createElement(T.G,{className:(0,p.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===o.versionsLoaded,icon:B.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),o.loadVersions()}})),r.createElement("div",{className:(0,p.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,p.default)(m.Z.versionControl)},r.createElement($.Z,{value:i,onChange:e=>{s(e)},min:1,max:o.versions.length-1,dots:o.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",i)),r.createElement("div",{className:(0,p.default)(m.Z.diffViewer)},o.versions.length>1&&r.createElement(W(),{leftTitle:o.versions[i-1].version,rightTitle:r.createElement("div",null,o.versions[i].version,o.versions[i].pasted&&(null==(t=a.current)?void 0:t.admin)&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:o.versions[i-1].data.code,newValue:o.versions[i].data.code,renderContent:X}))))):null})),Q=(0,u.Pi)((e=>{const t=(0,g.oR)("documentStore");(0,g.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const n=t.find(e.webKey),a=(0,y.Z)();return r.useEffect((()=>{n&&n.precode!==e.precode&&(0,I.z)((()=>{n.precode=e.precode}))}),[n]),a?n?r.createElement("div",{className:(0,p.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(U.Z,null),r.createElement("div",{className:(0,p.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(V,{webKey:e.webKey}),r.createElement(z,e),r.createElement(J,{webKey:e.webKey}))):r.createElement(j.Z,null):r.createElement("div",null,"SSR")}));var ee=n(25934),te=n(81570),ne=n(38985);const ae={},re=(e,t)=>{const n=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ae[n]||(ae[n]={});const a=d(t);ae[n][a]||(ae[n][a]=Object.keys(ae[n]).length+1);return e?(0,c.Vx)(e):""+ae[n][a]};function oe(e){var t,n,i;if(e.reference)return r.createElement(s(),e);const d=(e.className||"").match(/language-(?<lang>\w*)/);let m=null!=(t=null==d||null==(n=d.groups)||null==(i=n.lang)?void 0:i.toLocaleLowerCase())?t:"";if("py"===m&&(m="python"),e.live_jsx)return r.createElement(te.Z,(0,a.Z)({scope:ne.Z},e));if(e.live_py&&l.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),n=t.match(/\n###\s*PRE.*?\n/);let i="",s=t;n&&(i=t.slice(0,n.index||0),s=t.slice((n.index||0)+n[0].length));const l=re(e.title,s),[d]=r.useState(e.id||(0,ee.Z)());return r.createElement(Q,(0,a.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:d,code:s,codeId:l,readonly:!!e.readonly,lang:m,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:i,showLineNumbers:!(e.slim&&!/\n/.test(s)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||m}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86390);const o="playgroundWrapper_ADS_",i="playgroundContainer_J_zN";function s(e){return a.createElement("div",{className:o},a.createElement("div",{className:i},a.createElement(r.Z,e)))}},46858:(e,t,n)=>{n.d(t,{Vj:()=>a,Vx:()=>r,ly:()=>o});const a=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},72539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(83117),r=(n(67294),n(3905));var o=n(99882);const i={sidebar_custom_props:{id:"48574afc-f9c3-4780-bee3-3de212180467",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},s="Fenster",l={unversionedId:"Programmieren-1/PyGameZero/window/index",id:"version-26e/Programmieren-1/PyGameZero/window/index",title:"Fenster",description:"Fenster definieren",source:"@site/versioned_docs/version-26e/03-Programmieren-1/05-PyGameZero/1-window/index.md",sourceDirName:"03-Programmieren-1/05-PyGameZero/1-window",slug:"/Programmieren-1/PyGameZero/window/",permalink:"/26e/Programmieren-1/PyGameZero/window/",draft:!1,tags:[],version:"26e",frontMatter:{sidebar_custom_props:{id:"48574afc-f9c3-4780-bee3-3de212180467",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"version-26e/sidebar",previous:{title:"Pygame Zero",permalink:"/26e/Programmieren-1/PyGameZero/"},next:{title:"Animation",permalink:"/26e/Programmieren-1/PyGameZero/animation/"}},c={},d=[{value:"Fenster definieren",id:"fenster-definieren",level:2},{value:"Fenster verwenden",id:"fenster-verwenden",level:2},{value:"Fenster schliessen",id:"fenster-schliessen",level:2}],m=(p="Comment",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const u={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"fenster"},"Fenster"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"fenster-definieren"},"Fenster definieren"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"TITLE\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"legt den Fenstertitel fest."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"WIDTH\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"legt die Breite des Fensters in Pixel fest."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"HEIGHT\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"legt die H\xf6he des Fensters in Pixel fest."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)(o.Z,{language:"python",mdxType:"CodeBlock"},"import pgzrun\n\nTITLE = 'Mein Spiel'\nWIDTH = 800\nHEIGHT = 600\n\npgzrun.go()\n"),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"fenster-verwenden"},"Fenster verwenden"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Diese Anweisungen d\xfcrfen ",(0,r.kt)("strong",{parentName:"p"},"nur")," in einem Unterprogramm verwendet werden."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"screen.width\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"liefert die Breite des aktuellen Fensters in Pixel zur\xfcck."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"screen.height\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"liefert die H\xf6he des aktuellen Fensters in Pixel zur\xfcck."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"screen.clear()\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"f\xfcllt das Fenster mit der Farbe Schwarz."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"screen.fill(farbe)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"f\xfcllt das Fenster mit der angegebenen Farbe. ",(0,r.kt)("inlineCode",{parentName:"p"},"farbe")," muss ein RGB-Tupel sein."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"fenster-schliessen"},"Fenster schliessen"),(0,r.kt)(m,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"quit()\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"schliesst das Fenster."),(0,r.kt)(m,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))}g.isMDXComponent=!0},6645:(e,t,n)=>{n.d(t,{Z:()=>a});const a={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}}}]);