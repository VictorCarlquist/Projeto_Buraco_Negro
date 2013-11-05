var Asteroid = function()
{
	Orb.call(this);
	this.Fuel = 0;
};

GLGE.augment(Orb,Asteroid);