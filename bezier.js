class Bezier
{
    constructor(totalsteps)
    {
        this.totalsteps=totalsteps;
        this.endx=0;
        this.endy=displayHeight/2;
        this.endx2=displayWidth/4;
        this.endy2=displayHeight;
        this.startx2=displayWidth*3/4;
        this.starty2=displayHeight/5;
        this.startx=displayWidth;
        this.starty=displayHeight/2;
    }
    getXY(ii)
    {
        var array=[];

        var t = ii/ this.totalsteps;
        
        array[0]= bezierPoint(this.startx,this.startx2,this.endx2,this.endx,t);
        array[1]=bezierPoint(this.starty,this.starty2,this.endy2,this.endy,t);
        let tx = bezierTangent(this.startx,this.startx2,this.endx2,this.endx,t);
        let ty = bezierTangent(this.starty,this.starty2,this.endy2,this.endy,t);
        array[2] = atan2(ty, tx);
        return array;
        
    }
    drawbezier()
    {
        noFill();
        bezier(this.endx,this.endy,this.endx2,this.endy2,this.startx2,this.starty2,this.startx,this.starty);
    }

}