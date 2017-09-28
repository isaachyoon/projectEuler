function multiplesOf3And5(n) {
	let sum = 0;
	for(var i = 0; i < n; i ++) {
		if(i % 3 === 0 || i % 5 === 0) {
			sum += i
		}
	}
	return sum;
}

let output = multiplesOf3And5(1000);
console.log(output)