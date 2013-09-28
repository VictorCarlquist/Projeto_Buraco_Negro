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

var T; //thread
Game.prototype.init = function()
{
	var p = new Planet();
	if(T) clearTimeout(T);
	T 	=	setTimeout(function(){
		var obj		= 	new GLGE.Collada;
		obj.setDocument("model/duck.dae",window.location.href);
		obj.setScale(0.1);

		p = obj;
		scene.addCollada(obj);
	},100);

	p.numberOrbits = 4;
	this.addPlanet(p);

}