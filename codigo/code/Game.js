// ENUM -------------------	
var O_SPACESHIP_1 	= 1;
var O_SPACESHIP_2 	= 2;
var O_SPACESHIP_3 	= 3;
var O_SPACESHIP_4 	= 4;
var O_STAR 			= 5;
var O_ASTEROID		= 6;
//-------------------------
// CONST ------------------
var P_SPACESHIP_1 	= {model:"model/nave-01/nave_01.obj", scale : 15};
var P_SPACESHIP_2 	= {model:"model/nave-02/nave_02.obj", scale : 1};
var P_SPACESHIP_3 	= {model:"model/nave-03/nave_03.obj", scale : 5};
var P_SPACESHIP_4 	= {model:"model/nave-04/nave_04.obj", scale : 1};
var P_STAR 			= {model:"model/esfera.obj", scale : 10};
var P_ASTEROID		= {model:"model/esfera.obj", scale : 10};
//-------------------------
var Game = function(scene){
	this.Stars			= [];
	this.scene			= scene;
};


Game.prototype.init = function()
{	
	var star = this.createObject(O_STAR);

	var player1 = new Human();
	player1.SpaceShip = this.createObject(O_SPACESHIP_3);
	star.addPlayer(player1);

	var computer1 = new Computer();
	computer1.SpaceShip = this.createObject(O_SPACESHIP_2);
	star.addPlayer(computer1);

	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(3);
	asteroid.PlanetLink = star;
	
	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(2);
	asteroid.Theta = 0;
	asteroid.Fuel	= 10;
	asteroid.PlanetLink = star;

	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(4);
	asteroid.Theta = 0;
	asteroid.Fuel	= 10;
	asteroid.PlanetLink = star;

	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(1);
	asteroid.Theta = 1.57;
	asteroid.Fuel	= 10;
	asteroid.PlanetLink = star;

	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(4);
	asteroid.Theta = 2.57;
	asteroid.Fuel	= 10;
	asteroid.PlanetLink = star;

	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(5);
	asteroid.Theta 	= 0;
	asteroid.Fuel	= 10;
	asteroid.PlanetLink = star;

	player1.setLinkOrb(asteroid);

	var asteroid = this.createObject(O_ASTEROID);
	star.addOrb(asteroid);
	asteroid.setOrbit(5);
	asteroid.Theta = Math.PI;
	asteroid.Fuel	= 100;
	asteroid.PlanetLink = star;

	computer1.setLinkOrb(asteroid);
	computer1.Index = 1;

	this.Stars.push(star);
}

Game.prototype.checkKeyBoard = function(keys)
{
	if(keys.isKeyPressed(GLGE.KI_UP_ARROW))
	{
		
		for(var i in this.Stars)
		{
			//var orbNear = 0; // Orb mais proximo
			for(var j in this.Stars[i].Orbs)
			{
				var orbit = this.Stars[i].Players[0].LinkOrb.getOrbit();

				if(orbit-1 == this.Stars[i].Orbs[j].getOrbit())
				{
					if(this.Stars[i].Players[0].orbChange(this.Stars[i].Orbs[j]))
					{
						return;
					}
				}
				else if(orbit == 1)
				{
					if(this.Stars[i].Players[0].orbChange(this.Stars[i].Players[0].LinkOrb,Math.PI))
					{
						
						return;
					}
				}
			}
		}
	}
	if(keys.isKeyPressed(GLGE.KI_DOWN_ARROW))
	{
		for(var i in this.Stars)
		{
			//var orbNear = 0; // Orb mais proximo
			for(var j in this.Stars[i].Orbs)
			{
				var orbit = this.Stars[i].Players[0].LinkOrb.getOrbit();

				if(orbit+1 == this.Stars[i].Orbs[j].getOrbit())
				{
					if(this.Stars[i].Players[0].orbChange(this.Stars[i].Orbs[j]))
						return;
				}
			}
		}
	}
	if(keys.isKeyPressed(GLGE.KI_LEFT_ARROW))
	{
		for(var i in this.Stars)
		{
			var orbNear = 0; // Orb mais proximo
			for(var j in this.Stars[i].Orbs)
			{
				var orbit = this.Stars[i].Players[0].LinkOrb.getOrbit();

				if(orbit == this.Stars[i].Orbs[j].getOrbit() && this.Stars[i].Players[0].LinkOrb != this.Stars[i].Orbs[j])
				{
					if(this.Stars[i].Players[0].orbChange(this.Stars[i].Orbs[j],Math.PI/2))
						return;
				}
			}
		}
	}
	if(keys.isKeyPressed(GLGE.KI_RIGHT_ARROW))
	{
		for(var i in this.Stars)
		{
			var orbNear = 0; // Orb mais proximo
			for(var j in this.Stars[i].Orbs)
			{
				var orbit = this.Stars[i].Players[0].LinkOrb.getOrbit();

				if(orbit == this.Stars[i].Orbs[j].getOrbit() && this.Stars[i].Players[0].LinkOrb != this.Stars[i].Orbs[j])
				{
					if(this.Stars[i].Players[0].orbChange(this.Stars[i].Orbs[j],Math.PI/2))
						return;
				}
			}
		}
	}
}


Game.prototype.createObject = function (type) // type = ENUM O_...
{
	var s,path,scale;
	switch(type)
	{
		case O_SPACESHIP_1:
			s = new SpaceShip(); 
			path = P_SPACESHIP_1.model; 
			scale = P_SPACESHIP_1.scale;
			break;
		case O_SPACESHIP_2:
			s = new SpaceShip(); 
			path = P_SPACESHIP_2.model; 
			scale = P_SPACESHIP_2.scale;
			break;
		case O_SPACESHIP_3:
			s = new SpaceShip(); 
			path = P_SPACESHIP_3.model; 
			scale = P_SPACESHIP_3.scale;
			break;
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

	var obj		= 	new GLGE.Wavefront;
	obj.setSrc(path,window.location.href);
	obj.setScale(scale);
	s.Obj = obj;
	this.scene.addObject(s.Obj);

	return s;
}

Game.prototype.update = function()
{
	for(var i in this.Stars)
	{
		this.Stars[i].updateOrbs();
		this.Stars[i].updatePlayers(this);
	}
}