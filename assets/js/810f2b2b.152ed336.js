/*! For license information please see 810f2b2b.152ed336.js.LICENSE.txt */
(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[81464],{29566:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>B,contentTitle:()=>T,default:()=>V,frontMatter:()=>z,metadata:()=>D,toc:()=>I});var n=a(83117),r=a(67294),i=a(3905),s=(a(61839),a(86010));const o="container_GwNw",l="A_T38E",d="PUB_yjj_",c="B_c62f",m="MIXA_Gd8i",u="MIXB_CGO5",p="PRIVA_myYZ",h="PRIVB_yZfW",g="colorPicker_gndF",v="colorBucket_vssC",b="mixed_mKvb",f="caption__7Oz";var k=a(46910),N=a.n(k),y=a(48521);const w=180/Math.PI,E=e=>{const t=e%360;return t<0?360+t:t},S=()=>{};class x{constructor(e,t){this.active=!1,this.element=e,this.element.style.willChange="transform",this.initOptions(t),this.updateCSS(),this.bindHandlers(),this.addListeners()}get angle(){return this._angle}set angle(e){this._angle!==e&&(this._angle=E(e),this.updateCSS())}initOptions(e){e=e||{},this.onRotate=e.onRotate||S,this.onDragStart=e.onDragStart||S,this.onDragStop=e.onDragStop||S,this._angle=e.angle||0}bindHandlers(){this.onRotationStart=this.onRotationStart.bind(this),this.onRotated=this.onRotated.bind(this),this.onRotationStop=this.onRotationStop.bind(this)}addListeners(){this.element.addEventListener("touchstart",this.onRotationStart,{passive:!0}),document.addEventListener("touchmove",this.onRotated,{passive:!1}),document.addEventListener("touchend",this.onRotationStop,{passive:!0}),document.addEventListener("touchcancel",this.onRotationStop,{passive:!0}),this.element.addEventListener("mousedown",this.onRotationStart,{passive:!0}),document.addEventListener("mousemove",this.onRotated,{passive:!1}),document.addEventListener("mouseup",this.onRotationStop,{passive:!0}),document.addEventListener("mouseleave",this.onRotationStop,{passive:!1})}removeListeners(){this.element.removeEventListener("touchstart",this.onRotationStart),document.removeEventListener("touchmove",this.onRotated),document.removeEventListener("touchend",this.onRotationStop),document.removeEventListener("touchcancel",this.onRotationStop),this.element.removeEventListener("mousedown",this.onRotationStart),document.removeEventListener("mousemove",this.onRotated),document.removeEventListener("mouseup",this.onRotationStop),document.removeEventListener("mouseleave",this.onRotationStop)}destroy(){this.onRotationStop(),this.removeListeners()}onRotationStart(e){"touchstart"!==e.type&&0!==e.button||(this.active=!0,this.onDragStart(e),this.setAngleFromEvent(e))}onRotationStop(){this.active&&(this.active=!1,this.onDragStop()),this.active=!1}onRotated(e){this.active&&(e.preventDefault(),this.setAngleFromEvent(e))}setAngleFromEvent(e){const t=e.targetTouches?e.targetTouches[0]:e,a=(({x:e,y:t},a)=>{const n=a.left+a.width/2,r=a.top+a.height/2;return Math.atan2(t-r,e-n)*w})({x:t.clientX,y:t.clientY},this.element.getBoundingClientRect());this._angle=E(a+90),this.updateCSS(),this.onRotate(this._angle)}updateCSS(){this.element.style.transform="rotate("+this._angle+"deg)"}}const M=()=>{},C=["red","yellow","green","cyan","blue","magenta","red"],_={ArrowUp:(e,t)=>e+t,ArrowRight:(e,t)=>e+t,ArrowDown:(e,t)=>e-t,ArrowLeft:(e,t)=>e-t,PageUp:(e,t)=>e+10*t,PageDown:(e,t)=>e-10*t,Home:()=>0,End:()=>359},F=({hue:e=0,saturation:t=100,luminosity:a=50,alpha:n=1,disabled:i=!1,step:s=1,variant:o="collapsible",initiallyCollapsed:l=!1,mouseScroll:d=!1,ariaLabelColorWell:c="color well",onInput:m=M,onChange:u=M,onSelect:p=M,className:h,...g})=>{const v=(0,r.useRef)(null),b=(0,r.useRef)(null),f=(0,r.useRef)(null),k=(0,r.useRef)(null),N=(0,r.useRef)(e),[w,E]=(0,r.useState)(e),[S,F]=(0,r.useState)(!l),[R,A]=(0,r.useState)(!l),[L,z]=(0,r.useState)(!1),[T,D]=(0,r.useState)(!1),[B,I]=(0,r.useState)(!1);(0,r.useEffect)((()=>{d&&b.current.addEventListener("wheel",P);return getComputedStyle(v.current).backgroundImage.includes("conic")||function(e,t){const a=t/2,n=Math.sqrt(2)*a,r=Math.PI/180,i=2*Math.PI;e.width=e.height=t;const s=e.getContext("2d"),o=.5*r+.02;s.translate(a,a),s.rotate(-Math.PI/2),s.translate(-a,-a);for(let l=0;l<360;l+=.5){s.fillStyle="hsl("+l+", 100%, 50%)",s.beginPath(),s.moveTo(a,a);const e=l*r,t=Math.min(i,e+o);s.arc(a,a,n,e,t),s.closePath(),s.fill()}}(v.current.firstElementChild,f.current.offsetWidth||280),k.current=new x(b.current,{angle:N.current,onRotate(e){N.current=e,m(e)},onDragStart(){I(!0)},onDragStop(){I(!1),u(N.current)}}),()=>{k.current.destroy(),k.current=null,d&&b.current.removeEventListener("wheel",P)}}),[]),(0,r.useEffect)((()=>{N.current=e,k.current.angle=e}),[e]);const P=e=>{if(L||!S)return;e.preventDefault();const t=e.deltaY>0?k.current.angle+s:k.current.angle-s;k.current.angle=t,N.current=t,m(t),u(t)},j=()=>{z(!0),R&&S?(p(N.current),D(!0)):A(!0)},K="hsla("+N.current+", "+t+"%, "+a+"%, "+n+")",O=["rcp",h,B&&"dragging",i&&"disabled"].filter(Boolean).join(" ");return(0,y.jsxs)("div",{"aria-roledescription":"radial slider","aria-label":"color picker","aria-valuetext":C[Math.round(N.current/60)],...g,"aria-expanded":R,"aria-valuenow":N.current,"aria-disabled":i,"aria-valuemin":0,"aria-valuemax":359,ref:f,role:"slider",className:O,tabIndex:i?-1:0,onKeyUp:e=>{"Enter"===e.key&&e.target===f.current&&j()},onKeyDown:e=>{if(i||L||!S||!(e.key in _))return;e.preventDefault();const t=_[e.key](k.current.angle,s);k.current.angle=t,N.current=t,m(t),u(t)},children:[(0,y.jsx)("div",{ref:v,className:"rcp__palette "+(R?"in":"out"),children:(0,y.jsx)("canvas",{})}),(0,y.jsx)("div",{ref:b,className:"rcp__rotator",style:{pointerEvents:i||L||!S?"none":null,transform:"rotate("+w+"deg)"},children:(0,y.jsx)("div",{className:"rcp__knob "+(S?"in":"out"),onTransitionEnd:()=>{S||A(!1)}})}),(0,y.jsx)("div",{className:("rcp__ripple "+(T?"rippling":"")).trim(),style:{borderColor:K}}),(0,y.jsx)("button",{type:"button",className:("rcp__well "+(L?"pressed":"")).trim(),style:{backgroundColor:K},"aria-label":c,disabled:i,tabIndex:i?-1:0,onAnimationEnd:()=>{"persistent"!==o&&(S?F(!1):(F(!0),A(!0))),D(!1),z(!1)},onClick:j})]})},R=e=>"#"+(16777215^Number("0x1"+e.substring(1))).toString(16).substr(1).toUpperCase(),A=(e,t,a)=>{t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),i=a-n/2,s=0,o=0,l=0;0<=e&&e<60?(s=n,o=r,l=0):60<=e&&e<120?(s=r,o=n,l=0):120<=e&&e<180?(s=0,o=n,l=r):180<=e&&e<240?(s=0,o=r,l=n):240<=e&&e<300?(s=r,o=0,l=n):300<=e&&e<360&&(s=n,o=0,l=r);let d=Math.round(255*(s+i)).toString(16),c=Math.round(255*(o+i)).toString(16),m=Math.round(255*(l+i)).toString(16);return 1==d.length&&(d="0"+s),1==c.length&&(c="0"+o),1==m.length&&(m="0"+l),"#"+d+c+m},L=e=>{const[t,a]=r.useState(60),[n,i]=r.useState("#ffff00"),[k,y]=r.useState(230),[w,E]=r.useState("#ffff00"),[S,x]=r.useState(100),[M,C]=r.useState("#ffff00"),[_,L]=r.useState("#ffff00"),[z,T]=r.useState("#ffff00"),[D,B]=r.useState("#ffff00"),[I,P]=r.useState("#ffff00");return r.useEffect((()=>{i(A(t,100,50))}),[t]),r.useEffect((()=>{E(A(k,100,50))}),[k]),r.useEffect((()=>{C(A(S,100,50))}),[S]),r.useEffect((()=>{L("#"+N().mixColors([n,M]))}),[n,M]),r.useEffect((()=>{T("#"+N().mixColors([w,M]))}),[w,M]),r.useEffect((()=>{const e=N().mixColors([n,M,w]);B("#"+e),P("#"+e)}),[n,M,w]),r.createElement("div",{className:o},r.createElement("div",{className:(0,s.default)(l)},r.createElement(F,{className:(0,s.default)(g,"umami--click--color-exchange-colorpicker"),hue:t,onInput:e=>a(e),initiallyCollapsed:!0}),r.createElement("div",{className:(0,s.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:n,color:R(n)}},"Alice"),"'s Geheimfarbe")),r.createElement("div",{className:(0,s.default)(d)},r.createElement(F,{className:g,hue:S,onInput:e=>x(e),initiallyCollapsed:!0}),r.createElement("div",{className:(0,s.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:M,color:R(M)}},"\xd6ffentlich")," ","Eve \ud83d\udd76")),r.createElement("div",{className:(0,s.default)(c)},r.createElement(F,{className:g,hue:k,onInput:e=>y(e),initiallyCollapsed:!0}),r.createElement("div",{className:(0,s.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:R(w)}},"Bob"),"'s Geheimfarbe")),r.createElement("div",{className:(0,s.default)(m,b)},r.createElement("div",{className:v,style:{background:_}}),r.createElement("div",{className:(0,s.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:n,color:R(n)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:M,color:R(M)}},"\xd6ffentlich"))),r.createElement("div",{className:(0,s.default)(u,b)},r.createElement("div",{className:v,style:{background:z}}),r.createElement("div",{className:(0,s.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:M,color:R(M)}},"\xd6ffentlich"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:R(w)}},"Bob"))),r.createElement("div",{className:(0,s.default)(p,b)},r.createElement("div",{className:v,style:{background:D}}),r.createElement("div",{className:(0,s.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:n,color:R(n)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:z,color:R(z)}},"Mischung"))),r.createElement("div",{className:(0,s.default)(h,b)},r.createElement("div",{className:v,style:{background:I}}),r.createElement("div",{className:(0,s.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:_,color:R(_)}},"Mischung"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:w,color:R(w)}},"Bob"))))},z={sidebar_custom_props:{id:"035b0ee7-407c-4047-90de-10ae0ff2bcff",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=242355"}}},T="Geheime Farbe",D={unversionedId:"Kryptologie/Asymmetrisch/secret-color",id:"Kryptologie/Asymmetrisch/secret-color",title:"Geheime Farbe",description:"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr eine ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage geheim bleiben. Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden.",source:"@site/docs/Kryptologie/04-Asymmetrisch/02-secret-color.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/secret-color",permalink:"/Kryptologie/Asymmetrisch/secret-color",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/02-secret-color.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"035b0ee7-407c-4047-90de-10ae0ff2bcff",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=242355"}}},sidebar:"sidebar",previous:{title:"Schl\xfcsselaustausch",permalink:"/Kryptologie/Asymmetrisch/key-exchange"},next:{title:"Asymmetrie",permalink:"/Kryptologie/Asymmetrisch/asymmetrie"}},B={},I=[{value:"Alice und Bob",id:"alice-und-bob",level:2},{value:"Eve",id:"eve",level:2},{value:"Ausprobieren",id:"ausprobieren",level:2}],P=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},j=P("Comment"),K=P("Answer"),O=P("Figure"),G=P("SourceRef"),H={toc:I};function V(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},H,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"geheime-farbe"},"Geheime Farbe"),(0,i.kt)(j,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr ",(0,i.kt)("strong",{parentName:"p"},"eine")," ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage ",(0,i.kt)("strong",{parentName:"p"},"geheim bleiben"),". Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"alice-und-bob"},"Alice und Bob"),(0,i.kt)(j,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Sie haben eine Idee und gehen wie folgt vor:"),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Alice und Bob mischen sich je in einem Farbk\xfcbel eine pers\xf6nliche, geheime Farbe, die sie niemandem mitteilen (private Farbe genannt)."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Alice w\xe4hlt nun zus\xe4tzlich eine Farbe, die nicht geheim gehalten wird. Sie f\xfcllt zwei grosse Farbk\xfcbel mit dieser Farbe, einen beh\xe4lt sie f\xfcr sich selbst, den anderen schickt sie per Post an Bob (gemeinsame Farbe genannt)."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Im n\xe4chsten Schritt mischen sich Alice und Bob je in einem leeren Farbk\xfcbel eine neue Farbe: Sie nehmen dazu genau dieselbe Menge der eigenen privaten Farbe und der gemeinsamen Farbe. Diese neue Farbe schicken sie sich wieder gegenseitig zu."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Im letzten Schritt nehmen sie zwei Einheiten der soeben erhaltenen Farbe und eine Einheit der privaten Farbe und erhalten die gemeinsame private Farbe, mit der sie die Teile des neuen Kunstwerks bemalen."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"eve"},"Eve"),(0,i.kt)(j,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die neugierige Journalistin Eve m\xf6chte unbedingt wissen, was Alice und Bob aushecken, um noch vor der Vernissage einen exklusiven Zeitungsbericht zu ver\xf6ffentlichen. Daher versucht sie, an die gemeinsame private Farbe zu gelangen. Sie \xfcberwacht die Post und f\xfcllt sich von jeder transportierten Farbe ein wenig in eigene Beh\xe4lter ab."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"ausprobieren"},"Ausprobieren"),(0,i.kt)(j,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"geheime-farbe-herausfinden"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Geheime Farbe herausfinden"),(0,i.kt)(j,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Bestimmen Sie je eine Farbe f\xfcr Alice und Bob und schauen Sie sich die Ergebnisse an."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wieso erhalten Alice und Bob schlussendlich dieselbe Farbe?"),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,i.kt)(K,{type:"text",webKey:"11388720-93d0-403f-94f0-64b6f1ae4752",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"wieso-kennt-eve-die-geheime-farbe-nicht"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Wieso kennt Eve die geheime Farbe nicht?"),(0,i.kt)(j,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich: wieso kann Eve aus den verschickten Farben die geheime Farbe nicht herstellen?"),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,i.kt)(K,{type:"text",webKey:"a627b60d-54bd-4a3e-a870-510d014364cf",mdxType:"Answer"}))),(0,i.kt)(L,{mdxType:"ColorExchange"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("h5",{parentName:"div",id:"\ufe0f-digitale-farben--echte-farben"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2b50\ufe0f Digitale Farben \u2260 Echte Farben"),(0,i.kt)(j,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"}))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Im obigen Modell musste getrickst werden: In der digitalen Welt werden Farben durch die Erzeugung von Lichtwellen unterschiedlicher Wellenl\xe4nge erzeugt. Dabei wird bei der \xdcberlagerung aller Frequenzspektren weisses Licht erzeugt. Dies wird auch ",(0,i.kt)("strong",{parentName:"p"},"additives Farbmodell")," genannt. Im ",(0,i.kt)("strong",{parentName:"p"},"Gegensatz"),' dazu werden Farben in der realen Welt je nach Oberfl\xe4che nur gewisse Wellenl\xe4nfen reflektiert und die anderen werden von der Oberfl\xe4che "verschluckt". Werden mehrere Farben gemischt, f\xfchrt dies dazu, dass alle sichtbaren Wellenl\xe4ngen "verschluckt" werden und daher ein Braun/Schwarz entsteht. Dieses ist das ',(0,i.kt)("strong",{parentName:"p"},"subtraktive Farbmodell"),"."),(0,i.kt)(j,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)(O,{parentName:"div",options:{},mdxType:"Figure"},(0,i.kt)("img",{alt:"digitales (links) und reales (rechts) Farbmodell",src:a(53131).Z,width:"1081",height:"538"}),(0,i.kt)("figcaption",{parentName:"Figure"},(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"digitales (links) und reales (rechts) Farbmodell",(0,i.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,i.kt)(G,{parentName:"figcaption",bib:{author:"networkcaptain",source:"https://imgur.com/t/yellow/H7uboyb",licence:"Imgur",licence_url:"https://imgur.com/tos",edited:!1},mdxType:"SourceRef"}))),(0,i.kt)(j,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))))}V.isMDXComponent=!0},75251:(e,t,a)=>{"use strict";a(27418);var n=a(67294),r=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var n,i={},d=null,c=null;for(n in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:d,ref:c,props:i,_owner:s.current}}t.jsx=d,t.jsxs=d},48521:(e,t,a)=>{"use strict";e.exports=a(75251)},46910:(e,t,a)=>{e.exports=a(89259)},89259:(e,t,a)=>{var n;e=a.nmd(e),function(){function r(e,t){for(var a=0,n=(e=e.concat([])).length;a<n;a++)"object"!=typeof e[a]&&(e[a]={parts:1,color:e[a]}),e[a].parts?e[a].parts:0;if(0==e.length)return"#ffffff";if(1==e.length)return e[0].color;var r=0,s=0,l=0;for(a=0,n=e.length;a<n;a++)for(var c=e[a],u=i(c.color),p=c.ryb?u:d(u),h=0,g=c.parts;h<g;h++)r+=p[0],s+=p[1],l+=p[2];var v,b=Math.max(r,s,l),f=Math.floor(r/b*255),k=Math.floor(s/b*255),N=Math.floor(l/b*255);if(t)v=o([f,k,N]);else{var y=m([f,k,N]);v=o([y[0],y[1],y[2]])}return v}function i(e){e=e.replace("#","");return[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)]}function s(e){var t,a,n,r,i,s=e[0]/255,o=e[1]/255,l=e[2]/255,d=Math.max(s,o,l),c=d-Math.min(s,o,l),m=function(e){return(d-e)/6/c+.5};return 0==c?r=i=0:(i=c/d,t=m(s),a=m(o),n=m(l),s===d?r=n-a:o===d?r=1/3+t-n:l===d&&(r=2/3+a-t),r<0?r+=1:r>1&&(r-=1)),[Math.round(360*r),Math.round(100*i),Math.round(100*d)]}function o(e){var t=Math.round(e[0]).toString(16);t=1==t.length?"0"+t:t;var a=Math.round(e[1]).toString(16);a=1==a.length?"0"+a:a;var n=Math.round(e[2]).toString(16);return t+a+(n=1==n.length?"0"+n:n)}var l={};function d(e){var t=e[0],a=e[1],n=e[2],r=Math.min(t,a,n);t-=r,a-=r,n-=r;var i=Math.max(t,a,n),s=Math.min(t,a);t-=s,a-=s,n&&a&&(n/=2,a/=2),s+=a,n+=a;var o=Math.max(t,s,n);if(o){var l=i/o;t*=l,s*=l,n*=l}return[t+=r,s+=r,n+=r]}function c(e,t,a){return t+e*e*(3-2*e)*(a-t)}function m(e){"string"==typeof e&&(e=i(e));var t,a,n,r,s,o,l,d,m,u=e[0]/255,p=e[1]/255,h=e[2]/255,g=(t=u,a=p,r=c(n=h,1,.163),s=c(n,1,0),o=c(n,1,.5),l=c(n,1,.2),d=c(a,r,s),m=c(a,o,l),Math.ceil(255*c(t,d,m))),v=function(e,t,a){var n=c(a,1,.373),r=c(a,1,.66),i=c(a,0,0),s=c(a,.5,.094),o=c(t,n,r),l=c(t,i,s);return Math.ceil(255*c(e,o,l))}(u,p,h),b=function(e,t,a){var n=c(a,1,.6),r=c(a,0,.2),i=c(a,0,.5),s=c(a,0,0),o=c(t,n,r),l=c(t,i,s);return Math.ceil(255*c(e,o,l))}(u,p,h);return[g,v,b]}l.mixColors=r,l.mixColorsRYB=function(e){for(var t=0,a=e.length;t<a;t++)"object"!=typeof e[t]?e[t]={parts:1,color:e[t],ryb:!0}:e[t].ryb=!0;return r(e,!0)},l.findNearest=function(e,t){var a=t.concat([]);return a.sort((function(t,a){var n=i(t),r=i(a),o=i(e);return n=s(n),r=s(r),o=s(o),Math.sqrt(Math.pow(o[0]-n[0],2)+Math.pow(o[1]-n[1],2)+Math.pow(o[2]-n[2],2))-Math.sqrt(Math.pow(o[0]-r[0],2)+Math.pow(o[1]-r[1],2)+Math.pow(o[2]-r[2],2))})),a[0].replace("#","")},l.hexToRgb=i,l.rgbToHex=o,"undefined"!=typeof window?void 0===(n=function(){return l}.call(t,a,t,e))||(e.exports=n):"undefined"!=typeof window?window.RLColorMixer=l:e&&t&&(e.exports=l),l.ryb2rgb=m,l.ryb2rgbHex=function(e){return o(m(e))}}()},53131:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/color-models-7e7e0e964ddb2129e58215d8002957b0.png"}}]);