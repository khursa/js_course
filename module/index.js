// TASK #1
function itsMe(a){
	
	if (a !== undefined) {
		true;
	} else {
		a = 'khursa'
	}

	let result = 'It’s me,' + ' ' + a;
	console.log(result);
	return result;
}


// TASK #2
function compare(a, b){
	let result;
	if (a > b) {
		result = a + ' ' + '>' + ' ' + b;
	} else if (a < b) {
		result = a + ' ' + '<' + ' ' + b;		
	} else if (a == b) {
		result = a + ' ' + '==' + ' ' + b;		
	} else if (typeof a !== 'number' || typeof b !== 'number') {
		result = 'НЕ ЧИСЛО';		
	}
return result;
}


// TASK #3
function row(a, b, c, d) {
	let arr = [a, b, c];

	// This function sorts the array in ascending order
function row(a, b, c, d) {
	let arr = [a, b, c];

	function sort(arr)	{
		let exchange;
		let n = arr.length - 1;
		let x = arr;
		do {
			exchange = false;
			for (let i = 0; i < n; i += 1) {
				if (x[i] < x[i + 1]) {
					let ind = x[i];
					x[i] = x[i + 1];
					x[i + 1] = ind;
					exchange = true; 
						}
					}
				n -= 1;
			} while (exchange);
		return x; 
	}

	let result;
	if (d == '>') {
		result = sort(arr).join(' > ');
	} else if (d == '<') {
		result = sort(arr).reverse().join(' < ');
	} 
return result;
}


// TASK #4
function fact(n) {
	let result;
	if (n == 0) {
		result = 1;
	} else {
		result = (n != 1) ? n * fact(n - 1) : 1;
	}
	return result;
}


// TASK #5
function matrixDiff(arr1, arr2) {

	let result = [];

	if (arr1.length !== arr2.length) {
		result = NaN;
	}

	let a = [];

	for (let i = 0; i < arr1.length; i += 1) {
		a[arr1[i]] = true;
	}

	for (let i = 0; i < arr2.length; i += 1) {
		if (a[arr2[i]]) {
			delete a[arr2[i]];
		} else {
			a[arr2[i]] = true;
		}
	}

	for (let k in a) {
		result.push(k);
	}
	return result;
}


// TASK #6
function strangeSearch(arr) {
	let result;
	return result;
}