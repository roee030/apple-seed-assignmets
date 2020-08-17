const candyStore = {
	candies: [
		{ name: 'mint gum', id: '1', price: 2, amount: 2 },
		{ name: 'twix', id: '5hd7y', price: 5, amount: 4 },
	],
	cashRegister: 200,
};
function getCandy(candyStore, id) {
	candyStore.candies.forEach((element) => {
		if (element.id && element.id == id) {
			console.log(element);
			return element;
		}
	});
}
function getPrice(candyStore, id) {
	candyStore.candies.forEach((element) => {
		if (element.price && element.id == id) {
			console.log(element.price);
			return element;
		}
	});
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
// addCandy(candyStore, 111, 'Lollypop', 10);
buy(candyStore, 1);
