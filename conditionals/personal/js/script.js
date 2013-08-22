// Shane Oberdier, 8-22, Conditionals/personal

//Can you afford a case of Monster Energy Drinks this week?

var monster = 36; //price of a case of monster
var payPerHour = prompt("How much do you get paid per hour?") //prompt asking how much you make an hour
var hoursWorked = prompt("How many hours did you work this week?"); //prompt asking how many hours you worked this week
var bills = prompt("How much are your expenses this week?");
var savings = payPerHour*hoursWorked/2
if(payPerHour * hoursWorked - bills > monster)
	{
		} 