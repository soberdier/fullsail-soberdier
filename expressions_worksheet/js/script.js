// Average shopping bill

var groceries = [375, 250, 350, 274, 150]; //array of grocery bills for 5 weeks

total = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4] //total spent on groceries in 5 weeks

average = total / 5; 

console.log("You have spent a total of $"+total+" on groceries over five weeks. That is an average of $"+average+" per week.") //printing the result.

//Discounts

var original = 24.99; //item original price

var discount = original*.10; //discounted price

var product = "xboxone"; //item purchased

taxless = original - discount //discounted item before tax

tax = taxless*.70 //the sales tax
taxed = original - discount + tax //the final price for this item.
console.log("Your " +product+ " was originally $"+original+",but after a " +10+ "% discount, it is now $"+taxless+" without tax, and $"+taxed+" with tax.")