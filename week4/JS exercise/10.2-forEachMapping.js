// // Q1
// let arr = [1, 2, 3, 4, 5];
// function doubleValues(arr) {
// 	let darr = [];
// 	arr.map((n) => {
// 		darr.push(n, n);
// 	});
// 	return darr;
// }
// console.log(doubleValues(arr));
// // Q2
// function onlyEvenValues(arr) {
// 	evenarr = [];
// 	arr.map((n) => {
// 		if (n % 2 == 0) evenarr.push(n);
// 	});
// 	return evenarr;
// }
// console.log(onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// // Q3
// let arrOfObj = [{}, {}, {}];
// let myKey = 'Roee';
// let myValue = 'Angel';
// function addKeyAndValue(arrOfObj, myKey, myValue) {
// 	arrOfObj.map((i) => {
// 		i[myKey] = myValue;
// 	});
// 	console.log(arrOfObj);
// }
// addKeyAndValue(arrOfObj, myKey, myValue);
// Q4
// function shiftLetters(str) {
// 	return str
// 		.split('')
// 		.map((letter) => {
// 			return String.fromCharCode(letter.charCodeAt() - 1);
// 		})
// 		.join('');
// }
// const shiftLettersOutput = shiftLetters('Roee');
// console.log(shiftLettersOutput);

function convertStringToBrackets(word) {
	return [...word]
		.map((letter) =>
			word.match(new RegExp(letter, 'ig')).length === 1 ? '(' : ')'
		)
		.join('');
}
const extra = convertStringToBrackets('Success');
console.log(extra);
