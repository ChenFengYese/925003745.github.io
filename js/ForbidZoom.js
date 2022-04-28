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

window.onload = function () {
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
    //以上是禁止双指缩放
    //以下是禁止双击缩放
    document.addEventListener('touchstart', function (e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });
    var endTouch = 0;
    document.addEventListener('touchend', function (e) {
        var nowTouch = (new Date()).getTime();
        if (nowTouch - endTouch<= 300) {
            e.preventDefault();
        }
        endTouch = nowTouch ;
    }, false);
};
