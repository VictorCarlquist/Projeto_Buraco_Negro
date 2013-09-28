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

Game.prototype.init = function()
{
	//adiciona planeta
	var p = new Planet();
	var obj		= 	new GLGE.Collada;
	obj.setDocument("model/duck.dae",window.location.href);
	obj.setScale(0.05);
	p.obj = obj;
	scene.addCollada(p.obj);
	p.numberOrbits = 4;
	this.addPlanet(p);

	//adiciona nave
	var s = new SpaceShip();
	var obj		= 	new GLGE.Collada;
	obj.setDocument("model/seymourplane_triangulate.dae",window.location.href);
	obj.setScale(1);
	s.obj = obj;
	scene.addCollada(s.obj);
	s.planetLink = p;
	s.setOrbit(4);
	this.addSpaceShip(s);

	//adiciona nave
	var s = new SpaceShip();
	var obj		= 	new GLGE.Collada;
	obj.setDocument("model/seymourplane_triangulate.dae",window.location.href);
	obj.setScale(1);
	s.obj = obj;
	scene.addCollada(s.obj);
	s.planetLink = p;
	s.setOrbit(3);
	this.addSpaceShip(s);

	//adiciona nave
	var s = new SpaceShip();
	var obj		= 	new GLGE.Collada;
	obj.setDocument("model/seymourplane_triangulate.dae",window.location.href);
	obj.setScale(1);
	s.obj = obj;
	scene.addCollada(s.obj);
	s.planetLink = p;
	s.setOrbit(2);
	this.addSpaceShip(s);

	//adiciona nave
	var s = new SpaceShip();
	var obj		= 	new GLGE.Collada;
	obj.setDocument("model/seymourplane_triangulate.dae",window.location.href);
	obj.setScale(1);
	s.obj = obj;
	scene.addCollada(s.obj);
	s.planetLink = p;
	s.setOrbit(1);
	this.addSpaceShip(s);
}