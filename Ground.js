class Ground{
	constructor(x,y,w,h){
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
	}

	display(){
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke(128,128,128);
			fill(128,128,128);
			rect(0,12,this.w, this.h+15);
			pop()
	}

}