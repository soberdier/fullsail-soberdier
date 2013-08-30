// Functions industry

var pages;
var deadLine;
var overTime;
function takeJob (pages,deadLine,overTime){
	var pages = prompt("How many pages would you like the website to be?")
	var deadLine = prompt("In how many days do you want the site completed?")
	var overTime = prompt("How many hours will you allow before paying overtime?")
	if (pages*8<=40|| overTime<=40){console.log("I will take the job.")}
	else{alert("I'm sorry I can not take the job.")}
	
	}
	takeJob();
	