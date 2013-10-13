var Player = function ()
{
	this.SpaceShip 	= 0;
	this.Flag		= 0;
	this.LinkOrb 	= 0; // type Orb

	this.OrbitChanging = 0;
	var thread 		= 0;
}
Player.prototype.update = function() 
{
	if(this.LinkOrb != 0 && this.OrbitChanging != 1 )
	{	
		this.SpaceShip.Obj.setRotMatrix(this.LinkOrb.Obj.getRotMatrix());
		this.SpaceShip.Obj.setLoc(this.LinkOrb.Obj.getLocX(),this.LinkOrb.Obj.getLocY()+70,this.LinkOrb.Obj.getLocZ());

		if(this.OrbitChanging == 2)
		{
			clearInterval(this.thread);
			this.OrbitChanging = 0;
		}
	}

};
Player.prototype.setRadius	= function(r,a,oldOrbPos)
{
	this.SpaceShip.Obj.setLocX((Math.cos(a))*r+oldOrbPos.x);
    this.SpaceShip.Obj.setLocZ((Math.sin(a))*r+oldOrbPos.z);
}

Player.prototype.orbChange = function (orb)
{
	if(distance(orb.Obj.getPosition(),this.SpaceShip.Obj.getPosition()) > 500)
		return;

	if(this.OrbitChanging == 0 )
	{
		this.OrbitChanging = 1;
		var oldOrbPos = this.LinkOrb.Obj.getPosition();
		var oldOrb =  this.LinkOrb;
		this.LinkOrb = orb;

		var t  = (Math.PI*0.3)/ Math.abs(orb.getVelocity()); //Calcula o tempo do Orb percorrer 10% da orbita
		var newOrbX = this.LinkOrb.getLocCircle(this.LinkOrb.Theta+(Math.PI*0.3),this.LinkOrb.Orbits[this.LinkOrb.Orbit],'x');
		var newOrbZ = this.LinkOrb.getLocCircle(this.LinkOrb.Theta+(Math.PI*0.3),this.LinkOrb.Orbits[this.LinkOrb.Orbit],'z');
		var v  = distance({x:newOrbX,z:newOrbZ},this.SpaceShip.Obj.getPosition())/t;

		var a = this;
		var radiusSpaceShip = 0;
		
		var x = newOrbX - oldOrb.Obj.getLocX();
		var z = newOrbZ - oldOrb.Obj.getLocZ();   
		var angle = Math.atan2(x,z)-Math.PI/2; // '-Math.PI/2 Atan2 retornar PI/2 a mais =('

		this.thread = setInterval(function() {

				var p = orb.Obj.getPosition();
				var s = a.SpaceShip.Obj.getPosition();

				if(distance(p,s).toFixed(1) < 3)
				{
					a.OrbitChanging = 2; // flag para deletar esta thread
				}else{
					radiusSpaceShip+= v;
					a.setRadius(radiusSpaceShip,-angle,oldOrbPos);						
				}
			},10);
		}
		
}