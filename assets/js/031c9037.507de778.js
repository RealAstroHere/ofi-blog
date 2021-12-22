"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[52501],{58215:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},e)}},26396:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(83117),i=n(67294),o=n(72389),r=n(79443);var s=function(){var t=(0,i.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=n(1436),c=n(86010),u="tabItem_1uMI";function p(t){var e,n,o,r=t.lazy,p=t.block,d=t.defaultValue,m=t.values,f=t.groupId,h=t.className,b=i.Children.map(t.children,(function(t){if((0,i.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,l.lx)(v,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(e=null!=d?d:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(o=b[0])?void 0:o.props.value;if(null!==k&&!v.some((function(t){return t.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=s(),y=I.tabGroupChoices,Z=I.setTabGroupChoices,w=(0,i.useState)(k),x=w[0],N=w[1],T=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=y[f];null!=E&&E!==x&&v.some((function(t){return t.value===E}))&&N(E)}var C=function(t){var e=t.currentTarget,n=T.indexOf(e),a=v[n].value;a!==x&&(S(e),N(a),null!=f&&Z(f,a))},D=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=T.indexOf(t.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(t.currentTarget)-1;n=T[i]||T[T.length-1]}null==(e=n)||e.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":p},h)},v.map((function(t){var e=t.value,n=t.label,o=t.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return T.push(t)},onKeyDown:D,onFocus:C,onClick:C},o,{className:(0,c.default)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),r?(0,i.cloneElement)(b.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function d(t){var e=(0,o.Z)();return i.createElement(p,(0,a.Z)({key:String(e)},t))}},85107:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(21073),i=n(67294),o=n(26396),r=function(t){function e(){return t.apply(this,arguments)||this}return(0,a.Z)(e,t),e.prototype.render=function(){return i.createElement(o.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},e}(i.Component)},11817:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=n(84384),s=n(85107),l=n(58215),c=["components"],u={title:"1. Python"},p="Python installieren",d={unversionedId:"Software/python",id:"version-24i/Software/python",title:"1. Python",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/versioned_docs/version-24i/03-Software/01-python.mdx",sourceDirName:"03-Software",slug:"/Software/python",permalink:"/24i/Software/python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/03-Software/01-python.mdx",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"1. Python"},sidebar:"version-24i/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/24i/BYOD-Basics/pruefungsfragen"},next:{title:"2. VS Code",permalink:"/24i/Software/vscode"}},m=[],f={toc:m};function h(t){var e=t.components,u=(0,i.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},f,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-installieren"},"Python installieren"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unter ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,o.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,o.kt)("inlineCode",{parentName:"li"},".exe"),", unter Mac OSX ",(0,o.kt)("inlineCode",{parentName:"li"},".pkg"),")"),(0,o.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,o.kt)(s.Z,{mdxType:"OsTabs"},(0,o.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(57160).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(19722).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Falls die Option zum Entfernen des Pfadl\xe4ngenlimits angezeigt wird: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(6272).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(46607).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 1.",options:{},isInline:!0,src:n(78780).Z,alt:"Installationsschritt 1.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 2.",options:{},isInline:!0,src:n(60196).Z,alt:"Installationsschritt 2.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 3.",options:{},isInline:!0,src:n(76886).Z,alt:"Installationsschritt 3.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 4.",options:{},isInline:!0,src:n(100).Z,alt:"Installationsschritt 4.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 5.",options:{},isInline:!0,src:n(21543).Z,alt:"Installationsschritt 5.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 6.",options:{},isInline:!0,src:n(71775).Z,alt:"Installationsschritt 6.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 7.",options:{},isInline:!0,src:n(18828).Z,alt:"Installationsschritt 7.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,o.kt)(r.Z,{bib:void 0,caption:"Installationsschritt 8.",options:{},isInline:!0,src:n(90537).Z,alt:"Installationsschritt 8.",mdxType:"Image"})),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73")))))}h.isMDXComponent=!0},78780:function(t,e,n){e.Z=n.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},60196:function(t,e,n){e.Z=n.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},76886:function(t,e,n){e.Z=n.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},100:function(t,e,n){e.Z=n.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},21543:function(t,e,n){e.Z=n.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},71775:function(t,e,n){e.Z=n.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},18828:function(t,e,n){e.Z=n.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},90537:function(t,e,n){e.Z=n.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},57160:function(t,e,n){e.Z=n.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},19722:function(t,e,n){e.Z=n.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},6272:function(t,e,n){e.Z=n.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},46607:function(t,e,n){e.Z=n.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);