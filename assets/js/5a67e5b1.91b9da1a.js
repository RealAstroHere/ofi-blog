"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[48546],{603905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var i=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),c=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||a;return t?i.createElement(f,o(o({ref:n},l),{},{components:t})):i.createElement(f,o({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},884384:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(667294),r={container:"container_AFEI",bib:"bib_DV92",visible:"visible_D99O",details:"details_Z4o0",noMargins:"noMargins_PVGS"},a=t(592814),o=t(51436),s=t(386010),d=function(e){return i.createElement("span",{className:r.details},i.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Autor: ",e.author),i.createElement("a",{href:e.licence_url,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,s.default)("badge badge--secondary")},"Lizenz: ",e.licence)),e.edited&&i.createElement("span",{className:(0,s.default)("badge badge--secondary",r.badgeItem)},"Bearbeitet"),i.createElement("a",{href:e.source,target:"_blank",className:r.badgeItem},i.createElement("span",{className:(0,s.default)("badge badge--secondary")},i.createElement(a.G,{icon:o.Xjp}))))},c=function(e,n){return void 0===n&&(n="px"),/^\d+(\.\d*)?$/.test(e)?""+e+n:e},l=function(e){var n={},t=Object.assign({},e.options);return t.noMargins&&delete t.noMargins,t.size&&(n.maxWidth="min(90vw, "+c(t.size)+")",n.maxHeight=c(t.size),delete t.size),t.height&&(n.maxHeight=c(t.height),n.height=c(t.height),delete t.height),t.width&&(n.maxWidth="min(90vw, "+c(t.width)+")",n.width=c(t.width),delete t.width),n=Object.assign({},n,t),i.createElement("img",{src:e.src,alt:e.alt,style:n,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},m=function(e){if(e.isInline)return i.createElement(l,e);var n=i.useState(!1),t=(n[0],n[1]),a=i.useState(!1),o=a[0],c=a[1],m=e.caption&&"undefined"!==e.caption,p=e.bib||m;return e.options.noMargins&&!0,i.createElement("figure",{className:(0,s.default)(r.container,e.options.noMargins&&r.noMargins),onMouseEnter:function(){return t(!0)},onMouseOut:function(e){var n,i,r,a,o;n=e.currentTarget.getBoundingClientRect(),i=e.clientX,r=e.clientY,a=n.left<=i&&n.right>=i,o=n.top<=r&&n.bottom>=r,a&&o||t(!1)}},i.createElement(l,e),p&&i.createElement("figcaption",null,m&&i.createElement("span",null,e.caption),e.bib&&i.createElement("span",{className:(0,s.default)(r.bib,o?r.visible:void 0),onClick:function(){return c(!o)}},"@"),o&&i.createElement(d,e.bib)))}},167150:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var i=t(583117),r=t(480102),a=(t(667294),t(603905)),o=t(884384),s=["components"],d={title:"Kompression",description:"Die Datenkompression ist ein Vorgang, bei dem die Menge digitaler Daten reduziert wird.",image:"./images/compression.png"},c="Kompression",l={unversionedId:"Codes und Daten/compression/index",id:"version-24f/Codes und Daten/compression/index",title:"Kompression",description:"Die Datenkompression ist ein Vorgang, bei dem die Menge digitaler Daten reduziert wird.",source:"@site/versioned_docs/version-24f/08-Codes und Daten/01-compression/index.md",sourceDirName:"08-Codes und Daten/01-compression",slug:"/Codes und Daten/compression/",permalink:"/24f/Codes und Daten/compression/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/08-Codes und Daten/01-compression/index.md",tags:[],version:"24f",frontMatter:{title:"Kompression",description:"Die Datenkompression ist ein Vorgang, bei dem die Menge digitaler Daten reduziert wird.",image:"./images/compression.png"},sidebar:"version-24f/sidebar",previous:{title:"Videos Editieren",permalink:"/24f/Computer/Video-Editor/video-editor"},next:{title:"1. Huffman-Codierung",permalink:"/24f/Codes und Daten/compression/huffman"}},m={image:t(485780).Z},p=[],u={toc:p};function f(e){var n=e.components,d=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},u,d,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kompression"},"Kompression"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:{author:"faircom",source:"https://docs.faircom.com/doc/v10ace/55874.htm",licence:"Unknown",licence_url:"https://www.faircom.com/",edited:!1},caption:"undefined",options:{},isInline:!1,src:t(485780).Z,mdxType:"Image"})),(0,a.kt)("p",null,"Die Datenkompression (abgeleitet aus dem lateinischen Wort \u201eCompressio\u201c: \u201eZusammendr\xfccken\u201c) \u2013 oder auch Datenkomprimierung genannt \u2013 ist ein Vorgang, bei dem die Menge digitaler Daten ",(0,a.kt)("strong",{parentName:"p"},"verdichtet oder reduziert")," wird. Dadurch sinkt der ben\xf6tigte Speicherplatz, und die \xdcbertragungszeit der Daten verk\xfcrzt sich."),(0,a.kt)("p",null,"Grunds\xe4tzlich wird bei der Datenkompression versucht, redundante Informationen (daher mehrfach vorhandene Informationen) zu entfernen. Dazu werden die Daten in eine Darstellung \xfcberf\xfchrt, mit der sich alle \u2013 oder zumindest die meisten \u2013 Informationen in k\xfcrzerer Form darstellen lassen. Diesen Vorgang \xfcbernimmt ein ",(0,a.kt)("em",{parentName:"p"},"Kodierer")," und man bezeichnet den Vorgang als Kompression oder Komprimierung. Die Umkehrung bezeichnet man als Dekompression oder Dekomprimierung."),(0,a.kt)("p",null,"Man spricht von ",(0,a.kt)("strong",{parentName:"p"},"verlustfreier Kompression")," wenn aus den komprimierten Daten wieder exakt die Originaldaten gewonnen werden k\xf6nnen. Das ist beispielsweise bei der Kompression von Textdokumenten notwendig."),(0,a.kt)("p",null,"Bei der ",(0,a.kt)("strong",{parentName:"p"},"verlustbehafteten Kompression")," k\xf6nnen die Originaldaten aus den komprimierten Daten meist nicht mehr exakt zur\xfcckgewonnen werden - ein Teil der Information geht also verloren. Die Algorithmen versuchen, m\xf6glichst nur \u201eunwichtige\u201c Informationen wegzulassen. Solche Verfahren werden h\xe4ufig zur Bild- oder Videokompression und Audiodatenkompression eingesetzt.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Ein Dateiformat (bspw. ",(0,a.kt)("inlineCode",{parentName:"p"},".docx")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},".jpeg"),") enthalten komprimierte Daten, so dass ein spezielles Programm (bspw. Word oder ein Fotobetrachter) verwendet werden muss, damit der Inhalt dekomprimiert und angezeigt werden kann."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div",id:"zip-ordner"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"ZIP Ordner")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Sollen Datei(en) m\xf6glichst platzsparend abgespeichert werden, kann eine Benutzer:in daraus eine ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),"-Datei erstellen. Also eine Datei, die genauso wie ein Reissverschluss (engl. ",(0,a.kt)("em",{parentName:"p"},"Zipper"),") die Daten platzsparend zusammenf\xfcgt und abspeichert."),(0,a.kt)("div",{parentName:"div",style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{bib:void 0,caption:"",options:{width:"100px"},isInline:!1,src:t(759850).Z,alt:"--width=100px",mdxType:"Image"})))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Datenkompression"},"Wikipedia"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},485780:function(e,n,t){n.Z=t.p+"assets/images/compression-4cc710ab9752b2a5083c784042c3e3e8.png"},759850:function(e,n,t){n.Z=t.p+"assets/images/zip-osx-5c1518df20c67063261e9cc8dafec3db.png"}}]);