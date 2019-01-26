class Level
{
	constructor()
	{
		this.elements = [];
		this.initialize();
	}
	
	initialize()
	{
		this.setSize(32);
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
	
	setSize(size)
	{
		this.size = canvas.height / size;
	}
	
	reload()
	{
		this.elements = [];
		this.initialize();
	}
}