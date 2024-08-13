import { log } from "console";

let canvas:HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d");
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

let str:string = "www01010101"
let arr = Array(Math.ceil(canvas.width / 10)).fill(0);
log(arr);

const 