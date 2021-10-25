function add()
{
	var n1=document.getElementId("a").value
	var n2=document.getElementId("b").value
	var	sum=parseInt(n1)+parseInt(n2)
     document.getElementById("s")=sum
}
	function sub()
{
	var n1=document.getElementId("a").value
	var n2=document.getElementId("b").value
	var	sub=parseInt(n1)-parseInt(n2)
     document.getElementById("s")=sub
}
	function mul()
{
	var n1=document.getElementId("a").value
	var n2=document.getElementId("b").value
	var	mul=parseInt(n1)*parseInt(n2)
     document.getElementById("s")=mul
}

	function div()
{
	var n1=document.getElementId("a").value
	var n2=document.getElementId("b").value
	var	div=parseInt(n1)/parseInt(n2)
     document.getElementById("s")=div
}
function op()
{
	var n1=document.getElementById("a").value
	var n2=document.getElementById("b").value


	var m1=document.getElementById("y").checked
	var m2=document.getElementById("x").checked
    var m3=document.getElementById("w").checked
	var m4=document.getElementById("p").checked

		    var	sum=parseInt(n1)+parseInt(n2)
			var	sub=parseInt(n1)-parseInt(n2)
			var	mul=parseInt(n1)*parseInt(n2)
			var	div=parseInt(n1)/parseInt(n2)

	if(m1==false && m2==false && m3==false && m4==false )
	{
		document.getElementById("v").innerHTML="*No Button selected".fontcolor("red")

	}
	else if(m1== true)
	{
			document.getElementById("s").innerHTML=sum

	}
	 else if(m2== true)
		{
		     document.getElementById("s").innerHTML=sub
         }
		else if(m3== true)
		{
			document.getElementById("s").innerHTML=mul
		}

		else if(m4== true)
		{
			document.getElementById("s").innerHTML=div
		}
	}











