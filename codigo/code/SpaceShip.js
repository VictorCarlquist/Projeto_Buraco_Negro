var SpaceShip = function()
{
	this.obj 		= 0;
	this.fuel 		= 0.0;
	this.teta 		= 0.0;
	this.planetLink = 0;
	this.orbit		= 0;
};

SpaceShip.prototype.setOrbit = function (u)
{
	if(planetLink.numberOrbits >= u && u > 0)
	{
		this.orbit = u;
	}
};

SpaceShip.prototype.getOrbit = function()
{
	return this.orbit;
}