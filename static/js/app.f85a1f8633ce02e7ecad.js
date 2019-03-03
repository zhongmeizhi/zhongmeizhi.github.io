webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

let ie = !!(window.attachEvent && !window.opera);
let wk = /webkit\/(\d+)/i.test(navigator.userAgent) && RegExp.$1 < 525;
let fn = [];
let run = function () {
  for (let i = 0; i < fn.length; i++) fn[i]();
};
let d = document;
let onStateLoaded = function (f) {
  if (!ie && !wk && d.addEventListener) return d.addEventListener('DOMContentLoaded', f, false);
  if (fn.push(f) > 1) return;
  if (ie) {
    try {
      d.documentElement.doScroll('left');
      run();
    } catch (err) {
      setTimeout(arguments.callee, 0);
    }
  } else if (wk) {
    let t = setInterval(function () {
      if (/^(loaded|complete)$/.test(d.readyState)) clearInterval(t), run();
    }, 0);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (onStateLoaded);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ready__ = __webpack_require__(0);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ready__["a" /* default */])(function () {
  // 鉴别手机端
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    function appendDot() {
      let $dot = document.createElement('script');
      $dot.src = 'src/js/homeDots.js';
      document.body.appendChild($dot);
    }
    function preventPhoneScale() {
      // 同时按下两个手指
      document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      });
      let lastTouchEnd = 0;
      // 特别注意300ms时差的设置
      document.addEventListener('touchend', function (event) {
        let now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      });
    }
    appendDot();
    preventPhoneScale();
  } else {
    // PC模式
    let $PC = document.createElement('div');
    $PC.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);;
    `;
    $PC.innerHTML = `
      <h1>当前打开方式为PC端Web页</h1>
      <h2>请使用手机模式打开</h2>
    `;
    document.body.append($PC);
  }
});

/***/ })
],[1]);