"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[53237],{49308:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(67294),a=n(86010),o=n(11022),i=n(52263),c=n(11207),u="features_26Z4",l=n(39960),s=[{title:"Gym 1",classes:["25h"]},{title:"Gym 2",classes:["24f","24i","24K","24L","24o"]},{title:"WMS",classes:["24w"]}],m=function(e){var t=e.course;return r.createElement("div",{className:(0,a.default)("card margin--md shadow--md")},r.createElement("div",{className:"card__header"},r.createElement("h3",null,t.title)),r.createElement("div",{className:"card__body"},t.classes.map((function(e,t){return r.createElement(l.Z,{key:t,to:e+"/home",className:"button button--outline button--secondary margin--xs"},e)}))))};function f(){return r.createElement("section",{className:u},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},s.map((function(e,t){return r.createElement(m,{key:t,course:e})})))))}var d=n(66982),p=n.n(d);function E(){var e=(0,i.Z)().siteConfig;return r.createElement("header",{className:(0,a.default)("hero hero--primary",c.Z.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline)))}function h(){var e=[{original:"./img/index/robot_thinking.jpg",description:r.createElement("span",null,"\xa9 Mike McKenzie - ",r.createElement("a",{href:"https://creativecommons.org/licenses/by/2.0/",style:{color:"white"}},"CC 2.0"))},{original:"./img/index/coding.jpeg",description:r.createElement("span",null,"Bild von ",r.createElement("a",{href:"https://www.information-age.com/software-123466740/"},"Information-Age"))}];return r.createElement(o.Z,{description:"OF Informatik Website by B. Hofer"},r.createElement(E,null),r.createElement("main",null,r.createElement("div",{className:"gallery-wrapper"},r.createElement(p(),{items:e,infinite:!0,lazyLoad:!0,showNav:!1,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1,showBullets:!0,slideDuration:2e3,slideInterval:8e3,autoPlay:!0})),r.createElement(f,null)))}},21314:function(e,t,n){n.d(t,{oR:function(){return i},ky:function(){return c},RN:function(){return u}});var r=n(68949),a=n(67294),o=n(16731),i=function(e){return a.useContext(o.Nx)[e]},c=function(e,t,n,i,c,u){var l=a.useState(!1),s=l[0],m=l[1];a.useEffect((function(){o.Ux.documentStore.provideDocument(e(),t,n,i,c,u).finally((function(){m(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return o.Ux.userStore.currentView}),(function(r){s&&r&&o.Ux.documentStore.provideDocument(e(),t,n,i,c,u,!0)}))}),[s]),a.useEffect((function(){return(0,r.U5)((function(){return o.Ux.msalStore.isApiOffline}),(function(r){s&&!r&&o.Ux.documentStore.provideDocument(e(),t,n,i,c,u,!0)}))}),[s])},u=function(e){var t=a.useState(!1),n=t[0],i=t[1];a.useEffect((function(){o.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){i(!0)}))}),[]),a.useEffect((function(){return(0,r.U5)((function(){return o.Ux.userStore.currentView}),(function(t,r){n&&t&&o.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n]),a.useEffect((function(){return(0,r.U5)((function(){return o.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&o.Ux.timedTopicStore.provideTopic(e,!0)}))}),[n])}},64622:function(e,t,n){n.d(t,{Z:function(){return p}});var r,a=n(67294),o=n(42207),i=n(21314),c=n(73727),u=n(52263),l=n(10412),s=n(71217),m=n(86010),f="navBadge_3ua7",d="userBadge_3R-z",p=(r=o.Z,(0,s.Pi)((function(e){if(!l.Z.canUseDOM)return a.createElement(r,e);var t=(0,i.oR)("userStore"),n=function(e){return e.find((function(e){return e.path.length>1&&window.location.pathname.startsWith(e.path)}))}((0,u.Z)().globalData["docusaurus-plugin-content-docs"].default.versions);return"login"===e.to&&t.current?t.current.admin?a.createElement("div",{className:(0,m.default)(f,"dropdown","dropdown--hoverable")},a.createElement("button",{className:(0,m.default)("badge",t.isMyView?"badge--primary":"badge--warning")},t.currentView.name),a.createElement("ul",{className:"dropdown__menu"},t.byClass(null==n?void 0:n.name).map((function(e,n){return a.createElement("li",{key:n,onClick:function(){return t.setView(e)}},a.createElement("div",{className:(0,m.default)(d,"badge","badge--secondary","dropdown__link")},e.name))})))):a.createElement(c.rU,{to:"/"+e.to,className:"badge badge--primary margin--xs"},a.createElement("span",null,t.current.name)):a.createElement(r,e)})))},11207:function(e,t){t.Z={heroBanner:"heroBanner_1ZBZ",buttons:"buttons_irzW"}}}]);