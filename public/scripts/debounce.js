var timer = null;
var t_start;
window.debounce = function(fn, delay, runDelay) {
    var t_curr = new Date();
    clearTimeout(timer);
    if (!t_start) {
        fn();
        t_start = t_curr;
    } else {
        if (t_curr - t_start >= runDelay) {
            fn();
            t_start = t_curr;
        } else {
            timer = setTimeout(function() {
                fn();
            }, delay);
        }
    }
}