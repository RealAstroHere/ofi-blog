"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[39786],{90203:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const r="noLoginAlert_HRfh";var o=a(39960),s=a(71217),i=a(21314);const l=(0,s.Pi)((()=>(0,i.oR)("msalStore").loggedIn?null:n.createElement("div",{className:r},n.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",n.createElement(o.Z,{to:"/login"},"Login"))))},34805:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010);const o="loader_FEpR",s="badge_oWqf",i="overlay_cqDg";var l=a(92814),c=a(51436);const d=e=>n.createElement("div",{className:(0,r.default)(o,e.overlay&&i)},n.createElement(l.G,{icon:c.IJ7,spin:!0}),n.createElement("span",{className:(0,r.default)("badge",s)},e.caption||"Laden..."))},99882:(e,t,a)=>{a.d(t,{Z:()=>oe});var n=a(83117),r=a(67294),o=a(3024),s=a(95665),i=a.n(s),l=a(10412),c=a(46858);const d=function(e,t){void 0===t&&(t=0);let a=3735928559^t,n=1103547991^t;for(let r,o=0;o<e.length;o++)r=e.charCodeAt(o),a=Math.imul(a^r,2654435761),n=Math.imul(n^r,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),(n>>>0).toString(16).padStart(8,"0")+(a>>>0).toString(16).padStart(8,"0")};var m=a(6645),p=a(86010),u=a(71217),h=a(21314),g=a(72389);const y=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement("pre",null,r.createElement("code",null,t.data.code))})),b=(0,u.Pi)((e=>{const[t,n]=r.useState();return r.useEffect((()=>{Promise.all([a.e(16606),a.e(91086)]).then(a.bind(a,91086)).then((e=>{n(e)}))}),[]),(0,g.Z)()?t?r.createElement(t.default,e):r.createElement("div",null):r.createElement(y,e)}));var f=a(52616);const v="brythonGraphicsResult_Zcg1",E="brythonGraphicsResultHead_Te8f",w="spacer_VytD",N="slimStrippedButton__QpN";var _=a(61212);const k=e=>Object.entries(e||{}).map((e=>e[0]+'="'+e[1]+'"')).join(" "),C=(e,t)=>{"root"===e.type?e.children.forEach((e=>{C(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},x=e=>{const t=[],{properties:a,tagName:n,type:r,children:o}=e;switch("root"===r&&o.forEach((e=>{t.push(...x(e))})),n){case"svg":e.metadata&&t.push(e.metadata),t.push("<svg "+k(a)+">"),o.forEach((e=>{t.push(...x(e))})),t.push("</svg>");break;case"rect":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to}})),t.push("<rect "+k(a)+"></rect>");break;case"g":if(0===(o||[]).length)return t;t.push("<g "+k(a)+">"),o.forEach((e=>{t.push(...x(e))})),t.push("</g>");break;case"line":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;a[t.attributeName]=t.to}})),t.push("<line "+k(a)+"></line>");break;case"circle":o.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to))}})),a.style&&/\s*display:\s*none;\s*/.test(a.style)&&(a.style=a.style.replace(/\s*display:\s*none;\s*/g,"")),t.push("<circle "+k(a)+"></circle>");break;case"text":var s="";o.forEach((e=>{switch(e.type){case"text":s=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to}})),t.push("<text "+k(a)+">"+s+"</text>");break;case"polygon":var i="0,0,0",l="0,0";o.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(a.style=a.style.replace(/display:\s*\b\w+\b;/g,"display: "+t.to+";")),a[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(i=e.properties.to);break;case"animateMotion":"to"in e.properties&&(l=e.properties.to)}})),t.push("<polygon "+k(a)+' transform="translate('+l+") rotate("+i+')"></polygon>')}return t},S=e=>{const t=e.getAttribute("dur");return/ms$/.test(t)?Number.parseFloat(t)/1e3||0:/s$/.test(t)&&Number.parseFloat(t)||0},T=(e,t,a,n)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const r=e.getBBox(),o={viewBox:r.x-5+","+(r.y-5)+","+(r.width+10)+","+(r.height+10),width:r.width+10,height:r.height+10};var s=e.outerHTML,i='<?xml version="1.0" standalone="no"?>';const l=document.createElement("div");let c=0;if(n||window.__KEEP_TURTLE_ANIMATIONS__){const t=e.cloneNode(!0),a=t.querySelectorAll("animate"),n=Array.from(a).map((e=>(e.id.match(/\d+/)||[])[0])).filter((e=>e)).map((e=>Number.parseInt(e))).sort(((e,t)=>e>t?1:-1));if(n.length>0){const e=n[n.length-1],a=t.getElementById("animation_frame0");if(a){const t=document.createElement("rect");t.innerHTML='  <rect><animate id="looper_animation" begin="0;animation_frame'+e+'.end" dur="1ms" attributeName="visibility" from="hide" to="hide"/></rect>',a.parentElement.insertBefore(t,a),a.setAttribute("begin","looper_animation.end"),a.setAttribute("width",""+o.width)}}t.querySelectorAll('animate[attributeName="width"]').forEach((e=>{e.getAttribute("from")===e.getAttribute("to")&&e.setAttribute("from",""+o.width),e.setAttribute("to",""+o.width)})),t.setAttribute("viewBox",o.viewBox),t.setAttribute("height",""+o.height),t.setAttribute("width",""+o.width),l.innerHTML=i+"\r\n"+t.outerHTML,c=Array.from(t.querySelectorAll("animate")).map(S).reduce(((e,t)=>e+t),0)}else{const e=((e,t)=>{const a=(0,_.Q)(e);return t&&C(a,t),x(a).join("\n")})(""+i+s,o);l.innerHTML=e}if(!window.__DISABLE_TURTLE_METADATA__){const e=l.querySelector("svg"),t=document.createElement("metadata"),n=document.createElement("raw");n.innerHTML=a||"",t.appendChild(n),e.appendChild(t)}var d=new Blob([l.innerHTML],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(d),p=document.createElement("a");p.href=m,p.download=c>0?t+"__"+(Math.round(10*c)/10).toString().replace(".","_")+"s.svg":t+".svg",document.body.appendChild(p),p.click(),document.body.removeChild(p)};var A=a(92814),R=a(51436),L=a(61193),H=a.n(L);const Z=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}},B=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),a=(0,h.oR)("documentStore");return r.createElement(H(),{onStop:Z,positionOffset:{x:0,y:"-50%"}},r.createElement("div",{className:v},r.createElement("div",{className:E},r.createElement("span",null,"Output"),r.createElement("span",{className:w}),e.controls,r.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:N,onClick:()=>{a.setOpendTurtleModal(void 0),t.stopScript(document)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(A.G,{icon:R.NBC})))),r.createElement("div",{id:f.h5.graphicsResult(t.codeId),className:"brython-graphics-result"},e.main)))})),O=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement(B,{webKey:e.webKey,controls:r.createElement(r.Fragment,null,r.createElement("button",{"aria-label":"Download Animated SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&T(e,""+t.codeId,t.executedScriptSource,!0)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(A.G,{icon:R.Bxq}))),r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.h5.turtleSvgContainer(t.codeId));e&&T(e,""+t.codeId,t.executedScriptSource)}},r.createElement("span",{"aria-hidden":"true"},r.createElement(A.G,{icon:R.q7m}))))})})),I=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);if(0===t.logMessages.length||/^\s*$/.test(t.logMessages.map((e=>e.output)).join("")))return null;const a=[];let n=1;const o=t.logMessages.map((e=>{const t=(e.output||"").split("\n").length-1;return"stderr"===e.type&&a.push(n+"-"+(n+t)),n+=t,e.output}));return r.createElement("div",{className:m.Z.brythonOut},r.createElement(oe,{metastring:"{"+a.join(",")+"}"},o.join("")))}));var D=a(51417),G=a(68949);const K=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement("button",{onClick:()=>t.execScript(document),className:(0,p.default)(m.Z.playButton,m.Z.headerButton),title:"Code Ausf\xfchren"},r.createElement(A.G,{icon:t.executing?D.Bmx:R.zc,spin:t.executing}))})),M=(0,u.Pi)((e=>{let{slim:t,title:a,resettable:n,webKey:o,lang:s,noCompare:i,download:l}=e;const[c,d]=r.useState(!1),u=(0,h.oR)("documentStore").find(o);if(!u)return null;return r.useEffect((()=>{let e;const t=(0,G.U5)((()=>u.saveService.state),((t,a)=>{"save"===a&&"done"===t&&(d(!0),e=setTimeout((()=>{d(!1),e=void 0}),1500))}));return()=>{e&&clearTimeout(e),t()}}),[u]),r.createElement("div",{className:(0,p.default)(m.Z.brythonCodeBlockHeader,m.Z.brythonCodeBlockHeader,m.Z.controls)},!t&&r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.title},a),!u.loaded&&r.createElement("span",{className:"badge badge--warning",title:"Warte auf die Antwort des Servers. Seite neu laden."},"Laden"),u.saveService.isOffline&&r.createElement("span",{className:(0,p.default)("badge","badge--danger",m.Z.badge),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline"),r.createElement("div",{className:m.Z.spacer}),r.createElement("span",{style:{minWidth:"1em"}},"save"===u.saveService.state&&r.createElement(A.G,{icon:R.UO1,style:{color:"#3578e5"},spin:!0}),c&&r.createElement(A.G,{icon:R.f8k,style:{color:"var(--ifm-color-success)"}})),u.hasEdits&&!u.showRaw&&n&&r.createElement("button",{onClick:()=>{if(!n)return;if(u.readonly)return void u.setData({code:u.pristine.code});window.confirm("\xc4nderungen verwerfen? (Ihre Version geht verloren!)")&&u.setData({code:u.rawScript})},className:m.Z.headerButton,title:"\xc4nderungen Verwerfen"},r.createElement(A.G,{icon:R.X7o})),l&&!u.showRaw&&r.createElement("button",{className:(0,p.default)(m.Z.headerButton),onClick:()=>{const e=document.createElement("a"),t=new Blob([u.code],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t);const n="python"===s?".py":"."+s,r=a===s?u.webKey:a,o=r.endsWith(n)?r:""+r+n;e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e)},title:"Download"},r.createElement(A.G,{icon:R.q7m})),u.hasEdits&&!i&&r.createElement("button",{className:(0,p.default)(m.Z.showRawButton,m.Z.headerButton,u.showRaw?m.Z.showRawButtonDisabled:void 0),onClick:(0,G.aD)((()=>u.showRaw=!u.showRaw)),title:u.showRaw?"Mein Code Anzeigen":"Original Anzeigen"},u.showRaw?r.createElement(A.G,{icon:R.w49}):r.createElement(A.G,{icon:R.rxY}))),"python"===s&&r.createElement(K,{webKey:o}))}));var z=a(56771);const P=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey);return r.createElement(B,{webKey:e.webKey,controls:r.createElement("button",{"aria-label":"Download SVG",type:"button",className:N,style:{zIndex:1e3},onClick:()=>{(e=>{const t=document.getElementById(e);if(t){var a=t.toDataURL("image/png");a=(a=a.replace(/^data:image\/[^;]*/,"data:application/octet-stream")).replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");var n=document.createElement("a");n.href=a,n.download=e+".png",document.body.appendChild(n),n.click(),document.body.removeChild(n)}})(f.h5.canvasContainer(t.codeId))}},r.createElement("span",{"aria-hidden":"true"},r.createElement(A.G,{icon:R.q7m}))),main:r.createElement("canvas",{id:f.h5.canvasContainer(t.codeId),width:"500",height:"500",style:{display:"block",width:"500px",height:"500px"}})})})),V=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore"),a=t.find(e.webKey);return r.useEffect((()=>(0,G.U5)((()=>a.execCounter),(t=>{"python"===e.lang&&t>0&&(a.clearLogMessages(),(0,z.m)("script-exec",{type:a.isDummy?"read-only":"editable",webKey:a.webKey}),window.brython(1,{ids:[f.h5.scriptSource(a.codeId)]}))}))),[a]),r.createElement(r.Fragment,null,r.createElement(M,{slim:e.slim,title:e.title,resettable:e.resettable,download:e.download,noCompare:e.noCompare,webKey:e.webKey,lang:e.lang}),r.createElement(b,{webKey:e.webKey,lang:e.lang,showLineNumbers:e.showLineNumbers,maxLines:e.maxLines}),"python"===e.lang&&r.createElement("div",{className:(0,p.default)(m.Z.result)},t.opendGraphicsModalWebKey===a.webKey&&r.createElement(r.Fragment,null,a.hasTurtleOutput&&r.createElement(O,{webKey:e.webKey}),a.hasCanvasOutput&&r.createElement(P,{webKey:e.webKey}),!a.hasCanvasOutput&&!a.hasTurtleOutput&&r.createElement(B,{webKey:e.webKey})),r.createElement(I,{webKey:e.webKey}),r.createElement("div",{id:f.h5.outputDiv(a.codeId)})))})),U=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore").find(e.webKey),a=r.useCallback((e=>{if(e.detail){const a=e.detail;if("done"===a.type)return(0,G.z)((()=>t.executing=!1));t.addLogMessage(a)}}),[t]),n=((e,t)=>{const a=r.useRef(null);return r.useCallback((n=>{a.current&&t(a.current),a.current=n,a.current&&e(a.current)}),[e,t])})((e=>{e.addEventListener(f.jS,a)}),(e=>{e.removeEventListener(f.jS,a)}));return r.createElement("div",{id:f.h5.component(t.codeId),ref:n})}));var W=a(90203),j=a(34805),F=a(4817),q=a.n(F),X=a(87410),Y=a(35926);const $=e=>{if(e)return r.createElement("span",{dangerouslySetInnerHTML:{__html:X.Z.highlight(e,X.Z.languages.python,"python")}})},J=(0,u.Pi)((e=>{var t;const a=(0,h.oR)("documentStore"),n=(0,h.oR)("userStore"),o=a.find(e.webKey),[s,i]=r.useState(1),[l,c]=r.useState(!1);return r.useEffect((()=>(0,G.U5)((()=>{var t;return null==(t=a.find(e.webKey))?void 0:t.id}),(t=>{var n;t&&t>0&&(i(1),l&&(null==(n=a.find(e.webKey))||n.loadVersions()))}))),[]),o.versioned?r.createElement("div",{className:(0,p.default)(m.Z.codeHistory)},r.createElement("details",{open:l,onClick:e=>{e.preventDefault(),e.stopPropagation(),l||o.loadVersions(),c(!l)},className:(0,p.default)("alert alert--info",m.Z.historyDetails)},r.createElement("summary",null,r.createElement("span",{className:"badge badge--secondary"},o.versionsLoaded?o.versions.length+" Versions":"Load Versions"),r.createElement(A.G,{className:(0,p.default)(m.Z.faButton),color:"var(--ifm-color-primary)",spin:"loading"===o.versionsLoaded,icon:R.UO1,onClick:e=>{e.preventDefault(),e.stopPropagation(),o.loadVersions()}})),r.createElement("div",{className:(0,p.default)(m.Z.content),onClick:e=>{e.preventDefault(),e.stopPropagation()}},r.createElement("div",{className:(0,p.default)(m.Z.versionControl)},r.createElement(Y.Z,{value:s,onChange:e=>{i(e)},min:1,max:o.versions.length-1,dots:o.versions.length<50}),r.createElement("span",{className:"badge badge--primary"},"V",s)),r.createElement("div",{className:(0,p.default)(m.Z.diffViewer)},o.versions.length>1&&r.createElement(q(),{leftTitle:o.versions[s-1].version,rightTitle:r.createElement("div",null,o.versions[s].version,o.versions[s].pasted&&(null==(t=n.current)?void 0:t.admin)&&r.createElement("span",{style:{float:"right"},className:"badge badge--danger"},"Pasted")),splitView:!0,oldValue:o.versions[s-1].data.code,newValue:o.versions[s].data.code,renderContent:$}))))):null})),Q=(0,u.Pi)((e=>{const t=(0,h.oR)("documentStore");(0,h.ky)((()=>(e=>({code:(e.code||"").trim()}))(e)),"code",e.webKey,!e.slim,e.readonly,e.versioned);const a=t.find(e.webKey),n=(0,g.Z)();return r.useEffect((()=>{a&&a.precode!==e.precode&&(0,G.z)((()=>{a.precode=e.precode}))}),[a]),n?a?r.createElement("div",{className:(0,p.default)(m.Z.wrapper,"notranslate")},!e.slim&&r.createElement(W.Z,null),r.createElement("div",{className:(0,p.default)(m.Z.playgroundContainer,e.slim?m.Z.containerSlim:m.Z.containerBig,"live_py")},"python"===e.lang&&r.createElement(U,{webKey:e.webKey}),r.createElement(V,e),r.createElement(J,{webKey:e.webKey}))):r.createElement(j.Z,null):r.createElement("div",null,"SSR")}));var ee=a(25934),te=a(81570),ae=a(38985);const ne={},re=(e,t)=>{const a=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,""))}catch(e){return"py"}}();ne[a]||(ne[a]={});const n=d(t);ne[a][n]||(ne[a][n]=Object.keys(ne[a]).length+1);return e?(0,c.Vx)(e):""+ne[a][n]};function oe(e){var t,a,s;if(e.reference)return r.createElement(i(),e);const d=(e.className||"").match(/language-(?<lang>\w*)/);let m=null!=(t=null==d||null==(a=d.groups)||null==(s=a.lang)?void 0:s.toLocaleLowerCase())?t:"";if("py"===m&&(m="python"),e.live_jsx)return r.createElement(te.Z,(0,n.Z)({scope:ae.Z},e));if(e.live_py&&l.Z.canUseDOM){if(!e.id&&!e.slim)return r.createElement(o.Z,e);const t=e.children.replace(/\s*\n$/,""),a=t.match(/\n###\s*PRE.*?\n/);let s="",i=t;a&&(s=t.slice(0,a.index||0),i=t.slice((a.index||0)+a[0].length));const l=re(e.title,i),[d]=r.useState(e.id||(0,ee.Z)());return r.createElement(Q,(0,n.Z)({},e,{maxLines:e.maxLines&&Number.parseInt(e.maxLines,10),webKey:d,code:i,codeId:l,readonly:!!e.readonly,lang:m,resettable:!e.persist,download:!e.versioned&&!e.noDownload,slim:!!e.slim,precode:s,showLineNumbers:!(e.slim&&!/\n/.test(i)),versioned:!!e.versioned,noCompare:!!e.noCompare,title:(0,c.Vj)(e.title)||m}))}return r.createElement(r.Fragment,null,r.createElement(o.Z,e))}},81570:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86390);const o="playgroundWrapper_ADS_",s="playgroundContainer_J_zN";function i(e){return n.createElement("div",{className:o},n.createElement("div",{className:s},n.createElement(r.Z,e)))}},46858:(e,t,a)=>{a.d(t,{Vj:()=>n,Vx:()=>r,ly:()=>o});const n=e=>{if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=e=>{if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},o=e=>e.replace(/"{3}/g,"'''").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r")},85195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));var o=a(99882);const s={sidebar_custom_props:{id:"ccbea56e-16af-4567-b6e2-10a1d90db44b",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},i="Asteroids",l={unversionedId:"pgzero/A-examples/asteroids/index",id:"pgzero/A-examples/asteroids/index",title:"Asteroids",description:"---",source:"@site/docs/pgzero/A-examples/5-asteroids/index.md",sourceDirName:"pgzero/A-examples/5-asteroids",slug:"/pgzero/A-examples/asteroids/",permalink:"/pgzero/A-examples/asteroids/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/pgzero/A-examples/5-asteroids/index.md",tags:[],version:"current",lastUpdatedAt:1674074136,formattedLastUpdatedAt:"18. Jan. 2023",frontMatter:{sidebar_custom_props:{id:"ccbea56e-16af-4567-b6e2-10a1d90db44b",source:{name:"Gym-Kirchenfeld",ref:"https://gitlab.gymkirchenfeld.ch/teach/ref/-/tree/main/pgzero"}}},sidebar:"sidebar",previous:{title:"Push to Hole",permalink:"/pgzero/A-examples/push-to-hole/"},next:{title:"Labyrinth",permalink:"/snippets/maze"}},c={},d=[{value:"Grafiken",id:"grafiken",level:2},{value:"Programm",id:"programm",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=m("Comment"),u=m("Figure"),h={toc:d};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"asteroids"},"Asteroids"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"grafiken"},"Grafiken"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(1682).Z,width:"49",height:"41"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quellen:"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Asteroid: ",(0,r.kt)("a",{parentName:"p",href:"https://opengameart.org/content/asteroid-tileset-01"},"OhjiroChan, OpenGameArt"),", Lizenz: CC0"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Spaceship: ",(0,r.kt)("a",{parentName:"p",href:"https://opengameart.org/content/some-top-down-spaceships"},"Rawdanitsu, OpenGameArt"),", Lizenz: CC0"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Laser and Thrust: ",(0,r.kt)("a",{parentName:"p",href:"https://opengameart.org/content/lasers-and-beams"},"Rawdanitsu, OpenGameArt"),", Lizenz: CC0"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"programm"},"Programm"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)(o.Z,{language:"python",mdxType:"CodeBlock"},'import math\nimport pgzrun\nimport random\n\nTITLE = "Asteroids"\nWIDTH = 1600\nHEIGHT = 1200\n\nACCELERATION = 0.2\nROTATION = 3\nSHOT_SPEED = 5\nSHOT_COOLDOWN = 0.2\nSHOT_DAMAGE = 10\nSHOT_MAX_AGE = 3\n\n\nbackground = Actor("weltraum")\nship = Actor("raumschiff")\nthrust = Actor("raumschiff2")\nthrust.on = False\nasteroids = []\nshots = []\n\n\ndef add_asteroid(parent=None):\n    if parent:\n        category = parent.category - 1\n    else:\n        category = 3\n    asteroid = Actor("asteroid-" + str(category))\n    if parent:\n        asteroid.x = parent.x\n        asteroid.y = parent.y\n    else:\n        asteroid.x = random.randint(0, WIDTH)\n        asteroid.y = random.randint(0, HEIGHT)\n    asteroid.vx = 0\n    asteroid.vy = 0\n    asteroid.category = category\n    asteroid.stability = 30 * category\n    acc = random.randint(1, 2)\n    dir = random.randint(0, 360)\n    accelerate(asteroid, acc, dir)\n    asteroids.append(asteroid)\n\n\ndef enable_shooting():\n    ship.can_shoot = True\n\n\ndef add_shot():\n    shot = Actor("laser")\n    shot.x = ship.x\n    shot.y = ship.y\n    shot.vx = 0\n    shot.vy = 0\n    shot.age = 0\n    shot.angle = ship.angle\n    accelerate(shot, SHOT_SPEED, shot.angle)\n    ship.can_shoot = False\n    clock.schedule_unique(enable_shooting, SHOT_COOLDOWN)\n    shots.append(shot)\n\n\ndef accelerate(actor, acc, dir):\n    a = math.radians(dir)\n    actor.vx = actor.vx + math.cos(a) * acc\n    actor.vy = actor.vy - math.sin(a) * acc\n\n\ndef move(actor):\n    actor.x = actor.x + actor.vx\n    actor.y = actor.y + actor.vy\n    if actor.x > WIDTH:\n        actor.x = 0\n    if actor.x < 0:\n        actor.x = WIDTH\n    if actor.y > HEIGHT:\n        actor.y = 0\n    if actor.y < 0:\n        actor.y = HEIGHT\n\n\ndef reset_game():\n    ship.x = WIDTH / 2\n    ship.y = HEIGHT / 2\n    ship.vx = 0\n    ship.vy = 0\n    ship.angle = 0\n    ship.speed = 0\n    ship.alive = True\n    ship.can_shoot = True\n    asteroids.clear()\n    for i in range(1, 3):\n        add_asteroid()\n\n\ndef update_asteroid(asteroid):\n    move(asteroid)\n    i = asteroid.collidelist(shots)\n    if i != -1:\n        del shots[i]\n        asteroid.stability = asteroid.stability - SHOT_DAMAGE\n    if asteroid.stability <= 0:\n        asteroids.remove(asteroid)\n        if asteroid.category > 1:\n            add_asteroid(asteroid)\n            add_asteroid(asteroid)\n\n\ndef update_shot(shot, dt):\n    move(shot)\n    shot.age = shot.age + dt\n    if shot.age > SHOT_MAX_AGE:\n        shots.remove(shot)\n\n\ndef update(dt):\n    thrust.on = keyboard.up\n    if keyboard.up:\n        accelerate(ship, ACCELERATION, ship.angle)\n    if keyboard.left:\n        ship.angle = ship.angle + ROTATION\n    if keyboard.right:\n        ship.angle = ship.angle - ROTATION\n    if keyboard.space and ship.can_shoot:\n        add_shot()\n    if keyboard.space and not ship.alive:\n        reset_game()\n    move(ship)\n    if ship.collidelist(asteroids) != -1:\n        ship.alive = False\n        ship.can_shoot = False\n    for asteroid in asteroids:\n        update_asteroid(asteroid)\n    for shot in shots:\n        update_shot(shot, dt)\n\n\ndef draw():\n    background.draw()\n    for asteroid in asteroids:\n        asteroid.draw()\n    for shot in shots:\n        shot.draw()\n    if ship.alive:\n        if thrust.on:\n            thrust.x = ship.x\n            thrust.y = ship.y\n            thrust.angle = ship.angle\n            thrust.draw()\n        ship.draw()\n    else:\n        screen.draw.text("GAME OVER", center=(WIDTH / 2, HEIGHT / 2), fontsize=100)\n        screen.draw.text(\n            "Press SPACE to start", center=(WIDTH / 2, HEIGHT / 2 + 60), fontsize=30\n        )\n\n\nreset_game()\npgzrun.go()\n'))}g.isMDXComponent=!0},6645:(e,t,a)=>{a.d(t,{Z:()=>n});const n={wrapper:"wrapper_MnfC",containerBig:"containerBig_Wsxi",controls:"controls_S9py",editor:"editor_UZ3W",result:"result_yCvC",containerSlim:"containerSlim_ovzd",playgroundContainer:"playgroundContainer_aEuH",brythonCodeBlock:"brythonCodeBlock_o4s6",noGutter:"noGutter_uzz5",brythonGraphicsResult:"brythonGraphicsResult_Tsqf",brythonGraphicsResultHead:"brythonGraphicsResultHead_Bgkz",slimStrippedButton:"slimStrippedButton_queU",brythonEditor:"brythonEditor_xYdW",brythonOut:"brythonOut_bacR",brythonCodeBlockHeader:"brythonCodeBlockHeader_t1uS",spacer:"spacer_FWjg",playgroundHeader:"playgroundHeader_amd9",badge:"badge_ISa1",playButton:"playButton_Lym6",headerButton:"headerButton_BRMW",title:"title_Lxg0",showRawButton:"showRawButton_PcEn",showRawButtonDisabled:"showRawButtonDisabled_ti1N",codeHistory:"codeHistory_sMtz",historyDetails:"historyDetails_ER1v",versionControl:"versionControl_OmZD",faButton:"faButton_YF3M",diffViewer:"diffViewer_LJy9"}},1682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/asteroid-1-85b0a3aa9ecaceb774c2d252feb68e34.png"}}]);