class Player extends Circle
{
	constructor(position)
	{
		super(null, position, 0.5, "#fff");
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
		}
	}
	
	draw()
	{
		super.draw();
	}
	
	electrify()
	{
		this.dead = true;
		canvas.setAttribute("style", "filter:invert(1);");
		setTimeout(function(){canvas.setAttribute("style", "filter:invert(0);");}, 200);
		setTimeout(function(){canvas.setAttribute("style", "filter:invert(1);");}, 400);
		setTimeout(function(){canvas.setAttribute("style", "filter:invert(0);");}, 600);
		setTimeout(function(){game.level.reload();}, 800);
	}
}