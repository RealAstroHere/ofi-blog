"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2396],{58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(87462),i=n(67294),o=n(72389),l=n(79443);var s=function(){var t=(0,i.useContext)(l.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},r=n(41544),c=n(86010),u="tabItem_1uMI";function p(t){var e,n,a,o=t.lazy,l=t.block,p=t.defaultValue,d=t.values,m=t.groupId,f=t.className,h=i.Children.map(t.children,(function(t){if((0,i.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),v=(0,r.lx)(b,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(e=null!=p?p:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!b.some((function(t){return t.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),I=k.tabGroupChoices,y=k.setTabGroupChoices,Z=(0,i.useState)(g),w=Z[0],x=Z[1],T=[],N=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=I[m];null!=S&&S!==w&&b.some((function(t){return t.value===S}))&&x(S)}var E=function(t){var e=t.currentTarget,n=T.indexOf(e),a=b[n].value;a!==w&&(N(e),x(a),null!=m&&y(m,a))},C=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=T.indexOf(t.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(t.currentTarget)-1;n=T[i]||T[T.length-1]}null==(e=n)||e.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":l},f)},b.map((function(t){var e=t.value,n=t.label;return i.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,c.default)("tabs__item",u,{"tabs__item--active":w===e}),key:e,ref:function(t){return T.push(t)},onKeyDown:C,onFocus:E,onClick:E},null!=n?n:e)}))),o?(0,i.cloneElement)(h.filter((function(t){return t.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function d(t){var e=(0,o.Z)();return i.createElement(p,(0,a.Z)({key:String(e)},t))}},79443:function(t,e,n){var a=(0,n(67294).createContext)(void 0);e.Z=a},85107:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(94578),i=n(67294),o=n(26396),l=function(t){function e(){return t.apply(this,arguments)||this}return(0,a.Z)(e,t),e.prototype.render=function(){return i.createElement(o.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},e}(i.Component)},82549:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=n(84384),s=n(85107),r=n(58215),c=["components"],u={title:"1. Python"},p="Python installieren",d={unversionedId:"software-installation/python-3.9",id:"software-installation/python-3.9",isDocsHomePage:!1,title:"1. Python",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/docs/software-installation/python-3.9.mdx",sourceDirName:"software-installation",slug:"/software-installation/python-3.9",permalink:"/software-installation/python-3.9",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/software-installation/python-3.9.mdx",tags:[],version:"current",lastUpdatedAt:1628606969,formattedLastUpdatedAt:"8/10/2021",frontMatter:{title:"1. Python"},sidebar:"sidebar",previous:{title:"Planeten mit Monden",permalink:"/snippets/turtle-planets"},next:{title:"2. VS Code",permalink:"/software-installation/vscode-1.59"}},m=[],f={toc:m};function h(t){var e=t.components,u=(0,i.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},f,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-installieren"},"Python installieren"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unter ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,o.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,o.kt)("inlineCode",{parentName:"li"},".exe"),", unter Mac OSX ",(0,o.kt)("inlineCode",{parentName:"li"},".pkg"),")"),(0,o.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(r.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(74428).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(14538).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Falls die Option zum Entfernen des Pfadl\xe4ngenlimits angezeigt wird: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(9755).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(38578).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,o.kt)(r.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(73452).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(24813).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(53943).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(24911).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 5.",options:{},isInline:!0,src:n(83373).Z,alt:"Installationsschritt 5.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 6.",options:{},isInline:!0,src:n(57016).Z,alt:"Installationsschritt 6.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 7.",options:{},isInline:!0,src:n(54341).Z,alt:"Installationsschritt 7.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,o.kt)(l.Z,{bib:void 0,caption:"Installationsschritt 8.",options:{},isInline:!0,src:n(83889).Z,alt:"Installationsschritt 8.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73")))))}h.isMDXComponent=!0},73452:function(t,e,n){e.Z=n.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},24813:function(t,e,n){e.Z=n.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},53943:function(t,e,n){e.Z=n.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},24911:function(t,e,n){e.Z=n.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},83373:function(t,e,n){e.Z=n.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},57016:function(t,e,n){e.Z=n.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},54341:function(t,e,n){e.Z=n.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},83889:function(t,e,n){e.Z=n.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},74428:function(t,e,n){e.Z=n.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},14538:function(t,e,n){e.Z=n.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},9755:function(t,e,n){e.Z=n.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},38578:function(t,e,n){e.Z=n.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);