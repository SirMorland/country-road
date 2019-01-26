class Player extends Circle
{
	constructor(position)
	{
		super(null, position, 1, "#fff");
	}
	
	update()
	{
		if(mousePos != null) {
			this.position.lerp(mousePos, 1);
		}
	}
	
	draw()
	{
		super.draw();
	}
}