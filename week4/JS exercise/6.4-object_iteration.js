const obj1 = {
	firstName: 'Roee',
	lastName: 'Angel',
};

const obj2 = Object.assign(
	{},
	...Object.entries(obj1).map(([a, b]) => ({ [b]: a }))
);
console.log(obj2);
