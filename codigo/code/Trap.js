var Trap = function()
{
	this.nextPos 	= {x:0,y:0,z:0};
	Orb.call(this);
}
GLGE.augment(Orb,Trap);