(window["webpackJsonptinder-ui"]=window["webpackJsonptinder-ui"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":0,"name":"Brad","desc":"Software Engineer","age":26,"image":"1.png","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]},{"id":1,"name":"Nicolas","desc":"Graphic Designer at Mentor Graphics","age":30,"image":"2.jpeg","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]},{"id":2,"name":"Emilia","desc":"Actress","age":35,"image":"3.jpg","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]},{"id":3,"name":"Nicole","desc":"Manager","age":45,"image":"4.jpg","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]},{"id":4,"name":"Mariam","desc":"Sales Manger","age":40,"image":"5.jpg","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]},{"id":5,"name":"Jolia","desc":"Actress","age":37,"image":"6.jpg","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]},{"id":6,"name":"Sofya","desc":"Actress","age":32,"image":"7.jpg","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]},{"id":7,"name":"Safy","desc":"Model","age":32,"image":"8.jpeg","likedUsers":[],"superLikedUsers":[],"dislikedUsers":[],"likedBy":[]}]')},,,,,function(e,a,s){e.exports=s(13)},,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(5),r=s.n(i),l=(s(11),s(2)),c=s(3),o=(s(12),function(){return n.a.createElement("div",null,n.a.createElement("img",{src:"/images/app/logo.png",alt:"Tinder Logo"}))}),d=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"fl"},n.a.createElement("button",{type:"button"},n.a.createElement("img",{src:"/images/app/user.png",alt:"User Settings"}))),n.a.createElement("div",null,n.a.createElement(o,null)),n.a.createElement("div",{className:"fl"},n.a.createElement("button",{type:"button"},n.a.createElement("img",{src:"/images/app/messages.png",alt:"View Messages"}))))},m=function(e){var a=e.userId,s=e.modifyChoices;return n.a.createElement("button",{type:"button",onClick:function(){return s(a,"ADD_TO_LIKED_USERS")}},n.a.createElement("img",{src:"/images/app/like.png",alt:"like"}))},u=function(e){var a=e.userId,s=e.modifyChoices;return n.a.createElement("button",{type:"button",onClick:function(){return s(a,"ADD_TO_DISLIKED_USERS")}},n.a.createElement("img",{src:"/images/app/dislike.png",alt:"dislike"}))},p=function(e){var a=e.userId,s=e.modifyChoices;return n.a.createElement("button",{type:"button",onClick:function(){return s(a,"ADD_TO_SUPERLIKED_USERS")}},n.a.createElement("img",{src:"/images/app/superlike.png",alt:"superlike"}))},g=function(e){e.userId,e.modifyChoices;return n.a.createElement("button",{type:"button"},n.a.createElement("img",{src:"/images/app/rewind.png",alt:"rewind"}))},k=function(e){var a=e.person,s=e.modifyChoices;return n.a.createElement("div",{id:"actions"},n.a.createElement(g,{userId:a.id}),n.a.createElement(u,{userId:a.id,modifyChoices:s}),n.a.createElement(m,{userId:a.id,modifyChoices:s}),n.a.createElement(p,{userId:a.id,modifyChoices:s}))},E=function(e){var a=e.person,s=e.modifyChoices,t=a.name,i=a.desc,r=a.age,l=a.image;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"person"},n.a.createElement("div",{className:"person-photo"},n.a.createElement("img",{src:"/images/users/".concat(l),alt:t})),n.a.createElement("div",{className:"person-description"},n.a.createElement("p",{className:"person-name-age"},t,", ",n.a.createElement("span",null,r)),n.a.createElement("p",{className:"person-info"},i))),n.a.createElement(k,{person:a,modifyChoices:s}))},f=function(e){var a=e.person;return n.a.createElement("div",{className:"liked-person"},n.a.createElement("div",{className:"liked-person-image"},n.a.createElement("img",{src:"/images/users/".concat(a.image),alt:"you liked ".concat(a.name)})))},U=function(e){var a=e.activeUserImage,s=e.likedUsers,t=e.superLikedUsers;return n.a.createElement("div",{id:"lonely"},n.a.createElement("p",null,"There's no new around you."),n.a.createElement("span",{className:"pulse"},n.a.createElement("img",{src:"/images/users/".concat(a),alt:"You..."})),n.a.createElement("div",{id:"liked-people"},n.a.createElement("p",null,s.length>0?"People you liked...let's hope they like you too!":""),s.map(function(e){return n.a.createElement(f,{key:e.id,person:e})}),n.a.createElement("p",null,t.length>0?"People you super liked!":""),t.map(function(e){return n.a.createElement(f,{key:e.id,person:e})})))},y=s(1),h=function(){var e=Object(t.useState)(y),a=Object(c.a)(e,2),s=a[0],i=a[1],r=Object(t.useState)([]),o=Object(c.a)(r,2),m=o[0],u=o[1],p=Object(t.useState)([]),g=Object(c.a)(p,2),k=g[0],f=g[1],h=Object(t.useState)([]),S=Object(c.a)(h,2),v=S[0],b=S[1],O=function(e,a){return e=e.filter(function(e){return e.id!==a})};return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),s[1]?n.a.createElement(E,{key:s[1].id,person:s[1],modifyChoices:function(e,a){var t=Object(l.a)(s),n=Object(l.a)(m),r=Object(l.a)(k),c=Object(l.a)(v);switch(a){case"ADD_TO_LIKED_USERS":console.log("here in like "),console.log("people : "+JSON.stringify(s)),console.log("active user : "+JSON.stringify(s[0])),console.log("new people : "+JSON.stringify(t)),s[0].likedUsers.includes(e)||(t[0].likedUsers.push(e),r.push(y[e]),console.log("new liked people  : "+JSON.stringify(r)),f(r),i(O(s,e)),console.log("people after  : "+JSON.stringify(s)));break;case"ADD_TO_DISLIKED_USERS":s[0].dislikedUsers.includes(e)||(t[0].dislikedUsers.push(e),c.push(y[e]),b(c),i(O(s,e)));break;case"ADD_TO_SUPERLIKED_USERS":s[0].superLikedUsers.includes(e)||(t[0].superLikedUsers.push(e),n.push(y[e]),u(n),i(O(s,e)));break;default:return s}},likedUsers:k}):n.a.createElement(U,{activeUserImage:s[0].image,likedUsers:k,superLikedUsers:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.4a3863f7.chunk.js.map