class Paper{
  constructor(x,y,r){
    var options = {
     isStatic: false,
     restitution: 0.3,
     friction: 0,
     density: 1.2
    }
    
    this.x=x;
	  this.y=y;
    this.r=r;

    this.image=loadImage("paper.png");

    this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
   	World.add(world, this.body);
  }

  display(){
    var paperPos=this.body.position;		

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    push()
    translate(paperPos.x, paperPos.y);
    strokeWeight(1);
    stroke(255,255,255);
    fill(255,255,255);
    ellipse(0,0,this.r, this.r);
    imageMode(CENTER);
		image(this.image, 0,-this.y/200,this.x/4,this.y/7)
    pop()
  }

}