"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5339],{85272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return h},default:function(){return u}});var i=n(87462),r=n(63366),s=(n(67294),n(3905)),a=n(26626),o=["components"],l={sidebar_label:"3. Transportschicht",sidebar_position:3},c="Schicht 3: Transportschicht [^1]",d={unversionedId:"Netzwerke/Schichtenmodell/Transportschicht",id:"version-24f/Netzwerke/Schichtenmodell/Transportschicht",isDocsHomePage:!1,title:"Schicht 3: Transportschicht [^1]",description:"Die Transportschicht stellt sicher, dass der Transport korrekt abl\xe4uft. Die zu transportierenden Dinge oder Daten m\xfcssen zerlegt werden, damit sie in Pakete passen. Die Pakete m\xfcssen nummeriert werden, damit die Dinge/Daten am Zielort wieder richtig zusammengesetzt werden k\xf6nnen.",source:"@site/versioned_docs/version-24f/05-Netzwerke/001-Schichtenmodell/3-Transportschicht.md",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/Transportschicht",permalink:"/24f/Netzwerke/Schichtenmodell/Transportschicht",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/05-Netzwerke/001-Schichtenmodell/3-Transportschicht.md",tags:[],version:"24f",sidebarPosition:3,frontMatter:{sidebar_label:"3. Transportschicht",sidebar_position:3},sidebar:"version-24f/sidebar",previous:{title:"4. Anwendungsschicht",permalink:"/24f/Netzwerke/Schichtenmodell/Anwendungsschicht"},next:{title:"2. Vermittlungsschicht",permalink:"/24f/Netzwerke/Schichtenmodell/Vermittlungsschicht"}},h=[{value:"Beispiel \xabSchule\xbb",id:"beispiel-schule",children:[],level:2},{value:"Internet",id:"internet",children:[{value:"\u2b50 Weitere Informationen",id:"-weitere-informationen",children:[],level:3}],level:2}],m={toc:h};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"schicht-3-transportschicht-"},"Schicht 3: Transportschicht ",(0,s.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("p",null,"Die Transportschicht stellt sicher, dass der Transport korrekt abl\xe4uft. Die zu transportierenden Dinge oder Daten m\xfcssen zerlegt werden, damit sie in Pakete passen. Die Pakete m\xfcssen nummeriert werden, damit die Dinge/Daten am Zielort wieder richtig zusammengesetzt werden k\xf6nnen."),(0,s.kt)("h2",{id:"beispiel-schule"},"Beispiel \xabSchule\xbb"),(0,s.kt)("p",null,"Im Beispiel \xabSchule\xbb zerlegt der Hauswart die einzelnen Pulte. Er muss die Einzelteile der Pulte beschriften, damit sie in der Madretsch-Schule wieder richtig zusammengebaut werden k\xf6nnen. Er verpackt die Einzelteile in Pakete und beschriftet diese mit der Post-Adresse. Schliesslich schickt er dem Hauswart der Madretsch-Schule einen Brief (Lieferschein), in welchem auflistet, wie viele Pakete und Pulte verschickt werden."),(0,s.kt)("p",null,"Der Hauswart der Madretsch-Schule kontrolliert anhand des Lieferscheins, ob alle Pakete angekommen sind. Dann setzt er die Pulte aus den Einzelteilen gem\xe4ss Beschriftung wieder zusammen."),(0,s.kt)("p",null,"M\xf6glicherweise fehlt eine Schraube. In dem Fall schickt er dem GBSL-Hauswart einen Brief und bittet ihn, diese Schraube nachzuschicken."),(0,s.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,s.kt)(a.Z,{bib:{author:"Stefan Rothe",source:"https://rothe.io/network/1-layers/2-transport/layer-3.svg",licence:"Creative Commons 4.0",licence_url:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de",edited:!0},caption:"undefined",options:{},isInline:!1,src:n(39401).Z,mdxType:"Image"})),(0,s.kt)("h2",{id:"internet"},"Internet"),(0,s.kt)("p",null,"Die zwei wichtigsten Protokolle der Transportschicht sind TCP und UDP. Hier werden die Daten der Anwendungsschicht in TCP- oder UDP-Pakete verpackt. Dabei muss nat\xfcrlich notiert werden, worum es sich bei den Daten der Anwendungsschicht handelt (HTTP, SMTP, ...). Das Protokoll der Anwendungsschicht wird in Form einer Nummer, Port genannt, im TCP- oder UDP-Paket gespeichert (siehe Begriff Ports)."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"TCP"),": Das Transmission Control Protocol ist verbindungsorientiert und wird bei unserer t\xe4glichen Arbeit im Internet in den allermeisten F\xe4llen verwendet. Es garantiert, dass keine Pakete verlorengehen oder fehlerhaft ankommen \u2013 resp. falls Pakete nicht ankommen, dass diese nochmals angefordert werden. Dies ist in der Regel (z.B. beim \xdcbertragen von Webseiten oder E-Mails) sinnvoll und erw\xfcnscht \u2013 schliesslich m\xf6chten wir nicht, dass einige Passagen auf Webseiten oder in E-Mails fehlen."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"UDP"),": Das User Datagram Protocol hingegen ist verbindungslos, d.h. es findet keine Kontrolle statt, ob s\xe4mtliche Pakete (fehlerfrei) ankommen. Dies ist insbesondere dann hilfreich, wenn wir Audio- oder Videostreams konsumieren. Wir m\xf6chten nicht lange auf ein verlorenes Paket warten, sondern nehmen eher ein kurzes Stocken in Kauf und sind froh, dass das Abspielen anschliessend direkt weitergeht."),(0,s.kt)("h3",{id:"-weitere-informationen"},"\u2b50 Weitere Informationen"),(0,s.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/AYdF7b3nMto",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,s.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=463589"},"rothe.io"),(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},39401:function(e,t,n){t.Z=n.p+"assets/images/3-school-example-a37f93854ca9799e39d5038a2d4866d3.svg"}}]);