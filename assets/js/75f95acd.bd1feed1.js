"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[59011],{3884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>N,frontMatter:()=>m,metadata:()=>i,toc:()=>l});var n=a(83117),r=(a(67294),a(3905));a(61839);const m={sidebar_custom_props:{id:"4dd9b0d8-3e18-4fc8-ba79-f06dc4f17a4e"}},d="Grundlagen",i={unversionedId:"Excel/basics",id:"Excel/basics",title:"Grundlagen",description:"Ein Excel Dokument ist wie folgt aufgebaut",source:"@site/docs/Excel/00-basics.md",sourceDirName:"Excel",slug:"/Excel/basics",permalink:"/Excel/basics",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Excel/00-basics.md",tags:[],version:"current",lastUpdatedAt:1665306309,formattedLastUpdatedAt:"9. Okt. 2022",sidebarPosition:0,frontMatter:{sidebar_custom_props:{id:"4dd9b0d8-3e18-4fc8-ba79-f06dc4f17a4e"}},sidebar:"sidebar",previous:{title:"Excel",permalink:"/Excel/"},next:{title:"Excel Diagramme",permalink:"/Excel/diagramme/"}},p={},l=[],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},o=s("Comment"),b=s("Figure"),k=s("Answer"),c={toc:l};function N(e){let{components:t,...m}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"grundlagen"},"Grundlagen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Excel Dokument ist wie folgt aufgebaut"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Dokument"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Arbeitsblatt (Mappe)"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Zelle"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})))))))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Es gibt zwei Typen von Zellen: ",(0,r.kt)("strong",{parentName:"p"},"Fix")," oder ",(0,r.kt)("strong",{parentName:"p"},"Berechnet"),"."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Fixe zellen")," besitzen einen ",(0,r.kt)("strong",{parentName:"p"},"Wert")," (Zahl, Text, Datum), sie k\xf6nnen direkt gesetzt werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Berechnete Zellen")," starten immer mit einem ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," Zeichen und sind das ",(0,r.kt)("strong",{parentName:"p"},"Resultat einer Rechnung"),". Sobald die Zelle nicht mehr ausgew\xe4hlt ist, wird dort das Resultat der Berechnung angezeigt und automatisch aktualisiert."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)(b,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:a(22019).Z,width:"858",height:"292"})),(0,r.kt)(o,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit man f\xfcr Berechnungen nicht immer fixe Werte eingeben muss, kann auch der Wert einer anderen Zelle verwendet werden - es wird ",(0,r.kt)("strong",{parentName:"p"},"auf eine andere Zelle verwiesen"),". \xc4hnlich wie bei einem Schachbrett sind die ",(0,r.kt)("strong",{parentName:"p"},"Spalten alphabetisch"),", die ",(0,r.kt)("strong",{parentName:"p"},"Zeilen numerisch")," beschriftet. Um also die erste Zelle oben mit der Zelle unten Rechts zu addieren, kann eine neue Zelle mit dem Inhalt ",(0,r.kt)("inlineCode",{parentName:"p"},"=A1+C3")," erstellt werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In berechneten Zellen k\xf6nnen auch Funktionen verwendet werden, bspw. um den Durchschnitt der ersten Zeile zu bestimmen: ",(0,r.kt)("inlineCode",{parentName:"p"},"=MITTELWERT(A1:C1)"),". Ein Bereich wird also durch zwei Zellen, die erste und die letzte, bestimmt. Es kann auch ",(0,r.kt)("inlineCode",{parentName:"p"},"=MITTELWERT(A1:C3)")," verwendet werden, um den Mittelwert aller 9 ausgef\xfcllter Zellen zu berechnen."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(k,{type:"state",webKey:"cec278c2-1b76-4dec-ac65-e89514a3016f",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Dateiname\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd",className:"underline"},"00-intro.xlsx")),(0,r.kt)("dt",{parentName:"dl"},"Vorlage\n"),(0,r.kt)("dd",{parentName:"dl"},"\ud83d\udc49 ",(0,r.kt)("a",{target:"_blank",href:a(75210).Z},"00-intro.xlsx"))),(0,r.kt)(o,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"no-comments",style:{"--ifm-paragraph-margin-bottom":"4px"}},(0,r.kt)(k,{type:"state",webKey:"cbd91fcb-11f8-47a7-b170-325603d291d5",mdxType:"Answer"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mittelwerte f\xfcr die einzelnen Spalten und Zeilen bestimmen"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)(k,{type:"state",webKey:"adb2e507-7de7-43f8-8340-66d2adc62620",mdxType:"Answer"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In der Zelle ",(0,r.kt)("inlineCode",{parentName:"p"},"E30")," soll der Mittelwert aller Zahlen stehen"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)(k,{type:"state",webKey:"97be9c28-5a72-4824-ad30-d54e60084c1d",mdxType:"Answer"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Eine neue ",(0,r.kt)("strong",{parentName:"p"},"Arbeitsmappe"),' "Tabelle 2" erstellen'),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,r.kt)(k,{type:"state",webKey:"519fa9ef-48a1-4d5c-9e7e-166c6d7467ad",mdxType:"Answer"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Tabelle reproduzieren mit anderen, zuf\xe4lligen Werten. Googeln, wie die Funktion "ZUFALLSBEREICH" funktioniert.'),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)(k,{type:"state",webKey:"a1b9817e-6351-4852-a175-1de0fbb87ba6",mdxType:"Answer"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"\xc4ndern Sie die neue Tabelle so, dass alle Zahlen gerade sind."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Tipp: Mit welcher Operation k\xf6nnen Sie aus einer ungeraden Zahl eine gerade Zahl erzeugen?"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))),(0,r.kt)(k,{type:"state",webKey:"b37535e9-5b54-4b7d-91f6-289bab34388c",mdxType:"Answer"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Berechnen Sie den Mittelwert der Zeilen und runden Sie diesen auf 1 Nachkommastelle"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))),(0,r.kt)(k,{type:"state",webKey:"0d42377a-68f8-4465-921c-a9e198da52c8",mdxType:"Answer"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Geben Sie den Mittelwert gerundet auf 0.5 an (daher 100.25 und 100.74 w\xfcrden auf 100.5 gerundet)"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})))))))}N.isMDXComponent=!0},75210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/00-intro-447747a27ebe6befd8a60cacd9a5f6f9.xlsx"},22019:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);