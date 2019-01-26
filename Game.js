class Game
{
	constructor(width, height)
	{
		this.width = width;
		this.height = height;
		
		this.level = new Level(64);
	}
	
	update()
	{
		this.level.update();
	}
	
	draw()
	{
		this.level.draw();
	}
}