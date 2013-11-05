var Computer = function()
{
	Player.call(this);
	this.Type = "Computer";
	this.Index = 0;
	this.GotFlag = false;
};
GLGE.augment(Player,Computer);

Computer.prototype.think = function(game) {
	
	var r = 0;
	if(!this.GotFlag)
		r = Math.floor((Math.random()*300)+1);
	else
		r = Math.floor((Math.random()*1000)+1);

	if(r == 1)
	{
		for(var i in game.Stars)
		{
			for(var j in game.Stars[i].Orbs)
			{
				var orbit = game.Stars[i].Players[this.Index].LinkOrb.getOrbit();

				if(orbit-1 == game.Stars[i].Orbs[j].getOrbit())
				{
					if(game.Stars[i].Players[this.Index].orbChange(game.Stars[i].Orbs[j]))
					{
						return;
					}
				}
				else if(orbit == 1 && !this.GotFlag)
				{
					if(game.Stars[i].Players[this.Index].orbChange(game.Stars[i].Players[this.Index].LinkOrb,Math.PI) )
					{
						this.GotFlag = true;
						return;
					}
				}
			}
		}
	}
	if(this.GotFlag)
		r = Math.floor((Math.random()*300)+1);
	else
		r = Math.floor((Math.random()*1000)+1);

	if(r == 1)
	{
		for(var i in game.Stars)
		{
			for(var j in game.Stars[i].Orbs)
			{
				var orbit = game.Stars[i].Players[this.Index].LinkOrb.getOrbit();

				if(orbit+1 == game.Stars[i].Orbs[j].getOrbit())
				{
					if(game.Stars[i].Players[this.Index].orbChange(game.Stars[i].Orbs[j]))
					{
						return;
					}
				}
			}
		}
	}
};