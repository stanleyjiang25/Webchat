(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2fb02b4b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"976fb3c3"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"135f":function(e,t,n){},"44c7":function(e,t,n){},4962:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("1276");var r=n("7a23"),a={key:0,id:"processing"},o=Object(r["f"])("h3",null,"Processing",-1),c=Object(r["f"])("i",{class:"fa fa-spinner"},null,-1),i=[o,c];function s(e,t,n,o,c,s){var u=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.$store.getters.Confirmations,(function(e){return Object(r["s"])(),Object(r["e"])("div",{class:"confirmation",key:e.id},[Object(r["f"])("div",null,[Object(r["f"])("p",null,Object(r["B"])(e.message),1)])])})),128)),e.$store.getters.Processing?(Object(r["s"])(),Object(r["e"])("div",a,i)):Object(r["d"])("",!0)],64)}var u={name:"App",methods:{onResize:function(){this.$store.commit("setWindowHeight"),this.$store.commit("setWindowWidth")}},mounted:function(){console.log(location.host),window.addEventListener("resize",this.onResize),this.onResize(),this.$store.commit("setProcessing",!1)},created:function(){this.$store.commit("logOut"),this.$store.dispatch("Create")}},l=(n("a4e3"),n("6b0d")),f=n.n(l);const d=f()(u,[["render",s]]);var m=d,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=(n("b0c0"),n("4de4"),n("caad"),n("2532"),function(e){return Object(r["v"])("data-v-28f993c1"),e=e(),Object(r["t"])(),e}),h={class:"add-contact-content"},v={class:"heading"},O=b((function(){return Object(r["f"])("h1",null,"Add Contact",-1)})),j={class:"heading-buttons"},g=b((function(){return Object(r["f"])("span",null,"Cancel",-1)})),w=b((function(){return Object(r["f"])("i",{class:"fa fa-times"},null,-1)})),C=[g,w],y={class:"inputs"},k={class:"email-input"},x=b((function(){return Object(r["f"])("span",null,"Email:",-1)})),R=b((function(){return Object(r["f"])("span",null,"Submit",-1)})),$=[R],P={class:"start-convo-content"},E={class:"heading"},N=b((function(){return Object(r["f"])("h1",null,"Start Conversation",-1)})),_={class:"heading-buttons"},S=b((function(){return Object(r["f"])("span",null,"Cancel",-1)})),U=b((function(){return Object(r["f"])("i",{class:"fa fa-times"},null,-1)})),H=[S,U],W={class:"inputs"},A={class:"inputs-outer"},I={class:"name-input"},M=b((function(){return Object(r["f"])("span",null,"Conversation Name:",-1)})),B=b((function(){return Object(r["f"])("span",null,"Submit",-1)})),F=[B],L={class:"members-input"},q=b((function(){return Object(r["f"])("span",null,"Members:",-1)})),z=["value"],G={class:"content"},T={class:"top-bar"},V={id:"profile"},D=b((function(){return Object(r["f"])("div",{class:"avatar"},[Object(r["f"])("i",{class:"fa fa-user-circle-o img"})],-1)})),K={class:"profile-info"},J=["readonly"],Q={class:"email"},X=Object(r["g"])("Conversations"),Y={class:"contacts"},Z={class:"heading"},ee=b((function(){return Object(r["f"])("h1",null,"Contacts",-1)})),te=b((function(){return Object(r["f"])("span",null,"New Contact",-1)})),ne=b((function(){return Object(r["f"])("i",{class:"fa fa-plus"},null,-1)})),re=[te,ne],ae={id:"contacts"},oe={class:"contact-info"},ce={class:"contact-email"},ie={class:"contact-username"},se={class:"convo-info"},ue={class:"convo-num"},le=["onClick"],fe=b((function(){return Object(r["f"])("i",{class:"fa fa-plus"},null,-1)})),de=[fe],me={class:"fav-info"},pe=["onClick","title"];function be(e,t,n,a,o,c){var i=Object(r["z"])("User"),s=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(i),o.addContactPopup?(Object(r["s"])(),Object(r["e"])("div",{key:0,class:"add-contact-popup",onKeyup:t[3]||(t[3]=Object(r["I"])((function(){return c.addContact&&c.addContact.apply(c,arguments)}),["enter"])),style:Object(r["o"])({height:e.$store.getters.WindowHeight+"px"})},[Object(r["f"])("div",h,[Object(r["f"])("div",v,[O,Object(r["f"])("div",j,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(e){o.addContactPopup=!1,o.newContact=""}),class:"cancel"},C)])]),Object(r["f"])("div",y,[Object(r["f"])("div",k,[x,Object(r["H"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newContact=e})},null,512),[[r["E"],o.newContact]])]),Object(r["f"])("div",{class:"submit",onClick:t[2]||(t[2]=function(){return c.addContact&&c.addContact.apply(c,arguments)})},$)])])],36)):Object(r["d"])("",!0),o.startConvoPopup?(Object(r["s"])(),Object(r["e"])("div",{key:1,class:"start-convo-popup",onKeyup:t[8]||(t[8]=Object(r["I"])((function(){return c.addConversation&&c.addConversation.apply(c,arguments)}),["enter"])),style:Object(r["o"])({height:e.$store.getters.WindowHeight+"px"})},[Object(r["f"])("div",P,[Object(r["f"])("div",E,[N,Object(r["f"])("div",_,[Object(r["f"])("button",{onClick:t[4]||(t[4]=function(e){o.startConvoPopup=!1,o.newConvo={name:"",members:[]}}),class:"cancel"},H)])]),Object(r["f"])("div",W,[Object(r["f"])("div",A,[Object(r["f"])("div",I,[M,Object(r["H"])(Object(r["f"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.newConvo.name=e})},null,512),[[r["E"],o.newConvo.name]])]),Object(r["f"])("div",{class:"submit",onClick:t[6]||(t[6]=function(){return c.addConversation&&c.addConversation.apply(c,arguments)})},F)]),Object(r["f"])("div",L,[q,Object(r["H"])(Object(r["f"])("select",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.newConvo.members=e}),multiple:""},[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.contacts,(function(e){return Object(r["s"])(),Object(r["e"])("option",{key:e.email,value:e.email},Object(r["B"])(e.username),9,z)})),128))],512),[[r["D"],o.newConvo.members]])])])])],36)):Object(r["d"])("",!0),Object(r["f"])("div",{class:"container",style:Object(r["o"])({minHeight:e.$store.getters.WindowHeight+"px"})},[Object(r["f"])("div",G,[Object(r["f"])("div",T,[Object(r["f"])("div",V,[D,Object(r["f"])("div",K,[Object(r["f"])("div",{class:"username",style:Object(r["o"])({"box-shadow":o.editingName?"0 0 10px 1px rgba(17, 21, 33, 0.3)":"none"})},[Object(r["H"])(Object(r["f"])("input",{readonly:!o.editingName,"onUpdate:modelValue":t[9]||(t[9]=function(e){return o.username=e}),ref:"nameInput"},null,8,J),[[r["E"],o.username]]),o.editingName?(Object(r["s"])(),Object(r["e"])("i",{key:0,class:"fa fa-times close",onClick:t[10]||(t[10]=function(){return c.cancelNameEdit&&c.cancelNameEdit.apply(c,arguments)})})):Object(r["d"])("",!0),Object(r["f"])("i",{class:Object(r["n"])(["fa",o.editingName?"fa-check":"fa-pencil"]),onClick:t[11]||(t[11]=function(){return c.editName&&c.editName.apply(c,arguments)}),style:Object(r["o"])({color:o.editingName?"rgb(5, 178, 0)":"black"})},null,6)],4),Object(r["f"])("div",Q,Object(r["B"])(e.user.email),1)])]),Object(r["h"])(s,{to:"/conversations",class:"chats"},{default:Object(r["G"])((function(){return[X]})),_:1})]),Object(r["f"])("div",Y,[Object(r["f"])("div",Z,[ee,Object(r["f"])("div",{class:"add-contact",onClick:t[12]||(t[12]=function(e){return o.addContactPopup=!0})},re)]),Object(r["f"])("div",ae,[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.contacts,(function(t){return Object(r["s"])(),Object(r["e"])("div",{key:t.email,class:"contact"},[Object(r["f"])("div",oe,[Object(r["f"])("span",ce,Object(r["B"])(t.email),1),Object(r["f"])("span",ie,Object(r["B"])(t.username),1)]),Object(r["f"])("div",se,[Object(r["f"])("span",ue,Object(r["B"])(e.conversations.filter((function(e){return e.users.includes(t.email)})).length)+" Conversations",1),Object(r["f"])("span",{onClick:function(e){o.startConvoPopup=!0,o.newConvo.members=[t.email]},class:"start-convo",title:"Start conversation with contact"},de,8,le)]),Object(r["f"])("div",me,[Object(r["f"])("span",{class:"favorite",onClick:function(e){return c.toggleFavorite(t)},title:t.favorite?"Unfavorite contact":"Favorite contact"},[Object(r["f"])("i",{class:Object(r["n"])(["fa",t.favorite?"fa-star":"fa-star-o"])},null,2)],8,pe)])])})),128))])])])],4)],64)}var he=n("1da1"),ve=n("5530"),Oe=(n("96cf"),n("7088")),je=n("5502"),ge={name:"Home",components:{User:Oe["a"]},data:function(){return{editingName:!1,username:"",addContactPopup:!1,startConvoPopup:!1,newContact:"",newConvo:{name:"",members:[]}}},computed:Object(ve["a"])({},Object(je["b"])({user:"User",contacts:"Contacts",conversations:"Conversations"})),methods:{editName:function(){if(this.editingName){var e=this;this.$store.commit("setProcessing",!0),this.$store.dispatch("SetUserName",this.username).then((function(){e.$store.commit("setProcessing",!1),e.$store.dispatch("Confirmation","Username changed successfully")}))}else this.$refs.nameInput.focus();this.editingName=!this.editingName},cancelNameEdit:function(){this.username=this.user.username,this.editingName=!1},addContact:function(){var e=Object(he["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.commit("setProcessing",!0),e.prev=1,e.next=4,this.$store.dispatch("AddContact",this.newContact);case 4:return e.next=6,this.$store.dispatch("GetContacts");case 6:this.$store.commit("setProcessing",!1),this.$store.dispatch("Confirmation","Contact added successfully"),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),this.$store.commit("setProcessing",!1),this.$store.dispatch("Confirmation","Not a valid contact");case 14:this.newContact="",this.addContactPopup=!1;case 16:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(){return e.apply(this,arguments)}return t}(),addConversation:function(){var e=Object(he["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("MakeConversation",{name:this.newConvo.name,contacts:this.newConvo.members});case 2:return e.next=4,this.$store.dispatch("GetConversations");case 4:this.$store.dispatch("Confirmation","Conversation added successfully"),this.newConvo={name:"",members:[]},this.startConvoPopup=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),toggleFavorite:function(){var e=Object(he["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.favorite){e.next=6;break}return e.next=3,this.$store.dispatch("RemoveFavorite",t.email);case 3:this.$store.dispatch("Confirmation",t.username+" unfavorited"),e.next=9;break;case 6:return e.next=8,this.$store.dispatch("MakeFavorite",t.email);case 8:this.$store.dispatch("Confirmation",t.username+" favorited");case 9:return e.next=11,this.$store.dispatch("GetContacts");case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){this.$store.dispatch("GetContacts"),this.$store.dispatch("GetConversations")},created:function(){this.username=this.user.username}};n("cb18");const we=f()(ge,[["render",be],["__scopeId","data-v-28f993c1"]]);var Ce=we,ye=(n("4e82"),n("159b"),n("a434"),n("7338")),ke=n.n(ye),xe={windowHeight:null,windowWidth:null,processing:!1,confirmations:[],user:{email:null,username:null},contacts:[],conversations:[],currentConvo:0},Re={Confirmations:function(e){return e.confirmations},Processing:function(e){return e.processing},WindowHeight:function(e){return e.windowHeight},WindowWidth:function(e){return e.windowWidth},User:function(e){return e.user},Contacts:function(e){return e.contacts},Conversations:function(e){return e.conversations},CurrentConvo:function(e){return e.currentConvo}},$e={Confirmation:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,a=Math.floor(1e8*Math.random()),r("addConfirmation",{id:a,message:t}),setTimeout((function(){r("removeConfirmation",a)}),2e3);case 4:case"end":return n.stop()}}),n)})))()},Create:function(){return Object(he["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.a.get("create");case 2:case"end":return e.stop()}}),e)})))()},RegisterUser:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,ke.a.post("register",{email:t.email,password:t.password,username:t.username}).then((function(e){if("Success"!==e.data)throw e.data;r("setUser",{username:t.username,email:t.email})}));case 3:case"end":return n.stop()}}),n)})))()},Login:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,ke.a.post("login",{email:t.user,password:t.password,username:t.user}).then((function(e){if("No User"===e.data)throw e.data;r("setUser",{username:e.data.username,email:e.data.email})}));case 3:case"end":return n.stop()}}),n)})))()},SetUserName:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,e.getters,n.next=3,ke.a.post("changeUsername",{email:xe.user.email,username:t});case 3:r("setUser",{email:xe.user.email,username:t});case 4:case"end":return n.stop()}}),n)})))()},GetContacts:function(e){return Object(he["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ke.a.post("getContacts",{email:xe.user.email}).then((function(e){"Internal Server Error"===e.data?console.log("Internal Server Error"):n("setContacts",e.data.data.sort((function(e,t){return e.email<t.email?-1:e.email>t.email?1:0})))}));case 3:case"end":return t.stop()}}),t)})))()},AddContact:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.a.post("addContact",{user_email:xe.user.email,contact_email:t}).then((function(e){if("Success"!==e.data)throw"Error"}));case 2:case"end":return e.stop()}}),e)})))()},MakeFavorite:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.a.post("makeFavorite",{user_email:xe.user.email,contact_email:t}).then((function(e){if("Success"!==e.data)throw"Error"}));case 2:case"end":return e.stop()}}),e)})))()},RemoveFavorite:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.a.post("removeFavorite",{user_email:xe.user.email,contact_email:t}).then((function(e){if("Success"!==e.data)throw"Error"}));case 2:case"end":return e.stop()}}),e)})))()},GetConversations:function(e){return Object(he["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ke.a.post("getConversations",{email:xe.user.email}).then((function(e){if("Internal Server Error"===e.data)console.log("Internal Server Error");else{var t=[];e.data.data.forEach((function(e){var n=e.creator_email,r=xe.contacts.filter((function(t){return t.email===e.creator_email}));r.length>0&&(n=r[0]);var a=e.users;a.forEach((function(e){var t=xe.contacts.filter((function(t){return t.email===e}));t.length>0&&(e=t[0])})),t.push({name:e.conversation_name,id:e.conversation_id,creator:n,users:a})})),n("setConversations",t.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})))}}));case 3:case"end":return t.stop()}}),t)})))()},MakeConversation:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.name,r=t.contacts,e.next=3,ke.a.post("makeConversation",{conversation_name:n,creator_name:xe.user.email,contacts:r}).then((function(e){if("Success"!==e.data)throw"Error"}));case 3:case"end":return e.stop()}}),e)})))()}},Pe={setProcessing:function(e,t){e.processing=t},addConfirmation:function(e,t){e.confirmations.push(t)},removeConfirmation:function(e,t){for(var n=0;n<e.confirmations.length;n++)if(e.confirmations[n].id===t){e.confirmations.splice(n,1);break}},setWindowHeight:function(e){e.windowHeight=window.innerHeight},setWindowWidth:function(e){e.windowWidth=window.innerWidth},setUser:function(e,t){e.user={email:t.email,username:t.username}},logOut:function(e){e.user={email:null,username:null}},setContacts:function(e,t){e.contacts=t},setConversations:function(e,t){e.conversations=t},setCurrentConvo:function(e,t){e.currentConvo=t}},Ee={state:xe,getters:Re,actions:$e,mutations:Pe},Ne=Object(je["a"])({modules:{store:Ee}}),_e=[{path:"/",name:"Home",component:Ce,meta:{requiresAuth:!0}},{path:"/conversations",name:"Conversations",component:function(){return n.e("about").then(n.bind(null,"db80"))},meta:{requiresAuth:!0}},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"293a"))},meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"73cf"))},meta:{requiresAuth:!1}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))},meta:{requiresAuth:!1}}],Se=Object(p["a"])({history:Object(p["b"])(),routes:_e});Se.beforeEach((function(e,t,n){var r=Ne.getters.User;e.meta.requiresAuth&&null===r.email?n("/login"):n()}));var Ue=Se;ke.a.defaults.baseURL="http://"+location.host.split(":")[0]+":3000/",Object(r["c"])(m).use(Ne).use(Ue).mount("#app")},7088:function(e,t,n){"use strict";var r=n("7a23"),a=function(e){return Object(r["v"])("data-v-23297597"),e=e(),Object(r["t"])(),e},o={key:0,id:"user-container"},c=a((function(){return Object(r["f"])("div",{class:"img avatar"},[Object(r["f"])("i",{class:"fa fa-user-circle-o","aria-hidden":"true"})],-1)})),i={class:"text"},s={id:"user-menu"},u=a((function(){return Object(r["f"])("i",{class:"fa fa-list-ul","aria-hidden":"true"},null,-1)})),l=a((function(){return Object(r["f"])("div",{class:"text",style:{"font-size":"14px"}},"Conversations",-1)})),f=[u,l],d=a((function(){return Object(r["f"])("i",{class:"fa fa-power-off","aria-hidden":"true"},null,-1)})),m=a((function(){return Object(r["f"])("div",{class:"text"},"Logout",-1)})),p=[d,m];function b(e,t,n,a,u,l){return e.$store.getters.WindowWidth>700?(Object(r["s"])(),Object(r["e"])("div",o,[Object(r["f"])("div",{id:"user",onClick:t[0]||(t[0]=function(e){return l.navigate("")})},[c,Object(r["f"])("div",i,Object(r["B"])(e.user.username),1)]),Object(r["f"])("div",s,[Object(r["f"])("div",{class:"link-button",onClick:t[1]||(t[1]=function(e){return l.navigate("conversations")})},f),Object(r["f"])("div",{class:"link-button",onClick:t[2]||(t[2]=function(){return l.logOut&&l.logOut.apply(l,arguments)})},p)])])):Object(r["d"])("",!0)}var h=n("1da1"),v=n("5530"),O=(n("96cf"),n("5502")),j={name:"User",computed:Object(v["a"])({},Object(O["b"])({user:"User"})),methods:{navigate:function(e){this.$router.push("/"+e)},logOut:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.commit("logOut");case 2:return t.next=4,e.$router.push("/login");case 4:case"end":return t.stop()}}),t)})))()}}},g=(n("7d7c"),n("6b0d")),w=n.n(g);const C=w()(j,[["render",b],["__scopeId","data-v-23297597"]]);t["a"]=C},"7d7c":function(e,t,n){"use strict";n("135f")},a4e3:function(e,t,n){"use strict";n("44c7")},cb18:function(e,t,n){"use strict";n("4962")}});
//# sourceMappingURL=app.5f035bc5.js.map