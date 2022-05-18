"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[86730],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,p=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(p,o(o({ref:t},d),{},{components:n})):r.createElement(p,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},884384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(667294),i={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=n(592814),o=n(51436),s=n(386010),c=function(e){return r.createElement("span",{className:i.details},r.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Autor: ",e.author),r.createElement("a",{href:e.licence_url,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&r.createElement("span",{className:(0,s.default)("badge badge--secondary",i.badgeItem)},"Bearbeitet"),r.createElement("a",{href:e.source,target:"_blank",className:i.badgeItem},r.createElement("span",{className:(0,s.default)("badge badge--secondary")},r.createElement(a.G,{icon:o.Xjp}))))},l=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},d=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+l(n.size)+")",t.maxHeight=l(n.size),delete n.size),n.height&&(t.maxHeight=l(n.height),t.height=l(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+l(n.width)+")",t.width=l(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(d,e);var t=r.useState(!1),n=(t[0],t[1]),a=r.useState(!1),o=a[0],l=a[1],u=e.caption&&"undefined"!==e.caption,m=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,s.default)(i.container,e.options.noMargins&&i.noMargins),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,o;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,o=t.top<=i&&t.bottom>=i,a&&o||n(!1)}},r.createElement(d,e),m&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption),e.bib&&r.createElement("span",{className:(0,s.default)(i.bib,o?i.visible:void 0),onClick:function(){return l(!o)}},"@"),o&&r.createElement(c,e.bib)))}},591546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(583117),i=n(480102),a=(n(667294),n(603905)),o=n(884384),s=["components"],c={sidebar_label:"4. Anwendungsschicht",sidebar_position:2},l="Schicht 4: Anwendungsschicht [^1]",d={unversionedId:"Netzwerke-of/Schichtenmodell/Anwendungsschicht",id:"Netzwerke-of/Schichtenmodell/Anwendungsschicht",title:"Schicht 4: Anwendungsschicht [^1]",description:"Auf der Anwendungsschicht geht es um Dinge, die den Benutzer des Systems interessieren.",source:"@site/docs/Netzwerke-of/001-Schichtenmodell/4-Anwendungsschicht.md",sourceDirName:"Netzwerke-of/001-Schichtenmodell",slug:"/Netzwerke-of/Schichtenmodell/Anwendungsschicht",permalink:"/Netzwerke-of/Schichtenmodell/Anwendungsschicht",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-of/001-Schichtenmodell/4-Anwendungsschicht.md",tags:[],version:"current",lastUpdatedAt:1629031258,formattedLastUpdatedAt:"15.8.2021",sidebarPosition:2,frontMatter:{sidebar_label:"4. Anwendungsschicht",sidebar_position:2},sidebar:"sidebar",previous:{title:"TCP/IP-Schichtenmodell",permalink:"/Netzwerke-of/Schichtenmodell/0b-TCP-IP-Schichtenmodell"},next:{title:"3. Transportschicht",permalink:"/Netzwerke-of/Schichtenmodell/Transportschicht"}},u={},m=[{value:"Beispiel \xabSchule\xbb",id:"beispiel-schule",level:2},{value:"Internet",id:"internet",level:2},{value:"\u2b50 Weitere Informationen",id:"-weitere-informationen",level:3}],h={toc:m};function p(e){var t=e.components,c=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schicht-4-anwendungsschicht-"},"Schicht 4: Anwendungsschicht ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Auf der Anwendungsschicht geht es um Dinge, die den Benutzer des Systems interessieren."),(0,a.kt)("h2",{id:"beispiel-schule"},"Beispiel \xabSchule\xbb"),(0,a.kt)("p",null,"Im Beispiel \xabSchule\xbb sind dies Pulte, welche von einem Schulhaus ins andere transportiert werden sollen. Wie genau Verpackung und Transport organisiert sind, wird auf dieser Ebene ausgeblendet. Hier geht es nur um den eigentlich Inhalt \u2013 also darum, welche und wie viele Pulte verschickt werden sollen."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/1-application/layer-4.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"@",options:{},isInline:!1,src:n(47734).Z,alt:"@",mdxType:"Image"})),(0,a.kt)("h2",{id:"internet"},"Internet"),(0,a.kt)("p",null,"Typische Anwendungen im Internet sind Webseiten, Web-Apps oder E-Mail."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTTP"),": Das Hypertext Transfer Protocol ist f\xfcr die \xdcbertragung von Webseiten zust\xe4ndig. Genauer gesagt werden mit HTTP die Daten \xfcbertragen, aus welchen Webseiten zusammengesetzt sind, also HTML-Dateien, Bilder, usw."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SMTP"),": Das Simple Mail Transfer Protocol wird eingesetzt, um E-Mails zu versenden. Das Protokoll regelt den Transport der E-Mail von dem/r Absender*in bis zum E-Mail-Server auf Empf\xe4ngerseite."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMAP"),": Das Internet Message Access Protocol wird zum Abrufen und Organisieren des eigenen Postfachs verwendet \u2013 sprich, um mit dem E-Mail-Server zu kommunizieren, der die eigene E-Mail-Box gespeichert hat."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:""},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u2800")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Sie sehen, dass zum Senden und Empfangen von E-Mails zwei verschiedene Protokolle zum Einsatz kommen, was auf den ersten Blick erstaunen mag. Nat\xfcrlich kommen die E-Mails beim Versenden \xfcber SMTP auch ohne IMAP an \u2013 aber nicht bei dem/der Empf\xe4nger:in, sondern nur in dessen/deren Postfach. Um dieses abzurufen ist das zweite Protokoll (IMAP) n\xf6tig."))),(0,a.kt)("h3",{id:"-weitere-informationen"},"\u2b50 Weitere Informationen"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/kBXQZMmiA4s",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=80064"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},47734:function(e,t,n){t.Z=n.p+"assets/images/4-school-example-fbef75aead28316ece5916b9ee068869.svg"}}]);