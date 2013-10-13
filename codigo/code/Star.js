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
Star.prototype.addPlayer = function (obj) 
{
	this.Players.push(obj);		
}

Star.prototype.updateOrbs	= function ()
{
	for(var i in this.Orbs)
	{
		this.Orbs[i].update();
	}
}
Star.prototype.updatePlayers= function()
{
	for(var i in this.Players)
	{
		this.Players[i].update();
	}
}

