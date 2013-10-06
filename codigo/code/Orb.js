var Orb = function()
{
	this.Obj 		= 0;
	this.PlanetLink = 0;
	this.Theta		= 0.0;

	this.Orbit		= 0;
	var thread		= 0;
	this.OrbitChanging	= 0; // 0 = false, 1= true , 2 = done

	this.PlayerLink	= 0;
};
Orb.prototype.setOrbit = function (u)
{
	if(this.PlanetLink.NumberOrbits >= u && u > 0)
	{
		this.Orbit = u;
	}
};

Orb.prototype.getOrbit = function()
{
	return this.Orbit;
}
Orb.prototype.update = function()
{
	this.Obj.setLocX((Math.cos(this.Theta))*Math.pow(5,this.Orbit/2)*6+this.PlanetLink.Obj.getLocX());
	this.Obj.setLocZ((Math.sin(this.Theta))*Math.pow(5,this.Orbit/2)*6+this.PlanetLink.Obj.getLocZ());

	this.Theta += 1/this.Orbit*0.01;
	this.Obj.setRotY(-this.Theta);
	if(this.Theta > Math.PI*2)
		this.Theta = 0;
	if(this.OrbitChanging == 2)
	{
		clearInterval(this.thread);
		this.OrbitChanging = 0;
	}
}
Orb.prototype.orbitChange = function (u)
{
	if(this.Orbit != u && u <= this.planetLink.numberOrbits && this.OrbitChanging == 0)
		if(this.Orbit > u)
		{
			var a = this;
			this.OrbitChanging = 1;
			this.thread = setInterval(function() {
				if(a.Orbit > u)
					a.Orbit-=0.1;
				else{
					a.Orbit = u; // garante que a variavel Orbit tera um valor inteiro
					a.OrbitChanging = 2;
				}
			},10)
		}else if(this.Orbit < u)
		{
			var a = this;
			this.OrbitChanging = 1;
			this.thread = setInterval(function() {
				if(a.Orbit <= u)
					a.Orbit+=0.1;
				else{
					a.Orbit = u; // garante que a variavel Orbit tera um valor inteiro
					a.OrbitChanging = 2;
				}
			},10)
		}
}