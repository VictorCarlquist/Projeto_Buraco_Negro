var Orb = function()
{
	this.Obj 		= 0;
	this.PlanetLink = 0;
	this.Theta		= 0.0;

	this.Orbit		= 0;

	this.PlayerLink	= 0;
	this.Orbits = {1:30,2:80,3:120};
};

Orb.prototype.setOrbit = function (u)
{
	//if(this.PlanetLink.NumberOrbits >= u && u > 0)
	//{

		this.Orbit = u;
	//}
};

Orb.prototype.getOrbit = function()
{
	return this.Orbit;
}
Orb.prototype.getVelocity = function()
{
	return 1/this.Orbit*0.019;
}
Orb.prototype.getLocCircle	=	function(theta,radius,type)
{
	if(type == 'x')
		return Math.cos(theta)*radius+this.PlanetLink.Obj.getLocX();
	else
		return Math.sin(theta)*radius+this.PlanetLink.Obj.getLocZ();
}

Orb.prototype.update = function()
{
	
	this.Obj.setLocX(this.getLocCircle(this.Theta,this.Orbits[this.Orbit],'x')+this.PlanetLink.Obj.getLocX());
	this.Obj.setLocZ(this.getLocCircle(this.Theta,this.Orbits[this.Orbit],'z')+this.PlanetLink.Obj.getLocZ());

	
	this.Theta += this.getVelocity();
	this.Obj.setRotY(-this.Theta);
	if(this.Theta > Math.PI*2) // evita estouro da variavel
		this.Theta = 0;
}
