class Point{
    constructor(totalpoints){
        this.totalpoints=totalpoints;
    }
    returnx()
    {
        let x=[0,displayWidth/4,displayWidth*3/4,displayWidth];
        if(x.length==this.totalpoints)
        {
        return x;
        }
        else{
            console.log('pointclass수정해pointxarray');
        }
    }
    returny()
    {
    let y=[displayHeight/2,displayHeight,displayHeight/5,displayHeight/2];
    if(y.length==this.totalpoints)
    {
        return y;
    }
    else{
        console.log('pointclass수정해pointyarray');
    }
    }
    
}