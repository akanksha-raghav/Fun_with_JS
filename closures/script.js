// Closure: A func inside func that lie on the variables of outside func
function doSomeMath() {
	var a = 5;
	var b = 4;
	// var sum = a + b;
	function multiply(){
		var result = a*b;
		return result;
	}

	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());
