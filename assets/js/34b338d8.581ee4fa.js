"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3744],{13919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},44996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return u}});var r=t(52263),o=t(13919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(i,t,e,n)}}}function u(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},79443:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},49519:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(67294),o=t(86010),i="loginPage_gxz4",u=t(65186),a=t(52263),c=t(11207),l=t(21314),s=t(73727);function f(){var e=(0,a.Z)().siteConfig;return r.createElement("header",{className:(0,o.default)("hero hero--primary",c.Z.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline)))}function m(){var e=(0,l.o)("msalStore"),n=e.account,t=e.loggedIn;return r.createElement(u.Z,{description:"OF Informatik Website by B. Hofer"},r.createElement(f,null),r.createElement("main",null,r.createElement("div",{className:i},t?r.createElement(r.Fragment,null,r.createElement("h3",null,"Eingeloggt als ",n.username),r.createElement("button",{className:"button button--danger",onClick:function(){return e.logout()}},"Logout")):r.createElement(s.rU,{to:"/",onClick:function(){return e.login()},className:"button button--warning"},"Login mit GBSL Account"))))}},21314:function(e,n,t){t.d(n,{o:function(){return i}});var r=t(67294),o=t(60926),i=function(e){return r.useContext(o.Nx)[e]}},11207:function(e,n){n.Z={heroBanner:"heroBanner_1ZBZ",buttons:"buttons_irzW"}}}]);