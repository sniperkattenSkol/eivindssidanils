var x = 1;
function bildfunction() {
	if (x == 1) {
		x++;
		document.getElementById("imgpic").src="DL1.png";
	} else if (x == 2){
		x++;
		document.getElementById("imgpic").src = "DR1.png";
	}else if (x == 3){
		x++;
		document.getElementById("imgpic").src = "DB1.png";
	}else if (x == 4){
		x = 1;
		document.getElementById("imgpic").src = "DF1.png";
	} 
}