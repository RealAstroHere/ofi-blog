"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[45788],{15226:(e,t,a)=>{a.d(t,{Vc:()=>y,bF:()=>E,H4:()=>C,g7:()=>b});var n=a(21314),r=a(86010),l=a(68949),i=a(71217),m=a(67294),d=a(63437);const s="container_zVtl",o="input_tYix",p="inputContainer_mEEr",c="active_fzzJ",k="interactive_Yfi1",N="pixelEditor_B1ri",h="row_yRws",f="cell_gJPc",g="off_TP1h",u="on_DXrb",v="actions_N7O9",b=e=>e.toUpperCase().replace(/\s/g," ").replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ,-.\?@\s]/g,""),y={" ":"00000",A:"00001",B:"00010",C:"00011",D:"00100",E:"00101",F:"00110",G:"00111",H:"01000",I:"01001",J:"01010",K:"01011",L:"01100",M:"01101",N:"01110",O:"01111",P:"10000",Q:"10001",R:"10010",S:"10011",T:"10100",U:"10101",V:"10110",W:"10111",X:"11000",Y:"11001",Z:"11010",",":"11011","-":"11100",".":"11101","?":"11110","@":"11111","00000":" ","00001":"A","00010":"B","00011":"C","00100":"D","00101":"E","00110":"F","00111":"G","01000":"H","01001":"I","01010":"J","01011":"K","01100":"L","01101":"M","01110":"N","01111":"O",1e4:"P",10001:"Q",10010:"R",10011:"S",10100:"T",10101:"U",10110:"V",10111:"W",11e3:"X",11001:"Y",11010:"Z",11011:",",11100:"-",11101:".",11110:"?",11111:"@"},x=function(e,t){void 0===t&&(t=!0);const a=[];let n=e.replace(/\s/g,"");for(;n.length>0&&(!(n.length<5)||t);)a.push(n.slice(0,5)),n=n.slice(5);return a},C=(0,i.Pi)((()=>{const[e,t]=m.useState(""),[a,i]=m.useState(""),[d,k]=m.useState("text"),N=(0,n.oR)("viewStore");return m.useEffect((()=>{var e;t((null==(e=N.penta)?void 0:e.text)||"")}),[]),m.useEffect((()=>(0,l.aD)((()=>{N.penta={text:e}}))),[e]),m.useEffect((()=>{"text"===d&&i((e=>e.toUpperCase().split("").map((e=>y[e]||e)))(e).join(" "))}),[e]),m.useEffect((()=>{"penta"===d&&t((e=>x(e).map((e=>y[e]||e)))(a).join(""))}),[a]),m.createElement("div",{className:(0,r.default)("hero","shadow--lw",s)},m.createElement("div",{className:"container"},m.createElement("p",{className:"hero__subtitle"},"Pentacode"),m.createElement("h4",null,"Klartext"),m.createElement("div",{className:p},m.createElement("textarea",{onFocus:()=>k("text"),placeholder:"Klartext eingeben",className:(0,r.default)(o),value:e,onChange:e=>{const a=Math.max(e.target.selectionStart,e.target.selectionEnd);t(e.target.value.toUpperCase()),setTimeout((()=>e.target.setSelectionRange(a,a)),0)},rows:5}),"text"===d&&m.createElement("div",{className:c})),m.createElement("h4",null,"Pentacode"),m.createElement("div",{className:p},m.createElement("textarea",{onFocus:()=>k("penta"),placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,r.default)(o),value:a,onChange:e=>i(e.target.value.replace(/[^01\s]/g,"")),rows:5}),"penta"===d&&m.createElement("div",{className:c}))))})),E=(0,i.Pi)((()=>{const[e,t]=m.useState("00000 00000 00000 00000 00000"),[a,i]=m.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]),[p,c]=m.useState("editor"),b=(0,n.oR)("viewStore");return m.useEffect((()=>{t(b.pentaPixel.penta||"00000 00000 00000 00000 00000")}),[]),m.useEffect((()=>(0,l.aD)((()=>{b.pentaPixel={penta:e}}))),[e]),m.useEffect((()=>{"cell"!==p?(c("editor"),i(x(e,!1).map((e=>e.split("").map((e=>Number.parseInt(e,2))))))):c("")}),[e]),m.useEffect((()=>{"editor"!==p?(c("cell"),t(a.map((e=>e.join(""))).join(" "))):c("")}),[a]),m.createElement("div",{className:(0,r.default)("hero","shadow--lw",s)},m.createElement("div",{className:"container"},m.createElement("p",{className:"hero__subtitle"},"Pixel-Editor"),m.createElement("div",{className:k},m.createElement("div",{className:(0,r.default)(N)},m.createElement(d.Z,{options:{backgroundColor:"white",canvasWidth:150,canvasHeight:30*a.length}},m.createElement(m.Fragment,null,a.map(((e,t)=>m.createElement("div",{className:(0,r.default)(h),key:t},e.map(((e,n)=>m.createElement("span",{className:(0,r.default)(f,0===e?g:u),key:n,onClick:()=>{const e=(e=>{const t=[];return e.forEach((e=>{const a=[];t.push(a),e.forEach((e=>{a.push(e)}))})),t})(a);e[t][n]=1-e[t][n],i(e)}})))))))),m.createElement("div",{className:v},m.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>i([...a,[0,0,0,0,0]])},"+"),m.createElement("button",{className:"button button--outline button--secondary button--sm",onClick:()=>i([...a.slice(0,-1)])},"-"))),m.createElement("textarea",{placeholder:"Bin\xe4ren Pentacode eingeben",className:(0,r.default)(o),value:e,onChange:e=>{const a=Math.max(e.target.selectionStart,e.target.selectionEnd);t(e.target.value.replace(/[^01\s]/g,"")),setTimeout((()=>e.target.setSelectionRange(a,a)),0)},rows:a.length}))))}))},63437:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(51436),r=a(92814),l=a(86010),i=a(14842),m=a(67294);const d={none:n.cNd,copied:n.E9T,error:n.nYk,spin:n.IJ7,ready:n.Yjj},s={none:"button--primary",ready:"button--primary",error:"button--danger",copied:"button--success",spin:"button--secondary"},o=e=>{let{children:t,options:a}=e;const[n,o]=m.useState(void 0),[p,c]=m.useState("none"),k=m.useRef(null);return m.useEffect((()=>{if(["none","spin","ready"].includes(p))return;const e=setTimeout((()=>c("copied"===p?"ready":"none")),2e3);return()=>clearTimeout(e)}),[p]),m.useEffect((()=>{"none"!==p&&c("none")}),[t]),m.createElement(m.Fragment,null,m.createElement("button",{className:(0,l.default)("button","button--outline","button--sm",s[p]),disabled:"spin"===p,onClick:()=>{if(null!==k.current){if("none"===p)return c("spin"),(0,i.SE)(k.current,a).then((e=>{o(e),c("ready")}));if("ready"===p)try{navigator.clipboard.write([new ClipboardItem({"image/png":n})]).then((()=>{c("copied")})).catch((e=>{c("error"),console.warn(e)}))}catch(e){console.warn(e),c("error")}}}},m.createElement(r.G,{icon:d[p]})),m.createElement("div",{ref:k,className:"copy-container"},t))}},78385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=a(83117),r=(a(67294),a(3905)),l=a(15226);const i={sidebar_custom_props:{id:"6ebe4267-65ee-4376-affa-910edd23b5df",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=894637"}}},m="Blockchiffre",d={unversionedId:"Kryptologie/Symmetrisch/blockchiffre",id:"version-25h/Kryptologie/Symmetrisch/blockchiffre",title:"Blockchiffre",description:"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden Blockchiffren erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in Bl\xf6cken verschl\xfcsselt wird.",source:"@site/versioned_docs/version-25h/08-Kryptologie/03-Symmetrisch/04-blockchiffre.md",sourceDirName:"08-Kryptologie/03-Symmetrisch",slug:"/Kryptologie/Symmetrisch/blockchiffre",permalink:"/25h/Kryptologie/Symmetrisch/blockchiffre",draft:!1,tags:[],version:"25h",sidebarPosition:4,frontMatter:{sidebar_custom_props:{id:"6ebe4267-65ee-4376-affa-910edd23b5df",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=894637"}}},sidebar:"version-25h/sidebar",previous:{title:"XOR-Verschl\xfcsselung",permalink:"/25h/Kryptologie/Symmetrisch/xor"},next:{title:"Verkettung von Bl\xf6cken",permalink:"/25h/Kryptologie/Symmetrisch/block-chaining"}},s={},o=[{value:"Blockl\xe4nge",id:"blockl\xe4nge",level:2},{value:"Verschl\xfcsselung in Bl\xf6cken",id:"verschl\xfcsselung-in-bl\xf6cken",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("Comment"),k=p("Answer"),N={toc:o};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"blockchiffre"},"Blockchiffre"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im vorherigen Beispiel war der Schl\xfcssel gleich lang wie der Klartext. Da dies in der Realit\xe4t schwierig zu bewerkstelligen ist, wurden ",(0,r.kt)("strong",{parentName:"p"},"Blockchiffren")," erfunden. Sie heissen so, weil der Text nicht mehr als ganzes, sondern in ",(0,r.kt)("strong",{parentName:"p"},"Bl\xf6cken")," verschl\xfcsselt wird."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Aktuelle Verschl\xfcsselungsverfahren",type:"info"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Aktuelle Verschl\xfcsselungsverfahren sind so komplex, dass wir sie unm\xf6glich in dieser kurzen Zeit verstehen k\xf6nnen. Daher werden wir viele der nachfolgend erw\xe4hnten Verfahren nur anhand von Analogien und nicht auf mathematischer Ebene kennenlernen."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Beim Thema Blockchiffren wollen wir aber ins technische eintauchen und uns anhand einer einfachen Verschl\xfcsselung (XOR) anschauen, wie moderne Verschl\xfcsselung funktioniert."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"blockl\xe4nge"},"Blockl\xe4nge"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Klartext\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"GEHEIMNACHRICHT")," "),(0,r.kt)("dt",{parentName:"dl"},"Key\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"PENTA"))),(0,r.kt)(c,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Da der Klartext dreimal so lange ist wie der Schl\xfcssel, muss der Text in drei Teile aufgeteilt werden, welche wir separat verschl\xfcsseln. Die Blockl\xe4nge entspricht also der Schl\xfcssell\xe4nge."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"verschl\xfcsselung-in-bl\xf6cken"},"Verschl\xfcsselung in Bl\xf6cken"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im folgenden Beispiel wird der oben bereits erw\xe4hnte Klartext mit dem Schl\xfcssel bitweise mit XOR verschl\xfcsselt:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{style:{className:"slim-table,center"},className:"flex flex-cards slim-table center"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"445px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"block-1"},"Block 1"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u2800"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pentacode Block 1"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Geheimtext"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"p")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GEHEI")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"00111 00101 01000 00101 01001")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"k")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10111 00000 00110 10001 01000")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"W FQH"))))),(0,r.kt)(c,{parentName:"div",type:"table",nr:0,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"445px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"block-2"},"Block 2"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u2800"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pentacode Block 2"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Geheimtext"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"p")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MNACH")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"01101 00101 10011 10100 10010")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"k")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"11101 00000 11101 00000 10011")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},". . S"))))),(0,r.kt)(c,{parentName:"div",type:"table",nr:1,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"445px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"block-3"},"Block 3"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u2800"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Text"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pentacode Block 3"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Geheimtext"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"p")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RICHT")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"00101 00110 00110 00101 01110")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"k")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PENTA")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10000 00101 01110 10100 00001")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"c")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10101 00011 01000 10001 01111")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UCHQO"))))),(0,r.kt)(c,{parentName:"div",type:"table",nr:2,mdxType:"Comment"}))))),(0,r.kt)("admonition",{title:"Aufgabe XOR-Blockchiffre",type:"aufgabe"},(0,r.kt)(k,{type:"state",webKey:"71021726-0ecd-4e23-a12c-f56d8102460d",mdxType:"Answer"}),(0,r.kt)(l.H4,{mdxType:"TextEditor"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den folgenden Text mit der XOR-Blockchiffre:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Text\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"PAKET ZUGESTELLT")),(0,r.kt)("dt",{parentName:"dl"},"Schl\xfcssel\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dd"},"BETA"))),(0,r.kt)(c,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"})),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Codieren Sie zuerst den Text mit Pentacode"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Codieren Sie anschliessend den Schl\xfcssel mit Pentacode."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Verschl\xfcsseln Sie den bin\xe4r dargestellten Text anschliessend mit dem bin\xe4r dargestellten Schl\xfcssel mittels XOR-Blockchiffre."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Decodieren Sie diesen wiederum mit Pentacode und \xfcberpr\xfcfen Sie die L\xf6sung."),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Halten Sie Ihren L\xf6sungsweg unten fest:"),(0,r.kt)(c,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)(k,{type:"text",webKey:"3bce79ec-5813-4d29-a7c5-3fec156bd472",monospace:!0,mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"l\xf6sung"},"L\xf6sung"),(0,r.kt)(c,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)(k,{type:"string",webKey:"773c8965-eecf-43fa-801f-d079fb81ad20",solution:"RD@DVENTE GUGIXU",sanitizer:e=>e.trim().toUpperCase(),mdxType:"Answer"})))}h.isMDXComponent=!0}}]);