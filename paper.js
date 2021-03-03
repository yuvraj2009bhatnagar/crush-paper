class paper
{
	constructor(x,y,r)
	{
		
		this.image = loadImage("paper.png");

		this.x=x;
		this.y=y;
		this.r=r;
		

		 this.body= Bodies.circle(this.x, this.y, this.r, options)
         var options = {
isStatic: false,
restitution :0.3,
friction: 0.2,
density:1.2,

         }
		World.add(world, this.body);
        ellipseMode(RADIUS); 
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
		



		
	}
	display()
	{
        var posbody =this.body.position;
			}
		}
