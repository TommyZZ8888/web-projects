Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
var str = "www01010101";
var arr = Array(Math.ceil(canvas.width / 10)).fill(0);
(0, console_1.log)(arr);
var rain = function () {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    arr.forEach(function (item, index) {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
    });
};
