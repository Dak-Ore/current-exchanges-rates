(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),r=n(13),a=n.n(r),s=(n(46),n(24)),i=(n(47),n(34)),d=n(37),h=n.n(d),u=(n(55),n(4));var j=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),a=Object(s.a)(r,2),d=a[0],j=a[1];document.addEventListener("DOMContentLoaded",(function(){l()}));var l=function(){fetch("https://cors-anywhere.herokuapp.com/https://www.snb.ch/en/aux/xlsx/current_exchange_rates.xlsx",{method:"GET",headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}}).then((function(e){return e.blob()})).then((function(e){b(new Blob([e]))}))},b=function(e){new Promise((function(t,n){var c=new FileReader;c.readAsArrayBuffer(e),c.onload=function(e){var n=e.target.result,c=i.read(n,{type:"buffer",dateNF:"dd,mm,yyyy"}),o=c.SheetNames[0],r=c.Sheets[o],a=i.utils.sheet_to_json(r,{range:6,header:["Date","EUR","USD","JPY","GBP"],dateNF:"dd,mm,yyyy",raw:!1});t(a)},c.onerror=function(e){n(e)}})).then((function(e){o(e)}))},f=Object(c.useState)(new Date),p=Object(s.a)(f,2),x=p[0],O=p[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"button",value:"Reload",onClick:function(){l()}}),"https://cors-anywhere.herokuapp.com/ accepter la d\xe9mo si les donn\xe9es se charge pas",Object(u.jsx)(h.a,{id:"date",selected:x,onChange:function(e){!function(e){O(e);var t="".concat(e.getDate(),",",e.getMonth()+1,",",e.getFullYear());j(n.find((function(e){return e.Date===t})))}(e)},dateFormat:"dd,MM,yyyy"}),d?Object(u.jsxs)("label",{children:["EUR: ",d.EUR," - USD: ",d.USD," - JPY: ",d.JPY," - GBP: ",d.GBP]}):"Aucune donn\xe9e pour ce jour",Object(u.jsxs)("table",{className:"table container",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Date"}),Object(u.jsx)("th",{scope:"col",children:"EUR"}),Object(u.jsx)("th",{scope:"col",children:"USD"}),Object(u.jsx)("th",{scope:"col",children:"JPY"}),Object(u.jsx)("th",{scope:"col",children:"GBP"})]})}),Object(u.jsx)("tbody",{children:n.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:e.Date}),Object(u.jsx)("td",{children:e.EUR}),Object(u.jsx)("td",{children:e.USD}),Object(u.jsx)("th",{children:e.JPY}),Object(u.jsx)("td",{children:e.GBP})]},e.Date)}))})]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),l()},36:function(e,t){},46:function(e,t,n){},47:function(e,t,n){},53:function(e,t){},54:function(e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.5664062a.chunk.js.map