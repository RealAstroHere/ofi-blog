"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[32553],{603905:function(e,n,r){r.d(n,{Zo:function(){return f},kt:function(){return u}});var t=r(667294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},f=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return r?t.createElement(d,a(a({ref:n},f),{},{components:r})):t.createElement(d,a({ref:n},f))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},853412:function(e,n,r){r.r(n),r.d(n,{assets:function(){return f},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var t=r(583117),o=r(480102),i=(r(667294),r(603905)),a=["components"],c={},l="Screencoord",s={unversionedId:"Programmieren-1/Turtlegrafik/screen-coords.nosync",id:"Programmieren-1/Turtlegrafik/screen-coords.nosync",title:"Screencoord",description:"Draw the screen coordinates.",source:"@site/docs/Programmieren-1/02-Turtlegrafik/900-screen-coords.nosync.md",sourceDirName:"Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/screen-coords.nosync",permalink:"/Programmieren-1/Turtlegrafik/screen-coords.nosync",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/02-Turtlegrafik/900-screen-coords.nosync.md",tags:[],version:"current",lastUpdatedAt:1639693102,formattedLastUpdatedAt:"16.12.2021",sidebarPosition:900,frontMatter:{},sidebar:"sidebar",previous:{title:"Python Programme",permalink:"/Programmieren-1/Turtlegrafik/python-scripts"},next:{title:"Python",permalink:"/category/python"}},f={},p=[],m={toc:p};function u(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"screencoord"},"Screencoord"),(0,i.kt)("p",null,"Draw the screen coordinates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Screen--coordinates.py id=71b84778-74e3-48be-a072-c5ca98f6b0a7",live_py:!0,title:"Screen--coordinates.py",id:"71b84778-74e3-48be-a072-c5ca98f6b0a7"},"from turtle import *\n\nX = (-20, 120)\nY = (-10, 40)\nTICK = 10\nSCALE = 3\nDRAW_COORD = False\n\nturtle.set_defaults(\n    canvwidth = 2 * SCALE * (X[1] - X[0]),\n    canvheight = 2 * SCALE * (Y[1] - Y[0])\n)\nspeed(100)\ndef move(x, y):\n    penup()\n    goto(x, y)\n    pendown()\n    \ndef write_tick(tick: int | float, is_int: bool = True):\n    if is_int:\n        write(int(tick), font=(\"Arial\", 8, \"normal\"), align='right')\n    else:\n        write(tick, font=(\"Arial\", 8, \"normal\"), align='right')\n\ndef grid(xmin: int, xmax: int, ymin: int, ymax: int, tick: int, scale: int = 1):\n    old_pos = getturtle().pos()\n    old_pensize = getturtle().pensize()\n    pensize(1)\n    old_color = getturtle().color()\n    pencolor('lightgray')\n    offset_x = len(str(max(xmax, xmin))) * 2\n    offset_y = len(str(max(ymax, ymin))) * 2\n    for xtick in range(scale * xmin, scale * xmax + 1, scale * tick):\n        move(xtick + offset_x, scale * ymin - 15)\n        pencolor('black')\n        write_tick(xtick / scale, int(tick) == tick)\n        # pencolor('lightgray')\n        move(xtick, scale * ymin)\n        goto(xtick, scale * ymax)\n\n    for ytick in range(scale * ymin, scale *  ymax + 1, scale * tick):\n        move(scale * xmin - 5, ytick - offset_y + 3)\n        pencolor('black')\n        write_tick(ytick / scale, int(tick) == tick)\n        # pencolor('lightgray')\n        move(scale * xmin, ytick)\n        goto(scale * xmax, ytick)\n    \n    move(*old_pos)\n    pensize(old_pensize)\n    color(*old_color)\n\ngrid(*X, *Y, TICK, SCALE)\n\nif DRAW_COORD:\n    dim = 250\n    # draw x axis\n    backward(250)\n    forward(500)\n    left(150)\n    forward(20)\n    backward(20)\n    right(300)\n    forward(20)\n    penup()\n    goto(240, -20)\n    write('x', font=(\"Arial\", 24, \"normal\"))\n    \n    \n    # draw y axis\n    home()\n    left(90)\n    pendown()\n    backward(250)\n    forward(500)\n    left(150)\n    forward(20)\n    backward(20)\n    right(300)\n    forward(20)\n    penup()\n    goto(-30, 240)\n    write('y', font=(\"Arial\", 24, \"normal\"),)\n    home()\n\n")))}u.isMDXComponent=!0}}]);