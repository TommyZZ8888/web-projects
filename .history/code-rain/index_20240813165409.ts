import { log } from "console";

let canvas:HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

let str:string = "www01010101"
let arr = Array(Math.ceil(canvas.width / 10)).fill(0);
log(arr);

const rain = ()=>{
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    arr.forEach((item,index)=>{
ctx.fillText(str[Math.floor(Math.random() * str.length)],index*10,item);
    })
}