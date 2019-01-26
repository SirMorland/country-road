class Drawable
{
	constructor(parent, position)
	{
		this.parent = parent;
		this.position = position;
	}
	
	update()
	{
		
	}
	
	draw()
	{
		
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
        ctx.arc(this.position.x * size, this.position.y * size, this.radius * size, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}