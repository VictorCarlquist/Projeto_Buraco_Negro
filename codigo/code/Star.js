Star = function ()
{
	this.Orbs  		= [];
	this.Flag 		= 0;
	this.Players 	= [];

	this.Obj 			= 0; //engine model
	this.NumberOrbits 	= 0;
}
Star.prototype.addOrb = function (obj) 
{
	this.Orbs.push(obj);		
}

Star.prototype.updateOrbs	= function ()
{
	for(var i in this.Orbs)
	{
		this.Orbs[i].update();
	}
}
Star.prototype.updatePlayers= function(path, scale, numberOrbits)
{
	for(var i in this.Players)
	{
		this.Players[i].update();
	}
}

Star.prototype.init()
{
	
}

/*Star.prototype.createSpaceShip 	= function (path, scale, planetLink , orbit)
{
	var s = new SpaceShip();
	var obj		= 	new GLGE.Collada;
	obj.setDocument(path,window.location.href);
	obj.setScale(scale);
	s.obj = obj;
	scene.addCollada(s.obj);
	s.planetLink = planetLink;
	s.setOrbit(orbit);

	return s;
}*/