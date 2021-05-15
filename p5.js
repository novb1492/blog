var spritedata;
var spritesheet;
let animation=[];
let sheep;
let hill;
let point;
let totalpoints=5;
let pointsx=[];
let pointsy=[];
let pointsw=0;
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
var i=0;
var catcharray=[];
  function draw() 
  {  
   background('gray');
   getpointxy();
   pointsw=swsystem(pointsw);
   hill.drawbezier(pointsx,pointsy);
   i++;
   console.log(pointsx);
   catcharray=hill.getXY(i,pointsx,pointsy);
   movesystem(totalpoints,pointsx,1);
    //sheep.draw(catcharray);
 
  }
  function swsystem(sw)
  {
    if(sw==0)
    {
      return sw=1;
    }

  }
  function getpointxy()
  {
    if(pointsw==0)
    {
      pointsx=point.returnx();
      pointsy=point.returny();
    }
  }
  function movesystem(totalcount,xarray,speed)
  {
    for(var i=0;i<totalcount;i++)
    {
      xarray[i]+=speed;
    }
  }
 
