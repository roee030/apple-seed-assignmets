const arr = [1, 2, 3, 4, 5];

const doubleValues = (arr) => {
	arr.map(double);
};
function double(n) {
	return n;
}

const out = arr.map(doubleValues);
console.log(out);
