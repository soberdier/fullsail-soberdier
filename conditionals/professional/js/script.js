// Shane Oberdier, 8-22, conditionals professional

// we will determine if a web design firm is willing to hire you

var yearExp = prompt("How many years have you worked in your field?"); //asking how long you have done this job
var companyResponse;

// the company wants at least 5 years experience, let's see if you qualify

companyResponse = (yearExp>5) ? "Congratulations you got the job!" : "I am sorry the position has been filled."; //checking result

console.log(companyResponse);