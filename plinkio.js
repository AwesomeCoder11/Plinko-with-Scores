class Plinkos {

    constructor(x,y){

var options={

isStatic:true
}


this.body = Bodies.circle(x, y,10,options);
      
this.x=x;
		this.y=y;
		this.r=10
      World.add(world, this.body);
    }
display(){
var pos =this.body.position;
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.r,this.r);
}
}
