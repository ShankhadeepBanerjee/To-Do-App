(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{54:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(12),a=c.n(o),i=c(15),s=(c(54),c(46)),r=c.n(s),l=c(59),u=c.n(l),d=c(101),j=c(102),b=c(22),O=(c(56),{apiKey:"AIzaSyAnipA5-nB3ir-xjYC_6z0z3bI6S6ch074",authDomain:"todo-app-21b75.firebaseapp.com",databaseURL:"https://todo-app-21b75-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"todo-app-21b75",storageBucket:"todo-app-21b75.appspot.com",messagingSenderId:"1000443677882",appId:"1:1000443677882:web:ba28a8c31086ed71370683"}),h={apiKey:O.apiKey,authDomain:O.authDomain,databaseURL:O.databaseURL,projectId:O.projectId,storageBucket:O.storageBucket,messagingSenderId:O.messagingSenderId,appId:O.appId};b.a.initializeApp(h);var m=b.a.firestore(),p=b.a.auth(),f=b.a.storage(),x=(b.a,c(3));var g=function(e){var t=Object(n.useContext)(q),c=Object(n.useState)(e.todoObject.content),o=Object(i.a)(c,2),a=o[0],s=o[1],l=Object(n.useState)(e.todoObject.done),b=Object(i.a)(l,2),O=b[0],h=b[1],p=Object(n.useState)(!1),g=Object(i.a)(p,2),v=g[0],y=g[1],S=Object(n.useState)(!1),C=Object(i.a)(S,2),k=C[0],N=C[1];function w(e){N(1===e)}function I(){y(!1),m.collection(t.uid).doc(e.todoObject.id).update({content:a,done:O}).then().catch((function(e){console.error("Error removing document: ",e)}))}return Object(n.useEffect)((function(){t&&I()}),[O]),Object(x.jsxs)("div",{className:"todo-item","data-key":e.todoObject.id,children:[Object(x.jsxs)("div",{children:["image"in e.todoObject&&e.todoObject.image&&Object(x.jsx)("img",{src:e.todoObject.image,alt:"",onClick:function(){w(1)}}),Object(x.jsx)(j.a,{open:k,onClose:function(){w(0)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(x.jsx)("div",{className:"modal-img-div",children:Object(x.jsx)("img",{src:e.todoObject.image,alt:""})})})]}),Object(x.jsxs)("div",{children:[v?Object(x.jsx)("div",{className:"edit-todo",children:Object(x.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),I()},children:[Object(x.jsx)("textarea",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(x.jsx)("button",{children:"Update"})]})}):Object(x.jsx)("pre",{style:O?{textDecoration:"line-through",opacity:"0.6"}:{},children:a}),!v&&Object(x.jsx)(d.a,{title:"done",children:Object(x.jsx)("input",{type:"checkbox",className:"icon",checked:O,onChange:function(){h(!O)}})}),!v&&Object(x.jsx)(d.a,{title:"Edit",children:Object(x.jsx)(u.a,{className:"icon",onClick:function(){return y(!0)}})}),Object(x.jsx)(d.a,{title:"Delete",children:Object(x.jsx)(r.a,{className:"icon",onClick:function(){m.collection(t.uid).doc(e.todoObject.id).delete().then().catch((function(e){console.error("Error removing document: ",e)})),"image"in e.todoObject&&null!==e.todoObject.image&&f.ref().child(e.todoObject.imageRef).delete().then((function(e){console.log("Deleted Successfully")})).catch((function(e){console.log("Error occures"+e)}))}})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{children:e.todoObject.time})})]})},v=c(47),y=c(16),S=new b.a.auth.GoogleAuthProvider;var C=c.p+"static/media/back1.a4b806a0.png",k=c.p+"static/media/back2.28c542a8.png";var N=function(){var e=Object(n.useContext)(q),t=Object(n.useContext)(T),c=Object(n.useContext)(B),o=c.theme,a=c.setTheme,s=Object(n.useState)({username:"",email:"",password:""}),r=Object(i.a)(s,2),l=r[0],u=r[1],b=Object(n.useState)(null),O=Object(i.a)(b,2),h=O[0],m=O[1],f=Object(n.useState)(!1),g=Object(i.a)(f,2),N=g[0],w=g[1];function I(e){var t=e.target,c=t.name,n=t.value;u((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(v.a)({},c,n))}))}function U(e){w(1===e)}function D(e,c){var n;(e.preventDefault(),l.email&&l.password)&&("Sign Up"===c?function(e,t){p.createUserWithEmailAndPassword(e.email,e.password).then((function(c){c.user.updateProfile({displayName:e.username,photoURL:"https://i.redd.it/v0caqchbtn741.jpg"}).then((function(){var e=p.currentUser;t((function(t){return Object(y.a)(Object(y.a)({},t),{},{username:e.displayName.split(" ")[0],userPhoto:e.photoURL,uid:e.uid})}))})).catch((function(e){}))})).catch((function(e){alert(e)}))}(l,t):(n=l,p.signInWithEmailAndPassword(n.email,n.password).then((function(e){var t=e.user;console.log(t)})).catch((function(e){console.log(e),alert(e)}))))}return Object(n.useEffect)((function(){N||u({username:"",email:"",password:""})}),[N]),Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){e?(console.log(e.uid),t({username:e.displayName.split(" ")[0],userPhoto:null,uid:e.uid}),"photoURL"in e&&t((function(t){return Object(y.a)(Object(y.a)({},t),{},{userPhoto:e.photoURL})}))):(console.log("signed Out"),t(null))}))}),[]),Object(n.useEffect)((function(){var e="url(".concat(o?C:k,")");document.querySelector("#root").style.setProperty("background",e)}),[o]),Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)(d.a,{title:"Theme",children:Object(x.jsx)("span",{className:"theme",onClick:function(){a((function(e){return!e}))},children:o?Object(x.jsx)("i",{className:"fas fa-moon fa-2x"}):Object(x.jsx)("i",{className:"fas fa-sun fa-2x",style:{color:"#fff"}})})}),e?Object(x.jsxs)("span",{className:"user",children:[Object(x.jsx)("h2",{children:e.username}),Object(x.jsx)(d.a,{title:"Sign Out",style:{backGround:"White",color:"Black"},children:Object(x.jsx)("img",{src:e.userPhoto,alt:"",onClick:function(){p.signOut(),t(null)}})})]}):Object(x.jsxs)("span",{children:[Object(x.jsx)("button",{onClick:function(){m("Sign Up"),U(1)},children:"Sign Up"}),Object(x.jsx)("button",{onClick:function(){m("Sign In"),U(1)},children:"Sign In"}),Object(x.jsx)(j.a,{open:N,onClose:function(){U(0)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",style:{width:"50%",height:"50%",margin:"auto"},children:Object(x.jsx)("div",{className:"auth-modal",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:h}),Object(x.jsxs)("form",{action:"",children:["Sign Up"===h&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{htmlFor:"userName",children:"Username:"}),Object(x.jsx)("input",{type:"text",name:"username",value:l.username,onChange:I})]}),Object(x.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(x.jsx)("input",{type:"email",name:"email",value:l.email,onChange:I}),Object(x.jsxs)("label",{htmlFor:"password",children:["Password:"," "]}),Object(x.jsx)("input",{type:"password",name:"password",value:l.password,onChange:I}),Object(x.jsx)("button",{onClick:function(e){U(0),D(e,h)},children:h})]}),Object(x.jsx)("h3",{children:"Or"}),Object(x.jsx)("button",{onClick:function(){U(0),p.signInWithPopup(S).then((function(e){})).catch((function(e){console.log(e)}))},children:"Sign in With Google Account"})]})})})]})]})},w=c(60),I=c.n(w),U=c(61),D=c.n(U);function P(){var e=new Date,t=e.getHours(),c=e.getMinutes();return(t%12>9?t%12:"0"+t%12)+":"+(c>9?c:"0"+c)+(t>11?" pm":" am")+(" "+e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear())}function E(){document.querySelector(".input-img").src="",document.querySelector(".file-choose").value=""}var A=function(){var e=Object(n.useState)({id:"",content:"",done:null,time:""}),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(null),s=Object(i.a)(a,2),l=s[0],u=s[1],j=Object(n.useContext)(q);function b(e){m.collection(j.uid).doc(e.id).set(e).then().catch((function(e){console.log("Error occured "+e)}))}return Object(x.jsx)("div",{className:"input-todo",children:Object(x.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),function(){if(""!==c.content){var e={id:Date.now().toString(),image:null,imageRef:"",content:c.content,done:!1,time:P()};o((function(e){return Object(y.a)(Object(y.a)({},e),{},{content:""})}));var t=document.querySelector(".file-choose");if(t.files[0]){var n=t.files[0],a=Date.now()+" - "+n.name,i={contentType:n.type},s=f.ref(),r="Images/"+j.username+j.uid+"/"+a;s.child(r).put(n,i).then((function(e){return e.ref.getDownloadURL()})).then((function(t){e.image=t,e.imageRef=r,b(e)}))}else b(e);E(),u(null)}}()},children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"",alt:"",className:"input-img"})}),Object(x.jsx)("div",{children:Object(x.jsx)("textarea",{type:"text",placeholder:"Add Todo Here...",value:c.content,onChange:function(e){o((function(t){return Object(y.a)(Object(y.a)({},t),{},{content:e.target.value})}))}})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"file",accept:"image/*",className:"file-choose hidden",onChange:function(){var e=document.querySelector(".file-choose");e.files[0]&&((e.files[0].size/1024/1024).toFixed(4)<1?(document.querySelector(".input-img").src=URL.createObjectURL(e.files[0]),u(1)):(alert("Please Select a file with size less than 1MB"),e.value=""))}}),Object(x.jsx)(d.a,{title:"Upload Image",children:Object(x.jsx)(I.a,{className:"icon",onClick:function(){document.querySelector(".file-choose").click()}})}),l&&Object(x.jsx)(d.a,{title:"Delete Image",children:Object(x.jsx)(r.a,{className:"icon",onClick:function(){E(),u(null)}})}),Object(x.jsx)("button",{className:"input-submit hidden",type:"submit"}),Object(x.jsx)(d.a,{title:"Add ToDo",children:Object(x.jsx)(D.a,{className:"icon",onClick:function(){return document.querySelector(".input-submit").click()}})})]})]})})},R=Object(n.createContext)(),L=Object(n.createContext)(),q=Object(n.createContext)(),T=Object(n.createContext)(),B=Object(n.createContext)();var F=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(null),s=Object(i.a)(a,2),r=s[0],l=s[1],u=Object(n.useState)(0),d=Object(i.a)(u,2),j=d[0],b=d[1];return Object(n.useEffect)((function(){r?m.collection(r.uid).onSnapshot((function(e){o(e.docs.map((function(e){return e.data()})).sort((function(e,t){return t.id-e.id})))})):o([])}),[r]),Object(x.jsx)(q.Provider,{value:r,children:Object(x.jsx)(T.Provider,{value:l,children:Object(x.jsx)(R.Provider,{value:c,children:Object(x.jsx)(L.Provider,{value:o,children:Object(x.jsx)(B.Provider,{value:{theme:j,setTheme:b},children:Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(N,{}),r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A,{}),Object(x.jsx)("div",{className:"show-todo",children:c.map((function(e){return Object(x.jsx)(g,{todoObject:e},e.id)}))})]}):Object(x.jsx)("h1",{className:"example",style:{textAlign:"center",marginTop:"40vh"},children:"Welcome to ToDo App"})]})})})})})})};a.a.render(Object(x.jsx)(F,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.63daa80d.chunk.js.map