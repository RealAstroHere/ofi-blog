"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[10811],{97893:(e,I,g)=>{g.r(I),g.d(I,{assets:()=>c,contentTitle:()=>C,default:()=>M,frontMatter:()=>a,metadata:()=>n,toc:()=>m});var i=g(83117),t=(g(67294),g(3905));g(61839);const a={sidebar_custom_props:{id:"a234dbad-32da-47ed-9af3-e1c9fc95c9a4",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=559733"}}},C="Verfahren kombinieren",n={unversionedId:"Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",id:"Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",title:"Verfahren kombinieren",description:"F\xfcr uns ist Wichtig:",source:"@site/docs/Kryptologie/06-Digitale-Signaturen/03-Verfahren-kombinieren.md",sourceDirName:"Kryptologie/06-Digitale-Signaturen",slug:"/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",permalink:"/Kryptologie/Digitale-Signaturen/Verfahren-kombinieren",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Kryptologie/06-Digitale-Signaturen/03-Verfahren-kombinieren.md",tags:[],version:"current",lastUpdatedAt:1661628294,formattedLastUpdatedAt:"27. Aug. 2022",sidebarPosition:3,frontMatter:{sidebar_custom_props:{id:"a234dbad-32da-47ed-9af3-e1c9fc95c9a4",source:{name:"rothe.io",ref:"https://rothe.io/?b=crypto&p=559733"}}},sidebar:"sidebar",previous:{title:"Integrit\xe4t",permalink:"/Kryptologie/Digitale-Signaturen/Integritaet"},next:{title:"Zertifizierungsstellen",permalink:"/Kryptologie/Digitale-Signaturen/Zertifizierungsstellen"}},c={},m=[{value:"Hashwerte",id:"hashwerte",level:2},{value:"Digitale Signaturen richtig verwenden",id:"digitale-signaturen-richtig-verwenden",level:2}],l=e=>function(I){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",I)},d=l("Comment"),A=l("Figure"),r=l("SourceRef"),N=l("Answer"),s=l("Solution"),o={toc:m};function M(e){let{components:I,...a}=e;return(0,t.kt)("wrapper",(0,i.Z)({},o,a,{components:I,mdxType:"MDXLayout"}),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("h1",{parentName:"div",id:"verfahren-kombinieren"},"Verfahren kombinieren"),(0,t.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("p",{parentName:"div"},"F\xfcr uns ist Wichtig:"),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("div",{parentName:"li",className:"commentable"},(0,t.kt)("p",{parentName:"div"},"Die Dokumente sind stets lesbar und trotzdem vor Manipulationen gesch\xfctzt."),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"}))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("div",{parentName:"li",className:"commentable"},(0,t.kt)("p",{parentName:"div"},"Asymmetrische Verfahren sollen eingesetzt werden, aber nicht zum Verschl\xfcsseln des ganzen Dokuments, weil dies langsam ist."),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("p",{parentName:"div"},"Aus diesem Grund m\xfcssen wir \u2013 \xe4hnlich wie bei der asymmetrischen Verschl\xfcsselung \u2013 auch bei den digitalen Signaturen \xabnachbessern\xbb, wenn es um den konkreten Einsatz im Alltag geht."),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("h2",{parentName:"div",id:"hashwerte"},"Hashwerte"),(0,t.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("p",{parentName:"div"},(0,t.kt)("strong",{parentName:"p"},"Hashwerte")," derselben Hashfunktion haben stets ",(0,t.kt)("strong",{parentName:"p"},"dieselbe L\xe4nge"),". Sie sind im Vergleich zum eingegebenen Text sehr kurz (wie der Fingerabdruck eines Menschen sehr klein ist im Vergleich zu all dem, was den Menschen mit diesem Fingerabdruck ausmacht)."),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,t.kt)("blockquote",null,(0,t.kt)("div",{parentName:"blockquote",className:"commentable"},(0,t.kt)("p",{parentName:"div"},"Anstelle des gesamten Textes signieren wir nur den Hashwert, das beseitigt die beiden obengenannten Nachteile."),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("h2",{parentName:"div",id:"digitale-signaturen-richtig-verwenden"},"Digitale Signaturen richtig verwenden"),(0,t.kt)(d,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("p",{parentName:"div"},"Wir versuchen, mehrere Verfahren zu kombinieren und deren Vorteile zu nutzen. Einerseits berechnen wir den Hashwert eines Dokuments, andererseits \xabverschl\xfcsseln\xbb wir nur diesen Hashwert asymmetrisch. Somit reduziert sich der Einsatz von asymmetrischer Verschl\xfcsselung wiederum auf ganz kurze Werte. Zudem bleibt das Dokument intakt und stets lesbar."),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,t.kt)("div",{className:"commentable"},(0,t.kt)(A,{parentName:"div",options:{},mdxType:"Figure"},(0,t.kt)("img",{alt:"Digitale Signatur: Hashwert und asymmetrische Verschl\xfcsselung",src:g(53810).Z,width:"590",height:"280"}),(0,t.kt)("figcaption",{parentName:"Figure"},(0,t.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Digitale Signatur: Hashwert und asymmetrische Verschl\xfcsselung",(0,t.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,t.kt)(r,{parentName:"figcaption",bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=559733",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,t.kt)(d,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,t.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("div",{parentName:"div",className:"commentable"},(0,t.kt)("h5",{parentName:"div",id:"digitale-signaturen-\xfcberpr\xfcfen"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,t.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Digitale Signaturen \xfcberpr\xfcfen"),(0,t.kt)(d,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"}))),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("div",{parentName:"div",className:"commentable"},(0,t.kt)("p",{parentName:"div"},"\xdcberlegen Sie sich, wie man eine solche digital signierte Nachricht \xfcberpr\xfcfen kann. Zeichnen Sie die ben\xf6tigten Schritte auf."),(0,t.kt)(d,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,t.kt)(N,{type:"text",webKey:"99cd9f5a-6715-44a8-89cf-c79770c0740b",mdxType:"Answer"}),(0,t.kt)(s,{webKey:"5bacd9c8-2222-47c2-bc1d-e90116caf1d0",mdxType:"Solution"},(0,t.kt)("div",{parentName:"div",className:"commentable"},(0,t.kt)(A,{parentName:"div",options:{},mdxType:"Figure"},(0,t.kt)("img",{alt:"Digitale Signatur \xfcberpr\xfcfen",src:g(29468).Z,width:"580",height:"280"}),(0,t.kt)("figcaption",{parentName:"Figure"},(0,t.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Digitale Signatur \xfcberpr\xfcfen",(0,t.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,t.kt)(r,{parentName:"figcaption",bib:{author:"S. Rothe",source:"https://rothe.io/?b=crypto&p=559733",licence:"CC 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,t.kt)(d,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"}))))))}M.isMDXComponent=!0},53810:(e,I,g)=>{g.d(I,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjU5MHB4IiBoZWlnaHQ9IjI4MHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8ZyBpZD0iQ2FscXVlLTEiIHNlcmlmOmlkPSJDYWxxdWUgMSI+CiAgICAgICAgPGcgaWQ9IktsYXJ0ZXh0Ij4KICAgICAgICAgICAgPHJlY3QgeD0iMTM5LjY0OSIgeT0iMzYuMjYiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMTM0LjEyNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw1MC4wMTU2LC01MC4yODM3KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTAyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxMTguNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMDAxMDAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjEzNC41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTExMTA8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTUwLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDAwMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIxNjYuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjExMTAxMTAxPC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iOTQuMjI0cHgiIHk9IjE4Mi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0NvdXJpZXJOZXdQU01UJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB4OyI+MDEwMTAxMTE8L3RleHQ+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTk4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9Ijk0LjIyNHB4IiB5PSIyMTQuNTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjEwMTAwMTAxPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDx0ZXh0IHg9IjE2MS45MDVweCIgeT0iMjYuMDUycHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5LbGFydGV4dDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IlNpdHp1bmdzc2NobMO8c3NlbCI+CiAgICAgICAgICAgIDxyZWN0IHg9IjMwMS4wNDUiIHk9IjIyMS4zMTEiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMjIuNzA0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICA8dGV4dCB4PSIzMDUuNjM2cHgiIHk9IjIzNy41NjZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidDb3VyaWVyTmV3UFNNVCcsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtmb250LXNpemU6MTZweDsiPjAxMTAwMDExPC90ZXh0PgogICAgICAgICAgICA8dGV4dCB4PSIyOTUuMzAycHgiIHk9IjI2Mi4zOTFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidBcmlhbE1UJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDsiPnByaXZhdGVyIFNjaGzDvHNzZWw8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJHZWhlaW10ZXh0Ij4KICAgICAgICAgICAgPGcgaWQ9InN5bW0uLUdlaGVpbXRleHQiIHNlcmlmOmlkPSJzeW1tLiBHZWhlaW10ZXh0Ij4KICAgICAgICAgICAgICAgIDxyZWN0IHg9IjQ2OS40NzQiIHk9IjM2LjI2IiB3aWR0aD0iODUuOTg2IiBoZWlnaHQ9IjEzNC4xMjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDM3OS44NDEsLTUwLjI4MzcpIj4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTAyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTE4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTAwMTAwMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTM0LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTExMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTUwLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDAwMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTY2LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTEwMTEwMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTgyLjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMDExMTwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMTk4LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTAxMTAxMDwvdGV4dD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI5NC4yMjRweCIgeT0iMjE0LjUxcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMDEwMDEwMTwvdGV4dD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjQ3NC4wMDVweCIgeT0iMjYuMTk5cHgiIHN0eWxlPSJmb250LWZhbWlseTonQXJpYWxNVCcsICdBcmlhbCcsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Ij5TaWduaWVydGVyIDx0c3BhbiB4PSI1MjguNDhweCA1MzQuNDhweCA1NDEuMTU0cHggIiB5PSIyNi4xOTlweCAyNi4xOTlweCAyNi4xOTlweCAiPlRleDwvdHNwYW4+dDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iYXN5bW0uLUdlaGVpbXRleHQiIHNlcmlmOmlkPSJhc3ltbS4gR2VoZWltdGV4dCI+CiAgICAgICAgICAgICAgICA8cmVjdCB4PSI0NjkuNDc0IiB5PSIxNzMuNzM3IiB3aWR0aD0iODUuOTg2IiBoZWlnaHQ9IjIyLjcwNCIgc3R5bGU9ImZpbGw6cmdiKDExNiwxOTEsNjEpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgICAgICAgICAgPHRleHQgeD0iNDc0LjA2NXB4IiB5PSIxODkuNzAzcHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4xMTAxMDExMDwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cmVjdCB4PSI0NjQuNTgzIiB5PSIzMC45OTMiIHdpZHRoPSI5NS43NjgiIGhlaWdodD0iMTcxLjAyNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTEyNy42NDksMTc4LjgwMUwxMzkuNjQ5LDE4NC44MDFMMTI3LjY0OSwxOTAuODAxQzEzMC42NDksMTg3LjgwMSAxMzAuNjQ5LDE4MS44MDEgMTI3LjY0OSwxNzguODAxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik03Ni40OTksMTg0LjgwMUwxMzAuMDQ5LDE4NC44MDEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTc2LjQ5OSw3NC4yMjVMMTM5LjY0OSw3NC4yMjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTQ1Ny40NzQsMTc4LjczNEw0NjkuNDc0LDE4NC43MzRMNDU3LjQ3NCwxOTAuNzM0QzQ2MC40NzQsMTg3LjczNCA0NjAuNDc0LDE4MS43MzQgNDU3LjQ3NCwxNzguNzM0WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0zOTMuMzQ2LDE4NC43MzRMNDU5Ljg3NCwxODQuNzM0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik00NTcuNDc0LDY4LjIyNUw0NjkuNDc0LDc0LjIyNUw0NTcuNDc0LDgwLjIyNUM0NjAuNDc0LDc3LjIyNSA0NjAuNDc0LDcxLjIyNSA0NTcuNDc0LDY4LjIyNVoiLz4KICAgICAgICA8cGF0aCBkPSJNMjI1LjYzNCw3NC4yMjVMNDU5Ljg3NCw3NC4yMjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTI4NC40NDgsMTc4LjgwMUwyOTYuNDQ4LDE4NC44MDFMMjg0LjQ0OCwxOTAuODAxQzI4Ny40NDgsMTg3LjgwMSAyODcuNDQ4LDE4MS44MDEgMjg0LjQ0OCwxNzguODAxWiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMjUuNjM0LDE4NC44MDFMMjg2Ljg0OCwxODQuODAxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMzcuNjQ2LDIxMi4wMTlMMzQzLjY0NiwyMDAuMDE5TDM0OS42NDYsMjEyLjAxOUMzNDYuNjQ2LDIwOS4wMTkgMzQwLjY0NiwyMDkuMDE5IDMzNy42NDYsMjEyLjAxOVoiLz4KICAgICAgICA8cGF0aCBkPSJNMzQzLjY0NiwyMjEuMzExTDM0My42NDYsMjA5LjYxOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNzAuNDk5LDEwMS40M0w3Ni40OTksMTEzLjQzTDgyLjQ5OSwxMDEuNDNDNzkuNDk5LDEwNC40MyA3My40OTksMTA0LjQzIDcwLjQ5OSwxMDEuNDNaIi8+CiAgICAgICAgPHBhdGggZD0iTTc2LjQ5OSwxMDMuODNMNzYuNDk5LDc0LjIyNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNzYuNDk5LDE4NC44MDFMNzYuNDk5LDE0NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8ZyBpZD0ic3ltbS4tVmVyc2NobMO8c3NlbHVuZyIgc2VyaWY6aWQ9InN5bW0uIFZlcnNjaGzDvHNzZWx1bmciPgogICAgICAgICAgICA8cmVjdCB4PSIyOC4wNSIgeT0iMTEzLjQzIiB3aWR0aD0iOTYuODk4IiBoZWlnaHQ9IjMwLjU3IiBzdHlsZT0iZmlsbDpyZ2IoMjUxLDE2MywwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iNDEuNDFweCIgeT0iMTMzLjAxM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+SGFzaGZ1bmt0aW9uPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iYXN5bW0uLVZlcnNjaGzDvHNzZWx1bmciIHNlcmlmOmlkPSJhc3ltbS4gVmVyc2NobMO8c3NlbHVuZyI+CiAgICAgICAgICAgIDxyZWN0IHg9IjI5NS4xOTciIHk9IjE2OS40NDkiIHdpZHRoPSI5Ni44OTgiIGhlaWdodD0iMzAuNTciIHN0eWxlPSJmaWxsOnJnYigxMTYsMTkxLDYxKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwzNS4wMDQ0LDc5LjA2KSI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIyNjguNjc0cHgiIHk9IjEwMi41MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+YXN5bW1ldHJpc2NoZTwvdGV4dD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjI2NS4zMjNweCIgeT0iMTE0LjkwM3B4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0FyaWFsTVQnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4OyI+Vjx0c3BhbiB4PSIyNzIuNjY1cHggMjc5LjMzOXB4ICIgeT0iMTE0LjkwM3B4IDExNC45MDNweCAiPmVyPC90c3Bhbj5zY2hsw7xzc2VsdW5nPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJhc3ltbS4tR2VoZWltdGV4dDEiIHNlcmlmOmlkPSJhc3ltbS4gR2VoZWltdGV4dCI+CiAgICAgICAgICAgIDxyZWN0IHg9IjEzOS42NDkiIHk9IjE3My4xNjEiIHdpZHRoPSI4NS45ODYiIGhlaWdodD0iMjIuNzA0IiBzdHlsZT0iZmlsbDpyZ2IoMjUxLDE2MywwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICAgICAgPHRleHQgeD0iMTQ0LjIzOXB4IiB5PSIxODkuMTI3cHgiIHN0eWxlPSJmb250LWZhbWlseTonQ291cmllck5ld1BTTVQnLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7Zm9udC1zaXplOjE2cHg7Ij4wMTExMDExMTwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0ibGF5ZXIxIj4KICAgIDwvZz4KPC9zdmc+Cg=="},29468:(e,I,g)=>{g.d(I,{Z:()=>i});const i=g.p+"assets/images/hash-asymm-signature-verification-binary-cfadbaf94840ded97cee996d7fb8ec16.svg"}}]);