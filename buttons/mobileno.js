function button()
{ 
	var ph=document.getElementById("s").value

	var	phone=ph.length

    if(phone>3)
	{
	     document.getElementById("p").removeAttribute("disabled")
	}
	else
	{
		document.getElementById("p").setAttribute("disabled","true")
	}

}
