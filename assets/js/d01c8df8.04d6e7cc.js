"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[79598],{90025:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(86010),r=t(67294);const i="container_GwNw",s="A_T38E",l="PUB_yjj_",d="EVE_PD14",m="B_c62f",c="MIXA_Gd8i",o="MIXB_CGO5",b="PRIVA_myYZ",p="PRIVB_yZfW",u="colorPicker_gndF",h="colorBucket_vssC",g="mixed_mKvb",f="caption__7Oz";var k=t(46910),v=t.n(k),N=t(90532);const y=e=>"#"+(16777215^Number("0x1"+e.substring(1))).toString(16).substr(1).toUpperCase(),E=(e,a,t)=>{a/=100,t/=100;let n=(1-Math.abs(2*t-1))*a,r=n*(1-Math.abs(e/60%2-1)),i=t-n/2,s=0,l=0,d=0;0<=e&&e<60?(s=n,l=r,d=0):60<=e&&e<120?(s=r,l=n,d=0):120<=e&&e<180?(s=0,l=n,d=r):180<=e&&e<240?(s=0,l=r,d=n):240<=e&&e<300?(s=r,l=0,d=n):300<=e&&e<360&&(s=n,l=0,d=r);let m=Math.round(255*(s+i)).toString(16),c=Math.round(255*(l+i)).toString(16),o=Math.round(255*(d+i)).toString(16);return 1==m.length&&(m="0"+s),1==c.length&&(c="0"+l),1==o.length&&(o="0"+d),"#"+m+c+o},w=e=>{const[a,t]=r.useState(60),[k,w]=r.useState("#ffff00"),[F,x]=r.useState(230),[A,B]=r.useState("#ffff00"),[S,z]=r.useState(100),[C,_]=r.useState("#ffff00"),[T,D]=r.useState("#ffff00"),[K,M]=r.useState("#ffff00"),[I,Z]=r.useState("#ffff00"),[G,P]=r.useState("#ffff00");return r.useEffect((()=>{w(E(a,100,50))}),[a]),r.useEffect((()=>{B(E(F,100,50))}),[F]),r.useEffect((()=>{_(E(S,100,50))}),[S]),r.useEffect((()=>{D("#"+v().mixColors([k,C]))}),[k,C]),r.useEffect((()=>{M("#"+v().mixColors([A,C]))}),[A,C]),r.useEffect((()=>{const e=v().mixColors([k,C,A]);Z("#"+e),P("#"+e)}),[k,C,A]),r.createElement("div",{className:i},r.createElement("div",{className:(0,n.default)(s)},r.createElement(N.Z,{className:(0,n.default)(u,"umami--click--color-exchange-colorpicker"),hue:a,onInput:e=>t(e),initiallyCollapsed:!0}),r.createElement("div",{className:(0,n.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:k,color:y(k)}},"Alice"),"'s Geheimfarbe")),r.createElement("div",{className:(0,n.default)(l)},r.createElement(N.Z,{className:u,hue:S,onInput:e=>z(e),initiallyCollapsed:!0}),r.createElement("div",{className:(0,n.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:C,color:y(C)}},"\xd6ffentlich")," ")),r.createElement("div",{className:(0,n.default)(d),style:{height:"200px"}},"Eve \ud83d\udd76"),r.createElement("div",{className:(0,n.default)(m)},r.createElement(N.Z,{className:u,hue:F,onInput:e=>x(e),initiallyCollapsed:!0}),r.createElement("div",{className:(0,n.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:y(A)}},"Bob"),"'s Geheimfarbe")),r.createElement("div",{className:(0,n.default)(c,g)},r.createElement("div",{className:h,style:{background:T}}),r.createElement("div",{className:(0,n.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:k,color:y(k)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:C,color:y(C)}},"\xd6ffentlich"))),r.createElement("div",{className:(0,n.default)(o,g)},r.createElement("div",{className:h,style:{background:K}}),r.createElement("div",{className:(0,n.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:C,color:y(C)}},"\xd6ffentlich"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:y(A)}},"Bob"))),r.createElement("div",{className:(0,n.default)(b,g)},r.createElement("div",{className:h,style:{background:I}}),r.createElement("div",{className:(0,n.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:k,color:y(k)}},"Alice"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:K,color:y(K)}},"Mischung"))),r.createElement("div",{className:(0,n.default)(p,g)},r.createElement("div",{className:h,style:{background:G}}),r.createElement("div",{className:(0,n.default)(f)},r.createElement("span",{className:"badge badge--secondary",style:{background:T,color:y(T)}},"Mischung"),r.createElement("span",null,"+"),r.createElement("span",{className:"badge badge--secondary",style:{background:A,color:y(A)}},"Bob"))))}},25287:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=t(83117),r=(t(67294),t(3905)),i=t(90025);const s={sidebar_custom_props:{id:"035b0ee7-407c-4047-90de-10ae0ff2bcff",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=242355"}}},l="Geheime Farbe",d={unversionedId:"Kryptologie/Asymmetrisch/secret-color",id:"version-25h/Kryptologie/Asymmetrisch/secret-color",title:"Geheime Farbe",description:"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr eine ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage geheim bleiben. Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden.",source:"@site/versioned_docs/version-25h/08-Kryptologie/04-Asymmetrisch/02-secret-color.md",sourceDirName:"08-Kryptologie/04-Asymmetrisch",slug:"/Kryptologie/Asymmetrisch/secret-color",permalink:"/25h/Kryptologie/Asymmetrisch/secret-color",draft:!1,tags:[],version:"25h",sidebarPosition:2,frontMatter:{sidebar_custom_props:{id:"035b0ee7-407c-4047-90de-10ae0ff2bcff",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=242355"}}},sidebar:"version-25h/sidebar",previous:{title:"Schl\xfcsselaustausch",permalink:"/25h/Kryptologie/Asymmetrisch/key-exchange"},next:{title:"Asymmetrie",permalink:"/25h/Kryptologie/Asymmetrisch/asymmetrie"}},m={},c=[{value:"Alice und Bob",id:"alice-und-bob",level:2},{value:"Eve",id:"eve",level:2},{value:"Ausprobieren",id:"ausprobieren",level:2}],o=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},b=o("Comment"),p=o("Answer"),u=o("Figure"),h=o("SourceRef"),g={toc:c};function f(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"geheime-farbe"},"Geheime Farbe"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Alice und Bob arbeiten an einem neuen Kunstwerk, auf das die \xd6ffentlichkeit gespannt wartet. Die beiden m\xf6chten daf\xfcr ",(0,r.kt)("strong",{parentName:"p"},"eine")," ganz besondere Farbe verwenden. Diese Farbe soll aber unbedingt bis zur Vernissage ",(0,r.kt)("strong",{parentName:"p"},"geheim bleiben"),". Alice und Bob wohnen weit auseinander und k\xf6nnen sich nicht treffen, um die geheime Farbe gemeinsam herzustellen, sie k\xf6nnen sich lediglich Farbk\xfcbel per Post zusenden."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"alice-und-bob"},"Alice und Bob"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Sie haben eine Idee und gehen wie folgt vor:"),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{style:{},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Private Farbe\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd"},"Schritt 1"),": Alice und Bob mischen sich je in einem Farbk\xfcbel eine pers\xf6nliche, geheime Farbe, die sie niemandem mitteilen (private Farbe genannt)."),(0,r.kt)("dt",{parentName:"dl"},"\xd6ffentliche Farbe\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd"},"Schritt 2")," Alice w\xe4hlt nun zus\xe4tzlich eine Farbe, die nicht geheim gehalten wird. Sie f\xfcllt zwei grosse Farbk\xfcbel mit dieser Farbe, einen beh\xe4lt sie f\xfcr sich selbst, den anderen schickt sie per Post an Bob (\xf6ffentliche Farbe genannt)."),(0,r.kt)("dt",{parentName:"dl"},"Zwischenfarbe\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd"},"Schritt 3"),": Im n\xe4chsten Schritt mischen sich Alice und Bob je in einem leeren Farbk\xfcbel eine neue Farbe: Sie nehmen dazu genau dieselbe Menge der eigenen privaten Farbe und der gemeinsamen Farbe. Diese neue Farbe schicken sie sich wieder gegenseitig zu."),(0,r.kt)("dt",{parentName:"dl"},"Zielfarbe\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd"},"Schritt 4"),": Im letzten Schritt erzeugen Sie die Zielfarbe f\xfcrs Kunstwerk. Dazu nehmen sie zwei Einheiten der soeben erhaltenen Farbe und eine Einheit der privaten Farbe und erhalten die gemeinsame private Farbe, mit der sie die Teile des neuen Kunstwerks bemalen.")),(0,r.kt)(b,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"}))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"300px"},className:"item"},(0,r.kt)("mermaid",{parentName:"div",value:"sequenceDiagram\n    actor Alice\n    actor Bob\n    Alice->>Alice: private Farbe mischen\n    Bob->>Bob: private Farbe mischen\n    Alice->>Bob: Gemeinsame Farbe\n    Alice->>Bob: privat + gemeinsam\n    Bob->>Alice: privat + gemeinsam\n    Bob->>Bob: erhalten + privat\n    Alice->>Alice: erhalten + privat"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"eve"},"Eve"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die neugierige Journalistin Eve m\xf6chte unbedingt wissen, was Alice und Bob aushecken, um noch vor der Vernissage einen exklusiven Zeitungsbericht zu ver\xf6ffentlichen. Daher versucht sie, an die gemeinsame private Farbe zu gelangen. Sie \xfcberwacht die Post und f\xfcllt sich von jeder transportierten Farbe ein wenig in eigene Beh\xe4lter ab."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"ausprobieren"},"Ausprobieren"),(0,r.kt)(b,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Geheime Farbe herausfinden",type:"aufgabe"},(0,r.kt)(p,{type:"state",webKey:"732736d7-f3b8-4829-83be-b9b4e1164791",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bestimmen Sie je eine Farbe f\xfcr Alice und Bob und schauen Sie sich die Ergebnisse an."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wieso erhalten Alice und Bob schlussendlich dieselbe Farbe?"),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)(p,{type:"text",webKey:"11388720-93d0-403f-94f0-64b6f1ae4752",mdxType:"Answer"})),(0,r.kt)("admonition",{title:"Wieso kennt Eve die geheime Farbe nicht?",type:"aufgabe"},(0,r.kt)(p,{type:"state",webKey:"bdfda551-8129-41c2-bc89-8450d9ecade7",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich: wieso kann Eve aus den verschickten Farben die geheime Farbe nicht herstellen?"),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)(p,{type:"text",webKey:"a627b60d-54bd-4a3e-a870-510d014364cf",mdxType:"Answer"})),(0,r.kt)(i.Z,{mdxType:"ColorExchange"}),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"\u2b50\ufe0f Digitale Farben \u2260 Echte Farben",type:"info"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im obigen Modell musste getrickst werden: In der digitalen Welt werden Farben durch die Erzeugung von Lichtwellen unterschiedlicher Wellenl\xe4nge erzeugt. Dabei wird bei der \xdcberlagerung aller Frequenzspektren weisses Licht erzeugt. Dies wird auch ",(0,r.kt)("strong",{parentName:"p"},"additives Farbmodell")," genannt. Im ",(0,r.kt)("strong",{parentName:"p"},"Gegensatz"),' dazu werden Farben in der realen Welt je nach Oberfl\xe4che nur gewisse Wellenl\xe4nfen reflektiert und die anderen werden von der Oberfl\xe4che "verschluckt". Werden mehrere Farben gemischt, f\xfchrt dies dazu, dass alle sichtbaren Wellenl\xe4ngen "verschluckt" werden und daher ein Braun/Schwarz entsteht. Dieses ist das ',(0,r.kt)("strong",{parentName:"p"},"subtraktive Farbmodell"),"."),(0,r.kt)(b,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)(u,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"digitales (links) und reales (rechts) Farbmodell",src:t(64900).Z,width:"1081",height:"538"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"digitales (links) und reales (rechts) Farbmodell",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,r.kt)(h,{parentName:"figcaption",bib:{author:"networkcaptain",source:"https://imgur.com/t/yellow/H7uboyb",licence:"Imgur",licence_url:"https://imgur.com/tos",edited:!1},mdxType:"SourceRef"}))),(0,r.kt)(b,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"}))))}f.isMDXComponent=!0},64900:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/color-models-7e7e0e964ddb2129e58215d8002957b0.png"}}]);