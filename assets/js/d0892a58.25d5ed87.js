"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[24086],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>s});var a=i(67294);function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function N(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?N(Object(i),!0).forEach((function(t){g(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function I(e,t){if(null==e)return{};var i,a,g=function(e,t){if(null==e)return{};var i,a,g={},N=Object.keys(e);for(a=0;a<N.length;a++)i=N[a],t.indexOf(i)>=0||(g[i]=e[i]);return g}(e,t);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(e);for(a=0;a<N.length;a++)i=N[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(g[i]=e[i])}return g}var m=a.createContext({}),r=function(e){var t=a.useContext(m),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},l=function(e){var t=r(e.components);return a.createElement(m.Provider,{value:t},e.children)},M={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},D=a.forwardRef((function(e,t){var i=e.components,g=e.mdxType,N=e.originalType,m=e.parentName,l=I(e,["components","mdxType","originalType","parentName"]),D=r(i),s=g,d=D["".concat(m,".").concat(s)]||D[s]||M[s]||N;return i?a.createElement(d,n(n({ref:t},l),{},{components:i})):a.createElement(d,n({ref:t},l))}));function s(e,t){var i=arguments,g=t&&t.mdxType;if("string"==typeof e||g){var N=i.length,n=new Array(N);n[0]=D;var I={};for(var m in t)hasOwnProperty.call(t,m)&&(I[m]=t[m]);I.originalType=e,I.mdxType="string"==typeof e?e:g,n[1]=I;for(var r=2;r<N;r++)n[r]=i[r];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}D.displayName="MDXCreateElement"},85071:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>d,frontMatter:()=>N,metadata:()=>I,toc:()=>r});var a=i(83117),g=(i(67294),i(3905));const N={sidebar_custom_props:{id:"3468a2fd-2ce7-4d22-8620-4baae570349c"}},n="9. \u2b50\ufe0f Speicher",I={unversionedId:"Computer/gates/memory",id:"Computer/gates/memory",title:"9. \u2b50\ufe0f Speicher",description:"Die bisherigen Schaltungen f\xfcr den Einbruchsalarm haben einen grossen Nachteil: sobald der Bewegungsmelder keine Bewegung mehr entdeckt, wird der Alarm abgestellt.",source:"@site/docs/Computer/02-gates/09-memory.md",sourceDirName:"Computer/02-gates",slug:"/Computer/gates/memory",permalink:"/Computer/gates/memory",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Computer/02-gates/09-memory.md",tags:[],version:"current",lastUpdatedAt:1661700137,formattedLastUpdatedAt:"28. Aug. 2022",sidebarPosition:9,frontMatter:{sidebar_custom_props:{id:"3468a2fd-2ce7-4d22-8620-4baae570349c"}},sidebar:"sidebar",previous:{title:"8. Addierer",permalink:"/Computer/gates/adder"},next:{title:"3. Rechnerarchitektur",permalink:"/category/3-rechnerarchitektur"}},m={},r=[{value:"Interaktive Schaltung",id:"interaktive-schaltung",level:2},{value:"R\xfcckkopplung mit Reset",id:"r\xfcckkopplung-mit-reset",level:2},{value:"Speicher",id:"speicher",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,g.kt)("div",t)},M=l("Comment"),D=l("Figure"),s={toc:r};function d(e){let{components:t,...N}=e;return(0,g.kt)("wrapper",(0,a.Z)({},s,N,{components:t,mdxType:"MDXLayout"}),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("h1",{parentName:"div",id:"9-\ufe0f-speicher"},"9. \u2b50\ufe0f Speicher"),(0,g.kt)(M,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Die bisherigen Schaltungen f\xfcr den Einbruchsalarm haben einen grossen Nachteil: sobald der Bewegungsmelder keine Bewegung mehr entdeckt, wird der Alarm abgestellt."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Ein guter Einbruchsalarm sollte aber nicht mehr abschalten. Die Schaltung sollte die Information, dass eine Bewegung entdeckt wurde, speichern k\xf6nnen."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Mit Hilfe eines OR-Gatter kann dies realisiert werden. Dazu wird das Ausgangssignal des OR-Gatters wieder als Eingang verwendet. Das f\xfchrt dazu, dass das OR-Gatter immer den Wert 1\ufe0f\u20e3 liefern wird, sobald es einmal diesen Wert im Ausgang angenommen hat."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,g.kt)("img",{src:i(73626).Z,width:"368",height:"112"})),(0,g.kt)(M,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("h2",{parentName:"div",id:"interaktive-schaltung"},"Interaktive Schaltung"),(0,g.kt)(M,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("p",{parentName:"div"},"In dieser interaktiven Schaltung kannst du die R\xfcckkopplung testen:"),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,g.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,g.kt)("iframe",{width:"100%",height:"315px",src:"https://circuitverse.org/simulator/embed/rothe-feedback",title:"Circuit Vert",scrolling:"no",frameBorder:"0",webkitAllowFullScreen:!0,mozAllowFullScreen:!0,allowFullScreen:!0})),(0,g.kt)("admonition",{type:"info"},(0,g.kt)("div",{parentName:"admonition",className:"commentable"},(0,g.kt)("h4",{parentName:"div",id:"r\xfcckkopplung"},"R\xfcckkopplung"),(0,g.kt)(M,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,g.kt)("div",{parentName:"admonition",className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Wenn der Ausgang einer Schaltung wieder als Eingang verwendet wird, nennt man dies ",(0,g.kt)("strong",{parentName:"p"},"R\xfcckkopplung"),"."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,g.kt)("div",{parentName:"admonition",className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Schaltungen mit R\xfcckkopplung erm\xf6glichen das ",(0,g.kt)("strong",{parentName:"p"},"Speichern")," von Daten sowie die Konstruktion von programmierbaren Schaltungen. Die R\xfcckkopplung ist also ein zentrales Konzept f\xfcr den Bau von Computern."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("h2",{parentName:"div",id:"r\xfcckkopplung-mit-reset"},"R\xfcckkopplung mit Reset"),(0,g.kt)(M,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Nat\xfcrlich will man die Alarmanlage auch wieder Abschalten k\xf6nnen. Dazu kann in der R\xfcckkopplungsschleife ein Reset-Knopf eingebaut werden:"),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,g.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,g.kt)("iframe",{width:"100%",height:"315px",src:"https://circuitverse.org/simulator/embed/rothe-feedback-with-reset",title:"Circuit Vert",scrolling:"no",frameBorder:"0",webkitAllowFullScreen:!0,mozAllowFullScreen:!0,allowFullScreen:!0})),(0,g.kt)("admonition",{type:"aufgabe"},(0,g.kt)("ol",{parentName:"admonition"},(0,g.kt)("li",{parentName:"ol"},(0,g.kt)("div",{parentName:"li",className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Da manchmal Wasser in deinen Keller eindringt, m\xf6chtest du wissen, ob es seit der letzten Kontrolle besonders stark geregnet hat. Ein Feuchtigkeitssensor alleine reicht nicht. Baue in ",(0,g.kt)("strong",{parentName:"p"},"CircuitVerse")," eine entsprechend beschriftete Schaltung mit einer R\xfcckkopplung, die speichert, wenn der Niederschlag zu stark war."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,g.kt)("li",{parentName:"ol"},(0,g.kt)("div",{parentName:"li",className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Baue einen Druckknopf ein, mit dem du die Anzeige wieder zur\xfccksetzen kannst."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,g.kt)("div",{parentName:"li",className:"commentable"},(0,g.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,g.kt)("img",{src:i(11178).Z,width:"448",height:"176"})),(0,g.kt)(M,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})))),(0,g.kt)("hr",{parentName:"admonition"}),(0,g.kt)("div",{parentName:"admonition",className:"commentable"},(0,g.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,g.kt)("img",{src:i(98438).Z,width:"448",height:"176"})),(0,g.kt)(M,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"}))),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("h2",{parentName:"div",id:"speicher"},"Speicher"),(0,g.kt)(M,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Die Schaltung \xabR\xfcckkopplung mit Reset\xbb wird in der Informatik als SR-Flip-Flop bezeichnet.\nSie speichert den Wert 1, falls der Eingang \xabSet\xbb aktiviert ist und speichert den Wert 0, falls der Eingang \xabReset\xbb aktiviert ist."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,g.kt)("div",{className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Diese Schaltung bildet die Grundlage f\xfcr den Bau von Speicher (RAM). Um ein Bit zu speichern, wollen wir eine Schaltung, welche die folgenden zwei Eing\xe4nge hat:"),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},(0,g.kt)("div",{parentName:"li",className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Daten: gibt an, welcher Wert gespeichert werden soll."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,g.kt)("li",{parentName:"ul"},(0,g.kt)("div",{parentName:"li",className:"commentable"},(0,g.kt)("p",{parentName:"div"},"Speichern: gibt durch ein 1 an, ob nun der Datenwert abgespeichert werden soll."),(0,g.kt)(M,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})))),(0,g.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,g.kt)("iframe",{width:"100%",height:"315px",src:"https://circuitverse.org/simulator/embed/rothe-d-flip-flop",title:"Circuit Vert",scrolling:"no",frameBorder:"0",webkitAllowFullScreen:!0,mozAllowFullScreen:!0,allowFullScreen:!0})))}d.isMDXComponent=!0},73626:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjM2OHB4IiBoZWlnaHQ9IjExMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNODAsNjRMMTEyLDY0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTExMiw2NEwxMTIsODBMMTY4LDgwIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTI0MCw2NEwyNDAsMTZMMTQ0LDE2TDE0NCw0OEwxNjgsNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik0yMDgsNjRMMjg4LDY0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICA8ZyBpZD0iTGF1dHNwcmVjaGVyIj4KICAgICAgICA8cmVjdCB4PSIyODgiIHk9IjMyIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTMyNCw0Ni40NkwzMjQsNTAuNThDMzI5Ljc4LDUyLjMgMzM0LDU3LjY2IDMzNCw2NEMzMzQsNzAuMzQgMzI5Ljc4LDc1LjY4IDMyNCw3Ny40TDMyNCw4MS41NEMzMzIsNzkuNzIgMzM4LDcyLjU2IDMzOCw2NEMzMzgsNTUuNDQgMzMyLDQ4LjI4IDMyNCw0Ni40Nk0zMjksNjRDMzI5LDYwLjQ2IDMyNyw1Ny40MiAzMjQsNTUuOTRMMzI0LDcyQzMyNyw3MC41OCAzMjksNjcuNTIgMzI5LDY0TTMwMiw1OEwzMDIsNzBMMzEwLDcwTDMyMCw4MEwzMjAsNDhMMzEwLDU4TDMwMiw1OFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJPUiIgZD0iTTE2MCwzMkMxNzYsMzIgMjAwLDQ4IDIwOCw2NEMyMDAsODAgMTc2LDk2IDE2MCw5NkMxNzYsNjQgMTc2LDY0IDE2MCwzMloiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgogICAgPGcgaWQ9IkJld2VndW5nc3NlbnNvciI+CiAgICAgICAgPHJlY3QgeD0iMTYiIHk9IjMyIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTU3LDUwLjVDNTkuMTk0LDUwLjUgNjEsNDguNjk0IDYxLDQ2LjVDNjEsNDQuMzA2IDU5LjE5NCw0Mi41IDU3LDQyLjVDNTQuODA2LDQyLjUgNTMsNDQuMzA2IDUzLDQ2LjVDNTMsNDguNjk0IDU0LjgwNiw1MC41IDU3LDUwLjVNNDkuOCw3OC4zTDUxLjgsNjkuNUw1Niw3My41TDU2LDg1LjVMNjAsODUuNUw2MCw3MC41TDU1LjgsNjYuNUw1Nyw2MC41QzU5Ljc4LDYzLjY4IDYzLjc4LDY1LjUgNjgsNjUuNUw2OCw2MS41QzY0LjQ4LDYxLjU2IDYxLjIsNTkuNzIgNTkuNCw1Ni43TDU3LjQsNTMuNUM1Ni42OCw1Mi4zIDU1LjQsNTEuNSA1NCw1MS41QzUzLjQsNTEuNSA1Myw1MS43IDUyLjQsNTEuN0w0Miw1Ni4xTDQyLDY1LjVMNDYsNjUuNUw0Niw1OC43TDQ5LjYsNTcuM0w0Ni40LDczLjVMMzYuNiw3MS41TDM1LjgsNzUuNUw0OS44LDc4LjNNMzIsNTcuNUMzMC45MDMsNTcuNSAzMCw1Ni41OTcgMzAsNTUuNUMzMCw1NC40MDMgMzAuOTAzLDUzLjUgMzIsNTMuNUwzOCw1My41TDM4LDU3LjVMMzIsNTcuNU0zNCw0OS41QzMyLjkwMyw0OS41IDMyLDQ4LjU5NyAzMiw0Ny41QzMyLDQ2LjQwMyAzMi45MDMsNDUuNSAzNCw0NS41TDQ0LDQ1LjVMNDQsNDkuNUwzNCw0OS41TTMwLDY1LjVDMjguOTAzLDY1LjUgMjgsNjQuNTk3IDI4LDYzLjVDMjgsNjIuNDAzIDI4LjkwMyw2MS41IDMwLDYxLjVMMzgsNjEuNUwzOCw2NS41TDMwLDY1LjVaIiBzdHlsZT0iZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+CiAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NCIgcj0iNCIvPgo8L3N2Zz4K"},98438:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQ0OHB4IiBoZWlnaHQ9IjE3NnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNODAsNDhMMTEyLDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTgwLDEyOEwxMTIsMTI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTMzNiw4MEwzNjgsODAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxnIGlkPSJMYXV0c3ByZWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjM2OCIgeT0iNDgiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDQsMTI4KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNDA0LDYyLjQ2TDQwNCw2Ni41OEM0MDkuNzgsNjguMyA0MTQsNzMuNjYgNDE0LDgwQzQxNCw4Ni4zNCA0MDkuNzgsOTEuNjggNDA0LDkzLjRMNDA0LDk3LjU0QzQxMiw5NS43MiA0MTgsODguNTYgNDE4LDgwQzQxOCw3MS40NCA0MTIsNjQuMjggNDA0LDYyLjQ2TTQwOSw4MEM0MDksNzYuNDYgNDA3LDczLjQyIDQwNCw3MS45NEw0MDQsODhDNDA3LDg2LjU4IDQwOSw4My41MiA0MDksODBNMzgyLDc0TDM4Miw4NkwzOTAsODZMNDAwLDk2TDQwMCw2NEwzOTAsNzRMMzgyLDc0WiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgogICAgPGcgaWQ9IkZldWNodGlna2VpdHNzZW5zb3IiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik00OCwzMS41NEw0Ni41LDMzLjIyQzQ2LjUsMzMuMjIgNDMuOTQsMzYuMTIgNDEuMzYsMzkuODhDMzguNzgsNDMuNjQgMzYsNDguMTQgMzYsNTIuNDZDMzYsNTkuMDQzIDQxLjQxNyw2NC40NiA0OCw2NC40NkM1NC41ODMsNjQuNDYgNjAsNTkuMDQzIDYwLDUyLjQ2QzYwLDQ4LjE0IDU3LjIyLDQzLjY0IDU0LjY0LDM5Ljg4QzUyLjA2LDM2LjEyIDQ5LjUsMzMuMjIgNDkuNSwzMy4yMkw0OCwzMS41NE00OCwzNy44QzQ4Ljg4LDM4Ljg0IDQ5LjY4LDM5LjcgNTEuMzYsNDIuMTRDNTMuNzgsNDUuNjYgNTYsNTAuMTQgNTYsNTIuNDZDNTYsNTYuOSA1Mi40NCw2MC40NiA0OCw2MC40NkM0My41Niw2MC40NiA0MCw1Ni45IDQwLDUyLjQ2QzQwLDUwLjE0IDQyLjIyLDQ1LjY2IDQ0LjY0LDQyLjE0QzQ2LjMyLDM5LjcgNDcuMTIsMzguODQgNDgsMzcuOFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJUYXN0ZXIiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSI5NiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNNjQsMTI2LjVMNzAuNSwxMjYuNUw3Mi41LDE0MC41TDIzLjUsMTQwLjVMMjYuNSwxMjYuNUwzMiwxMjYuNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDtzdHJva2UtbGluZWNhcDpzcXVhcmU7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCwxMzJDNjQsMTM0LjIwOCA1Ni44MzEsMTM2IDQ4LDEzNkMzOS4xNjksMTM2IDMyLDEzNC4yMDggMzIsMTMyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NHB4OyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTMyTDMyLDEyMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LDEzMkw2NCwxMjEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDo0cHg7Ii8+CiAgICAgICAgICAgIDxlbGxpcHNlIGN4PSI0OCIgY3k9IjEyMCIgcng9IjE2IiByeT0iNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iTMO2c3VuZyI+CiAgICAgICAgPHBhdGggZD0iTTExMiw0OEwxMTIsODBMMTUxLDgwIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMDQsODBMMzM2LDgwTDMzNiwxNkwxMjgsMTZMMTI4LDQ4TDE1MSw0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMjQsMTI4TDIyNCw5NkwyNTYsOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyNCwxMjhMMTc2LDEyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNMjU2LDY0TDE5Miw2NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMzYiIGN5PSI4MCIgcj0iNCIvPgogICAgICAgIDxwYXRoIGlkPSJPUiIgZD0iTTE0NCwzMkMxNjAsMzIgMTg0LDQ4IDE5Miw2NEMxODQsODAgMTYwLDk2IDE0NCw5NkMxNjAsNjQgMTYwLDY0IDE0NCwzMloiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgogICAgICAgIDxwYXRoIGlkPSJBTkQtR2F0dGVyIiBkPSJNMjU2LDQ4TDI3Miw0OEMyODkuNTU1LDQ4IDMwNCw2Mi40NDUgMzA0LDgwQzMwNCw5Ny41NTUgMjg5LjU1NSwxMTIgMjcyLDExMkwyNTYsMTEyTDI1Niw0OFoiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgogICAgICAgIDxnIGlkPSJJbnZlcnRlciI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTIsMTEyTDE2MCwxMjhMMTEyLDE0NEwxMTIsMTEyWiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE3NiwxMjhDMTc2LDEzMi4zODkgMTcyLjM4OSwxMzYgMTY4LDEzNkMxNjMuNjExLDEzNiAxNjAsMTMyLjM4OSAxNjAsMTI4QzE2MCwxMjMuNjExIDE2My42MTEsMTIwIDE2OCwxMjBDMTcyLjM4NiwxMjAgMTc1Ljk5NiwxMjMuNjA2IDE3NiwxMjcuOTkyIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},11178:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQ0OHB4IiBoZWlnaHQ9IjE3NnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNODAsNDhMMTEyLDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTgwLDEyOEwxMTIsMTI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTMzNiw4MEwzNjgsODAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxnIGlkPSJMYXV0c3ByZWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjM2OCIgeT0iNDgiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDQsMTI4KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNDA0LDYyLjQ2TDQwNCw2Ni41OEM0MDkuNzgsNjguMyA0MTQsNzMuNjYgNDE0LDgwQzQxNCw4Ni4zNCA0MDkuNzgsOTEuNjggNDA0LDkzLjRMNDA0LDk3LjU0QzQxMiw5NS43MiA0MTgsODguNTYgNDE4LDgwQzQxOCw3MS40NCA0MTIsNjQuMjggNDA0LDYyLjQ2TTQwOSw4MEM0MDksNzYuNDYgNDA3LDczLjQyIDQwNCw3MS45NEw0MDQsODhDNDA3LDg2LjU4IDQwOSw4My41MiA0MDksODBNMzgyLDc0TDM4Miw4NkwzOTAsODZMNDAwLDk2TDQwMCw2NEwzOTAsNzRMMzgyLDc0WiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgogICAgPGcgaWQ9IkZldWNodGlna2VpdHNzZW5zb3IiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik00OCwzMS41NEw0Ni41LDMzLjIyQzQ2LjUsMzMuMjIgNDMuOTQsMzYuMTIgNDEuMzYsMzkuODhDMzguNzgsNDMuNjQgMzYsNDguMTQgMzYsNTIuNDZDMzYsNTkuMDQzIDQxLjQxNyw2NC40NiA0OCw2NC40NkM1NC41ODMsNjQuNDYgNjAsNTkuMDQzIDYwLDUyLjQ2QzYwLDQ4LjE0IDU3LjIyLDQzLjY0IDU0LjY0LDM5Ljg4QzUyLjA2LDM2LjEyIDQ5LjUsMzMuMjIgNDkuNSwzMy4yMkw0OCwzMS41NE00OCwzNy44QzQ4Ljg4LDM4Ljg0IDQ5LjY4LDM5LjcgNTEuMzYsNDIuMTRDNTMuNzgsNDUuNjYgNTYsNTAuMTQgNTYsNTIuNDZDNTYsNTYuOSA1Mi40NCw2MC40NiA0OCw2MC40NkM0My41Niw2MC40NiA0MCw1Ni45IDQwLDUyLjQ2QzQwLDUwLjE0IDQyLjIyLDQ1LjY2IDQ0LjY0LDQyLjE0QzQ2LjMyLDM5LjcgNDcuMTIsMzguODQgNDgsMzcuOFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJUYXN0ZXIiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSI5NiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNNjQsMTI2LjVMNzAuNSwxMjYuNUw3Mi41LDE0MC41TDIzLjUsMTQwLjVMMjYuNSwxMjYuNUwzMiwxMjYuNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDtzdHJva2UtbGluZWNhcDpzcXVhcmU7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCwxMzJDNjQsMTM0LjIwOCA1Ni44MzEsMTM2IDQ4LDEzNkMzOS4xNjksMTM2IDMyLDEzNC4yMDggMzIsMTMyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NHB4OyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTMyTDMyLDEyMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LDEzMkw2NCwxMjEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDo0cHg7Ii8+CiAgICAgICAgICAgIDxlbGxpcHNlIGN4PSI0OCIgY3k9IjEyMCIgcng9IjE2IiByeT0iNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);