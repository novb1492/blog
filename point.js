class Point{
    constructor(){}
    returnx()
    {
        let x=[displayWidth,displayWidth*3/4,displayWidth*2/4,displayWidth/4,beforepointx];
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
    let y=[];
    let siny=map(sin(PI/2),-1,1,500,displayHeight-(displayHeight-windowHeight)-50);
    let siny2=map(sin(PI),1,-1,500,displayHeight-(displayHeight-windowHeight)-50);
        y=[siny2,siny,siny2,siny,siny2];
    if(y.length==this.totalpoints)
    {
        return y;
    }
    else{
        console.log('pointclass수정해pointyarray');
    }
    }
    
}