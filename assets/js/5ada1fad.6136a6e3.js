"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2581],{84992:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return g}});var i=r(87462),t=r(63366),a=(r(67294),r(3905)),s=r(26626),d=["components"],o={title:"Zeichnungsfl\xe4che"},c="Zeichnungsfl\xe4che - Screen",l={unversionedId:"Programmieren-1/Turtlegrafik/screen",id:"Programmieren-1/Turtlegrafik/screen",isDocsHomePage:!1,title:"Zeichnungsfl\xe4che",description:"Die Zeichenfl\xe4che kann konfiguriert werden, z.B. mit einer Hintergrundfarbe, oder aber auch die Dimensionen des Hintergrunds.",source:"@site/docs/Programmieren-1/02-Turtlegrafik/002-screen.md",sourceDirName:"Programmieren-1/02-Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/screen",permalink:"/Programmieren-1/Turtlegrafik/screen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/02-Turtlegrafik/002-screen.md",tags:[],version:"current",lastUpdatedAt:1635611224,formattedLastUpdatedAt:"10/30/2021",sidebarPosition:2,frontMatter:{title:"Zeichnungsfl\xe4che"},sidebar:"sidebar",previous:{title:"Einf\xfchrung",permalink:"/Programmieren-1/Turtlegrafik/intro"},next:{title:"Wiederholung \ud83d\udd01",permalink:"/Programmieren-1/Turtlegrafik/repeat"}},m=[],u={toc:m};function g(e){var n=e.components,o=(0,t.Z)(e,d);return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zeichnungsfl\xe4che---screen"},"Zeichnungsfl\xe4che - Screen"),(0,a.kt)("p",null,"Die Zeichenfl\xe4che kann konfiguriert werden, z.B. mit einer Hintergrundfarbe, oder aber auch die Dimensionen des Hintergrunds."),(0,a.kt)("p",null,"Standarm\xe4ssig ist keine Hintergrundfarbe gesetzt (=durchsichtig) und die Dimensionen die Koordinaten des Bildschirms sind ",(0,a.kt)("inlineCode",{parentName:"p"},"500x500")," Pixel. Das zugrundeliegende Koordinatensystem hat den Ursprung immer in der Mitte des Bildschirms."),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(s.Z,{bib:void 0,caption:"undefined",options:{},isInline:!1,src:r(10349).Z,mdxType:"Image"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\n# wenn die Bildschirm-Dimensionen ver\xe4ndert werden sollen, muss dies\n# zwingend als erster Befehl gemacht werden.\n# Die Gr\xf6sse kann anschliessend nicht mehr ver\xe4ndert werden.\nturtle.set_defaults(canvwidth=200, canvheight=100)\n\n# Die Hintergrundfarbe kann auch ge\xe4ndert werden.\nScreen().bgcolor('orange')\n\nforward(100)\n\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Wird mit ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen().bgcolor('yellow')")," eine Hintergrundfarbe festgelegt, kann das umgebende Rechteck der Figur (englisch ",(0,a.kt)("inlineCode",{parentName:"p"},"Bounding Box"),") nicht mehr bestimmt werden und es wird immer die ganze Bildfl\xe4che heruntergeladen. "))))}g.isMDXComponent=!0},10349:function(e,n,r){n.Z=r.p+"assets/images/Screen__coordinates_py-5a1714d690d70f7894d878e561269826.svg"}}]);