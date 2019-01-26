class TestLevel extends Level
{
	initialize()
	{
		this.setSize(32);
		this.rotate(0);
		
		this.add(new Player(new Position(16,16)));
		
		this.add(new WoodenFence(new Position(12,15)));
		this.add(new WoodenFence(new Position(12,16)));
		this.add(new WoodenFence(new Position(12,17)));
		
		this.add(new ElectricFence(new Position(20,15)));
		this.add(new ElectricFence(new Position(20,16)));
		this.add(new ElectricFence(new Position(20,17)));
	}
}