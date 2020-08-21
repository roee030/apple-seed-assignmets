const steps = (n) => {
	for (let index = '#'; index.length <= n; index += '#') {
		console.log(index);
	}
};
const stepscall = steps(4);

const steps1 = (n) => {
	let str = ' '.repeat(n).split('');
	while (n > 0) {
		let index = str.length - n;
		console.log(index);
		str[index] = '#';
		console.log(`"${str.join('')}"`);
		n--;
	}
};
steps1(4);
