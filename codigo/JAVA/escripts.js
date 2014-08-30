function pagina_menu()
{  
    if(NOME != "")
      if(document.getElementById("Pagina1").style.display=="block")
      {
        document.getElementById("Pagina1").style.display="none";
        document.getElementById("Pagina2").style.display="block";
        //socket.send("jgo");
      }
      else
      {
        document.getElementById("Pagina1").style.display="block";
        document.getElementbyId("Pagina2").style.display="none";
      }
  
}

function pagina_garagem()
{
  if(document.getElementById("Pagina1").style.display=="block")
  {
	document.getElementById("principal").style.display="none";
    document.getElementById("Pagina1").style.display="none";
	document.getElementById("Pagina2").style.display="none";
	document.getElementById("PaginaGaragem").style.display="block";
	//socket.send("gar");
   }
	else
	{
	  document.getElementById("Pagina1").style.display="block";
	  document.getElementById("PaginaGaragem").style.display="none";
	}
  
}

function voltar_garagem_menu()
{
	
	document.getElementById("PaginaGaragem").style.display="none";
	document.getElementById("principal").style.display="block";
    document.getElementById("Pagina1").style.display="block";
   
}

function ir_garagem()
{
  document.getElementById("Pagina2").style.display="none";
  document.getElementById("principal").style.display="none";
  document.getElementById("PaginaGaragem").style.display="block";
}


