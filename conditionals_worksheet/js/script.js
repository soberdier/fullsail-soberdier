// Conditionals worksheet
// shane oberdier, 8-22, 
//celsius to fahrenheit converter
var temp = prompt("enter the temperature in celsius"); //asking user the temp
var conversion = temp * 9 / 5 + 32;      

console.log("The temperature is "+conversion + " Degrees Fahrenheit."); //print out results



//Check the login
var userNameGiven = prompt("Please enter your username!"); //prompt for username
var passGiven = prompt("Please enter your password!"); //Password given by user
var correctUser = "Tom Riddle"; //correct username
var correctPass = "Noseless1955"; //correct password

if(userNameGiven === correctUser && passGiven ===correctPass) //stipulations for successful login
	{alert("Welcome"+correctUser) //alert for successful login
	}
else if(userNameGiven != correctUser) //incorrect username
	{alert("User not found, Try again.")
	}
else if(passGiven != correctPass) //incorrect password
	{alert("Password does not match our records.")
		}
		

//