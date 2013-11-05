var Human = function()
{
	Player.call(this);
	this.Type = "Human";
};

GLGE.augment(Player,Human);