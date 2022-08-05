"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8504],{63437:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(51436),r=a(92814),i=a(86010),s=a(14842),o=a(67294);const m={none:n.cNd,copied:n.E9T,error:n.nYk,spin:n.IJ7,ready:n.Yjj},l={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},p=e=>{let{children:t,options:a}=e;const[n,p]=o.useState(void 0),[c,d]=o.useState("none"),u=o.useRef(null);return o.useEffect((()=>{if(["none","spin","ready"].includes(c))return;const e=setTimeout((()=>d("copied"===c?"ready":"none")),2e3);return()=>clearTimeout(e)}),[c]),o.useEffect((()=>{"none"!==c&&d("none")}),[t]),o.createElement(o.Fragment,null,o.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",l[c]),disabled:"spin"===c,onClick:()=>{if(null!==u.current){if("none"===c)return d("spin"),(0,s.SE)(u.current,a).then((e=>{p(e),d("ready")}));if("ready"===c)try{navigator.clipboard.write([new ClipboardItem({"image/png":n})]).then((()=>{d("copied")})).catch((e=>{d("error"),console.warn(e)}))}catch(e){console.warn(e),d("error")}}}},o.createElement(r.G,{icon:m[c]})),o.createElement("div",{ref:u,className:"copy-container"},t))}},66557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>me,contentTitle:()=>se,default:()=>he,frontMatter:()=>ie,metadata:()=>oe,toc:()=>le});var n=a(83117),r=a(67294),i=a(3905),s=a(51436),o=a(92814),m=a(86010);const l=e=>{if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;const t=Math.floor(Math.sqrt(e));for(let a=5;a<=t;a+=6)if(e%a==0||e%(a+2)==0)return!1;return!0},p=(e,t)=>{if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);const a=(t=Math.floor(t))-e+1,n=Math.floor(Math.random()*a)+e;if(l(n))return n;let r=n-1,i=n+1;for(;r>=e&&i<=t;){if(l(r))return r;if(l(i))return i;r-=1,i+=1}for(;r>=e;){if(l(r))return r;r-=1}for(;i<=t;){if(l(i))return i;i+=1}return null};var c=a(96734),d=a(9253),u=a(90896),h=a(18446),f=a.n(h),y=a(23560),N=a.n(y),g=a(14293),k=a.n(g),v=a(74524),b=a(94184),w=a.n(b),x=a(48710),A=a(2763),E=a(52017),S=a(47523),z=function(){return null};z.displayName="ZAxis",z.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var P=a(33508),C=a(36353),_=a(86641),M=a(43815),T=a(69055),K=a(77718),O=a(79896);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){V(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=G(e);if(t){var r=G(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return H(this,a)}}function H(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(s,e);var t,a,n,i=R(s);function s(){var e;Z(this,s);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=i.call.apply(i,[this].concat(a))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,T.EL)("recharts-scatter-"),e}return t=s,n=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var a;return r.isValidElement(e)?a=r.cloneElement(e,t):N()(e)?a=e(t):"string"==typeof e&&(a=r.createElement(C.v,j({},t,{type:e}))),a}}],(a=[{key:"renderSymbolsStatically",value:function(e){var t=this,a=this.props,n=a.shape,i=a.activeShape,o=a.activeIndex,m=(0,O.L6)(this.props);return e.map((function(e,a){var l=L(L({key:"symbol-".concat(a)},m),e);return r.createElement(x.m,j({className:"recharts-scatter-symbol"},(0,O.bw)(t.props,e,a),{key:"symbol-".concat(a)}),s.renderSymbolItem(o===a?i:n,l))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,a=t.points,n=t.isAnimationActive,i=t.animationBegin,s=t.animationDuration,o=t.animationEasing,m=t.animationId,l=this.state.prevPoints;return r.createElement(v.ZP,{begin:i,duration:s,isActive:n,easing:o,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var n=t.t,i=a.map((function(e,t){var a=l&&l[t];if(a){var r=(0,T.k4)(a.cx,e.cx),i=(0,T.k4)(a.cy,e.cy),s=(0,T.k4)(a.size,e.size);return L(L({},e),{},{cx:r(n),cy:i(n),size:s(n)})}var o=(0,T.k4)(0,e.size);return L(L({},e),{},{size:o(n)})}));return r.createElement(x.m,null,e.renderSymbolsStatically(i))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,a=e.isAnimationActive,n=this.state.prevPoints;return!(a&&t&&t.length)||n&&f()(n,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,a=e.xAxis,n=e.yAxis,i=e.children,s=(0,E.NN)(i,_.W.displayName);if(!s)return null;function o(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,K.F$)(e,t)}}function m(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,K.F$)(e,t)}}return s.map((function(e,i){var s=e.props.direction;return r.cloneElement(e,{key:i,data:t,xAxis:a,yAxis:n,layout:"x"===s?"vertical":"horizontal",dataPointFormatter:"x"===s?m:o})}))}},{key:"renderLine",value:function(){var e,t,a=this.props,n=a.points,i=a.line,s=a.lineType,o=a.lineJointType,m=(0,O.L6)(this.props),l=(0,O.L6)(i);if("joint"===s)e=n.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===s){var p=(0,T.wr)(n),c=p.xmin,d=p.xmax,u=p.a,h=p.b,f=function(e){return u*e+h};e=[{x:c,y:f(c)},{x:d,y:f(d)}]}var y=L(L(L({},m),{},{fill:"none",stroke:m&&m.fill},l),{},{points:e});return t=r.isValidElement(i)?r.cloneElement(i,y):N()(i)?i(y):r.createElement(P.H,j({},y,{type:o})),r.createElement(x.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,a=e.points,n=e.line,i=e.className,s=e.xAxis,o=e.yAxis,m=e.left,l=e.top,p=e.width,c=e.height,d=e.id,u=e.isAnimationActive;if(t||!a||!a.length)return null;var h=this.state.isAnimationFinished,f=w()("recharts-scatter",i),y=s&&s.allowDataOverflow||o&&o.allowDataOverflow,N=k()(d)?this.id:d;return r.createElement(x.m,{className:f,clipPath:y?"url(#clipPath-".concat(N,")"):null},y?r.createElement("defs",null,r.createElement("clipPath",{id:"clipPath-".concat(N)},r.createElement("rect",{x:m,y:l,width:p,height:c}))):null,n&&this.renderLine(),this.renderErrorBar(),r.createElement(x.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!u||h)&&A.e.renderCallByParent(this.props,a))}}])&&D(t.prototype,a),n&&D(t,n),s}(r.PureComponent);W.displayName="Scatter",W.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!S.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},W.getComposedData=function(e){var t=e.xAxis,a=e.yAxis,n=e.zAxis,r=e.item,i=e.displayedData,s=e.xAxisTicks,o=e.yAxisTicks,m=e.offset,l=r.props.tooltipType,p=(0,E.NN)(r.props.children,M.b.displayName),c=k()(t.dataKey)?r.props.dataKey:t.dataKey,d=k()(a.dataKey)?r.props.dataKey:a.dataKey,u=n&&n.dataKey,h=n?n.range:z.defaultProps.range,f=h&&h[0],y=t.scale.bandwidth?t.scale.bandwidth():0,N=a.scale.bandwidth?a.scale.bandwidth():0,g=i.map((function(e,i){var m=(0,K.F$)(e,c),h=(0,K.F$)(e,d),g=!k()(u)&&(0,K.F$)(e,u)||"-",v=[{name:k()(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:m,payload:e,dataKey:c,type:l},{name:k()(a.dataKey)?r.props.name:a.name||a.dataKey,unit:a.unit||"",value:h,payload:e,dataKey:d,type:l}];"-"!==g&&v.push({name:n.name||n.dataKey,unit:n.unit||"",value:g,payload:e,dataKey:u,type:l});var b=(0,K.Hv)({axis:t,ticks:s,bandSize:y,entry:e,index:i,dataKey:c}),w=(0,K.Hv)({axis:a,ticks:o,bandSize:N,entry:e,index:i,dataKey:d}),x="-"!==g?n.scale(g):f,A=Math.sqrt(Math.max(x,0)/Math.PI);return L(L({},e),{},{cx:b,cy:w,x:b-A,y:w-A,xAxis:t,yAxis:a,zAxis:n,width:2*A,height:2*A,size:x,node:{x:m,y:h,z:g},tooltipPayload:v,tooltipPosition:{x:b,y:w},payload:e},p&&p[i]&&p[i].props)}));return L({points:g},m)};var J=a(3023),U=a(75358),$=a(97187),X=(0,u.z)({chartName:"ScatterChart",GraphicalChild:W,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:J.K},{axisType:"yAxis",AxisComp:U.B},{axisType:"zAxis",AxisComp:z}],formatAxisMap:$.t9}),q=a(14195),Q=a(14888),Y=a(63437);const ee=e=>r.createElement(r.Fragment,null,r.createElement("div",{className:(0,m.default)(c.Z.stage)},r.createElement("h4",null,e.label),r.createElement("span",{style:{flexGrow:1}}),r.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},r.createElement(o.G,{icon:s.zc,color:"white"}))),r.createElement("div",{className:(0,m.default)(c.Z.result)},e.result.calculations.map(((e,t)=>r.createElement("span",{className:(0,m.default)("badge","badge--secondary",c.Z.badge),key:t},e))),r.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&r.createElement("span",{className:(0,m.default)("badge","badge--success",c.Z.badge)},r.createElement(o.G,{icon:s.SZw})," ",e.result.time_ms.toFixed(1)," ms"))),te=e=>e.toLocaleString().replace(/[\.,]/g,"'"),ae={calculations:[]},ne=e=>{if(e<1e3)return e;const t=(""+e).length-1,a=(""+e).replace(/0*$/,""),n=a.slice(0,1),r=a.slice(1);return"1"===n?"10^"+t:r?a.slice(0,1)+"."+a.slice(1)+"\xb710^"+t:a.slice(0,1)+"\xb710^"+t},re=()=>{const[e,t]=r.useState(6),[a,n]=r.useState([0,0]),[i,s]=r.useState(0),[o,l]=r.useState(0),[u,h]=r.useState(0),[f,y]=r.useState(-1),[N,g]=r.useState([]),[k,v]=r.useState(0),[b,w]=r.useState(-1),[x,A]=r.useState(-1),[E,S]=r.useState(0),[z,P]=r.useState(0),[C,_]=r.useState(!1);r.useRef(null);r.useEffect((()=>{s(0),e<8?n([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("5".padEnd(e+1,"0"),10)]):8===e&&n([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("1".padEnd(e+1,"0"),10)])}),[e]),r.useEffect((()=>{3===i&&g([...N,{product:k,time:x}])}),[i]);return r.createElement("div",{className:(0,m.default)("hero","shadow--lw",c.Z.container,c.Z.factorization)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",r.createElement("div",{className:(0,m.default)("button-group",c.Z.digits)},r.createElement("button",{className:(0,m.default)("button","button--sm","button--outline","button--primary",6===e&&"button--active"),onClick:()=>t(6)},"6"),r.createElement("button",{className:(0,m.default)("button","button--sm","button--outline","button--primary",7===e&&"button--active"),onClick:()=>t(7)},"7"),r.createElement("button",{className:(0,m.default)("button","button--sm","button--outline","button--primary",8===e&&"button--active"),onClick:()=>t(8)},"8")),"Stellen",r.createElement(ee,{onStage:()=>{const e=window.performance.now(),t=p(a[0],a[1]),n=p(a[0],a[1]);l(Math.min(t,n)),h(Math.max(t,n));const r=window.performance.now()-e;y(r),s(1)},label:"Zwei Primzahlen zwische "+te(a[0])+" und "+te(a[1])+" w\xe4hlen",result:i>0?{calculations:[te(o),te(u)],time_ms:f}:ae}),i>0&&r.createElement(ee,{onStage:()=>{const e=window.performance.now();v(o*u);const t=window.performance.now()-e;w(t),s(2)},label:"Primzahlprodukt berechnen: "+te(o)+" * "+te(u),result:i>1?{calculations:[te(k)],time_ms:b}:ae}),i>1&&r.createElement(ee,{onStage:()=>{A(-1);const e=window.performance.now();let t=2;for(;t<k;){const e=k/t;if(e%1==0){S(t),P(e);break}2===t?t++:t+=2}const a=window.performance.now()-e;A(a),s(3)},label:"Primzahlen faktorisieren",result:i>2?{calculations:[te(E),te(z)],time_ms:x}:ae}),N.length>0&&r.createElement("div",{style:{width:"100%",overflow:"auto"}},r.createElement(Y.Z,null,r.createElement(d.h,{width:"100%",height:400},r.createElement(X,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},r.createElement(q.q,null),r.createElement(J.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:ne,angle:40,textAnchor:"start"}),r.createElement(U.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),r.createElement(Q.u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(W,{name:"Mesurements",data:N,fill:"#8884d8"})))))))},ie={title:"Asymmetrie",sidebar_custom_props:{id:"c0387f92-5a73-4431-b9ea-348fec74334b"}},se="Asymmetrie [^1]",oe={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"Kryptologie/Asymmetrisch/asymmetrie",title:"Asymmetrie",description:"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:",source:"@site/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/Kryptologie/Asymmetrisch/asymmetrie",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",tags:[],version:"current",lastUpdatedAt:1659530664,formattedLastUpdatedAt:"3. Aug. 2022",sidebarPosition:3,frontMatter:{title:"Asymmetrie",sidebar_custom_props:{id:"c0387f92-5a73-4431-b9ea-348fec74334b"}},sidebar:"sidebar",previous:{title:"Geheime Farbe",permalink:"/Kryptologie/Asymmetrisch/secret-color"},next:{title:"Asymm. Verschl\xfcsselung",permalink:"/Kryptologie/Asymmetrisch/asymm-encryption"}},me={},le=[{value:"Ein mathematisches Problem dieser Art",id:"ein-mathematisches-problem-dieser-art",level:2}],pe=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},ce=pe("Comment"),de=pe("Answer"),ue={toc:le};function he(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},ue,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h1",{parentName:"div",id:"asymmetrie-"},"Asymmetrie ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)(ce,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:"),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("table",{parentName:"div"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"einfacher Vorgang"),(0,i.kt)("th",{parentName:"tr",align:"left"},"aufw\xe4ndiger/schwieriger Vorgang"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"offenes B\xfcgelschloss schliessen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"B\xfcgelschloss ohne Schl\xfcssel \xf6ffnen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben mischen"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Farben trennen")))),(0,i.kt)(ce,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschl\xfcsselung basiert:"),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-finding alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"asymmetrische-verschl\xfcsselung"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Asymmetrische Verschl\xfcsselung")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Die asymmetrische Verschl\xfcsselung basiert auf Aufgaben, die in eine Richtung einfach auszuf\xfchren sind, w\xe4hrend man eine geheime Information braucht, um den Vorgang r\xfcckg\xe4ngig zu machen."),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,i.kt)("div",{parentName:"div",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Verf\xfcgt jemand nicht \xfcber diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bew\xe4ltigen."),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("h2",{parentName:"div",id:"ein-mathematisches-problem-dieser-art"},"Ein mathematisches Problem dieser Art"),(0,i.kt)(ce,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuf\xfchren sind. Die Umkehrung jedoch ist selbst f\xfcr einen Computer aufw\xe4ndig und kann Jahre dauern."),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,i.kt)("div",{className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Ein Beispiel daf\xfcr ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausf\xfchren. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufw\xe4ndiger \u2013 insbesondere wenn die Zahlen mehrere hundert Stellen lang sind."),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"multiplizieren-vs-faktorisieren"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Multiplizieren vs. Faktorisieren")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Berechnen Sie ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"41"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"83")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"41 \\cdot 83")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"8"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," auf Papier. \xdcberlegen Sie sich dabei, wie Sie vorgehen."),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Schaffen Sie es, die Zahl ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3397")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3397")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7")))))," in ihre zwei Primfaktoren zu zerlegen? Und ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1117")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1117")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"7"))))),"? Wie k\xf6nnte man dabei vorgehen?"),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"aufwand-f\xfcr-den-computer"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufwand f\xfcr den Computer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit ",(0,i.kt)("inlineCode",{parentName:"p"},"6"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," Stellen einige (>3) Messungen vor."),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," Stellen mehrere mehrere hundert Stellen lang sind?"),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))),(0,i.kt)(de,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"}))),(0,i.kt)(re,{mdxType:"PrimfactorizationTiming"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("div",{parentName:"li",className:"commentable"},(0,i.kt)("p",{parentName:"div"},"Quelle: ",(0,i.kt)("a",{parentName:"p",href:"https://rothe.io/?b=crypto&p=792141"},"rothe.io")),(0,i.kt)(ce,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}he.isMDXComponent=!0},96734:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}}}]);