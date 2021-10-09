(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{188:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(47),s=a.n(c),r=a(16),i=a(44),l=a(78),o="[Auth] Login",u="[Auth] Logout",b="[UI] Set Error",j="[UI] Remove Error",d="[UI] Start loading",m="[UI] Finish loading",O="[Notes] New note",h="[Notes] Set active note",p="[Notes] Load notes",v="[Notes] Update note saved",x="[Notes] Delete note",f="[Notes] Logout Cleaning",N="[WindowView] Window Open",y="[WindowView] Window Close",g="[WindowView] Set Error",_="[WindowView] Remove Error",w="[MathOperations] Fees Calculation",k={borrowedValue:"",monthlyFees:"",numberOfPayments:"",monthlyEffectiveRate:"",interestToPay:""},C=a(26),E=a(14),P={notes:[],active:null},R={loadgin:!1,msgError:null},I={view:!1,msgError:null},S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,F=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return{uid:t.payload.uid,name:t.payload.displayName};case u:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(E.a)(Object(E.a)({},e),{},{msgError:t.payload});case j:return Object(E.a)(Object(E.a)({},e),{},{msgError:null});case d:return Object(E.a)(Object(E.a)({},e),{},{loadgin:!0});case m:return Object(E.a)(Object(E.a)({},e),{},{loadgin:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(E.a)(Object(E.a)({},e),{},{active:Object(E.a)({},t.payload)});case O:return Object(E.a)(Object(E.a)({},e),{},{notes:[t.payload].concat(Object(C.a)(e.notes))});case p:return Object(E.a)(Object(E.a)({},e),{},{notes:Object(C.a)(t.payload)});case v:return Object(E.a)(Object(E.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case x:return Object(E.a)(Object(E.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case f:return Object(E.a)(Object(E.a)({},e),{},{active:null,notes:[]});default:return e}},window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(E.a)(Object(E.a)({},e),{},{view:!0});case y:return Object(E.a)(Object(E.a)({},e),{},{view:!1});case g:return Object(E.a)(Object(E.a)({},e),{},{msgError:t.payload});case _:return Object(E.a)(Object(E.a)({},e),{},{msgError:null});default:return e}},mathOperations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{monthlyFees:t.payload.monthlyFees,monthlyEffectiveRate:t.payload.mER,interestToPay:t.payload.interestToPay,borrowedValue:t.payload.n1,numberOfPayments:t.payload.n2};default:return e}}}),A=Object(i.d)(F,S(Object(i.a)(l.a))),L=a(0),T=a.n(L),D=a(1),M=a(17),V=a(34),W=a(20),U=a(43);a(92),a(190);U.a.initializeApp({apiKey:"AIzaSyBiFJFXEcgQoLaXgAPrwELGvprdnkDwoqg",authDomain:"react-app-note-5e273.firebaseapp.com",projectId:"react-app-note-5e273",storageBucket:"react-app-note-5e273.appspot.com",messagingSenderId:"250347996765",appId:"1:250347996765:web:6ff0fd1ddceff925da6fb4"});var z=U.a.firestore(),q=new U.a.auth.GoogleAuthProvider,B=a(36),X=a.n(B),G=function(){var e=Object(D.a)(T.a.mark((function e(t){var a,n,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/danfelogar/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/danfelogar/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(D.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(E.a)({id:e.id},e.data()))})),console.log(n),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e,t){return{type:O,payload:Object(E.a)({id:e},t)}},K=function(e,t){return{type:h,payload:Object(E.a)({id:e},t)}},Q=function(e){return function(){var t=Object(D.a)(T.a.mark((function t(a){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:n=t.sent,a(Y(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return{type:p,payload:e}},Z=function(e){return function(){var t=Object(D.a)(T.a.mark((function t(a,n){var c,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().auth.uid,e.url||delete e.url,delete(s=Object(E.a)({},e)).id,t.next=6,z.doc("".concat(c,"/journal/notes/").concat(e.id)).update(s);case 6:a($(e.id,s)),X.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},$=function(e,t){return{type:v,payload:{id:e,note:Object(E.a)({id:e},t)}}},ee=function(e){return{type:x,payload:e}},te=function(e){return{type:g,payload:e}},ae=a(5),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(M.a)(t,2),c=a[0],s=a[1],r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;s(t)},i=function(e){var t=e.target;s(Object(E.a)(Object(E.a)({},c),{},Object(ae.a)({},t.name,t.value)))};return[c,i,r]},ce=function(e,t,a,n,c){return{type:w,payload:{monthlyFees:e,mER:t,interestToPay:a,n1:n,n2:c}}},se=a(3),re=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.window})).view,a=Object(r.c)((function(e){return e.mathOperations})),n=a.borrowedValue,c=a.monthlyFees,s=a.numberOfPayments,i=a.monthlyEffectiveRate,l=a.interestToPay,o=Object(r.c)((function(e){return e.window})).msgError,u=function(){return 0===O.trim().length||"0"===O||null===O||void 0===O?(e(te("Remember that you have to assign a value for row 1 and that it is different from zero")),!1):0===h.trim().length||"0"===h||null===h||void 0===h?(e(te("Remember that you have to assign a value for row 2 and that it is different from zero")),!1):0===p.trim().length||"0"===p||null===p||void 0===p?(e(te("Remember that you have to assign a value for row 3 and that it is different from zero")),!1):(e({type:_}),!0)},b=ne({number1:"",number2:"",number3:""}),j=Object(M.a)(b,2),d=j[0],m=j[1],O=d.number1,h=d.number2,p=d.number3;return Object(se.jsx)("section",{className:"wrap__calculation-table",children:Object(se.jsxs)("div",{className:"notes__calculation-table",children:[Object(se.jsx)("div",{className:"container__btn-close",onClick:function(){!0===t&&e({type:y})},children:Object(se.jsxs)("div",{className:"btn-close",children:[Object(se.jsxs)("span",{className:"left",children:[Object(se.jsx)("span",{className:"circle-left"}),Object(se.jsx)("span",{className:"circle-right"})]}),Object(se.jsxs)("span",{className:"right",children:[Object(se.jsx)("span",{className:"circle-left"}),Object(se.jsx)("span",{className:"circle-right"})]})]})}),Object(se.jsxs)("div",{className:"container__calculation-table",children:[Object(se.jsx)("h1",{children:"Personal loan calculator and simulator"}),Object(se.jsxs)("table",{children:[Object(se.jsx)("thead",{children:Object(se.jsxs)("tr",{children:[Object(se.jsxs)("th",{children:["Value to be loaned ",Object(se.jsx)("span",{children:"Without thousand or million points"})]}),Object(se.jsx)("td",{children:Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("input",{className:"calculaton-input",type:"number",placeholder:"Click me to give a value",name:"number1",value:O,min:"0",onChange:m}),Object(se.jsx)("div",{className:"line"})]})})]})}),Object(se.jsxs)("tbody",{children:[Object(se.jsxs)("tr",{children:[Object(se.jsx)("th",{children:"Number of months"}),Object(se.jsx)("td",{children:Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("input",{className:"calculaton-input",type:"number",placeholder:"Click me to give a value",name:"number2",value:h,min:"0",onChange:m}),Object(se.jsx)("div",{className:"line"})]})})]}),Object(se.jsxs)("tr",{children:[Object(se.jsxs)("th",{children:["Loan interest ",Object(se.jsx)("span",{children:"% annual APR"})]}),Object(se.jsx)("td",{children:Object(se.jsxs)("div",{className:"field",children:[Object(se.jsx)("input",{className:"calculaton-input",type:"number",placeholder:"Click me to give a value",name:"number3",value:p,min:"0",onChange:m}),Object(se.jsx)("div",{className:"line"})]})})]})]})]}),Object(se.jsx)("button",{className:"btn-calculate bouncy",onClick:function(t){t.preventDefault(),u()&&e(function(e,t,a){return function(n){var c=parseInt(e),s=parseInt(t),r=parseInt(a),i=Math.pow(1+r/100,1/12)-1,l=Math.round(1e5*i)/1e5,o=c*(l*Math.pow(1+l,s))/(Math.pow(1+l,s)-1),u=Math.round(1e5*o)/1e5,b=u*s-c,j=Math.round(1e5*b)/1e5;n(ce(u,l,j,c,s))}}(O,h,p))},children:"Calculate"}),o&&Object(se.jsx)("div",{className:"note__alert-error",children:Object(se.jsx)("p",{children:o})}),i&&Object(se.jsxs)("div",{className:"container__calculation",children:[Object(se.jsx)("h1",{children:"Financial calculation summary"}),Object(se.jsxs)("div",{className:"wrap-calculation",children:[Object(se.jsxs)("div",{className:"calculation-attributes",children:[Object(se.jsx)("div",{className:"calculation-att",children:"Borrowed value:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Monthly fees:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Number of payments:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Monthly Effective Rate:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Interest to Pay:"})]}),Object(se.jsxs)("div",{className:"calculation-results",children:[Object(se.jsx)("div",{className:"calculation-res",children:n}),Object(se.jsx)("div",{className:"calculation-res",children:c}),Object(se.jsx)("div",{className:"calculation-res",children:s}),Object(se.jsx)("div",{className:"calculation-res",children:i}),Object(se.jsx)("div",{className:"calculation-res",children:l})]})]})]})]})]})})},ie=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.notes})).active,a=Object(n.useRef)(null);return Object(se.jsxs)("div",{className:"note__appbar",children:[Object(se.jsx)("span",{children:"28 de agosto 2020"}),Object(se.jsx)("input",{ref:a,type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(D.a)(T.a.mark((function t(a,n){var c,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().notes.active,X.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){X.a.showLoading()}}),t.next=4,G(e);case 4:s=t.sent,c.url=s,a(Z(c)),X.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),Object(se.jsxs)("div",{children:[Object(se.jsx)("button",{className:"btn",onClick:function(){a.current.click()},children:"Picture"}),Object(se.jsx)("button",{className:"btn",onClick:function(){e(Z(t))},children:"Save note"})]})]})},le=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.notes})).active,a=Object(r.c)((function(e){return e.mathOperations})),c=ne(t),s=Object(M.a)(c,3),i=s[0],l=s[1],o=s[2],u=i.body,b=i.title,j=i.id,d=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==d.current&&(o(t),d.current=t.id)}),[t,o]),Object(n.useEffect)((function(){e(K(i.id,Object(E.a)({},i)))}),[i,e]);var m=function(){var t=Object(D.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(E.a)(Object(E.a)({},i),a),t.next=3,e(K(i.id,Object(E.a)({},n)));case 3:e(Z(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=Object(r.c)((function(e){return e.window})).view;return Object(se.jsxs)("div",{className:"notes__main-content\r animate__animated animate__fadeIn\r ",children:[Object(se.jsx)(ie,{}),Object(se.jsxs)("div",{className:"notes__content",children:[Object(se.jsx)("input",{type:"text",placeholder:"What financial commitment or event do you have today?",className:"notes__tittle-input",autoComplete:"off",name:"title",value:b,onChange:l}),Object(se.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:u,onChange:l}),O&&Object(se.jsx)(re,{}),Object(se.jsxs)("div",{className:"notes__sub-content",children:[t.url&&Object(se.jsx)("div",{className:"notes__images",children:Object(se.jsx)("img",{src:t.url,alt:"gengar besto pk"})}),Object(se.jsxs)("div",{className:"container__calculation",children:[Object(se.jsx)("h1",{children:"Financial calculation summary"}),Object(se.jsxs)("div",{className:"wrap-calculation",children:[Object(se.jsxs)("div",{className:"calculation-attributes",children:[Object(se.jsx)("div",{className:"calculation-att",children:"Borrowed value:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Monthly fees:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Number of payments:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Monthly Effective Rate:"}),Object(se.jsx)("div",{className:"calculation-att",children:"Interest to Pay:"})]}),Object(se.jsxs)("div",{className:"calculation-results",children:[Object(se.jsx)("div",{className:"calculation-res",children:null===t||void 0===t?void 0:t.borrowedValue}),Object(se.jsx)("div",{className:"calculation-res",children:null===t||void 0===t?void 0:t.monthlyFees}),Object(se.jsx)("div",{className:"calculation-res",children:null===t||void 0===t?void 0:t.numberOfPayments}),Object(se.jsx)("div",{className:"calculation-res",children:null===t||void 0===t?void 0:t.monthlyEffectiveRate}),Object(se.jsx)("div",{className:"calculation-res",children:null===t||void 0===t?void 0:t.interestToPay})]})]}),Object(se.jsx)("button",{onClick:m,className:"btn-calculate btn-save",children:" Save calculation Here"})]}),Object(se.jsx)("button",{className:"notes__amortization-fee",onClick:function(){!1===O&&e({type:N})},children:"Calculate Fees"})]})]}),Object(se.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(D.a)(T.a.mark((function t(a,n){var c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().auth.uid,t.next=3,z.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:a(ee(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(j))},children:"Delete"})]})},oe=function(){return Object(se.jsxs)("div",{className:"nothing__main-content\r animate__animated animate__backInRight animate__faster\r ",children:[Object(se.jsxs)("div",{className:"bubbles",children:[Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"}),Object(se.jsx)("div",{className:"bubble"})]}),Object(se.jsxs)("div",{className:"nothing__main-content-text",children:[Object(se.jsxs)("p",{children:["Select something",Object(se.jsx)("br",{}),"Or create an entry!"]}),Object(se.jsx)("i",{className:"fas fa-book-open fa-4x mt-5"})]})]})},ue=function(e){return{type:b,payload:e}},be=function(){return{type:m}},je=function(e,t){return function(a){a({type:d}),U.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(de(t.uid,t.displayName)),a(be())})).catch((function(e){console.log(e),a(be()),X.a.fire("Error",e.message,"error")}))}},de=function(e,t){return{type:o,payload:{uid:e,displayName:t}}},me=function(){return{type:u}},Oe=a(79),he=a.n(Oe),pe=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,s=e.url,i=e.borrowedValue,l=e.monthlyFees,o=e.numberOfPayments,u=e.monthlyEffectiveRate,b=e.interestToPay,j=Object(r.b)(),d=he()(a);return Object(se.jsxs)("div",{className:"journal__entry pointer\r animate__animated animate__fadeIn animate__faster\r ",onClick:function(){j(K(t,{date:a,title:n,body:c,url:s,borrowedValue:i,monthlyFees:l,numberOfPayments:o,monthlyEffectiveRate:u,interestToPay:b}))},children:[Object(se.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url( ".concat(s||"https://csr.dot.ca.gov/images/imgnotavail.jpg"," )")}}),Object(se.jsxs)("div",{className:"journal__entry-body",children:[Object(se.jsx)("p",{className:"journal__entry-tittle",children:n}),Object(se.jsx)("p",{className:"journal__entry-content",children:c}),Object(se.jsxs)("p",{className:"journal__entry-sub-tittle",children:["Monthly fees: ",l||"not calculated"]})]}),Object(se.jsxs)("div",{className:"journal__entry-date-box",children:[Object(se.jsx)("span",{children:d.format("dddd")}),Object(se.jsx)("h4",{children:d.format("Do")})]})]})},ve=function(){var e=Object(r.c)((function(e){return e.notes})).notes,t=ne({searchText:""}),a=Object(M.a)(t,2),n=a[0].searchText,c=a[1],s=n.toLocaleLowerCase();return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)("div",{className:".body-filter",children:Object(se.jsxs)("form",{className:"search-box",children:[Object(se.jsx)("input",{type:"text",placeholder:"Search by your title",name:"searchText",value:n,autoComplete:"off",onChange:c}),Object(se.jsx)("button",{type:"reset"})]})}),Object(se.jsx)("div",{className:"journal__entries",children:e.filter((function(e){return e.title.toLocaleLowerCase().includes(s)})).map((function(e){return Object(se.jsx)(pe,Object(E.a)({},e),e.id)}))})]})},xe=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.auth})).name;return Object(se.jsxs)("aside",{className:"journal__sidebar\r animate__animated animate__backInLeft animate__faster\r ",children:[Object(se.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(se.jsxs)("h3",{className:"mt-5",children:[Object(se.jsx)("i",{className:"far fa-moon"}),Object(se.jsxs)("span",{children:[" ",t," "]})]}),Object(se.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(D.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.auth().signOut();case 2:t(me()),t({type:f});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(se.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(D.a)(T.a.mark((function e(t,a){var n,c,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,console.log(n),c={title:"",body:"",borrowedValue:"",monthlyFees:"",numberOfPayments:"",monthlyEffectiveRate:"",interestToPay:"",date:(new Date).getTime()},e.next=5,z.collection("".concat(n,"/journal/notes")).add(c);case 5:s=e.sent,t(K(s.id,c)),t(H(s.id,c)),console.log(s);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},children:[Object(se.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(se.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(se.jsx)(ve,{})]})},fe=function(){var e=Object(r.c)((function(e){return e.notes})).active;return Object(se.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(se.jsx)(xe,{}),Object(se.jsx)("main",{children:e?Object(se.jsx)(le,{}):Object(se.jsx)(oe,{})})]})},Ne=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).loading,a=ne({email:"dani12@gmail.com",password:"123456"}),n=Object(M.a)(a,2),c=n[0],s=n[1],i=c.email,l=c.password;return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)("h3",{className:"auth_title",children:"Login"}),Object(se.jsxs)("form",{className:"animate__animated animate__flipInX animate__faster",onSubmit:function(t){t.preventDefault(),e(je(i,l))},children:[Object(se.jsx)("input",{className:"auth_input",type:"text",placeholder:"Email",autoComplete:"off",name:"email",value:i,onChange:s}),Object(se.jsx)("input",{className:"auth_input",type:"password",placeholder:"Password",name:"password",value:l,onChange:s}),Object(se.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(se.jsxs)("div",{className:"auth_social_networks",children:[Object(se.jsx)("p",{children:"Login with social networks"}),Object(se.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){U.a.auth().signInWithPopup(q).then((function(t){var a=t.user;e(de(a.uid,a.displayName))}))}))},children:[Object(se.jsx)("div",{className:"google-icon-wrapper",children:Object(se.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(se.jsx)("p",{className:"btn-text",children:Object(se.jsx)("b",{children:"Sign in with google"})})]})]}),Object(se.jsx)(V.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},ye=a(80),ge=a.n(ye),_e=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).msgError,a=ne({name:"DanielUp",email:"dani12@gmail.com",password:"123456",password2:"123456"}),n=Object(M.a)(a,2),c=n[0],s=n[1],i=c.name,l=c.email,o=c.password,u=c.password2,b=function(){return 0===i.trim().length?(e(ue("name is required")),!1):ge.a.isEmail(l)?o!==u||o.length<5?(e(ue("Password should be at least 6 characters and match each other")),!1):(e({type:j}),!0):(e(ue("Email is not valid")),!1)};return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)("h3",{className:"auth_title",children:"Register"}),t&&Object(se.jsx)("div",{className:"auth__alert-error",children:t}),Object(se.jsxs)("form",{className:"animate__animated animate__flipInY animate__faster",onSubmit:function(t){t.preventDefault(),b()&&e(function(e,t,a){return function(n){U.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(D.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:a});case 3:n(de(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),X.a.fire("Error",e.message,"error")}))}}(l,o,i))},children:[Object(se.jsx)("input",{className:"auth_input",type:"text",placeholder:"Name",autoComplete:"off",name:"name",value:i,onChange:s}),Object(se.jsx)("input",{className:"auth_input",type:"text",placeholder:"Email",autoComplete:"off",name:"email",value:l,onChange:s}),Object(se.jsx)("input",{className:"auth_input",type:"password",placeholder:"Password",name:"password",value:o,onChange:s}),Object(se.jsx)("input",{className:"auth_input",type:"password",placeholder:"Confirm password",name:"password2",value:u,onChange:s}),Object(se.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(se.jsx)(V.b,{className:"link",to:"/auth/login",children:"Already registered?"})]})]})},we=function(){return Object(se.jsx)("div",{className:"wrap-main",children:Object(se.jsx)("div",{className:"auth_main",children:Object(se.jsx)("div",{className:"auth_box-container",children:Object(se.jsxs)(W.d,{children:[Object(se.jsx)(W.b,{exact:!0,path:"/auth/login",component:Ne}),Object(se.jsx)(W.b,{exact:!0,path:"/auth/register",component:_e}),Object(se.jsx)(W.a,{to:"/auth/login"})]})})})})},ke=a(52),Ce=a(31),Ee=a.n(Ce),Pe=["isAuthenticated","component"],Re=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ke.a)(e,Pe);return Object(se.jsx)(W.b,Object(E.a)(Object(E.a)({},n),{},{component:function(e){return t?Object(se.jsx)(a,Object(E.a)({},e)):Object(se.jsx)(W.a,{to:"/auth/login"})}}))};Re.prototype={isAuthenticated:Ee.a.bool.isRequired,component:Ee.a.func.isRequired};var Ie=["isAuthenticated","component"],Se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ke.a)(e,Ie);return Object(se.jsx)(W.b,Object(E.a)(Object(E.a)({},n),{},{component:function(e){return t?Object(se.jsx)(W.a,{to:"/"}):Object(se.jsx)(a,Object(E.a)({},e))}}))};Se.prototype={isAuthenticated:Ee.a.bool.isRequired,component:Ee.a.func.isRequired};var Fe=function(){return Object(se.jsx)("div",{className:"wrapper",children:Object(se.jsxs)("div",{className:"box-wrap",children:[Object(se.jsx)("div",{className:"box one"}),Object(se.jsx)("div",{className:"box two"}),Object(se.jsx)("div",{className:"box three"}),Object(se.jsx)("div",{className:"box four"}),Object(se.jsx)("div",{className:"box five"}),Object(se.jsx)("div",{className:"box six"})]})})},Ae=function(){var e=Object(r.b)(),t=Object(n.useState)(!0),a=Object(M.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),l=Object(M.a)(i,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){U.a.auth().onAuthStateChanged(function(){var t=Object(D.a)(T.a.mark((function t(a){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(de(a.uid,a.displayName)),u(!0),e(Q(a.uid))):u(!1),s(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,s,u]),c?Object(se.jsx)(Fe,{}):Object(se.jsx)(V.a,{children:Object(se.jsx)("div",{children:Object(se.jsxs)(W.d,{children:[Object(se.jsx)(Se,{path:"/auth",component:we,isAuthenticated:o}),Object(se.jsx)(Re,{exact:!0,path:"/",component:fe,isAuthenticated:o}),Object(se.jsx)(W.a,{to:"/auth/login"})]})})})},Le=function(){return Object(se.jsx)(r.a,{store:A,children:Object(se.jsx)(Ae,{})})};a(188);s.a.render(Object(se.jsx)(Le,{}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.75e0d3bc.chunk.js.map