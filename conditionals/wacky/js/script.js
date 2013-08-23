// Shane Oberdier, 8-22, conditionals wacky

// Let's try this again shall we?

var intel = prompt("On a scale from 3 to 18, how intelligent are you?"); //determining intelligence score
var wis = prompt("On a scale from 3 to 18, how wise are you?"); //determining wisdom score
var perception = (parseInt(intel, 10) + parseInt(wis, 10))/2; 
// determining perception score

var check = prompt("Please choose a number from 1-20") //make a perception check

if(check < perception)
{alert("You were perceptive enough to hear the dragon coming. You got the drop on him and cut his head off. You may now marry the prince/ess!") //if you make the perception check, normally killing a dragon is not this easy.
	}
else{alert("You did not hear the dragon coming, He has you for lunch. Tough luck mate.")} 
