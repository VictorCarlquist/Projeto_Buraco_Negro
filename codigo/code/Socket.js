/*
##################################SOCKET##############################################
*/
function envia()													
{
	var texto = document.getElementById("msg").value; 			
	//document.getElementById("msg").innerHTML = "";
	socket.send("C"+texto);
}
function criaSalaMenor()
{
	var texto = "NOVA_SALA"
	socket.send(texto);
	document.getElementById("Retorno").innerHTML = "";

}

function getServerInfo()
{
	var m = '{"user":{"id":'+meuId+'},\
	        "novaSala":false,\
	        "entraSala":0,\
	        "saiSala":false ,\
	        "vence":false}';
	socket.send(m);
}
function createRoom()
{
	var m = '{"user":{"id":'+meuId+'},\
		        "novaSala":true,\
		        "entraSala":0,\
		        "saiSala":false ,\
		        "vence":false}';
	socket.send(m);
}

function initSocket()
{
	socket.onopen = function()	 									
	{
		document.getElementById("Estado").innerHTML = "Conectado";		
	}
	socket.onerror = function(e) 										
	{
		document.getElementById("Estado").innerHTML = "Erro:" + e.data;	
	}
	socket.onclose = function() 										
	{
		document.getElementById("Estado").innerHTML = "Desconectado";	
	}
	socket.onmessage = function(e)										
	{
		RECEBIDO = e.data;
		if(RECEBIDO.substr(0,7) != "Usuario")
			DADOS_DAS_SALAS = $.parseJSON(RECEBIDO);
		else
			var a = 0;

		if(RECEBIDO.length == 1)
		{
			Game.Stars[0].Players[1].orbChange(Game.Stars[0].Orbs[RECEBIDO]);
		}
		else 
			if(RECEBIDO.split(":")[1].trim() == "Start")
				startGame();
		    
		document.getElementById("Estado").innerHTML = RECEBIDO;
	}
}
/*
##################################FIM SOCKET##############################################
*/