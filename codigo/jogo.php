<!doctype html>
<html>
	<head>
		<title>SALA3</title>
		<script type="text/javascript" src="GLGE/glge-compiled-min.js">	</script>
		<script type="text/javascript" src="code/jquery.js">			</script>
		<script type="text/javascript" src="code/Socket.js">			</script>
		<script type="text/javascript" src="code/Utils.js">				</script>
		<script type="text/javascript" src="code/Player.js">			</script>
		<script type="text/javascript" src="code/Orb.js">				</script>
		<script type="text/javascript" src="code/Game.js">				</script>
		<script type="text/javascript" src="code/FuelItem.js">			</script>
		<script type="text/javascript" src="code/SpaceShip.js">			</script>
		<script type="text/javascript" src="code/Planet.js">			</script>
		<script type="text/javascript" src="code/WormHole.js">			</script>
		<script type="text/javascript" src="code/Asteroid.js">			</script>
		<script type="text/javascript" src="code/Human.js">				</script>
		<script type="text/javascript" src="code/Computer.js">			</script>
		<script type="text/javascript" src="code/Flag.js">				</script>
		<script type="text/javascript" src="code/Star.js">				</script>

		<script type="text/javascript" src="code/Stats.js"></script>
		<style>
		body{
			background-color: #555;
			font-size: 12px;
			font-family: arial;
			overflow:hidden;
			margin:0;
		}
		</style>


		<script>

			var lookAt=function(origin,point){
				var coord=[origin[0]-point[0],origin[1]-point[1],origin[2]-point[2]];
				var zvec=GLGE.toUnitVec3(coord);
				var xvec=GLGE.toUnitVec3(GLGE.crossVec3([0,1,0],zvec));
				var yvec=GLGE.toUnitVec3(GLGE.crossVec3(zvec,xvec));		
				return [xvec[0], yvec[0], zvec[0], 0,
								xvec[1], yvec[1], zvec[1], 0,
								xvec[2], yvec[2], zvec[2], 0,
								0, 0, 0, 1];
			}

			//#######################################################################

			var canvas = document.getElementById("canvas");
			var scene;
			var doc 			= new GLGE.Document();
			
			var game;
			var camera;

			var sent = false;
			
				
				doc.onLoad  		= function(){
					var renderer	= new GLGE.Renderer(document.getElementById('canvas'));
					scene			= new GLGE.Scene();
					scene 			= doc.getElement("mainscene");
					camera 			= doc.getElement("maincamera");
					renderer.setScene(scene);
					var keys		= new GLGE.KeyInput();
					game 			= new Game(scene);
					game.init();

					
					function positionCamera()
					{
						var posC = camera.getPosition();	
						var posP = game.Stars[0].Obj.getPosition();
						camera.setRotMatrix(lookAt([posC.x,posC.y,posC.z],[posP.x,posP.y,posP.z]));
						return;
					}
					function updateSpaceShips()
					{
						game.update();
					}
					function keyboard()
					{
						game.checkKeyBoard(keys);
					}
					var render=function(){
						stats.begin();
						game.checkKeyBoard(keys);
						positionCamera();
						renderer.render();
						requestAnimationFrame(render);
						stats.end();
					};
					setInterval(updateSpaceShips,1);
					setInterval(keyboard,1000);
					render();
				}
				doc.load("scene.xml");
			
		</script>

	</head>
	<body>
		
		<div style="margin:auto;width:900px;">
			<div id="debug"></div>
			<div id="Estado"></div>
		<canvas id="canvas" width="900px" height="700px" style="height:100%">	</canvas>
		</div>
		<script>var stats = new Stats();
			stats.domElement.style.position = 'absolute';
			stats.domElement.style.left = '0px';
			stats.domElement.style.top = '0px';

		document.body.appendChild( stats.domElement );</script>

	</body>
</html>