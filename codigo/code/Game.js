var Game = function(scene){
	this.Stars			= 0;
	this.scene			= scene;
};

Game.prototype.init = function()
{	
	var star = new Star();

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
