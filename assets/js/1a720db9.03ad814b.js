"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[18504],{99938:(e,t,a)=>{a.d(t,{Z:()=>ae});var n=a(51436),r=a(92814),i=a(86010),s=a(67294);const o=e=>{if(e<=3)return e>1;if(e%2==0||e%3==0)return!1;const t=Math.floor(Math.sqrt(e));for(let a=5;a<=t;a+=6)if(e%a==0||e%(a+2)==0)return!1;return!0},m=(e,t)=>{if(!t&&!e)return Number.MIN_SAFE_INTEGER;void 0===t&&(t=e,e=0),e=Math.ceil(e||0);const a=(t=Math.floor(t))-e+1,n=Math.floor(Math.random()*a)+e;if(o(n))return n;let r=n-1,i=n+1;for(;r>=e&&i<=t;){if(o(r))return r;if(o(i))return i;r-=1,i+=1}for(;r>=e;){if(o(r))return r;r-=1}for(;i<=t;){if(o(i))return i;i+=1}return null};var l=a(38134),p=a(9253),c=a(90896),d=a(18446),u=a.n(d),h=a(23560),y=a.n(h),f=a(14293),b=a.n(f),g=a(74524),k=a(94184),N=a.n(k),v=a(48710),w=a(2763),x=a(52017),A=a(47523),E=function(){return null};E.displayName="ZAxis",E.defaultProps={zAxisId:0,range:[64,64],scale:"auto",type:"number"};var S=a(86230),P=a(55247),z=a(86641),C=a(43815),_=a(69055),T=a(38325),K=a(79896);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},O.apply(this,arguments)}function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){F(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return $=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=V(e);if(t){var r=V(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return R(this,a)}}function R(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(i,e);var t,a,n,r=B(i);function i(){var e;Z(this,i);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=r.call.apply(r,[this].concat(a))).state={isAnimationFinished:!1},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0})},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1})},e.id=(0,_.EL)("recharts-scatter-"),e}return t=i,n=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"renderSymbolItem",value:function(e,t){var a;return s.isValidElement(e)?a=s.cloneElement(e,t):y()(e)?a=e(t):"string"==typeof e&&(a=s.createElement(P.v,O({},t,{type:e}))),a}}],(a=[{key:"renderSymbolsStatically",value:function(e){var t=this,a=this.props,n=a.shape,r=a.activeShape,o=a.activeIndex,m=(0,K.L6)(this.props);return e.map((function(e,a){var l=j(j({key:"symbol-".concat(a)},m),e);return s.createElement(v.m,O({className:"recharts-scatter-symbol"},(0,K.bw)(t.props,e,a),{key:"symbol-".concat(a)}),i.renderSymbolItem(o===a?r:n,l))}))}},{key:"renderSymbolsWithAnimation",value:function(){var e=this,t=this.props,a=t.points,n=t.isAnimationActive,r=t.animationBegin,i=t.animationDuration,o=t.animationEasing,m=t.animationId,l=this.state.prevPoints;return s.createElement(g.ZP,{begin:r,duration:i,isActive:n,easing:o,from:{t:0},to:{t:1},key:"pie-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var n=t.t,r=a.map((function(e,t){var a=l&&l[t];if(a){var r=(0,_.k4)(a.cx,e.cx),i=(0,_.k4)(a.cy,e.cy),s=(0,_.k4)(a.size,e.size);return j(j({},e),{},{cx:r(n),cy:i(n),size:s(n)})}var o=(0,_.k4)(0,e.size);return j(j({},e),{},{size:o(n)})}));return s.createElement(v.m,null,e.renderSymbolsStatically(r))}))}},{key:"renderSymbols",value:function(){var e=this.props,t=e.points,a=e.isAnimationActive,n=this.state.prevPoints;return!(a&&t&&t.length)||n&&u()(n,t)?this.renderSymbolsStatically(t):this.renderSymbolsWithAnimation()}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,a=e.xAxis,n=e.yAxis,r=e.children,i=(0,x.NN)(r,z.W.displayName);if(!i)return null;function o(e,t){return{x:e.cx,y:e.cy,value:+e.node.y,errorVal:(0,T.F$)(e,t)}}function m(e,t){return{x:e.cx,y:e.cy,value:+e.node.x,errorVal:(0,T.F$)(e,t)}}return i.map((function(e,r){var i=e.props.direction;return s.cloneElement(e,{key:r,data:t,xAxis:a,yAxis:n,layout:"x"===i?"vertical":"horizontal",dataPointFormatter:"x"===i?m:o})}))}},{key:"renderLine",value:function(){var e,t,a=this.props,n=a.points,r=a.line,i=a.lineType,o=a.lineJointType,m=(0,K.L6)(this.props),l=(0,K.L6)(r);if("joint"===i)e=n.map((function(e){return{x:e.cx,y:e.cy}}));else if("fitting"===i){var p=(0,_.wr)(n),c=p.xmin,d=p.xmax,u=p.a,h=p.b,f=function(e){return u*e+h};e=[{x:c,y:f(c)},{x:d,y:f(d)}]}var b=j(j(j({},m),{},{fill:"none",stroke:m&&m.fill},l),{},{points:e});return t=s.isValidElement(r)?s.cloneElement(r,b):y()(r)?r(b):s.createElement(S.H,O({},b,{type:o})),s.createElement(v.m,{className:"recharts-scatter-line",key:"recharts-scatter-line"},t)}},{key:"render",value:function(){var e=this.props,t=e.hide,a=e.points,n=e.line,r=e.className,i=e.xAxis,o=e.yAxis,m=e.left,l=e.top,p=e.width,c=e.height,d=e.id,u=e.isAnimationActive;if(t||!a||!a.length)return null;var h=this.state.isAnimationFinished,y=N()("recharts-scatter",r),f=i&&i.allowDataOverflow||o&&o.allowDataOverflow,g=b()(d)?this.id:d;return s.createElement(v.m,{className:y,clipPath:f?"url(#clipPath-".concat(g,")"):null},f?s.createElement("defs",null,s.createElement("clipPath",{id:"clipPath-".concat(g)},s.createElement("rect",{x:m,y:l,width:p,height:c}))):null,n&&this.renderLine(),this.renderErrorBar(),s.createElement(v.m,{key:"recharts-scatter-symbols"},this.renderSymbols()),(!u||h)&&w.e.renderCallByParent(this.props,a))}}])&&D(t.prototype,a),n&&D(t,n),i}(s.PureComponent);L.displayName="Scatter",L.defaultProps={xAxisId:0,yAxisId:0,zAxisId:0,legendType:"circle",lineType:"joint",lineJointType:"linear",data:[],shape:"circle",hide:!1,isAnimationActive:!A.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"linear"},L.getComposedData=function(e){var t=e.xAxis,a=e.yAxis,n=e.zAxis,r=e.item,i=e.displayedData,s=e.xAxisTicks,o=e.yAxisTicks,m=e.offset,l=r.props.tooltipType,p=(0,x.NN)(r.props.children,C.b.displayName),c=b()(t.dataKey)?r.props.dataKey:t.dataKey,d=b()(a.dataKey)?r.props.dataKey:a.dataKey,u=n&&n.dataKey,h=n?n.range:E.defaultProps.range,y=h&&h[0],f=t.scale.bandwidth?t.scale.bandwidth():0,g=a.scale.bandwidth?a.scale.bandwidth():0,k=i.map((function(e,i){var m=(0,T.F$)(e,c),h=(0,T.F$)(e,d),k=!b()(u)&&(0,T.F$)(e,u)||"-",N=[{name:b()(t.dataKey)?r.props.name:t.name||t.dataKey,unit:t.unit||"",value:m,payload:e,dataKey:c,type:l},{name:b()(a.dataKey)?r.props.name:a.name||a.dataKey,unit:a.unit||"",value:h,payload:e,dataKey:d,type:l}];"-"!==k&&N.push({name:n.name||n.dataKey,unit:n.unit||"",value:k,payload:e,dataKey:u,type:l});var v=(0,T.Hv)({axis:t,ticks:s,bandSize:f,entry:e,index:i,dataKey:c}),w=(0,T.Hv)({axis:a,ticks:o,bandSize:g,entry:e,index:i,dataKey:d}),x="-"!==k?n.scale(k):y,A=Math.sqrt(Math.max(x,0)/Math.PI);return j(j({},e),{},{cx:v,cy:w,x:v-A,y:w-A,xAxis:t,yAxis:a,zAxis:n,width:2*A,height:2*A,size:x,node:{x:m,y:h,z:k},tooltipPayload:N,tooltipPosition:{x:v,y:w},payload:e},p&&p[i]&&p[i].props)}));return j({points:k},m)};var G=a(3023),W=a(75358),J=a(97187),U=(0,c.z)({chartName:"ScatterChart",GraphicalChild:L,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:G.K},{axisType:"yAxis",AxisComp:W.B},{axisType:"zAxis",AxisComp:E}],formatAxisMap:J.t9}),H=a(14195),X=a(14888),q=a(63437);const Y=e=>s.createElement(s.Fragment,null,s.createElement("div",{className:(0,i.default)(l.Z.stage)},s.createElement("h4",null,e.label),s.createElement("span",{style:{flexGrow:1}}),s.createElement("button",{className:"button button--success button--sm",onClick:e.onStage},s.createElement(r.G,{icon:n.zc,color:"white"}))),s.createElement("div",{className:(0,i.default)(l.Z.result)},e.result.calculations.map(((e,t)=>s.createElement("span",{className:(0,i.default)("badge","badge--secondary",l.Z.badge),key:t},e))),s.createElement("span",{style:{flexGrow:1}}),void 0!==e.result.time_ms&&s.createElement("span",{className:(0,i.default)("badge","badge--success",l.Z.badge)},s.createElement(r.G,{icon:n.SZw})," ",e.result.time_ms.toFixed(1)," ms"))),Q=e=>e.toLocaleString().replace(/[\.,]/g,"'"),ee={calculations:[]},te=e=>{if(e<1e3)return e;const t=`${e}`.length-1,a=`${e}`.replace(/0*$/,""),n=a.slice(0,1),r=a.slice(1);return"1"===n?`10^${t}`:r?`${a.slice(0,1)}.${a.slice(1)}\xb710^${t}`:`${a.slice(0,1)}\xb710^${t}`},ae=()=>{const[e,t]=s.useState(6),[a,n]=s.useState([0,0]),[r,o]=s.useState(0),[c,d]=s.useState(0),[u,h]=s.useState(0),[y,f]=s.useState(-1),[b,g]=s.useState([]),[k,N]=s.useState(0),[v,w]=s.useState(-1),[x,A]=s.useState(-1),[E,S]=s.useState(0),[P,z]=s.useState(0),[C,_]=s.useState(!1);s.useRef(null);s.useEffect((()=>{o(0),e<8?n([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("5".padEnd(e+1,"0"),10)]):8===e&&n([Number.parseInt("5".padEnd(e,"0"),10),Number.parseInt("1".padEnd(e+1,"0"),10)])}),[e]),s.useEffect((()=>{3===r&&g([...b,{product:k,time:x}])}),[r]);return s.createElement("div",{className:(0,i.default)("hero","shadow--lw",l.Z.container,l.Z.factorization)},s.createElement("div",{className:"container"},s.createElement("p",{className:"hero__subtitle"},"Zeitanalyse Primfaktorzerlegung"),"Primzahlen mit",s.createElement("div",{className:(0,i.default)("button-group",l.Z.digits)},s.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",6===e&&"button--active"),onClick:()=>t(6)},"6"),s.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",7===e&&"button--active"),onClick:()=>t(7)},"7"),s.createElement("button",{className:(0,i.default)("button","button--sm","button--outline","button--primary",8===e&&"button--active"),onClick:()=>t(8)},"8")),"Stellen",s.createElement(Y,{onStage:()=>{const e=window.performance.now(),t=m(a[0],a[1]),n=m(a[0],a[1]);d(Math.min(t,n)),h(Math.max(t,n));const r=window.performance.now()-e;f(r),o(1)},label:`Zwei Primzahlen zwische ${Q(a[0])} und ${Q(a[1])} w\xe4hlen`,result:r>0?{calculations:[Q(c),Q(u)],time_ms:y}:ee}),r>0&&s.createElement(Y,{onStage:()=>{const e=window.performance.now();N(c*u);const t=window.performance.now()-e;w(t),o(2)},label:`Primzahlprodukt berechnen: ${Q(c)} * ${Q(u)}`,result:r>1?{calculations:[Q(k)],time_ms:v}:ee}),r>1&&s.createElement(Y,{onStage:()=>{A(-1);const e=window.performance.now();let t=2;for(;t<k;){const e=k/t;if(e%1==0){S(t),z(e);break}2===t?t++:t+=2}const a=window.performance.now()-e;A(a),o(3)},label:"Primzahlen faktorisieren",result:r>2?{calculations:[Q(E),Q(P)],time_ms:x}:ee}),b.length>0&&s.createElement("div",{style:{width:"100%",overflow:"auto"}},s.createElement(q.Z,null,s.createElement(p.h,{width:"100%",height:400},s.createElement(U,{width:500,height:300,margin:{top:5,right:100,bottom:80,left:20}},s.createElement(H.q,null),s.createElement(G.K,{type:"number",dataKey:"product",name:"Produkt",tickFormatter:te,angle:40,textAnchor:"start"}),s.createElement(W.B,{type:"number",dataKey:"time",name:"Zeit",unit:"ms"}),s.createElement(X.u,{cursor:{strokeDasharray:"3 3"}}),s.createElement(L,{name:"Mesurements",data:b,fill:"#8884d8"})))))))}},63437:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(51436),r=a(92814),i=a(86010),s=a(14842),o=a(67294);const m={none:n.cNd,copied:n.E9T,error:n.nYk,spin:n.IJ7,ready:n.Yjj},l={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},p=e=>{let{children:t,options:a}=e;const[n,p]=o.useState(void 0),[c,d]=o.useState("none"),u=o.useRef(null);return o.useEffect((()=>{if(["none","spin","ready"].includes(c))return;const e=setTimeout((()=>d("copied"===c?"ready":"none")),2e3);return()=>clearTimeout(e)}),[c]),o.useEffect((()=>{"none"!==c&&d("none")}),[t]),o.createElement(o.Fragment,null,o.createElement("button",{className:(0,i.default)("button","button--outline","button--sm",l[c]),disabled:"spin"===c,onClick:()=>{if(null!==u.current){if("none"===c)return d("spin"),(0,s.SE)(u.current,a).then((e=>{p(e),d("ready")}));if("ready"===c)try{navigator.clipboard.write([new ClipboardItem({"image/png":n})]).then((()=>{d("copied")})).catch((e=>{d("error"),console.warn(e)}))}catch(e){console.warn(e),d("error")}}}},o.createElement(r.G,{icon:m[c]})),o.createElement("div",{ref:u,className:"copy-container"},t))}},9936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),i=a(99938);const s={sidebar_custom_props:{id:"c0387f92-5a73-4431-b9ea-348fec74334b",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=792141"}}},o="Asymmetrie",m={unversionedId:"Kryptologie/Asymmetrisch/asymmetrie",id:"Kryptologie/Asymmetrisch/asymmetrie",title:"Asymmetrie",description:"Wir haben in den beiden vorherigen Abschnitten gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:",source:"@site/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",sourceDirName:"Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/asymmetrie",permalink:"/Kryptologie/Asymmetrisch/asymmetrie",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/04-Asymmetrisch/03-asymmetrie.md",tags:[],version:"current",lastUpdatedAt:1669151362,formattedLastUpdatedAt:"22. Nov. 2022",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"c0387f92-5a73-4431-b9ea-348fec74334b",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=792141"}}},sidebar:"sidebar",previous:{title:"Geheime Farbe",permalink:"/Kryptologie/Asymmetrisch/secret-color"},next:{title:"Asymm. Verschl\xfcsselung",permalink:"/Kryptologie/Asymmetrisch/asymm-encryption"}},l={},p=[{value:"Ein mathematisches Problem dieser Art",id:"ein-mathematisches-problem-dieser-art",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Comment"),u=c("Answer"),h={toc:p};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"asymmetrie"},"Asymmetrie"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wir haben in den beiden vorherigen Abschnitten gesehen, dass es Vorg\xe4nge gibt, die in die eine Richtung einfach durchzuf\xfchren sind, in die entgegengesetzte Richtung allerdings sehr aufw\xe4ndig oder gar unm\xf6glich:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"einfacher Vorgang"),(0,r.kt)("th",{parentName:"tr",align:"left"},"aufw\xe4ndiger/schwieriger Vorgang"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"offenes B\xfcgelschloss schliessen"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B\xfcgelschloss ohne Schl\xfcssel \xf6ffnen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Farben mischen"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Farben trennen")))),(0,r.kt)(d,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschl\xfcsselung basiert:"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Asymmetrische Verschl\xfcsselung",type:"finding"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die asymmetrische Verschl\xfcsselung basiert auf Aufgaben, die in eine Richtung einfach auszuf\xfchren sind, w\xe4hrend man eine geheime Information braucht, um den Vorgang r\xfcckg\xe4ngig zu machen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verf\xfcgt jemand nicht \xfcber diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bew\xe4ltigen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"ein-mathematisches-problem-dieser-art"},"Ein mathematisches Problem dieser Art"),(0,r.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuf\xfchren sind. Die Umkehrung jedoch ist selbst f\xfcr einen Computer aufw\xe4ndig und kann Jahre dauern."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Beispiel daf\xfcr ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausf\xfchren. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufw\xe4ndiger \u2013 insbesondere wenn die Zahlen mehrere hundert Stellen lang sind."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Multiplizieren vs. Faktorisieren",type:"aufgabe"},(0,r.kt)(u,{type:"state",webKey:"e9065f77-e507-475e-bd4c-d6104da9180f",mdxType:"Answer"}),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Berechnen Sie ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"41"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mn",{parentName:"mrow"},"83")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"41 \\cdot 83")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"4"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"8"),(0,r.kt)("span",{parentName:"span",className:"mord"},"3")))))," auf Papier. \xdcberlegen Sie sich dabei, wie Sie vorgehen."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Schaffen Sie es, die Zahl ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"3397")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3397")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mord"},"9"),(0,r.kt)("span",{parentName:"span",className:"mord"},"7")))))," in ihre zwei Primfaktoren zu zerlegen? Und ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1117")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1117")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mord"},"7"))))),"? Wie k\xf6nnte man dabei vorgehen?"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})))),(0,r.kt)(u,{type:"text",webKey:"e6e532b0-a0e6-4932-a4d3-2d6e161aed47",mdxType:"Answer"})),(0,r.kt)("admonition",{title:"Aufwand f\xfcr den Computer",type:"aufgabe"},(0,r.kt)(u,{type:"state",webKey:"f77269d9-0b36-4221-b7e3-fbb11eccf2f7",mdxType:"Answer"}),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wie schnell kann der Computer multiplizieren und faktorisieren? \xdcberpr\xfcfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie f\xfcr Primzahlen mit ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"8")," Stellen einige (>3) Messungen vor."),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Halten Sie die Messergebnisse fest (kopieren Sie den Plot und f\xfcgen diesen in der Antwort ein...)"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was bedeutet es f\xfcr eine kryptographische Anwendungen, wenn die beiden Primzahlen statt ",(0,r.kt)("inlineCode",{parentName:"p"},"8")," Stellen mehrere mehrere hundert Stellen lang sind?"),(0,r.kt)(d,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})))),(0,r.kt)(u,{type:"text",webKey:"ae59f85e-43e7-42f1-afd9-a8a079fc931d",mdxType:"Answer"})),(0,r.kt)(i.Z,{mdxType:"PrimfactorizationTiming"}))}y.isMDXComponent=!0},38134:(e,t,a)=>{a.d(t,{Z:()=>n});const n={container:"container_XNYs",input:"input_CqMU",inputContainer:"inputContainer__M1K",active:"active_Aydn",modes:"modes_bDII",caesarKey:"caesarKey_uI_j",pills:"pills_s5h3",stringInputContainer:"stringInputContainer_x3SA",iv:"iv_ZNeg",errorBadge:"errorBadge_gdVQ",invalid:"invalid_A21J",factorization:"factorization_s4Fs",stage:"stage_pIjI",result:"result_Fp_4",badge:"badge_Hkgt",digits:"digits_IuJK",copy:"copy_X2Q7"}}}]);