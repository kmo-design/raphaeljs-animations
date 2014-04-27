var R = Raphael("banner", 1280, 600);

var img = R.image("http://upload.wikimedia.org/wikipedia/commons/thumb/5/50/D%C3%B4me_du_Go%C3%BBter_depuis_la_gare_des_glaciers.jpg/1280px-D%C3%B4me_du_Go%C3%BBter_depuis_la_gare_des_glaciers.jpg", 0, 0, 1280, 851);

img.animate({
    "5%": { x: 0, callback: randomCloud(setCircles(R, 10, 200, -200, 1200, 400, 4), -200, 0, 1600, 1200, 16000, .3) },
    "10%": { x: 0, callback: randomCloud(setCircles(R, 20, 200, -200, 1200, 400, 6), -200, 0, 1600, 1200, 24000, .2) },
    "15%": { x: 0, callback: randomCloud(setCircles(R, 40, 200, -200, 1200, 400, 2), -200, 0, 1600, 1200, 16000, .3) },
    "20%": { x: 0, callback: randomCloud(setCircles(R, 30, 200, -200, 1200, 400, 8), -200, 0, 1600, 1200, 24000, .2) },
    "25%": { x: 0, callback: randomCloud(setCircles(R, 40, 200, -200, 1200, 400, 2), -200, 0, 1600, 1200, 12000, .3) },
    "30%": { x: 0, callback: randomCloud(setCircles(R, 30, 200, -200, 1200, 400, 6), -200, 0, 1600, 1200, 14000, .2) },
    "35%": { x: 0, callback: randomCloud(setCircles(R, 20, 200, -200, 1200, 400, 12), -200, 0, 1600, 1200, 24000, .2) },
    "40%": { x: 0, callback: randomCloud(setCircles(R, 40, 200, -200, 1200, 400, 4), -200, 0, 1600, 1200, 16000, .2) },
    "45%": { x: 0, callback: randomCloud(setCircles(R, 40, 200, -200, 1200, 400, 2), -200, 0, 1600, 1200, 16000, .3) },
    "50%": { x: 0, callback: randomCloud(setCircles(R, 40, 200, -200, 1200, 400, 4), -200, 0, 1600, 1200, 12000, .3) },
    "55%": { x: 0, callback: randomCloud(setCircles(R, 30, 200, -200, 1200, 400, 6), -200, 0, 1600, 1200, 24000, .2) },
    "60%": { x: 0, callback: randomCloud(setCircles(R, 40, 200, -200, 1200, 400, 4), -200, 0, 1600, 1200, 16000, .3) },
    "65%": { x: 0, callback: randomCloud(setCircles(R, 20, 200, -200, 1200, 400, 8), -200, 0, 1600, 1200, 20000, .3) },
    "70%": { x: 0, callback: randomCloud(setCircles(R, 20, 200, -200, 1200, 400, 2), -200, 0, 1600, 1200, 12000, .3) },
    "75%": { x: 0, callback: randomCloud(setCircles(R, 10, 200, -200, 1200, 400, 2), -200, 0, 1600, 1200, 8000, .3) },
    "95%": { x: 0, callback: fadeout(img) },
}, 60000);


setTimeout(function () { R.safari(); });
