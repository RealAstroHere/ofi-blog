"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6433],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),i=n(72389),l=n(79443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(27525),s=n(86010),c="tabItem_1uMI";function d(e){var t,n,a,i=e.lazy,l=e.block,d=e.defaultValue,m=e.values,p=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),N=b.tabGroupChoices,w=b.setTabGroupChoices,y=(0,r.useState)(k),E=y[0],z=y[1],x=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=N[p];null!=Z&&Z!==E&&h.some((function(e){return e.value===Z}))&&z(Z)}var L=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==E&&(S(t),z(a),null!=p&&w(p,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":l},g)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,s.default)("tabs__item",c,{"tabs__item--active":E===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:L,onClick:L},null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},17405:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r="noLoginAlert_boZc",i=n(73727),l=n(52766),o=n(21314),u=(0,l.Pi)((function(){return(0,o.o)("msalStore").loggedIn?null:a.createElement("div",{className:r},a.createElement("span",{className:"badge badge--danger"},"\u26a0\ufe0f Nicht Eingeloggt")," Speichern nur mit GBSL-Login m\xf6glich. ",a.createElement(i.rU,{to:"/login"},"Login"))}))},70997:function(e,t,n){n.d(t,{Z:function(){return R}});var a=n(67294),r=n(69235),i=n(72389),l=n(52766),o=n(79265),u=n(21314),s=n(78982),c=n(46858),d=a.createContext(void 0),m=function(e){switch(e.type){case"string":case"text":return e.default||"";case"array":return Array(e.size).fill("")}},p=function(e,t){if(!e.isLoggedIn)return e.getOrCreateDummyDoc(t.webKey,t.type,{value:m(t),type:t.type,size:"array"===t.type?t.size:void 0});var n=function(){if(t.id){var e=function(){try{return(0,c.Vx)(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}(),n=(0,s.rV)(t.id,e);if(n&&n.value)return{data:{value:n.value,type:t.type,size:"array"===t.type?t.size:void 0},cleanup:function(){return(0,s.cl)(t.id,e)}}}};return"array"===t.type?e.getOrCreateDocument(t.webKey,"array",{value:m(t),type:t.type,size:t.size},n):e.getOrCreateDocument(t.webKey,t.type,{value:m(t),type:t.type},n)},g=(0,l.Pi)((function(e){var t=(0,u.o)("documentStore"),n=a.useState(p(t,e))[0];return(0,i.Z)()?a.createElement(d.Provider,{value:n},e.children):a.createElement("div",null,"Loading")})),f={answer:"answer_3bKD",blue:"blue_3rc5",red:"red_2DQl",green:"green_1NX4",black:"black_2zEa",checkButton:"checkButton_1Ytx",correct:"correct_2OGH",wrong:"wrong_31r9",unchecked:"unchecked_16MA",edited:"edited_2gYX",quillAnswer:"quillAnswer_3Td6"},h=n(86010),v=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),k=function(e){var t=e.value,n=t,r=void 0;if(v.test(t)){var i=function(e){if(v.test(e))return e.match(v).groups.klass}(t);r=f[i],n=""+t.replace(v,"")}return a.createElement("option",{value:t,className:r},n)},b=n(17625),N=n(51436),w=n(68949),y=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),E=function(e){return f[function(e){if(y.test(e))return e.match(y).groups.klass}(e)]},z=(0,l.Pi)((function(e){var t,n=a.useState("unchecked"),r=n[0],i=n[1],l=a.useContext(d),o=function(e){i("unchecked"),l.setData({value:e,type:"string"})},u=function(t){var n=e.sanitizer?e.sanitizer:function(e){return e};i(n(t)===n(e.solution)?"correct":"wrong")};return a.useEffect((function(){return(0,w.U5)((function(){return l.loaded}),(function(e){e&&u(l.data.value)}))}),[]),a.createElement("div",{className:f.answer},e.label&&a.createElement("label",null,e.label),e.children&&a.createElement("label",null,e.children),e.select?a.createElement("select",{onChange:function(e){return o(e.target.value)},value:l.data.value,className:E(l.data.value),disabled:!l.loaded},e.select.map((function(e,t){return a.createElement(k,{value:e,key:t})}))):a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)},value:l.data.value,disabled:!l.loaded||l.isReadonly}),e.solution&&a.createElement("button",{onClick:function(){return u(l.data.value)},className:(0,h.default)(f[r],f.checkButton)},a.createElement(b.G,{icon:(t=r,"correct"===t?N.f8k:"wrong"===t?N.nYk:N.sph)})))})),x=(0,r.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),S=function(e){return f[function(e){if(x.test(e))return e.match(x).groups.klass}(e)]},Z=(0,l.Pi)((function(e){var t=a.useContext(d),n=function(e,n){void 0===n&&(n=0);var a=[].concat(t.data.value.slice(0,n),[e],t.data.value.slice(n+1));t.setData(Object.assign({},t.data,{value:a}))};return a.createElement("div",{className:f.answer},e.label&&a.createElement("label",null,e.label),t.data.value.map((function(r,i){return e.select?a.createElement("select",{key:i,onChange:function(e){return n(e.target.value,i)},value:r,className:S(r),disabled:!t.loaded},e.select.map((function(e,t){return a.createElement(k,{value:e,key:t})}))):a.createElement("input",{key:i,type:"text",onChange:function(e){return n(e.target.value,i)},value:r,disabled:!t.loaded||t.isReadonly})})))})),L=void 0,C=(0,l.Pi)((function(e){var t=a.useState(!1),r=t[0],i=t[1],l=a.useState(!1),o=l[0],u=l[1],s=a.useRef(null),c=a.useContext(d),m=function(e){e.preventDefault()};a.useEffect((function(){var e=!0;return function(e){if(L)return e();Promise.all([Promise.all([n.e(2930),n.e(6095),n.e(1167)]).then(n.t.bind(n,44290,23)),n.e(6095).then(n.t.bind(n,76095,23)),n.e(7891).then(n.t.bind(n,17891,23)),Promise.all([n.e(3312),n.e(1940)]).then(n.bind(n,11940)),Promise.all([n.e(3312),n.e(7617)]).then(n.bind(n,37617))]).then((function(t){L=t[0].default;var n=t[1].default,a=t[2].default;n.register("modules/imageCompress",a),e()}))}((function(){e&&(u(!0),s&&s.current&&s.current.editor.getModule("toolbar").container.addEventListener("mousedown",m))})),function(){e=!1,s&&s.current&&s.current.editor.getModule("toolbar").container.removeEventListener("mousedown",m)}}),[]);return L&&o?a.createElement("div",{onFocus:function(){return!r&&i(!0)}},e.label&&a.createElement("h6",null,e.label),a.createElement(L,{ref:s,theme:"snow",readOnly:!c.loaded||c.isReadonly,className:(0,h.default)(f.quillAnswer,r?void 0:"disable-toolbar"),value:c.loaded?c.data.value||"":"Laden...",onChange:function(e,t,n,a){var r,i;r=e,void 0===i&&(i=0),o&&c.setData({value:r,type:"text"})},modules:{toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}]],imageCompress:{quality:.5,maxWidth:1024,maxHeight:1024,imageType:"image/jpeg",debug:!1,suppressErrorLogging:!1}},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):a.createElement("div",null,"Loading...")})),B=n(17405),D=(0,l.Pi)((function(){var e=a.useContext(d),t=e.legacyData;return t?a.createElement("div",{className:"alert alert--primary",role:"alert"},"Es wurde eine lokal gespeicherte Datei gefunden. Wollen Sie diese Version verwenden?",a.createElement("br",null),"(\u26a0\ufe0f Die andere Version wird verworfen!)",a.createElement(d.Provider,{value:new o.Z(void 0,e.webKey,e.type,(function(){}),t,!0,!0)},"text"===e.data.type&&a.createElement(C,{type:"text",webKey:e.webKey}),"string"===e.data.type&&a.createElement(z,{type:"string",webKey:e.webKey}),"array"===e.data.type&&a.createElement(Z,{type:"array",webKey:e.webKey,size:e.data.size})),a.createElement("div",null,a.createElement("button",{className:"button button--primary",onClick:function(){return e.resolveLegacyDoc("use_legacy")}},"Ja"),a.createElement("button",{className:"button button--info",onClick:function(){return e.resolveLegacyDoc("use_current")}},"Nein (verwerfen)"))):null})),A=(0,l.Pi)((function(){return a.useContext(d).isOffline?a.createElement("div",null,a.createElement("span",{className:(0,h.default)("badge","badge--danger"),title:"Netzwerkverbindung \xfcberpr\xfcfen!"},"\u26a0\ufe0f Offline")):null})),R=(0,l.Pi)((function(e){var t=(0,u.o)("msalStore");return a.createElement(g,e,a.createElement("div",{"data--web-key":e.webKey},a.createElement(B.Z,null),t.loggedIn&&a.createElement(D,null),t.loggedIn&&a.createElement(A,null),"text"===e.type&&a.createElement(C,e),"string"===e.type&&a.createElement(z,e),"array"===e.type&&a.createElement(Z,e)))}))},72875:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(95429),i="finding_3L26",l=n(86010),o=function(e){return a.createElement(r.Z,{summary:a.createElement("summary",null,e.title||"Gewonnene Erkenntnisse",a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),className:(0,l.default)("alert alert--warning",i)},e.children)}},85107:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(94578),r=n(67294),i=n(55064),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},21314:function(e,t,n){n.d(t,{o:function(){return i}});var a=n(67294),r=n(60926),i=function(e){return a.useContext(r.Nx)[e]}},46858:function(e,t,n){n.d(t,{Vx:function(){return r},Vj:function(){return a},ly:function(){return i}});var a=function(e){if(e)return e.replace(/--/g,"<<HYPHEN>>").replace(/__/g,"<<UNDERSCORE>>").replace(/[-_]/g," ").replace(/<<UNDERSCORE>>/g,"_").replace(/<<HYPHEN>>/g,"-")},r=function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")},i=function(e){return e.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}},78982:function(e,t,n){n.d(t,{rV:function(){return i},cl:function(){return l}});var a=864e5,r=2592e6,i=function(e,t,n){try{if(function(){try{var e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||""+e)>a&&o()}catch(t){return}}(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var l=i[e];return void 0===l?n:l}return n}}var u=localStorage.getItem(e);return u?JSON.parse(u):n}catch(s){return n}},l=function(e,t){try{if(t){var n=i(t,void 0,{expiry:Date.now()+r});return"object"!=typeof n&&(n={expiry:0}),e in n&&delete n[e],void localStorage.setItem(t,JSON.stringify(n))}localStorage.removeItem(e)}catch(a){return}},o=function(){try{var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=i(t,void 0,{expiry:e+r});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)}catch(t){return}}},90094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(26626),o=n(70997),u=n(72875),s=(n(58215),n(85107),["components"]),c={title:"Routing im Alltag"},d="Routing im Alltag [^1]",m={unversionedId:"Netzwerke/Routing/routing-alltag",id:"version-24f/Netzwerke/Routing/routing-alltag",isDocsHomePage:!1,title:"Routing im Alltag",description:"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie",source:"@site/versioned_docs/version-24f/05-Netzwerke/004-Routing/01-routing-alltag.md",sourceDirName:"05-Netzwerke/004-Routing",slug:"/Netzwerke/Routing/routing-alltag",permalink:"/24f/Netzwerke/Routing/routing-alltag",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/05-Netzwerke/004-Routing/01-routing-alltag.md",tags:[],version:"24f",sidebarPosition:1,frontMatter:{title:"Routing im Alltag"},sidebar:"version-24f/sidebar",previous:{title:"\xdcbungen",permalink:"/24f/Netzwerke/Codierung/Uebungen"},next:{title:"Routing im Internet",permalink:"/24f/Netzwerke/Routing/routing-internet"}},p=[{value:"Verkehrsbetriebe Biel",id:"verkehrsbetriebe-biel",children:[],level:2},{value:"gefundene Analogien",id:"gefundene-analogien",children:[],level:2},{value:"Routing f\xfcr Touristen",id:"routing-f\xfcr-touristen",children:[],level:2},{value:"Ausfall Schienennetz",id:"ausfall-schienennetz",children:[],level:2},{value:"Grosse Gruppe",id:"grosse-gruppe",children:[],level:2}],g={toc:p};function f(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"routing-im-alltag-"},"Routing im Alltag ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"vorgehensweise"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Vorgehensweise")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"die Aufgaben l\xf6sen und die Ergebnisse notieren"),(0,i.kt)("li",{parentName:"ul"},"vor jedem \xabgewonnene Erkenntnisse\xbb \xfcberlegen Sie kurz, was eine gewonnene Erkenntnis sein k\xf6nnte \u2013 und zwar bevor Sie das K\xe4stchen aufklappen"),(0,i.kt)("li",{parentName:"ul"},"lesen Sie die \xabgewonnenen Erkenntnisse\xbb durch und \xfcberlegen Sie sich, was damit genau gemeint ist"),(0,i.kt)("li",{parentName:"ul"},"falls Sie eine Frage haben oder eine Erkenntnis notiert haben, die nicht aufgelistet wird, dann halten Sie diese fest, damit wir am Schluss dar\xfcber sprechen k\xf6nnen")))),(0,i.kt)("p",null,"Wir befinden uns auf der ",(0,i.kt)("a",{parentName:"p",href:"/24f/Netzwerke/Schichtenmodell/Vermittlungsschicht"},"Vermittlungs-Schicht"),": Hier werden IP-Pakete vom Start- zum Zielger\xe4t \xfcbertragen. Bei ihrem Weg durch das Internet m\xfcssen die Pakete geleitet werden \u2013 man spricht von ",(0,i.kt)("strong",{parentName:"p"},"Routing"),"."),(0,i.kt)("h2",{id:"verkehrsbetriebe-biel"},"Verkehrsbetriebe Biel"),(0,i.kt)("p",null,"Durch das Verkehrsnetz der Verkehrsbetriebe Biel wird der \xf6ffentliche Verkehr in der Stadt Biel sichergestellt."),(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)(l.Z,{bib:{author:"VB TPD",source:"https://www.vb-tpb.ch/de/fahren/linien-netzplan/",licence:"Public Domain",licence_url:"",edited:!0},caption:"undefined",options:{},isInline:!1,src:n(2661).Z,mdxType:"Image"})),(0,i.kt)("p",null,"Sie m\xf6chten mit dem \xd6V vom Gymnasium (L\xe4ndtestrasse 12, Biel/Bienne) zum Sportplatz Mettmoos fahren."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"mit-dem-netzplan"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Mit dem Netzplan")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten sehen Sie auf dem Liniennetz?"),(0,i.kt)(o.Z,{type:"text",id:"q1",webKey:"d6938484-81a6-4240-bbd0-b94ed04bdc72",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"-mit-google-maps"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"\ud83d\udcbb mit Google Maps")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Welchen Transportoptionen schl\xe4gt Ihnen ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/maps/dir/Gymnasium+Biel-Seeland,+L%C3%A4ndtestrasse+12,+2503+Biel/Sports+Ground+Mettmoos,+Parkplatz+Mettmoos,+2504+Biel/@47.1389934,7.2384864,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478e195743e2cd43:0x7eeeab7e9cc7fa72!2m2!1d7.2359916!2d47.1334096!1m5!1m1!1s0x478e192b26b851e1:0x5e85058550f44003!2m2!1d7.2756948!2d47.1390779!3e3"},"Google Maps")," vor, wenn Sie die Route ",(0,i.kt)("em",{parentName:"p"},"L\xe4ndtestrasse 12")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"Sportplatz Mettmoos")," suchen?"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Welche Optionen werden vorgeschlagen?"),(0,i.kt)("li",{parentName:"ul"},"Welches ist gem\xe4ss Google die beste Route?"),(0,i.kt)("li",{parentName:"ul"},"\xc4ndert sich die Route, wenn sie m\xf6glichst kurze Fusswege enthalten soll? (Einstellbar unter ",(0,i.kt)("em",{parentName:"li"},"Routenoptionen"),")"),(0,i.kt)("li",{parentName:"ul"},"\xc4ndert sich der Reisevorschlag, wenn Sie sp\xe4t in der Nacht eine Verbindung suchen?")),(0,i.kt)(o.Z,{type:"text",id:"q2",webKey:"482bf3ac-ff0d-44ca-9700-5274cf9fecd4",mdxType:"Answer"}))),(0,i.kt)(u.Z,{mdxType:"Finding"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es gibt mehrere Wege, welche ans Ziel f\xfchren."),(0,i.kt)("li",{parentName:"ul"},"Der optimale Weg ist abh\xe4ngig von den Rahmenbedingungen und kann sich ",(0,i.kt)("strong",{parentName:"li"},"\xe4ndern"),"."))),(0,i.kt)("h2",{id:"gefundene-analogien"},"gefundene Analogien"),(0,i.kt)("div",{className:"no-table-header"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"WLAN")),(0,i.kt)("td",{parentName:"tr",align:"left"},"zu Fuss bis zur n\xe4chsten Haltestelle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Sichtbare WLANs")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Haltestellen, die zu Fuss erreichbar sind: Bahnhof & Badhausstrasse")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Rechnernetz (LAN)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mit Bus (f\xfcr weiter entfernte Ziele: Tram, Zug, ...)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Umsteigen an gewissen Haltestellen"))))),(0,i.kt)("h2",{id:"routing-f\xfcr-touristen"},"Routing f\xfcr Touristen"),(0,i.kt)("p",null,"Datenpakete sind \u2013 anders als wir als Passagiere vom ",(0,i.kt)("em",{parentName:"p"},"\xd6V")," \u2013 nicht intelligent. Sie wissen nicht, wie sie umsteigen m\xfcssen. Dies muss f\xfcr sie \xfcbernommen werden."),(0,i.kt)("p",null,"Ein Datenpaket im \xd6V vom Gymer zum Sportplatz Mettmoos m\xfcsste"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"an ",(0,i.kt)("strong",{parentName:"li"},"jeder Haltestelle")," wissen:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ob man Aussteigen oder Umsteigen muss"),(0,i.kt)("li",{parentName:"ul"},"in welchen Bus man einsteigen muss"),(0,i.kt)("li",{parentName:"ul"},"ob man am Ziel angekommen ist.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"an jeder Strassenkreuzung (wenn zu Fuss unterwegs) wissen:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"welche Abzweigung es nehmen soll"),(0,i.kt)("li",{parentName:"ul"},"ob es am Ziel angekommen ist.")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"routing-tabelle"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Routing-Tabelle")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Erstellen Sie f\xfcr das Ziel "Sportplatz Mettmoos" Umsteige-Anleitungen f\xfcr Datenpakete gem\xe4ss obigem Punkt 1. f\xfcr die folgenden Haltestellen:'),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Seehofweg"),(0,i.kt)("li",{parentName:"ul"},"Bahnhof Biel"),(0,i.kt)("li",{parentName:"ul"},"M\xfchlestrasse/Moulin"),(0,i.kt)("li",{parentName:"ul"},"Schulen Linde"),(0,i.kt)("li",{parentName:"ul"},"Bahnhof Mett")),(0,i.kt)("p",{parentName:"div"},"Beispiel-Anleitung: ",(0,i.kt)("strong",{parentName:"p"},"Seehofweg")," \u2192 Bus Nr. 9"),(0,i.kt)(o.Z,{type:"text",id:"q3",webKey:"7bcc9f60-6fe8-4162-b45f-8cda4e248730",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div",id:"andere-ziele"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Andere Ziele")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Anleitungen m\xfcssten nat\xfcrlich auch Anweisungen haben f\xfcr andere Ziele."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},'Wie w\xfcrden die Umsteigungsanweisungen f\xfcr die 5 obenstehenden Haltestellen f\xfcr das Ziel "Bern" lauten?'),(0,i.kt)("li",{parentName:"ul"},'Wie f\xfcr das Ziel "Z\xfcrich"?'),(0,i.kt)("li",{parentName:"ul"},"Muss jede Haltestelle wirklich Anweisungen f\xfcr jedes andere Ziel haben?")),(0,i.kt)(o.Z,{type:"text",id:"q4",webKey:"609cfe7e-bab0-4a50-97c7-7b3ac571fba0",mdxType:"Answer"}))),(0,i.kt)(u.Z,{mdxType:"Finding"},(0,i.kt)("p",null,'Es k\xf6nnen Anweisungen "delegiert" werden: Es muss nur der ',(0,i.kt)("em",{parentName:"p"},"Bahnhof Biel")," wissen, in welchen Zug man einsteigen muss um nach Bern oder Z\xfcrich zu fahren. Die anderen Haltestellen leiten alle Anfragen ausserhalb des Biel-Netzes an den ",(0,i.kt)("em",{parentName:"p"},"Bahnhof Biel")," weiter.")),(0,i.kt)("h2",{id:"ausfall-schienennetz"},"Ausfall Schienennetz"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Wegen Umbauarbeiten f\xe4llt die Linie Nr. 9 ab "Br\xfchlplatz" aus. Welche M\xf6glichkeiten haben Sie, wenn Sie beim ',(0,i.kt)("em",{parentName:"p"},"Seehofweg")," eingestiegen sind, um doch an den Sportplatz zu gelangen?")),(0,i.kt)(u.Z,{mdxType:"Finding"},(0,i.kt)("p",null,"Es gibt verschiedene Wege zum Ziel - auch nicht optimale Wege, die normalerweise nicht benutzt werden. Diese Optionen erm\xf6glichen aber eine gewisse ",(0,i.kt)("strong",{parentName:"p"},"Ausfallsicherheit"),". Im Beispiel oben k\xf6nnen Sie entweder beim Bahnhof Biel oder beim Br\xfchlplatz auf eine andere Verbindung umsteigen. ")),(0,i.kt)("h2",{id:"grosse-gruppe"},"Grosse Gruppe"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"4 Parallelklassen \u2013 also ca. 100 Personen haben beim Sportplatz Mettmoos abgemacht.\nWie kommen sie am schnellsten dahin, wenn wir damit rechnen, dass wegen Corona und dem Feierabendverkehr maximal 25 Personen pro Bus Platz finden?")),(0,i.kt)(u.Z,{mdxType:"Finding"},(0,i.kt)("p",null,"Bei Engp\xe4ssen k\xf6nnen verschiedene Wege gleichzeitig benutzt werden. (Load-Balancing)")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html"},"informatik.mygymer.ch"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},2661:function(e,t,n){t.Z=n.p+"assets/images/vb-verkehrsnetz-b17e10bcbeb65e0a89a8fbdff92e9906.png"},69235:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}n.d(t,{Z:function(){return l}});var r=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}function l(){l=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,a,i){var l=new RegExp(e,a);return t.set(l,i||t.get(e)),(0,r.Z)(l,n.prototype)}function o(e,n){var a=t.get(n);return Object.keys(a).reduce((function(t,n){return t[n]=e[a[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"==typeof r){var i=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof r){var l=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==a(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,l)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},l.apply(this,arguments)}}}]);