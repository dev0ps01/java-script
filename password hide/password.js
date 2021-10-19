function pass()
{
	document.getElementById("s").removeAttribute("type")
}
	function hide()
	{
		document.getElementById("s").setAttribute("type","password")
	}

		function showhide()
		{
			var s1=document.getElementById("x").getAttribute("type")

		if(s1==password)
			{
			document.getElementById("x").setAttribute("type","text")
			}
			else
			{
				document.getElementById("x").setAttribute("type","password")
			}
		}