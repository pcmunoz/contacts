"use strict";(self.webpackChunkcontacts=self.webpackChunkcontacts||[]).push([["src_bootstrap_tsx"],{926:function(e,t,n){n.r(t);var a=n(416),c=n.n(a),r=n(250),i=n(982),o=n(885),s=n(439),l=n(413),u=n(135),m=n(184),d=function(e){var t=e.contacts,n=e.meta,a=e.setMeta,c=e.deleteContact,r=e.editContact,i=e.sortContacts,o=e.sort,s=e.setSort,d=e.toggleModal,h=function(e){var t=(0,m.jsx)(u.h3_,{onClick:function(){i("asc",e),s({type:"asc",field:e})}}),n=(0,m.jsx)(u.sF,{onClick:function(){i("desc",e),s({type:"desc",field:e})}}),a="asc"===o.type?n:t,c=(0,m.jsxs)(m.Fragment,{children:[t," ",n]});return e===o.field?a:c},g=n.pageNumbers.map((function(e){return(0,m.jsx)("span",{onClick:function(){a((0,l.Z)((0,l.Z)({},n),{},{currentPage:e}))},children:e},e)}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{children:[" Current Sort: ","".concat(o.field," ").concat(o.type)]}),(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsxs)("th",{children:["Name",h("name")]}),(0,m.jsxs)("th",{children:["Email",h("email")]}),(0,m.jsxs)("th",{children:["Contact Number",h("contactNumber")]}),(0,m.jsx)("th",{children:"Actions"})]})}),(0,m.jsx)("tbody",{children:t.length>0?t.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:e.name}),(0,m.jsx)("td",{children:e.email}),(0,m.jsx)("td",{children:e.contactNumber}),(0,m.jsxs)("td",{children:[(0,m.jsx)("button",{className:"button muted-button",onClick:function(){r(e),d()},children:"Edit"}),(0,m.jsx)("button",{className:"button muted-button",onClick:function(){c(e.id)},children:"Delete"})]})]},e.id)})):(0,m.jsx)("tr",{children:(0,m.jsx)("td",{colSpan:3,children:"No Contacts"})})}),(0,m.jsx)("tfoot",{children:(0,m.jsx)("tr",{children:(0,m.jsx)("th",{children:g})})})]})]})},h=n(572),g={id:0,name:"",email:"",contactNumber:""},b={name:"",email:"",contactNumber:""},x=RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i),f=function(e,t,n){return t.length<5?"".concat(e," must be ").concat(n," characters long!"):""},j=function(e,t,n){switch(t){case"name":e.name=f("Name",n,5);break;case"email":e.email=x.test(n)?"":"Email is not valid!";break;case"contactNumber":e.contactNumber=f("Contact Number",n,4)}return e},p=function(e){var t=e.currentContact,n=e.updateContact,c=e.toggleModal,r=e.mode,i=e.addContact,s=(0,a.useState)(t),u=(0,o.Z)(s,2),d=u[0],x=u[1],f=(0,a.useState)(b),p=(0,o.Z)(f,2),N=p[0],C=p[1],v=function(e){var t=e.target,n=t.name,a=t.value;C(j(N,n,a)),x((0,l.Z)((0,l.Z)({},d),{},(0,h.Z)({},n,a)))};return(0,a.useEffect)((function(){x(t),C(b)}),[t]),(0,m.jsxs)("form",{onSubmit:function(e){return function(e,t,a){e.preventDefault(),a.name&&a.email&&a.contactNumber&&function(e){return""===e.contactNumber&&""===e.email&&""===e.name}(N)&&(0===t?i(a):n(t,a),x(g),c())}(e,t.id||0,d)},children:[(0,m.jsx)("label",{children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",value:d.name,onChange:v}),N.name.length>0&&(0,m.jsx)("span",{className:"error",children:N.name}),(0,m.jsx)("label",{children:"Email"}),(0,m.jsx)("input",{type:"email",name:"email",value:d.email,onChange:v}),N.email.length>0&&(0,m.jsx)("span",{className:"error",children:N.email}),(0,m.jsx)("label",{children:"Contact Number"}),(0,m.jsx)("input",{type:"text",name:"contactNumber",value:d.contactNumber,onChange:v}),N.contactNumber.length>0&&(0,m.jsx)("span",{className:"error",children:N.contactNumber}),(0,m.jsx)("button",{children:r}),(0,m.jsx)("button",{onClick:function(){return c()},className:"button muted-button",children:"Cancel"})]})},N=n(831),C=n.n(N);C().setAppElement("#root");var v={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"500px"}},P=function(e){for(var t=[],n=1;n<=Math.ceil(e/5);n++)t.push(n);return t},y=function(){var e,t=[{id:1,name:"Tania",email:"tania@mail.com",contactNumber:"123123123"},{id:2,name:"Craig",email:"craig@email.com",contactNumber:"6546456"},{id:3,name:"Ben1",email:"ben1@email.com",contactNumber:"2342134"},{id:4,name:"Ben2",email:"ben2@email.com",contactNumber:"2342234"},{id:5,name:"Ben3",email:"ben3@email.com",contactNumber:"2342334"},{id:6,name:"Ben4",email:"ben4@email.com",contactNumber:"2342434"},{id:7,name:"Ben5",email:"ben5@email.com",contactNumber:"23425 34"}],n=(0,a.useState)(t),c=(0,o.Z)(n,2),r=c[0],l=c[1],u=(0,a.useState)(t),h=(0,o.Z)(u,2),b=h[0],x=h[1],f=(0,a.useState)({type:"asc",field:"name"}),j=(0,o.Z)(f,2),N=j[0],y=j[1],S=(0,a.useState)((e=r.length,{currentPage:1,perPage:5,pageNumbers:P(e)})),Z=(0,o.Z)(S,2),k=Z[0],E=Z[1],B=(0,a.useState)(!1),M=(0,o.Z)(B,2),w=M[0],A=M[1],F=(0,a.useState)(g),R=(0,o.Z)(F,2),_=R[0],D=R[1],I=function(e){D(e)},L=function(){A(!w)},O=0===_.id?"Add Contact":"Edit Contact";return(0,a.useEffect)((function(){var e=P(r.length),t=k.currentPage;e[e.length-1]<k.currentPage&&(t=e[e.length-1]),E({perPage:5,currentPage:t,pageNumbers:e})}),[r.length,k.currentPage]),(0,a.useEffect)((function(){var e=k.currentPage*k.perPage,t=(k.currentPage-1)*k.perPage,n=e<r.length?k.currentPage*k.perPage:r.length,a=k.pageNumbers[k.pageNumbers.length-1],c=k.currentPage===a?r.length-(r.length-t):n-k.perPage;x(r.slice(c,n))}),[k,r]),(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h1",{children:"Contacts"}),(0,m.jsxs)("div",{className:"flex-row",children:[(0,m.jsxs)(C(),{isOpen:w,style:v,contentLabel:O,children:[(0,m.jsx)("h2",{children:O}),(0,m.jsx)(p,{currentContact:_,addContact:function(e){e.id=r.length+1,l((0,s.orderBy)([].concat((0,i.Z)(r),[e]),[N.field],[N.type]))},updateContact:function(e,t){l(r.map((function(n){return n.id===e?t:n})))},toggleModal:L,mode:O})]}),(0,m.jsxs)("div",{className:"flex-large",children:[(0,m.jsx)("h2",{children:"View Contacts"}),(0,m.jsx)("button",{onClick:function(){I(g),L()},children:"Add Contact"}),(0,m.jsx)(d,{contacts:b,meta:k,setMeta:E,sortContacts:function(e,t){var n=(0,s.orderBy)(r,[t],[e]);l(n)},editContact:I,deleteContact:function(e){l(r.filter((function(t){return t.id!==e})))},sort:N,setSort:y,toggleModal:L})]})]})]})};r.createRoot(document.getElementById("root")).render((0,m.jsx)(c().StrictMode,{children:(0,m.jsx)(y,{})}))}}]);
//# sourceMappingURL=src_bootstrap_tsx.4426200e.chunk.js.map