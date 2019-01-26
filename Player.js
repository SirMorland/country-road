class Player extends Circle
{
	constructor(x, y)
	{
		super(null, new Position(x,y), 0.5, "#fff");
		this.dead = false;
	}
	
	update()
	{
		if(!this.dead)
		{
			if(mousePos != null) {
				this.position.lerp(mousePos, 0.2)
			}

			var player = this;

			game.level.elements.forEach(function(element) {
				if(element.tags.includes("collidable")) {
					if(element.collides(player)) {
						if(element.tags.includes("hazard")) player.electrify();
					}
				}
			});
			
			if(this.position.x < 0.5 || this.position.y < 0.5 ||
			   this.position.x > game.width / game.level.size - 0.5 ||
			   this.position.y > game.height / game.level.size - 0.5)
			{
				game.level = new Level();
			}
		}
	}
	
	draw()
	{
		super.draw();
	}
	
	electrify()
	{
		this.dead = true;
		canvas.style.filter = "invert(1)";
		setTimeout(function(){canvas.style.filter = "invert(0)";}, 200);
		setTimeout(function(){canvas.style.filter = "invert(1)";}, 400);
		setTimeout(function(){canvas.style.filter = "invert(0)";}, 600);
		setTimeout(function(){game.level.reload();}, 800);
	}
}