const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];
const sameFood = (arr1, arr2) => {
	const sameFoodarr = arr1.filter((food) => arr2.includes(food));
	if (sameFoodarr) return sameFoodarr;
	else false;
};
console.log(sameFood(food, food1));
