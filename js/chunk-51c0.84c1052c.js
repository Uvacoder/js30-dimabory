(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51c0"],{"00c9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",{staticClass:"text-center"},[e._v("Webcam Fun")]),n("video",{staticClass:"player col"}),n("div",[n("div",{staticClass:"photobooth"},[n("div",{staticClass:"controls col mb-2 d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-around"},[n("button",{staticClass:"form-control btn btn-secondary btn--take-photo mb-2 mr-sm-2"},[e._v("Take Photo")]),n("button",{staticClass:"form-control btn btn-dark btn--red-effect mb-2 mr-sm-2"},[e._v("Red")]),n("button",{staticClass:"form-control btn btn-dark btn--rgb-split-effect mb-2 mr-sm-2"},[e._v("RGP Split")]),n("button",{staticClass:"form-control btn btn-dark btn--grayscale-effect mb-2"},[e._v("Grayscale")])])]),n("canvas",{staticClass:"photo col-12"}),n("div",{staticClass:"clearfix"}),n("div",{staticClass:"strip col-12 d-flex flex-column flex-wrap flex-md-row justify-content-around align-items-center"})]),n("audio",{staticClass:"snap",attrs:{src:"http://wesbos.com/demos/photobooth/snap.mp3",hidden:""}})])])}];n("cadf"),n("551c"),n("097d"),n("7f7f"),n("ac6a");function c(){var e=document.querySelector(".player"),t=document.querySelector(".photo"),n=t.getContext("2d"),a=document.querySelector(".strip"),i=document.querySelector(".snap"),c=document.querySelector(".btn--take-photo"),r=document.querySelector(".btn--red-effect"),s=document.querySelector(".btn--rgb-split-effect"),l=document.querySelector(".btn--grayscale-effect");function o(){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(t){try{e.srcObject=t}catch(n){e.src=window.URL.createObjectURL(t)}finally{e.play()}}).catch(function(e){console.error(e),t.width=0,t.height=0;var n=document.createElement("div");n.classList.add("d-flex","justify-content-center"),n.innerHTML='<span class="text-danger">'.concat(e.message,". Please allow your media device to start video recording.</span>"),t.parentNode.insertBefore(n,t)})}function d(){var a=e.videoWidth,i=e.videoHeight;t.width=a,t.height=i;var c=!1,o=!1,d=!1;setInterval(function(){n.drawImage(e,0,0,a,i);var t=n.getImageData(0,0,a,i);c&&(t=u(t)),o&&(t=p(t)),d&&(t=f(t)),n.putImageData(t,0,0)},16),r.addEventListener("click",function(){return c=!c}),s.addEventListener("click",function(){return o=!o}),l.addEventListener("click",function(){return d=!d})}function f(e){for(var t=0;t<e.data.length;t+=4){var n=.3*e.data[t]+.59*e.data[t+1]+.11*e.data[t+2];e.data[t]=n,e.data[t+1]=n,e.data[t+2]=n}return e}function u(e){for(var t=0;t<e.data.length;t+=4)e.data[t]+=100,e.data[t+1]-=50,e.data[t+2]*=.5;return e}function p(e){for(var t=0;t<e.data.length;t+=4)e.data[t-150]=e.data[t],e.data[t+500]=e.data[t+1],e.data[t-550]=e.data[t+2];return e}function m(){i.currentTime=0,i.play()}function h(){var e=t.toDataURL("image/jpeg"),n=document.createElement("a");n.href=e,n.setAttribute("download","handsome"),n.innerHTML='<img src="'.concat(e,'" alt="Handsome" class="img-thumbnail" width="200" height="200"/> <span>Download</span>'),a.appendChild(n)}c.addEventListener("click",function(){return m()||h()}),e.addEventListener("canplay",d),o()}var r=n("9898"),s=n("3720"),l={name:"WebcamFun",mixins:[Object(s["a"])(function(){return{raw:r}},c)]},o=l,d=(n("aea3"),n("2877")),f=Object(d["a"])(o,a,i,!1,null,"35a26cfc",null);f.options.__file="index.vue";t["default"]=f.exports},3720:function(e,t,n){"use strict";t["a"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:e,mounted:function(){t(),this.$emit("mounted",e.call(this))}}}},9898:function(e,t){e.exports="export function init () {\n  const video  = document.querySelector('.player')\n  const canvas = document.querySelector('.photo')\n  const ctx    = canvas.getContext('2d')\n  const strip  = document.querySelector('.strip')\n  const snap   = document.querySelector('.snap')\n\n  const takePhotoBtn       = document.querySelector('.btn--take-photo')\n  const redEffectBtn       = document.querySelector('.btn--red-effect')\n  const rgbSplitEffectBtn  = document.querySelector('.btn--rgb-split-effect')\n  const grayscaleEffectBtn = document.querySelector('.btn--grayscale-effect')\n\n  function recording () {\n    navigator.mediaDevices\n             .getUserMedia({video: true, audio: false})\n             .then(localMediaStream => {\n               try {\n                 video.srcObject = localMediaStream\n               } catch (error) {\n                 video.src = window.URL.createObjectURL(localMediaStream)\n               } finally {\n                 video.play()\n               }\n             })\n             .catch(err => {\n               console.error(err)\n               canvas.width  = 0\n               canvas.height = 0\n\n               const errNode = document.createElement('div')\n               errNode.classList.add('d-flex', 'justify-content-center')\n               errNode.innerHTML = `<span class=\"text-danger\">${err.message}. Please allow your media device to start video recording.</span>`\n               canvas.parentNode.insertBefore(errNode, canvas)\n             })\n  }\n\n  function paintToCanvas () {\n    const width  = video.videoWidth\n    const height = video.videoHeight\n\n    canvas.width  = width\n    canvas.height = height\n\n    let withRedEffect       = false\n    let withRgbSplitEffect  = false\n    let withGrayscaleEffect = false\n\n    setInterval(() => {\n      ctx.drawImage(video, 0, 0, width, height)\n      let pixels = ctx.getImageData(0, 0, width, height)\n\n      // pixels = greenEffect(pixels)\n\n      if (withRedEffect) {\n        pixels = redEffect(pixels)\n      }\n      if (withRgbSplitEffect) {\n        pixels = rgbSplitEffect(pixels)\n      }\n      if (withGrayscaleEffect) {\n        pixels = grayscaleEffect(pixels)\n      }\n      // ctx.globalAlpha = 0.1\n      ctx.putImageData(pixels, 0, 0)\n    }, 16)\n\n    redEffectBtn.addEventListener('click', () => withRedEffect = !withRedEffect)\n    rgbSplitEffectBtn.addEventListener('click', () => withRgbSplitEffect = !withRgbSplitEffect)\n    grayscaleEffectBtn.addEventListener('click', () => withGrayscaleEffect = !withGrayscaleEffect)\n  }\n\n  function grayscaleEffect (pixels) {\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      let grayscale      = pixels.data[i] * .3 + pixels.data[i + 1] * .59 + pixels.data[i + 2] * .11\n      pixels.data[i]     = grayscale\n      pixels.data[i + 1] = grayscale\n      pixels.data[i + 2] = grayscale\n    }\n    return pixels\n  }\n\n  function redEffect (pixels) {\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      pixels.data[i] += 100     // r\n      pixels.data[i + 1] -= 50  // g\n      pixels.data[i + 2] *= 0.5 // b\n    }\n\n    return pixels\n  }\n\n  // eslint-disable-next-line\n  function greenEffect (pixels) {\n    const levels = {}\n\n    document.querySelectorAll('.rgb input').forEach(input => {\n      levels[input.name] = input.value\n    })\n\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      let red   = pixels.data[i]\n      let green = pixels.data[i + 1]\n      let blue  = pixels.data[i + 2]\n      // const alpha = pixels.data[i + 3]\n\n      if (\n        red >= levels.rmin &&\n        green >= levels.gmin &&\n        blue >= levels.bmin &&\n        red <= levels.rmax &&\n        green <= levels.gmax &&\n        blue <= levels.bmax\n      ) {\n        pixels.data[i + 3] = 0\n      }\n    }\n\n    return pixels\n  }\n\n  function rgbSplitEffect (pixels) {\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      pixels.data[i - 150] = pixels.data[i]     // r\n      pixels.data[i + 500] = pixels.data[i + 1] // g\n      pixels.data[i - 550] = pixels.data[i + 2] // b\n    }\n\n    return pixels\n  }\n\n  function playSound () {\n    snap.currentTime = 0\n    snap.play()\n  }\n\n  function takePhoto () {\n    const data = canvas.toDataURL('image/jpeg')\n\n    const link = document.createElement('a')\n    link.href  = data\n    link.setAttribute('download', 'handsome')\n    link.innerHTML = `<img src=\"${data}\" alt=\"Handsome\" class=\"img-thumbnail\" width=\"200\" height=\"200\"/> <span>Download</span>`\n\n    strip.appendChild(link)\n  }\n\n  takePhotoBtn.addEventListener('click', () => playSound() || takePhoto())\n  video.addEventListener('canplay', paintToCanvas)\n\n  recording()\n}\n"},ac6a:function(e,t,n){for(var a=n("cadf"),i=n("0d58"),c=n("2aba"),r=n("7726"),s=n("32e9"),l=n("84f2"),o=n("2b4c"),d=o("iterator"),f=o("toStringTag"),u=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(p),h=0;h<m.length;h++){var g,v=m[h],x=p[v],b=r[v],y=b&&b.prototype;if(y&&(y[d]||s(y,d,u),y[f]||s(y,f,v),l[v]=u,x))for(g in a)y[g]||c(y,g,a[g],!0)}},aea3:function(e,t,n){"use strict";var a=n("e723"),i=n.n(a);i.a},e723:function(e,t,n){}}]);
//# sourceMappingURL=chunk-51c0.84c1052c.js.map