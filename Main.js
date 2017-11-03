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

