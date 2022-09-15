"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2045],{65648:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(91189),a=i(67294),s=i(92814);const r="videoComponent_YfiL",M="headerClosed_s_Of",d="headerOpen_AzNA",N="minimize_pBQC",m="description_p2GN",o="title_YxV5",p="cardOpen_IEP6";var l=i(51436),D=i(86010);class g extends a.Component{constructor(){super(...arguments),(0,n.Z)(this,"state",{open:!!this.props.expanded,visible:!1}),(0,n.Z)(this,"videoRef",a.createRef()),(0,n.Z)(this,"isInViewport",(()=>{const e=this.videoRef.current.getBoundingClientRect(),{top:t,bottom:i}=e,{innerHeight:n}=window;t<n&&i>0?this.state.visible||this.setState({visible:!0}):this.state.visible&&this.setState({visible:!1})})),(0,n.Z)(this,"onClick",(()=>{this.setState({open:!this.state.open}),this.isInViewport()}))}componentDidMount(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()}componentWillUnmount(){document.removeEventListener("scroll",this.isInViewport)}render(){const{title:e,src:t,type:i,children:n}=this.props;return a.createElement("div",{ref:this.videoRef,className:r},this.state.open?a.createElement("div",{className:p},a.createElement("div",{className:d},e&&a.createElement("h5",{className:o},e),!this.props.expanded&&a.createElement("button",{className:(0,D.default)("button button--sm button--outline button--secondary",N),onClick:this.onClick},a.createElement(s.G,{icon:l.IQi})),n&&a.createElement("div",{className:m},n)),this.state.visible?a.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},a.createElement("source",{src:t,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(s.G,{icon:l.IJ7,spin:!0}))):a.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},a.createElement("div",{className:M},a.createElement("div",{className:o},e||"Video"),n&&a.createElement("div",{className:m},n)),this.state.visible?a.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},a.createElement("source",{src:t,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(s.G,{icon:l.IJ7,spin:!0}))))}}},10088:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>I,frontMatter:()=>M,metadata:()=>N,toc:()=>o});var n=i(83117),a=(i(67294),i(3905)),s=(i(61839),i(65648)),r=i(44996);const M={sidebar_label:"Cloud",sidebar_custom_props:{id:"7a8f793a-7ad7-4e77-8280-39ffcae6ab35",source:{name:"rothe.io",ref:"https://rothe.io/?page=ict/writing/2-0-cloud"}}},d="Cloud",N={unversionedId:"ICT-Grundlagen/cloud",id:"version-26P/ICT-Grundlagen/cloud",title:"Cloud",description:"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.",source:"@site/versioned_docs/version-26P/01-ICT-Grundlagen/5-cloud.mdx",sourceDirName:"01-ICT-Grundlagen",slug:"/ICT-Grundlagen/cloud",permalink:"/26P/ICT-Grundlagen/cloud",draft:!1,tags:[],version:"26P",sidebarPosition:5,frontMatter:{sidebar_label:"Cloud",sidebar_custom_props:{id:"7a8f793a-7ad7-4e77-8280-39ffcae6ab35",source:{name:"rothe.io",ref:"https://rothe.io/?page=ict/writing/2-0-cloud"}}},sidebar:"version-26P/sidebar",previous:{title:"E-Mail verwenden",permalink:"/26P/ICT-Grundlagen/E-Mail"},next:{title:"Datenverlust",permalink:"/26P/ICT-Grundlagen/Sicherheit/Datenverlust"}},m={},o=[{value:"Desktop-App ",id:"desktop-app-",level:2},{value:"Web-App ",id:"web-app-",level:2},{value:"Microsoft 365",id:"microsoft-365",level:2},{value:"OneDrive im Browser",id:"onedrive-im-browser",level:3},{value:"Teams-App",id:"teams-app",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=p("Comment"),D=p("Figure"),g=p("SourceRef"),c={toc:o};function I(e){let{components:t,...M}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,M,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"cloud"},"Cloud"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.\n\xdcblicherweise steht auf dem Server ebenfalls eine ",(0,a.kt)("a",{parentName:"p",href:"#Web-App"},"Web-App")," zu Verf\xfcgung, damit die Dateien im Browser betrachtet oder bearbeitet werden k\xf6nnen."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"desktop-app-"},"Desktop-App ",(0,a.kt)("i",{parentName:"h2",className:"mdi-file-word mdi blue m"})),(0,a.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Damit die Desktop-App verwendet werden kann, muss diese erst auf dem Ger\xe4t installiert worden sein. Desktop-Apps bieten meistens einen gr\xf6sseren Funktionsumfang, k\xf6nnen ohne aktive Internetverbindung gestartet und verwendet werden und sind meist performanter."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"web-app-"},"Web-App ",(0,a.kt)("i",{parentName:"h2",className:"mdi-file-word-outline mdi blue m"})),(0,a.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Die Web-App wird beim \xd6ffnen des Dokuments vom Server des Anbieters heruntergeladen und im Browser (daher auf dem Prozessor des Laptops) ausgef\xfchrt."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{alt:"Web-App Architektur",src:i(4584).Z,width:"640",height:"288"}),(0,a.kt)("figcaption",{parentName:"Figure"},(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Web-App Architektur",(0,a.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),(0,a.kt)(g,{parentName:"figcaption",bib:{author:"Stefan Rothe",source:"https://rothe.io/ict/writing/images/cloud-app.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!1},mdxType:"SourceRef"}))),(0,a.kt)(l,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Einzelne Berechnungen k\xf6nnen auch in die Cloud ausgelagert werden, z.B. die Autokorrektur in der Word Web-App:\nBei jeder \xc4nderung wird der aktuelle Abschnitt an die Cloud geschickt und auf Fehler \xfcberpr\xfcft:"),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,a.kt)(s.Z,{src:(0,r.Z)("/video/cloud-webapp-word-autokorrektur.mp4"),title:"Autokorrektur in Word Onine",expanded:!0,mdxType:"Video"},(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Auf der rechten Seite ist der Datenaustausch, der f\xfcr die Autokorrektur notwendig ist, ",(0,a.kt)("strong",{parentName:"p"},"vom Laptop zur Cloud")," zu sehen. Bei ",(0,a.kt)("strong",{parentName:"p"},"jeder \xc4nderung")," des Dokuments wird der ",(0,a.kt)("strong",{parentName:"p"},"ganze Inhalt")," des aktuellen Abschnitts an die Cloud geschickt."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"}))),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Web-Apps brauchen eine ",(0,a.kt)("strong",{parentName:"p"},"aktive Internetverbindung")," und sind oft auch etwas langsamer als Desktop-Apps. Meist ist zudem der Funktionsumfang eingeschr\xe4nkt."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"microsoft-365"},"Microsoft 365"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h3",{parentName:"div",id:"onedrive-im-browser"},"OneDrive im Browser"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"In ",(0,a.kt)("strong",{parentName:"p"},"OneDrive im Browser")," kann eine Datei wahlweise in der Web-App oder in der Desktop-App ge\xf6ffnet werden. Mit einem Doppelklick wird die Datei in der Web-App ge\xf6ffnet. Klicke auf die drei vertikalen Punkte ",(0,a.kt)("kbd",{parentName:"p"},"\u22ee"),", dann auf \xd6ffnen und In der App \xf6ffnen, um die Datei in der Desktop-App zu \xf6ffnen."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:i(72165).Z,width:"822",height:"200"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"teams-app"},"Teams-App"),(0,a.kt)(l,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"In der ",(0,a.kt)("strong",{parentName:"p"},"Teams-App")," muss auf die drei horizontalen Punkte ",(0,a.kt)("kbd",{parentName:"p"},"\u22ee")," geklickt werden. Es gibt zus\xe4tzlich die M\xf6glichkeit ",(0,a.kt)("inlineCode",{parentName:"p"},"In Teams bearbeiten"),". In diesem Fall wird die Web-App verwendet, diese wird jedoch innerhalb der Team-App gestartet (die Teams-App kann einen Browser anzeigen)."),(0,a.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)(D,{parentName:"div",options:{},mdxType:"Figure"},(0,a.kt)("img",{src:i(55477).Z,width:"814",height:"146"})),(0,a.kt)(l,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})))}I.isMDXComponent=!0},4584:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjY0MHB4IiBoZWlnaHQ9IjI4OHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNNDUwLjU4Myw0Ni40NjRDNDUwLjU4MywyOS42ODMgNDYzLjc2NCwxNi4wNTkgNDgwLDE2LjA1OUM0OTYuMjM2LDE2LjA1OSA1MDkuNDE3LDI5LjY4MyA1MDkuNDE3LDQ2LjQ2NEM1MTguODU5LDMxLjkzMSA1MzcuOTQsMjUuOTg5IDU1MiwzMy4yMDNDNTY2LjA2LDQwLjQxOCA1NjkuODEsNTguMDc0IDU2MC4zNjksNzIuNjA3QzU3Ni43MjIsNjQuMjE2IDU5Ni41OSw2Ny41NDkgNjA0LjcwOCw4MC4wNDRDNjEyLjgyNSw5Mi41MzkgNjA2LjEzOSwxMDkuNDk2IDU4OS43ODYsMTE3Ljg4N0M2MDguNjY5LDExNy44ODcgNjI0LDEyOS42MDEgNjI0LDE0NC4wMjlDNjI0LDE1OC40NTggNjA4LjY2OSwxNzAuMTcyIDU4OS43ODYsMTcwLjE3MkM2MDYuMTM5LDE3OC41NjIgNjEyLjgyNSwxOTUuNTE5IDYwNC43MDgsMjA4LjAxNUM1OTYuNTksMjIwLjUxIDU3Ni43MjIsMjIzLjg0MiA1NjAuMzY5LDIxNS40NTJDNTY5LjgxLDIyOS45ODUgNTY2LjA2LDI0Ny42NDEgNTUyLDI1NC44NTVDNTM3Ljk0LDI2Mi4wNjkgNTE4Ljg1OSwyNTYuMTI3IDUwOS40MTcsMjQxLjU5NEM1MDkuNDE3LDI1OC4zNzYgNDk2LjIzNiwyNzIgNDgwLDI3MkM0NjMuNzY0LDI3MiA0NTAuNTgzLDI1OC4zNzYgNDUwLjU4MywyNDEuNTk0QzQ0MS4xNDEsMjU2LjEyNyA0MjIuMDYsMjYyLjA2OSA0MDgsMjU0Ljg1NUMzOTMuOTQsMjQ3LjY0MSAzOTAuMTksMjI5Ljk4NSAzOTkuNjMxLDIxNS40NTJDMzgzLjI3OCwyMjMuODQyIDM2My40MSwyMjAuNTEgMzU1LjI5MiwyMDguMDE1QzM0Ny4xNzUsMTk1LjUxOSAzNTMuODYxLDE3OC41NjIgMzcwLjIxNCwxNzAuMTcyQzM1MS4zMzEsMTcwLjE3MiAzMzYsMTU4LjQ1OCAzMzYsMTQ0LjAyOUMzMzYsMTI5LjYwMSAzNTEuMzMxLDExNy44ODcgMzcwLjIxNCwxMTcuODg3QzM1My44NjEsMTA5LjQ5NiAzNDcuMTc1LDkyLjUzOSAzNTUuMjkyLDgwLjA0NEMzNjMuNDEsNjcuNTQ5IDM4My4yNzgsNjQuMjE2IDM5OS42MzEsNzIuNjA3QzM5MC4xOSw1OC4wNzQgMzkzLjk0LDQwLjQxOCA0MDgsMzMuMjAzQzQyMi4wNiwyNS45ODkgNDQxLjE0MSwzMS45MzEgNDUwLjU4Myw0Ni40NjRaIiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgPHRleHQgeD0iNDU0LjA4N3B4IiB5PSI2NC43MzZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+Q2xvdWQ8L3RleHQ+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSI0MTYiIHk9IjE4NC4wNTkiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDMwLjcxMXB4IiB5PSIyMDcuMDQ2cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPm1laW5lIERhdGVpPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTMyMCwzMkMzMjAsMjMuMTY5IDMxMi44MzEsMTYgMzA0LDE2TDMyLDE2QzIzLjE2OSwxNiAxNiwyMy4xNjkgMTYsMzJMMTYsMTYwQzE2LDE2OC44MzEgMjMuMTY5LDE3NiAzMiwxNzZMMzA0LDE3NkMzMTIuODMxLDE3NiAzMjAsMTY4LjgzMSAzMjAsMTYwTDMyMCwzMloiIHN0eWxlPSJmaWxsOnJnYigxNzYsMTkwLDE5Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8dGV4dCB4PSIxMzcuMDMzcHgiIHk9IjM5LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5MYXB0b3A8L3RleHQ+CiAgICA8ZyBpZD0iQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMTI4LDczLjcwNUMxMjgsNjguNDE0IDEyMy43MDQsNjQuMTE3IDExOC40MTIsNjQuMTE3TDQxLjU4OCw2NC4xMTdDMzYuMjk2LDY0LjExNyAzMiw2OC40MTQgMzIsNzMuNzA1TDMyLDE1MC40MTJDMzIsMTU1LjcwNCAzNi4yOTYsMTYwIDQxLjU4OCwxNjBMMTE4LjQxMiwxNjBDMTIzLjcwNCwxNjAgMTI4LDE1NS43MDQgMTI4LDE1MC40MTJMMTI4LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNjIuNDQxcHgiIHk9Ijg3LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BcHA8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iQnJvd3NlciI+CiAgICAgICAgPHBhdGggZD0iTTMwNCw3My43MDVDMzA0LDY4LjQxNCAyOTkuNzA0LDY0LjExNyAyOTQuNDEyLDY0LjExN0wxNTMuNTg4LDY0LjExN0MxNDguMjk2LDY0LjExNyAxNDQsNjguNDE0IDE0NCw3My43MDVMMTQ0LDE1MC40MTJDMTQ0LDE1NS43MDQgMTQ4LjI5NiwxNjAgMTUzLjU4OCwxNjBMMjk0LjQxMiwxNjBDMjk5LjcwNCwxNjAgMzA0LDE1NS43MDQgMzA0LDE1MC40MTJMMzA0LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTg2LjcwNXB4IiB5PSI4OC4zNDZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+QnJvd3NlcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJXZWItQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMjg4LDExNS4yNTlDMjg4LDExMy40OTIgMjg2LjU2NiwxMTIuMDU5IDI4NC44LDExMi4wNTlMMTYzLjIsMTEyLjA1OUMxNjEuNDM0LDExMi4wNTkgMTYwLDExMy40OTIgMTYwLDExNS4yNTlMMTYwLDE0MC44NTlDMTYwLDE0Mi42MjUgMTYxLjQzNCwxNDQuMDU5IDE2My4yLDE0NC4wNTlMMjg0LjgsMTQ0LjA1OUMyODYuNTY2LDE0NC4wNTkgMjg4LDE0Mi42MjUgMjg4LDE0MC44NTlMMjg4LDExNS4yNTlaIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIyNCwxMzApO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjE4Mi41MTZweCIgeT0iMTMzLjE3MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5XZWItQXBwPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IldlYi1BcHAxIiBzZXJpZjppZD0iV2ViLUFwcCI+CiAgICAgICAgPHBhdGggZD0iTTU0NCwxMTUuMjI5QzU0NCwxMTMuNDYzIDU0Mi41NjYsMTEyLjAyOSA1NDAuOCwxMTIuMDI5TDQxOS4yLDExMi4wMjlDNDE3LjQzNCwxMTIuMDI5IDQxNiwxMTMuNDYzIDQxNiwxMTUuMjI5TDQxNiwxNDAuODI5QzQxNiwxNDIuNTk1IDQxNy40MzQsMTQ0LjAyOSA0MTkuMiwxNDQuMDI5TDU0MC44LDE0NC4wMjlDNTQyLjU2NiwxNDQuMDI5IDU0NCwxNDIuNTk1IDU0NCwxNDAuODI5TDU0NCwxMTUuMjI5WiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMjQsMTMwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MzguNTE2cHgiIHk9IjEzMy4xNzFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+V2ViLUFwcDwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik00MDMuOTk5LDIwMi4wMDJMNDE2LDIwOEw0MDQuMDAxLDIxNC4wMDJDNDA3LjAwMSwyMTEuMDAyIDQwNi45OTksMjA1LjAwMiA0MDMuOTk5LDIwMi4wMDJaIi8+CiAgICA8cGF0aCBkPSJNODAsMTYwLjA1OUw4MCwyMDguMDU5QzgwLDIwOC4wNTkgMzUxLjUyMywyMDguMDExIDQwNi40LDIwOC4wMDIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICA8cGF0aCBkPSJNMzAwLDEzNC4wMjlMMjg4LDEyOC4wMjlMMzAwLDEyMi4wMjlDMjk3LDEyNS4wMjkgMjk3LDEzMS4wMjkgMzAwLDEzNC4wMjlaIi8+CiAgICA8cGF0aCBkPSJNNDE2LDEyOC4wMjlMMjk3LjYsMTI4LjAyOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgIDxwYXRoIGQ9Ik00MDQsMTg2TDQxNiwxOTJMNDA0LDE5OEM0MDcsMTk1IDQwNywxODkgNDA0LDE4NloiLz4KICAgIDxwYXRoIGQ9Ik0yMjQsMTQ0LjA1OUwyMjQsMTkyTDQwNi40LDE5MiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KPC9zdmc+Cg=="},72165:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/onedrive-open-64614cd17252de6f9eee8e961b1081ef.png"},55477:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/teams-open-7af7b912b0949a4680003cee7244d493.png"}}]);