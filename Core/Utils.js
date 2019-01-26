class Position
{	
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
	
	distance(position)
	{
		return Math.sqrt(
			Math.pow(position.x - this.x, 2) + Math.pow(position.y - this.y, 2)
		);
	}
	
	lerp(direction, amount)
	{
		amount = Math.min(amount, this.distance(direction));
		
		var h = direction.y - this.y;
		var w = direction.x - this.x;
		
		var a = Math.atan2(w, h);
		
		var i = amount * Math.sin(a);
		var j = amount * Math.cos(a);
		
		this.x += i;
		this.y += j;
	}
}