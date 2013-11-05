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
		this.SpaceShip.Obj.setLocY(this.LinkOrb.Obj.getLocY()+70);
		this.SpaceShip.Obj.setLocX(this.LinkOrb.getLocCircle(this.LinkOrb.Theta,this.LinkOrb.Orbits[this.LinkOrb.Orbit]-10,'x')+this.LinkOrb.PlanetLink.Obj.getLocX());
		this.SpaceShip.Obj.setLocZ(this.LinkOrb.getLocCircle(this.LinkOrb.Theta,this.LinkOrb.Orbits[this.LinkOrb.Orbit]-10,'z')+this.LinkOrb.PlanetLink.Obj.getLocZ());
		
		if(this.SpaceShip.Fuel < 100)
			this.SpaceShip.Fuel+=0.1;

		if(this.OrbitChanging == 2)
		{
			clearInterval(this.thread);
			this.OrbitChanging = 0;
			this.SpaceShip.Fuel += this.LinkOrb.Fuel;
			if(this.SpaceShip.Fuel > 100)
				this.SpaceShip.Fuel = 100; 
			document.getElementById("debug").innerHTML = this.SpaceShip.Fuel;
		}
	}
};
Player.prototype.setRadius	= function(r,a,oldOrbPos)
{
	this.SpaceShip.Obj.setLocX((Math.cos(a))*r+oldOrbPos.x);
    this.SpaceShip.Obj.setLocZ((Math.sin(a))*r+oldOrbPos.z);
}
Player.prototype.setLinkOrb	= function(o)
{
	this.LinkOrb = o;
	this.SpaceShip.Fuel += o.Fuel;
} 
//angle = Onde a nave ira calcular  aterrizagem
Player.prototype.orbChange = function (orb,angle)
{
	var dist = distance(orb.Obj.getPosition(),this.SpaceShip.Obj.getPosition()); 
	if(dist > this.SpaceShip.Fuel  || this.OrbitChanging != 0)
		return false;	
	if(!angle)
		angle = 0.1;
	
	this.SpaceShip.Fuel -= dist;
	if(this.SpaceShip.Fuel < 0)
		this.SpaceShip.Fuel = 0;
	this.OrbitChanging = 1;
	var oldOrbPos = this.LinkOrb.Obj.getPosition();
	var oldOrb =  this.LinkOrb;
	this.setLinkOrb(orb);

	var t  = (angle)/ Math.abs(orb.getVelocity()); //Calcula o tempo do Orb percorrer 10% da orbita
	var newOrbX = this.LinkOrb.getLocCircle(this.LinkOrb.Theta+(angle),this.LinkOrb.Orbits[this.LinkOrb.Orbit],'x');
	var newOrbZ = this.LinkOrb.getLocCircle(this.LinkOrb.Theta+(angle),this.LinkOrb.Orbits[this.LinkOrb.Orbit],'z');
	var dist = distance({x:newOrbX,z:newOrbZ},this.SpaceShip.Obj.getPosition());
	var v  = dist/t;

	var a = this;
	var radiusSpaceShip = 0;
	
	var x = newOrbX - oldOrb.Obj.getLocX();
	var z = newOrbZ - oldOrb.Obj.getLocZ();   
	var angle = Math.atan2(x,z); // '-Math.PI/2 Atan2 retornar PI/2 a mais =('
	this.SpaceShip.Obj.setRotY(angle);
	angle -= Math.PI/2;
	var oldTime = 0;

	v = 0;
	this.thread = setInterval(function() {

			var p = orb.Obj.getPosition();
			var s = a.SpaceShip.Obj.getPosition();
			
			if(oldTime >= t)
			{
				a.OrbitChanging = 2; // flag para deletar esta thread
			}else{
				
				var acc = dist/3*(0.001)/2;
				if(!(t/3 <= t))
				{
					v += acc;
				}
				radiusSpaceShip+= v;
				a.setRadius(radiusSpaceShip,-angle,oldOrbPos);						
				
			}
			oldTime+=1;
		},1);

		
	return true;
}