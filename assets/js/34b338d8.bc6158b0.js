"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[53744],{13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return u}});var r=n(52263),o=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,u=a.forcePrependBaseUrl,l=void 0!==u&&u,i=a.absolute,c=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(a,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},22460:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(67294),o=n(86010),a="loginPage_gxz4",u="users__xQI",l=n(11022),i=n(52263),c=n(11207),s=n(21314),f=n(73727),m=n(71217);function d(){var e=(0,i.Z)().siteConfig;return r.createElement("header",{className:(0,o.default)("hero hero--primary",c.Z.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline)))}var E=(0,m.Pi)((function(){var e=(0,s.oR)("userStore"),t=e.current;return r.createElement(r.Fragment,null,t&&t.admin&&r.createElement("div",{className:u},r.createElement("h3",null,"Benutzer"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Id"),r.createElement("th",null,"Email"),r.createElement("th",null,"Klasse"),r.createElement("th",null,"Admin?"),r.createElement("th",null,"Created At"))),r.createElement("tbody",null,e.users.map((function(e,t){return r.createElement("tr",{key:t},r.createElement("td",null,e.id),r.createElement("td",null,e.email),r.createElement("td",null,e.klasse),r.createElement("td",null,e.admin&&r.createElement("span",{className:"badge badge--primary"},"Admin")),r.createElement("td",null,e.createdAt.toISOString().slice(0,10)))}))))))})),g=(0,m.Pi)((function(){var e=(0,s.oR)("msalStore"),t=e.account,n=e.loggedIn;return r.createElement(l.Z,{description:"OF Informatik Website by B. Hofer"},r.createElement(d,null),r.createElement("main",null,r.createElement("div",{className:a},n?r.createElement(r.Fragment,null,r.createElement("h3",null,"Eingeloggt als ",t.username),r.createElement("button",{className:"button button--danger",onClick:function(){return e.logout()}},"Logout")):r.createElement(f.rU,{to:"/",onClick:function(){return e.login()},className:"button button--warning"},"Login mit GBSL Account"),r.createElement(E,null))))}))},21314:function(e,t,n){n.d(t,{oR:function(){return u},ky:function(){return l},RN:function(){return i}});var r=n(68949),o=n(67294),a=n(16731),u=function(e){return o.useContext(a.Nx)[e]},l=function(e,t,n,u,l,i){var c=o.useState(!1),s=c[0],f=c[1];o.useEffect((function(){a.Ux.documentStore.provideDocument(e(),t,n,u,l,i).finally((function(){f(!0)}))}),[]),o.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(r){s&&r&&a.Ux.documentStore.provideDocument(e(),t,n,u,l,i,!0)}))}),[s]),o.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(r){s&&!r&&a.Ux.documentStore.provideDocument(e(),t,n,u,l,i,!0)}))}),[s])},i=function(e){var t=o.useState(!1),n=t[0],u=t[1];console.log("initial load"),o.useEffect((function(){a.Ux.timedTopicStore.provideTopic(e,!1).finally((function(){u(!0)}))}),[]),o.useEffect((function(){return(0,r.U5)((function(){return a.Ux.userStore.currentView}),(function(t,r){n&&t&&(console.log("load from view"),a.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n]),o.useEffect((function(){return(0,r.U5)((function(){return a.Ux.msalStore.isApiOffline}),(function(t,r){n&&!t&&r&&(console.log("load from offlineChecker"),a.Ux.timedTopicStore.provideTopic(e,!0))}))}),[n])}},64622:function(e,t,n){n.d(t,{Z:function(){return E}});var r,o=n(67294),a=n(42207),u=n(21314),l=n(73727),i=n(52263),c=n(10412),s=n(71217),f=n(86010),m="navBadge_3ua7",d="userBadge_3R-z",E=(r=a.Z,(0,s.Pi)((function(e){if(!c.Z.canUseDOM)return o.createElement(r,e);var t=(0,u.oR)("userStore"),n=function(e){return e.find((function(e){return e.path.length>1&&window.location.pathname.startsWith(e.path)}))}((0,i.Z)().globalData["docusaurus-plugin-content-docs"].default.versions);return"login"===e.to&&t.current?t.current.admin?o.createElement("div",{className:(0,f.default)(m,"dropdown","dropdown--hoverable")},o.createElement("button",{className:(0,f.default)("badge",t.isMyView?"badge--primary":"badge--warning")},t.currentView.name),o.createElement("ul",{className:"dropdown__menu"},t.byClass(null==n?void 0:n.name).map((function(e,n){return o.createElement("li",{key:n,onClick:function(){return t.setView(e)}},o.createElement("div",{className:(0,f.default)(d,"badge","badge--secondary","dropdown__link")},e.name))})))):o.createElement(l.rU,{to:"/"+e.to,className:"badge badge--primary margin--xs"},o.createElement("span",null,t.current.name)):o.createElement(r,e)})))},11207:function(e,t){t.Z={heroBanner:"heroBanner_1ZBZ",buttons:"buttons_irzW"}}}]);