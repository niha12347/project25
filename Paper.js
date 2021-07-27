class Paper
{
	constructor(x,y,r)
	{
		var options={
			restitution :0,
            friction :0,
            density :1.2		
			}
		
		this.body=Bodies.circle(x,y,r/2,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);

	}
	display()
	{
		var angle = this.body.angle;

			push()
        fill("white");
		translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
			pop()
	}

}


