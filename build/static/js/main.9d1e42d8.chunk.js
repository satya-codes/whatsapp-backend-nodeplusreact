(this["webpackJsonpwhatsapp-mern"]=this["webpackJsonpwhatsapp-mern"]||[]).push([[0],{33:function(e,s,t){},63:function(e,s,t){},83:function(e,s,t){},90:function(e,s,t){},91:function(e,s,t){},93:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),n=t(13),r=t.n(n),j=(t(63),t(55)),i=t(28),b=(t(33),t(30)),d=t.n(b),h=t(42),l=t(111),o=t(110),u=t(107),O=t(108),x=t(109),m=t(49),p=t.n(m),f=t(50),v=t.n(f),_=t(43),g=t.n(_).a.create({baseURL:"http://localhost:9000"}),N=(t(83),t(2));var w=function(e){var s=e.messages,t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1],j=function(){var e=Object(h.a)(d.a.mark((function e(s){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,g.post("/messages/new",{name:"Demo App",message:n,timestamp:"Just Now",received:!1});case 3:r("");case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"chat",children:[Object(N.jsxs)("div",{className:"chat__header",children:[Object(N.jsx)(l.a,{}),Object(N.jsxs)("div",{className:"chat__headerInfo",children:[Object(N.jsx)("h3",{children:"Room Name"}),Object(N.jsx)("p",{children:"Last seen at..."})]}),Object(N.jsxs)("div",{className:"chat__headerRight",children:[Object(N.jsx)(o.a,{children:Object(N.jsx)(u.a,{})}),Object(N.jsx)(o.a,{children:Object(N.jsx)(O.a,{})}),Object(N.jsx)(o.a,{children:Object(N.jsx)(x.a,{})})]})]}),Object(N.jsx)("div",{className:"chat__body",children:s.map((function(e){return Object(N.jsxs)("p",{className:"chat__message ".concat(e.received&&"chat__receiver"),children:[Object(N.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(N.jsx)("span",{className:"chat__timestamp",children:e.timestamp})]})}))}),Object(N.jsxs)("div",{className:"chat__footer",children:[Object(N.jsx)(p.a,{}),Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},placeholder:"Type a message",type:"text"}),Object(N.jsx)("button",{onClick:j,type:"submit",children:"Send a message"})]}),Object(N.jsx)(v.a,{})]})]})},y=(t(90),t(51)),C=t.n(y),S=t(52),R=t.n(S),k=t(53),F=t.n(k);t(91);var L=function(){return Object(N.jsxs)("div",{className:"sidebarChat",children:[Object(N.jsx)(l.a,{}),Object(N.jsxs)("div",{className:"sidebarChat__info",children:[Object(N.jsx)("h2",{children:"Room name"}),Object(N.jsx)("p",{children:"This is the last message"})]})]})},T=function(){return Object(N.jsxs)("div",{className:"sidebar",children:[Object(N.jsxs)("div",{className:"sidebar__header",children:[Object(N.jsx)(l.a,{src:"https://avatars.githubusercontent.com/u/63343224?s=400&u=d2cbe75e47b84b4d31c8b249b7f099af7933ae54&v=4"}),Object(N.jsxs)("div",{className:"sidebar__headerRight",children:[Object(N.jsx)(o.a,{children:Object(N.jsx)(C.a,{})}),Object(N.jsx)(o.a,{children:Object(N.jsx)(R.a,{})}),Object(N.jsx)(o.a,{children:Object(N.jsx)(F.a,{})})]})]}),Object(N.jsx)("div",{className:"sidebar__search",children:Object(N.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(N.jsx)(u.a,{}),Object(N.jsx)("input",{placeholder:"Search or start new Chat",type:"text"})]})}),Object(N.jsxs)("div",{className:"sidebar__chats",children:[Object(N.jsx)(L,{}),Object(N.jsx)(L,{}),Object(N.jsx)(L,{})]})]})},D=t(54),E=t.n(D);var I=function(){var e=Object(c.useState)([]),s=Object(i.a)(e,2),t=s[0],a=s[1];return Object(c.useEffect)((function(){g.get("/messages/sync").then((function(e){a(e.data)}))}),[]),Object(c.useEffect)((function(){var e=new E.a("0443d15258d76a74fda7",{cluster:"ap2"}).subscribe("messages");return e.bind("inserted",(function(e){a([].concat(Object(j.a)(t),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[t]),console.log(t),Object(N.jsx)("div",{className:"app",children:Object(N.jsxs)("div",{className:"app_body",children:[Object(N.jsx)(T,{}),Object(N.jsx)(w,{messages:t})]})})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,112)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(I,{})}),document.getElementById("root")),J()}},[[93,1,2]]]);
//# sourceMappingURL=main.9d1e42d8.chunk.js.map