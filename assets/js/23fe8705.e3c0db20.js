"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[423],{603905:function(e,i,t){t.d(i,{Zo:function(){return D},kt:function(){return c}});var g=t(667294);function I(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);i&&(g=g.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,g)}return t}function N(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){I(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,g,I=function(e,i){if(null==e)return{};var t,g,I={},n=Object.keys(e);for(g=0;g<n.length;g++)t=n[g],i.indexOf(t)>=0||(I[t]=e[t]);return I}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(g=0;g<n.length;g++)t=n[g],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(I[t]=e[t])}return I}var M=g.createContext({}),a=function(e){var i=g.useContext(M),t=i;return e&&(t="function"==typeof e?e(i):N(N({},i),e)),t},D=function(e){var i=a(e.components);return g.createElement(M.Provider,{value:i},e.children)},s={inlineCode:"code",wrapper:function(e){var i=e.children;return g.createElement(g.Fragment,{},i)}},r=g.forwardRef((function(e,i){var t=e.components,I=e.mdxType,n=e.originalType,M=e.parentName,D=l(e,["components","mdxType","originalType","parentName"]),r=a(t),c=I,d=r["".concat(M,".").concat(c)]||r[c]||s[c]||n;return t?g.createElement(d,N(N({ref:i},D),{},{components:t})):g.createElement(d,N({ref:i},D))}));function c(e,i){var t=arguments,I=i&&i.mdxType;if("string"==typeof e||I){var n=t.length,N=new Array(n);N[0]=r;var l={};for(var M in i)hasOwnProperty.call(i,M)&&(l[M]=i[M]);l.originalType=e,l.mdxType="string"==typeof e?e:I,N[1]=l;for(var a=2;a<n;a++)N[a]=t[a];return g.createElement.apply(null,N)}return g.createElement.apply(null,t)}r.displayName="MDXCreateElement"},332461:function(e,i,t){t.r(i),t.d(i,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return M},metadata:function(){return D},toc:function(){return r}});var g,I=t(583117),n=t(480102),N=(t(667294),t(603905)),l=["components"],M={title:"9. \u2b50\ufe0f Speicher"},a="9. \u2b50\ufe0f Speicher",D={unversionedId:"Computer/gates/memory",id:"version-24f/Computer/gates/memory",title:"9. \u2b50\ufe0f Speicher",description:"Die bisherigen Schaltungen f\xfcr den Einbruchsalarm haben einen grossen Nachteil: sobald der Bewegungsmelder keine Bewegung mehr entdeckt, wird der Alarm abgestellt.",source:"@site/versioned_docs/version-24f/07-Computer/02-gates/09-memory.md",sourceDirName:"07-Computer/02-gates",slug:"/Computer/gates/memory",permalink:"/24f/Computer/gates/memory",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/07-Computer/02-gates/09-memory.md",tags:[],version:"24f",sidebarPosition:9,frontMatter:{title:"9. \u2b50\ufe0f Speicher"},sidebar:"version-24f/sidebar",previous:{title:"8. Addierer",permalink:"/24f/Computer/gates/adder"},next:{title:"3. Rechnerarchitektur",permalink:"/24f/category/3-rechnerarchitektur"}},s={},r=[{value:"Interaktive Schaltung",id:"interaktive-schaltung",level:2},{value:"R\xfcckkopplung mit Reset",id:"r\xfcckkopplung-mit-reset",level:2},{value:"Speicher",id:"speicher",level:2}],c=(g="Figure",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,N.kt)("div",e)}),d={toc:r};function m(e){var i=e.components,g=(0,n.Z)(e,l);return(0,N.kt)("wrapper",(0,I.Z)({},d,g,{components:i,mdxType:"MDXLayout"}),(0,N.kt)("h1",{id:"9-\ufe0f-speicher"},"9. \u2b50\ufe0f Speicher"),(0,N.kt)("p",null,"Die bisherigen Schaltungen f\xfcr den Einbruchsalarm haben einen grossen Nachteil: sobald der Bewegungsmelder keine Bewegung mehr entdeckt, wird der Alarm abgestellt."),(0,N.kt)("p",null,"Ein guter Einbruchsalarm sollte aber nicht mehr abschalten. Die Schaltung sollte die Information, dass eine Bewegung entdeckt wurde, speichern k\xf6nnen."),(0,N.kt)("p",null,"Mit Hilfe eines OR-Gatter kann dies realisiert werden. Dazu wird das Ausgangssignal des OR-Gatters wieder als Eingang verwendet. Das f\xfchrt dazu, dass das OR-Gatter immer den Wert 1\ufe0f\u20e3 liefern wird, sobald es einmal diesen Wert im Ausgang angenommen hat."),(0,N.kt)(c,{options:{},mdxType:"Figure"},(0,N.kt)("img",{src:t(904878).Z,width:"368",height:"112"})),(0,N.kt)("h2",{id:"interaktive-schaltung"},"Interaktive Schaltung"),(0,N.kt)("p",null,"In dieser interaktiven Schaltung kannst du die R\xfcckkopplung testen:"),(0,N.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,N.kt)("iframe",{width:"100%",height:"315px",src:"https://circuitverse.org/simulator/embed/rothe-feedback",title:"Circuit Vert",scrolling:"no",frameBorder:"0",webkitAllowFullScreen:!0,mozAllowFullScreen:!0,allowFullScreen:!0})),(0,N.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,N.kt)("div",{parentName:"div",className:"admonition-heading"},(0,N.kt)("h5",{parentName:"div"},(0,N.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,N.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,N.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Info")),(0,N.kt)("div",{parentName:"div",className:"admonition-content"},(0,N.kt)("h4",{parentName:"div",id:"r\xfcckkopplung"},"R\xfcckkopplung"),(0,N.kt)("p",{parentName:"div"},"Wenn der Ausgang einer Schaltung wieder als Eingang verwendet wird, nennt man dies ",(0,N.kt)("strong",{parentName:"p"},"R\xfcckkopplung"),"."),(0,N.kt)("p",{parentName:"div"},"Schaltungen mit R\xfcckkopplung erm\xf6glichen das ",(0,N.kt)("strong",{parentName:"p"},"Speichern")," von Daten sowie die Konstruktion von programmierbaren Schaltungen. Die R\xfcckkopplung ist also ein zentrales Konzept f\xfcr den Bau von Computern."))),(0,N.kt)("h2",{id:"r\xfcckkopplung-mit-reset"},"R\xfcckkopplung mit Reset"),(0,N.kt)("p",null,"Nat\xfcrlich will man die Alarmanlage auch wieder Abschalten k\xf6nnen. Dazu kann in der R\xfcckkopplungsschleife ein Reset-Knopf eingebaut werden:"),(0,N.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,N.kt)("iframe",{width:"100%",height:"315px",src:"https://circuitverse.org/simulator/embed/rothe-feedback-with-reset",title:"Circuit Vert",scrolling:"no",frameBorder:"0",webkitAllowFullScreen:!0,mozAllowFullScreen:!0,allowFullScreen:!0})),(0,N.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,N.kt)("div",{parentName:"div",className:"admonition-heading"},(0,N.kt)("h5",{parentName:"div"},(0,N.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,N.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,N.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,N.kt)("div",{parentName:"div",className:"admonition-content"},(0,N.kt)("ol",{parentName:"div"},(0,N.kt)("li",{parentName:"ol"},(0,N.kt)("p",{parentName:"li"},"Da manchmal Wasser in deinen Keller eindringt, m\xf6chtest du wissen, ob es seit der letzten Kontrolle besonders stark geregnet hat. Ein Feuchtigkeitssensor alleine reicht nicht. Baue in ",(0,N.kt)("strong",{parentName:"p"},"CircuitVerse")," eine entsprechend beschriftete Schaltung mit einer R\xfcckkopplung, die speichert, wenn der Niederschlag zu stark war.")),(0,N.kt)("li",{parentName:"ol"},(0,N.kt)("p",{parentName:"li"},"Baue einen Druckknopf ein, mit dem du die Anzeige wieder zur\xfccksetzen kannst."),(0,N.kt)(c,{parentName:"li",options:{},mdxType:"Figure"},(0,N.kt)("img",{src:t(693356).Z,width:"448",height:"176"})))),(0,N.kt)("hr",{parentName:"div"}),(0,N.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,N.kt)("img",{src:t(499160).Z,width:"448",height:"176"})))),(0,N.kt)("h2",{id:"speicher"},"Speicher"),(0,N.kt)("p",null,"Die Schaltung \xabR\xfcckkopplung mit Reset\xbb wird in der Informatik als SR-Flip-Flop bezeichnet.\nSie speichert den Wert 1, falls der Eingang \xabSet\xbb aktiviert ist und speichert den Wert 0, falls der Eingang \xabReset\xbb aktiviert ist."),(0,N.kt)("p",null,"Diese Schaltung bildet die Grundlage f\xfcr den Bau von Speicher (RAM). Um ein Bit zu speichern, wollen wir eine Schaltung, welche die folgenden zwei Eing\xe4nge hat:"),(0,N.kt)("ul",null,(0,N.kt)("li",{parentName:"ul"},"Daten: gibt an, welcher Wert gespeichert werden soll."),(0,N.kt)("li",{parentName:"ul"},"Speichern: gibt durch ein 1 an, ob nun der Datenwert abgespeichert werden soll.")),(0,N.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,N.kt)("iframe",{width:"100%",height:"315px",src:"https://circuitverse.org/simulator/embed/rothe-d-flip-flop",title:"Circuit Vert",scrolling:"no",frameBorder:"0",webkitAllowFullScreen:!0,mozAllowFullScreen:!0,allowFullScreen:!0})))}m.isMDXComponent=!0},904878:function(e,i){i.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjM2OHB4IiBoZWlnaHQ9IjExMnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNODAsNjRMMTEyLDY0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTExMiw2NEwxMTIsODBMMTY4LDgwIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTI0MCw2NEwyNDAsMTZMMTQ0LDE2TDE0NCw0OEwxNjgsNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxwYXRoIGQ9Ik0yMDgsNjRMMjg4LDY0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7Ii8+CiAgICA8ZyBpZD0iTGF1dHNwcmVjaGVyIj4KICAgICAgICA8cmVjdCB4PSIyODgiIHk9IjMyIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjA0LDEyOCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTMyNCw0Ni40NkwzMjQsNTAuNThDMzI5Ljc4LDUyLjMgMzM0LDU3LjY2IDMzNCw2NEMzMzQsNzAuMzQgMzI5Ljc4LDc1LjY4IDMyNCw3Ny40TDMyNCw4MS41NEMzMzIsNzkuNzIgMzM4LDcyLjU2IDMzOCw2NEMzMzgsNTUuNDQgMzMyLDQ4LjI4IDMyNCw0Ni40Nk0zMjksNjRDMzI5LDYwLjQ2IDMyNyw1Ny40MiAzMjQsNTUuOTRMMzI0LDcyQzMyNyw3MC41OCAzMjksNjcuNTIgMzI5LDY0TTMwMiw1OEwzMDIsNzBMMzEwLDcwTDMyMCw4MEwzMjAsNDhMMzEwLDU4TDMwMiw1OFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxwYXRoIGlkPSJPUiIgZD0iTTE2MCwzMkMxNzYsMzIgMjAwLDQ4IDIwOCw2NEMyMDAsODAgMTc2LDk2IDE2MCw5NkMxNzYsNjQgMTc2LDY0IDE2MCwzMloiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgogICAgPGcgaWQ9IkJld2VndW5nc3NlbnNvciI+CiAgICAgICAgPHJlY3QgeD0iMTYiIHk9IjMyIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOnJnYigxNDQsMjAyLDI0OSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTU3LDUwLjVDNTkuMTk0LDUwLjUgNjEsNDguNjk0IDYxLDQ2LjVDNjEsNDQuMzA2IDU5LjE5NCw0Mi41IDU3LDQyLjVDNTQuODA2LDQyLjUgNTMsNDQuMzA2IDUzLDQ2LjVDNTMsNDguNjk0IDU0LjgwNiw1MC41IDU3LDUwLjVNNDkuOCw3OC4zTDUxLjgsNjkuNUw1Niw3My41TDU2LDg1LjVMNjAsODUuNUw2MCw3MC41TDU1LjgsNjYuNUw1Nyw2MC41QzU5Ljc4LDYzLjY4IDYzLjc4LDY1LjUgNjgsNjUuNUw2OCw2MS41QzY0LjQ4LDYxLjU2IDYxLjIsNTkuNzIgNTkuNCw1Ni43TDU3LjQsNTMuNUM1Ni42OCw1Mi4zIDU1LjQsNTEuNSA1NCw1MS41QzUzLjQsNTEuNSA1Myw1MS43IDUyLjQsNTEuN0w0Miw1Ni4xTDQyLDY1LjVMNDYsNjUuNUw0Niw1OC43TDQ5LjYsNTcuM0w0Ni40LDczLjVMMzYuNiw3MS41TDM1LjgsNzUuNUw0OS44LDc4LjNNMzIsNTcuNUMzMC45MDMsNTcuNSAzMCw1Ni41OTcgMzAsNTUuNUMzMCw1NC40MDMgMzAuOTAzLDUzLjUgMzIsNTMuNUwzOCw1My41TDM4LDU3LjVMMzIsNTcuNU0zNCw0OS41QzMyLjkwMyw0OS41IDMyLDQ4LjU5NyAzMiw0Ny41QzMyLDQ2LjQwMyAzMi45MDMsNDUuNSAzNCw0NS41TDQ0LDQ1LjVMNDQsNDkuNUwzNCw0OS41TTMwLDY1LjVDMjguOTAzLDY1LjUgMjgsNjQuNTk3IDI4LDYzLjVDMjgsNjIuNDAzIDI4LjkwMyw2MS41IDMwLDYxLjVMMzgsNjEuNUwzOCw2NS41TDMwLDY1LjVaIiBzdHlsZT0iZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+CiAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NCIgcj0iNCIvPgo8L3N2Zz4K"},499160:function(e,i){i.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQ0OHB4IiBoZWlnaHQ9IjE3NnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNODAsNDhMMTEyLDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTgwLDEyOEwxMTIsMTI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTMzNiw4MEwzNjgsODAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxnIGlkPSJMYXV0c3ByZWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjM2OCIgeT0iNDgiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDQsMTI4KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNDA0LDYyLjQ2TDQwNCw2Ni41OEM0MDkuNzgsNjguMyA0MTQsNzMuNjYgNDE0LDgwQzQxNCw4Ni4zNCA0MDkuNzgsOTEuNjggNDA0LDkzLjRMNDA0LDk3LjU0QzQxMiw5NS43MiA0MTgsODguNTYgNDE4LDgwQzQxOCw3MS40NCA0MTIsNjQuMjggNDA0LDYyLjQ2TTQwOSw4MEM0MDksNzYuNDYgNDA3LDczLjQyIDQwNCw3MS45NEw0MDQsODhDNDA3LDg2LjU4IDQwOSw4My41MiA0MDksODBNMzgyLDc0TDM4Miw4NkwzOTAsODZMNDAwLDk2TDQwMCw2NEwzOTAsNzRMMzgyLDc0WiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgogICAgPGcgaWQ9IkZldWNodGlna2VpdHNzZW5zb3IiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik00OCwzMS41NEw0Ni41LDMzLjIyQzQ2LjUsMzMuMjIgNDMuOTQsMzYuMTIgNDEuMzYsMzkuODhDMzguNzgsNDMuNjQgMzYsNDguMTQgMzYsNTIuNDZDMzYsNTkuMDQzIDQxLjQxNyw2NC40NiA0OCw2NC40NkM1NC41ODMsNjQuNDYgNjAsNTkuMDQzIDYwLDUyLjQ2QzYwLDQ4LjE0IDU3LjIyLDQzLjY0IDU0LjY0LDM5Ljg4QzUyLjA2LDM2LjEyIDQ5LjUsMzMuMjIgNDkuNSwzMy4yMkw0OCwzMS41NE00OCwzNy44QzQ4Ljg4LDM4Ljg0IDQ5LjY4LDM5LjcgNTEuMzYsNDIuMTRDNTMuNzgsNDUuNjYgNTYsNTAuMTQgNTYsNTIuNDZDNTYsNTYuOSA1Mi40NCw2MC40NiA0OCw2MC40NkM0My41Niw2MC40NiA0MCw1Ni45IDQwLDUyLjQ2QzQwLDUwLjE0IDQyLjIyLDQ1LjY2IDQ0LjY0LDQyLjE0QzQ2LjMyLDM5LjcgNDcuMTIsMzguODQgNDgsMzcuOFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJUYXN0ZXIiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSI5NiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNNjQsMTI2LjVMNzAuNSwxMjYuNUw3Mi41LDE0MC41TDIzLjUsMTQwLjVMMjYuNSwxMjYuNUwzMiwxMjYuNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDtzdHJva2UtbGluZWNhcDpzcXVhcmU7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCwxMzJDNjQsMTM0LjIwOCA1Ni44MzEsMTM2IDQ4LDEzNkMzOS4xNjksMTM2IDMyLDEzNC4yMDggMzIsMTMyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NHB4OyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTMyTDMyLDEyMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LDEzMkw2NCwxMjEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDo0cHg7Ii8+CiAgICAgICAgICAgIDxlbGxpcHNlIGN4PSI0OCIgY3k9IjEyMCIgcng9IjE2IiByeT0iNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iTMO2c3VuZyI+CiAgICAgICAgPHBhdGggZD0iTTExMiw0OEwxMTIsODBMMTUxLDgwIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMDQsODBMMzM2LDgwTDMzNiwxNkwxMjgsMTZMMTI4LDQ4TDE1MSw0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0OyIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMjQsMTI4TDIyNCw5NkwyNTYsOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyNCwxMjhMMTc2LDEyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNMjU2LDY0TDE5Miw2NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMzYiIGN5PSI4MCIgcj0iNCIvPgogICAgICAgIDxwYXRoIGlkPSJPUiIgZD0iTTE0NCwzMkMxNjAsMzIgMTg0LDQ4IDE5Miw2NEMxODQsODAgMTYwLDk2IDE0NCw5NkMxNjAsNjQgMTYwLDY0IDE0NCwzMloiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgogICAgICAgIDxwYXRoIGlkPSJBTkQtR2F0dGVyIiBkPSJNMjU2LDQ4TDI3Miw0OEMyODkuNTU1LDQ4IDMwNCw2Mi40NDUgMzA0LDgwQzMwNCw5Ny41NTUgMjg5LjU1NSwxMTIgMjcyLDExMkwyNTYsMTEyTDI1Niw0OFoiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgogICAgICAgIDxnIGlkPSJJbnZlcnRlciI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTIsMTEyTDE2MCwxMjhMMTEyLDE0NEwxMTIsMTEyWiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE3NiwxMjhDMTc2LDEzMi4zODkgMTcyLjM4OSwxMzYgMTY4LDEzNkMxNjMuNjExLDEzNiAxNjAsMTMyLjM4OSAxNjAsMTI4QzE2MCwxMjMuNjExIDE2My42MTEsMTIwIDE2OCwxMjBDMTcyLjM4NiwxMjAgMTc1Ljk5NiwxMjMuNjA2IDE3NiwxMjcuOTkyIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},693356:function(e,i){i.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjQ0OHB4IiBoZWlnaHQ9IjE3NnB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNODAsNDhMMTEyLDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTgwLDEyOEwxMTIsMTI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgPHBhdGggZD0iTTMzNiw4MEwzNjgsODAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDsiLz4KICAgIDxnIGlkPSJMYXV0c3ByZWNoZXIiPgogICAgICAgIDxyZWN0IHg9IjM2OCIgeT0iNDgiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMDQsMTI4KTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgICAgICA8cGF0aCBkPSJNNDA0LDYyLjQ2TDQwNCw2Ni41OEM0MDkuNzgsNjguMyA0MTQsNzMuNjYgNDE0LDgwQzQxNCw4Ni4zNCA0MDkuNzgsOTEuNjggNDA0LDkzLjRMNDA0LDk3LjU0QzQxMiw5NS43MiA0MTgsODguNTYgNDE4LDgwQzQxOCw3MS40NCA0MTIsNjQuMjggNDA0LDYyLjQ2TTQwOSw4MEM0MDksNzYuNDYgNDA3LDczLjQyIDQwNCw3MS45NEw0MDQsODhDNDA3LDg2LjU4IDQwOSw4My41MiA0MDksODBNMzgyLDc0TDM4Miw4NkwzOTAsODZMNDAwLDk2TDQwMCw2NEwzOTAsNzRMMzgyLDc0WiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgogICAgPGcgaWQ9IkZldWNodGlna2VpdHNzZW5zb3IiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxwYXRoIGQ9Ik00OCwzMS41NEw0Ni41LDMzLjIyQzQ2LjUsMzMuMjIgNDMuOTQsMzYuMTIgNDEuMzYsMzkuODhDMzguNzgsNDMuNjQgMzYsNDguMTQgMzYsNTIuNDZDMzYsNTkuMDQzIDQxLjQxNyw2NC40NiA0OCw2NC40NkM1NC41ODMsNjQuNDYgNjAsNTkuMDQzIDYwLDUyLjQ2QzYwLDQ4LjE0IDU3LjIyLDQzLjY0IDU0LjY0LDM5Ljg4QzUyLjA2LDM2LjEyIDQ5LjUsMzMuMjIgNDkuNSwzMy4yMkw0OCwzMS41NE00OCwzNy44QzQ4Ljg4LDM4Ljg0IDQ5LjY4LDM5LjcgNTEuMzYsNDIuMTRDNTMuNzgsNDUuNjYgNTYsNTAuMTQgNTYsNTIuNDZDNTYsNTYuOSA1Mi40NCw2MC40NiA0OCw2MC40NkM0My41Niw2MC40NiA0MCw1Ni45IDQwLDUyLjQ2QzQwLDUwLjE0IDQyLjIyLDQ1LjY2IDQ0LjY0LDQyLjE0QzQ2LjMyLDM5LjcgNDcuMTIsMzguODQgNDgsMzcuOFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJUYXN0ZXIiPgogICAgICAgIDxyZWN0IHg9IjE2IiB5PSI5NiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MnB4OyIvPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNNjQsMTI2LjVMNzAuNSwxMjYuNUw3Mi41LDE0MC41TDIzLjUsMTQwLjVMMjYuNSwxMjYuNUwzMiwxMjYuNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDtzdHJva2UtbGluZWNhcDpzcXVhcmU7Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCwxMzJDNjQsMTM0LjIwOCA1Ni44MzEsMTM2IDQ4LDEzNkMzOS4xNjksMTM2IDMyLDEzNC4yMDggMzIsMTMyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6NHB4OyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTMyTDMyLDEyMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LDEzMkw2NCwxMjEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDo0cHg7Ii8+CiAgICAgICAgICAgIDxlbGxpcHNlIGN4PSI0OCIgY3k9IjEyMCIgcng9IjE2IiByeT0iNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjRweDsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);