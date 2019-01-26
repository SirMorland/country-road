class ParkingLot extends Level
{
	initialize()
	{
		//Set level size
		this.setSize(16);
		
		//Add borders
		this.add(new WoodenFence(1, 1));
		this.add(new WoodenFence(2, 1));
		this.add(new WoodenFence(3, 1));
		this.add(new WoodenFence(4, 1));
		this.add(new WoodenFence(5, 1));
		this.add(new WoodenFence(6, 1));
		this.add(new WoodenFence(7, 1));
		this.add(new WoodenFence(8, 1));
		this.add(new WoodenFence(9, 1));
		this.add(new WoodenFence(10, 1));
		this.add(new WoodenFence(11, 1));
		this.add(new WoodenFence(12, 1));
		this.add(new WoodenFence(13, 1));
		this.add(new WoodenFence(14, 1));
		this.add(new WoodenFence(15, 1));
		this.add(new WoodenFence(15, 2));
		this.add(new WoodenFence(15, 3));
		this.add(new WoodenFence(15, 4));
		this.add(new WoodenFence(15, 5));
		this.add(new WoodenFence(15, 6));
		this.add(new WoodenFence(15, 7));
		this.add(new woodenFence(15, 8));
		this.add(new WoodenFence(15, 9));
		this.add(new WoodenFence(15, 10));
		this.add(new WoodenFence(15, 11));
		this.add(new WoodenFence(15, 12));
		this.add(new WoodenFence(15, 13));
		this.add(new WoodenFence(15, 14));
		this.add(new WoodenFence(15, 15));
		this.add(new WoodenFence(14, 15));
		this.add(new WoodenFence(13, 15));
		this.add(new WoodenFence(12, 15));
		this.add(new WoodenFence(11, 15));
		this.add(new WoodenFence(10, 15));
		this.add(new WoodenFence(9, 15));
		this.add(new WoodenFence(8, 15));
		this.add(new WoodenFence(7, 15));
		this.add(new WoodenFence(6, 15));
		this.add(new WoodenFence(5, 15));
		this.add(new WoodenFence(4, 15));
		this.add(new WoodenFence(3, 15));
		this.add(new WoodenFence(2, 15));
		this.add(new WoodenFence(1, 15));
		this.add(new WoodenFence(1, 14));
		this.add(new WoodenFence(1, 13));
		this.add(new WoodenFence(1, 12));
		this.add(new WoodenFence(1, 11));
		this.add(new WoodenFence(1, 10));
		this.add(new WoodenFence(1, 9));
		this.add(new WoodenFence(1, 8));
		this.add(new WoodenFence(1, 7));
		this.add(new WoodenFence(1, 6));
		this.add(new WoodenFence(1, 5));
		this.add(new WoodenFence(1, 4));
		this.add(new WoodenFence(1, 3));
		this.add(new WoodenFence(1, 2));
		
		//Add player.
		//Player moves towards mouse position.
		this.add(new Player(3, 8));
		
		//Add goal.
		//Go to next level once you reach goal!
		this.add(new Goal(13, 8, Driveway));
	}
}

class Driveway extends Level
{
	initialize()
	{
		//Set level size
		this.setSize(16);
		
		//Add borders between given points
		this.addBorders([
			[1,1], [1,15], [15,15], [15,1]
		]);
		
		//Add player.
		this.add(new Player(3, 8));
		
		//Add goal.
		this.add(new Goal(13, 8, Alleyway));
		
		//Add obstacles
		this.add(new WoodenFence(8, 7));
		this.add(new WoodenFence(8, 8));
		this.add(new WoodenFence(8, 9));
	}
}

class Alleyway extends Level
{
	initialize()
	{
		//Set level size
		this.setSize(32);
		
		//Add borders between given points
		this.addBorders([
			[1,11], [1,21], [31,21], [31,11]
		]);
		
		//Add player.
		this.add(new Player(6, 16));
		
		//Add goal.
		this.add(new Goal(26, 16, Level));
		
		//Add hazards.
		//Touching these kills player and level starts from beginning.
		this.add(new ElectricFence(11, 16));
		this.add(new ElectricFence(11, 15));
		this.add(new ElectricFence(11, 17));
		this.add(new ElectricFence(11, 18));
		this.add(new ElectricFence(11, 19));
		this.add(new ElectricFence(11, 20));
		
		this.add(new ElectricFence(21, 12));
		this.add(new ElectricFence(21, 13));
		this.add(new ElectricFence(21, 14));
		this.add(new ElectricFence(21, 15));
		this.add(new ElectricFence(21, 16));
		this.add(new ElectricFence(21, 17));
	}
}