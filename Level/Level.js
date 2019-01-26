class Level
{
	constructor(size)
	{
		this.size = canvas.height / size;
		this.elements = [];
		
		this.add(new Player(new Position(32,32)));
	}
	
	update()
	{
		this.elements.forEach(function(element) {
			element.update();
		});
	}
	
	draw()
	{
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, game.width, game.height);
		
		this.elements.forEach(function(element) {
			element.draw();
		});
	}
	
	add(drawable)
	{
		this.elements.push(drawable);
	}
}