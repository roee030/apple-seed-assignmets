function randNumber() {
	return Math.floor(Math.random() * 7 + 1);
}

const myNumber = randNumber();
function cb(myNumber) {
	let attempts = 0;
	let flag = false;
	while (!flag) {
		attempts++;
		if (myNumber === randNumber()) {
			flag = true;
		}
	}
	console.log(attempts);
}

function cbF(n, cb) {
	if (typeof cb === 'function') {
		cb(n);
	}
}

cbF(myNumber, cb);
