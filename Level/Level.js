class Level
{
	constructor()
	{
		this.elements = [];
		this.initialize();
		
		mousePos = null;
		pressed = false;
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
	
	rotate(degrees)
	{	
		canvas.style.transform = "rotate(" + degrees + "deg)";
	}
	
	add(drawable)
	{
		this.elements.push(drawable);
	}
	
	addBorders(points)
	{
		for(var i = 0; i < points.length; i++) {
			var p1 = new Position(points[i][0], points[i][1]);
			var p2 = new Position(
				points[(i+1) % points.length][0],
				points[(i+1) % points.length][1]
			);
			
			while(p1.x != p2.x || p1.y != p2.y) {
				p1.lerp(p2, 1);
				p1.x = Math.round(p1.x);
				p1.y = Math.round(p1.y);
				this.add(new WoodenFence(p1.x, p1.y));
			}
		}
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