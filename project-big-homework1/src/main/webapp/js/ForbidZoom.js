document.addEventListener('mousewheel', function (e) {
    e = e || window.event;
    if ((e.wheelDelta && event.ctrlKey) || e.detail) {
        event.preventDefault();
    }
}, {
    capture: false,
    passive: false
});
document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey === true || event.metaKey === true)
        && (event.keyCode === 61 || event.keyCode === 107
            || event.keyCode === 173 || event.keyCode === 109
            || event.keyCode === 187 || event.keyCode === 189)) {
        event.preventDefault();
    }
}, false);

//禁止双指放大
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, {passive:false});
// 禁止双击放大
let lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, {passive:false});

