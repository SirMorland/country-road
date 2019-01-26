class ParkingLot extends Level
{
	initialize()
	{
		//Set level size
		this.setSize(16);
		
		//Add borders
		this.add(new WoodenFence(0, 0));
		this.add(new WoodenFence(1, 0));
		this.add(new WoodenFence(2, 0));
		this.add(new WoodenFence(3, 0));
		this.add(new WoodenFence(4, 0));
		this.add(new WoodenFence(5, 0));
		this.add(new WoodenFence(6, 0));
		this.add(new WoodenFence(7, 0));
		this.add(new WoodenFence(8, 0));
		this.add(new WoodenFence(9, 0));
		this.add(new WoodenFence(10, 0));
		this.add(new WoodenFence(11, 0));
		this.add(new WoodenFence(12, 0));
		this.add(new WoodenFence(13, 0));
		this.add(new WoodenFence(14, 0));
		this.add(new WoodenFence(15, 0));
		this.add(new WoodenFence(15, 1));
		this.add(new WoodenFence(15, 2));
		this.add(new WoodenFence(15, 3));
		this.add(new WoodenFence(15, 4));
		this.add(new WoodenFence(15, 5));
		this.add(new WoodenFence(15, 6));
		this.add(new woodenFence(15, 7));
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
		this.add(new WoodenFence(0, 15));
		this.add(new WoodenFence(0, 14));
		this.add(new WoodenFence(0, 13));
		this.add(new WoodenFence(0, 12));
		this.add(new WoodenFence(0, 11));
		this.add(new WoodenFence(0, 10));
		this.add(new WoodenFence(0, 9));
		this.add(new WoodenFence(0, 8));
		this.add(new WoodenFence(0, 7));
		this.add(new WoodenFence(0, 6));
		this.add(new WoodenFence(0, 5));
		this.add(new WoodenFence(0, 4));
		this.add(new WoodenFence(0, 3));
		this.add(new WoodenFence(0, 2));
		this.add(new WoodenFence(0, 1));
		
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
			[0,0], [0,15], [15,15], [15,0]
		]);
		
		//Add player.
		this.add(new Player(3, 8));
		
		//Add goal.
		this.add(new Goal(13, 8, Alleyway));
		
		//Add obstacles
		this.add(new WoodenFence(8, 4));
		this.add(new WoodenFence(8, 5));
		this.add(new WoodenFence(7, 6));
		this.add(new WoodenFence(7, 7));
		this.add(new WoodenFence(8, 8));
		this.add(new WoodenFence(8, 9));
		this.add(new WoodenFence(7, 10));
		this.add(new WoodenFence(7, 11));
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
			[0,10], [0,21], [31,21], [31,10]
		]);
		
		//Add player.
		this.add(new Player(6, 16));
		
		//Add goal.
		this.add(new Goal(26, 16, LabLvl2));
		
		//Add hazards.
		//Touching these kills player and level starts from beginning.
		this.add(new ElectricFence(11, 15));
		this.add(new ElectricFence(11, 16));
		this.add(new ElectricFence(11, 17));
		this.add(new ElectricFence(11, 18));
		this.add(new ElectricFence(11, 19));
		this.add(new ElectricFence(11, 20));
		
		this.add(new ElectricFence(20, 11));
		this.add(new ElectricFence(20, 12));
		this.add(new ElectricFence(20, 13));
		this.add(new ElectricFence(20, 14));
		this.add(new ElectricFence(20, 15));
		this.add(new ElectricFence(20, 16));
	}
}

class LabLvl2 extends Level
{
	initialize()
	{
		//Set level size
		this.setSize(64);
		
		//Add borders between given points
		this.addBorders([
			[0,0], [63,0], [63,63], [0,63]
		]);
		
		//Add player.
		this.add(new Player(4, 4));
		
		//Add goal.
		this.add(new Goal(36, 28, Level));
		
        //Add Fences.
        //These walls restrict your movement
        var i;
        //Vertical
        for (i = 1; i < 56; i++) 
        {
            this.add(new WoodenFence(8, i));
        } 
        for (i = 16; i < 40; i++) 
        {
            this.add(new WoodenFence(24, i));
        } 
        for (i = 24; i < 40; i++) 
        {
            this.add(new WoodenFence(40, i));
        } 
        for (i = 8; i < 56; i++) 
        {
            this.add(new WoodenFence(56, i));
        } 
        //Horizontal
        for (i = 16; i < 56; i++) 
        {
            this.add(new WoodenFence(i, 8));
        } 
        for (i = 32; i < 40; i++) 
        {
            this.add(new WoodenFence(i, 24));
        } 
        for (i = 16; i < 48; i++) 
        {
            this.add(new WoodenFence(i, 48));
        } 
        
		//Add hazards.
		//Touching these kills player and level starts from beginning.
		//Vertical
        for (i = 8; i < 48; i++) 
        {
            this.add(new ElectricFence(16, i));
        } 
        for (i = 24; i < 32; i++) 
        {
            this.add(new ElectricFence(32, i));
        } 
        for (i = 16; i < 48; i++) 
        {
            this.add(new ElectricFence(48, i));
        } 
        //Horizontal
        for (i = 24; i < 48; i++) 
        {
            this.add(new ElectricFence(i, 16));
        } 
        for (i = 24; i < 40; i++) 
        {
            this.add(new ElectricFence(i, 40));
        } 
        for (i = 8; i < 56; i++) 
        {
            this.add(new ElectricFence(i, 56));
        } 
		
	}
}