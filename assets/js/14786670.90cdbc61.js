/*! For license information please see 14786670.90cdbc61.js.LICENSE.txt */
(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[39601],{46604:(e,a,t)=>{"use strict";t.d(a,{Z:()=>I});var i=t(86010),n=t(35926),r=t(67294),m=t(97566),s=t(60549);const l=e=>r.createElement("div",{className:s.Z.colorTile,style:{background:"rgb("+e.r+","+e.g+","+e.b+")"}},r.createElement("div",{className:s.Z.tooltip},"Rot: "+e.r+", Gr\xfcn: "+e.g+", Blau: "+e.b+")")),I=()=>{const[e,a]=r.useState(2),[t,I]=r.useState(1),[d,p]=r.useState([]);return r.useEffect((()=>{I(Math.ceil(Math.log2(e)));const a=1===e?255:255/(e-1),t=[];for(var i=0;i<e;i+=1){const m=Math.round(i*a);for(var n=0;n<e;n+=1){const i=[],s=Math.round(n*a);for(var r=0;r<e;r+=1)i.push({r:m,g:s,b:Math.round(r*a)});t.push(i)}}p(t)}),[e]),r.createElement("div",{className:(0,i.default)("hero","shadow--lw",m.Z.container,s.Z.cmyk)},r.createElement("div",{className:"container"},r.createElement("p",{className:"hero__subtitle"},"Farbtiefen"),r.createElement("div",{className:(0,i.default)(s.Z.color)},r.createElement("span",{className:(0,i.default)(s.Z.label)},"Farbabstufungen"),r.createElement(n.Z,{value:e,onChange:e=>{a(e)},min:1,max:10,dots:!0}),r.createElement("span",{className:(0,i.default)(s.Z.value)},""+e)),r.createElement("div",{className:(0,i.default)(s.Z.color,s.Z.blue,s.Z.property)},r.createElement("span",{className:(0,i.default)(s.Z.label)},"M\xf6gliche Farben"),r.createElement("span",{style:{flexGrow:1}}),r.createElement("span",{className:(0,i.default)(s.Z.value)},""+e*e*e)),r.createElement("div",{className:(0,i.default)(s.Z.color,s.Z.blue,s.Z.property)},r.createElement("span",{className:(0,i.default)(s.Z.label)},"Ben\xf6tigte Bits pro Farbkanal"),r.createElement("span",{style:{flexGrow:1}}),r.createElement("span",{className:(0,i.default)(s.Z.value)},""+t)),r.createElement("div",{className:(0,i.default)(s.Z.color,s.Z.blue,s.Z.property)},r.createElement("span",{className:(0,i.default)(s.Z.label)},"Farbtiefe pro Farbkanal"),r.createElement("span",{style:{flexGrow:1}}),r.createElement("span",{className:(0,i.default)(s.Z.value)},t<2?t+" bit":t+" bits")),r.createElement("div",{className:(0,i.default)(s.Z.color,s.Z.blue,s.Z.property)},r.createElement("span",{className:(0,i.default)(s.Z.label)},"Farbtiefe"),r.createElement("span",{style:{flexGrow:1}}),r.createElement("span",{className:(0,i.default)(s.Z.value)},t<1?"1 bit":3*t+" bits")),r.createElement("div",{className:(0,i.default)(s.Z.tileContainer)},d.map((e=>r.createElement("div",{className:(0,i.default)(s.Z.tileRow)},e.map(((e,a)=>r.createElement(l,{key:a,r:e.r,g:e.g,b:e.b})))))))))}},95519:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>N,frontMatter:()=>r,metadata:()=>s,toc:()=>I});var i=t(83117),n=(t(67294),t(3905));t(61839),t(46604);const r={label:"1. Grundlagen",sidebar_custom_props:{id:"72a98fbf-13fc-4bce-a4ba-93e98d933ac2",source:{name:"S. Rothe, T. Jampen, R. Meyer",ref:"https://informatik.mygymer.ch/base/?b=code&p=943166"}}},m="1. Grundlagen",s={unversionedId:"Codes-and-Data/Grafikformate-v24/basics",id:"Codes-and-Data/Grafikformate-v24/basics",title:"1. Grundlagen",description:"Raster- und Vektorgrafik",source:"@site/docs/Codes-and-Data/02-Grafikformate-v24/01-basics.md",sourceDirName:"Codes-and-Data/02-Grafikformate-v24",slug:"/Codes-and-Data/Grafikformate-v24/basics",permalink:"/Codes-and-Data/Grafikformate-v24/basics",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Codes-and-Data/02-Grafikformate-v24/01-basics.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:1,frontMatter:{label:"1. Grundlagen",sidebar_custom_props:{id:"72a98fbf-13fc-4bce-a4ba-93e98d933ac2",source:{name:"S. Rothe, T. Jampen, R. Meyer",ref:"https://informatik.mygymer.ch/base/?b=code&p=943166"}}},sidebar:"sidebar",previous:{title:"6. Dateiformate erkennen",permalink:"/Codes-and-Data/Grafikformate/files"},next:{title:"2. Farbdarstellung",permalink:"/Codes-and-Data/Grafikformate-v24/colors"}},l={},I=[{value:"Raster- und Vektorgrafik",id:"raster--und-vektorgrafik",level:2},{value:"Rastergrafik",id:"rastergrafik",level:2},{value:"Vektorgrafik",id:"vektorgrafik",level:2}],d=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},p=d("Comment"),g=d("Figure"),o=d("SourceRef"),c={toc:I};function N(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"1-grundlagen"},"1. Grundlagen"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"raster--und-vektorgrafik"},"Raster- und Vektorgrafik"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Bei der Speicherung von Grafiken und Bildern im Computer wird zwischen zwei grundlegenden Darstellungsarten unterschieden: der Raster- und der Vektorgrafik."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{style:{},className:"flex flex-flex"},(0,n.kt)("div",{parentName:"div",style:{},className:"item"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"Smiley als Rastergrafik",src:t(39181).Z,width:"416",height:"416"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Smiley als Rastergrafik",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,n.kt)(o,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,n.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))),(0,n.kt)("div",{parentName:"div",style:{},className:"item"},(0,n.kt)("div",{parentName:"div",className:"commentable"},(0,n.kt)(g,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{alt:"Smiley als Vektorgrafik",src:t(76104).Z,width:"416",height:"416"}),(0,n.kt)("figcaption",{parentName:"Figure"},(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Smiley als Vektorgrafik",(0,n.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,n.kt)(o,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,n.kt)(p,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"rastergrafik"},"Rastergrafik"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Bei einer Rastergrafik wird das Bild in viele kleine Quadrate unterteilt. Jedes Quadrat wird mit genau einer Farbe eingef\xe4rbt. Diese Quadrate werden ",(0,n.kt)("strong",{parentName:"p"},"Pixel")," genannt."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Die Anzahl Pixel, welche f\xfcr eine Rastergrafik verwendet werden, wird als ",(0,n.kt)("strong",{parentName:"p"},"Aufl\xf6sung")," des Bildes bezeichnet. Sie berechnet sich aus der Breite ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"b")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," und H\xf6he ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"h")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," der Grafik in Pixel."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Eine Rastergrafik mit hoher Aufl\xf6sung hat eine bessere Qualit\xe4t, ben\xf6tigt allerdings auch mehr Speicherplatz. Den theoretischen Speicherbedarf einer Rastergrafik h\xe4ngt von der Anzahl Pixel und dem verwendeten Farbmodell ab."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Rastergrafiken werden in erster Linie zur Speicherung von Fotos verwendet."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"vektorgrafik"},"Vektorgrafik"),(0,n.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Bei einer Vektorgrafik wird das darzustellende Bild aus geometrischen Objekten wie Linien, Kreise oder Rechtecken zusammengesetzt. Das Prinzip ist dasselbe wie bei der Turtle-Grafik - jeder Pfad wird in einem Koordinatensystem beschrieben. Durch Hinein- oder Herauszoomen kann das Bild beliebig vergr\xf6ssert oder verkleinert werden, ohne dass mehr Speicherplatz ben\xf6tigt wird. "),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Vektorgrafiken haben also zwei grosse Vorteile gegen\xfcber Pixelgrafiken. Erstens ben\xf6tigen sie normalerweise ",(0,n.kt)("strong",{parentName:"p"},"deutlich weniger Speicherplatz")," als eine entsprechende Pixelgrafik, da mit einem Objekt die Farbe von vielen Pixeln festgelegt wird."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Zweitens k\xf6nnen Vektorgrafiken ohne Qualit\xe4tseinbusse ",(0,n.kt)("strong",{parentName:"p"},"beliebig vergr\xf6ssert und verkleinert")," werden."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Die einzelnen Objekte k\xf6nnen einfarbig sein oder einen Farbverlauf haben, sowie teilweise transparent sein."),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Vektorgrafiken werden deshalb insbesondere f\xfcr folgende Anwendungen eingesetzt:"),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Logos"),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Illustrationen"),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Symbole, Icons"),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Schriftarten"),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Strassen- und Landkarten"),(0,n.kt)(p,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})))))}N.isMDXComponent=!0},94184:(e,a)=>{var t;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var m=n.apply(null,t);m&&e.push(m)}}else if("object"===r)if(t.toString===Object.prototype.toString)for(var s in t)i.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(a,[]))||(e.exports=t)}()},60549:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});const i={image:"image_G9S3",color:"color_umyu",property:"property_ifd7",label:"label_GZzs",value:"value_UOcF",transformed:"transformed_wOfO",red:"red_DUAB",green:"green_DI_q",blue:"blue_OvwO",alpha:"alpha_RPwX",cyan:"cyan_GnDs",magenta:"magenta_mmFp",yellow:"yellow_lgxd",key:"key_k33Z",cmyk:"cmyk_a0LL",copyBadge:"copyBadge_nVEh",copyIcon:"copyIcon_FV_S",tileContainer:"tileContainer_hjZ5",tileRow:"tileRow_Gp1U",colorTile:"colorTile_JCaD",tooltip:"tooltip_pBZE"}},97566:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});const i={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},39181:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});const i=t.p+"assets/images/01-smiley-raster-8b3fbe33c1c0c20102f9e5a524689e58.svg"},76104:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQxNnB4IiBoZWlnaHQ9IjQxNnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8Zz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyMDgiIHI9IjE3NiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMzQsMCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQ0IiByPSIzMiIgc3R5bGU9ImZpbGw6cmdiKDQ4LDc5LDI1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMTQ0IiByPSIzMiIgc3R5bGU9ImZpbGw6cmdiKDQ4LDc5LDI1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTk2LDI0NS43NUM5NiwyOTUuMjg0IDE0Ni4xODYsMzM1LjUgMjA4LDMzNS41QzI2OS44MTQsMzM1LjUgMzIwLDI5NS4yODQgMzIwLDI0NS43NUMyOTMuODY3LDI2MC42MSAyNTIuNjc4LDI3Mi42NzUgMjA4LDI3Mi42NzVDMTYzLjMyMiwyNzIuNjc1IDEyMi4xMzMsMjYwLjYxIDk2LDI0NS43NVoiIHN0eWxlPSJmaWxsOnJnYigyMTMsMCwwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxjaXJjbGUgY3g9Ijk2IiBjeT0iMjQ2IiByPSIyIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTU1LjI0MyIgY3k9IjI2NyIgcj0iMiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjI2MS4yMzgiIGN5PSIyNjciIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMDEiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMjMiIGN5PSIzMDUiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxNjMiIGN5PSIzMjgiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNTQiIGN5PSIzMjgiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMTUiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyOTIiIGN5PSIzMDUiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMjAiIGN5PSIyNDYiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyNzMiIHI9IjIiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIzMzUuNSIgcj0iMiIvPgogICAgICAgIDx0ZXh0IHg9Ijg1Ljg1MnB4IiB5PSIyNTIuMzU1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjE8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iODkuNzI1cHgiIHk9IjI4NS40MnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4yPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjExNC43MTNweCIgeT0iMzE4LjQwMnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4zPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE1Ni42OTVweCIgeT0iMzQzLjQxNHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij40PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjIwNS4zMDJweCIgeT0iMzQ5LjM1NXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij41PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjI1NS41NDlweCIgeT0iMzQwLjg4OXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij42PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjI5NS41NjFweCIgeT0iMzE2LjI1cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjc8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMzE5Ljg5OXB4IiB5PSIyNzguMjQ4cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjg8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMzI1LjYyM3B4IiB5PSIyNDguNDAycHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjk8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMjUyLjg1MnB4IiB5PSIyNjAuMjA2cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MTJweDsiPjEwPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjIwMS45NjVweCIgeT0iMjY4LjY5MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij4xMTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNDcuODUycHgiIHk9IjI2NC41NDVweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+MTI8L3RleHQ+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dGV4dCB4PSIxNTYuNTUycHgiIHk9IjE1Ni40MjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+YjwvdGV4dD4KICAgICAgICA8cGF0aCBkPSJNMTM0LDE0N0wxMjgsMTQ0TDEzNCwxNDFMMTMxLDE0NEwxMzQsMTQ3WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNjAsMTQ0TDEzMSwxNDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQ0IiByPSIyIi8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8dGV4dCB4PSIyNTMuNTJweCIgeT0iMTU2LjQyOHB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjEycHg7Ij5jPC90ZXh0PgogICAgICAgIDxwYXRoIGQ9Ik0yMzAsMTQ3TDIyNCwxNDRMMjMwLDE0MUwyMjcsMTQ0TDIzMCwxNDdaIi8+CiAgICAgICAgPHBhdGggZD0iTTI1NiwxNDRMMjI3LDE0NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNTYiIGN5PSIxNDQiIHI9IjIiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0zOCwyMTFMMzIsMjA4TDM4LDIwNUwzNSwyMDhMMzgsMjExWiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMDgsMjA4TDM1LDIwOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMDgiIGN5PSIyMDgiIHI9IjIiLz4KICAgICAgICA8dGV4dCB4PSIyMDQuNTUycHgiIHk9IjIyMC40MjhweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToxMnB4OyI+YTwvdGV4dD4KICAgIDwvZz4KICAgIDxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjM4NCIgaGVpZ2h0PSIzODQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+Cjwvc3ZnPgo="}}]);