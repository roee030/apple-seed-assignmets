const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];
let count = {};
let arr = array.toString().toLowerCase().split('');
arr.forEach((element) => {
	count[element] ? count[element]++ : (count[element] = 1);
});
console.log(count);
