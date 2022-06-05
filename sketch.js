// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;
let textS;
let x;
let y;
let xspeed = 5;
let yspeed = 2;
let r;
let button;
function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log('Tanti auguri');
  button = createButton('Why would you click me?');
  button.mouseClicked(btkclick);
  let bts=width/50;
  button.position(10,10);
  button.style("font-family", "Bodoni");
  button.style("font-size", bts+"px");
  colorMode(HSB);
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(4);
  background(0);
  textS=width/15;
  x=width/2-3*textS+textS;
  y=height/2+textS;
  r=1;
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  textSize(textS);
  fill(0, 102, 153);
  text('χρόνια πολλά', width/2-3*textS, height/2);
  text('Mouriel', x, y);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function btkclick() {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}