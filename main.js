function preload() {
      
}

function setup() {
var canvas= createCanvas(400,400);
canvas.position(100,300);    
  video=createCapture(VIDEO);
  video.hide();
}

function draw() {
    image(video,0,0,400,400);
}

