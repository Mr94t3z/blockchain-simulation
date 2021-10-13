(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,17],{302:function(t,e,n){"use strict";n.r(e);var r=n(62),o=Object(r.c)({props:{text:{type:String,default:""}},setup:function(){}}),l=n(61),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"button"}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(302).default})},305:function(t,e,n){var r=n(214),o=n(215);n(14),n(74);var l=n(313),c=n(216),d=n(306).SignatureGenerator,f=function(){"use strict";function t(e,n,o){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c();r(this,t),this.fromAddress=e,this.toAddress=n,this.amount=parseInt(o),this.timestamp=c(l).unix()}return o(t,[{key:"calculateHash",value:function(){var pattern=this.fromAddress+this.toAddress+this.amount;return l(pattern).toString()}},{key:"sign",value:function(t){var e=new d(t).fromPrivate(t);if(e.getAddress()!==this.fromAddress)throw new Error("Invalid signing key");return this.signature=e.generate(this.calculateHash()),this}},{key:"isValid",value:function(){return!(!this.fromAddress||!this.toAddress)&&(!!this.signature&&(!!(new d).fromPublic(this.fromAddress).verify(this.calculateHash(),this.signature)||(console.log({hash:this.calculateHash(),signature:this.signature}),!1)))}}]),t}();t.exports=f},306:function(t,e,n){var r=n(214),o=n(215),l=n(318),c=function(){"use strict";function t(){r(this,t)}return o(t,[{key:"generate",value:function(){var t=new l.ec("secp256k1").genKeyPair();return{privateKey:t.getPrivate("hex"),publicKey:t.getPublic("hex")}}}]),t}(),d=function(){"use strict";function t(){r(this,t),this.key=void 0}return o(t,[{key:"fromPrivate",value:function(t){return this.key=new l.ec("secp256k1").keyFromPrivate(t,"hex"),this}},{key:"fromPublic",value:function(t){return this.key=new l.ec("secp256k1").keyFromPublic(t,"hex"),this}},{key:"getAddress",value:function(){return this.key?this.key.getPublic("hex"):void 0}},{key:"generate",value:function(t){return this.key.sign(t,"base64").toDER("hex")}},{key:"verify",value:function(t,e){return this.key.verify(t,e)}}]),t}();e.KeyGenerator=c,e.SignatureGenerator=d},317:function(t,e){},319:function(t,e){},320:function(t,e){},362:function(t,e,n){"use strict";n.r(e);var r=n(62),o=n(305),l=n.n(o),c=Object(r.c)({props:{blockchain:{type:Object,required:!0},wallets:{type:Array,required:!0}},setup:function(t,e){var n=e.emit,o=t.wallets,c=t.blockchain,d=Object(r.g)({from:o[0].publicKey,to:null,amount:10});return{transaction:d,create:function(){var t=o[0],e=o[d.to];c.addTransaction(new l.a(t.publicKey,e.publicKey,d.amount).sign(t.privateKey)),n("changeTab",2)}}}}),d=n(61),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{staticClass:"panel-transaction rounded pt-4 overflow-hidden flex flex-col bg-gray-50"},[n("div",{staticClass:"px-4 flex flex-col justify-between"},[n("div",{staticClass:"text-2xl font-semibold"},[t._v("\n        "+t._s(t.$t("components.newTransaction.title"))+"\n      ")]),t._v(" "),n("div",{staticClass:"pt-1 text-xs text-gray-500"},[t._v("\n        "+t._s(t.$t("components.newTransaction.description"))+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("form",{staticClass:"w-full"},[n("div",{staticClass:"w-full md:flex mb-6"},[n("div",{staticClass:"md:w-2/12 pt-2"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-full-name"}},[t._v("\n                "+t._s(t.$t("other.from"))+"\n              ")])]),t._v(" "),n("div",{staticClass:"md:w-9/12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.from,expression:"transaction.from"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"from",disabled:!0,readonly:"",type:"text"},domProps:{value:t.transaction.from},on:{input:function(e){e.target.composing||t.$set(t.transaction,"from",e.target.value)}}}),t._v(" "),n("span",{staticClass:"text-xs text-gray-500"},[t._v("* Your wallet")])])]),t._v(" "),n("div",{staticClass:"w-full md:flex mb-6"},[n("div",{staticClass:"md:w-2/12 pt-2"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-full-name"}},[t._v("\n                "+t._s(t.$t("other.to"))+"\n              ")])]),t._v(" "),n("div",{staticClass:"md:w-9/12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.transaction.to,expression:"transaction.to"}],staticClass:"bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"to"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.transaction,"to",e.target.multiple?n:n[0])}}},[t._l(t.wallets,(function(e,i){return[e.publicKey!==t.wallets[0].publicKey?n("option",{key:"key-"+i,domProps:{value:i}},[t._v("\n                    "+t._s(e.name)+" ["+t._s(e.publicKey)+"]\n                  ")]):t._e()]}))],2),t._v(" "),n("div",{staticClass:"text-xs text-gray-500"},[0===t.wallets.filter((function(e){return e.publicKey!==t.wallets[0].publicKey})).length?n("span",[t._v("\n                  * Create wallet before make transaction\n                ")]):n("span",[t._v("\n                  * select the address of the recipient\n                ")])])])]),t._v(" "),n("div",{staticClass:"w-full md:flex mb-6"},[n("div",{staticClass:"md:w-2/12 pt-2"},[n("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-full-name"}},[t._v("\n                "+t._s(t.$t("other.amount"))+"\n              ")])]),t._v(" "),n("div",{staticClass:"md:w-9/12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transaction.amount,expression:"transaction.amount"}],staticClass:"bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"from",min:"1",type:"number"},domProps:{value:t.transaction.amount},on:{input:function(e){e.target.composing||t.$set(t.transaction,"amount",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"w-full md:flex mb-6"},[n("div",{staticClass:"md:w-2/12"}),t._v(" "),n("div",{staticClass:"md:w-9/12"},[null!==t.transaction.from&&null!==t.transaction.to&&t.transaction.amount>0?n("Button",{attrs:{text:t.$t("components.newTransaction.createTransaction")},nativeOn:{click:function(e){return e.preventDefault(),t.create.apply(null,arguments)}}}):t._e()],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(302).default})}}]);