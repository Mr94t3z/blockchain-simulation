(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,14],{291:function(t,n,e){"use strict";e.r(n);var l=e(79),c=Object(l.c)({props:{text:{type:String,default:""}},setup:function(){}}),r=e(41),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{staticClass:"shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"button"}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(291).default})},341:function(t,n,e){"use strict";e.r(n);var l=e(12),c=(e(54),e(79)),r=Object(c.c)({props:{blockchain:{type:Object,required:!0},wallets:{type:Array,required:!0}},setup:function(t,n){var e=n.emit,r=Object(c.j)().$sleep,o=t.blockchain,d=t.wallets,f=Object(c.a)((function(){return o.pendingTransactions})),v=Object(c.h)(!1),x=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.value=!0,t.next=3,r(500);case 3:o.mine(d[0].publicKey),v.value=!1,e("changeTab",0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{startMining:x,pendingTransactions:f,loading:v}}}),o=r,d=e(41),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"relative"},[e("div",{staticClass:"panel-pending-transaction rounded pt-4 overflow-hidden flex flex-col bg-gray-50"},[e("div",{staticClass:"px-4 flex flex-col justify-between"},[e("div",{staticClass:"text-2xl font-semibold"},[t._v("\n        Pending Transactions\n      ")]),t._v(" "),e("div",{staticClass:"pt-1 text-xs text-gray-500"},[t._v("\n        * Start mining to include all pending transactions in the next block.\n      ")]),t._v(" "),e("div",{staticClass:"relative py-4 flex flex-col"},[0===t.pendingTransactions.length?e("div",[t._v("\n          No pending transactions.\n        ")]):t._e(),t._v(" "),t._l(t.pendingTransactions,(function(n,i){return e("div",{key:i,staticClass:"\n            rounded\n            text-gray-700 bg-gray-100 hover:bg-gray-200\n            px-4 py-2\n            flex flex-col md:flex-row space-x-4\n            mb-2\n            overflow-x-hidden\n          "},[e("div",{staticClass:"w-1/12 text-3xl text-center self-center text-blue-500"},[t._v("\n            "+t._s(i+1)+"\n          ")]),t._v(" "),e("div",{staticClass:"w-10/12 flex flex-col"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"truncate font-semibold"},[t._v("\n                From :\n                "),n.fromAddress===t.blockchain.system.publicKey?e("span",{staticClass:"text-blue-500"},[t._v("\n                  System\n                ")]):e("span",{staticClass:"text-gray-500"},[t._v("\n                  "+t._s(n.fromAddress)+"\n                ")])])]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"truncate font-semibold"},[t._v("\n                To :\n                "),e("span",{staticClass:"text-gray-500"},[t._v(t._s(n.toAddress))])])]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"truncate font-semibold"},[t._v("\n                Amount :\n                "),e("span",{staticClass:"text-gray-500"},[t._v(t._s(n.amount)+" Coin")])])])]),t._v(" "),e("div",{staticClass:"w-1/12 text-3xl text-center self-center text-gray-400"},[e("font-awesome-icon",{staticClass:"text-gray-300",attrs:{icon:["fas","clock"]}})],1)])})),t._v(" "),0!==t.pendingTransactions.length?e("Button",{attrs:{text:"Start mining"},nativeOn:{click:function(n){return t.startMining.apply(null,arguments)}}}):t._e()],2)])]),t._v(" "),t.loading?e("div",{staticClass:"z-10 absolute top-0 left-0 w-full h-full bg-black text-gray-100 flex flex-col text-center justify-center"},[e("div",{staticClass:"text-center"},[e("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}})],1),t._v("\n    Mining in progress...\n  ")]):t._e()])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(291).default})}}]);