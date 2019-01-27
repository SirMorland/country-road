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

class Crust extends Drawable
{
    constructor(x, y)
	{
		super(null, new Position(x,y));
	}
    draw()
	{
        var size = game.level.size;
		
		ctx.beginPath();
		ctx.fillStyle = "#e8b90c";
        ctx.arc(this.position.x * size, this.position.y * size, 10 * size, 0, 2 * Math.PI);
		ctx.fill();
        
        //Cheese
        ctx.beginPath();
		ctx.fillStyle = "#ebdf13";
        ctx.arc(this.position.x * size, this.position.y * size, 8 * size , 0, 2 * Math.PI);
		ctx.fill();	
	}
}

class Salami extends Circle
{
	constructor(x, y)
	{
		super(null, new Position(x,y), 1, "#e32525");
	}
}

class BellPepper extends Rectangle
{
	constructor(x,y)
	{
		super(null, new Position(x,y), 2, 1, "#5bb11f");
	}
}

class LineV extends Rectangle
{
	constructor(x,y)
	{
		super(null, new Position(x,y), 0.1, 20, "#000");
	}
    
	
}

class LineH extends Rectangle
{
	constructor(x,y)
	{
		super(null, new Position(x,y), 20, 0.1, "#000");
	}
    
	
}


class Mine extends Circle
{
	constructor(x, y)
	{
		super(null, new Position(x,y), 0.25, "#000");
		this.tags = ["collidable", "hazard"];
	}
}

class House extends Drawable
{
	constructor(x,y)
	{
		super(null, new Position(x,y));
		this.tags = ["collidable"];
	}
	
	draw()
	{
		var size = game.level.size;
		
		ctx.beginPath();
		ctx.fillStyle = "#fff";
        ctx.fillRect(
			(this.position.x - 1) * size,
			(this.position.y - 1) * size,
			2 * size,
			2 * size
		);
		ctx.fill();
		
		ctx.beginPath();
		ctx.fillStyle = "#fff";
		ctx.moveTo((this.position.x - 1) * game.level.size, (this.position.y - 1) * game.level.size);
		ctx.lineTo((this.position.x) * game.level.size, (this.position.y - 2) * game.level.size);
		ctx.lineTo((this.position.x + 1) * game.level.size, (this.position.y - 1) * game.level.size);
		ctx.fill();
		
		ctx.beginPath();
		ctx.fillStyle = "#000";
        ctx.fillRect(
			(this.position.x - 0.8) * size,
			(this.position.y + 0.2) * size,
			0.4 * size,
			0.8 * size
		);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#000";
        ctx.fillRect(
			(this.position.x - 0.2) * size,
			(this.position.y + 0.2) * size,
			0.4 * size,
			0.4 * size
		);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#000";
        ctx.fillRect(
			(this.position.x + 0.4) * size,
			(this.position.y + 0.2) * size,
			0.4 * size,
			0.4 * size
		);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#000";
        ctx.fillRect(
			(this.position.x - 0.8) * size,
			(this.position.y - 0.8) * size,
			0.4 * size,
			0.4 * size
		);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#000";
        ctx.fillRect(
			(this.position.x - 0.2) * size,
			(this.position.y - 0.8) * size,
			0.4 * size,
			0.4 * size
		);
		ctx.fill();
		ctx.beginPath();
		ctx.fillStyle = "#000";
        ctx.fillRect(
			(this.position.x + 0.4) * size,
			(this.position.y - 0.8) * size,
			0.4 * size,
			0.4 * size
		);
		ctx.fill();
	}
	
	collides(drawable)
	{	
		var deltaX = drawable.position.x - Math.max(this.position.x - 1, Math.min(drawable.position.x, this.position.x + 1));
		var deltaY = drawable.position.y - Math.max(this.position.y - 1, Math.min(drawable.position.y, this.position.y + 1));
		
		var deltaSquared = deltaX * deltaX + deltaY * deltaY;
		var radiusSquared = drawable.radius * drawable.radius;
		var collides = deltaSquared < radiusSquared;
		
		if(collides) console.log("Game Over");
		
		return collides;
	}
}