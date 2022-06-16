"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[74406],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(667294),r=n(386010),i="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(i,o),hidden:n},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(583117),r=n(667294),i=n(972389),o=n(867392),l=n(707094),s=n(212466),p=n(386010),c="tabList_uSqn",u="tabItem_LplD";function f(e){var t,n,i,f=e.lazy,m=e.block,d=e.defaultValue,g=e.values,h=e.groupId,k=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=y[0])?void 0:i.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),x=N.tabGroupChoices,T=N.setTabGroupChoices,Z=(0,r.useState)(w),I=Z[0],O=Z[1],F=[],G=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=x[h];null!=E&&E!==I&&b.some((function(e){return e.value===E}))&&O(E)}var P=function(e){var t=e.currentTarget,n=F.indexOf(t),a=b[n].value;a!==I&&(G(t),O(a),null!=h&&T(h,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=F.indexOf(e.currentTarget)+1;n=F[a]||F[0];break;case"ArrowLeft":var r=F.indexOf(e.currentTarget)-1;n=F[r]||F[F.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,p.default)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.default)("tabs",{"tabs--block":m},k)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return F.push(e)},onKeyDown:D,onFocus:P,onClick:P},i,{className:(0,p.default)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),f?(0,r.cloneElement)(y.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,i.Z)();return r.createElement(f,(0,a.Z)({key:String(t)},e))}},285107:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(21073),r=n(667294),i=n(409877),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},731931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return d}});var a,r=n(583117),i=n(480102),o=(n(667294),n(603905)),l=n(285107),s=n(72360),p=["components"],c={title:"1. Python"},u="Python installieren",f={unversionedId:"Software/python",id:"version-24o/Software/python",title:"1. Python",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/versioned_docs/version-24o/03-Software/01-python.mdx",sourceDirName:"03-Software",slug:"/Software/python",permalink:"/24o/Software/python",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/03-Software/01-python.mdx",tags:[],version:"24o",sidebarPosition:1,frontMatter:{title:"1. Python"},sidebar:"version-24o/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/24o/BYOD-Basics/pruefungsfragen"},next:{title:"2. VS Code",permalink:"/24o/Software/vscode"}},m={},d=[],g=(a="Figure",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:d};function k(e){var t=e.components,a=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-installieren"},"Python installieren"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Unter ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,o.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,o.kt)("inlineCode",{parentName:"li"},".exe"),", unter Mac OSX ",(0,o.kt)("inlineCode",{parentName:"li"},".pkg"),")"),(0,o.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,o.kt)(l.Z,{mdxType:"OsTabs"},(0,o.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 1.",src:n(513298).Z,width:"1494",height:"1010"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 2.",src:n(605473).Z,width:"1494",height:"1010"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 3.",src:n(939492).Z,width:"1494",height:"1010"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 4.",src:n(934992).Z,width:"1494",height:"1010"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 1.",src:n(955622).Z,width:"1464",height:"1112"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 1.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 2.",src:n(268596).Z,width:"1464",height:"1112"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 2.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 3.",src:n(457714).Z,width:"1464",height:"1112"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 3.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 4.",src:n(934770).Z,width:"1464",height:"1112"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 4.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 5.",src:n(27849).Z,width:"1468",height:"1112"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 5.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 6.",src:n(107798).Z,width:"1468",height:"1112"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 6.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 7.",src:n(788340).Z,width:"1110",height:"532"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 7.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)(g,{parentName:"li",options:{},mdxType:"Figure"},(0,o.kt)("img",{alt:"Installationsschritt 8.",src:n(267953).Z,width:"1578",height:"1112"}),(0,o.kt)("figcaption",{parentName:"Figure"},(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}}),"Installationsschritt 8.",(0,o.kt)("span",{parentName:"figcaption",style:{flexGrow:1}})))),(0,o.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73")))))}k.isMDXComponent=!0},955622:function(e,t,n){t.Z=n.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},268596:function(e,t,n){t.Z=n.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},457714:function(e,t,n){t.Z=n.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},934770:function(e,t,n){t.Z=n.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},27849:function(e,t,n){t.Z=n.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},107798:function(e,t,n){t.Z=n.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},788340:function(e,t,n){t.Z=n.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},267953:function(e,t,n){t.Z=n.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},513298:function(e,t,n){t.Z=n.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},605473:function(e,t,n){t.Z=n.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},939492:function(e,t,n){t.Z=n.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},934992:function(e,t,n){t.Z=n.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);