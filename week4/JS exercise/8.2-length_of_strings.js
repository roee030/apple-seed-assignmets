const array = ['Rooe', 'Angel', 'RRR'];
function arrayToarrayLength(array) {
	let lengthArray = [];

	for (let index = 0; index < array.length; index++) {
		lengthArray.push(array[index].length);
	}
	return lengthArray;
}
console.log(arrayToarrayLength(array));
