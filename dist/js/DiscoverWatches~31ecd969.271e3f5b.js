(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiscoverWatches~31ecd969"],{"11f1":function(t,s,a){},3375:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-container",{class:"development"==t.env?"devBackground":"background",attrs:{fluid:""}},[a("b-row",{attrs:{"no-gutters":"","align-h":"center"}},[a("b-col",{staticClass:"p-0 mt-0",attrs:{cols:"12"}},[a("featured-collection",{staticClass:"h-100"})],1),a("b-col",{staticClass:"infoBox bg-black white op-4 p-2 p-md-4",attrs:{cols:"12"}},[a("b-row",{attrs:{"no-gutters":""}},[a("p",{staticClass:"ml-md-1 h4 w-100"},[t._v("Learn About Our Featured Brands")]),a("b-col",[a("b-btn",{staticClass:"btn bg-slate m-1",attrs:{rounded:""},on:{click:function(s){t.getWatchInfoById(1)}}},[t._v("Ocean Crawler")]),a("b-btn",{staticClass:"btn bg-slate m-1",attrs:{rounded:""},on:{click:function(s){t.getWatchInfoById(2)}}},[t._v("Aragon")]),a("b-btn",{staticClass:"btn bg-slate m-1",attrs:{rounded:""},on:{click:function(s){t.getWatchInfoById(3)}}},[t._v("Christopher Ward")]),a("b-btn",{staticClass:"btn bg-slate m-1",attrs:{rounded:""},on:{click:function(s){t.getWatchInfoById(4)}}},[t._v("Zelos")]),a("b-btn",{staticClass:"btn bg-slate m-1",attrs:{rounded:""},on:{click:function(s){t.getWatchInfoById(5)}}},[t._v("Terra Cielo Mare")])],1)],1),a("b-row",{staticClass:"p-3",attrs:{"no-gutters":""}},[a("b-col",{staticClass:"p-0"},[a("p",{staticClass:"h3"},[t._v(t._s(t.currentWatchInfo.brand))]),t.currentWatchInfo.siteLink?a("p",[a("a",{staticClass:"pointer",attrs:{target:"_blank",href:t.currentWatchInfo.siteLink}},[t._v("Shop "+t._s(t.currentWatchInfo.brand))])]):t._e(),t._l(t.currentWatchInfo.description,function(s,e){return a("p",{key:e},[t._v("\n                        "+t._s(s)+"\n                    ")])}),t.currentWatchInfo.siteLink?a("p",{staticClass:"h5 pointer"},[a("a",{attrs:{href:t.currentWatchInfo.siteLink,target:"_blank"}},[t._v("Learn More")])]):t._e(),t.currentWatchInfo.logoSrc?a("b-row",{staticClass:"mt-md-5",attrs:{"align-h":"center","no-gutters":""}},[a("b-col",{staticClass:"mx-auto mt-3 center",attrs:{cols:"5"}},[a("b-img",{staticClass:"center",attrs:{fluid:"",src:t.ROOT_API+t.currentWatchInfo.logoSrc}})],1)],1):t._e()],2)],1)],1)],1)],1)},c=[],r=a("f69a"),o={name:"discoverWatches",components:{featuredCollection:r["a"]},data:function(){return{env:"production",currentWatchInfo:{brand:"From Micro to Mega",description:["From micro brands up to the most prestigious watch brands today, we aim to offer the the background, reasoning and devotion that goes into the creation of our Featured Collection timepieces."]},ROOT_API:""}},methods:{getWatchInfoById:function(t){var s=this;this.$store.dispatch("getWatchInfoById",t).then(function(t){console.log("res",t),s.currentWatchInfo=t})}}},n=o,i=(a("5dd2"),a("2877")),l=Object(i["a"])(n,e,c,!1,null,"4888b0f2",null);l.options.__file="DiscoverWatches.vue";s["default"]=l.exports},"386d":function(t,s,a){"use strict";var e=a("cb7c"),c=a("83a1"),r=a("5f1b");a("214f")("search",1,function(t,s,a,o){return[function(a){var e=t(this),c=void 0==a?void 0:a[s];return void 0!==c?c.call(a,e):new RegExp(a)[s](String(e))},function(t){var s=o(a,t,this);if(s.done)return s.value;var n=e(t),i=String(this),l=n.lastIndex;c(l,0)||(n.lastIndex=0);var u=r(n,i);return c(n.lastIndex,l)||(n.lastIndex=l),null===u?-1:u.index}]})},4098:function(t,s,a){"use strict";var e=a("7527"),c=a.n(e);c.a},"5dd2":function(t,s,a){"use strict";var e=a("784e"),c=a.n(e);c.a},7527:function(t,s,a){},"784e":function(t,s,a){},"83a1":function(t,s){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t===1/s:t!=t&&s!=s}},"8ac3":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-container",{staticClass:"p-0 m-0",class:"development"==t.env?"devBackground":"background",attrs:{fluid:""}},[a("b-row",{attrs:{"no-gutters":"","align-v":"center"}},[a("b-col",{staticClass:"bg-lightgray mx-auto mt-3 mt-md-4 p-1",attrs:{id:"titleCard",cols:"11",md:"6"}},[a("p",{staticClass:"h2 white center"},[t._v("Watch Collecton")]),a("p",{staticClass:"h4 white center"},[t._v("Manage your current, past and future "),a("strong",[t._v("Watch SOC")])])]),a("b-col",{staticClass:"mx-auto my-3 p-0",attrs:{cols:"11",md:"8"}},[a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("Contact Us!")]),a("b-row",{attrs:{"no-gutters":""}},[t.showResMessage?a("p",{staticClass:"p-1 w-100 white center my-0",class:t.isResSuccess?"bg-green":"bg-red"},[t._v(t._s(t.resMessage))]):t._e(),a("b-form",{staticClass:"w-100",on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[a("b-col",{staticClass:"mt-2 p-0",attrs:{cols:"12"}},[a("em",[t._v("We love hearing from you!")]),a("p",{staticClass:"mt-2 mb-0"},[t._v("Your email here:")]),a("b-col",{staticClass:"p-0",attrs:{cols:"12",md:"8"}},[a("b-input-group",[a("b-input",{staticClass:"w-100 p-2 border",attrs:{type:"email",placeholder:"testemail@gmail.com"},model:{value:t.form.emailTo,callback:function(s){t.$set(t.form,"emailTo",s)},expression:"form.emailTo"}})],1)],1),a("p",{staticClass:"mt-3 mb-0"},[t._v("Your message here:")]),a("b-input-group",{staticClass:"p-0",attrs:{cols:"12"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.messageBody,expression:"form.messageBody"}],staticClass:"border w-100 p-2 mt-0",attrs:{placeholder:"I love using Watch SOC because...",name:"contactMessage",rows:"5"},domProps:{value:t.form.messageBody},on:{input:function(s){s.target.composing||t.$set(t.form,"messageBody",s.target.value)}}})])],1),a("b-col",{staticClass:"mt-2",attrs:{cols:"12"}},[a("b-btn",{staticClass:"right",attrs:{type:"submit",variant:"primary",disabled:!t.form.emailTol&&!t.form.messageBody}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)],1)},c=[],r=(a("cadf"),a("551c"),a("097d"),{name:"contactPage",data:function(){return{showResMessage:!1,isResSuccess:!1,env:"production",resMessage:"",form:{emailTo:"",messageBody:""}}},methods:{submit:function(){var t=this;this.$store.dispatch("contacUsEmail",this.form).then(function(s){t.showResMessage=!0,t.isResSuccess=s.isSuccess,t.resMessage=s.message}).catch(function(s){console.log(s),t.showResMessage=!0,t.isResSuccess=res.isSuccess,t.resMessage=res.message})}}}),o=r,n=(a("4098"),a("2877")),i=Object(n["a"])(o,e,c,!1,null,"19beb164",null);i.options.__file="ContactPage.vue";s["default"]=i.exports},"8c6a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.hasWatchToShow?a("b-container",{attrs:{fluid:""}},[t.hasWatchToShow?a("b-row",{staticClass:"white pt-2 pt-md-4",attrs:{"no-gutters":"","align-h":"center","align-v":"start"}},[a("b-col",{staticClass:"order-2 order-md-1",attrs:{cols:"12",md:"6"}},[a("b-row",{staticClass:"mx-auto left-align pl-md-4",attrs:{"no-gutters":"","align-h":"center"}},[a("b-col",{staticClass:"px-2 center mx-auto",attrs:{cols:"12"}},[a("p",{staticClass:"h2 underline mb-3"},[t._v("Viewing "+t._s(t.watch.firstName)+"'s Watch")])]),a("b-col",{staticClass:"px-2 my-2 center mx-auto",attrs:{cols:"12"}},[a("b-col",{staticClass:"bg-lightgray p-0 py-2 rounded",attrs:{cols:"12",md:"6"}},[a("p",[a("strong",[t._v("Full Kit:")]),t._v(" "+t._s(t.watch.isFullKit?"Yes":"No"))]),a("p",[a("strong",[t._v("For Sale:")]),t._v(" "+t._s(t.watch.isForSale?"Yes":"No"))]),a("p",[a("strong",[t._v("For Trade:")]),t._v(" "+t._s(t.watch.isForTrade?"Yes":"No"))])])],1),a("b-col",{staticClass:"px-2 center mx-auto",attrs:{cols:"12"}},[t.watch.brand?a("p",[a("strong",[t._v("Brand:")]),t._v(" "+t._s(t.watch.brand))]):t._e(),a("p",[a("strong",[t._v("Name:")]),t._v(" "+t._s(t.watch.name))])]),a("b-col",{staticClass:"px-2 center mx-auto",attrs:{cols:"12"}},[t.watch.condition?a("p",[a("strong",[t._v("Condition:")]),t._v(" "+t._s(t.watch.condition)+" / 10")]):t._e(),t.watch.watchStyle?a("p",[a("strong",[t._v("Style:")]),t._v(" "+t._s(t.watch.watchStyle))]):t._e(),t.watch.sizeWidth?a("p",[a("strong",[t._v("Case Width:")]),t._v(" "+t._s(t.watch.sizeWidth)+"mm")]):t._e(),t.watch.sizeLugToLug?a("p",[a("strong",[t._v("Lug Size:")]),t._v(" "+t._s(t.watch.sizeLugToLug)+"mm")]):t._e(),t.watch.movementType?a("p",[a("strong",[t._v("Movement Type:")]),t._v(" "+t._s(t.watch.movementType))]):t._e(),t.watch.movement?a("p",[a("strong",[t._v("Movement:")]),t._v(" "+t._s(t.watch.movement))]):t._e(),t.watch.crystal?a("p",[a("strong",[t._v("Crystal:")]),t._v(" "+t._s(t.watch.crystal))]):t._e(),t.watch.accuracy?a("p",[a("strong",[t._v("Accuracy:")]),t._v(" "+t._s(t.watch.accuracy)+"+/- seconds")]):t._e(),t.watch.band?a("p",[a("strong",[t._v("Strap:")]),t._v(" "+t._s(t.watch.band))]):t._e(),t.watch.crystal?a("p",[a("strong",[t._v("Crystal:")]),t._v(" "+t._s(t.watch.crystal))]):t._e()])],1)],1),a("b-col",{staticClass:"center mx-auto order-1 order-md-2",attrs:{cols:"12",md:"6"}},[a("b-carousel",{staticStyle:{"text-align":"center"},attrs:{interval:0,controls:t.watch.src.images.length>1,indicators:t.watch.src.images.length>1}},t._l(t.watch.src.images,function(t,s){return a("b-carousel-slide",{key:s,staticClass:"watchImgWrapper"},[a("b-img",{staticClass:"watchImg center",attrs:{slot:"img",src:t.src,alt:"image slot",thumbnail:"",fluid:""},slot:"img"})],1)}))],1)],1):a("b-row",[t._v("\n        Loading...\n    ")])],1):t._e()},c=[],r=(a("386d"),{name:"watchShare",data:function(){return{hasWatchToShow:!1,watch:{}}},methods:{},computed:{},created:function(){var t=this,s=new URLSearchParams(window.location.search),a=s.get("watchId");this.$store.dispatch("getWatchShareById",a).then(function(s){console.log("got our watch",s),t.watch=s,t.hasWatchToShow=!0})}}),o=r,n=(a("a445"),a("2877")),i=Object(n["a"])(o,e,c,!1,null,"3d8fd0c9",null);i.options.__file="WatchShare.vue";s["default"]=i.exports},a445:function(t,s,a){"use strict";var e=a("11f1"),c=a.n(e);c.a}}]);