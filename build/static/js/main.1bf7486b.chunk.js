(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(13),u=t.n(r),o=t(2),i=function(e){var n=e.onClick;return c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"Delete"))},l=function(e){var n=e.person,t=e.onClick;return c.a.createElement("li",{key:n.name},n.name," --- ",n.number,c.a.createElement(i,{onClick:t}))},f=function(e){var n=e.value,t=e.onChange;return c.a.createElement("div",null,"Filter: ",c.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.msg,t=e.style;return null===n?null:c.a.createElement("div",{className:t},n)},s=t(3),d=t.n(s),b="/api/persons",h=function(){return d.a.get(b).then((function(e){return e.data}))},v=function(e){return d.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return d.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},j=(t(36),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),s=i[0],d=i[1],b=Object(a.useState)(""),j=Object(o.a)(b,2),k=j[0],w=j[1],O=Object(a.useState)(""),g=Object(o.a)(O,2),y=g[0],C=g[1],S=Object(a.useState)(""),N=Object(o.a)(S,2),D=N[0],P=N[1],x=Object(a.useState)(""),J=Object(o.a)(x,2),L=J[0],A=J[1];Object(a.useEffect)((function(){h().then((function(e){r(e)}))}),[]);var B=function(e,n){P(e),A(n),setTimeout((function(){P(null),A(null)}),5e3)};return c.a.createElement("div",null,c.a.createElement(m,{msg:D,style:L}),c.a.createElement("h2",null,"Search"),c.a.createElement(f,{value:y,onChange:function(e){C(e.target.value)}}),c.a.createElement("h2",null,"Phonebook"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:s,number:k};if(""!==n.name||""!==n.number)if(t.find((function(e){return e.name===n.name}))){if(window.confirm("".concat(n.name," is already in the phonebook!")+" Do you want to update the number?")){var a=t.find((function(e){return e.name===n.name})).id;p(a,n).then((function(e){r(t.map((function(n){return n.id!==a?n:e}))),d(""),w(""),B("".concat(e.name," was successfully updated!"),"success")})).catch((function(e){B("".concat(n.name," couldn't be found in the database"),"error"),r(t.find((function(e){return e.id!==a})))}))}}else v(n).then((function(e){r(t.concat(e)),d(""),w(""),B("Person ".concat(e.name," was successfully added!"),"success")})).catch((function(e){B("Unexpected error!","error")}))}},c.a.createElement("div",null,"Name: ",c.a.createElement("input",{value:s,onChange:function(e){d(e.target.value)}})),c.a.createElement("div",null,"Number: ",c.a.createElement("input",{value:k,onChange:function(e){w(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))),c.a.createElement("h2",null,"Numbers"),c.a.createElement("ul",null,t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})).map((function(e){return c.a.createElement(l,{key:e.name,person:e,onClick:function(){return function(e,n){if(window.confirm("Are you sure want to delete? ".concat(n))){var a=t.find((function(n){return n.id===e}));E(a.id).then((function(n){r(t.filter((function(n){return n.id!==e})))})).catch((function(e){B("Person ".concat(n," was already removed from the server"),"error")}))}}(e.id,e.name)}})}))))});u.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1bf7486b.chunk.js.map