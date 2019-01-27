class Game
{
	constructor(width, height)
	{
		this.width = width;
		this.height = height;
		
		this.level = new Minefield();
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