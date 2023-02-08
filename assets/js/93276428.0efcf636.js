"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8380],{34673:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(83117),o=a(67294),n=a(86010),r=a(72389),s=a(86043);const i="details_lb9f",c="isBrowser_bmU9",m="collapsibleContent_i85q";function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function p(e){let{summary:t,children:a,...p}=e;const f=(0,r.Z)(),h=(0,o.useRef)(null),{collapsed:E,setCollapsed:b}=(0,s.u)({initialState:!p.open}),[g,y]=(0,o.useState)(p.open);return o.createElement("details",(0,l.Z)({},p,{ref:h,open:g,"data-collapsed":E,className:(0,n.default)(i,f&&c,p.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;u(t)&&d(t,h.current)&&(e.preventDefault(),E?(b(!1),y(!0)):b(!0))}}),null!=t?t:o.createElement("summary",null,"Details"),o.createElement(s.z,{lazy:!1,collapsed:E,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),y(!e)}},o.createElement("div",{className:m},a)))}const f="details_b_Ee";function h(e){let{...t}=e;return o.createElement(p,(0,l.Z)({},t,{className:(0,n.default)("alert alert--info",f,t.className)}))}},1631:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),o=a(86010);const n="container_DI4d",r="card_Dxen",s="fullscreen_Vq4o",i=e=>l.createElement("div",{className:(0,o.default)(r,"card")},l.createElement("iframe",{src:e.url,className:(0,o.default)("card__image")}),l.createElement("div",{className:"card__footer"},l.createElement("a",{target:"_blank",href:e.url,className:(0,o.default)("button","button--primary","button--block")},"\ud83d\udc49 ",e.url))),c=e=>{const t=e.shuffle?e.urls.slice().sort((()=>Math.random()-.5)):e.urls;return l.createElement("div",{className:(0,o.default)(n,e.full&&s)},t.map(((e,t)=>l.createElement(i,{url:e,key:t}))))}},61014:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(72389),o=a(71217),n=a(67294),r=a(21314),s=a(34805),i=a(34673),c=a(86010),m=a(23770),u=a(92814),d=a(51436);const p=()=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"26",viewBox:"0 0 512 512"},n.createElement("path",{fillRule:"evenodd",d:"M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"})),f=(0,o.Pi)((e=>n.createElement("span",{className:(0,c.default)(m.Z.policy,"badge","badge--"+e.color)},e.name," ",n.createElement(u.G,{icon:d.nYk,onClick:e.onRemove})))),h=(0,o.Pi)((e=>{const[t,a]=n.useState(""),[l,o]=n.useState(""),[s,i]=n.useState(""),p=(0,r.oR)("policyStore"),h=(0,r.oR)("adminStore"),E=(0,r.oR)("userStore"),b=p.findPolicy(e.webKey);return b?n.createElement("div",{className:(0,c.default)(m.Z.configContainer)},n.createElement("div",{className:(0,c.default)(m.Z.showControl)},n.createElement(u.G,{icon:h.showAdminElement("policy_opts")?d.nYk:d.cNd,onClick:()=>{h.toggleAdminElements("policy_opts")}})),h.showAdminElement("policy_opts")&&n.createElement("div",{className:(0,c.default)(m.Z.config)},n.createElement("div",{className:(0,c.default)(m.Z.permissions)},Array.from(b.klasses).map(((e,t)=>n.createElement(f,{key:t,name:e,onRemove:()=>b.removePermission(e,"class"),color:"success"}))),Array.from(b.groups).map(((e,t)=>n.createElement(f,{key:t,name:e,onRemove:()=>b.removePermission(e,"group"),color:"danger"}))),Array.from(b.users).map(((e,t)=>n.createElement(f,{key:t,name:e,onRemove:()=>b.removePermission(e,"user"),color:"primary"})))),n.createElement("div",{className:(0,c.default)(m.Z.update)},n.createElement("input",{type:"text",placeholder:"Klasse",value:t,onChange:e=>a(e.target.value),disabled:b.locked,list:"solution-policy-for-classes"}),n.createElement("datalist",{id:"solution-policy-for-classes"},E.klasses.map(((e,t)=>n.createElement("option",{key:t,value:e})))),n.createElement("button",{disabled:b.locked,onClick:()=>{b.addPermission(t,"class"),a("")}},"Add"),n.createElement("input",{type:"text",placeholder:"Gruppe",value:l,onChange:e=>o(e.target.value),disabled:b.locked,list:"solution-policy-for-groups"}),n.createElement("datalist",{id:"solution-policy-for-groups"},Array.from(new Set([...E.groups,...p.groups])).map(((e,t)=>n.createElement("option",{key:t,value:e})))),n.createElement("button",{disabled:b.locked,onClick:()=>{b.addPermission(l,"group"),o("")}},"Add"),n.createElement("input",{type:"email",placeholder:"User",value:s,onChange:e=>i(e.target.value),disabled:b.locked,list:"solution-policy-for-users"}),n.createElement("datalist",{id:"solution-policy-for-users"},E.users.map(((e,t)=>n.createElement("option",{key:t,value:e.email})))),n.createElement("button",{disabled:b.locked,onClick:()=>{b.addPermission(s,"user"),i("")}},"Add")))):null})),E=(0,o.Pi)((e=>{var t,a;const o=(0,r.oR)("policyStore"),u=(0,r.oR)("userStore"),d=(0,r.oR)("adminStore"),f=(0,l.Z)();if((0,r.aV)(e.webKey),!f)return n.createElement("div",null,"SSR");const E=o.find(e.webKey);return E?n.createElement("div",{"data--web-key":e.webKey,className:(0,c.default)(m.Z.wrapper,"solution-wrapper")},E.show||null!=(t=u.current)&&t.admin?n.createElement(i.Z,{summary:n.createElement("summary",null,e.title||"L\xf6sung"," ",n.createElement(p,null),!E.show&&n.createElement("span",{className:"badge badge--secondary"},"Hidden")),className:(0,c.default)("alert alert--success",m.Z.solution),open:e.open||d.showSolutions,key:"poly-"+(e.open||d.showSolutions)},(null==(a=u.current)?void 0:a.admin)&&n.createElement(h,{webKey:E.webKey}),e.children):n.createElement("div",{className:(0,c.default)("alert",m.Z.disabled)},e.title||"L\xf6sung"," (nicht freigeschaltet) ",n.createElement(p,null))):n.createElement(s.Z,null)}))},34805:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),o=a(86010);const n="loader_FEpR",r="badge_oWqf",s="overlay_cqDg";var i=a(92814),c=a(51436);const m=e=>l.createElement("div",{className:(0,o.default)(n,e.overlay&&s)},l.createElement(i.G,{icon:c.IJ7,spin:!0}),l.createElement("span",{className:(0,o.default)("badge",r)},e.caption||"Laden..."))},31579:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(67294),o=a(1631),n=a(61014);const r=()=>l.createElement("div",{style:{margin:"16px",padding:"16px"}},l.createElement("h1",null,"EF Webseiten 2024"),l.createElement(n.Z,{webKey:"0ba77b9b-e0c6-4b78-9a59-fa030b216c1b",title:"Websites",open:!0},l.createElement(o.Z,{urls:["https://GabrielMariethoz.github.io/EF-Informatik","https://Valayar.github.io/EF_Informatik","https://TheTahm.github.io/EF-Informatik","https://timonj0.github.io/EF_Informatik","https://jodokfehlmann.github.io/EF-Informatik","https://GraficPixelTDSM.github.io/EF-Informatik","https://Grashaum.github.io/EF-Informatik","https://Liloubrandi.github.io/EF_Informatik","https://arraky.github.io/EF-Info","https://No0ne155.github.io/ef_info","https://luiscarlosgarzacisneros.github.io/EFInformatik","https://Gerhard-69.github.io/EF-Informatik","https://mcdelarosa.github.io/EF-Informatik","https://marioschoch.github.io/EF-Info","https://gaeschpu.github.io/Ef-Info/docs/about-me","https://Malouu3.github.io/EF-Informatik"],full:!0})))},23770:(e,t,a)=>{a.d(t,{Z:()=>l});const l={wrapper:"wrapper_IyWj",disabled:"disabled_UTrl",solution:"solution_JCku",hint:"hint_hU43",configContainer:"configContainer_T2a2",showControl:"showControl_Ihe0",config:"config_oRh6",permissions:"permissions_Y3t6",policy:"policy_X6Li"}}}]);