(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-339a"],{"0c03":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mb-2"},[n("h2",{staticClass:"text-center"},[e._v("Video Speed Controller")]),n("div",{staticClass:"wrapper"},[n("div",[n("video",{staticClass:"flex img-fluid",attrs:{width:"765",height:"430",src:"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",loop:"",controls:""}})]),n("div",{staticClass:"speed"},[n("div",{staticClass:"speed-bar"},[e._v("1×")])])])])}];n("cadf"),n("551c"),n("097d");function c(){var e=document.querySelector(".speed"),t=e.querySelector(".speed-bar"),n=document.querySelector(".flex");function a(e,n){t.style.height=e,t.textContent=n.toFixed(2)+"x"}function o(e){n.playbackRate=e}e.addEventListener("mousemove",function(e){var t=e.offsetY/this.offsetHeight,n=.4,c=4,i=Math.round(100*t)+"%",s=t*(c-n)+n;a(i,s),o(s)})}var i=n("973f"),s=n("3720"),r={name:"VideoSpeedController",mixins:[Object(s["a"])(function(){return{raw:i}},c)]},d=r,u=(n("f272"),n("2877")),l=Object(u["a"])(d,a,o,!1,null,"6a90d96c",null);l.options.__file="index.vue";t["default"]=l.exports},3720:function(e,t,n){"use strict";t["a"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:e,mounted:function(){t(),this.$emit("mounted",e.call(this))}}}},"973f":function(e,t){e.exports="export function init () {\n  const speed = document.querySelector('.speed')\n  const bar   = speed.querySelector('.speed-bar')\n  const video = document.querySelector('.flex')\n\n  function updateSpeedBar (height, playbackRate) {\n    bar.style.height = height\n    bar.textContent  = playbackRate.toFixed(2) + 'x'\n  }\n\n  function updateVideoPlayback (playbackRate) {\n    video.playbackRate = playbackRate\n  }\n\n  speed.addEventListener('mousemove', function (e) {\n    const percent      = e.offsetY / this.offsetHeight\n    const min          = 0.4\n    const max          = 4\n    const height       = Math.round(percent * 100) + '%'\n    const playbackRate = percent * (max - min) + min\n\n    updateSpeedBar(height, playbackRate)\n    updateVideoPlayback(playbackRate)\n  })\n}\n"},f272:function(e,t,n){"use strict";var a=n("f330"),o=n.n(a);o.a},f330:function(e,t,n){}}]);
//# sourceMappingURL=chunk-339a.0847cd99.js.map