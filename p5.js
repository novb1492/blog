var spritedata;
var spritesheet;
let animation=[];
let sheep;
let hill;
let point;
let totalpoints=5;
let pointbundle=2;
let pointsx=[];
let pointsy=[];
let pointsw=0;
function preload()
{ 
  //call sheep image and position
  spritedata= loadJSON('horse.json');
  spritesheet = loadImage('sheep.png');
}
function create2DArray(rows, columns) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
      arr[i] = new Array(columns);
  }
  return arr;
}
function returnmin(array)
{
  return Math.min.apply(null,array);
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
    hill=new Bezier(480,totalpoints,pointbundle);
    point=new Point(totalpoints);
    pointsx=create2DArray(2,5);
    pointsy=create2DArray(2,5);
    pointsx[0]=[0,displayWidth/4,displayWidth*2/4,displayWidth*3/4,displayWidth];//초기배열

      pointsy[0]=point.returny();
    
 
}
var i=0;
var catcharray=[];
  function draw() 
  {  
   background('gray');
   getpointxy();
   pointsw=swsystem(pointsw,pointsx[0],pointsx[1],10,10);
   hill.drawbezier(pointsx,pointsy);
   i++;
   console.log(pointsx);
   //catcharray=hill.getXY(i,pointsx,pointsy);
   movesystem(2,totalpoints,pointsx,1);
    //sheep.draw(catcharray);
 
  }
  function swsystem(swnum,xarray,xarray2,target1,target2)
  {
    if(Math.floor(returnmin(xarray))==target1)
    {
      swnum=2;
    }
    if(Math.floor(returnmin(xarray2))==target2)
    {
      swnum=1;
    }
    return swnum;
  }
  function getpointxy()
  {
    let beforepointsx;
  switch (pointsw) {
    case 1:
      beforepointsx=returnmin(pointsx[1]);
      pointsx[0]=point.returnx(beforepointsx);
      pointsy[0]=point.returny();
        //console.log('point1');
          break;
    case 2:
      beforepointsx=returnmin(pointsx[0]);
      pointsx[1]=point.returnx(beforepointsx);
      pointsy[1]=point.returny();
        //console.log('poinposition');
          break;
    default:
      break;
  }
  pointsw=0;
  }
  function movesystem(objectbundle,totalcounts,xarray,speed)
  {
   for(var ii=0;ii<objectbundle;ii++)
   {
      for(var i=0;i<totalcounts;i++)
      {
        xarray[ii][i]+=speed;
      }
    }
  }
 
