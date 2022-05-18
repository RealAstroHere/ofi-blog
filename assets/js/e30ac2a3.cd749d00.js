"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[526],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(592814),s=n(51436),o=n(386010),l=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,o.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,o.default)("badge badge--secondary")},r.createElement(a.G,{icon:s.Xjp}))))},c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(d,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),s=a[0],c=a[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,s;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,s=t.top<=i&&t.bottom>=i,a&&s||n(!1)}},r.createElement(d,e),m&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,o.default)(i.bib,s?i.visible:void 0),onClick:function(){return c(!s)}},"@"),s&&r.createElement(l,e.bib)))}},733532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(583117),i=n(480102),a=(n(667294),n(603905)),s=n(884384),o=n(644996),l=["components"],c={title:"Notenblatt"},d="Notenblatt [^1]",u={unversionedId:"Programmieren-1/Algorithmen/Notenblatt",id:"Programmieren-1/Algorithmen/Notenblatt",title:"Notenblatt",description:"Ein Notenblatt ist ein Algorithmus, welches den Prozess \xabMusikst\xfcck spielen\xbb beschreibt. Notenbl\xe4tter sind in einer symbolischen Sprache, der Notenschrift, verfasst.",source:"@site/docs/Programmieren-1/01-Algorithmen/04-Notenblatt.md",sourceDirName:"Programmieren-1/01-Algorithmen",slug:"/Programmieren-1/Algorithmen/Notenblatt",permalink:"/Programmieren-1/Algorithmen/Notenblatt",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/04-Notenblatt.md",tags:[],version:"current",lastUpdatedAt:1633390975,formattedLastUpdatedAt:"4.10.2021",sidebarPosition:4,frontMatter:{title:"Notenblatt"},sidebar:"sidebar",previous:{title:"Bauanleitung",permalink:"/Programmieren-1/Algorithmen/Bauanleitung"},next:{title:"Flussdiagramm",permalink:"/Programmieren-1/Algorithmen/Flussdiagramm"}},m={},p=[{value:"Schritt",id:"schritt",level:2},{value:"Wiederholung",id:"wiederholung",level:2},{value:"Bedingte Ausf\xfchrung",id:"bedingte-ausf\xfchrung",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Beispiel",id:"beispiel",level:2}],g={toc:p};function b(e){var t=e.components,c=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notenblatt-"},"Notenblatt ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Ein Notenblatt ist ein Algorithmus, welches den Prozess \xabMusikst\xfcck spielen\xbb beschreibt. Notenbl\xe4tter sind in einer symbolischen Sprache, der ",(0,a.kt)("strong",{parentName:"p"},"Notenschrift"),", verfasst."),(0,a.kt)("h2",{id:"schritt"},"Schritt"),(0,a.kt)("p",null,"Ein einzelner Schritt in der Notenschrift ist eine Note oder eine Pause. Im folgenden beschreiben die ersten drei \xfcbereinanderliegenden Noten \xabSpiele einen Akkord bestehend aus einem kleinen ",(0,a.kt)("inlineCode",{parentName:"p"},"d"),", einem eingestrichenen ",(0,a.kt)("inlineCode",{parentName:"p"},"fis'")," und einem zweigestrichenen ",(0,a.kt)("inlineCode",{parentName:"p"},"e''")," von einem Achtel L\xe4nge\xbb."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Erste Zeile eines Notenblatts",options:{},isInline:!1,src:n(396001).Z,alt:"Erste Zeile eines Notenblatts",mdxType:"Image"})),(0,a.kt)("h2",{id:"wiederholung"},"Wiederholung"),(0,a.kt)("p",null,"In der Notenschrift wird durch Wiederholungszeichen (rot) angezeigt, dass die dazwischenliegenden Takte wiederholt werden sollen:"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Wiederholungszeichen",options:{},isInline:!1,src:n(39054).Z,alt:"Wiederholungszeichen",mdxType:"Image"})),(0,a.kt)("p",null,"Eine andere Variante ist die Anweisung D.S. (Dal Segno, ",(0,a.kt)("em",{parentName:"p"},"\xabvom Zeichen\xbb"),"). Gemeint ist, dass das St\xfcck von einem bezeichneten Punkt an (meist mit dem Zeichen ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2551:"),") wiederholt wird."),(0,a.kt)("h2",{id:"bedingte-ausf\xfchrung"},"Bedingte Ausf\xfchrung"),(0,a.kt)("p",null,"Einer oder mehrere Schritte werden manchmal nur unter bestimmten Bedingungen ausgef\xfchrt. Auf einem Notenblatt wird mit sogenannten Voltenklammern (rot) gekennzeichnet, dass ein Takt nur im ersten oder zweiten Durchgang gespielt werden soll."),(0,a.kt)("p",null,"In der folgenden Zeile wird also der dritte Takt nur im ersten und der vierte Takt nur im zweiten Durchgang gespielt:"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Voltenklammern",options:{},isInline:!1,src:n(745065).Z,alt:"Voltenklammern",mdxType:"Image"})),(0,a.kt)("div",{style:{},className:"flex flex-cards"},(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("p",{parentName:"div"},"So t\xf6nt der erste Durchgang:"),(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,o.Z)("/sounds/music-conditional-1.mp3"),type:"audio/mpeg"})))),(0,a.kt)("div",{parentName:"div",style:{},className:"item card"},(0,a.kt)("div",{parentName:"div",style:{},className:"card__body"},(0,a.kt)("p",{parentName:"div"},"So t\xf6nt der zweite Durchgang:"),(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,o.Z)("/sounds/music-conditional-2.mp3"),type:"audio/mpeg"}))))),(0,a.kt)("h2",{id:"parameter"},"Parameter"),(0,a.kt)("p",null,"Durch die Noten alleine sind die L\xe4nge und die H\xf6he nur relativ festgelegt."),(0,a.kt)("p",null,"Erst durch die Tempoangabe \u2669=180 wird festgelegt, dass pro Minute 180 Viertelnoten gespielt werden sollen. Mit Violin- und Bassschl\xfcssel wird festgelegt, auf welcher Notenlinie das g' bzw. das f liegt und somit in welcher H\xf6he die Noten gespielt werden sollen."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"Tempoangabe und Notenschl\xfcssel",options:{},isInline:!1,src:n(584019).Z,alt:"Tempoangabe und Notenschl\xfcssel",mdxType:"Image"})),(0,a.kt)("p",null,"Tempoangabe und Notenschl\xfcssel sind Parameter eines Notenblatts, deren \xc4nderung die Bedeutung aller Noten und somit das gespielte St\xfcck \xe4ndert."),(0,a.kt)("h2",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,"Auf der Website ",(0,a.kt)("a",{parentName:"p",href:"https://musescore.com/sheetmusic"},"musescore.com")," sind Notenbl\xe4tter f\xfcr viele Musikst\xfccke verf\xfcgbar und k\xf6nnen dort auch gleich abgespielt werden. Hier sind Ausschnitte aus folgenden St\xfccken verwendet worden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://musescore.com/user/2072681/scores/2601926"},"Super Mario Bros: Main Theme")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://musescore.com/user/685336/scores/4797212"},"Jingle Bells"))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?page=prog1/1-algo/3-sheet-music/"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},745065:function(e,t,n){t.Z=n.p+"assets/images/music-conditional-2f5db8c1d1425fdd1cf993e0340a8ea9.svg"},584019:function(e,t,n){t.Z=n.p+"assets/images/music-parameter-8b0bc3bb7a39d7b2488a9cae9b901cb7.svg"},39054:function(e,t,n){t.Z=n.p+"assets/images/music-repeat-7875ce1b0ad3bd627b68c4726cfa4112.svg"},396001:function(e,t,n){t.Z=n.p+"assets/images/music-step-ae15ff29bb474d72da3580bb3271f6c5.svg"}}]);