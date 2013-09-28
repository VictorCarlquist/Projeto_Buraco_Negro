var Game = function(scene){
	this.spaceShips 	= []; // vector<SpaceShip>
	this.fuelItems 		= []; // vector<FuelItem>
	this.traps			= []; // vector<Trap>
	this.planets		= []; // vector<Planet>
	this.scene			= sene;
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

Game.prototype.init = function()
{

}