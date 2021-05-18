class Point{
    constructor(totalpoints){
        this.totalpoints=totalpoints;
    }
    returnx(beforepointx)
    {
        let x=[-displayWidth,-displayWidth*3/4,-displayWidth*2/4,-displayWidth/4,beforepointx];
  
        return x;
    
    }
    returny()
    {
    let y=[];
    let siny=map(sin(PI/2),-1,1,500,displayHeight-(displayHeight-windowHeight)-50);
    let siny2=map(sin(PI),1,-1,500,displayHeight-(displayHeight-windowHeight)-50);
      y=[siny2,siny,siny2,siny,siny2];

      return y;
    

    }
    
}