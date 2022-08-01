let myCanvas = document.getElementById("myCanvas");
let pen = myCanvas.getContext("2d");
const WIDTH=myCanvas.width;
const HEIGHT = myCanvas.height;



let eventKB = "";
let body = document.getElementsByTagName("body")[0];
body.onkeydown = function (event) {
  console.log(event.code);
  key = event.code;
};
body.onkeyup = function (event) {
  key = "";
};
let key = "";
const FPS = 60;

let startFrameTime = Date.now();


function gameLoop(){
//     var c =document.getElementById("myCanvas");
// var pen = c.getContext("2d");
// hình tròn lớn
pen.clearRect(0, 0, WIDTH, HEIGHT);

pen.beginPath();
pen.arc(WIDTH/2, HEIGHT/2, 200, 0, 2*Math.PI);
pen.fillStyle="#fbd109"
pen.fill();
pen.stroke();
// hình mắt phải
pen.beginPath();
pen.arc(WIDTH/2.5, HEIGHT/2.5, 30, 0, 2*Math.PI);
pen.fillStyle="#d5dddf"
pen.fill();
pen.stroke();
// hình mắt trái
pen.beginPath();
pen.arc(WIDTH/1.7, HEIGHT/2.5, 30, 0, 2*Math.PI);
pen.fillStyle="#d5dddf"
pen.fill();
pen.stroke();
// mặt cười
pen.beginPath();
pen.arc(WIDTH/2   , HEIGHT/1.5, 50, 0, -1*Math.PI);
pen.stroke();
//hình tròng mắt phải
pen.beginPath();

pen.arc(WIDTH/2.5, HEIGHT/2.5, 10, 0, 2*Math.PI);
pen.fillStyle="#050f00"
pen.fill();
pen.stroke();
//hình tròng mắt trái
pen.beginPath();
pen.arc(WIDTH/1.7, HEIGHT/2.5, 10, 0, 2*Math.PI);
pen.fillStyle="#050f00"
pen.fill();
pen.stroke();


let currentFrameTime = Date.now();
let deltaTime = currentFrameTime - startFrameTime;
let actualFPS = parseInt(1000 / deltaTime);
pen.beginPath();
pen.fillStyle = "black";
pen.font = "10pt Arial";
pen.fillText("FPS: " + actualFPS, 30, 30);
startFrameTime = currentFrameTime;
} 
setInterval(gameLoop, 1000/ FPS)