(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(n,e,t){"use strict";t(19),t(56);var o=t(139),r=t.n(o);e.a=function(n,e){n.app;e("sleep",(function(n){return new Promise((function(e){return setTimeout(e,n)}))})),e("dayjs",r.a)}},192:function(n,e,t){"use strict";var o=t(41),component=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex flex-col min-h-screen max-h-screen overflow-x-hidden shadow-xl"},[t("Navbar"),n._v(" "),t("div",{staticClass:"flex-1 flex flex-col max-h-full overflow-y-auto overflow-x-hidden bg-blue-500"},[t("div",{staticClass:"flex-1 container p-4 mx-auto flex flex-col justify-center"},[t("nuxt")],1)])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:t(286).default})},197:function(n,e,t){t(198),t(199),n.exports=t(214)},234:function(n,e,t){var content=t(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(58).default)("54037e9e",content,!0,{sourceMap:!1})},235:function(n,e,t){var o=t(57)((function(i){return i[1]}));o.push([n.i,"/*! tailwindcss v2.2.15 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.top-0{\n  top:0px;\n}\n\n.right-0{\n  right:0px;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.left-0{\n  left:0px;\n}\n\n.z-10{\n  z-index:10;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mr-4{\n  margin-right:1rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-6{\n  margin-bottom:1.5rem;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.h-full{\n  height:100%;\n}\n\n.max-h-full{\n  max-height:100%;\n}\n\n.max-h-screen{\n  max-height:100vh;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.w-1\\/12{\n  width:8.333333%;\n}\n\n.w-10\\/12{\n  width:83.333333%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.flex-1{\n  flex:1 1 0%;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.resize{\n  resize:both;\n}\n\n.appearance-none{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n}\n\n.flex-row{\n  flex-direction:row;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1rem * var(--tw-space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-10 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(2.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.self-center{\n  align-self:center;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.overflow-y-auto{\n  overflow-y:auto;\n}\n\n.overflow-x-hidden{\n  overflow-x:hidden;\n}\n\n.truncate{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-2{\n  border-width:2px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-b{\n  border-bottom-width:1px;\n}\n\n.border-gray-200{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.border-gray-500{\n  --tw-border-opacity:1;\n  border-color:rgba(107, 114, 128, var(--tw-border-opacity));\n}\n\n.border-blue-500{\n  --tw-border-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity));\n}\n\n.hover\\:border-blue-500:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity));\n}\n\n.hover\\:border-blue-800:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(30, 64, 175, var(--tw-border-opacity));\n}\n\n.focus\\:border-purple-500:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(139, 92, 246, var(--tw-border-opacity));\n}\n\n.bg-black{\n  --tw-bg-opacity:1;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n\n.bg-gray-50{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.bg-gray-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n\n.bg-red-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(254, 226, 226, var(--tw-bg-opacity));\n}\n\n.bg-blue-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-200:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-300:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-400:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(96, 165, 250, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-700:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(29, 78, 216, var(--tw-bg-opacity));\n}\n\n.focus\\:bg-white:focus{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pr-4{\n  padding-right:1rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.leading-tight{\n  line-height:1.25;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-100{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\n.text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n}\n\n.text-gray-300{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.text-red-500{\n  --tw-text-opacity:1;\n  color:rgba(239, 68, 68, var(--tw-text-opacity));\n}\n\n.text-red-600{\n  --tw-text-opacity:1;\n  color:rgba(220, 38, 38, var(--tw-text-opacity));\n}\n\n.text-green-500{\n  --tw-text-opacity:1;\n  color:rgba(16, 185, 129, var(--tw-text-opacity));\n}\n\n.text-blue-500{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.text-purple-600{\n  --tw-text-opacity:1;\n  color:rgba(124, 58, 237, var(--tw-text-opacity));\n}\n\n.text-pink-600{\n  --tw-text-opacity:1;\n  color:rgba(219, 39, 119, var(--tw-text-opacity));\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.transition-all{\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.duration-300{\n  transition-duration:300ms;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .md\\:flex{\n    display:flex;\n  }\n\n  .md\\:w-2\\/12{\n    width:16.666667%;\n  }\n\n  .md\\:w-9\\/12{\n    width:75%;\n  }\n\n  .md\\:flex-row{\n    flex-direction:row;\n  }\n\n  .md\\:items-center{\n    align-items:center;\n  }\n\n  .md\\:text-right{\n    text-align:right;\n  }\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),o.locals={},n.exports=o},236:function(n,e,t){var content=t(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(58).default)("54c2559c",content,!0,{sourceMap:!1})},237:function(n,e,t){var o=t(57)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n\n.blocks{\n  overflow:hidden;\n  overflow-x:auto;\n  padding:1rem\n}\n\n.blocks,.blocks>.block-chain{\n  background:#f9fafb\n}\n\n.blocks>.block-chain{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  white-space:nowrap;\n  min-width:250px;\n  max-width:250px;\n  height:100%;\n  z-index:1\n}\n\n.blocks>.block-chain>.chain{\n  content:"";\n  height:5px;\n  width:40px;\n  position:absolute;\n  top:50%;\n  left:-42px;\n  background:#6b7280;\n  z-index:-1\n}\n\n.block-enter-active,.block-leave-active{\n  transition:all 1s\n}\n\n.block-enter,.block-leave-to{\n  opacity:0;\n  transform:translateY(30px)\n}\n\n.button-scroll-to-left-enter-active,.button-scroll-to-left-leave-active{\n  transition:all .5s\n}\n\n.button-scroll-to-left-enter,.button-scroll-to-left-leave-to{\n  opacity:0;\n  transform:translateY(30px)\n}\n\n.panels-enter-active,.panels-leave-active{\n  transition:all .5s\n}\n\n.panels-enter{\n  transform:translateX(300px)\n}\n\n.panels-leave-to{\n  opacity:0;\n  transform:translateX(-300px)\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},238:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return o}));var o=function(){return{options:{hashDifficulty:2}}}},286:function(n,e,t){"use strict";t.r(e);var o=t(41),component=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex justify-between items-center px-4 py-2 text-lg text-gray-100 bg-gray-600"},[t("div",[n._v("\n    Blockchain Simulation\n  ")]),n._v(" "),t("div",{staticClass:"flex space-x-2"},[t("a",{staticClass:"rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 hover:bg-gray-300",attrs:{href:"https://github.com/viandwi24/blockchain-simulation"}},[t("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),n._v(" "),t("a",{staticClass:"rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 hover:bg-gray-300",attrs:{href:"https://instagram.com/viandwi_24"}},[t("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),n._v(" "),t("a",{staticClass:"rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 hover:bg-gray-300",attrs:{href:"https://facebook.com/viandwi24"}},[t("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])])}),[],!1,null,null,null);e.default=component.exports}},[[197,9,2,10]]]);