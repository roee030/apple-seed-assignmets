function boomboom(n) {
	for (var i = 1; i < n; i++) {
		if (i % 7 == 0 || boom(i)) {
			console.log('BOOM-BOOM');
		} else {
			console.log(i);
		}
	}
}
function boom(n) {
	while (n > 0) {
		if (n % 10 == 7) return true;
		n = Math.floor(n / 10);
	}
}
boomboom(180);
