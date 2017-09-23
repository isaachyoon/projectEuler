

function tilesPermute(arr, tileLength, prev, cache = {}, arr2 = []) {
	if(cache[tileLength]) {
		return cache[tileLength]
	} 
	let permuteWays = 0;
	if(tileLength < 0) {
		return 0;
	}
	if(tileLength === 0) {
		console.log(arr2)
		return 1;
	}
	// for(let i = 0; i < arr.length; i++) {
	// 	permuteWays += (prev > 1 && arr[i] > 1)? 0 : tilesPermute(arr, tileLength - arr[i], arr[i])  
	// }
	for(let i = 0; i < arr.length; i++) {
		if(prev > 1 && arr[i] > 1) {
			permuteWays += 0;
		} else {
			var cArr = Array.from(arr2);
			cArr.push(arr[i])
			permuteWays += tilesPermute(arr, tileLength - arr[i], arr[i], cache, cArr)  
		}
	}

	// cache[tileLength] = permuteWays;
	return permuteWays;
}

function problem114(n) {

	return tilesPermute([1,3,4,5,6,7], n)
}

let output = problem114(15);
console.log(output)


// if(prev > 1 && arr[i] > 1) {
// 			permuteWays += 0;
// 		} else {
// 			permuteWays += tilesPermute(arr, tileLength - arr[i], arr[i])  
// 		}
