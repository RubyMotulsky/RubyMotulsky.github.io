var list = ["We Shall See",
			"Yes",
			"No",
			"You'll Find Out",
			"Most Likely",
			"Certainly",
			"Ask Again Later",
			"Doubtfull",
			"You wish",
			"Try Again Later"];

function randomNumber (){
	return Math.floor (Math.random () * 10);
}

function testjs (){
	alert("test");
}

function shake8ball(){
	document.getElementById("the8").src="images.jpeg";
	//alert("we shall see.");
	document.getElementById("results").innerHTML=list[randomNumber()];

	//alert(randomNumber());
}
//below is code for tic tac toe

var character = "o";

//handles x and o turns
function turn(location){

//if no x or o than draw
	if(document.getElementById(location).innerHTML == ""){
		if(character == "x"){
			character = "o";
		}
		else{
			character = "x";
		}

		document.getElementById(location).innerHTML = character;
	}
}
//clears x and o
function clearAll(){
	document.getElementById("r1c1").innerHTML = "";
	document.getElementById("r1c2").innerHTML = "";
	document.getElementById("r1c3").innerHTML = "";
	document.getElementById("r2c1").innerHTML = "";
	document.getElementById("r2c2").innerHTML = "";
	document.getElementById("r2c3").innerHTML = "";
	document.getElementById("r3c1").innerHTML = "";
	document.getElementById("r3c2").innerHTML = "";
	document.getElementById("r3c3").innerHTML = "";
}









