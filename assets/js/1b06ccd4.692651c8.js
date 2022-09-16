"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[57494],{30575:(e,n,a)=>{a.d(n,{Z:()=>f});var t=a(86010),r=a(71217),s=a(67294);const i="pwContainer_eQcZ",l="achievement_al8G",m="notice_akVE",d="warning_kDn7",o="insecure_Zw0i",p="note_QSD2",c="zeros_lAEQ";var u=a(97566);const h={achievement:0,notice:1,warning:2,insecure:3},g={instantly:"sofort",forever:"nie"},k=[{singular:"Nanosekunde",plural:"Nanosekunden",seconds:1e-9},{singular:"Mikrosekunde",plural:"Mikrosekunden",seconds:1e-6},{singular:"Millisekunde",plural:"Millisekunden",abbreviations:["ms","msec"],seconds:.001},{singular:"second",plural:"Sekunden",abbreviations:["s","sec","secs"],seconds:1},{singular:"Minute",plural:"Minuten",abbreviations:["m","min","mins"],seconds:60},{singular:"Stunde",plural:"Stunden",abbreviations:["h"],seconds:3600},{singular:"Tag",plural:"Tagen",seconds:86400},{singular:"Woche",plural:"Wochen",seconds:604800},{singular:"Monat",plural:"Monaten",seconds:2626560},{singular:"Jahr",plural:"Jahren",seconds:31557600}],v={Millionen:6,Milliarden:9,Billionen:12,Billiarden:15,Trillionen:18,Trilliarden:21,Quadrillionen:24,Quadrilliarden:27,Quintillionen:30,Quintilliarden:33,Sextillionen:36,Sextilliarden:39,Septillionen:42,Septilliarden:45,Oktillionen:48,Oktilliarden:51,Nonillionen:54,Nonilliarden:57,Dezillionen:60,Dezilliarden:63},b={common:{name:"Top {{ value }} h\xe4ufigste Passw\xf6rter",message:"Ihr Passwort wird sehr h\xe4ufig verwendet. Es kann fast augenblicklich geknackt werden."},xkcd:{name:"xkcd",message:"https://xkcd.com/936/"},jeff:{name:"Es gibt immer eine Hintert\xfcr",message:"'The guy who made the software was called Jeff Jeffty Jeff. Born on the first of Jeff, nineteen-jeffty-jeff.'"},lengthVeryShort:{name:"Sehr kurz",message:"Ihr Passwort ist sehr kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},possiblyWord:{name:"Wort oder Name",message:"Ihr Passwort sieht wie ein Wort aus dem W\xf6rterbuch oder ein Name aus. Ein Name mit pers\xf6nlichem Bezug k\xf6nnte einfach erraten werden. Ein Wort aus dem W\xf6rterbuch kann sehr schnell geknackt werden."},onlyNumbers:{name:"Nur Zahlen",message:"Ihr Passwort besteht nur aus Zahlen. F\xfcgen Sie Buchstaben und Symbole hinzu, um es sicherer zu machen."},wordAndNumber:{name:"Wort und Zahl",message:"Ihr Passwort besteht nur aus einem Wort und ein paar Ziffern. Dies ist eine h\xe4ufige Kombination und kann sehr rasch geknackt werden."},lengthShort:{name:"Kurz",message:"Ihr Passwort ist ziemlich kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},justLetters:{name:"Nur Buchstaben",message:"Ihr Passwort besteht nur aus Buchstaben. F\xfcgen Sie Zahlen und Symbole hinzu, um es sicherer zu machen."},noSymbols:{name:"Keine Symbole",message:"Ihr Passwort enth\xe4lt nur Zahlen und Buchstaben. F\xfcgen Sie ein Symbol hinzu, um es sicherer zu machen."},telephone:{name:"Telefonnummer oder Datum",message:"Ihr Passwort k\xf6nnte eine Telefonnummer oder ein Datum sein. Falls es einen pers\xf6nlichen Bezug hat, kann es einfach zu erraten sein."},repeatedPattern:{name:"Wiederholendes Muster",message:"Wiederholende Zeichen oder Muster k\xf6nnen Ihr Passwort vorhersagbar machen."},nonStandardCharacters:{name:"Spezialzeichen",message:"Ihr Passwort enth\xe4lt ein Spezialzeichen und ist dadurch sicherer."},lengthLong:{name:"Lang",message:"Ihr Passwort ist l\xe4nger als sechzehn Zeichen."}},w={0:l,1:m,2:d,3:o},N={0:"badge--success",1:"badge--primary",2:"badge--warning",3:"badge--danger"},f=(0,r.Pi)((()=>{const e=s.useRef(null),[n,a]=s.useState(!1),[r,l]=s.useState(1),[m,d]=s.useState(""),[o,f]=s.useState(""),[y,P]=s.useState([]),[C,S]=s.useState("");return s.useEffect((()=>{var e;(e="/js/hsimp.min.js",new Promise(((n,a)=>{const t=document.createElement("script");document.body.appendChild(t),t.async=!0,t.onload=n,t.onerror=a,t.src=e}))).then((()=>{const e=window.hsimp;e.setDictionary(g),e.setPeriodDictionary(k),e.setNamedNumberDictionary(v),e.setCheckerDictionary(b),a(!0)}))}),[]),s.useEffect((()=>{if(!n||!e.current||!C)return void f("");const a={outputTime:(e,n)=>{f(e)},outputChecks:(e,n)=>{let a=0;e.forEach((e=>{a=Math.max(a,h[e.level])})),n||(a=1),l(a),P(e)}};window.hsimp(a,e.current)}),[C,n,e]),s.useEffect((()=>{if(!o)return d("");const e=o.split(" "),n=e[e.length-1],a=e[e.length-2],t=e[e.length-3],r=v[a];if(void 0===t||void 0===r||r<10)d("");else{const e=t.padEnd(r+t.length,"0").replace(/\B(?=(\d{3})+(?!\d))/g,"'");d(e+" "+n)}}),[o]),s.createElement("div",{className:(0,t.default)("hero","shadow--lw",u.Z.container,i,w[r])},s.createElement("p",{className:"hero__subtitle"},"Passwort Checker"),s.createElement("h4",null,"Wie sicher ist mein Passwort?"),s.createElement("input",{placeholder:"Passwort",ref:e,type:"password",onChange:e=>S(e.target.value)}),o&&s.createElement("span",{className:(0,t.default)("badge",N[r])},o),o&&s.createElement("div",null,"Ein Computer kann das eingegebene Passwort ",s.createElement("b",null,(e=>e&&"sofort"!==e&&"nie"!==e?"in "+e:e)(o))," erraten."),m&&s.createElement("div",{className:(0,t.default)(c)},"(in ",m,".)"),s.createElement("div",null,s.createElement("ul",null,y.map(((e,n)=>s.createElement("li",{key:n},s.createElement("b",null,e.name),": ",e.message))))),s.createElement("div",{className:(0,t.default)(p)},"* Die eingegebenen Passw\xf6rter werden direkt auf Ihrem Ger\xe4t analysiert und werden weder gespeichert noch \xfcbers Internet verschickt."))}))},16214:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>o});var t=a(83117),r=(a(67294),a(3905)),s=(a(61839),a(30575));const i={sidebar_custom_props:{id:"ebe4ae20-e88b-48c1-bbe2-827ba69d58bc"}},l="Passw\xf6rter",m={unversionedId:"ICT-Grundlagen/Sicherheit/Passwoerter",id:"version-26P/ICT-Grundlagen/Sicherheit/Passwoerter",title:"Passw\xf6rter",description:"Unter https://howsecureismypassword.net/ kann die Sicherheit Ihres Passworts analysiert werden - insbesondere spannend ist die gesch\xe4tzte Zeit, um das Passwort zu knacken.",source:"@site/versioned_docs/version-26P/01-ICT-Grundlagen/6-Sicherheit/3-Passwoerter.md",sourceDirName:"01-ICT-Grundlagen/6-Sicherheit",slug:"/ICT-Grundlagen/Sicherheit/Passwoerter",permalink:"/26P/ICT-Grundlagen/Sicherheit/Passwoerter",draft:!1,tags:[],version:"26P",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"ebe4ae20-e88b-48c1-bbe2-827ba69d58bc"}},sidebar:"version-26P/sidebar",previous:{title:"Authentifizierung",permalink:"/26P/ICT-Grundlagen/Sicherheit/Authentifizierung"},next:{title:"Schadsoftware",permalink:"/26P/ICT-Grundlagen/Sicherheit/Schadsoftware"}},d={},o=[{value:"Tipps f\xfcr gute Passw\xf6rter",id:"tipps-f\xfcr-gute-passw\xf6rter",level:2},{value:"Gute, merkbare Passw\xf6rter",id:"gute-merkbare-passw\xf6rter",level:2},{value:"1. Anfangsbuchstaben",id:"1-anfangsbuchstaben",level:3},{value:"2. Vier zuf\xe4llige W\xf6rter",id:"2-vier-zuf\xe4llige-w\xf6rter",level:3},{value:"3. Passwort \xfcberpr\xfcfen",id:"3-passwort-\xfcberpr\xfcfen",level:3},{value:"4. Passwortmanager \ud83c\udfc5",id:"4-passwortmanager-",level:3}],p=(c="Comment",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:o};function h(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"passw\xf6rter"},"Passw\xf6rter"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Unter ",(0,r.kt)("a",{parentName:"p",href:"https://howsecureismypassword.net/"},"https://howsecureismypassword.net/")," kann die Sicherheit Ihres Passworts analysiert werden - insbesondere spannend ist die gesch\xe4tzte Zeit, um das Passwort zu knacken."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"tipps-f\xfcr-gute-passw\xf6rter"},"Tipps f\xfcr gute Passw\xf6rter"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"W\xe4hlen Sie f\xfcr jede Webseite ein individuelles Passwort"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Das Passwort ist mindestens 8 Zeichen lang"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es kommen Buchstaben (gross und klein), Zahlen und Sonderzeichen vor"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"gute-merkbare-passw\xf6rter"},"Gute, merkbare Passw\xf6rter"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es gibt Strategien, um gute Passw\xf6rter zu erstellen, die man sich einfach merken kann."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"1-anfangsbuchstaben"},"1. Anfangsbuchstaben"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Jeden Abend vor dem Schlafen trinke ich eine Tasse Kr\xe4utertee!")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"JA4dStieTKt!")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"2-vier-zuf\xe4llige-w\xf6rter"},"2. Vier zuf\xe4llige W\xf6rter"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"W\xe4hlen Sie vier zuf\xe4llige W\xf6rter. Verwenden Sie beispielsweise einen ",(0,r.kt)("a",{parentName:"p",href:"https://capitalizemytitle.com/zufallswort-generator/"},"Webdienst")," dazu.\n\xdcberlegen Sie sich anschliessend eine Visualisierung, mit welcher Sie sich diese W\xf6rter merken k\xf6nnen."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Weiter k\xf6nnen Buchstaben durch Sonderzeichen und Zahlen ersetzt werden, z.B. jedes 2te ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," wird zu einer ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", oder alle ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," werden als ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," geschrieben."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("blockquote",null,(0,r.kt)("div",{parentName:"blockquote",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wahrscheinlich, Utopisch, Futurlos, Propeller"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Wahr$chein1ichUt0pi$chFuturl0$Pr0pe1ler")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"3-passwort-\xfcberpr\xfcfen"},"3. Passwort \xfcberpr\xfcfen"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)(s.Z,{mdxType:"PasswordChecker"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"4-passwortmanager-"},"4. Passwortmanager \ud83c\udfc5"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Am sichersten ist es, zuf\xe4llige Passw\xf6rter zu verwenden, welche Sie in einem Passwortmanager verwalten.\nSo m\xfcssen Sie sich nur ein (sicheres!) Passwort merken; dasjenige f\xfcr den Passwortmanager.\nIm Manager k\xf6nnen Sie f\xfcr jeden Dienst automatisch ein sicheres Passwort erzeugen lassen.\nF\xfcr g\xe4ngige Passwort-Manager gibt es auch Browser-Plugins, welche das Ausf\xfcllen von Passw\xf6rtern unterst\xfctzen."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://bitwarden.com/"},"BitWarden")," (Empfehlung) - gute Basis-Funktionen und einfaches Handling."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://keepass.info/"},"KeePass")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://www.lastpass.com/"},"LastPass")),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})))))}h.isMDXComponent=!0},97566:(e,n,a)=>{a.d(n,{Z:()=>t});const t={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}}}]);