"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[76715],{3905:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>N});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function m(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?m(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},m=Object.keys(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},o=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,m=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=l(n),N=r,k=d["".concat(p,".").concat(N)]||d[N]||c[N]||m;return n?t.createElement(k,i(i({ref:a},o),{},{components:n})):t.createElement(k,i({ref:a},o))}));function N(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=n.length,i=new Array(m);i[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<m;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46389:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>m,metadata:()=>s,toc:()=>l});var t=n(83117),r=(n(67294),n(3905));const m={sidebar_custom_props:{id:"169e7b36-5012-4542-a5aa-afa0707cfede"}},i="Zuf\xe4llige Zahlen",s={unversionedId:"EF-Python/Python/random",id:"EF-Python/Python/random",title:"Zuf\xe4llige Zahlen",description:"Mit dem Python Package random k\xf6nnen pseudo-zuf\xe4llige Zufallszahlen erzeugt werden.",source:"@site/docs/EF-Python/03-Python/15-random.md",sourceDirName:"EF-Python/03-Python",slug:"/EF-Python/Python/random",permalink:"/EF-Python/Python/random",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/EF-Python/03-Python/15-random.md",tags:[],version:"current",lastUpdatedAt:1667567965,formattedLastUpdatedAt:"4. Nov. 2022",sidebarPosition:15,frontMatter:{sidebar_custom_props:{id:"169e7b36-5012-4542-a5aa-afa0707cfede"}},sidebar:"sidebar",previous:{title:"Umgang mit Fehlern",permalink:"/EF-Python/Python/try-except"},next:{title:"Lernziele",permalink:"/EF-Python/Python/lernziele"}},p={},l=[],o=(c="Comment",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:l};function N(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"zuf\xe4llige-zahlen"},"Zuf\xe4llige Zahlen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit dem Python Package ",(0,r.kt)("inlineCode",{parentName:"p"},"random")," k\xf6nnen pseudo-zuf\xe4llige Zufallszahlen erzeugt werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Viele Computer Programme basieren auf zuf\xe4lligen Zahlen. Programmiersprachen k\xf6nnen allerdings keine wirklichen Zufallszahlen erzeugen, sondern lediglich pseudo-zuf\xe4llige Zahlen durch einen Algorithmus berechnen. (Der in Python verwendete Algorithmus f\xfcr Zufallszahlen basiert auf dem ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mersenne_Twister"},"Mersenne-Twister"),(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"). "),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Python Standard-Bibliothek beinhaltet das ",(0,r.kt)("inlineCode",{parentName:"p"},"random")," Modul mit vielen n\xfctzlichen Funktionen."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"randomrandom"},(0,r.kt)("inlineCode",{parentName:"h3"},"random.random()")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Gibt eine zuf\xe4llige Zahl ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0"),", ohne die ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," zur\xfcck (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow"},"<"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"<"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0 <= n <1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68354em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"<")),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))),")."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"slim live_py",slim:!0,live_py:!0},"import random\nprint(random.random())\n")))),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"randomseed"},(0,r.kt)("inlineCode",{parentName:"h3"},"random.seed()")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Diese Funktion initialisiert den Zufallszahlengenerator. Damit kann die "Zuf\xe4lligkeit" kontrolliert werden - wird immer derselbe Initialisierungswert verwendet, so entsteht immer dieselbe "zuf\xe4llige Sequenz". ENtsprechend wichtig ist es, dass jedesmal ein anderer Initialer Startwert gesetzt. Python verwendet automatisch die aktuelle Systemzeit. Mit ',(0,r.kt)("inlineCode",{parentName:"p"},"random.seed()")," kann der Generator mit einem beliebigen ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),",  ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"byte")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"bytearray")," neu initialisiert werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"slim live_py",slim:!0,live_py:!0},"import random\nrandom.seed(1)\nprint(random.random())\n")))),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"randomrandinta-b"},(0,r.kt)("inlineCode",{parentName:"h3"},"random.randint(a, b)")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Gibt eine zuf\xe4llige ",(0,r.kt)("strong",{parentName:"p"},"ganze")," Zahl ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," zwischen ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mo",{parentName:"mrow"},"<"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"<"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a <= n <= b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"<")),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"<")),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.36687em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),") zur\xfcck."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"slim live_py",slim:!0,live_py:!0},"import random\nprint(random.random())\n")))),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"randomchoiceseq"},(0,r.kt)("inlineCode",{parentName:"h3"},"random.choice(seq)")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Gibt ein zuf\xe4lliges Element der Sequenz ",(0,r.kt)("inlineCode",{parentName:"p"},"seq")," (bspw. eine Liste) zur\xfcck."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"slim live_py",slim:!0,live_py:!0},"import random\ndestinations = ['Rom', 'Florenz', 'Paris', 'M\xfcnchen']\nprint('Als n\xe4chstes gehe ich nach:', random.choice(destinations))\n")))),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"randomshuffleseq"},(0,r.kt)("inlineCode",{parentName:"h3"},"random.shuffle(seq)")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mischt alle Elemente der eingef\xfcgten Sequenz (bspw. eine Liste) - die eingegebene Sequenz wird also ver\xe4ndert!"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"slim live_py",slim:!0,live_py:!0},"import random\nnumbers = [1, 2, 3, 4, 5, 6]\nrandom.shuffle(numbers)\nprint(numbers)\n")))),(0,r.kt)("div",{className:"admonition admonition-def alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"file-code",className:"svg-inline--fa fa-file-code fa-w-12",role:"img",viewBox:"0 0 384 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"}))),"Def")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"randomsampleseq-n"},(0,r.kt)("inlineCode",{parentName:"h3"},"random.sample(seq, n)")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Gibt ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," zuf\xe4llige Elemente der Sequenz ",(0,r.kt)("inlineCode",{parentName:"p"},"seq")," (bspw. eine Liste) zur\xfcck. Die eingegebene Sequenz bleibt unver\xe4ndert!"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"slim live_py",slim:!0,live_py:!0},"import random\nnumbers = [1, 2, 3, 4, 5, 6]\nprint('3 zuf\xe4llige Zahlen', random.sample(numbers, 3))\nprint('Zuf\xe4llig gemischte Zahlen', random.sample(numbers, len(numbers)))\nprint('Original', numbers)\n")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Quelle: Wikipedia ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mersenne_Twister"},"https://en.wikipedia.org/wiki/Mersenne_Twister")),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}N.isMDXComponent=!0}}]);