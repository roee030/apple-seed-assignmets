const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
let count = {};
let arr = array.toString().toLowerCase().replace(/\s|,/g, '').split('');
// console.log(arr);
arr.forEach((element) => {
	count[element] ? count[element]++ : (count[element] = 1);
});
console.log(count);

orderObject = Object.entries(count).sort().reverse();
console.log(orderObject);

// EXTRA!

let letter;
let most_occurrences = 0;
let index_of_most_occurrences = 0;
for (let index = 0; index < orderObject.length; index++) {
	if (orderObject[index][1] > most_occurrences) {
		most_occurrences = orderObject[index][1];
		letter = orderObject[index][0];
		index_of_most_occurrences = index;
	}
}
console.log(letter);
