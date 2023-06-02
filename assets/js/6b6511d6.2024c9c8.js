"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[16872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},o=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,k=p["".concat(m,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(k,d(d({ref:t},o),{},{components:n})):a.createElement(k,d({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:r,d[1]=s;for(var l=2;l<i;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_custom_props:{id:"4ddf5e10-b449-4918-9880-8303f2be10fe"}},d="11. NAT",s={unversionedId:"Netzwerke-ef/NAT/README",id:"Netzwerke-ef/NAT/README",title:"11. NAT",description:"Network Address Translation",source:"@site/docs/Netzwerke-ef/11-NAT/README.md",sourceDirName:"Netzwerke-ef/11-NAT",slug:"/Netzwerke-ef/NAT/",permalink:"/Netzwerke-ef/NAT/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke-ef/11-NAT/README.md",tags:[],version:"current",lastUpdatedAt:1685707745,formattedLastUpdatedAt:"2. Juni 2023",frontMatter:{sidebar_custom_props:{id:"4ddf5e10-b449-4918-9880-8303f2be10fe"}},sidebar:"sidebar",previous:{title:"10. TCP/UDP Protokoll",permalink:"/Netzwerke-ef/TCP/"},next:{title:"12. DNS",permalink:"/Netzwerke-ef/DNS/"}},m={},l=[{value:"Network Address Translation",id:"network-address-translation",level:2},{value:"Warum NAT?",id:"warum-nat",level:2},{value:"Funktionsweise NAT",id:"funktionsweise-nat",level:2},{value:"Ablauf",id:"ablauf",level:3},{value:"Probleme durch NAT",id:"probleme-durch-nat",level:3},{value:"Beispiel VoIP",id:"beispiel-voip",level:4},{value:"NAT als Sicherheitsfeature?",id:"nat-als-sicherheitsfeature",level:3}],o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=o("Comment"),c=o("Figure"),u=o("Answer"),k=o("Solution"),h={toc:l},N="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(N,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h1",{parentName:"div",id:"11-nat"},"11. NAT"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("div",{parentName:"div"},(0,r.kt)("details",{parentName:"div"},(0,r.kt)("summary",{parentName:"details"},"Pr\xe4sentation"),(0,r.kt)("iframe",{src:"/slides/tcp-nat-ef.html",style:{border:"0px",width:"100%",height:"500px"},allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"}))),(0,r.kt)(p,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"network-address-translation"},"Network Address Translation"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NAT (Network Address Translation) ist ein Verfahren, dass in IP-Routern eingesetzt wird, die lokale Netzwerke mit dem Internet verbinden. Weil Internet-Zug\xe4nge in der Regel nur \xfcber eine einzige \xf6ffentliche und damit routbare IPv4-Adresse verf\xfcgen, m\xfcssen sich alle anderen Hosts im lokalen Netzwerk mit privaten IPv4-Adressen begn\xfcgen. Private IP-Adressen d\xfcrfen zwar mehrfach verwendet werden, aber besitzen in \xf6ffentlichen Netzen keine G\xfcltigkeit. Hosts mit einer privaten IPv4-Adresse k\xf6nnen somit nicht mit Hosts ausserhalb des lokalen Netzwerks kommunizieren."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit trotzdem alle Computer mit privater IPv4-Adresse Zugang zum Internet bekommen k\xf6nnen, muss der Internet-Zugangs-Router in allen ausgehenden Datenpaketen die private IPv4-Adresse der lokalen Hosts durch seine eigene, \xf6ffentliche IPv4-Adresse ersetzen. Damit die eingehenden Datenpakete dem lokalen Host zugeordnet werden k\xf6nnen, speichert der Router zus\xe4tzliche die Port-Nummern der TCP-Verbindungen in einer sogenannten NAT-Tabelle."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In Verbindung mit den privaten IPv4-Adressen wird NAT eingesetzt, damit \xfcber die Netzgrenzen hinweg Daten ausgetauscht, E-Mails verschickt und empfangen, sowie auf das World Wide Web (WWW) zugegriffen werden k\xf6nnen.\nNAT ist allerdings nur eine Notl\xf6sung, um die Adressknappheit von IPv4 zu umgehen. Um die damit einhergehenden Probleme zu l\xf6sen muss langfristig auf ein Internet-Protokoll mit einem gr\xf6sseren Adressraum umgestellt werden. IPv6 ist ein solches Protokoll."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"warum-nat"},"Warum NAT?"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die ersten IPv4-Netze waren anfangs eigenst\xe4ndige Netz ohne Verbindung nach aussen. Hier begn\xfcgte man sich mit IPv4-Adressen aus den privaten Adressbereichen. Parallel dazu kam es bereits Ende der 1990er Jahre zu Engp\xe4ssen bei \xf6ffentlichen IPv4-Adressen. Die steigende Anzahl der Einwahlzug\xe4nge \xfcber das Telefonnetz mussten mit IPv4-Adressen versorgt werden.\nBis heute bekommt ein Internet-Anschluss nur eine IPv4-Adresse f\xfcr ein Ger\xe4t. Damals war es undenkbar, dass an einem Internet-Anschluss ein ganzes Heimnetzwerk betrieben wird. Wenn ein Haushalt einen PC per Modem an das Telefonnetz angeschlossen und sich ins Internet eingew\xe4hlt hat, dann war das schon etwas besonderes."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Heute betreibt jeder Haushalt mit Internet-Zugang sein eigenes lokales Netzwerk, in dem jedes Endger\xe4t eine IPv4-Adresse braucht. In solchen F\xe4llen bekommen die Ger\xe4te IPv4-Adressen aus den privaten Adressr\xe4umen 10.0.0.0/8, 192.168.0.0/16 oder 172.16.0.0/12 zugeteilt, um die wenigen \xf6ffentlichen IPv4-Adressen einzusparen."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Allerdings sind private IPv4-Adressen nicht routbar. Das heisst, sie sind aus dem Internet nicht erreichbar und es kann keine direkte Verbindung zu Ger\xe4ten hinter einem NAT aufgebaut werden. Die Andere Richtung, aus dem privaten Netzwerk ins \xf6ffentliche Netzwerk, ist jedoch dank einem Austausch der privaten IP-Adresse mit der \xf6ffentlichen IP-Adresse des NAT's m\xf6glich. Diese Zuordnung wird in der ",(0,r.kt)("strong",{parentName:"p"},"NAT-Tabelle")," gespeichert, so dass beim Erhalt der Antwort die \xd6ffentliche Adresse wieder durch die Private ausgetauscht werden kann."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h2",{parentName:"div",id:"funktionsweise-nat"},"Funktionsweise NAT"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Innerhalb des lokalen Netzwerks hat der Router die IP-Adresse ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.1"),", die f\xfcr den LAN-Port gilt und \xfcber die der Router im LAN direkt erreichbar und konfiguriert ist. Gleichzeitig handelt es sich dabei um die Adresse des Standard-Gateways und zum Beispiel des lokalen DNS-Servers. Der Router ist also das Standard-Gateway \xfcber das alle Verbindung laufen. Mit seiner \xf6ffentlichen IP-Adresse tritt der Router als Stellvertreter f\xfcr alle Stationen seines lokalen Netzwerks (LAN) auf."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wenn ein Datenpaket mit einer Ziel-Adresse ausserhalb des lokalen Netzwerks adressiert ist, dann ersetzt der Router die Quell-Adresse durch seine \xf6ffentliche IP-Adresse. Die Port-Nummer (TCP oder UDP) wird durch eine andere Port-Nummer ersetzt. Um sp\xe4ter die Antwortpakete der richtigen Station zuordnen zu k\xf6nnen f\xfchrt der Router eine Tabelle mit den ge\xe4nderten Quell-Adressen und den dazugeh\xf6rigen Port-Nummern. Wenn also Pakete mit einer bestimmten Port-Nummer zur\xfcckkommen, dann ersetzt NAT die Ziel-Adresse durch die richtige Adresse und Port-Nummer."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"In der NAT-Tabelle hat jeder Eintrag auch eine Zeitmarkierung. Nach einer bestimmten Zeit der Inaktivit\xe4t wird der betreffende Eintrag gel\xf6scht. Auf diese Weise wird sichergestellt, dass keine Ports offen bleiben.\nWeil dieses Verfahren die Absender-Adresse (Source) jedes ausgehenden Datenpakets \xe4ndert, nennt man dieses Verfahren Source NAT (SNAT). SNAT bezeichnet man in der Regel einfach als NAT."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"ablauf"},"Ablauf"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:4,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"WAN\n"),(0,r.kt)("dd",{parentName:"dl"},"Wide Area Network"),(0,r.kt)("dt",{parentName:"dl"},"LAN\n"),(0,r.kt)("dd",{parentName:"dl"},"Local Area Network")),(0,r.kt)(p,{parentName:"div",type:"deflist",nr:0,mdxType:"Comment"})),(0,r.kt)("div",{style:{alignItems:"center"},className:"flex flex-flex"},(0,r.kt)("div",{parentName:"div",style:{},className:"item"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der Client schickt seine Datenpakete mit der IP-Adresse ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"192.168.0.2")," und dem TCP-Port ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"10101")," an sein Standard-Gateway, bei dem es sich um einen NAT-Router handelt."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der NAT-Router tauscht IP-Adresse (LAN-Adresse) und TCP-Port (LAN-Port) aus und speichert beides mit der getauschten Port-Nummer (WAN-Port) in der NAT-Tabelle."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der Router leitet das Datenpaket mit der WAN-Adresse ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"220.0.0.1")," und der neuen TCP-Port ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"20202")," ins Internet weiter."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der Empf\xe4nger (Server) verarbeitet das Datenpaket und schickt seine Antwort zur\xfcck."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Der NAT-Router stellt nun anhand der Port-Nummer ",(0,r.kt)("strong",{parentName:"p",className:"underline"},"20202")," (WAN-Port) fest, f\xfcr welche IP-Adresse (LAN-Adresse) das Paket im lokalen Netz gedacht ist."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("div",{parentName:"li",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Er tauscht die IP-Adresse und die Port-Nummer wieder aus und leitet das Datenpaket ins lokale Netz weiter, wo es der Client entgegennimmt."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"}))))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"250px"},className:"item"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(25022).Z,width:"1572",height:"666"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:0,mdxType:"Comment"})))),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("div",{parentName:"div"},(0,r.kt)("details",{parentName:"div"},(0,r.kt)("summary",{parentName:"details"},"\u2b50 D-NAT & Port-Forwarding"),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"dnat---destination-network-address-translation-port-forwarding"},"DNAT - Destination Network Address Translation (Port-Forwarding)"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:5,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(66074).Z,width:"1270",height:"306"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"details",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NAT setzt dynamisch eine \xf6ffentliche IP-Adresse auf mehrere private IP-Adressen um. Jede ausgehende Verbindung wird mit IP-Adresse und Portnummer festgehalten. Anhand der Portnummer kann NAT eingehende Datenpakete einer lokalen Station zuordnen. Diese Zuordnung ist allerdings nur f\xfcr kurze Zeit g\xfcltig. Das bedeutet, dass Verbindungen nur aus dem lokalen Netzwerk ins \xf6ffentliche Netz aufgebaut werden k\xf6nnen, nicht umgekehrt.\nWenn man doch einen Host innerhalb des lokalen Netzwerks dauerhaft aus dem \xf6ffentlichen Netz erreichbar machen will, dann ist das nur \xfcber einen Umweg m\xf6glich. Das Verfahren nennt sich Destination NAT (DNAT), allgemein als Port-Forwarding oder auch Port-Weiterleitung bekannt. Dabei wird in der Router-Konfiguration ein TCP-Port fest einer IP-Adresse zugeordnet. Daraufhin leitet der Router alle auf diesem Port eingehenden Datenpakete an diesen Host weiter.\nVorsicht ist beim Freischalten von TCP-Ports (Port-Forwarding) geboten. Wer keine Server-Dienste im Internet zur Verf\xfcgung stellt, sollte alle TCP-Ports des Routers (von 0 bis 1.023) sperren. Gut vorkonfigurierte Router haben das schon automatisch eingestellt.\nWer auf Port-Forwarding nicht verzichten kann, sollte aus Sicherheitsgr\xfcnden eine demilitarisierte Zone (DMZ) einrichten und so den Datenverkehr aus dem Internet aus dem lokalen Netzwerk heraus halten."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})))),(0,r.kt)(p,{parentName:"div",type:"detailsWrapper",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"probleme-durch-nat"},"Probleme durch NAT"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:6,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ein Problem ist, dass die Anwendungen und Anwendungsprotokolle nichts davon wissen, wenn sie auf einem Host laufen, der nur eine private IPv4-Adresse hat. Solange Protokolle und Anwendungen nach dem Client-Server-Prinzip arbeiten stellt das noch kein Problem dar. Wenn jedoch eine Anwendung dem Ende-zu-Ende-Prinzip folgt, dann bedarf es Hilfskonstruktionen, damit Hosts mit privater IPv4-Adresse erreichbar sind.\nF\xfcr viele Protokolle existieren Umgehungsmechanismen f\xfcr NAT, die jedoch die Komplexit\xe4t und Fehleranf\xe4lligkeit steigern und viele Systeme und Anwendungen von deren Verf\xfcgbarkeit abh\xe4ngig machen. Dadurch werden viele Internet-Anwendungen und -Dienste komplizierter, was insgesamt auch zu mehr Sicherheitsl\xfccken f\xfchrt."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h4",{parentName:"div",id:"beispiel-voip"},"Beispiel VoIP"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:7,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Bei der Internet-Telefonie (VoIP) st keine direkte Verbindung zu einem VoIP-Telefon m\xf6glich, wenn dieses in einem privaten LAN ist. Hierbei bedarf es zentraler Gateways, an denen sich die VoIP-Telefone anmelden und regelm\xe4ssig Kontakt herstellen m\xfcssen, damit das Telefon durch NAT-Router erreichbar bleibt."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Probleme gibt es auch bei FTP, Messaging und Push Notifications. Auch hier wird vorausgesetzt, dass der Client direkt erreichbar ist, was er wegen der privaten IPv4-Adresse nicht ist."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Die Eintr\xe4ge in der NAT-Tabelle des Routers sind nur f\xfcr eine kurze Zeit g\xfcltig. F\xfcr eine Anwendung, die nur sehr unregelm\xe4ssig Daten austauscht, bedeutet das, dass st\xe4ndig die Verbindung abgebrochen wird und dadurch die Erreichbarkeit eingeschr\xe4nkt ist. Das hat zur Folge, dass diese Anwendung unter Umst\xe4nden in einer NAT-Umgebung nicht funktioniert. Und somit kann sich diese Anwendung im Internet nicht durchsetzen. Den die meisten Clients befinden sich typischerweise in einer NAT-Umgebung.\nUm dauerhaft ein Loch in den NAT-Router zu bekommen, wird mit Port-Forwarding (DNAT) gearbeitet. Das bedeutet, dass ein eingehendes Datenpaket mit einem bestimmten TCP-/UDP-Port an eine bestimmte IP-Adresse im lokalen Netzwerk geschickt wird."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Probleme mit NAT gibt es auch da, wo innerhalb des Protokolls die IPv4-Adresse des Hosts mitgeteilt wird. Wenn zum Beispiel bei verschl\xfcsselten IPv4-Paketen eine Checksumme \xfcber die IPv4-Adresse zur Integrit\xe4tskontrolle gebildet wird. Aber durch den Einsatz von NAT werden die Adressen im IPv4-Header ge\xe4ndert. Dadurch scheitern Protokoll, die darauf angewiesen sind, dass die Integrit\xe4t des IPv4-Headers erhalten bleibt. Zum Beispiel IPsec f\xfcr VPN."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Wegen den Auswirkungen durch NAT haben sich zentralistische Dienste wie Skype, YouTube und TikTok entwickelt, die die Inhalte aller Internet-Teilnehmer stellvertretend bereitstellen. Diese Dienste haben dadurch die Kontrolle \xfcber pers\xf6nliche Daten gewonnen und k\xf6nnen auf dieser Basis ihre \xe4usserst lukrativen Gesch\xe4ftsmodelle betreiben."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"nat-als-sicherheitsfeature"},"NAT als Sicherheitsfeature?"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:8,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NAT wird oft in Beschreibungen von Ger\xe4ten als Sicherheitsmerkmal bezeichnet. Damit ist der Mechanismus gemeint, der als Nebenprodukt verhindert, dass ein Host hinter einem NAT-Router von ausserhalb direkt ansprechbar ist. Die Systeme im NAT-Netzwerk sind von aussen nicht mehr anhand ihrer IPv4-Adresse voneinander zu unterscheiden. Weil alle dieselbe \xf6ffentliche IPv4-Adresse f\xfcr ihre externen Verbindungen vom NAT-Router bekommen. Das verschafft den Nutzern einen gewissen Grad an Privatsph\xe4re und Sicherheit."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},'Private IPv4-Adressen in Kombination mit NAT wirken in gewisser Weise wie eine eingebaute "Firewall". Denn von aussen initiierte Verbindungsversuche werden verworfen, wenn vorher keine ausgehende Verbindung bestanden hat. NAT wirkt wie eine rudiment\xe4re Firewall, die alle unberechtigten Zugriffe von aussen blockiert. Es handelt sich dabei um eine gewollte Schutzfunktion f\xfcr unberechtigten und unsicheren Datenverkehr.'),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,r.kt)("div",{className:"commentable"},(0,r.kt)("p",{parentName:"div"},"NAT ist deshalb ",(0,r.kt)("strong",{parentName:"p"},"durchaus ein Sicherheitsmerkmal")," f\xfcr lokale Netzwerke. NAT ersetzt aber keinen Paketfilter und schon gar keine vollwertige Firewall. NAT verhindert nur Datenverbindungen, die nicht vom internen Netzwerk (LAN) aus initiiert wurden und somit kein vorhergehender Datenverkehr existiert hat.\nDie gr\xf6ssten Sicherheitsprobleme liegen meist auf der Anwendungsebene bzw. werden durch unsachgem\xe4sse Handhabung der Anwender ausgel\xf6st, was man mit NAT nicht verhindern kann - mit einer \u201eStateful Inspection\u201c Firewall schon."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,r.kt)("admonition",{title:"Aufbohren der NAT-Regeln / Firewall",type:"aufgabe"},(0,r.kt)(u,{type:"state",webKey:"149f79b9-7336-4220-8a10-93c661d98cb9",mdxType:"Answer"}),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Im Unterricht haben wir mit zwei Servern (einer in Deutschland, einer in Finnland) nachgestellt, wie die Sch\xfctzende Wirkung von NAT (oder auch von Firewalls) umgangen werden k\xf6nnen. Beschreiben Sie in eigenen Worten, was gemacht wurde, um eine UDP-Verbindung mit einem Server hinter einem NAT aufzubauen."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Erstellen Sie dabei eine Situations\xfcbersicht (entweder per Hand oder mit ",(0,r.kt)("a",{parentName:"p",href:"https://excalidraw.com/"},"\ud83d\udc49 Excalidraw"),")"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"})),(0,r.kt)(u,{type:"text",webKey:"9eaf1ceb-bb52-4400-8ca7-913dd9c37766",mdxType:"Answer"}),(0,r.kt)(k,{webKey:"cbbea909-5c59-4524-9dd2-ac2f8d385ee8",open:!0,mdxType:"Solution"},(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Ausgangslage: Maria und Reto sind in einem privaten Netzwerk und haben \xfcber eine Firewall (oder eine Firewall) Zugang zu einer \xf6ffentlichen IP-Adresse. Maria m\xf6chte mit Reto kommunizieren."),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{src:n(68971).Z,width:"616",height:"140"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:2,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("p",{parentName:"div"},"Damit Maria einen Facetime-Anruf an Reto starten kann, gibt es zwei M\xf6glichkeiten:"),(0,r.kt)(p,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("dl",{parentName:"div"},(0,r.kt)("dt",{parentName:"dl"},"Relay-Server\n"),(0,r.kt)("dd",{parentName:"dl"},"Maria und Reto sind mit einem ",(0,r.kt)("strong",{parentName:"dd",className:"underline"},"Relay-Server")," verbunden, welcher die Datenpakete jeweils weiterleitet. Wenn Maria nun Reto anrufen m\xf6chte, leitet der ",(0,r.kt)("strong",{parentName:"dd",className:"underline"},"Relay-Server")," die Pakete an Reto weiter - es klingelt. Dies funktioniert, da die Firewall von Reto standardm\xe4ssig Verbindungen von innen nach aussen zul\xe4sst. Die Firewall von Maria ist nicht vorhanden, somit kann sie auch Verbindungen von aussen nach innen aufbauen. Die Voraussetzung hier also, dass Beide mit einem Relay-Server verbunden sind. "),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("strong",{parentName:"dd"},"Nachteil"),": Die Verbindung ist langsam, da die Datenpakete \xfcber den Relay-Server laufen m\xfcssen."),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("div",{parentName:"dd",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{width:"90%",margin:"0"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--width=90% --margin=0",src:n(56439).Z,width:"616",height:"343"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:3,mdxType:"Comment"}))),(0,r.kt)("dt",{parentName:"dl"},"Hole-Punching\n"),(0,r.kt)("dd",{parentName:"dl"},"Der Verbindungsaufbau l\xe4uft wie oben, doch das eigentliche Telefonat soll nicht \xfcber den Relay-Server laufen; Die Datenpakete sollen den ",(0,r.kt)("strong",{parentName:"dd"},"direkten")," Weg zwischen Maria und Reto nehmen. Wegen der Firewall kann aber keine direkte Verbindung von Maria zu Reto (oder umgekehrt) aufgebaut werden, da eingehende Verbindungen abgelehnt werden."),(0,r.kt)("dd",{parentName:"dl"},(0,r.kt)("div",{parentName:"dd",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{width:"90%",margin:"0"},mdxType:"Figure"},(0,r.kt)("img",{alt:"--width=90% --margin=0",src:n(49638).Z,width:"616",height:"343"})),(0,r.kt)(p,{parentName:"div",type:"figure",nr:4,mdxType:"Comment"})))),(0,r.kt)(p,{parentName:"div",type:"deflist",nr:1,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",className:"commentable"},(0,r.kt)("h3",{parentName:"div",id:"hole-punching"},"Hole-Punching"),(0,r.kt)(p,{parentName:"div",type:"heading",nr:9,mdxType:"Comment"})),(0,r.kt)("div",{parentName:"admonition",style:{},className:"flex flex-cards"},(0,r.kt)("div",{parentName:"div",style:{flexBasis:"450px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Maria erh\xe4lt vom Relay-Server die IP von Retos NAT/Firewall",src:n(52307).Z,width:"2302",height:"894"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Maria erh\xe4lt vom Relay-Server die IP von Retos NAT/Firewall",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(p,{parentName:"div",type:"figure",nr:5,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"450px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Maria \xf6ffnet ihre Firewall mit einem `ping` - es kommt keine Antwort zur\xfcck, da bei Reto kein UDP Dienst auf dem Port `53` verf\xfcgbar ist (dies ist immer so - Port 53 ist f\xfcr DNS reserviert!).",src:n(4286).Z,width:"2297",height:"814"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Maria \xf6ffnet ihre Firewall mit einem ",(0,r.kt)("inlineCode",{parentName:"figcaption"},"ping")," - es kommt keine Antwort zur\xfcck, da bei Reto kein UDP Dienst auf dem Port ",(0,r.kt)("inlineCode",{parentName:"figcaption"},"53")," verf\xfcgbar ist (dies ist immer so - Port 53 ist f\xfcr DNS reserviert!).",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(p,{parentName:"div",type:"figure",nr:6,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"450px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Maria Teilt Reto \xfcber den Relay Server mit, welche IP sie hat, und welcher Port offen ist",src:n(99653).Z,width:"2297",height:"900"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Maria Teilt Reto \xfcber den Relay Server mit, welche IP sie hat, und welcher Port offen ist",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(p,{parentName:"div",type:"figure",nr:7,mdxType:"Comment"})))),(0,r.kt)("div",{parentName:"div",style:{flexBasis:"450px"},className:"item card"},(0,r.kt)("div",{parentName:"div",style:{},className:"card__image"},(0,r.kt)("div",{parentName:"div",className:"commentable"},(0,r.kt)(c,{parentName:"div",options:{},mdxType:"Figure"},(0,r.kt)("img",{alt:"Reto stellt eine Verbindung zu Maria her",src:n(77507).Z,width:"2297",height:"816"}),(0,r.kt)("figcaption",{parentName:"Figure"},(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Reto stellt eine Verbindung zu Maria her",(0,r.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,r.kt)(p,{parentName:"div",type:"figure",nr:8,mdxType:"Comment"}))))))))}g.isMDXComponent=!0},66074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dnat-bae40ccd48c7c8d7aeb981f4b369042a.png"},52307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/facetime-direct-lsg-00-a686636d13ebc21ca8d3dd35a705932b.png"},4286:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/facetime-direct-lsg-01-e3dbdaa2c9d1baa861ccbbee7f065cde.png"},99653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/facetime-direct-lsg-02-9ff960ee39d198eb4dc8423dd649cdf2.png"},77507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/facetime-direct-lsg-03-082690a3e77f9acc89131957e1f410e3.png"},49638:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/facetime-direct-f1e596d1bce9585616ddab6204ca52ce.svg"},56439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/facetime-relay-server-35e16cea86ed2b8c95a5c15d05bba0b1.svg"},68971:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/network-situation-876be8be4471f0ebe28c0428dad9807c.svg"},25022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snat-ablauf-e25bdedc335913dbc1dbcdd4507ca510.png"}}]);