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

function testjs (){
	alert("test");
}

function shake8ball(){
	document.getElementById("the8").src="images.jpeg";
	//alert("we shall see.");
	document.getElementById("results").innerHTML=list[2];
	//alert(list[2]);
}
