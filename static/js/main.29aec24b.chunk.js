(this["webpackJsonpcontact-app"]=this["webpackJsonpcontact-app"]||[]).push([[0],{46:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(32),s=a.n(n),i=a(20),r=a.n(i),l=a(25),d=a(29),j=a(6),o=a(13),m=a(11),b=a(4),h=(a(44),a(45),a(46),a(1)),u=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col s12",children:Object(h.jsx)("h2",{className:"center-align main-header",children:"Contact Manager"})})})})},O=a(16),x=a(33),p=a(34),f=a(38),v=a(37);var g=function(e,t){var a=this,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=e.target.files[0],s=new FileReader;s.onload=function(){"rcc"===t?a.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{image:s.result})})):c((function(e){return Object(j.a)(Object(j.a)({},e),{},{image:s.result})}))},s.readAsDataURL(n)},N=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e,n){var s;return Object(x.a)(this,a),(s=t.call(this,e,n)).state={name:"",email:"",image:""},s.imageTag=Object(c.createRef)(),s.handleUpload=g,console.log(s.props),s}return Object(p.a)(a,[{key:"handleInputChange",value:function(e,t){this.setState((function(a){return Object(O.a)({},e,t.target.value)}))}},{key:"addDetails",value:function(e){e.preventDefault(),""!=this.state.name&&""!=this.state.email&&""!=this.state.image?(this.props.addContactHandler(this.state),this.setState({name:"",email:"",image:""}),this.props.history.push("/")):alert("All fields are mandatory")}},{key:"componentDidUpdate",value:function(){""!==this.state.image&&(this.imageTag.current.src=this.state.image)}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,c=t.email;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"PreviewImage",children:Object(h.jsx)("img",{ref:this.imageTag})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col m12 s12",children:[Object(h.jsx)("h2",{className:"remove-space-sm",children:"Add Contact"}),Object(h.jsxs)("form",{onSubmit:this.addDetails.bind(this),children:[Object(h.jsx)("div",{className:"row mb-70",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("input",{type:"file",className:"validate",id:"uploadBtn",onChange:function(t){return e.handleUpload(t,"rcc")},hidden:!0}),Object(h.jsx)("label",{for:"uploadBtn",className:"file-upload-wrapper",children:Object(h.jsx)("div",{children:Object(h.jsx)("i",{class:"material-icons",children:"add_a_photo"})})})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("input",{type:"text",className:"validate",value:a,onChange:this.handleInputChange.bind(this,"name")}),Object(h.jsx)("label",{className:"active",for:"first_name2",children:"Name"})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("input",{type:"text",className:"validate",value:c,onChange:this.handleInputChange.bind(this,"email")}),Object(h.jsx)("label",{className:"active",for:"first_name2",children:"Email"})]})}),Object(h.jsx)("button",{className:"btn waves-effect waves-light",type:"submit",children:"Add"})]})]})})]})}}]),a}(c.Component),w=function(e){var t=e.element,a=t.name,n=t.email,s=t.id,i=t.image,r=Object(c.useContext)(D).deleteItemHandler;return Object(h.jsxs)("li",{className:"collection-item avatar",id:s,children:[Object(h.jsxs)(m.b,{to:{pathname:"/contact/".concat(s),state:{contact:t}},children:[Object(h.jsx)("div",{className:"account-picture",children:Object(h.jsx)("img",{src:i})}),Object(h.jsxs)("div",{className:"user-details",children:[Object(h.jsx)("span",{className:"title",children:a}),Object(h.jsx)("p",{children:n})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"",className:"secondary-content top delete-icon btn-floating btn-small pulse",onClick:function(e){return r(s,e)},children:Object(h.jsx)("i",{className:"small material-icons",children:"delete"})})}),Object(h.jsx)("div",{children:Object(h.jsx)(m.b,{to:{pathname:"/contact/edit/".concat(s),state:{contacts:t}},children:Object(h.jsx)("a",{href:"",className:"secondary-content down",children:Object(h.jsx)("i",{className:"small material-icons",children:"edit"})})})})]},Math.random())},y=function(e){var t,a=e.contactList,c=e.contactToSearch,n=a,s="";t=a.filter((function(e){var t=e.name+e.email;if(""!==c&&t.toLowerCase().includes(c.toLowerCase().trim()))return e})),""!==c.trim()&&(n=t);var i=n.map((function(e){return Object(h.jsx)(w,{element:e})}));return s=n.length>0?i:""!==c.trim()&&0===n.length?Object(h.jsx)("li",{className:"collection-item avatar no-record-li",children:Object(h.jsx)("span",{className:"center-align valign-wrapper",children:"No contact found!"})}):Object(h.jsx)("li",{className:"collection-item avatar no-record-li",children:Object(h.jsx)("span",{className:"center-align valign-wrapper",children:"No records"})}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col m6 s6",children:Object(h.jsx)("h2",{className:"remove-default-height",children:"Contact List"})}),Object(h.jsx)("div",{className:"col m6 s6",children:Object(h.jsx)("div",{className:"right-align",children:Object(h.jsx)(m.b,{to:"/add",children:Object(h.jsx)("button",{className:"btn waves-effect waves-light",type:"submit",children:"Add"})})})})]}),Object(h.jsx)("ul",{className:"collection",children:s})]})},C=function(e){var t=e.location.state.contact,a=(t.id,t.name),c=t.email,n=t.image;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"add-contact-form center-align-item",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col s12 m12",children:Object(h.jsxs)("div",{className:"card center-align-item",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("img",{src:n})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsx)("span",{className:"card-title title",children:a}),Object(h.jsx)("p",{children:c})]}),Object(h.jsx)("div",{className:"card-action",children:Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("a",{href:"/",children:"Go to contcat list"})})})]})})})})})},S=function(e){var t=e.location,a=e.history,n=e.updateHandler,s=Object(c.useState)({name:t.state.contacts.name,email:t.state.contacts.email,image:t.state.contacts.image}),i=Object(o.a)(s,2),r=i[0],l=i[1],d=Object(c.useRef)();Object(c.useEffect)((function(){d.current.src=r.image}),[r.image]);var m=r.name,b=r.email,u=(r.image,function(e,t){l((function(a){return Object(j.a)(Object(j.a)({},a),{},Object(O.a)({},t,e.target.value))}))});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"PreviewImage",children:Object(h.jsx)("img",{ref:d})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col m12 s12",children:[Object(h.jsx)("h2",{className:"remove-space-sm",children:"Update Contact"}),Object(h.jsxs)("form",{onSubmit:function(e){return n(e,Object(j.a)(Object(j.a)({id:t.state.contacts.id},r),{},{changeUrl:a.push}))},children:[Object(h.jsx)("div",{className:"row mb-70",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("input",{type:"file",className:"validate",id:"uploadBtn",onChange:function(e){return g(e,"",l)},hidden:!0}),Object(h.jsx)("label",{for:"uploadBtn",className:"file-upload-wrapper",children:Object(h.jsx)("div",{children:Object(h.jsx)("i",{class:"material-icons",children:"add_a_photo"})})})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("input",{type:"text",className:"validate",value:m,onChange:function(e){return u(e,"name")}}),Object(h.jsx)("label",{className:"active",for:"first_name2",children:"Name"})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"input-field col s12",children:[Object(h.jsx)("input",{type:"text",className:"validate",value:b,onChange:function(e){return u(e,"email")}}),Object(h.jsx)("label",{className:"active",for:"first_name2",children:"Email"})]})}),Object(h.jsx)("button",{className:"btn waves-effect waves-light",type:"submit",children:"Update"})]})]})})]})},I=function(e){var t=Object(c.useState)({text:""}),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col m12 s12",children:Object(h.jsx)("nav",{children:Object(h.jsx)("div",{className:"nav-wrapper",children:Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{id:"search",type:"search",onChange:function(t){s({text:t.target.value}),e.putSearchedText(t.target.value)},value:n.text,placeholder:"Search contact here"}),Object(h.jsx)("label",{className:"label-icon",for:"search",children:Object(h.jsx)("i",{className:"material-icons",children:"search"})}),Object(h.jsx)("i",{className:"material-icons",onClick:function(){s({text:""}),e.putSearchedText("")},children:"close"})]})})})})})})},k=a(17),T=(a(52),{apiKey:"AIzaSyAbHp1wXzTotew5ijPqEMJnY56miTDV3CE",authDomain:"contact-manager-a14b8.firebaseapp.com",projectId:"contact-manager-a14b8",storageBucket:"contact-manager-a14b8.appspot.com",messagingSenderId:"644671199682",appId:"1:644671199682:web:59795297f0e4bb8f26de5b",measurementId:"G-52Q7MQ58JZ"}),A=a(36),D=Object(c.createContext)();k.a.initializeApp(T);var F=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),O=i[0],x=i[1],p=function(e){var t=Object(j.a)({id:Object(A.uuid)()},e);k.a.database().ref("contacts/"+t.id).set(t).then((function(){n([].concat(Object(d.a)(a),[t]))})).catch()};Object(c.useEffect)((function(){k.a.database().ref("contacts").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),n(t)}))}),[]);var f=function(){var e=Object(l.a)(r.a.mark((function e(t,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),k.a.database().ref("contacts/"+t).remove().then((function(){var e=a.filter((function(e){return e.id!==t}));n(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(r.a.mark((function e(t,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==c.name&&""!==c.email&&""!==c.image){e.next=4;break}return alert("All fields are required!"),e.abrupt("return");case 4:k.a.database().ref("contacts/"+c.id).update({id:c.id,name:c.name,email:c.email,image:c.image}).then((function(){var e=a.map((function(e){return e.id===c.id?{id:c.id,name:c.name,email:c.email,image:c.image}:e}));n(Object(d.a)(e)),c.changeUrl("/")})).catch((function(){console.log("Facing problem to update")}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(e){x(e)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(m.a,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"add-contact-form center-align-item",children:[Object(h.jsx)(u,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/add",render:function(e){return Object(h.jsx)(N,Object(j.a)(Object(j.a)({},e),{},{addContactHandler:p}))}}),Object(h.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(h.jsxs)(D.Provider,{value:{deleteItemHandler:f},children:[Object(h.jsx)(I,{contacts:a,putSearchedText:g}),Object(h.jsx)(y,{contactList:a,contactToSearch:O})]})}}),Object(h.jsx)(b.a,{exact:!0,path:"/contact/:id",render:C}),Object(h.jsx)(b.a,{exact:!0,path:"/contact/edit/:id",render:function(e){return Object(h.jsx)(S,Object(j.a)(Object(j.a)({},e),{},{updateHandler:v}))}})]})]})})})})};s.a.render(Object(h.jsx)(F,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.29aec24b.chunk.js.map