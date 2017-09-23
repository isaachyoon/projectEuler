function tilesPermute(arr, tileLength, cache){
	if(cache[tileLength]) {
		return cache[tileLength]
	} 

	let permuteWays = 0;
	if(tileLength < 0) {
		return 0;
	}
	if(tileLength === 0) {
		return 1;
	}
	for(let i = 0; i < arr.length; i++) {
		permuteWays += tilesPermute(arr, tileLength - arr[i], cache)  
	}
	cache[tileLength] = permuteWays;
	return cache[tileLength];
}

function problem116(n) {
	return tilesPermute([1,2], n, {}) + tilesPermute([1,3], n, {}) + tilesPermute([1, 4], n, {}) - 3
}

let output = problem116(50);
console.log(output)

