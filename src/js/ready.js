
let ie = !!(window.attachEvent && !window.opera);
let wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
let fn = [];
let run = function () {
  for (let i = 0; i < fn.length; i++)
  fn[i]();
};
let d = document;
let onStateLoaded = function (f) {
  if (!ie && !wk && d.addEventListener)
    return d.addEventListener('DOMContentLoaded', f, false);
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
      if (/^(loaded|complete)$/.test(d.readyState))
        clearInterval(t), run();
    }, 0);
  }
};
export default onStateLoaded;