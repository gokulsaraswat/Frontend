(this.webpackJsonpday_28=this.webpackJsonpday_28||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(4),j=c.n(i),a=c(2),s=(c(9),c(0));var d=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(),j=Object(a.a)(i,2),d=j[0],b=j[1],o=Object(n.useState)(),h=Object(a.a)(o,2),u=h[0],p=h[1],l=Object(n.useState)(!1),O=Object(a.a)(l,2),x=O[0],v=O[1];return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("h1",{children:"Weather App."}),Object(s.jsx)("input",{type:"text",placeholder:"City",value:c,onChange:function(e){r(e.target.value)}}),Object(s.jsx)("button",{onClick:function(){v(!0),fetch("https://api.weatherapi.com/v1/current.json?key=d9714335618d4d118ab45619212807&q=".concat(c)).then((function(e){return e.json()})).then((function(e){v(!1),e.location?(b(e),p("")):(p("Wrong Query"),b(""))})),r("")},children:"Submit"}),Object(s.jsx)("div",{children:x?Object(s.jsx)("p",{children:"Loading..."}):u?Object(s.jsx)("p",{children:u}):d?Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Place : ",d.location.name]}),Object(s.jsxs)("p",{children:["Temperature : ",d.current.temp_c," \xb0C"]}),Object(s.jsxs)("p",{children:["Wind Speed : ",d.current.wind_kph," kph"]})]}):Object(s.jsx)("div",{children:d})})]})};j.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.c686676b.chunk.js.map