"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||s;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>O,contentTitle:()=>N,default:()=>D,frontMatter:()=>z,metadata:()=>E,toc:()=>_});var r=t(83117),a=t(67294),s=t(3905),i=t(86010),l=t(71217);const o="pwContainer_eQcZ",u="achievement_al8G",c="notice_akVE",d="warning_kDn7",p="insecure_Zw0i",h="note_QSD2",m="zeros_lAEQ";var g=t(97566);const f={achievement:0,notice:1,warning:2,insecure:3},w={instantly:"sofort",forever:"nie"},k=[{singular:"Nanosekunde",plural:"Nanosekunden",seconds:1e-9},{singular:"Mikrosekunde",plural:"Mikrosekunden",seconds:1e-6},{singular:"Millisekunde",plural:"Millisekunden",abbreviations:["ms","msec"],seconds:.001},{singular:"second",plural:"Sekunden",abbreviations:["s","sec","secs"],seconds:1},{singular:"Minute",plural:"Minuten",abbreviations:["m","min","mins"],seconds:60},{singular:"Stunde",plural:"Stunden",abbreviations:["h"],seconds:3600},{singular:"Tag",plural:"Tagen",seconds:86400},{singular:"Woche",plural:"Wochen",seconds:604800},{singular:"Monat",plural:"Monaten",seconds:2626560},{singular:"Jahr",plural:"Jahren",seconds:31557600}],b={Millionen:6,Milliarden:9,Billionen:12,Billiarden:15,Trillionen:18,Trilliarden:21,Quadrillionen:24,Quadrilliarden:27,Quintillionen:30,Quintilliarden:33,Sextillionen:36,Sextilliarden:39,Septillionen:42,Septilliarden:45,Oktillionen:48,Oktilliarden:51,Nonillionen:54,Nonilliarden:57,Dezillionen:60,Dezilliarden:63},v={common:{name:"Top {{ value }} h\xe4ufigste Passw\xf6rter",message:"Ihr Passwort wird sehr h\xe4ufig verwendet. Es kann fast augenblicklich geknackt werden."},xkcd:{name:"xkcd",message:"https://xkcd.com/936/"},jeff:{name:"Es gibt immer eine Hintert\xfcr",message:"'The guy who made the software was called Jeff Jeffty Jeff. Born on the first of Jeff, nineteen-jeffty-jeff.'"},lengthVeryShort:{name:"Sehr kurz",message:"Ihr Passwort ist sehr kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},possiblyWord:{name:"Wort oder Name",message:"Ihr Passwort sieht wie ein Wort aus dem W\xf6rterbuch oder ein Name aus. Ein Name mit pers\xf6nlichem Bezug k\xf6nnte einfach erraten werden. Ein Wort aus dem W\xf6rterbuch kann sehr schnell geknackt werden."},onlyNumbers:{name:"Nur Zahlen",message:"Ihr Passwort besteht nur aus Zahlen. F\xfcgen Sie Buchstaben und Symbole hinzu, um es sicherer zu machen."},wordAndNumber:{name:"Wort und Zahl",message:"Ihr Passwort besteht nur aus einem Wort und ein paar Ziffern. Dies ist eine h\xe4ufige Kombination und kann sehr rasch geknackt werden."},lengthShort:{name:"Kurz",message:"Ihr Passwort ist ziemlich kurz. Je l\xe4nger ein Passwort ist, desto sicherer ist es."},justLetters:{name:"Nur Buchstaben",message:"Ihr Passwort besteht nur aus Buchstaben. F\xfcgen Sie Zahlen und Symbole hinzu, um es sicherer zu machen."},noSymbols:{name:"Keine Symbole",message:"Ihr Passwort enth\xe4lt nur Zahlen und Buchstaben. F\xfcgen Sie ein Symbol hinzu, um es sicherer zu machen."},telephone:{name:"Telefonnummer oder Datum",message:"Ihr Passwort k\xf6nnte eine Telefonnummer oder ein Datum sein. Falls es einen pers\xf6nlichen Bezug hat, kann es einfach zu erraten sein."},repeatedPattern:{name:"Wiederholendes Muster",message:"Wiederholende Zeichen oder Muster k\xf6nnen Ihr Passwort vorhersagbar machen."},nonStandardCharacters:{name:"Spezialzeichen",message:"Ihr Passwort enth\xe4lt ein Spezialzeichen und ist dadurch sicherer."},lengthLong:{name:"Lang",message:"Ihr Passwort ist l\xe4nger als sechzehn Zeichen."}},y={0:u,1:c,2:d,3:p},P={0:"badge--success",1:"badge--primary",2:"badge--warning",3:"badge--danger"},S=(0,l.Pi)((()=>{const e=a.useRef(null),[n,t]=a.useState(!1),[r,s]=a.useState(1),[l,u]=a.useState(""),[c,d]=a.useState(""),[p,S]=a.useState([]),[z,N]=a.useState("");return a.useEffect((()=>{var e;(e="/js/hsimp.min.js",new Promise(((n,t)=>{const r=document.createElement("script");document.body.appendChild(r),r.async=!0,r.onload=n,r.onerror=t,r.src=e}))).then((()=>{const e=window.hsimp;e.setDictionary(w),e.setPeriodDictionary(k),e.setNamedNumberDictionary(b),e.setCheckerDictionary(v),t(!0)}))}),[]),a.useEffect((()=>{if(!n||!e.current||!z)return void d("");const t={outputTime:(e,n)=>{d(e)},outputChecks:(e,n)=>{let t=0;e.forEach((e=>{t=Math.max(t,f[e.level])})),n||(t=1),s(t),S(e)}};window.hsimp(t,e.current)}),[z,n,e]),a.useEffect((()=>{if(!c)return u("");const e=c.split(" "),n=e[e.length-1],t=e[e.length-2],r=e[e.length-3],a=b[t];if(void 0===r||void 0===a||a<10)u("");else{const e=r.padEnd(a+r.length,"0").replace(/\B(?=(\d{3})+(?!\d))/g,"'");u(e+" "+n)}}),[c]),a.createElement("div",{className:(0,i.default)("hero","shadow--lw",g.Z.container,o,y[r])},a.createElement("p",{className:"hero__subtitle"},"Passwort Checker"),a.createElement("h4",null,"Wie sicher ist mein Passwort?"),a.createElement("input",{placeholder:"Passwort",ref:e,type:"password",onChange:e=>N(e.target.value)}),c&&a.createElement("span",{className:(0,i.default)("badge",P[r])},c),c&&a.createElement("div",null,"Ein Computer kann das eingegebene Passwort ",a.createElement("b",null,(e=>e&&"sofort"!==e&&"nie"!==e?"in "+e:e)(c))," erraten."),l&&a.createElement("div",{className:(0,i.default)(m)},"(in ",l,".)"),a.createElement("div",null,a.createElement("ul",null,p.map(((e,n)=>a.createElement("li",{key:n},a.createElement("b",null,e.name),": ",e.message))))),a.createElement("div",{className:(0,i.default)(h)},"* Die eingegebenen Passw\xf6rter werden direkt auf Ihrem Ger\xe4t analysiert und werden weder gespeichert noch \xfcbers Internet verschickt."))})),z={title:"Sichere Passw\xf6rter"},N="Sichere Passw\xf6rter",E={unversionedId:"Kryptologie/Hashfunktionen/passwords",id:"Kryptologie/Hashfunktionen/passwords",title:"Sichere Passw\xf6rter",description:"--width=500px",source:"@site/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",sourceDirName:"Kryptologie/05-Hashfunktionen",slug:"/Kryptologie/Hashfunktionen/passwords",permalink:"/Kryptologie/Hashfunktionen/passwords",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/05-Hashfunktionen/02-passwords.md",tags:[],version:"current",lastUpdatedAt:1659430238,formattedLastUpdatedAt:"2. Aug. 2022",sidebarPosition:2,frontMatter:{title:"Sichere Passw\xf6rter"},sidebar:"sidebar",previous:{title:"Authentifizierung",permalink:"/Kryptologie/Hashfunktionen/Authentifizierung"},next:{title:"Passw\xf6rter Speichern",permalink:"/Kryptologie/Hashfunktionen/save-passwords"}},O={},_=[{value:"Tipps f\xfcr gute Passw\xf6rter",id:"tipps-f\xfcr-gute-passw\xf6rter",level:2},{value:"Gute, merkbare Passw\xf6rter",id:"gute-merkbare-passw\xf6rter",level:2},{value:"1. Anfangsbuchstaben",id:"1-anfangsbuchstaben",level:3},{value:"2. Vier zuf\xe4llige W\xf6rter",id:"2-vier-zuf\xe4llige-w\xf6rter",level:3},{value:"3. Passwortmanager \ud83c\udfc5",id:"3-passwortmanager-",level:3}],C=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",n)},x=C("Figure"),j=C("SourceRef"),W=C("Answer"),T={toc:_};function D(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},T,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sichere-passw\xf6rter"},"Sichere Passw\xf6rter"),(0,s.kt)(x,{options:{width:"500px"},mdxType:"Figure"},(0,s.kt)("img",{alt:"--width=500px",src:t(51892).Z,width:"740",height:"601"}),(0,s.kt)("figcaption",{parentName:"Figure"},(0,s.kt)(j,{parentName:"figcaption",bib:{author:"XKCD",source:"https://xkcd.com/936/",licence:"Creative Commons 2",licence_url:"https://creativecommons.org/licenses/by-nc/2.5/",edited:!1},mdxType:"SourceRef"}))),(0,s.kt)(S,{mdxType:"PasswordChecker"}),(0,s.kt)("h2",{id:"tipps-f\xfcr-gute-passw\xf6rter"},"Tipps f\xfcr gute Passw\xf6rter"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"W\xe4hlen Sie f\xfcr jede Webseite ein individuelles Passwort"),(0,s.kt)("li",{parentName:"ul"},"Das Passwort ist mindestens 8 Zeichen lang"),(0,s.kt)("li",{parentName:"ul"},"Es kommen Buchstaben (gross und klein), Zahlen und Sonderzeichen vor")),(0,s.kt)("h2",{id:"gute-merkbare-passw\xf6rter"},"Gute, merkbare Passw\xf6rter"),(0,s.kt)("p",null,"Es gibt Strategien, um gute Passw\xf6rter zu erstellen, die man sich einfach merken kann."),(0,s.kt)("h3",{id:"1-anfangsbuchstaben"},"1. Anfangsbuchstaben"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Jeden Abend vor dem Schlafen trinke ich eine Tasse Kr\xe4utertee!")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"JA4dStieTKt!"))),(0,s.kt)("h3",{id:"2-vier-zuf\xe4llige-w\xf6rter"},"2. Vier zuf\xe4llige W\xf6rter"),(0,s.kt)("p",null,"W\xe4hlen Sie vier zuf\xe4llige W\xf6rter. Verwenden Sie beispielsweise einen ",(0,s.kt)("a",{parentName:"p",href:"https://capitalizemytitle.com/zufallswort-generator/"},"Webdienst")," dazu.\n\xdcberlegen Sie sich anschliessend eine Visualisierung, mit welcher Sie sich diese W\xf6rter merken k\xf6nnen."),(0,s.kt)("p",null,"Weiter k\xf6nnen Buchstaben durch Sonderzeichen und Zahlen ersetzt werden, z.B. jedes 2te ",(0,s.kt)("inlineCode",{parentName:"p"},"l")," wird zu einer ",(0,s.kt)("inlineCode",{parentName:"p"},"1"),", oder alle ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," werden als ",(0,s.kt)("inlineCode",{parentName:"p"},"$")," geschrieben."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Wahrscheinlich, Utopisch, Futurlos, Propeller")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Wahr$chein1ichUt0pi$chFuturl0$Pr0pe1ler")),(0,s.kt)("h3",{id:"3-passwortmanager-"},"3. Passwortmanager \ud83c\udfc5"),(0,s.kt)("p",null,"Am sichersten ist es, zuf\xe4llige Passw\xf6rter zu verwenden, welche Sie in einem Passwortmanager verwalten.\nSo m\xfcssen Sie sich nur ein (sicheres!) Passwort merken; dasjenige f\xfcr den Passwortmanager.\nIm Manager k\xf6nnen Sie f\xfcr jeden Dienst automatisch ein sicheres Passwort erzeugen lassen.\nF\xfcr g\xe4ngige Passwort-Manager gibt es auch Browser-Plugins, welche das Ausf\xfcllen von Passw\xf6rtern unterst\xfctzen."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitwarden.com/"},"BitWarden")," (\ud83c\udfc5 Empfehlung) - gute Basis-Funktionen und einfaches Handling, zudem Open Source (Kerckhoffs Prinzip \ud83d\ude09)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://keepass.info/"},"KeePass")," - auch Open Source"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.lastpass.com/"},"LastPass"))),(0,s.kt)(W,{type:"text",webKey:"9568cbe5-e9dc-4471-9e5e-03ebf92aa10a",placeholder:"Notizen...",mdxType:"Answer"}))}D.isMDXComponent=!0},97566:(e,n,t)=>{t.d(n,{Z:()=>r});const r={container:"container_sbfu",input:"input_t8LO",inputContainer:"inputContainer_xaWo",active:"active_FWSy",modes:"modes_gMDN",caesarKey:"caesarKey__4ts",pills:"pills_V2v9",stringInputContainer:"stringInputContainer_bd69",iv:"iv_aZ1Y",errorBadge:"errorBadge_aXF7",invalid:"invalid_bBlC",factorization:"factorization_gels",stage:"stage_afja",result:"result_MpO5",badge:"badge_YUh1",digits:"digits_LpeZ",copy:"copy_OhCa"}},51892:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/xkcd_password_strength-eb683b06e819cdf273fffc96247a5775.png"}}]);