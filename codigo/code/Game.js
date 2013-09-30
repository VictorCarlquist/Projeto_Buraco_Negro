var Game = function(scene){
	this.spaceShips 	= []; // vector<SpaceShip>
	this.fuelItems 		= []; // vector<FuelItem>
	this.traps			= []; // vector<Trap>
	this.planets		= []; // vector<Planet>
	this.scene			= scene;
};

Game.prototype.addSpaceShip = function (obj) 
{
	this.spaceShips.push(obj);		
}
Game.prototype.addfuelItem = function (obj) 
{
	this.fuelItems.push(obj);		
}
Game.prototype.addTrap = function (obj) 
{
	this.traps.push(obj);		
}
Game.prototype.addPlanet = function (obj) 
{
	this.planets.push(obj);		
}

Game.prototype.updateSpaceShips	= function ()
{
	for(var i in this.spaceShips)
	{
		this.spaceShips[i].update();
	}
}
Game.prototype.createPlanet	= function(path, scale, numberOrbits)
{
	var p = new Planet();
	var obj		= 	new GLGE.Collada;
	obj.setDocument(path,window.location.href);
	obj.setScale(scale);
	p.obj = obj;
	scene.addCollada(p.obj);
	p.numberOrbits = numberOrbits;
	return p;
}
Game.prototype.createSpaceShip 	= function (path, scale, planetLink , orbit)
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
}

Game.prototype.init = function()
{
	
	var p =	this.createPlanet("model/duck.dae",0.09,4);
	this.addPlanet(p);
	
	this.addSpaceShip(this.createSpaceShip("model/seymourplane_triangulate.dae",1,p,4));
	this.addSpaceShip(this.createSpaceShip("model/seymourplane_triangulate.dae",1,p,3));
	this.addSpaceShip(this.createSpaceShip("model/seymourplane_triangulate.dae",1,p,2));
	this.addSpaceShip(this.createSpaceShip("model/seymourplane_triangulate.dae",1,p,1));
	
}
Game.prototype.checkKeyBoard = function(keys)
{
	if(keys.isKeyPressed(GLGE.KI_W))
	{
		if(game.spaceShips[3].getOrbit() < 4)
			game.spaceShips[3].orbitChange(game.spaceShips[3].getOrbit()+1);
		else
			game.spaceShips[3].orbitChange(1);
	}
}
