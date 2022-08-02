"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8504],{63437:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(51436),r=n(92814),i=n(86010),s=n(14842),o=n(67294);const l={none:a.cNd,copied:a.E9T,error:a.nYk,spin:a.IJ7,ready:a.Yjj},m={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},c=e=>{let{children:t,options:n}=e;const[a,c]=o.useState(void 0),[p,d]=o.useState("none"),u=o.useRef(null);return o.useEffect((()=>{if(["none","spin","ready"].includes(p))return;const e=setTimeout((()=>d("copied"===p?"ready":"none")),2e3);return()=>clearTimeout(e)}),[p]),o.useEffect((()=>{"none"!==p&&d("none")}),[t]),o.createElement(o.Fragment,null,o.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",m[p]),disabled:"spin"===p,onClick:()=>{if(null!==u.current){if("none"===p)return d("spin"),(0,s.SE)(u.current,n).then((e=>{c(e),d("ready")}));if("ready"===p)try{navigator.clipboard.write([new ClipboardItem({"image/png":a})]).then((()=>{d("copied")})).catch((e=>{d("error"),console.warn(e)}))}catch(e){console.warn(e),d("error")}}}},o.createElement(r.G,{icon:l[p]})),o.createElement("div",{ref:u,className:"copy-container"},t))}},66557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>le,contentTitle:()=>se,default:()=>ue,frontMatter:()=>ie,metadata:()=>oe,toc:()=>me});var a=n(83117),r=n(67294),i=n(3905),s=n(51436),o=n(92814),l=n(86010);const m=e=>{if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;const t=Math.floor(Math.sqrt(e));for(let n=5;n<=t;n+=6)if(e%n==0||e%(n+2)==0)return!1;return!0},c=(e,t)=>{if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);const n=(t=Math.floor(t))-e+1,a=Math.floor(Math.random()*n)+e;if(m(a))return a;let r=a-1,i=a+1;for(;r>=e&&i<=t;){if(m(r))return r;if(m(i))return i;r-=1,i+=1}for(;r>=e;){if(m(r))return r;r-=1}for(;i<=t;){if(m(i))return i;i+=1}return null};var p=n(96734),d=n(9253),u=n(90896),h=n(18446),f=n.n(h),y=n(23560),g=n.n(y),k=n(14293),N=n.n(k),b=n(74524),v=n(94184),w=n.n(v),x=n(48710),A=n(2763),E=n(52017),S=n(47523),z=function(){return null};z.displayName="ZAxis",z.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var P=n(33508),M=n(36353),_=n(86641),C=n(43815),K=n(69055),O=n(77718),I=n(79896);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=G(e);if(t){var r=G(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(s,e);var t,n,a,i=R(s);function s(){var e;Z(this,s);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=i.call.apply(i,[this].concat(n))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,K.EL)("recharts-scatter-"),e}return t=s,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var n;return r.isValidElement(e)?n=r.cloneElement(e,t):g()(e)?n=e(t):"string"==typeof e&&(n=r.createElement(M.v,T({},t,{type:e}))),n}}],(n=[{key:"renderSymbolsStatically",value:function(e){var t=this,n=this.props,a=n.shape,i=n.activeShape,o=n.activeIndex,l=(0,I.L6)(this.props);return e.map((function(e,n){var m=L(L({key:"symbol-".concat(n)},l),e);return r.createElement(x.m,T({className:"recharts-scatter-symbol"},(0,I.bw)(t.props,e,n),{key:"symbol-".concat(n)}),s.renderSymbolItem(o===n?i:a,m))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,n=t.points,a=t.isAnimationActive,i=t.animationBegin,s=t.animationDuration,o=t.animationEasing,l=t.animationId,m=this.state.prevPoints;return r.createElement(b.ZP,{begin:i,duration:s,isActive:a,easing:o,from:{t:0},to:{t:1},key:"pie-".concat(l),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var a=t.t,i=n.map((function(e,t){var n=m&&m[t];if(n){var r=(0,K.k4)(n.cx,e.cx),i=(0,K.k4)(n.cy,e.cy),s=(0,K.k4)(n.size,e.size);return L(L({},e),{},{cx:r(a),cy:i(a),size:s(a)})}var o=(0,K.k4)(0,e.size);return L(L({},e),{},{size:o(a)})}));return r.createElement(x.m,null,e.renderSymbolsStatically(i))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,n=e.isAnimationActive,a=this.state.prevPoints;return!(n&&t&&t.length)||a&&f()(a,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,n=e.xAxis,a=e.yAxis,i=e.children,s=(0,E.NN)(i,_.W.displayName);if(!s)return null;function o(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,O.F$)(e,t)}}function l(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,O.F$)(e,t)}}return s.map((function(e,i){var s=e.props.direction;return r.cloneElement(e,{key:i,data:t,xAxis:n,yAxis:a,layout:"x"===s?"vertical":"horizontal",dataPointFormatter:"x"===s?l:o})}))}},{key:"renderLine",value:function(){var e,t,n=this.props,a=n.points,i=n.line,s=n.lineType,o=n.lineJointType,l=(0,I.L6)(this.props),m=(0,I.L6)(i);if("joint"===s)e=a.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===s){var c=(0,K.wr)(a),p=c.xmin,d=c.xmax,u=c.a,h=c.b,f=function(e){return u*e+h};e=[{x:p,y:f(p)},{x:d,y:f(d)}]}var y=L(L(L({},l),{},{fill:"none",stroke:l&&l.fill},m),{},{points:e});return t=r.isValidElement(i)?r.cloneElement(i,y):g()(i)?i(y):r.createElement(P.H,T({},y,{type:o})),r.createElement(x.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.points,a=e.line,i=e.className,s=e.xAxis,o=e.yAxis,l=e.left,m=e.top,c=e.width,p=e.height,d=e.id,u=e.isAnimationActive;if(t||!n||!n.length)return null;var h=this.state.isAnimationFinished,f=w()("recharts-scatter",i),y=s&&s.allowDataOverflow||o&&o.allowDataOverflow,g=N()(d)?this.id:d;return r.createElement(x.m,{className:f,clipPath:y?"url(#clipPath-".concat(g,")"):null},y?r.createElement("defs",null,r.createElement("clipPath",{id:"clipPath-".concat(g)},r.createElement("rect",{x:l,y:m,width:c,height:p}))):null,a&&this.renderLine(),this.renderErrorBar(),r.createElement(x.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!u||h)&&A.e.renderCallByParent(this.props,n))}}])&&D(t.prototype,n),a&&D(t,a),s}(r.PureComponent);W.displayName="Scatter",W.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!S.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},W.getComposedData=function(e){var t=e.xAxis,n=e.yAxis,a=e.zAxis,r=e.item,i=e.displayedData,s=e.xAxisTicks,o=e.yAxisTicks,l=e.offset,m=r.props.tooltipType,c=(0,E.NN)(r.props.children,C.b.displayName),p=N()(t.dataKey)?r.props.dataKey:t.dataKey,d=N()(n.dataKey)?r.props.dataKey:n.dataKey,u=a&&a.dataKey,h=a?a.range:z.defaultProps.range,f=h&&h[0],y=t.scale.bandwidth?t.scale.bandwidth():0,g=n.scale.bandwidth?n.scale.bandwidth():0,k=i.map((function(e,i){var l=(0,O.F$)(e,p),h=(0,O.F$)(e,d),k=!N()(u)&&(0,O.F$)(e,u)||"-",b=[{name:N()(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:l,payload:e,dataKey:p,type:m},{name:N()(n.dataKey)?r.props.name:n.name||n.dataKey,unit:n.unit||"",value:h,payload:e,dataKey:d,type:m}];"-"!==k&&b.push({name:a.name||a.dataKey,unit:a.unit||"",value:k,payload:e,dataKey:u,type:m});var v=(0,O.Hv)({axis:t,ticks:s,bandSize:y,entry:e,index:i,dataKey:p}),w=(0,O.Hv)({axis:n,ticks:o,bandSize:g,entry:e,index:i,dataKey:d}),x="-"!==k?a.scale(k):f,A=Math.sqrt(Math.max(x,0)/Math.PI);return L(L({},e),{},{cx:v,cy:w,x:v-A,y:w-A,xAxis:t,yAxis:n,zAxis:a,width:2*A,height:2*A,size:x,node:{x:l,y:h,z:k},tooltipPayload:b,tooltipPosition:{x:v,y:w},payload:e},c&&c[i]&&c[i].props)}));return L({points:k},l)};var J=n(3023),U=n(75358),$=n(97187),X=(0,u.z)({chartName:"ScatterChart",GraphicalChild:W,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:J.K},{axisType:"yAxis",AxisComp:U.B},{axisType:"zAxis",AxisComp:z}],formatAxisMap:$.t9}),q=n(14195),Q=n(14888),Y=n(63437);const ee=e=>r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.default)(p.Z.stage)},r.createElement("h4",null,e.label),r.createElement("span",{style:{flexGrow:1}}),r.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},r.createElement(o.G,{icon:s.zc,color:"white"}))),r.createElement("div",{className:(0,l.default)(p.Z.result)},e.result.calculations.map(((e,t)=>r.createElement("span",{className:(0,l.default)("badge","badge--secondary",p.Z.badge),key:t},e))),r.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&r.createElement("span",{className:(0,l.default)("badge","badge--success",p.Z.badge)},r.createElement(o.G,{icon:s.SZw})," ",e.result.time_ms.toFixed(1)," ms"))),te=e=>e.toLocaleString().replace(/[\.,]/g,"'"),ne={calculations:[]},ae=e=>{if(e<1e3)return e;const t=(""+e).length-1,n=(""+e).replace(/0*$/,""),a=n.slice(0,1),r=n.slice(1);return"1"===a?"10^"+t:r?n.slice(0,1)+"."+n.slice(1)+"\xb710^"+t:n.slice(0,1)+"\xb710^"+t},re=()=>{const[e,t]=r.useState(6),[n,a]=r.useState([0,0]),[i,s]=r.useState(0),[o,m]=r.useState(0),[u,h]=r.useState(0),[f,y]=r.useState(-1),[g,k]=r.useState([]),[N,b]=r.useState(0),[v,w]=r.useState(-1),[x,A]=r.useState(-1),[E,S]=r.useState(0),[z,P]=r.useState(0),[M,_]=r.useState(!1);r.useRef(null);r.useEffect((()=>{s(0),e<8?a([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("5".padEnd(e+1,"0"),10)]):8===e&&a([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("1".padEnd(e+1,"0"),10)])}),[e]),r.useEffect((()=>{3===i&&k([...g,{product:N,time:x}])}),[i]);return r.createElement("div",{className:(0,l.default)("hero","shadow--lw",p.Z.container,p.Z.factorization)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",r.createElement("div",{className:(0,l.default)("button-group",p.Z.digits)},r.createElement("button",{className:(0,l.default)("button","button--sm","button--outline","button--primary",6===e&&"button--active"),onClick:()=>t(6)},"6"),r.createElement("button",{className:(0,l.default)("button","button--sm","button--outline","button--primary",7===e&&"button--active"),onClick:()=>t(7)},"7"),r.createElement("button",{className:(0,l.default)("button","button--sm","button--outline","button--primary",8===e&&"button--active"),onClick:()=>t(8)},"8")),"Stellen",r.createElement(ee,{onStage:()=>{const e=window.performance.now(),t=c(n[0],n[1]),a=c(n[0],n[1]);m(Math.min(t,a)),h(Math.max(t,a));const r=window.performance.now()-e;y(r),s(1)},label:"Zwei Primzahlen zwische "+te(n[0])+" und "+te(n[1])+" w\xe4hlen",result:i>0?{calculations:[te(o),te(u)],time_ms:f}:ne}),i>0&&r.createElement(ee,{onStage:()=>{const e=window.performance.now();b(o*u);const t=window.performance.now()-e;w(t),s(2)},label:"Primzahlprodukt berechnen: "+te(o)+" * "+te(u),result:i>1?{calculations:[te(N)],time_ms:v}:ne}),i>1&&r.createElement(ee,{onStage:()=>{A(-1);const e=window.performance.now();let t=2;for(;t<N;){const e=N/t;if(e%1==0){S(t),P(e);break}2===t?t++:t+=2}const n=window.performance.now()-e;A(n),s(3)},label:"Primzahlen faktorisieren",result:i>2?{calculations:[te(E),te(z)],time_ms:x}:ne}),g.length>0&&r.createElement("div",{style:{width:"100%",overflow:"auto"}},r.createElement(Y.Z,null,r.createElement(d.h,{width:"100%",height:400},r.createElement(X,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},r.createElement(q.q,null),r.createElement(J.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:ae,angle:40,textAnchor:"start"}),r.createElement(U.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),r.createElement(Q.u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(W,{name:"Mesurements",data:g,fill:"#8884d8"})))))))},ie={title:"Asymmetrie"},se="Asymmetrie [^1]",oe={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"Kryptologie/Asymmetrisch/asymmetrie",title:"Asymmetrie",description:"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:",source:"@site/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/Kryptologie/Asymmetrisch/asymmetrie",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",tags:[],version:"current",lastUpdatedAt:1659430238,formattedLastUpdatedAt:"2. Aug. 2022",sidebarPosition:3,frontMatter:{title:"Asymmetrie"},sidebar:"sidebar",previous:{title:"Geheime Farbe",permalink:"/Kryptologie/Asymmetrisch/secret-color"},next:{title:"Asymm. Verschl\xfcsselung",permalink:"/Kryptologie/Asymmetrisch/asymm-encryption"}},le={},me=[{value:"Ein mathematisches Problem dieser Art",id:"ein-mathematisches-problem-dieser-art",level:2}],ce=(pe="Answer",function(e){return console.warn("Component "+pe+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var pe;const de={toc:me};function ue(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},de,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"asymmetrie-"},"Asymmetrie ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"einfacher Vorgang"),(0,i.kt)("th",{parentName:"tr",align:"left"},"aufw\xe4ndiger/schwieriger Vorgang"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"offenes B\xfcgelschloss schliessen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"B\xfcgelschloss ohne Schl\xfcssel \xf6ffnen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben mischen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben trennen")))),(0,i.kt)("p",null,"Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschl\xfcsselung basiert:"),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"asymmetrische-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Asymmetrische Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die asymmetrische Verschl\xfcsselung basiert auf Aufgaben, die in eine Richtung einfach auszuf\xfchren sind, w\xe4hrend man eine geheime Information braucht, um den Vorgang r\xfcckg\xe4ngig zu machen."),(0,i.kt)("p",{parentName:"div"},"Verf\xfcgt jemand nicht \xfcber diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bew\xe4ltigen."))),(0,i.kt)("h2",{id:"ein-mathematisches-problem-dieser-art"},"Ein mathematisches Problem dieser Art"),(0,i.kt)("p",null,"Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuf\xfchren sind. Die Umkehrung jedoch ist selbst f\xfcr einen Computer aufw\xe4ndig und kann Jahre dauern."),(0,i.kt)("p",null,"Ein Beispiel daf\xfcr ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausf\xfchren. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufw\xe4ndiger \u2013 insbesondere wenn die Zahlen mehrere hundert Stellen lang sind."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"multiplizieren-vs-faktorisieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Multiplizieren vs. Faktorisieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Berechnen Sie ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"41"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"83")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"41 \\cdot 83")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," auf Papier. \xdcberlegen Sie sich dabei, wie Sie vorgehen."),(0,i.kt)("li",{parentName:"ol"},"Schaffen Sie es, die Zahl ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3397")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3397")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7")))))," in ihre zwei Primfaktoren zu zerlegen? Und ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1117")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1117")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7"))))),"? Wie k\xf6nnte man dabei vorgehen?")))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufwand-f\xfcr-den-computer"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufwand f\xfcr den Computer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit ",(0,i.kt)("inlineCode",{parentName:"li"},"6"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"7")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen einige (>3) Messungen vor."),(0,i.kt)("li",{parentName:"ol"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,i.kt)("li",{parentName:"ol"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," Stellen mehrere mehrere hundert Stellen lang sind?")),(0,i.kt)(ce,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"}))),(0,i.kt)(re,{mdxType:"PrimfactorizationTiming"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=792141"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}ue.isMDXComponent=!0},96734:(e,t,n)=>{n.d(t,{Z:()=>a});const a={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}}}]);