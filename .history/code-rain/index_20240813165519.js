
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
let str = "www01010101";
let arr = Array(Math.ceil(canvas.width / 10)).fill(0);
(0, console_1.log)(arr);
const rain = () => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    arr.forEach((item, index) => {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
    });
};
