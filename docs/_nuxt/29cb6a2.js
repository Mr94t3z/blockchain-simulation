(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,14],{291:function(t,e,n){"use strict";n.r(e);var l=n(79),r=Object(l.c)({props:{text:{type:String,default:""}},setup:function(){}}),c=n(41),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"button"}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(291).default})},341:function(t,e,n){"use strict";n.r(e);var l=n(12),r=(n(54),n(79)),c=Object(r.c)({props:{blockchain:{type:Object,required:!0},wallets:{type:Array,required:!0}},setup:function(t,e){var n=e.emit,c=Object(r.j)().$sleep,o=t.blockchain,d=t.wallets,v=Object(r.a)((function(){return o.pendingTransactions})),f=Object(r.h)(!1),x=function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.value=!0,t.next=3,c(500);case 3:o.mine(d[0].publicKey),f.value=!1,n("changeTab",0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{startMining:x,pendingTransactions:v,loading:f}}}),o=c,d=n(41),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{staticClass:"panel-pending-transaction rounded pt-4 overflow-hidden flex flex-col bg-gray-50"},[n("div",{staticClass:"px-4 flex flex-col justify-between"},[n("div",{staticClass:"text-2xl font-semibold"},[t._v("\n        Pending Transactions\n      ")]),t._v(" "),n("div",{staticClass:"pt-1 text-xs text-gray-500"},[t._v("\n        * Start mining to include all pending transactions in the next block.\n      ")]),t._v(" "),n("div",{staticClass:"relative py-4 flex flex-col"},[0===t.pendingTransactions.length?n("div",[t._v("\n          No pending transactions.\n        ")]):t._e(),t._v(" "),t._l(t.pendingTransactions,(function(e,i){return n("div",{key:i,staticClass:"\n            rounded\n            text-gray-700 bg-gray-100 hover:bg-gray-200\n            px-4 py-2\n            flex flex-col md:flex-row space-x-4\n            mb-2\n            overflow-x-hidden\n          "},[n("div",{staticClass:"w-1/12 text-3xl text-center self-center text-blue-500"},[t._v("\n            "+t._s(i+1)+"\n          ")]),t._v(" "),n("div",{staticClass:"w-10/12 flex flex-col"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"truncate font-semibold"},[t._v("\n                From :\n                "),e.fromAddress===t.blockchain.system.publicKey?n("span",{staticClass:"text-blue-500"},[t._v("\n                  System\n                ")]):n("span",{staticClass:"text-gray-500"},[t._v("\n                  "+t._s(e.fromAddress)+"\n                ")])])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"truncate font-semibold"},[t._v("\n                To :\n                "),n("span",{staticClass:"text-gray-500"},[t._v(t._s(e.toAddress))])])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"truncate font-semibold"},[t._v("\n                Amount :\n                "),n("span",{staticClass:"text-gray-500"},[t._v(t._s(e.amount)+" Coin")])])])]),t._v(" "),n("div",{staticClass:"w-1/12 text-3xl text-center self-center text-gray-400"},[n("font-awesome-icon",{staticClass:"text-gray-300",attrs:{icon:["fas","clock"]}})],1)])})),t._v(" "),0!==t.pendingTransactions.length?n("Button",{attrs:{text:"Start mining"},nativeOn:{click:function(e){return t.startMining.apply(null,arguments)}}}):t._e()],2)])]),t._v(" "),t.loading?n("div",{staticClass:"z-10 absolute top-0 left-0 w-full h-full bg-black text-gray-100 flex flex-col text-center justify-center"},[n("div",{staticClass:"text-center"},[n("font-awesome-icon",{attrs:{icon:["fas","circle-notch"],spin:""}})],1),t._v(" "),t._m(0)]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n      Mining in progress...\n      "),n("span",{staticClass:"text-xs"},[t._v("You can open Console / Dev Panel in your browser to see what happening...")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(291).default})}}]);