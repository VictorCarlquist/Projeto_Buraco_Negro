function distance(a,b) // {x,y,z},{x,y,z}
{
	return Math.sqrt(Math.pow((a.x-b.x),2) + Math.pow((a.z-b.z),2));
}