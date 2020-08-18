function callback(str, cbF) {
	if (typeof cbF === 'function') {
		cbF(str);
	}
}

function cbF(str) {
	console.log(str);
}

//
let n = 123;
callback(n, cbF);
