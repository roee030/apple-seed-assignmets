const obj1 = {
	name: 'Roee',
	value: 'Angel',
};
const obj2 = {
	name: 'RoeI',
	value: 'Angel',
};
const obj3 = {
	name: 'RoY',
	value: 'Angel',
};
const map1 = new Map();
map1.set(obj1, (id = 1));
map1.set(obj2, (id = 2));
map1.set(obj3, (id = 3));
// console.log(map1);

//for of

for (const i of map1) {
	console.log(i);
}
//forEach

map1.forEach((key, value) => {
	console.log(key, value);
});
