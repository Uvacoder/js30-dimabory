(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-811c"],{"20a8":function(t,e){t.exports="export function init () {\n  const triggers   = document.querySelectorAll('.cool > li')\n  const background = document.querySelector('.dropdownBackground')\n  const nav        = document.querySelector('nav')\n\n  function handleEnter () {\n    this.classList.add('trigger-enter')\n    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)\n\n    background.classList.add('open')\n    const dropdown       = this.querySelector('.dropdown')\n    const dropdownCoords = dropdown.getBoundingClientRect()\n    const navCoords      = nav.getBoundingClientRect()\n\n    const coords = {\n      height: dropdownCoords.height,\n      width:  dropdownCoords.width,\n      top:    dropdownCoords.top - navCoords.top,\n      left:   dropdownCoords.left - navCoords.left\n    }\n\n    background.style.setProperty('height', `${coords.height}px`)\n    background.style.setProperty('width', `${coords.width}px`)\n    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)\n  }\n\n  function handleLeave () {\n    this.classList.remove('trigger-enter', 'trigger-enter-active')\n    background.classList.remove('open')\n  }\n\n  triggers.forEach(trigger => {\n    trigger.addEventListener('mouseenter', handleEnter)\n    trigger.addEventListener('mouseleave', handleLeave)\n  })\n}\n"},3720:function(t,e,s){"use strict";e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:t,mounted:function(){e(),this.$emit("mounted",t.call(this))}}}},"8fe4":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mb-2"},[s("h2",{staticClass:"text-center"},[t._v("Stripe Follow Along Nav")]),s("nav",{staticClass:"top"},[s("div",{staticClass:"dropdownBackground"},[s("span",{staticClass:"arrow"})]),s("ul",{staticClass:"cool"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("About Me")]),s("div",{staticClass:"dropdown dropdown1"},[s("div",{staticClass:"bio"},[s("img",{attrs:{src:"https://logo.clearbit.com/wesbos.com"}}),s("p",[t._v("Wes Bos sure does love web development. He teaches things like JavaScript, CSS and BBQ. Wait. BBQ isn't\n              part of web development. It should be though!")])])])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Courses")]),s("ul",{staticClass:"dropdown courses"},[s("li",[s("span",{staticClass:"code"},[t._v("RFB")]),s("a",{attrs:{href:"https://ReactForBeginners.com"}},[t._v("React For Beginners")])]),s("li",[s("span",{staticClass:"code"},[t._v("ES6")]),s("a",{attrs:{href:"https://ES6.io"}},[t._v("ES6 For Everyone")])]),s("li",[s("span",{staticClass:"code"},[t._v("NODE")]),s("a",{attrs:{href:"https://LearnNode.com"}},[t._v("Learn Node")])]),s("li",[s("span",{staticClass:"code"},[t._v("STPU")]),s("a",{attrs:{href:"https://SublimeTextBook.com"}},[t._v("Sublime Text Power User")])]),s("li",[s("span",{staticClass:"code"},[t._v("WTF")]),s("a",{attrs:{href:"http://Flexbox.io"}},[t._v("What The Flexbox?!")])]),s("li",[s("span",{staticClass:"code"},[t._v("GRID")]),s("a",{attrs:{href:"https://CSSGrid.io"}},[t._v("CSS Grid")])]),s("li",[s("span",{staticClass:"code"},[t._v("LRX")]),s("a",{attrs:{href:"http://LearnRedux.com"}},[t._v("Learn Redux")])]),s("li",[s("span",{staticClass:"code"},[t._v("CLPU")]),s("a",{attrs:{href:"http://CommandLinePowerUser.com"}},[t._v("Command Line Power User")])]),s("li",[s("span",{staticClass:"code"},[t._v("MMD")]),s("a",{attrs:{href:"http://MasteringMarkdown.com"}},[t._v("Mastering Markdown")])])])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Other Links")]),s("ul",{staticClass:"dropdown dropdown3"},[s("li",[s("a",{staticClass:"button",attrs:{href:"http://twitter.com/wesbos"}},[t._v("Twitter")])]),s("li",[s("a",{staticClass:"button",attrs:{href:"http://facebook.com/wesbos.developer"}},[t._v("Facebook")])]),s("li",[s("a",{staticClass:"button",attrs:{href:"http://wesbos.com"}},[t._v("Blog")])]),s("li",[s("a",{staticClass:"button",attrs:{href:"http://wesbos.com/courses"}},[t._v("Course Catalog")])])])])])])])}];s("ac6a");function r(){var t=document.querySelectorAll(".cool > li"),e=document.querySelector(".dropdownBackground"),s=document.querySelector("nav");function o(){var t=this;this.classList.add("trigger-enter"),setTimeout(function(){return t.classList.contains("trigger-enter")&&t.classList.add("trigger-enter-active")},150),e.classList.add("open");var o=this.querySelector(".dropdown"),n=o.getBoundingClientRect(),r=s.getBoundingClientRect(),a={height:n.height,width:n.width,top:n.top-r.top,left:n.left-r.left};e.style.setProperty("height","".concat(a.height,"px")),e.style.setProperty("width","".concat(a.width,"px")),e.style.setProperty("transform","translate(".concat(a.left,"px, ").concat(a.top,"px)"))}function n(){this.classList.remove("trigger-enter","trigger-enter-active"),e.classList.remove("open")}t.forEach(function(t){t.addEventListener("mouseenter",o),t.addEventListener("mouseleave",n)})}var a=s("20a8"),i=s("3720"),c={name:"StripeFollowAlongNav",mixins:[Object(i["a"])(function(){return{raw:a}},r)]},l=c,d=(s("f640"),s("2877")),u=Object(d["a"])(l,o,n,!1,null,"94cc361c",null);u.options.__file="index.vue";e["default"]=u.exports},ac6a:function(t,e,s){for(var o=s("cadf"),n=s("0d58"),r=s("2aba"),a=s("7726"),i=s("32e9"),c=s("84f2"),l=s("2b4c"),d=l("iterator"),u=l("toStringTag"),h=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=n(p),v=0;v<g.length;v++){var f,m=g[v],L=p[m],C=a[m],w=C&&C.prototype;if(w&&(w[d]||i(w,d,h),w[u]||i(w,u,m),c[m]=h,L))for(f in o)w[f]||r(w,f,o[f],!0)}},ca57:function(t,e,s){},f640:function(t,e,s){"use strict";var o=s("ca57"),n=s.n(o);n.a}}]);
//# sourceMappingURL=chunk-811c.e482c27f.js.map