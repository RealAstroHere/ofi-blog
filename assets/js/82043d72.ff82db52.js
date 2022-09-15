"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[59059],{9989:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(83117),m=(t(67294),t(3905));t(61839);const s={label:"3. Rastergrafik",sidebar_custom_props:{id:"9efde026-832e-452f-a051-bdc395e04df3",source:{name:"S. Rothe, T. Jampen, R. Meyer",ref:"https://informatik.mygymer.ch/base/?b=code&p=943166"}}},r="3. Rastergrafik",i={unversionedId:"Codierung/Grafikformate/raster",id:"version-25h/Codierung/Grafikformate/raster",title:"3. Rastergrafik",description:"Theoretische Speichergr\xf6sse",source:"@site/versioned_docs/version-25h/05-Codierung/02-Grafikformate/03-raster.md",sourceDirName:"05-Codierung/02-Grafikformate",slug:"/Codierung/Grafikformate/raster",permalink:"/25h/Codierung/Grafikformate/raster",draft:!1,tags:[],version:"25h",sidebarPosition:3,frontMatter:{label:"3. Rastergrafik",sidebar_custom_props:{id:"9efde026-832e-452f-a051-bdc395e04df3",source:{name:"S. Rothe, T. Jampen, R. Meyer",ref:"https://informatik.mygymer.ch/base/?b=code&p=943166"}}},sidebar:"version-25h/sidebar",previous:{title:"2. Farbdarstellung",permalink:"/25h/Codierung/Grafikformate/colors"},next:{title:"4. \xdcbung",permalink:"/25h/Codierung/Grafikformate/uebung"}},p={},l=[{value:"Theoretische Speichergr\xf6sse",id:"theoretische-speichergr\xf6sse",level:2},{value:"JPEG-Grafikformat",id:"jpeg-grafikformat",level:2},{value:"PNG-Grafikformat",id:"png-grafikformat",level:2},{value:"Gr\xf6ssenvergleich der Dateiformate",id:"gr\xf6ssenvergleich-der-dateiformate",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.kt)("div",a)},d=c("Comment"),o=c("Figure"),N=c("SourceRef"),k={toc:l};function g(e){let{components:a,...s}=e;return(0,m.kt)("wrapper",(0,n.Z)({},k,s,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h1",{parentName:"div",id:"3-rastergrafik"},"3. Rastergrafik"),(0,m.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"theoretische-speichergr\xf6sse"},"Theoretische Speichergr\xf6sse"),(0,m.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Die theoretische Speichergr\xf6sse einer Rastergrafik wird berechnet, indem die Anzahl Pixel ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," mit der Farbtiefe ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"f")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," multipliziert wird. Die Farbtiefe gibt an, welche Datenmenge f\xfcr die Darstellung einer Farbe ben\xf6tigt wird."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Die Anzahl Pixel wird aus der ",(0,m.kt)("strong",{parentName:"p"},"Aufl\xf6sung"),", also der Breite ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," und H\xf6he ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"h")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," des Bildes in Pixel berechnet."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"F\xfcr die Speichergr\xf6sse rechnen wird also wie folgt:"),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,m.kt)("mi",{parentName:"mrow"},"f")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b\\cdot h\\cdot f")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))),(0,m.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)("h5",{parentName:"div",id:"beispiel"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Beispiel"),(0,m.kt)(d,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"}))),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Ein Bild mit einer Aufl\xf6sung von ",(0,m.kt)("inlineCode",{parentName:"p"},"1920\xd71080")," Pixel und der Farbtiefe ",(0,m.kt)("inlineCode",{parentName:"p"},"3 Byte")," ben\xf6tigt einen Speicherplatz von:"),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,m.kt)("div",{parentName:"div",className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"1920"),(0,m.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,m.kt)("mn",{parentName:"mrow"},"1080"),(0,m.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,m.kt)("mn",{parentName:"mrow"},"3"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"6220800"),(0,m.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,m.kt)("mtext",{parentName:"mrow"},"B"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"6.2"),(0,m.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,m.kt)("mtext",{parentName:"mrow"},"MB")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1920\\cdot 1080\\cdot 3 = 6220800 \\,\\text{B} = 6.2 \\,\\text{MB}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mord"},"9"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"8"),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"B")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"6"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"MB"))))))))),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"jpeg-grafikformat"},"JPEG-Grafikformat"),(0,m.kt)(d,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Das Grafikformat der ",(0,m.kt)("em",{parentName:"p"},"Joint Photographic Experts Group")," ist ein beliebtes Format zu Speicherung von Fotos. Es kann den ben\xf6tigten Speicherplatz gegen\xfcber der theoretischen Gr\xf6sse von Rastergrafiken sehr stark reduzieren."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Dazu wird ein komplexer mathematischer Algorithmus verwendet, welcher bewirkt, dass das urspr\xfcngliche Bild nicht mehr genau Pixel f\xfcr Pixel rekonstruiert werden kann. Deshalb spricht man hier von einer ",(0,m.kt)("strong",{parentName:"p"},"verlustbehafteten Kompression"),"."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Der Algorithmus kann durch die Angabe der ",(0,m.kt)("strong",{parentName:"p"},"Qualit\xe4t")," in Prozent beeinflusst werden. Die folgenden Bildausschnitte illustrieren, wie die Qualit\xe4t und die Speichergr\xf6sse zusammenh\xe4ngen:"),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,m.kt)("div",{style:{},className:"flex flex-cards"},(0,m.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"h\xf6chste Qualit\xe4t (162 kB)",src:t(14772).Z,width:"200",height:"400"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"h\xf6chste Qualit\xe4t (162 kB)",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"hohe Qualit\xe4t (42 kB)",src:t(52899).Z,width:"200",height:"400"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"hohe Qualit\xe4t (42 kB)",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"mittlere Qualit\xe4t (18 kB)",src:t(49966).Z,width:"200",height:"400"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"mittlere Qualit\xe4t (18 kB)",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 25% - calc(3 * 0.4em))"},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"niedrige Qualit\xe4t (9 kB)",src:t(90385).Z,width:"200",height:"400"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"niedrige Qualit\xe4t (9 kB)",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"}))))),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"An den Bildern wird sichtbar, dass die JPEG-Kompression besonders entlang von R\xe4ndern St\xf6rungen (\xabArtefakte\xbb) verursacht. Bei Fotos f\xe4llt dies weniger auf. Die folgenden zwei Bilder sind beide mit mittlerer JPEG-Qualit\xe4t gespeichert worden:"),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,m.kt)("div",{style:{},className:"flex flex-cards"},(0,m.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",src:t(61216).Z,width:"640",height:"360"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"Pexels",licence:"Pixabay",licence_url:"https://pixabay.com/de/service/license/",source:"https://pixabay.com/images/id-1840617/"},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})))),(0,m.kt)("div",{parentName:"div",style:{flexBasis:"max(50px, 50% - calc(1 * 0.4em))"},className:"item card"},(0,m.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",src:t(8872).Z,width:"640",height:"360"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"JPEG-Grafik 640\xd7360 Pixel in mittlerer Qualit\xe4t",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"OpenClipart Vectors",licence:"Pixabay",licence_url:"https://pixabay.com/de/service/license/",source:"https://pixabay.com/images/id-2024099/"},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"}))))),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Das JPEG-Datei eignet sich also besonders, um Fotografien platzsparend zu speichern."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"png-grafikformat"},"PNG-Grafikformat"),(0,m.kt)(d,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Das ",(0,m.kt)("em",{parentName:"p"},"Portable Network Graphics"),"-Format wird f\xfcr ",(0,m.kt)("strong",{parentName:"p"},"verlustfreie")," Speicherung von Rastergrafiken mit ",(0,m.kt)("strong",{parentName:"p"},"Transparenz")," verwendet. Es eignet sich beispielsweise f\xfcr Bildschirmfotos und Grafiken f\xfcr Webseiten oder Computerspiele."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Das folgende Beispiel zeigt links einen Baum als PNG-Grafik mit Transparenz gespeichert. Rechts ist das gleiche Bild als JPG-Grafik mit hoher Qualit\xe4t gespeichert."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,m.kt)("div",{style:{alignItems:"center"},className:"flex flex-flex"},(0,m.kt)("div",{parentName:"div",style:{},className:"item"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"PNG-Grafik (32 kB)",src:t(84837).Z,width:"180",height:"194"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"PNG-Grafik (32 kB)",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"}))),(0,m.kt)("div",{parentName:"div",style:{},className:"item"},(0,m.kt)("div",{parentName:"div",className:"commentable"},(0,m.kt)(o,{parentName:"div",options:{},mdxType:"Figure"},(0,m.kt)("img",{alt:"JPEG-Grafik (13 kB)",src:t(19433).Z,width:"180",height:"194"}),(0,m.kt)("figcaption",{parentName:"Figure"},(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"JPEG-Grafik (13 kB)",(0,m.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,m.kt)(N,{parentName:"figcaption",bib:{author:"S. Rothe, T. Jampen, R. Meyer",source:"https://informatik.mygymer.ch/base/?b=code&p=943166",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,m.kt)(d,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"})))),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Durch die Speicherung als JPG-Grafik geht die Transparenz verloren, das Bild kann z.B. nicht mehr auf farbigen Folien verwendet werden. Ausserdem sind JPEG-Artefakte sichtbar."),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("h2",{parentName:"div",id:"gr\xf6ssenvergleich-der-dateiformate"},"Gr\xf6ssenvergleich der Dateiformate"),(0,m.kt)(d,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,m.kt)("div",{className:"commentable"},(0,m.kt)("p",{parentName:"div"},"Die folgende Tabelle zeigt die Dateigr\xf6ssen des gleichen Bildes (640\xd7360) mit verschiedenen Dateiformaten:"),(0,m.kt)(d,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,m.kt)("div",{className:"slim-table"},(0,m.kt)("div",{className:"commentable"},(0,m.kt)("table",{parentName:"div"},(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,m.kt)("th",{parentName:"tr",align:"right"},"Dateigr\xf6sse"),(0,m.kt)("th",{parentName:"tr",align:"right"},"relativ"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"theoretische Gr\xf6sse"),(0,m.kt)("td",{parentName:"tr",align:"right"},"691 kB"),(0,m.kt)("td",{parentName:"tr",align:"right"},"100%")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"PNG"),(0,m.kt)("td",{parentName:"tr",align:"right"},"146 kB"),(0,m.kt)("td",{parentName:"tr",align:"right"},"21%")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"JPG h\xf6chste Qualit\xe4t"),(0,m.kt)("td",{parentName:"tr",align:"right"},"162 kB"),(0,m.kt)("td",{parentName:"tr",align:"right"},"23%")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"JPG hohe Qualit\xe4t"),(0,m.kt)("td",{parentName:"tr",align:"right"},"42 kB"),(0,m.kt)("td",{parentName:"tr",align:"right"},"6%")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"JPG mittlere Qualit\xe4t"),(0,m.kt)("td",{parentName:"tr",align:"right"},"18 kB"),(0,m.kt)("td",{parentName:"tr",align:"right"},"3%")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},"JPG tiefe Qualit\xe4t"),(0,m.kt)("td",{parentName:"tr",align:"right"},"9 kB"),(0,m.kt)("td",{parentName:"tr",align:"right"},"1%")))),(0,m.kt)(d,{parentName:"div",type:"table",nr:0,mdxType:"Comment"}))))}g.isMDXComponent=!0},19433:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/baum-34f751d6a841339f3286fecfc32df668.jpg"},84837:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/baum-d76a95efd701702d6806c5ae054ffb3d.png"},61216:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/foto-640-mittel-0efdb2340ae887754cfcb8d6cf08a4b1.jpg"},52899:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/zeichnung-640-hoch-detail-6de4b4fbc9511226eae6542c4d0eeb1e.png"},14772:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/zeichnung-640-hoechst-detail-fdfad020aa67e4970e6fcdf485f4cc1b.png"},49966:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/zeichnung-640-mittel-detail-c062b5dbecace229b427a0b4cc144c5f.png"},8872:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/zeichnung-640-mittel-65e4de0f7d204bfd7ecd35e248587c60.jpg"},90385:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/zeichnung-640-niedrig-detail-7528d37d3fa515084efb0f0ed9c79a8b.png"}}]);