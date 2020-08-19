const data = [
	{
		name: 'John',
		birthday: '1-1-1995',
		favoriteFoods: {
			meats: ['hamburgers', 'sausages'],
			fish: ['salmon', 'pike'],
		},
	},
	{
		name: 'Mark',
		birthday: '10-5-1980',
		favoriteFoods: {
			meats: ['hamburgers', 'steak', 'lamb'],
			fish: ['tuna', 'salmon', 'barracuda'],
		},
	},
	{
		name: 'Mary',
		birthday: '1-10-1977',
		favoriteFoods: { meats: ['ham', 'chicken'], fish: ['pike'] },
	},
	{
		name: 'Thomas',
		birthday: '1-10-1990',
		favoriteFoods: { meats: ['bird', 'rooster'], fish: ['salmon'] },
	},
	{
		name: 'Mary',
		birthday: '1-10-1977',
		favoriteFoods: {
			meats: ['hamburgers', 'lamb'],
			fish: ['anchovies', 'tuna'],
		},
	},
];
//Q1
function objectName(obj) {
	let nameArray = [];
	obj.forEach((element) => {
		nameArray.push(element.name);
	});
	return nameArray;
}
const nameArray = objectName(data);
// console.log(nameArray);
//Q2
function objectDate(obj) {
	let dateArray = [];
	obj.forEach((element) => {
		if (element.birthday.substring(5) < 1990) dateArray.push(element);
	});
	return dateArray;
}
const dateArray = objectDate(data);
// console.log(dateArray);

//Q3

function foodObj(data) {
	let outfood = {};
	data.forEach((element) => {
		if (element.favoriteFoods) {
			for (const foodType in element.favoriteFoods) {
				element.favoriteFoods[foodType].forEach((food) => {
					outfood.hasOwnProperty(food)
						? outfood[food]++
						: (outfood[food] = 1);
				});
			}
		}
	});
	return outfood;
}
const foodresult = foodObj(data);
console.log(foodresult);
