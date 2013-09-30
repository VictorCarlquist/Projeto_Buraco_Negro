var Orb = function()
{
	this.obj 		= 0;
	this.planetLink = 0;
	this.theta		= 0.0;

	var	orbit		= 0;
	var thread		= 0;
	this.orbitChanging	= 0; // 0 = false, 1= true , 2 = done
};
Orb.prototype.setOrbit = function (u)
{
	if(this.planetLink.numberOrbits >= u && u > 0)
	{
		this.orbit = u;
	}
};

Orb.prototype.getOrbit = function()
{
	return this.orbit;
}
Orb.prototype.update = function()
{
	this.obj.setLocX((Math.cos(this.theta))*Math.pow(5,this.orbit/2)*6+this.planetLink.obj.getLocX());
	this.obj.setLocZ((Math.sin(this.theta))*Math.pow(5,this.orbit/2)*6+this.planetLink.obj.getLocZ());

	this.theta += 1/this.orbit*0.05;
	this.obj.setRotY(-this.theta);
	if(this.theta > Math.PI*2)
		this.theta = 0;
	if(this.orbitChanging == 2)
	{
		clearInterval(this.thread);
		this.orbitChanging = 0;
	}
}
Orb.prototype.orbitChange = function (u)
{
	if(this.orbit != u && u <= this.planetLink.numberOrbits && this.orbitChanging == 0)
		if(this.orbit > u)
		{
			var a = this;
			this.orbitChanging = 1;
			this.thread = setInterval(function() {
				if(a.orbit > u)
					a.orbit-=0.01;
				else{
					a.orbit = u; // garante que a variavel orbit tera um valor inteiro
					a.orbitChanging = 2;
				}
			},10)
		}else if(this.orbit < u)
		{
			var a = this;
			this.orbitChanging = 1;
			this.thread = setInterval(function() {
				if(a.orbit <= u)
					a.orbit+=0.01;
				else{
					a.orbit = u; // garante que a variavel orbit tera um valor inteiro
					a.orbitChanging = 2;
				}
			},10)
		}
}