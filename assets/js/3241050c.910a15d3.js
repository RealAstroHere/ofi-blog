"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[93642],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72360:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(667294),r=t(386010),i="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,l),hidden:t},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(583117),r=t(667294),i=t(972389),l=t(867392),o=t(707094),u=t(212466),s=t(386010),p="tabList_uSqn",c="tabItem_LplD";function m(e){var n,t,i,m=e.lazy,d=e.block,g=e.defaultValue,h=e.values,f=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,l.l)(v,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(n=null!=g?g:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=k[0])?void 0:i.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),T=w.tabGroupChoices,S=w.setTabGroupChoices,_=(0,r.useState)(y),j=_[0],x=_[1],O=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=T[f];null!=E&&E!==j&&v.some((function(e){return e.value===E}))&&x(E)}var z=function(e){var n=e.currentTarget,t=O.indexOf(n),a=v[t].value;a!==j&&(D(n),x(a),null!=f&&S(f,a))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.default)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":d},b)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:z,onClick:z},i,{className:(0,s.default)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),m?(0,r.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function d(e){var n=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},171e3:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return g}});var a,r=t(583117),i=t(480102),l=(t(667294),t(603905)),o=t(409877),u=t(72360),s=["components"],p={},c="Modulo",m={unversionedId:"Programmieren-1/Aufgaben/modulo",id:"version-24o/Programmieren-1/Aufgaben/modulo",title:"Modulo",description:"11modulo.zip",source:"@site/versioned_docs/version-24o/04-Programmieren-1/Aufgaben/11_modulo.mdx",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/modulo",permalink:"/24o/Programmieren-1/Aufgaben/modulo",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/04-Programmieren-1/Aufgaben/11_modulo.mdx",tags:[],version:"24o",sidebarPosition:11,frontMatter:{},sidebar:"version-24o/sidebar",previous:{title:"Name",permalink:"/24o/Programmieren-1/Aufgaben/name"},next:{title:"Uhren",permalink:"/24o/Programmieren-1/Aufgaben/uhren"}},d={},g=[{value:"1. Kalender",id:"1-kalender",level:2},{value:"2. Schachbrett",id:"2-schachbrett",level:2},{value:"Zusatz",id:"zusatz",level:3}],h=(a="Figure",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:g};function b(e){var n=e.components,a=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modulo"},"Modulo"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:t(562643).Z},"11_modulo.zip")),(0,l.kt)("h2",{id:"1-kalender"},"1. Kalender"),(0,l.kt)("p",null,"Schreiben Sie ein Programm, das von einem gegebenen Datum im 21. Jahrhundert (vom 1. 1. 2001 bis 31.12.2100) den Wochentag bestimmt."),(0,l.kt)("p",null,"Dabei muss Folgendes beachtet werden:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Der 1.1.2001 war ein Montag."),(0,l.kt)("li",{parentName:"ul"},"Schaltjahre haben ",(0,l.kt)("inlineCode",{parentName:"li"},"366")," statt ",(0,l.kt)("inlineCode",{parentName:"li"},"365")," Tage. Ein Schaltjahr ist...",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"durch ",(0,l.kt)("inlineCode",{parentName:"li"},"4")," teilbar, aber nicht durch ",(0,l.kt)("inlineCode",{parentName:"li"},"100")," teilbar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ausnahme"),": Ist die Jahreszahl durch ",(0,l.kt)("inlineCode",{parentName:"li"},"400")," teilbar, dann ist es ein Schaltjahr")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Zusatzaufgabe"),": Erweitern Sie das Programm so, dass es f\xfcr alle Daten im Gregorianischen Kalender (ab Freitag 15.10.1582) funktioniert."),(0,l.kt)(o.Z,{defaultValue:"step-1",values:[{label:"Schritt 1",value:"step-1"},{label:"Schritt 2",value:"step-2"},{label:"Schritt 3",value:"step-3"},{label:"Schritt 4",value:"step-4"},{label:"Schritt 5",value:"step-5"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"step-1",mdxType:"TabItem"},(0,l.kt)("p",null,"Zuerst \xfcber eine Eingabe Tag, Monat und Jahr abfragen (achtung Datentyp...)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"tag = input('Tag')\nmonat = input('Monat')\njahr = input('Jahr')\n"))),(0,l.kt)(u.Z,{value:"step-2",mdxType:"TabItem"},(0,l.kt)("p",null,"Erster Schritt: Wie bestimmt man den Wochentag?"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr den Januar 2001 funktionieren."),(0,l.kt)("p",null,"--\x3e Wir brauchen eine Liste, welche der Reihe nach die Wochentage enth\xe4lt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aufgabe"),": Der 1.1.2001 sollte ein Montag sein. Das stimmt aktuell noch nicht. Wie muss das Programm angepasst werden, damits stimmt? Wieso?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"TAGE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']\n\nwochentag = TAGE[tag % 7]\nprint(wochentag)\n"))),(0,l.kt)(u.Z,{value:"step-3",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr das Jahr 2001 funktionieren."),(0,l.kt)("p",null,"Es m\xfcsssen die Anzahl Tage jedes ",(0,l.kt)("strong",{parentName:"p"},"verstrichenen")," Monats umgewandelt werden. Dazu erstellen wir eine Liste, welche die Anzahl Tage jedes Jahres enth\xe4lt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aufgabe"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Der Tag kann nun berechnet werden durch den entstehenden Rest von ",(0,l.kt)("inlineCode",{parentName:"li"},"tag + monats_tage"),"."),(0,l.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfe: Der 1.6.2001 ist war ein Freitag. ",(0,l.kt)("em",{parentName:"li"},"Hinweis"),': Aktuell wird es noch "Sonntag" ausgeben, wieso? \xdcberpr\xfcfe wie viele Monate zu ',(0,l.kt)("inlineCode",{parentName:"li"},"monats_tage")," hinzugef\xfcgt werden")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"MONATE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n\nmonates_tage = 0\nfor m in range(0, monat, 1):\n    monates_tage = monates_tage + MONATE[m]\n"))),(0,l.kt)(u.Z,{value:"step-4",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr bis zum Jahr 2003 funktionieren."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aufgabe"),":"),(0,l.kt)("p",null,"Der Tag kann nun berechnet werden durch den entstehenden Rest von ",(0,l.kt)("inlineCode",{parentName:"p"},"tag + monats_tage + jahres_tage"),". Der 1.6.2003 sollte ein Sonntag sein."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"jahres_tage = 0\nfor year in range(2001, jahr, 1):\n    jahres_tage = jahres_tage + 365\n"))),(0,l.kt)(u.Z,{value:"step-5",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Szenario"),": Schaltjahre, bis 2001"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Beim Berechnen von ",(0,l.kt)("inlineCode",{parentName:"li"},"jahres_tage")," \xfcberpr\xfcfen, ob ein Jahr ein Schaltjahr ist. Falls ja: ",(0,l.kt)("inlineCode",{parentName:"li"},"366")," Tage hinzuf\xfcgen, sonst ",(0,l.kt)("inlineCode",{parentName:"li"},"365")),(0,l.kt)("li",{parentName:"ul"},"Beim Berechnen von ",(0,l.kt)("inlineCode",{parentName:"li"},"monats_tage")," \xfcberpr\xfcfen, ob das gew\xe4hlte Jahr ein Schaltjahr ist ",(0,l.kt)("strong",{parentName:"li"},"und")," ob der Monat nach dem Februar gew\xe4hlt ist. Dann muss noch ein Tag zus\xe4tzlich hinzugef\xfcgt werden.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\xdcberpr\xfcfen")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"28.6.2020 war ein Sonntag"),(0,l.kt)("li",{parentName:"ul"},"28.6.2100 wird ein Montag sein")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=kalender.py id=13c15f99-7389-4d8e-a884-1ca388c0cbb0",live_py:!0,title:"kalender.py",id:"13c15f99-7389-4d8e-a884-1ca388c0cbb0"},"# kalender\n\n")),(0,l.kt)("h2",{id:"2-schachbrett"},"2. Schachbrett"),(0,l.kt)("p",null,"Erzeugen Sie auf ",(0,l.kt)("a",{parentName:"p",href:"https://io.gbsl.website/playground"},"https://io.gbsl.website")," ein ",(0,l.kt)("inlineCode",{parentName:"p"},"8x8")," Schachbrett."),(0,l.kt)(h,{options:{},mdxType:"Figure"},(0,l.kt)("img",{alt:"Schachbrett",src:t(613677).Z,width:"1536",height:"1538"}),(0,l.kt)("figcaption",{parentName:"Figure"},(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Schachbrett",(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tipps"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Zeichnen Sie ein Feld ",(0,l.kt)("inlineCode",{parentName:"li"},"20x20")," einheiten gross"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(h,{parentName:"li",options:{},mdxType:"Figure"},(0,l.kt)("img",{alt:"checker-anim",src:t(184175).Z,width:"600",height:"601"}),(0,l.kt)("figcaption",{parentName:"Figure"},(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"checker-anim",(0,l.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}))))),(0,l.kt)("h3",{id:"zusatz"},"Zusatz"),(0,l.kt)("p",null,"Stellen Sie die Schach-Figuren auf:"),(0,l.kt)(h,{options:{},mdxType:"Figure"},(0,l.kt)("img",{src:t(444762).Z,width:"1536",height:"1538"})),(0,l.kt)("p",null,"Die Bilder f\xfcr die Figuren finden Sie im Ordner ",(0,l.kt)("inlineCode",{parentName:"p"},"chess")," - dieser Ordner muss beim Konfigurieren des Playgrounds angegeben werden:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"device.configure_playground(\n  width=180,\n  height=180,\n  origin_x=10,\n  origin_y=10,\n  color='bisque',\n  images='chess'\n)\n")),(0,l.kt)("p",null,"Anschliessend kann einem Objekt ein Hintergrundbild mitgegeben werden (",(0,l.kt)("strong",{parentName:"p"},"Achtung"),": nur der Name des Bildes wird angegeben, keine Dateierweiterung!)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"device.add_square(\n  pos_x=0,\n  pos_y=0,\n  size=15,\n  image='s_dame'\n)\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/07T_Playground.ipynb"},"Theorie: Jupyterhub Kapitel 7.4")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tipp"),": Setzen Sie den Anker der Schach-Figuren auf ",(0,l.kt)("inlineCode",{parentName:"p"},"anchor=[0.5, 0.5]"),"."))}b.isMDXComponent=!0},562643:function(e,n,t){n.Z=t.p+"assets/files/11_modulo-0e910dcaeeae2d5be0eda8905be727c8.zip"},184175:function(e,n,t){n.Z=t.p+"assets/images/animate_draw-cb56433100290e187e835da5ef47d1b5.gif"},613677:function(e,n,t){n.Z=t.p+"assets/images/chess1-76130d67696b99434bc39c71027873b6.png"},444762:function(e,n,t){n.Z=t.p+"assets/images/chess2-efed82b0da53bf68a52ffd15d6de5d3b.png"}}]);