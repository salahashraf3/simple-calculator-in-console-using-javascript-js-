function calculator() {
	var choice = prompt("Type \'1\' For Addition , \'2\' For Substraction , \'3\' For Division , \'4\' For Multiplication");
	if (Number(choice) === 1) {
	var first = prompt("Enter First Number");
	var second = prompt("Enter Second Number");
	var sum = Number(first) + Number(second);
	alert(sum);
} else if (Number(choice) === 2) {
	var first = prompt("Enter First Number");
	var second = prompt("Enter Second Number");
	var sub = Number(first) - Number(second);
	alert(sub);
} else if (Number(choice) === 3) {
	var first = prompt("Enter First Number");
	var second = prompt("Enter Second Number");
	var div = Number(first) / Number(second);
	alert(div);
} else if (Number(choice) === 4) {
	var first = prompt("Enter First Number");
	var second = prompt("Enter Second Number");
	var mul = Number(first) * Number(second);
	alert(mul);	
} 
else  {
	alert("wrong input");
}
}

alert(calculator());
