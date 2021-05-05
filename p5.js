var spritedata;
var spritesheet;
let animation=[];
let sheep;
let hill;
let point;
let totalpoints=4;
let pointsx=[];
let pointsy=[];
function preload()
{ 
  //call sheep image and position
  spritedata= loadJSON('horse.json');
  spritesheet = loadImage('sheep.png');
}

function setup() {
  var framerate=60;
  frameRate(framerate);
    createCanvas(displayWidth,displayHeight);
    var frames=[],animation=[];
    frames=spritedata.frames;
    for (var i = 0; i < frames.length; i++) {
      var pos = frames[i].position;
      var img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    var about=[startframe=0,framspeed=10];
    sheep=new sprite(animation,about);
    hill=new Bezier(480);
    point=new Point(totalpoints);
}
var x=500,y=500,i=0;
var catcharray=[];
  function draw() 
  {  
   background('gray');
   pointsx=point.returnx();
   pointsy=point.returny();
   hill.drawbezier(pointsx,pointsy);
   i++;
   catcharray=hill.getXY(i,pointsx,pointsy);
    sheep.draw(catcharray);
  }
 
