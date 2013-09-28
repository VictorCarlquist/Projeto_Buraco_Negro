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
	if(this.planetLink.numberOrbits >= u && u > 0)
	{
		this.orbit = u;
	}
};

SpaceShip.prototype.getOrbit = function()
{
	return this.orbit;
}
SpaceShip.prototype.update = function()
{
	this.obj.setLocX((Math.cos(this.teta))*Math.pow(5,this.orbit/2)*6+this.planetLink.obj.getLocX());
	this.obj.setLocZ((Math.sin(this.teta))*Math.pow(5,this.orbit/2)*6+this.planetLink.obj.getLocZ());

	this.teta += 1/this.orbit/100;
	if(this.teta > Math.PI*2)
		this.teta = 0;
}