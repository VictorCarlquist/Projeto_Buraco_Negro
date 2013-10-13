// ENUM -------------------	
var O_SPACESHIP_1 	= 1;
var O_SPACESHIP_2 	= 2;
var O_SPACESHIP_3 	= 3;
var O_SPACESHIP_4 	= 4;
var O_STAR 			= 5;
var O_ASTEROID		= 6;
//-------------------------
// CONST ------------------
var P_SPACESHIP_1 	= {model:"model/duck.dae", scale : 0.1};
var P_SPACESHIP_2 	= {model:"model/duck.dae", scale : 0.1};
var P_SPACESHIP_3 	= {model:"model/duck.dae", scale : 0.1};
var P_SPACESHIP_4 	= {model:"model/seymourplane_triangulate.dae", scale : 2};
var P_STAR 			= {model:"model/duck.dae", scale : 0.1};
var P_ASTEROID		= {model:"model/duck.dae", scale : 0.1};
//-------------------------
var Game = function(scene){
	this.Stars			= [];
	this.scene			= scene;
};


Game.prototype.init = function()
{	
	var star = this.createObject(O_STAR);

/*
	var player1 = new Human();
	player1.SpaceShip = this.createObject(O_SPACESHIP_4);
	star.addPlayer(player1);
	//player1.PlanetLink(star);
*/
	var player2 = new Human();
	player2.SpaceShip = this.createObject(O_SPACESHIP_4);
	star.addPlayer(player2);

	//player2.PlanetLink(star);


	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(3);
	//asteroid.Theta = Math.PI;
	asteroid.PlanetLink = star;

	
	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(2);
	asteroid.Theta = 0;
	asteroid.PlanetLink = star;

	player2.LinkOrb = asteroid;

	this.Stars.push(star);


}

Game.prototype.checkKeyBoard = function(keys)
{
	if(keys.isKeyPressed(GLGE.KI_W))
	{
		for(var i in this.Stars)
		{
			this.Stars[i].Players[0].orbChange(this.Stars[i].Orbs[0]);
			
		}
	}
}


Game.prototype.createObject = function (type) // type = ENUM O_...
{
	var s,path,scale;
	switch(type)
	{
		case O_SPACESHIP_1:
		case O_SPACESHIP_2:
		case O_SPACESHIP_3:
		case O_SPACESHIP_4: 
			s = new SpaceShip(); 
			path = P_SPACESHIP_4.model; 
			scale = P_SPACESHIP_4.scale; 
		break;
		case O_STAR:
			s = new Star(); 
			path = P_STAR.model; 
			scale = P_STAR.scale; 
		break;
		case O_ASTEROID:
			s = new Asteroid(); 
			path = P_ASTEROID.model; 
			scale = P_ASTEROID.scale; 
		break;
	}

	var obj		= 	new GLGE.Collada;
	obj.setDocument(path,window.location.href);
	obj.setScale(scale);
	s.Obj = obj;
	this.scene.addCollada(s.Obj);

	return s;
}

Game.prototype.update = function()
{
	for(var i in this.Stars)
	{
		this.Stars[i].updateOrbs();
		this.Stars[i].updatePlayers();
	}
}