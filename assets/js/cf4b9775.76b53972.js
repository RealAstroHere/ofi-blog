"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[32860],{603905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return s}});var t=r(667294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),s=a,m=u["".concat(p,".").concat(s)]||u[s]||f[s]||i;return r?t.createElement(m,o(o({ref:n},d),{},{components:r})):t.createElement(m,o({ref:n},d))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},759629:function(e,n,r){r.r(n),r.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var t,a=r(583117),i=r(480102),o=(r(667294),r(603905)),l=["components"],p={},c="For Schleife",d={unversionedId:"Programmieren-1/v24/Turtles/for-loop",id:"Programmieren-1/v24/Turtles/for-loop",title:"For Schleife",description:"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die for Schleife und die while Schleife.",source:"@site/docs/Programmieren-1/v24/Turtles/002-for-loop.md",sourceDirName:"Programmieren-1/v24/Turtles",slug:"/Programmieren-1/v24/Turtles/for-loop",permalink:"/Programmieren-1/v24/Turtles/for-loop",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Turtles/002-for-loop.md",tags:[],version:"current",lastUpdatedAt:1634080030,formattedLastUpdatedAt:"12.10.2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Ein Python Algorithmus",permalink:"/Programmieren-1/v24/Turtles/intro"},next:{title:"While Schleife",permalink:"/Programmieren-1/v24/Turtles/while-loop"}},f={},u=[{value:"Was ist die Ausgabe des folgenden Programms?",id:"was-ist-die-ausgabe-des-folgenden-programms",level:2}],s=(t="Figure",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),m={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"for-schleife"},"For Schleife"),(0,o.kt)("p",null,"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," Schleife und die ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," Schleife."),(0,o.kt)("p",null,"Die ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," Schleife kann man sich wie ein Ticket-Schalter vorstellen. Der Verk\xe4ufer am Schalter bedient der Reihe nach jede Person in der Warteschlange und wiederholt jedesmal dieselbe Aufgabe: ",(0,o.kt)("em",{parentName:"p"},"den Kunden bedienen")),(0,o.kt)(s,{options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Warteschlange",src:r(484953).Z,width:"1000",height:"667"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Warteschlange",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,o.kt)("p",null,"In Python wird die Warteschleife als Liste in eckigen Klammern geschrieben:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=3f6dd4e0-f5bf-4d2f-ad8e-ee414e97cece",live_py:!0,id:"3f6dd4e0-f5bf-4d2f-ad8e-ee414e97cece"},"for person in ['Jack', 'Maria', 'Reto']:\n    print(f'Guten Tag {person}, wie kann ich helfen?')\n    print('...')\n    print('Auf wiedersehen')\n")),(0,o.kt)("p",null,"Die Personen ",(0,o.kt)("em",{parentName:"p"},"Jack"),", ",(0,o.kt)("em",{parentName:"p"},"Maria")," und ",(0,o.kt)("em",{parentName:"p"},"Reto")," werden nacheinander begr\xfcsst, bedient und verabschiedet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Guten Tag Jack, wie kann ich helfen?\n...\nAuf wiedersehen.\n\nGuten Tag Maria, wie kann ich helfen?\n...\nAuf wiedersehen.\n\nGuten Tag Reto, wie kann ich helfen?\n...\nAuf wiedersehen.\n")),(0,o.kt)("p",null,"Um einen beliebigen Code-Teil mehrfach nacheinander auszuf\xfchren, k\xf6nnen wir nun auch Zahlen als Warteschleife verwenden:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=0c4d6d9b-158d-4558-8902-bf4d09254b1e",live_py:!0,id:"0c4d6d9b-158d-4558-8902-bf4d09254b1e"},"from turtle import *\nfor counter in [0, 1, 2, 3]:\n    forward(100)\n    left(90)\n")),(0,o.kt)("p",null,"F\xfcr jede Zahl wird der Code-Teil wiederholt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=c482f58c-66bb-4406-ad47-e42b4f6ee971",live_py:!0,id:"c482f58c-66bb-4406-ad47-e42b4f6ee971"},"from turtle import *\n# 0\nforward(100)\nleft(90)\n# 1\nforward(100)\nleft(90)\n# 2\nforward(100)\nleft(90)\n# 3\nforward(100)\nleft(90)\n")),(0,o.kt)("p",null,"Oder in Kurzschreibweise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=46a4e93f-80c8-4e66-ab86-f187b810a8e8",live_py:!0,id:"46a4e93f-80c8-4e66-ab86-f187b810a8e8"},"from turtle import *\nfor counter in range(4):\n    forward(100)\n    left(90)\n")),(0,o.kt)("p",null,"wobei ",(0,o.kt)("inlineCode",{parentName:"p"},"range(4)")," eine Warteschleife mit ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," Elementen erzeugt."),(0,o.kt)("h2",{id:"was-ist-die-ausgabe-des-folgenden-programms"},"Was ist die Ausgabe des folgenden Programms?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=63756aea-ee47-4805-b077-8637a09ca08d",live_py:!0,id:"63756aea-ee47-4805-b077-8637a09ca08d"},"from turtle import *\npenup()\ngoto(-30, 0)\npendown()\n\nfor counter in range(8):\n    forward(60)\n    left(45)\n\npenup()\ngoto(-30, 100)\npendown()\n\nsetheading(180)     # Orientierung nach links: \u25c0\ufe0f\n\nfor counter in range(8):\n    forward(5)\n    right(45)\n\npenup()\ngoto(30, 100)\npendown()\n\nsetheading(0)       # Orientierung nach rechts: \u25b6\ufe0f\n\n\nfor counter in range(8):\n    forward(5)\n    left(45)\n\npenup()\ngoto(-48, 40)\npendown()\n\nsetheading(-45)     # Orientierung nach rechts unten: \u2198\ufe0f\n\nfor counter in range(3):\n    forward(40)\n    left(45)\n\n")))}g.isMDXComponent=!0},484953:function(e,n,r){n.Z=r.p+"assets/images/queue-8064bf7946c4724e4fbeb25e2d35cb83.png"}}]);