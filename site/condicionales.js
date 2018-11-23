// Get age and convert it to a Number (prompt always returns a string)
var age = Number(prompt("Enter your age: "));

if (age < 0){
	alert("Your age is not correct!!");
}
else if (age ==21){
	alert("Happy 21st birthday!!");
}
else if (age % 2 != 0){
	alert("Your age is odd!!")
}
else if ((age % Math.sqrt(age))==0){
	alert("Perfect square!!")
}