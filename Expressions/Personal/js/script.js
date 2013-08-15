//Industry_Specific

var work = prompt("How many hours does it take on average to build a 10 page website?");

var clients = prompt("About how many clients do you take on in a year?");

var pay = prompt("How much do you charge per hour?");

var job = pay*work;

var income = job*clients

alert("You generally get around $"+job+" for every client you work for. If you get "+clients+" a year that makes your annual income around $"+income+" a year.");

alert("Good for you!");