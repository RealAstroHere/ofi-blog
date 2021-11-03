"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2569],{35130:function(e,t,a){var n=a(86010),s=a(96486),i=a(67294),r=a(96734),m=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],l=function(e){return e.toUpperCase().replace(/\s+/g," ")};t.Z=function(){var e=i.useState(""),t=e[0],a=e[1],p=i.useState(m.join("")),o=p[0],c=p[1],d=i.useState(m),N=d[0],k=d[1],h=i.useState(m),u=h[0],g=h[1],f=i.useState(""),b=f[0],v=f[1],C=i.useState("text"),w=C[0],y=C[1];return i.useEffect((function(){k((0,s.differenceWith)(m,o.split(""),s.isEqual))}),[o]),i.useEffect((function(){if("text"===w&&0!==t.length&&o.length===m.length){var e=t.split("").map((function(e){return m.includes(e)?o[m.indexOf(e)]:e}));v(e.join(""))}}),[t,o,N]),i.useEffect((function(){if("cipher"===w&&0!==b.length&&o.length===m.length){var e=b.split("").map((function(e){return m.includes(e)?m[o.split("").indexOf(e)]:e}));a(e.join(""))}}),[b,o,N]),i.useEffect((function(){var e=o.split("");(0,s.uniq)(o.split("")).forEach((function(t){e.splice(e.indexOf(t),1)})),g((0,s.uniq)(e))}),[N]),i.createElement("div",{className:(0,n.default)("hero","shadow--lw",r.Z.container)},i.createElement("div",{className:"container"},i.createElement("p",{className:"hero__subtitle"},"Substitutions-Chiffre"),i.createElement("h4",null,"Klartext"),i.createElement("textarea",{className:(0,n.default)(r.Z.input),value:t,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);y("text"),a(l(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Klartext"}),i.createElement("div",{className:r.Z.stringInputContainer},i.createElement("h4",null,i.createElement("label",{htmlFor:"subs-key"},"Schl\xfcssel")),i.createElement("div",{className:(0,n.default)(r.Z.iv,"button-group")},i.createElement("input",{id:"subs-key",type:"text",placeholder:"Ein vollst\xe4ndiges Aplhabet",value:o,className:(0,n.default)(o.length!==m.length&&r.Z.invalid),onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);c(function(e){return e.toUpperCase().replace(/[^A-Z ]/g,"")}(e.target.value)),setTimeout((function(){e.target.setSelectionRange(t,t)}),0)}}),i.createElement("button",{className:(0,n.default)("button","button--primary","button--sm"),onClick:function(){c((0,s.shuffle)(m).join(""))}},"Zuf\xe4llig Setzen")),N.length>0&&i.createElement("div",null,i.createElement("span",null,"Im Schl\xfcssel fehlende Buchstaben:"),N.map((function(e){return i.createElement("span",{className:(0,n.default)("badge","badge--danger"),key:e},e)}))),u.length>0&&i.createElement("div",null,i.createElement("span",null,"Im Schl\xfcssel doppelt vorhandene Buchstaben:"),u.map((function(e){return i.createElement("span",{className:(0,n.default)("badge","badge--warning"),key:e},e)})))),i.createElement("h4",null,"Geheimtext"),i.createElement("textarea",{className:(0,n.default)(r.Z.input),value:b,onChange:function(e){var t=Math.max(e.target.selectionStart,e.target.selectionEnd);y("cipher"),v(l(e.target.value)),setTimeout((function(){return e.target.setSelectionRange(t,t)}),0)},rows:5,placeholder:"Caesar Verschl\xfcsselter Geheimtext"})))}},1302:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return N}});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),r=a(35130),m=["components"],l={title:"Substitution"},p="Monoalphabetische Substitution [^1]",o={unversionedId:"Kryptologie/Antike/substitution",id:"version-24f/Kryptologie/Antike/substitution",isDocsHomePage:!1,title:"Substitution",description:"Allgemein wird ein Verschl\xfcsselungsverfahren, bei welchem jedes Zeichen durch ein festgelegtes anderes Zeichen ersetzt wird, eine monoalphabetische Substitution genannt.",source:"@site/versioned_docs/version-24f/06-Kryptologie/02-Antike/04-substitution.md",sourceDirName:"06-Kryptologie/02-Antike",slug:"/Kryptologie/Antike/substitution",permalink:"/24f/Kryptologie/Antike/substitution",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/06-Kryptologie/02-Antike/04-substitution.md",tags:[],version:"24f",sidebarPosition:4,frontMatter:{title:"Substitution"},sidebar:"version-24f/sidebar",previous:{title:"Caesar-Chiffre",permalink:"/24f/Kryptologie/Antike/Caesar"},next:{title:"Begriffe",permalink:"/24f/Kryptologie/Antike/Begriff"}},c=[{value:"Substitutions-Chiffre ausprobieren",id:"substitutions-chiffre-ausprobieren",children:[],level:2}],d={toc:c};function N(e){var t=e.components,a=(0,s.Z)(e,m);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monoalphabetische-substitution-"},"Monoalphabetische Substitution ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("p",null,"Allgemein wird ein Verschl\xfcsselungsverfahren, bei welchem jedes Zeichen durch ein festgelegtes anderes Zeichen ersetzt wird, eine ",(0,i.kt)("strong",{parentName:"p"},"monoalphabetische Substitution")," genannt."),(0,i.kt)("p",null,"Das Verfahren wird \xabmonoalphabetisch\xbb genannt, weil zum Verschl\xfcsseln eines Textes nur ",(0,i.kt)("strong",{parentName:"p"},"ein Alphabet")," zum Einsatz kommt. Im Gegensatz dazu werden bei \xabpolyalphabetischen\xbb Verfahren f\xfcr die Verschl\xfcsselung eines einzigen Textes mehrere verschiedene Alphabete verwendet (siehe z.B. Vigen\xe8re)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Monoalphabetische Substitution"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Klartextalphabet"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A")," ",(0,i.kt)("inlineCode",{parentName:"td"},"B")," ",(0,i.kt)("inlineCode",{parentName:"td"},"C")," ",(0,i.kt)("inlineCode",{parentName:"td"},"D")," ",(0,i.kt)("inlineCode",{parentName:"td"},"E")," ",(0,i.kt)("inlineCode",{parentName:"td"},"F")," ",(0,i.kt)("inlineCode",{parentName:"td"},"G")," ",(0,i.kt)("inlineCode",{parentName:"td"},"H")," ",(0,i.kt)("inlineCode",{parentName:"td"},"I")," ",(0,i.kt)("inlineCode",{parentName:"td"},"J")," ",(0,i.kt)("inlineCode",{parentName:"td"},"K")," ",(0,i.kt)("inlineCode",{parentName:"td"},"L")," ",(0,i.kt)("inlineCode",{parentName:"td"},"M")," ",(0,i.kt)("inlineCode",{parentName:"td"},"N")," ",(0,i.kt)("inlineCode",{parentName:"td"},"O")," ",(0,i.kt)("inlineCode",{parentName:"td"},"P")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,i.kt)("inlineCode",{parentName:"td"},"R")," ",(0,i.kt)("inlineCode",{parentName:"td"},"S")," ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," ",(0,i.kt)("inlineCode",{parentName:"td"},"U")," ",(0,i.kt)("inlineCode",{parentName:"td"},"V")," ",(0,i.kt)("inlineCode",{parentName:"td"},"W")," ",(0,i.kt)("inlineCode",{parentName:"td"},"X")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Z"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Geheimtextalphabet"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"M")," ",(0,i.kt)("inlineCode",{parentName:"td"},"B")," ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," ",(0,i.kt)("inlineCode",{parentName:"td"},"C")," ",(0,i.kt)("inlineCode",{parentName:"td"},"H")," ",(0,i.kt)("inlineCode",{parentName:"td"},"J")," ",(0,i.kt)("inlineCode",{parentName:"td"},"F")," ",(0,i.kt)("inlineCode",{parentName:"td"},"S")," ",(0,i.kt)("inlineCode",{parentName:"td"},"A")," ",(0,i.kt)("inlineCode",{parentName:"td"},"E")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Y")," ",(0,i.kt)("inlineCode",{parentName:"td"},"O")," ",(0,i.kt)("inlineCode",{parentName:"td"},"R")," ",(0,i.kt)("inlineCode",{parentName:"td"},"D")," ",(0,i.kt)("inlineCode",{parentName:"td"},"N")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Z")," ",(0,i.kt)("inlineCode",{parentName:"td"},"W")," ",(0,i.kt)("inlineCode",{parentName:"td"},"I")," ",(0,i.kt)("inlineCode",{parentName:"td"},"U")," ",(0,i.kt)("inlineCode",{parentName:"td"},"P")," ",(0,i.kt)("inlineCode",{parentName:"td"},"G")," ",(0,i.kt)("inlineCode",{parentName:"td"},"X")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Q")," ",(0,i.kt)("inlineCode",{parentName:"td"},"K")," ",(0,i.kt)("inlineCode",{parentName:"td"},"L")," ",(0,i.kt)("inlineCode",{parentName:"td"},"V"))))),(0,i.kt)("p",null,"Es ist ersichtlich, dass eine Entschl\xfcsselung nun viel aufw\xe4ndiger ist, da keine Alphabet-Verschiebung mehr stattfindet, sondern eine wilde Vertauschung (= Substitution) der Buchstaben."),(0,i.kt)("p",null,"Die Nachricht ",(0,i.kt)("inlineCode",{parentName:"p"},"EIN KLEINER RABE FLIEGT AM TAGE")," wird verschl\xfcsselt zu ",(0,i.kt)("inlineCode",{parentName:"p"},"HAD YOHADHI IMBH JOAHFP MR PMFH"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Tatsache, dass der Buchstabe ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," im obigen Beispiel \xabnicht\xbb verschl\xfcsselt wird (also auch im Geheimtext ein ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," ist), stellt \xfcberhaupt kein Problem dar \u2013 im Gegenteil, es w\xfcrde die Anzahl M\xf6glichkeiten einschr\xe4nken, wenn es verboten w\xe4re, dass einzelne Buchstaben auch unver\xe4ndert bleiben d\xfcrfen."))),(0,i.kt)("p",null,"Bei dieser Substitution h\xe4ngt die Anzahl m\xf6glicher Verschl\xfcsselungen von der Gr\xf6sse des zugrundeliegenden Zeichensatzes ab. Wenn ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," Zeichen verwendet werden, gibt es ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"!")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n!")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},"!")))))," unterschiedliche Verschl\xfcsselungen. ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("span",{parentName:"em",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"!")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n!")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},"!"))))),' bedeutet "n Fakult\xe4t" und ist das Produkt aller nat\xfcrlicher Zahlen bis zur angegebenen Zahl, Beispiel: ',(0,i.kt)("span",{parentName:"em",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"4"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"!"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mn",{parentName:"mrow"},"4"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"3"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"2"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mn",{parentName:"mrow"},"24")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mclose"},"!"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"mord"},"4"))))),")"),"."),(0,i.kt)("h2",{id:"substitutions-chiffre-ausprobieren"},"Substitutions-Chiffre ausprobieren"),(0,i.kt)(r.Z,{mdxType:"Substitution"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://rothe.io/?b=crypto&p=481987"},"rothe.io"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}N.isMDXComponent=!0},96734:function(e,t){t.Z={container:"container_2mMF",input:"input_2qsT",inputContainer:"inputContainer_3KCp",active:"active_3XBs",modes:"modes_14Lo",caesarKey:"caesarKey_1wNF",pills:"pills_2O4B",stringInputContainer:"stringInputContainer_3pvp",iv:"iv_7Q9c",errorBadge:"errorBadge_3qNJ",invalid:"invalid_2viD",factorization:"factorization_3pLw",stage:"stage_3WsF",result:"result_XUyd",badge:"badge_GrJw",digits:"digits_3yg7",copy:"copy_1VW2"}}}]);