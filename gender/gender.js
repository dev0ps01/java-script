function gender()
{

	var n1=document.getElementById("q").checked
    var n2=document.getElementById("w").checked

		if(n1 == false && n2 == false)
	{
			document.getElementById("a").innerHTML="*Error-no button is selected".fontcolor("red")

	}
	else if(n1 == true)
	{
		document.getElementById("a").innerHTML="   male radio selected".fontcolor("blue")

	}
	else if(n2 == true)
	{
		document.getElementById("a").innerHTML="  female radio selected".fontcolor("blue")
	}
}
