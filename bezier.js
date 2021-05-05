class Bezier
{
    constructor(totalsteps)
    {
        this.totalsteps=totalsteps;

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
        bezier(pointsx[0],pointsy[0],pointsx[1],pointsy[1],pointsx[2],pointsy[2],pointsx[3],pointsy[3]);
    }

}