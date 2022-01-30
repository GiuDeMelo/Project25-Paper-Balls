class Dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=10;
		
		this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}

	display(){
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			//right
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			strokeWeight(1);
			stroke(230,230,230);
			angleMode(RADIANS);
			fill(230,230,230);
			rotate(this.angle);
			rect(10,15,this.wallThickness, this.dustbinHeight);
			pop()

			//left
			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			strokeWeight(1);
			stroke(230,230,230);
			angleMode(RADIANS);
			fill(230,230,230);
			rotate(-1*this.angle)
			rect(-10,15,this.wallThickness, this.dustbinHeight);
			pop()

			//down
			push()
			translate(posBottom.x, posBottom.y+20);
			rectMode(CENTER)
			strokeWeight(1);
			stroke(128,128,128);
			angleMode(RADIANS);
			fill(128,128,128);
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}