function grade(x) {
	if (x >= 0 && x <= 64) {
		console.log('F');
	} else if (x >= 65 && x <= 69) {
		console.log('D');
	} else if (x >= 70 && x <= 79) {
		console.log('C');
	} else if (x >= 80 && x <= 89) {
		console.log('B');
	} else if (x >= 90 && x <= 100) {
		console.log('A');
	}
}
grade(80);
