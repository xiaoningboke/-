window.onload = function()
	{
		var date = new Date();
		for(var i=0;i<10;i++)
		{
			var opt = document.createElement("option");
			opt.value = i+1;
			opt.innerHTML = date.getFullYear()-i;
			sel.appendChild(opt);
		}	
		document.div.appendChild(sel);
	}