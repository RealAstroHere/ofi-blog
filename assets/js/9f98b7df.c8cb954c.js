"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),o=l(n),k=r,N=o["".concat(p,".").concat(k)]||o[k]||c[k]||i;return n?a.createElement(N,m(m({ref:t},s),{},{components:n})):a.createElement(N,m({ref:t},s))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,m=new Array(i);m[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[o]="string"==typeof e?e:r,m[1]=d;for(var l=2;l<i;l++)m[l]=n[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},18954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_custom_props:{id:"9f8b397a-500e-4a62-b884-b6441df17902"}},m="Tabellen Erstellen",d={unversionedId:"Datenbanken/sql/create",id:"version-24ef/Datenbanken/sql/create",title:"Tabellen Erstellen",description:"Datenbank erstellen",source:"@site/versioned_docs/version-24ef/03-Datenbanken/01-sql/04-create.md",sourceDirName:"03-Datenbanken/01-sql",slug:"/Datenbanken/sql/create",permalink:"/24ef/Datenbanken/sql/create",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",sidebarPosition:4,frontMatter:{sidebar_custom_props:{id:"9f8b397a-500e-4a62-b884-b6441df17902"}},sidebar:"version-24ef/sidebar",previous:{title:"Aggregierte Abfragen",permalink:"/24ef/Datenbanken/sql/aggregation"},next:{title:"IOT Workshop 2023",permalink:"/24ef/IoT-Workshop/"}},p={},l=[{value:"Datenbank erstellen",id:"datenbank-erstellen",level:2},{value:"Tabellen erstellen",id:"tabellen-erstellen-1",level:2},{value:"Datens\xe4tze einf\xfcgen",id:"datens\xe4tze-einf\xfcgen",level:3},{value:"Tabellen l\xf6schen",id:"tabellen-l\xf6schen",level:3},{value:"Constraints",id:"constraints",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},o=s("Comment"),c=s("Answer"),k={toc:l},N="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(N,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"tabellen-erstellen"},"Tabellen Erstellen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"datenbank-erstellen"},"Datenbank erstellen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("admonition",{type:"def"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"create-database"},(0,r.kt)("inlineCode",{parentName:"h3"},"CREATE DATABASE")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," kann eine neue Datenbank erstellt werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE ef_reto;\n"))),(0,r.kt)("admonition",{type:"def"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"drop-database"},(0,r.kt)("inlineCode",{parentName:"h3"},"DROP DATABASE")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Datenbank kann mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP DATABASE")," auch wieder gel\xf6scht werden:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE ef_reto;\n")),(0,r.kt)("admonition",{parentName:"admonition",title:"Wichtig",type:"danger"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bitte l\xf6schen Sie nur Datenbanken, die Sie selber erstellt haben!",(0,r.kt)("br",{parentName:"p"}),"\n","Der Einfachheit halber haben Sie auf der Kursdatenbank ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"EDU-DBs EF")," alle Rechte..."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})))),(0,r.kt)("admonition",{title:"1. Datenbank erstellen",type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"6b4f812b-2ccf-4beb-b551-71e774fa9c6c",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Datenbank\n"),(0,r.kt)("dd",{parentName:"dl"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"dd",href:"https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5"},"https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5"))),(0,r.kt)(o,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine eigene Datenbank mit nach folgendem Schema ",(0,r.kt)("inlineCode",{parentName:"p"},"ef_name"),", wobei Sie nat\xfcrlich Ihren eigenen Namen verwenden. Wenn der Befehl erfolgreich ausgef\xfchrt wurde, sollte Ihre Datenbank nach dem Aktualisieren der Verbindungen ",(0,r.kt)("i",{parentName:"p",className:"mdi-sync mdi l"})," angezeigt werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)(c,{type:"text",webKey:"b1b0b2a9-5b0a-4b0a-9b0a-5b0a4b0a9b0a",monospace:!0,mdxType:"Answer"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"tabellen-erstellen-1"},"Tabellen erstellen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("admonition",{type:"def"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"create-table"},(0,r.kt)("inlineCode",{parentName:"h3"},"CREATE TABLE")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Tabellen werden mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," erstellt. Die Spalten werden mit dem Namen und dem Datentyp definiert."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE persons (\n    id INT,\n    name TEXT,\n    alter INT,\n    beschreibung TEXT\n)\n")),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Konvention")," Der Name der Tabelle wird immer im Plural geschrieben."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"}))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"datens\xe4tze-einf\xfcgen"},"Datens\xe4tze einf\xfcgen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("admonition",{type:"def"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"insert-into"},(0,r.kt)("inlineCode",{parentName:"h3"},"INSERT INTO")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," k\xf6nnen Datens\xe4tze in die Tabelle eingef\xfcgt werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO persons \n    (id, name, alter, beschreibung)\nVALUES \n    (1, 'Maria Muster', 42, 'Ein ganz normaler Mensch'),\n    (2, 'Hans Monster', 55, 'Ein ganz monstr\xf6ser Mensch');\n"))),(0,r.kt)("admonition",{title:"2. Datens\xe4tze einf\xfcgen",type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"e1fec5d5-ad04-4552-a4bc-476aa1d2147d",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Datenbank\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("i",{parentName:"dd",className:"mdi-alert mdi orange"})," mit der eigenen Datenbank verbinden!"),(0,r.kt)("dd",{parentName:"dl"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"dd",href:"https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5"},"https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5"))),(0,r.kt)(o,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie eine Personen-Tabelle mit einigen selbst gew\xe4hlten Attributen und f\xfcgen Sie einige Datens\xe4tze ein. Halten Sie das Query unten fest."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)(c,{type:"text",webKey:"79edb637-4944-469f-b2b7-b35e2dba8ff6",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was passiert, wenn Sie nun nochmals die gleichen Datens\xe4tze einf\xfcgen?"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)(c,{type:"text",webKey:"86f5d5b3-3266-4f3f-a1b5-60bbe11239bf",mdxType:"Answer"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"tabellen-l\xf6schen"},"Tabellen l\xf6schen"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,r.kt)("admonition",{type:"def"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"drop-table"},(0,r.kt)("inlineCode",{parentName:"h3"},"DROP TABLE")),(0,r.kt)(o,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Um eine Tabelle zu l\xf6schen, wird der Befehl ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," verwendet."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE persons;\n"))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"constraints"},"Constraints"),(0,r.kt)(o,{parentName:"div",type:"heading",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Constraints sind Regeln, die auf die Daten angewendet werden. Sie k\xf6nnen auf die Spalten oder auf die ganze Tabelle angewendet werden. So wird sichergestellt, dass die Daten in der Tabelle immer korrekt sind."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit kann bspw. auch verhindert werden, dass wie oben geschehen, die gleichen Datens\xe4tze mehrmals eingef\xfcgt werden."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dt"},"PRIMARY KEY")),(0,r.kt)("dd",{parentName:"dl"},"Prim\xe4rschl\xfcssel - Die Datenbank stellt sicher, dass der verwendete Schl\xfcssel eindeutig ist und nicht ",(0,r.kt)("inlineCode",{parentName:"dd"},"NULL")," ist."),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dt"},"NOT NULL")),(0,r.kt)("dd",{parentName:"dl"},"Die Spalte darf nicht ",(0,r.kt)("inlineCode",{parentName:"dd"},"NULL")," sein."),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dt"},"UNIQUE")),(0,r.kt)("dd",{parentName:"dl"},"Der Wert in der Spalte muss eindeutig sein."),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dt"},"DEFAULT")),(0,r.kt)("dd",{parentName:"dl"},"Der Standardwert, der verwendet wird, wenn kein Wert angegeben wird."),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dt"},"SERIAL")),(0,r.kt)("dd",{parentName:"dl"},"Automatisch generierter Wert, der bei jedem neuen Datensatz um 1 erh\xf6ht wird. Beim Prim\xe4rschl\xfcssel muss dadurch beim Erstellen eines Datensatzes kein Wert angegeben werden."),(0,r.kt)("dt",{parentName:"dl"},(0,r.kt)("inlineCode",{parentName:"dt"},"DEFAULT CURRENT_TIMESTAMP")),(0,r.kt)("dd",{parentName:"dl"},"Der aktuelle Zeitstempel wird als Standardwert verwendet.")),(0,r.kt)(o,{parentName:"div",type:"deflist",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Obige Tabelle k\xf6nnte also auch wie folgt definiert werden:"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE persons (\n    id SERIAL PRIMARY KEY,\n    name TEXT NOT NULL,\n    alter INT,\n    beschreibung TEXT DEFAULT 'Keine Beschreibung vorhanden',\n    erstellt_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n)\n")),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Eingabe wird wegen der automatischen ID's etwas einfacher. Bemerken Sie zudem, dass automatisch von der Datenbank ein Zeitstempel gesetzt wird."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO persons \n    (name, alter, beschreibung)\nVALUES \n    ('Maria Muster', 42, 'Ein ganz normaler Mensch'),\n    ('Hans Monster', 55, 'Ein ganz monstr\xf6ser Mensch');\n")),(0,r.kt)("admonition",{title:"3. Tabelle mit Constraints",type:"aufgabe"},(0,r.kt)(c,{type:"state",webKey:"805b507b-93bc-40bd-a78d-9ce3fc531cad",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Datenbank\n"),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("i",{parentName:"dd",className:"mdi-alert mdi orange"})," mit der eigenen Datenbank verbinden!"),(0,r.kt)("dd",{parentName:"dl"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"dd",href:"https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5"},"https://db-sql.ch/connections/d68ea3c2-eb9f-4454-aa19-9c00764757b5"))),(0,r.kt)(o,{parentName:"div",type:"deflist",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie Ihre Personen-Tabelle erneut (zuerst L\xf6schen...) "),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"verwenden Sie einen seriellen Prim\xe4rschl\xfcssel"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"stellen Sie sicher, dass ben\xf6tigte Felder gesetzt werden m\xfcssen"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcgen Sie f\xfcr mindestens ein Attribut einen Standardwert"),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcgen Sie ein ",(0,r.kt)("inlineCode",{parentName:"p"},"erstellt_am")," (oder ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at"),") Feld hinzu, welches automatisch mit dem aktuellen Zeitstempel gef\xfcllt wird."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"F\xfcgen Sie einige Datens\xe4tze ein - passen Sie am besten das Query von oben an."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})))),(0,r.kt)(c,{type:"text",webKey:"8c0bda3b-ba1a-45b2-8fa4-24fab7b5c8b5",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Was passiert nun, wenn Sie die Restriktionen verletzen? Probieren Sie es aus und halten Sie einige Fehlermeldungen fest."),(0,r.kt)(o,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,r.kt)(c,{type:"text",webKey:"7bf34055-06f2-4bf0-8b2d-54e6e1795539",mdxType:"Answer"})))}b.isMDXComponent=!0}}]);