"use strict";(self.webpackChunkcontacts=self.webpackChunkcontacts||[]).push([[926],{926:function(e,t,n){n.r(t);var a=n(791),c=n(250),r=n(982),i=n(885),o=n(763),s=n(413),l=n(135),u=n(184),m=function(e){var t=e.contacts,n=e.meta,a=e.setMeta,c=e.deleteContact,r=e.editContact,i=e.sortContacts,o=e.sort,m=e.setSort,d=e.toggleModal,h=function(e){var t=(0,u.jsx)(l.h3_,{onClick:function(){i("asc",e),m({type:"asc",field:e})}}),n=(0,u.jsx)(l.sF,{onClick:function(){i("desc",e),m({type:"desc",field:e})}}),a="asc"===o.type?n:t,c=(0,u.jsxs)(u.Fragment,{children:[t," ",n]});return e===o.field?a:c},g=n.pageNumbers.map((function(e){return(0,u.jsx)("span",{onClick:function(){a((0,s.Z)((0,s.Z)({},n),{},{currentPage:e}))},children:e},e)}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("span",{children:[" Current Sort: ","".concat(o.field," ").concat(o.type)]}),(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsxs)("th",{children:["Name",h("name")]}),(0,u.jsxs)("th",{children:["Email",h("email")]}),(0,u.jsxs)("th",{children:["Contact Number",h("contactNumber")]}),(0,u.jsx)("th",{children:"Actions"})]})}),(0,u.jsx)("tbody",{children:t.length>0?t.map((function(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.name}),(0,u.jsx)("td",{children:e.email}),(0,u.jsx)("td",{children:e.contactNumber}),(0,u.jsxs)("td",{children:[(0,u.jsx)("button",{className:"button muted-button",onClick:function(){r(e),d()},children:"Edit"}),(0,u.jsx)("button",{className:"button muted-button",onClick:function(){c(e.id)},children:"Delete"})]})]},e.id)})):(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:3,children:"No Contacts"})})}),(0,u.jsx)("tfoot",{children:(0,u.jsx)("tr",{children:(0,u.jsx)("th",{children:g})})})]})]})},d=n(572),h={id:0,name:"",email:"",contactNumber:""},g={name:"",email:"",contactNumber:""},b=RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i),x=function(e,t,n){return t.length<5?"".concat(e," must be ").concat(n," characters long!"):""},f=function(e,t,n){switch(t){case"name":e.name=x("Name",n,5);break;case"email":e.email=b.test(n)?"":"Email is not valid!";break;case"contactNumber":e.contactNumber=x("Contact Number",n,4)}return e},j=function(e){var t=e.currentContact,n=e.updateContact,c=e.toggleModal,r=e.mode,o=e.addContact,l=(0,a.useState)(t),m=(0,i.Z)(l,2),b=m[0],x=m[1],j=(0,a.useState)(g),p=(0,i.Z)(j,2),N=p[0],C=p[1],v=function(e){var t=e.target,n=t.name,a=t.value;C(f(N,n,a)),x((0,s.Z)((0,s.Z)({},b),{},(0,d.Z)({},n,a)))};return(0,a.useEffect)((function(){x(t),C(g)}),[t]),(0,u.jsxs)("form",{onSubmit:function(e){return function(e,t,a){e.preventDefault(),a.name&&a.email&&a.contactNumber&&function(e){return""===e.contactNumber&&""===e.email&&""===e.name}(N)&&(0===t?o(a):n(t,a),x(h),c())}(e,t.id||0,b)},children:[(0,u.jsx)("label",{children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",value:b.name,onChange:v}),N.name.length>0&&(0,u.jsx)("span",{className:"error",children:N.name}),(0,u.jsx)("label",{children:"Email"}),(0,u.jsx)("input",{type:"email",name:"email",value:b.email,onChange:v}),N.email.length>0&&(0,u.jsx)("span",{className:"error",children:N.email}),(0,u.jsx)("label",{children:"Contact Number"}),(0,u.jsx)("input",{type:"text",name:"contactNumber",value:b.contactNumber,onChange:v}),N.contactNumber.length>0&&(0,u.jsx)("span",{className:"error",children:N.contactNumber}),(0,u.jsx)("button",{children:r}),(0,u.jsx)("button",{onClick:function(){return c()},className:"button muted-button",children:"Cancel"})]})},p=n(948),N=n.n(p);N().setAppElement("#root");var C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"500px"}},v=function(e){for(var t=[],n=1;n<=Math.ceil(e/5);n++)t.push(n);return t},P=function(){var e,t=[{id:1,name:"Tania",email:"tania@mail.com",contactNumber:"123123123"},{id:2,name:"Craig",email:"craig@email.com",contactNumber:"6546456"},{id:3,name:"Ben1",email:"ben1@email.com",contactNumber:"2342134"},{id:4,name:"Ben2",email:"ben2@email.com",contactNumber:"2342234"},{id:5,name:"Ben3",email:"ben3@email.com",contactNumber:"2342334"},{id:6,name:"Ben4",email:"ben4@email.com",contactNumber:"2342434"},{id:7,name:"Ben5",email:"ben5@email.com",contactNumber:"23425 34"}],n=(0,a.useState)(t),c=(0,i.Z)(n,2),s=c[0],l=c[1],d=(0,a.useState)(t),g=(0,i.Z)(d,2),b=g[0],x=g[1],f=(0,a.useState)({type:"asc",field:"name"}),p=(0,i.Z)(f,2),P=p[0],y=p[1],S=(0,a.useState)((e=s.length,{currentPage:1,perPage:5,pageNumbers:v(e)})),Z=(0,i.Z)(S,2),k=Z[0],E=Z[1],B=(0,a.useState)(!1),M=(0,i.Z)(B,2),w=M[0],A=M[1],F=(0,a.useState)(h),R=(0,i.Z)(F,2),D=R[0],I=R[1],L=function(e){I(e)},O=function(){A(!w)},T=0===D.id?"Add Contact":"Edit Contact";return(0,a.useEffect)((function(){var e=v(s.length),t=k.currentPage;e[e.length-1]<k.currentPage&&(t=e[e.length-1]),E({perPage:5,currentPage:t,pageNumbers:e})}),[s.length,k.currentPage]),(0,a.useEffect)((function(){var e=k.currentPage*k.perPage,t=(k.currentPage-1)*k.perPage,n=e<s.length?k.currentPage*k.perPage:s.length,a=k.pageNumbers[k.pageNumbers.length-1],c=k.currentPage===a?s.length-(s.length-t):n-k.perPage;x(s.slice(c,n))}),[k,s]),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("h1",{children:"Contacts"}),(0,u.jsxs)("div",{className:"flex-row",children:[(0,u.jsxs)(N(),{isOpen:w,style:C,contentLabel:T,children:[(0,u.jsx)("h2",{children:T}),(0,u.jsx)(j,{currentContact:D,addContact:function(e){e.id=s.length+1,l((0,o.orderBy)([].concat((0,r.Z)(s),[e]),[P.field],[P.type]))},updateContact:function(e,t){l(s.map((function(n){return n.id===e?t:n})))},toggleModal:O,mode:T})]}),(0,u.jsxs)("div",{className:"flex-large",children:[(0,u.jsx)("h2",{children:"View Contacts"}),(0,u.jsx)("button",{onClick:function(){L(h),O()},children:"Add Contact"}),(0,u.jsx)(m,{contacts:b,meta:k,setMeta:E,sortContacts:function(e,t){var n=(0,o.orderBy)(s,[t],[e]);l(n)},editContact:L,deleteContact:function(e){l(s.filter((function(t){return t.id!==e})))},sort:P,setSort:y,toggleModal:O})]})]})]})};c.createRoot(document.getElementById("root")).render((0,u.jsx)(a.StrictMode,{children:(0,u.jsx)(P,{})}))}}]);
//# sourceMappingURL=926.27f5f525.chunk.js.map