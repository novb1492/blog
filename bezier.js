class Bezier
{
    constructor(totalsteps,totalpoints,pointbundle)
    {
        this.totalsteps=totalsteps;
        this.totalpoints=totalpoints;
        this.pointbundle=pointbundle;
        this.secondx=200;
        this.secondy=200;
    }
    /*getXY(ii,pointsx,pointsy)
    {
        var array=[];

        var t = ii/ this.totalsteps;
        
        array[0]= bezierPoint(pointsx[3],pointsx[2],pointsx[1],pointsx[0],t);
        array[1]=bezierPoint(pointsy[3],pointsy[2],pointsy[1],pointsy[0],t);
        let tx = bezierTangent(pointsx[3],pointsx[2],pointsx[1],pointsx[0],t);
        let ty = bezierTangent(pointsy[3],pointsy[2],pointsy[1],pointsy[0],t);
        array[2] = atan2(ty, tx);
        return array;
        
    }*/
    drawbezier(pointx,pointy)
    {
        noFill();
        for(var ii=0;ii<this.pointbundle;ii++)
        { 
          for(var i=this.totalpoints-1;i>0;i--)
          {
          bezier(pointx[ii][i-1],pointy[ii][i-1],pointx[ii][i-1]+this.secondx,pointy[ii][i-1]+this.secondy,pointx[ii][i]-this.secondx,pointy[ii][i]-this.secondy,pointx[ii][i],pointy[ii][i]);
          }
        }
    }

}
