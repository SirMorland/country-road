class WoodenFence extends Rectangle
{
	constructor(x,y)
	{
		super(null, new Position(x,y), 1, 1, "#fff");
		this.tags = ["collidable"];
	}
}

class woodenFence extends Rectangle
{
	constructor(x,y)
	{
		super(null, new Position(x,y), 1, 1, "#fff");
	}
}

class ElectricFence extends Rectangle
{
	constructor(x,y)
	{
		super(null, new Position(x,y), 1, 1, "#000");
		this.tags = ["collidable", "hazard"];
	}
}

class Goal extends Triangle
{
	constructor(x, y, nextLevel)
	{
		super(null, new Position(x,y), [
			new Position(-0.5, -0.5),
			new Position(0.5, 0),
			new Position(-0.5, 0.5)
		], "#fff");
		this.tags = ["collidable"];
		
		this.nextLevel = nextLevel;
	}
	
	collides(drawable)
	{
		var distance = this.position.distance(drawable.position);
		var radius = this.radius + drawable.radius;
		var collides = distance < radius;
		
		if(collides) game.level = new this.nextLevel();
		
		return collides;
	}
}