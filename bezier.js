class Bezier
{
    constructor(totalsteps)
    {
        this.totalsteps=totalsteps;
        this.secondx=200;
        this.secondy=200;
    }
    getXY(ii,pointsx,pointsy)
    {
        var array=[];

        var t = ii/ this.totalsteps;
        
        array[0]= bezierPoint(pointsx[3],pointsx[2],pointsx[1],pointsx[0],t);
        array[1]=bezierPoint(pointsy[3],pointsy[2],pointsy[1],pointsy[0],t);
        let tx = bezierTangent(pointsx[3],pointsx[2],pointsx[1],pointsx[0],t);
        let ty = bezierTangent(pointsy[3],pointsy[2],pointsy[1],pointsy[0],t);
        array[2] = atan2(ty, tx);
        return array;
        
    }
    drawbezier(pointsx,pointsy)
    {
        noFill();
        for(var i=pointsx.length;i>0;i--)
        {
        bezier(pointsx[i-1],pointsy[i-1],pointsx[i-1]+this.secondx,pointsy[i-1]+this.secondy,pointsx[i]-this.secondx,pointsy[i]-this.secondy,pointsx[i],pointsy[i]);
        }
    }

}
