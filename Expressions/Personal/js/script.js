//Industry_Specific

var work = prompt("How many hours does it take on average to build a 10 page website?"); //asking how long it takes in general to do a website.

var clients = prompt("About how many clients do you take on in a year?"); //asking about how many clients you get a year.

var pay = prompt("How much do you charge per hour?"); //How much you get per hour.

var job = pay*work; //calculating how much you get per client on average

var income = job*clients //calculating your annual income from web design/development

alert("You generally get around $"+job+" for every client you work for. If you get "+clients+" a year that makes your annual income around $"+income+" a year."); //telling you how much money you make.

alert("Good for you!"); //Congradulating you for a job well done.