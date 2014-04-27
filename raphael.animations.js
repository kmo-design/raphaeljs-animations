function setCircles(R,n,x,y,w,h,s) {
    var set = R.set();
    for (i = 0; i < n; i++) {
        set.push(R.circle(x + (w * Math.random()), y + (h * Math.random()), s));
    }
    return set.attr({ stroke: "none", fill: "#fff", opacity: 0 });
}

function setBars(R,n,x,y,w,h) {
    var set = R.set();
    for (i = 0; i < n; i++) {
        set.push(R.rect(x + (w * i * Math.random()), 0, w * Math.random(), h));
    }
    return set.attr({ stroke: "none", fill: "#fff", opacity: 0 });
}

function setText(R, text, font, color, x, y) {
    return R.text(x, y, text).attr({ font: font, opacity: 0, fill: color });
};

fade = function (id,opacity) { return function () { id.animate({ opacity: opacity }, 2000) } };

fadein = function (id) { return function () { id.animate({ opacity: 1 }, 2000) } };

fadeout = function (id) { return function () { id.animate({ opacity: 0 }, 2000); } };

randomCloud = function (set, x, y, w, h, t, o) {
    return function () {
        set.stop().attr({ opacity: 0 });

        for (i = 0; i < set.length; i++) {
            var cx = x + (w * Math.random());
            var cy = y + (h * Math.random());
            set[i].animate({ "1%": { x: set[i].attr("x"), callback: fade(set[i],o)}, "90%": { cx: cx, cy: cy }, "91%": { x: set[i].attr("x"), callback: fade(set[i],0)} }, t);
        }
    };
};

movingBars = function (set, x, time) {
    return function () {
        set.stop().attr({ opacity: .2 });

        for (i = 0; i < set.length; i++) {
            var ox = set[i].attr("x");
            var cx;

            if (x <= ox) {
                cx = x
            } else {
                cx = x - set[i].attr("width")
            };
            set[i].animate({ "25%": { x: cx }, "50%": { x: ox }, "75%": { x: cx }, "90%": { x: ox, callback: fadeout(set[i]) }, "100%": { x: ox} }, time);
        }
    };
};

expandText = function (text, opacity, time) {
    return function () {
        text.animate({ "25%": { scale: "2, 2", opacity: opacity}, "75%" : { opacity: 0} }, time);
    };
};
