"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[84459],{48895:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var r=t(83117),n=(t(67294),t(3905));t(61839);const m={sidebar_custom_props:{id:"1a433856-95a0-4cba-ac12-03aa35e679ca"}},i="Sieb des Eratosthenes",p={unversionedId:"Programmieren-1/v24/Aufgaben/grid",id:"Programmieren-1/v24/Aufgaben/grid",title:"Sieb des Eratosthenes",description:"09grid.zip",source:"@site/docs/Programmieren-1/v24/Aufgaben/09_grid.md",sourceDirName:"Programmieren-1/v24/Aufgaben",slug:"/Programmieren-1/v24/Aufgaben/grid",permalink:"/Programmieren-1/v24/Aufgaben/grid",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/v24/Aufgaben/09_grid.md",tags:[],version:"current",lastUpdatedAt:1659530664,formattedLastUpdatedAt:"3. Aug. 2022",sidebarPosition:9,frontMatter:{sidebar_custom_props:{id:"1a433856-95a0-4cba-ac12-03aa35e679ca"}},sidebar:"sidebar",previous:{title:"Zufallszahl",permalink:"/Programmieren-1/v24/Aufgaben/zufalls_zahl"},next:{title:"Name",permalink:"/Programmieren-1/v24/Aufgaben/name"}},d={},l=[{value:"Aufgaben",id:"aufgaben",level:2}],s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},o=s("Comment"),c=s("Figure"),k={toc:l};function N(e){let{components:a,...m}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,m,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"sieb-des-eratosthenes"},"Sieb des Eratosthenes"),(0,n.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("a",{target:"_blank",href:t(78570).Z},"09_grid.zip")),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Mit folgendem Programm wird auf ",(0,n.kt)("a",{parentName:"p",href:"https://io.gbsl.website/color_grid"},"https://io.gbsl.website/color_grid")," ein Gitternetz mit nummerierten Feldern erzeugt."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"from smartphone_connector import Connector\n\ndevice = Connector('https://io.gbsl.website', 'FooBar')\ndevice.setup_grid(10, 15, enumerate=True)\n\n# verbindung mit dem Ger\xe4t beenden\ndevice.disconnect()\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,n.kt)("img",{src:t(76955).Z,width:"1440",height:"1018"})),(0,n.kt)(o,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Mit dem Befehl ",(0,n.kt)("inlineCode",{parentName:"p"},'device.set_grid_at(cell_number=1, color="red")')," kann die Farbe des ersten Feldes auf rot gesetzt werden. Als Farbe sind alle englischen Farb-Namen erlaubt."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Weiter kann mit dem Befehl ",(0,n.kt)("inlineCode",{parentName:"p"},"device.get_grid_at(cell_number=1)")," die aktuelle Farbe des ersten Feldes abgefragt werden."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"aufgaben"},"Aufgaben"),(0,n.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Zeichnen Sie ein ",(0,n.kt)("inlineCode",{parentName:"p"},"10x10")," grosses Gitternetz und f\xe4rben Sie folgenden Felder rot ein:"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"alle Felder der 2er Reihe, ausser die 2 selbst"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"alle Felder der 3er Reihe, ausser die 3 selbst"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"alle Felder der 5er Reihe, ausser die 5 selbst"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"alle Felder der 7er Reihe, ausser die 7 selbst"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})))),(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Was f\xe4llt Ihnen auf? Was f\xfcr Zahlen sind auf den noch weissen feldern abgebildet?"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},'Dieser Algorithmus zum Auffinden von Primzahlen wurde schon viele Jahrhunderte vor Christus entdeckt, es war aber Eratosthenes welcher ca. 300 v. Chr. dieses Verfahren "Zahlensieb" nannte, weshalb es bis heute noch "Sieb des Eratosthenes" genannt wird.'),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Der eigentliche Algorithmus funktioniert wie folgt:"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Starte bei der Zahl 2"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Ist das Ende des Gitters erreicht, springe zu Punkt 4."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Ist das Feld rot, fahre mit Schritt 3 weiter."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Ist das aktuelle Feld noch nicht rot, so ist es eine Primzahl und wird ",(0,n.kt)("em",{parentName:"p"},"nicht")," rot gef\xe4rbt. Alle Vielfachen dieser Zahl bis zum Ende des Gitters werden rot gef\xe4rbt."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Gehe zum n\xe4chsten Feld und fahre mit Schritt 2 weiter."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Ende"),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})))),(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Implementieren Sie diesen Algorithmus und pr\xfcfen Sie ihn mit einem ",(0,n.kt)("inlineCode",{parentName:"p"},"20x20")," Gitter."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,n.kt)("div",{parentName:"li",className:"commentable"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Zusatz"),": Eigentlich m\xfcssen nicht ganz alle Felder \xfcberpr\xfcft werden. Optimieren Sie ihr Programm, indem Sie nur soviele Felder \xfcberpr\xfcfen, wie minimal n\xf6tig sind."),(0,n.kt)(o,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))))}N.isMDXComponent=!0},78570:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/files/09_grid-bd77570506806e9323706d31cd9d9e2d.zip"},76955:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/grid-73bfaaa3f2cb98f8f88e10258aab8821.png"}}]);