(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~f71cff67"],{2719:function(t,e,a){},"4f0d":function(t,e,a){"use strict";var s=a("ea4d"),r=a.n(s);r.a},"5bc7":function(t,e,a){"use strict";var s=a("2719"),r=a.n(s);r.a},6724:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",{attrs:{"align-v":"start","align-h":"center","no-gutters":""}},[a("b-col",{staticClass:"p-0 m-0",attrs:{cols:"12"}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{staticClass:"relative imgWrapper",class:"development"==t.env?"devBackground":"background"},[a("b-row",{attrs:{"no-gutters":"","align-h":"center"}},[a("b-col",{staticClass:"absolute bgYellow center t-0 p-2 p-md-3",attrs:{id:"titleCard",cols:"11",md:"8",lg:"6"}},[a("p",{staticClass:"h1 white center"},[t._v("Watch SOC")]),a("p",{staticClass:"h2 m-h2 white center"},[t._v("Manage your current, past & future "),a("strong",{staticClass:"nowrap"},[t._v("Watch SOC")])])])],1)],1)],1)],1),a("b-col",{staticClass:"bg-white",class:t.isShowingAlert?"alert-wrapper":"wrapper",attrs:{cols:"12"}},[a("b-row",{staticClass:"m-0 p-0",attrs:{"no-gutters":"","align-v":"start"}},[a("b-col",{staticClass:"my-0 bg-white h-100",attrs:{cols:"12",md:"6"}},[t.isRegister?t._e():a("p",{staticClass:" h3 my-0 py-2 p-1 p-md-2 bg-light-blue white left"},[t._v("Register to"),a("span",{staticClass:"nowrap left"},[t._v(" Manage your collection!")])]),t.isRegister?a("p",{staticClass:" h3 my-0 py-2 p-1 p-md-2 bg-light-blue white left"},[t._v("Login to"),a("span",{staticClass:"nowrap left"},[t._v(" Manage your collection!")])]):t._e(),t.isRegister?t._e():a("app-register",{staticClass:"mt-2 px-md-3 px-lg-0",on:{ToggleShowingAlert:t.showingAlertChangeHeight,toggleAuthView:t.toggleAuthParent}}),t.isRegister?a("app-login",{staticClass:"mt-2 px-md-3 px-lg-0",on:{ToggleShowingAlert:t.showingAlertChangeHeight,toggleAuthView:t.toggleAuthParent}}):t._e()],1),a("b-col",{staticClass:"d-none d-md-block bgBlue h-100 m-0 p-2",class:t.isShowingAlert?"lineHeightAlert":"lineHeight",attrs:{cols:"12",md:"6"}},[a("ul",{staticClass:"mt-0 pl-md-0 pl-lg-4 nowrap"},[a("li",[t._v("Always keep your Collection with you")]),a("li",[t._v("Add, edit & remove Watches")]),a("li",[t._v("Manage sales, trades & acquisitions")]),a("li",[t._v("Randomize today's timepiece")]),a("li",[t._v("Discover new watches & brands")]),a("li",[t._v("Learn what your WOTD is today!")])])])],1)],1),a("b-col",{attrs:{cols:"12"}},[a("featured-collection",{staticClass:"h-100"})],1)],1)],1)},r=[],i=(a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{staticClass:"mx-auto",attrs:{cols:"11"}},[t.showAlert?a("b-alert",{staticClass:"py-1 py-md-0 my-1",attrs:{show:"",variant:t.responseStyle}},[t._v(t._s(t.responseMessage)+" "),t.isRefreshPage?a("em",{on:{click:t.reloadPage}},[t._v(" - Try Again")]):t._e()]):t._e(),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[1==t.card?a("b-form-group",{staticClass:"mt-md-2",attrs:{id:"email",label:"Email:","label-for":"Email",description:"We'll never share your email with anyone."}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",autocomplete:"off",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",placeholder:"Start with an email"},on:{input:function(e){t.validateEmail(t.form.email)}},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1):t._e(),1==t.card?a("b-form-group",{staticClass:"mt-md-3",attrs:{id:"password",label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:"",autocomplete:"off",placeholder:"Create a password"},on:{input:function(e){t.validatePassword(t.form.password)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),2==t.card?a("b-form-group",{staticClass:"mt-md-2",attrs:{id:"names",label:"First Name:","label-for":"First Name",description:"First Name"}},[a("b-form-input",{attrs:{id:"firstName",type:"text",required:"",autocomplete:"off",placeholder:"First Name"},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}})],1):t._e(),2==t.card?a("b-form-group",{staticClass:"mt-md-3",attrs:{id:"credentials",label:"Last Name:","label-for":"lastName"}},[a("b-form-input",{attrs:{id:"password",type:"text",required:"",autocomplete:"off",placeholder:"Last Name"},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}})],1):t._e(),a("h6",{staticClass:"red thin h7"},[t._v(t._s(t.passwordErrMsg))]),a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"4"}},[1==t.card?a("b-button",{staticClass:"bg-navy white",attrs:{variant:"default",disabled:t.form.password.length<4},on:{click:function(e){t.card=2}}},[t._v("Continue")]):t._e(),2==t.card?a("b-button",{staticClass:"bg-navy white",attrs:{variant:"default",disabled:!t.form.firstName||!t.form.lastName,type:"submit"}},[t._v("Finish")]):t._e()],1),a("b-col",{staticClass:"right-align",attrs:{cols:"8"}},[a("p",{staticClass:"h8 m-1"},[t._v("Already a user? "),a("span",{staticClass:"link nowrap",on:{click:t.toggleAuthChild}},[t._v("Login Here")])])])],1)],1)],1)],1)],1)}),o=[],l=(a("bc3a"),{name:"register",data:function(){return{ROOT_API:"",form:{email:"",firstName:"",lastName:"",password:""},card:1,showAlert:!1,responseMessage:"",responseStyle:"light",isRefreshPage:!1,showForm:!0,passwordErrMsg:"",formValid:!0}},methods:{onSubmit:function(){var t=this;this.showAlert=!1,this.form.email.toLowerCase(),this.$store.dispatch("register",this.form).then(function(e){e.isSuccess?(t.$store.dispatch("sendWelcomeEmail",t.form),t.$router.push({path:"/profile"})):(t.showAlert=!0,t.responseMessage=e.message,t.responseStyle="danger",t.isRefreshPage=e.isRefreshPage,t.$emit("ToggleShowingAlert",!0))}).catch(function(e){t.showAlert=!0,t.responseMessage=e.message,t.responseStyle="danger",t.$emit("ToggleShowingAlert",!0)})},toggleAuthChild:function(){this.$emit("ToggleShowingAlert",!1),this.$emit("toggleAuthView")},validateEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!e.test(t)||(this.form.password="",e.test(t))},validatePassword:function(t){return t.length<4?(this.passwordErrMsg="Password must be at least 4 characters",!1):(this.passwordErrMsg="",!0)},validateNames:function(t,e){return!(!t.length||!e.length)},reloadPage:function(){location.reload()}}}),n=l,c=(a("4f0d"),a("2877")),m=Object(c["a"])(n,i,o,!1,null,"1a278978",null);m.options.__file="Register.vue";var d=m.exports,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{staticClass:"mx-auto",attrs:{cols:"11"}},[t.showAlert?a("b-alert",{staticClass:"p-1 my-md-0",attrs:{show:"",variant:t.responseStyle}},[t._v(t._s(t.responseMessage))]):t._e(),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("b-form-group",{staticClass:"mt-md-2",attrs:{label:"Email:","label-for":"email",description:"We still aren't sharing your email with anyone!"}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",autocomplete:"off",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{staticClass:"mt-md-3",attrs:{id:"exampleInputGroup2",label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:"",autocomplete:"off",placeholder:"Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"4"}},[a("b-button",{staticClass:"bg-navy white",attrs:{type:"submit",variant:"default",disabled:!t.form.email||!t.form.password}},[t._v("Submit")])],1),a("b-col",{staticClass:"right-align",attrs:{cols:"8"}},[a("p",{staticClass:"h8 m-1"},[t._v("Not a user? "),a("span",{staticClass:"link nowrap",on:{click:t.toggleAuthChild}},[t._v("Register Here")])])])],1)],1)],1)],1)],1)},h=[],p={data:function(){return{form:{email:"",password:""},showAlert:!1,responseMessage:"Login Here!",responseStyle:"light"}},methods:{onSubmit:function(){var t=this;this.showAlert=!1,console.log("submitting",this.form),this.$store.dispatch("login",this.form).then(function(e){e.isSuccess?(t.$router.push({path:"/profile"}),t.showAlert=!1):(t.showAlert=!0,t.responseStyle="danger",t.$emit("ToggleShowingAlert",!0),t.responseMessage=e.message)})},toggleAuthChild:function(){this.$emit("ToggleShowingAlert",!1),this.$emit("toggleAuthView")}}},g=p,f=(a("be56"),Object(c["a"])(g,u,h,!1,null,"0d153a4d",null));f.options.__file="Login.vue";var w=f.exports,b=a("f69a"),v={components:{appRegister:d,appLogin:w,featuredCollection:b["a"]},data:function(){return{ROOT_API:"",selectedWatch:{},showLogin:!1,env:"production",isRegister:!0,isShowingAlert:!1}},methods:{toggleAuthParent:function(){return this.isRegister=!this.isRegister},isValidToken:function(){return this.$store.state.isAuthorized},showingAlertChangeHeight:function(t){this.isShowingAlert=t}}},C=v,_=(a("dba5"),Object(c["a"])(C,s,r,!1,null,"5ec2bf38",null));_.options.__file="Home.vue";e["a"]=_.exports},a534:function(t,e,a){},be56:function(t,e,a){"use strict";var s=a("ffe0"),r=a.n(s);r.a},dba5:function(t,e,a){"use strict";var s=a("a534"),r=a.n(s);r.a},ea4d:function(t,e,a){},f0f7:function(t,e,a){},f69a:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{class:"development"==t.env?"devBackgroundFeatured":"backgroundFeatured",attrs:{fluid:""}},[a("b-row",{attrs:{"no-gutters":""}},[a("p",{staticClass:"bg-light-blue p-1 p-lg-2 white h2 m-h1 nowrap w-100"},[a("strong",[t._v("Featured Collection")])]),a("b-col",{staticClass:"mt-lg-1",attrs:{cols:"12"}},[a("b-row",{attrs:{"no-gutters":""}},t._l(t.FeaturedWatches,function(e){return a("b-col",{key:e.id,staticClass:"pointer px-1 watchCard my-0 mb-0 mb-md-2 mb-lg-3",attrs:{cols:"6",md:"4"},on:{click:function(a){t.selectWatch(e)}}},[a("b-row",{staticClass:"bg-white",attrs:{"align-v":"start","align-h":"center","no-gutters":""}},[a("b-col",{staticClass:"p-1 bg-white watchImgWrapper center",attrs:{cols:"12"}},[a("b-img",{staticClass:"watchImg",attrs:{src:t.ROOT_API+e.src.images[0].src},on:{click:function(a){t.selectWatch(e)}}})],1),a("b-col",{staticClass:"mx-auto p-1 bg-white-opaque",attrs:{cols:"12"}},[a("p",{staticClass:"my-0 h5 m-h2"},[a("strong",[t._v(t._s(e.brand))])]),a("p",{staticClass:"watchName my-0"},[t._v(t._s(e.name))])]),a("b-col",{attrs:{cols:"12 center bg-white-opaque my-0 pt-1 watchLogoWrapper"}},[a("b-img",{staticClass:"watchLogo mx-auto p-2 p-md-2 p-lg-3",attrs:{id:"brandLogo",src:t.ROOT_API+e.logoSrc_lg}})],1)],1)],1)}))],1)],1),a("b-modal",{ref:"seeFeaturedWatchModal",attrs:{title:t.selectedWatch.name}},[a("app-see-more",{attrs:{selectedWatch:t.selectedWatch}}),a("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[t.selectedWatch.isFeaturedWatch?a("b-btn",{attrs:{variant:"info",target:"_blank",href:t.selectedWatch.siteLink}},[t._v("\n                Learn More\n            ")]):t._e(),a("b-btn",{staticClass:"float-right",attrs:{size:"",variant:"primary"},on:{click:t.closeFeaturedWatchModel}},[t._v("\n                OK\n            ")])],1)],1)],1)},r=[],i=(a("cadf"),a("551c"),a("097d"),a("442b")),o={name:"featuredCollection",components:{appSeeMore:i["a"]},data:function(){return{selectedWatch:{},ROOT_API:"",env:"production",TITLE:"Watch SOC",FeaturedWatches:[{id:1,src:{images:[{src:"/api/static-assets/oc-featured.jpg",order:1}]},brand:"Ocean Crawler",siteLink:"https://www.oceancrawler.com/",name:"Champion Diver",movementType:"Automatic",movement:"OC729 (Modified Seiko 4R36b)",sizeWidth:"44mm",sizeHeight:"15mm",sizeLugToLug:"22mm",accuracy:"+/- 5",crystal:"Sapphire",watchStyle:"Diver",waterResistance:"300m",Features:["Shock resistance to 6000 G","Rotating Bezel with 120 Clicks and Swiss SuperLuminova Marker","Guaranteed to keep precise time for at least 5 years"],logoSrc_lg:"/api/static-assets/oc-logo_lg.png",isFeaturedWatch:!0},{id:2,src:{images:[{src:"/api/static-assets/aragon-featured.jpg",order:2}]},brand:"Aragon",siteLink:"https://www.aragonwatch.com/",name:"Aragon Virtuoso",movementType:"Automatic",movement:"Valjoux 7750 Chronograph",sizeWidth:"48mm",sizeHeight:"18mm",sizeLugToLug:"24mm",crystal:"Sapphire",watchStyle:"Chronograph",waterResistance:"1000m",Features:["Push Button Dual Deployant Clasp","Titanium case","Helium Valve","Limited Edition to 100 Units"],logoSrc_lg:"/api/static-assets/aragon_lg.jpg",isFeaturedWatch:!0},{id:3,src:{images:[{src:"/api/static-assets/ch-ward-featured.jpg",order:3}]},brand:"Christopher Ward",siteLink:"https://www.christopherward.com/",name:"C60 Trident Pro",movementType:"Automatic",movement:"Sellita SW200-1",sizeWidth:"43mm",sizeHeight:"13mm",sizeLugToLug:"22mm",crystal:"Sapphire",watchStyle:"Diver",waterResistance:"600m",accuracy:"+/- 20",Features:["316L Stainless steel","SuperLuminova SLN-T-C1","Guilloche wave pattern dial","Signature Trident counter-balance on seconds hand","38 hour power reserve","Unidirectional zirconia ceramic bezel"],logoSrc_lg:"/api/static-assets/ch-ward.png",isFeaturedWatch:!0},{id:4,src:{images:[{src:"/api/static-assets/zelos-featured.jpg",order:4}]},brand:"Zelos",siteLink:"https://zeloswatches.com/",name:"Hammerhead",movementType:"Automatic",movement:"Seiko NH35",sizeWidth:"44mm",sizeHeight:"17mm",sizeLugToLug:"22mm",crystal:"Sapphire",watchStyle:"Diver",waterResistance:"1000m",Features:["Titanium Case and Bracelet","Double domed Sapphire with inner AR coating","C3 Lumed Screw Down Crown","C3 and BGW9 Lumed Bezel, Dial and Hands","120 Click Unidirectional bezel"],logoSrc_lg:"/api/static-assets/zelos_lg.png",isFeaturedWatch:!0},{id:5,src:{images:[{src:"/api/static-assets/tcm-featured.jpg",order:5}]},brand:"Terra Cielo Mare",siteLink:"https://www.terracielomare.com/",name:"Orienteering BP",movementType:"Automatic",movement:"ETA 2824-2",sizeWidth:"44mm",sizeHeight:"14mm",sizeLugToLug:"22mm",crystal:"Sapphire",watchStyle:"Diver",waterResistance:"100m",Features:["Solar compass function","Titanium medallion caseback","Grade 2 titanium case with through screws","Strap in English leather","Handcrafted in Italy"],logoSrc_lg:"/api/static-assets/tcm_lg.png",isFeaturedWatch:!0},{id:6,src:{images:[{src:"/api/static-assets/tcm-white-featured.jpg",order:6}]},brand:"Terra Cielo Mare",siteLink:"https://www.terracielomare.com/",name:"Orienteering El Alamein",movementType:"Automatic",movement:"ETA 2824-2",sizeWidth:"44mm",sizeHeight:"14mm",sizeLugToLug:"22mm",crystal:"Sapphire",watchStyle:"Diver",waterResistance:"100m",Features:["Solar compass function","Titanium medallion caseback","Grade 2 titanium case with through screws","Strap in English leather","Handcrafted in Italy"],logoSrc_lg:"/api/static-assets/tcm_lg.png",isFeaturedWatch:!0}]}},methods:{selectWatch:function(t){this.selectedWatch=t,this.$refs.seeFeaturedWatchModal.show(),this.$ga.event({eventCategory:"Advertising",eventAction:"Featured_Collection_Advertisement_Click",eventLabel:"Featured Watch + See More Modal",eventValue:t.id})},closeFeaturedWatchModel:function(){this.$refs.seeFeaturedWatchModal.hide()}}},l=o,n=(a("5bc7"),a("2877")),c=Object(n["a"])(l,s,r,!1,null,"e78aece0",null);c.options.__file="FeaturedCollection.vue";e["a"]=c.exports},ffe0:function(t,e,a){}}]);