"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[35194],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),u=a,y=f["".concat(c,".").concat(u)]||f[u]||d[u]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},238702:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(583117),a=n(480102),o=(n(667294),n(603905)),i=["components"],l={},c="\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",p={unversionedId:"byod-basics/v25/Skills/material_python",id:"byod-basics/v25/Skills/material_python",title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",description:"\u2b07 Download BYOD Material",source:"@site/docs/byod-basics/v25/003-Skills/010_material_python.md",sourceDirName:"byod-basics/v25/003-Skills",slug:"/byod-basics/v25/Skills/material_python",permalink:"/byod-basics/v25/Skills/material_python",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/003-Skills/010_material_python.md",tags:[],version:"current",lastUpdatedAt:1634812139,formattedLastUpdatedAt:"21.10.2021",sidebarPosition:10,frontMatter:{},sidebar:"sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/byod-basics/v25/Skills/pruefungsfragen"},next:{title:"ms-word",permalink:"/category/ms-word"}},s={},d=[],f={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-python-material-f\xfcr-die-byod-pr\xfcfung"},"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung"),(0,o.kt)("a",{href:"https://ofi.gbsl.website/files/material_byod.zip"},"\u2b07 Download BYOD Material"),(0,o.kt)("p",null,"Alle Python-Bezogenen Aufgabe sollen direkt auf dieser Seite gemacht werden."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=hello__world.py id=4ceda0c5-4c49-457d-9839-80eeed8c100a",live_py:!0,title:"hello__world.py",id:"4ceda0c5-4c49-457d-9839-80eeed8c100a"},'print("Hello World! It\'s a beautiful Day.")\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=create__mesh.py id=fbcb116a-7d0c-4643-a160-728823d19262",live_py:!0,title:"create__mesh.py",id:"fbcb116a-7d0c-4643-a160-728823d19262"},"from turtle import *\nfrom math import sqrt\nimport random\n\nSQRT3 = sqrt(3)\nCOLORS = ['red', 'blue', 'orange', 'green', 'purple', 'brown']\nspeed(7)\n\nfor index_x in range(5):\n    for index_y in range(5):\n        x = index_x * 30\n        if index_y % 2 == 1:\n            x = x - 15\n        y = index_y * 15 * SQRT3\n        penup()\n        goto(x, y)\n        pendown()\n        for i in range(3):\n            color(random.sample(COLORS, 1)[0])\n            forward(30)\n            left(120)\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=klammern.py id=4f38b217-cd53-40a4-92ff-645bf19f44b4",live_py:!0,title:"klammern.py",id:"4f38b217-cd53-40a4-92ff-645bf19f44b4"},"\n\n")))}u.isMDXComponent=!0}}]);