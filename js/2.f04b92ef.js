(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0sh+":function(n,t,e){var r=e("quPj"),i=e("vhPU");n.exports=function(n,t,e){if(r(t))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(n))}},"1TsA":function(n,t){n.exports=function(n,t){return{value:t,done:!!n}}},"4R4u":function(n,t){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},Afnz:function(n,t,e){"use strict";var r=e("LQAc"),i=e("XKFU"),o=e("KroJ"),s=e("Mukb"),a=e("hPIQ"),c=e("QaDb"),u=e("fyDq"),l=e("OP3Y"),p=e("K0xU")("iterator"),f=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",d="values",g=function(){return this};n.exports=function(n,t,e,y,m,x,b){c(e,t,y);var L,w,A,O=function(n){if(!f&&n in P)return P[n];switch(n){case h:return function(){return new e(this,n)};case d:return function(){return new e(this,n)}}return function(){return new e(this,n)}},S=t+" Iterator",_=m==d,k=!1,P=n.prototype,j=P[p]||P[v]||m&&P[m],C=j||O(m),T=m?_?O("entries"):C:void 0,E="Array"==t&&P.entries||j;if(E&&(A=l(E.call(new n)),A!==Object.prototype&&A.next&&(u(A,S,!0),r||"function"==typeof A[p]||s(A,p,g))),_&&j&&j.name!==d&&(k=!0,C=function(){return j.call(this)}),r&&!b||!f&&!k&&P[p]||s(P,p,C),a[t]=C,a[S]=g,m)if(L={values:_?C:O(d),keys:x?C:O(h),entries:T},b)for(w in L)w in P||o(P,w,L[w]);else i(i.P+i.F*(f||k),t,L);return L}},DVgA:function(n,t,e){var r=e("zhAb"),i=e("4R4u");n.exports=Object.keys||function(n){return r(n,i)}},FJW5:function(n,t,e){var r=e("hswa"),i=e("y3w9"),o=e("DVgA");n.exports=e("nh4g")?Object.defineProperties:function(n,t){i(n);var e,s=o(t),a=s.length,c=0;while(a>c)r.f(n,e=s[c++],t[e]);return n}},Kuth:function(n,t,e){var r=e("y3w9"),i=e("FJW5"),o=e("4R4u"),s=e("YTvA")("IE_PROTO"),a=function(){},c="prototype",u=function(){var n,t=e("Iw71")("iframe"),r=o.length,i="<",s=">";t.style.display="none",e("+rLv").appendChild(t),t.src="javascript:",n=t.contentWindow.document,n.open(),n.write(i+"script"+s+"document.F=Object"+i+"/script"+s),n.close(),u=n.F;while(r--)delete u[c][o[r]];return u()};n.exports=Object.create||function(n,t){var e;return null!==n?(a[c]=r(n),e=new a,a[c]=null,e[s]=n):e=u(),void 0===t?e:i(e,t)}},L9s1:function(n,t,e){"use strict";var r=e("XKFU"),i=e("0sh+"),o="includes";r(r.P+r.F*e("UUeW")(o),"String",{includes:function(n){return!!~i(this,n,o).indexOf(n,arguments.length>1?arguments[1]:void 0)}})},NyBl:function(n,t,e){"use strict";e("VRzm");t["a"]=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:n,mounted:function(){t(),this.$emit("mounted",n.call(this))}}}},OP3Y:function(n,t,e){var r=e("aagx"),i=e("S/j/"),o=e("YTvA")("IE_PROTO"),s=Object.prototype;n.exports=Object.getPrototypeOf||function(n){return n=i(n),r(n,o)?n[o]:"function"==typeof n.constructor&&n instanceof n.constructor?n.constructor.prototype:n instanceof Object?s:null}},P5ig:function(n,t){n.exports="export function init () {\n\n  const panels = document.querySelectorAll('.panel')\n\n  function toggleOpen () {\n    this.classList.toggle('open')\n  }\n\n  function toggleActive (e) {\n    if (e.propertyName.includes('flex')) {\n      this.classList.toggle('open-active')\n    }\n  }\n\n  panels.forEach(panel => panel.addEventListener('click', toggleOpen))\n  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))\n}\n"},QaDb:function(n,t,e){"use strict";var r=e("Kuth"),i=e("RjD/"),o=e("fyDq"),s={};e("Mukb")(s,e("K0xU")("iterator"),function(){return this}),n.exports=function(n,t,e){n.prototype=r(s,{next:i(1,e)}),o(n,t+" Iterator")}},"S/j/":function(n,t,e){var r=e("vhPU");n.exports=function(n){return Object(r(n))}},UUeW:function(n,t,e){var r=e("K0xU")("match");n.exports=function(n){var t=/./;try{"/./"[n](t)}catch(e){try{return t[r]=!1,!"/./"[n](t)}catch(n){}}return!0}},YTvA:function(n,t,e){var r=e("VTer")("keys"),i=e("ylqs");n.exports=function(n){return r[n]||(r[n]=i(n))}},Ymqv:function(n,t,e){var r=e("LZWt");n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==r(n)?n.split(""):Object(n)}},Z2Ku:function(n,t,e){"use strict";var r=e("XKFU"),i=e("w2a5")(!0);r(r.P,"Array",{includes:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}}),e("nGyu")("includes")},aCFj:function(n,t,e){var r=e("Ymqv"),i=e("vhPU");n.exports=function(n){return r(i(n))}},cCbL:function(n,t){n.exports="@import url('https://fonts.googleapis.com/css?family=Amatic+SC');\n\n.panels {\n  min-height: 100vh;\n  overflow: hidden;\n  display: flex;\n}\n\n.panel {\n  background: rgba(104, 18, 155, 0.24);\n  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);\n  color: white;\n  text-align: center;\n  align-items: center;\n  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),\n  flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),\n  background 0.2s;\n  font-size: 20px;\n  background-size: cover;\n  background-position: center;\n  flex: 1;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.panel:nth-of-type(1) {\n  background-image: url(https://source.unsplash.com/gYl-UtwNg_I/1500x1500);\n}\n\n.panel:nth-of-type(2) {\n  background-image: url(https://source.unsplash.com/rFKUFzjPYiQ/1500x1500);\n}\n\n.panel:nth-of-type(3) {\n  background-image: url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d);\n}\n\n.panel:nth-of-type(4) {\n  background-image: url(https://source.unsplash.com/ITjiVXcwVng/1500x1500);\n}\n\n.panel:nth-of-type(5) {\n  background-image: url(https://source.unsplash.com/3MNzGlQM7qs/1500x1500);\n}\n\n.panel > * {\n  margin: 0;\n  width: 100%;\n  transition: transform 0.5s;\n  flex: 1 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.panel > *:first-child {\n  transform: translateY(-100%);\n  color: var(--secondary);\n}\n\n.panel > *:last-child {\n  transform: translateY(100%);\n}\n\n.panel.open-active > *:first-child,\n.panel.open-active > *:last-child {\n  transform: translateY(0);\n}\n\n.panel p {\n  text-transform: uppercase;\n  font-family: 'Amatic SC', cursive;\n  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);\n  font-size: 2em;\n}\n\n.panel p:nth-child(2) {\n  font-size: 4em;\n}\n\n.panel.open {\n  font-size: 40px;\n  flex: 5;\n}\n"},"d/Gc":function(n,t,e){var r=e("RYi7"),i=Math.max,o=Math.min;n.exports=function(n,t){return n=r(n),n<0?i(n+t,0):o(n,t)}},"e/v+":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("h2",{staticClass:"text-center"},[n._v("Flex Panel Gallery")]),n._m(0),e("div",{staticClass:"row mb-4"},[e("show-code",{attrs:{raw:n.cssRaw,type:"css"}},[e("template",{slot:"toggle-btn"},[e("div",{staticClass:"row justify-content-center"},[e("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.css",modifiers:{css:!0}}],staticClass:"bg-dark text-secondary"},[n._v("CSS")])],1)])],2)],1)])},i=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"panels col mb-4"},[e("div",{staticClass:"panel"},[e("p",[n._v("Hey")]),e("p",[n._v("Let's")]),e("p",[n._v("Dance")])]),e("div",{staticClass:"panel"},[e("p",[n._v("Give")]),e("p",[n._v("Take")]),e("p",[n._v("Receive")])]),e("div",{staticClass:"panel"},[e("p",[n._v("Experience")]),e("p",[n._v("It")]),e("p",[n._v("Today")])]),e("div",{staticClass:"panel"},[e("p",[n._v("Give")]),e("p",[n._v("All")]),e("p",[n._v("You can")])]),e("div",{staticClass:"panel"},[e("p",[n._v("Life")]),e("p",[n._v("In")]),e("p",[n._v("Motion")])])])}];e("VRzm"),e("rGqo"),e("Z2Ku"),e("L9s1");function o(){var n=document.querySelectorAll(".panel");function t(){this.classList.toggle("open")}function e(n){n.propertyName.includes("flex")&&this.classList.toggle("open-active")}n.forEach(function(n){return n.addEventListener("click",t)}),n.forEach(function(n){return n.addEventListener("transitionend",e)})}var s=e("P5ig"),a=e("cCbL"),c=e("NyBl"),u=function(){return e.e(0).then(e.bind(null,"AsAQ"))},l={name:"FlexPanelGallery",components:{ShowCode:u},mixins:[Object(c["a"])(function(){return{raw:s}},o)],data:function(){return{cssRaw:a}}},p=l,f=(e("uOAJ"),e("KHd+")),v=Object(f["a"])(p,r,i,!1,null,"e809868c",null);t["default"]=v.exports},nGyu:function(n,t,e){var r=e("K0xU")("unscopables"),i=Array.prototype;void 0==i[r]&&e("Mukb")(i,r,{}),n.exports=function(n){i[r][n]=!0}},quPj:function(n,t,e){var r=e("0/R4"),i=e("LZWt"),o=e("K0xU")("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[o])?!!t:"RegExp"==i(n))}},rGnd:function(n,t,e){},rGqo:function(n,t,e){for(var r=e("yt8O"),i=e("DVgA"),o=e("KroJ"),s=e("dyZX"),a=e("Mukb"),c=e("hPIQ"),u=e("K0xU"),l=u("iterator"),p=u("toStringTag"),f=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(v),d=0;d<h.length;d++){var g,y=h[d],m=v[y],x=s[y],b=x&&x.prototype;if(b&&(b[l]||a(b,l,f),b[p]||a(b,p,y),c[y]=f,m))for(g in r)b[g]||o(b,g,r[g],!0)}},uOAJ:function(n,t,e){"use strict";var r=e("rGnd"),i=e.n(r);i.a},vhPU:function(n,t){n.exports=function(n){if(void 0==n)throw TypeError("Can't call method on  "+n);return n}},w2a5:function(n,t,e){var r=e("aCFj"),i=e("ne8i"),o=e("d/Gc");n.exports=function(n){return function(t,e,s){var a,c=r(t),u=i(c.length),l=o(s,u);if(n&&e!=e){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((n||l in c)&&c[l]===e)return n||l||0;return!n&&-1}}},yt8O:function(n,t,e){"use strict";var r=e("nGyu"),i=e("1TsA"),o=e("hPIQ"),s=e("aCFj");n.exports=e("Afnz")(Array,"Array",function(n,t){this._t=s(n),this._i=0,this._k=t},function(){var n=this._t,t=this._k,e=this._i++;return!n||e>=n.length?(this._t=void 0,i(1)):i(0,"keys"==t?e:"values"==t?n[e]:[e,n[e]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},zhAb:function(n,t,e){var r=e("aagx"),i=e("aCFj"),o=e("w2a5")(!1),s=e("YTvA")("IE_PROTO");n.exports=function(n,t){var e,a=i(n),c=0,u=[];for(e in a)e!=s&&r(a,e)&&u.push(e);while(t.length>c)r(a,e=t[c++])&&(~o(u,e)||u.push(e));return u}}}]);
//# sourceMappingURL=2.f04b92ef.js.map