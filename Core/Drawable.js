class Drawable
{
	constructor(parent, position)
	{
		this.parent = parent;
		this.position = position;
		this.tags = [];
	}
	
	update()
	{
		
	}
	
	draw()
	{
		
	}
	
	collides(drawable)
	{
		return false;
	}
}

class Circle extends Drawable
{
	constructor(parent, position, radius, color)
	{
		super(parent, position);
		this.radius = radius;
		this.color = color;
	}
	
	update() 
	{
		
	}
	
	draw()
	{
		var size = game.level.size;
		
		ctx.beginPath();
		ctx.fillStyle = this.color;
        ctx.arc(this.position.x * size, this.position.y * size, this.radius * size, 0, 2 * Math.PI);
		ctx.fill();
	}
	
	collides(drawable)
	{
		var distance = this.position.distance(drawable.position);
		var radius = this.radius + drawable.radius;
		var collides = distance < radius;
		
		if(collides) {
			drawable.position.lerp(this.position, distance - radius);
		}
		
		return collides;
	}
}

class Rectangle extends Drawable
{
	constructor(parent, position, width, height, color)
	{
		super(parent, position);
		this.width = width;
		this.height = height;
		this.color = color;
	}
	
	update() 
	{
		
	}
	
	draw()
	{
		var size = game.level.size;
		
		ctx.beginPath();
		ctx.fillStyle = this.color;
        ctx.fillRect(
			(this.position.x - this.width / 2) * size,
			(this.position.y - this.height / 2) * size,
			this.width * size,
			this.height * size
		);
		ctx.fill();
	}
	
	collides(drawable)
	{
		var deltaX = drawable.position.x - Math.max(this.position.x - this.width / 2, Math.min(drawable.position.x, this.position.x + this.width / 2));
		var deltaY = drawable.position.y - Math.max(this.position.y - this.height / 2, Math.min(drawable.position.y, this.position.y + this.height / 2));
		
		var deltaSquared = deltaX * deltaX + deltaY * deltaY;
		var radiusSquared = drawable.radius * drawable.radius;
		var collides = deltaSquared < radiusSquared;
		
		if(collides) {
			drawable.position.lerp(this.position, Math.sqrt(deltaSquared) - Math.sqrt(radiusSquared));
		}
		
		return collides;
	}
}

class Triangle extends Drawable
{
	constructor(parent, position, points, color)
	{
		super(parent, position);
		this.points = points;
		this.color = color;
		
		var zero = new Position(0, 0);
		var shortest = zero.distance(points[0]);
		for(var i = 1; i < 3; i++) {
			var distance = zero.distance(points[i]);
			if(distance < shortest) shortest = distance;
		}
		this.radius = shortest;
	}
	
	update() 
	{
		
	}
	
	draw()
	{
		var size = game.level.size;
		
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo((this.position.x + this.points[0].x) * game.level.size, (this.position.y + this.points[0].y) * game.level.size);
		ctx.lineTo((this.position.x + this.points[1].x) * game.level.size, (this.position.y + this.points[1].y) * game.level.size);
		ctx.lineTo((this.position.x + this.points[2].x) * game.level.size, (this.position.y + this.points[2].y) * game.level.size);
		ctx.fill();
	}
	
	collides(drawable)
	{
		var distance = this.position.distance(drawable.position);
		var radius = this.radius + drawable.radius;
		var collides = distance < radius;
		
		if(collides) {
			drawable.position.lerp(this.position, distance - radius);
		}
		
		return collides;
	}
}