class TestLevel extends Level
{
	initialize()
	{
		this.setSize(32);
		
		this.add(new Player(new Position(16,16)));
		
		var rect1 = new Rectangle(null, new Position(18, 15), 1, 1, "#000");
		rect1.tags = ["collidable"];
		this.add(rect1);
		var rect2 = new Rectangle(null, new Position(18, 16), 1, 1, "#000");
		rect2.tags = ["collidable", "hazard"];
		this.add(rect2);
		var rect3 = new Rectangle(null, new Position(18, 17), 1, 1, "#000");
		rect3.tags = ["collidable"];
		this.add(rect3);
	}
}