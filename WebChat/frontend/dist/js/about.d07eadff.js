(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),a=n("da84"),s=n("c65b"),o=n("e330"),i=n("1626"),c=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=a.Error,f=o(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!i(t))return f(this,e);var n=s(t,this,e);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"2a29":function(e,t,n){},"312a":function(e,t,n){},"655a":function(e,t,n){"use strict";n("2a29")},"73cf":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["w"])("data-v-587218af"),e=e(),Object(r["u"])(),e},s={class:"content"},o=a((function(){return Object(r["g"])("h2",null,"Register",-1)})),i={class:"form"},c=a((function(){return Object(r["g"])("label",{for:"email"},"Email:",-1)})),u=a((function(){return Object(r["g"])("label",{for:"username"},"Username:",-1)})),l=a((function(){return Object(r["g"])("label",{for:"password"},"Password:",-1)})),f={id:"pass-confirm-div"},b=a((function(){return Object(r["g"])("label",{for:"pass-confirm"},"Confirm Password:",-1)})),d={class:"login"},p=Object(r["h"])("Already have an account? "),m=Object(r["h"])("Log in here"),g=Object(r["h"])(".");function j(e,t,n,a,j,O){var h=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["f"])("div",{class:"container",onKeyup:t[5]||(t[5]=Object(r["I"])((function(){return O.postRegister&&O.postRegister.apply(O,arguments)}),["enter"])),style:Object(r["p"])({height:e.$store.getters.WindowHeight+"px"})},[Object(r["g"])("div",s,[o,Object(r["g"])("div",i,[Object(r["g"])("form",null,[Object(r["g"])("div",null,[c,Object(r["H"])(Object(r["g"])("input",{type:"text",name:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return j.form.email=e})},null,512),[[r["E"],j.form.email]])]),Object(r["g"])("div",null,[u,Object(r["H"])(Object(r["g"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":t[1]||(t[1]=function(e){return j.form.username=e})},null,512),[[r["E"],j.form.username]])]),Object(r["g"])("div",null,[l,Object(r["H"])(Object(r["g"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return j.form.password=e})},null,512),[[r["E"],j.form.password]])]),Object(r["g"])("div",f,[b,Object(r["H"])(Object(r["g"])("input",{type:"password",name:"pass-confirm",id:"pass-confirm","onUpdate:modelValue":t[3]||(t[3]=function(e){return j.passConfirm=e})},null,512),[[r["E"],j.passConfirm]])])]),Object(r["g"])("button",{type:"submit",onClick:t[4]||(t[4]=function(){return O.postRegister&&O.postRegister.apply(O,arguments)})}," Submit")])]),Object(r["g"])("div",d,[Object(r["g"])("h6",null,[p,Object(r["i"])(h,{to:"/login",class:"link"},{default:Object(r["G"])((function(){return[m]})),_:1}),g])])],36)}var O=n("1da1"),h=(n("96cf"),n("ac1f"),n("00b4"),{name:"Register",data:function(){return{form:{email:"",username:"",password:""},passConfirm:""}},methods:{postRegister:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.form.email&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.form.email)){e.next=4;break}window.alert("Please enter a valid email"),e.next=22;break;case 4:if(""!==this.form.username){e.next=8;break}window.alert("Please enter a username"),e.next=22;break;case 8:if(this.form.password===this.passConfirm){e.next=12;break}window.alert("Please make sure your password matches your confirmation password"),e.next=22;break;case 12:return e.prev=12,e.next=15,this.$store.dispatch("registerUser",this.form);case 15:return e.next=17,this.$router.push("/");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](12),window.alert(e.t0);case 22:case"end":return e.stop()}}),e,this,[[12,19]])})));function t(){return e.apply(this,arguments)}return t}()}}),w=(n("82b2"),n("6b0d")),v=n.n(w);const x=v()(h,[["render",j],["__scopeId","data-v-587218af"]]);t["default"]=x},"82b2":function(e,t,n){"use strict";n("312a")},a55b:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["w"])("data-v-739d0a9f"),e=e(),Object(r["u"])(),e},s={class:"content"},o=a((function(){return Object(r["g"])("h2",null,"Login",-1)})),i={class:"form"},c=a((function(){return Object(r["g"])("label",{for:"email"},"Email/Username:",-1)})),u=a((function(){return Object(r["g"])("label",{for:"password"},"Password:",-1)})),l={class:"register"},f=Object(r["h"])("Don't have an account? "),b=Object(r["h"])("Register here"),d=Object(r["h"])(".");function p(e,t,n,a,p,m){var g=Object(r["A"])("router-link");return Object(r["t"])(),Object(r["f"])("div",{class:"container",onKeyup:t[3]||(t[3]=Object(r["I"])((function(){return m.postLogin&&m.postLogin.apply(m,arguments)}),["enter"])),style:Object(r["p"])({height:e.$store.getters.WindowHeight+"px"})},[Object(r["g"])("div",s,[o,Object(r["g"])("div",i,[Object(r["g"])("div",null,[c,Object(r["H"])(Object(r["g"])("input",{type:"text",name:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.form.user=e})},null,512),[[r["E"],p.form.user]])]),Object(r["g"])("div",null,[u,Object(r["H"])(Object(r["g"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.form.password=e})},null,512),[[r["E"],p.form.password]])]),Object(r["g"])("button",{type:"submit",onClick:t[2]||(t[2]=function(){return m.postLogin&&m.postLogin.apply(m,arguments)})}," Submit")])]),Object(r["g"])("div",l,[Object(r["g"])("h6",null,[f,Object(r["i"])(g,{to:"/register",class:"link"},{default:Object(r["G"])((function(){return[b]})),_:1}),d])])],36)}var m=n("1da1"),g=(n("96cf"),n("7338"),{name:"Register",data:function(){return{form:{user:"",password:""}}},methods:{postLogin:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("login",this.form);case 3:return e.next=5,this.$router.push("/");case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),window.alert(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}}),j=(n("655a"),n("6b0d")),O=n.n(j);const h=O()(g,[["render",p],["__scopeId","data-v-739d0a9f"]]);t["default"]=h},f820:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"about"},s=Object(r["g"])("h1",null,"This is an about page",-1),o=[s];function i(e,t){return Object(r["t"])(),Object(r["f"])("div",a,o)}var c=n("6b0d"),u=n.n(c);const l={},f=u()(l,[["render",i]]);t["default"]=f}}]);
//# sourceMappingURL=about.d07eadff.js.map