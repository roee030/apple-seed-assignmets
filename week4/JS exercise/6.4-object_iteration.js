const obj1 = {
	firstName: 'Roee',
	lastName: 'Angel',
};
function swapArg(obj1) {
	return { firstName: obj1.lastName, lastName: obj1.firstName };
}
swapArg(obj1);
