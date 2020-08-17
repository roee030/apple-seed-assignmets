const emptyObj = {};
const map = new Map();
const myArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (var i = 0; i < myArray.length; i++) {
	emptyObj[i] = myArray[i];

	map.set(i, myArray[i]);
}

// console.log(emptyObj, map);

// console.time();
// emptyObj.forEach((element) => {
// 	if (element.key == 9) {
// 		console.timeEnd();
// 	}
// });
console.time();
for (var propt in emptyObj) {
	if (emptyObj[propt] == 9) {
		console.log(emptyObj[propt]);
		console.timeEnd();
	}
}

console.time();
map.forEach((element) => {
	if (element == 9) {
		console.timeEnd();
	}
});

//MAP WINS!!!!
