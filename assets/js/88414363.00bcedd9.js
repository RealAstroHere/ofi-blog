"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[43244],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=m(n),p=a,u=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var m=2;m<i;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(667294),a={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},i=n(592814),s=n(51436),o=n(386010),l=function(e){return r.createElement("span",{className:a.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",a.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:a.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(i.G,{icon:s.Xjp}))))},m=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},c=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+m(n.size)+")",t.maxHeight=m(n.size),delete n.size),n.height&&(t.maxHeight=m(n.height),t.height=m(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+m(n.width)+")",t.width=m(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},d=function(e){if(e.isInline)return r.createElement(c,e);var t=r.useState(!1),n=(t[0],t[1]),i=r.useState(!1),s=i[0],m=i[1],d=e.caption&&"undefined"!==e.caption,f=e.bib||d;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(a.container,e.options.noMargins&&a.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,a,i,s;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,a=e.clientY,i=t.left<=r&&t.right>=r,s=t.top<=a&&t.bottom>=a,i&&s||n(!1)}},r.createElement(c,e),f&&r.createElement("figcaption",null,d&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(a.bib,s?a.visible:void 0),onClick:function(){return m(!s)}},"@"),s&&r.createElement(l,e.bib)))}},843730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var r=n(583117),a=n(480102),i=(n(667294),n(603905)),s=n(884384),o=["components"],l={title:"3. Freie Open Source Software"},m="3. Freie Open Source Software",c={unversionedId:"Computer/Betriebssystem/foss",id:"version-24f/Computer/Betriebssystem/foss",title:"3. Freie Open Source Software",description:"Europalette",source:"@site/versioned_docs/version-24f/07-Computer/08-Betriebssystem/03-foss.md",sourceDirName:"07-Computer/08-Betriebssystem",slug:"/Computer/Betriebssystem/foss",permalink:"/24f/Computer/Betriebssystem/foss",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/07-Computer/08-Betriebssystem/03-foss.md",tags:[],version:"24f",sidebarPosition:3,frontMatter:{title:"3. Freie Open Source Software"},sidebar:"version-24f/sidebar",previous:{title:"2. Betriebssysteme",permalink:"/24f/Computer/Betriebssystem/betriesbssysteme"},next:{title:"Benutzerverwaltung",permalink:"/24f/Computer/Betriebssystem/Material/benutzerverwaltung"}},d={},f=[{value:"Softwarelizenzen",id:"softwarelizenzen",level:2},{value:"Freie Software",id:"freie-software",level:2},{value:"Die vier Freiheiten",id:"die-vier-freiheiten",level:2},{value:"Open Source Software (OSS)",id:"open-source-software-oss",level:2},{value:"Propriet\xe4re Software",id:"propriet\xe4re-software",level:2},{value:"Freie Lizenzen",id:"freie-lizenzen",level:2},{value:"Copyleft",id:"copyleft",level:2}],p={toc:f};function u(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-freie-open-source-software"},"3. Freie Open Source Software"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Oliver Eltinger",author_uri:"",licence:"CC-BY-SA-4.0",licence_url:"https://commons.wikimedia.org/wiki/File:EPAL-Europalette.jpg"},caption:"Europalette",options:{},isInline:!1,src:n(914657).Z,alt:"Europalette",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Duke of W4",author_uri:"https://commons.wikimedia.org/wiki/User:Duke_of_W4",licence:"CC-BY-SA-4.0",licence_url:"https://de.wikipedia.org/wiki/Datei:Europaletten-Sitzbank_in_Raabs_ad_Thaya.jpg"},caption:"Sitzbank",options:{},isInline:!1,src:n(435139).Z,alt:"Sitzbank",mdxType:"Image"}))))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"\ufe0f-aufgabe-kosten"},"\u270f\ufe0f Aufgabe Kosten"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Was bestimmt den Preis einer Ware (z.B. M\xf6bel)?"),(0,i.kt)("li",{parentName:"ol"},"Was bestimmt den Preis einer Software?"),(0,i.kt)("li",{parentName:"ol"},"Was darf/kann man mit ihnen (Ware resp. Software) nach dem Kauf tun?"),(0,i.kt)("li",{parentName:"ol"},"Was haben die beiden Bilder oben mit dieser Aufgabe zu tun?")))),(0,i.kt)("h2",{id:"softwarelizenzen"},"Softwarelizenzen"),(0,i.kt)("p",null,"Im Gegensatz zu vielen anderen Betriebssystemen ist Linux ",(0,i.kt)("strong",{parentName:"p"},"freie Software"),". Ziel dieses Kapitels ist es, die wichtigsten Begriffe zu Softwarelizenzen zu erkl\xe4ren."),(0,i.kt)("h2",{id:"freie-software"},"Freie Software"),(0,i.kt)("p",null,"Die ",(0,i.kt)("em",{parentName:"p"},"Free Software Foundation (FSF)"),(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," unter der Federf\xfchrung von Richard Stallman"),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Krassotkin",author_uri:"https://commons.wikimedia.org/wiki/User:Krassotkin",licence:"CC0",licence_url:"https://commons.wikimedia.org/wiki/File:Richard_Stallman_in_Moscow,_2019_050.jpg"},caption:"Richard Stallman",options:{},isInline:!1,src:n(908804).Z,alt:"Richard Stallman",mdxType:"Image"})),(0,i.kt)("p",null,"definiert freie Software wie folgt:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\xabFree software\xbb means software that respects users\u2019 freedom and community. Roughly, it means that ",(0,i.kt)("strong",{parentName:"p"},"the users have the freedom to run, copy, distribute, study, change and improve the software"),". ","[...]"," With these freedoms, the users (both individually and collectively) control the program and what it does for them.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,i.kt)("p",null,"Als Begr\xfcndung schreibt die FSF, dass die ",(0,i.kt)("em",{parentName:"p"},"Benutzer von der Software kontrolliert")," w\xfcrden, wenn sie diese nicht selber kontrollieren k\xf6nnen. Und da Software von Entwicklern geschrieben wird, verf\xfcgten diese \xfcber zu viel Macht \xfcber die Benutzer."),(0,i.kt)("p",null,"Im Englischen hat das Wort ",(0,i.kt)("strong",{parentName:"p"},"free")," zwei Bedeutungen. Gemeint ist mit freier Software stets die ",(0,i.kt)("strong",{parentName:"p"},"Freiheit")," und\n",(0,i.kt)("strong",{parentName:"p"},"nicht der Preis"),". H\xe4ufig wird dies mit folgender Aussage unterstrichen:"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Free")," as in ",(0,i.kt)("strong",{parentName:"p"},"free speech"),", not as in ",(0,i.kt)("em",{parentName:"p"},"free beer"),"."))),(0,i.kt)("h2",{id:"die-vier-freiheiten"},"Die vier Freiheiten"),(0,i.kt)("p",null,"Gem\xe4ss der FSF gibt es vier zentrale Freiheiten:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Die Freiheit, das Programm auszuf\xfchren wie man m\xf6chte, f\xfcr jeden Zweck."),(0,i.kt)("li",{parentName:"ol"},"Die Freiheit, die Funktionsweise des Programms zu untersuchen und eigenen Datenverarbeitungbed\xfcrfnissen anzupassen. Der Zugang zum Quellcode ist daf\xfcr Voraussetzung."),(0,i.kt)("li",{parentName:"ol"},"Die Freiheit, das Programm zu redistribuieren (also zu verbreiten) und damit Mitmenschen zu helfen."),(0,i.kt)("li",{parentName:"ol"},"Die Freiheit, das Programm zu verbessern und diese Verbesserungen der \xd6ffentlichkeit freizugeben, damit die gesamte Gesellschaft davon profitiert. Der Zugang zum Quellcode ist daf\xfcr Voraussetzung.")),(0,i.kt)("h2",{id:"open-source-software-oss"},"Open Source Software (OSS)"),(0,i.kt)("p",null,"Neben dem Begriff der freien Software wird auch h\xe4ufig ",(0,i.kt)("em",{parentName:"p"},"Open Source Software (OSS)")," verwendet. Gem\xe4ss der ",(0,i.kt)("em",{parentName:"p"},"Open Source Initiative (OSI)"),(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," soll unter dem Begriff ",(0,i.kt)("strong",{parentName:"p"},"Open Source"),(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," eigentlich dasselbe verstanden werden wie unter ",(0,i.kt)("em",{parentName:"p"},"freier Software"),". Die Idee bei der Einf\xfchrung dieses Begriffs lag darin, das zweideutige Wort ",(0,i.kt)("em",{parentName:"p"},"free")," zu umgehen, um somit potentielle Geldgeber nicht unn\xf6tig abzuschrecken. Somit d\xfcrfte man eigentlich OSS mit freier Software gleichsetzen."),(0,i.kt)("p",null,"Allerdings wird mit dem Begriff ",(0,i.kt)("em",{parentName:"p"},"Open Source Software")," lediglich die Verf\xfcgbarkeit des Quellcodes unterstrichen, was einige Firmen dazu bewegt, ihre Programme als Open Source zu bezeichnen, obwohl die Modifikation, uneingeschr\xe4nkte Nutzung, Weitergabe (in originaler und/oder modifizierter Form) nicht erlaubt ist."),(0,i.kt)("p",null,"Will man also unmissverst\xe4ndlich mitteilen, wovon man spricht, kann der Begriff ",(0,i.kt)("strong",{parentName:"p"},"Free Open Source Software (FOSS)")," verwendet werden."),(0,i.kt)("h2",{id:"propriet\xe4re-software"},"Propriet\xe4re Software"),(0,i.kt)("p",null,"Software, die nicht frei ist, wird als ",(0,i.kt)("em",{parentName:"p"},"propriet\xe4r")," bezeichnet."),(0,i.kt)("h2",{id:"freie-lizenzen"},"Freie Lizenzen"),(0,i.kt)("p",null,"Als bekannteste und verbreitetste Lizenz f\xfcr Quellcode muss sicherlich die ",(0,i.kt)("em",{parentName:"p"},"GNU General Public License (GPL)"),(0,i.kt)("sup",{parentName:"p",id:"fnref-5"},(0,i.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))," genannt werden. Es gibt aber viele weitere freie Lizenzen."),(0,i.kt)("p",null,"Auch f\xfcr Texte, Bilder und Videos gibt es freie Lizenzen. Die bekannteste Lizenz ist die ",(0,i.kt)("em",{parentName:"p"},"Creative Commons License (CC)"),(0,i.kt)("sup",{parentName:"p",id:"fnref-6"},(0,i.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6"))," mit ihren verschiedenen Varianten:"),(0,i.kt)("div",{style:{},className:"flex flex-cards"},(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Shaddim",author_uri:"",licence:"CC-BY-4.0",licence_url:"https://en.wikipedia.org/wiki/File:Creative_commons_license_spectrum.svg"},caption:"\xdcbersicht \xfcber die Creative Commons-Lizenzen",options:{},isInline:!1,src:n(630985).Z,alt:"\xdcbersicht \xfcber die Creative Commons-Lizenzen",mdxType:"Image"})))),(0,i.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,i.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,i.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,i.kt)(s.Z,{bib:{author:"Foter",author_uri:"https://foter.com/",licence:"CC-BY-SA-4.0",licence_url:"https://www.wur.nl/en/article/What-are-Creative-Commons-licenses.htm"},caption:"\xdcbersicht \xfcber die Creative Commons-Lizenzen",options:{},isInline:!1,src:n(80377).Z,alt:"\xdcbersicht \xfcber die Creative Commons-Lizenzen",mdxType:"Image"}))))),(0,i.kt)("h2",{id:"copyleft"},"Copyleft"),(0,i.kt)("p",null,"Im Zusammenhang mit freien Lizenzen taucht h\xe4ufig auch der Begriff ",(0,i.kt)("strong",{parentName:"p"},"Copyleft")," auf. Gemeint ist damit eine freie Lizenz, die vorschreibt, dass ver\xe4nderter oder unver\xe4nderter Code oder Text ebenfalls wieder unter einer freien Lizenz verteilt oder verf\xfcgbar gemacht werden muss",(0,i.kt)("sup",{parentName:"p",id:"fnref-7"},(0,i.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7")),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Im Gegensatz zu Entwicklern propriet\xe4rer Software, die in Copyright-Statements den Benutzern Rechte wegnehmen, soll mit freier Software die Rechte der Benutzer garantiert werden. Aus diesem Grund wurde der Begriff Copyright "umgekehrt" zu Copyleft.'))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://fsf.org/"},"FSF"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/philosophy/free-sw.html"},'Definition "Freie Software"'),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},(0,i.kt)("a",{parentName:"li",href:"https://www.opensource.org/"},"OSI"),(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},(0,i.kt)("a",{parentName:"li",href:"https://www.opensource.org/docs/osd"},"Open Source"),(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-5"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/copyleft/gpl.html"},"GPL"),(0,i.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-6"},(0,i.kt)("a",{parentName:"li",href:"https://creativecommons.org/licenses/"},"CC"),(0,i.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-7"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/copyleft/copyleft.html"},"Copyleft"),(0,i.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},435139:function(e,t,n){t.Z=n.p+"assets/images/03-bench-e9f7a7f80de05bc63025e9314d3ebf59.jpg"},630985:function(e,t,n){t.Z=n.p+"assets/images/03-creative-commons-overview-723246d639565bc863bdeb7adddbe305.svg"},80377:function(e,t,n){t.Z=n.p+"assets/images/03-creative-commons-overview2-4f31424de27759d41408c57a237a8b1f.png"},914657:function(e,t,n){t.Z=n.p+"assets/images/03-palette-4b7b72f9bbc5b60b24e472cd2b2da5b5.jpg"},908804:function(e,t,n){t.Z=n.p+"assets/images/03-richard_stallman-6bec846574ef1416097e367963b103ff.jpg"}}]);