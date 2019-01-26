class Player extends Circle
{
	constructor(position)
	{
		super(null, position, 0.5, "#fff");
	}
	
	update()
	{
		if(mousePos != null) {
			this.position.lerp(mousePos, 0.2)
		}
		
		var player = this;
		
		game.level.elements.forEach(function(element) {
			if(element.tags.includes("collidable")) {
				element.collides(player);
			}
		});
	}
	
	draw()
	{
		super.draw();
	}
}