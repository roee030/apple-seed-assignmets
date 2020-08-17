const candyStore = {
	candies: [
		{ name: 'mint gum', id: '1', price: 2, amount: 2 },
		{ name: 'twix', id: '5hd7y', price: 5, amount: 4 },
	],
	cashRegister: 200,
};
function getCandy(candyStore, id) {
	let c;
	candyStore.candies.forEach((element) => {
		if (element.id && element.id == id) {
			c = element;
		}
	});
	return c;
}
function getPrice(candyStore, id) {
	let p;
	candyStore.candies.forEach((element) => {
		// console.log(element.id);
		if (element.id == id) {
			p = element.price;
		}
	});
	return p;
}
function addCandy(candyStore, id, name, price) {
	candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
	console.log(candyStore.candies);
}
function buy(candyStore, id) {
	console.log(candyStore.cashRegister);
	candyStore.candies.forEach((element) => {
		if (element.id && element.id == id) {
			candyStore.cashRegister += element.price;
			element.amount--;
		}
	});
	console.log(candyStore.cashRegister);
}
const price = getPrice(candyStore, '1');
console.log(price);
