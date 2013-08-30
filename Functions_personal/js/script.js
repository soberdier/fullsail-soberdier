// Functions Personal

var milliGrams;
var smokeRate;
var calcVapor = function(milliGrams,smokeRate){ //function calculating how long a bottle of fluid for an Ecigarette will last
	var milliGrams = prompt("How many milligrams of fluid do you have?");
	var smokeRate = prompt("How many packs of cigarettes do you smoke a day?");
	var Vapor = milliGrams * smokeRate;
	return Vapor;
	}
	
	
	
	
	
	var a = calcVapor(milliGrams,smokeRate) //defining funtion for output
	
	console.log("You will get "+a+" Days of use out of your fluid!")//printing the funtions results