function baskballWinner(arr1, arr2) {
	var avg1 = 0;
	var avg2 = 0;
	for (var i = 0; i < arr1.length; i++) {
		avg1 += arr1[i];
	}
	for (var i = 0; i < arr2.length; i++) {
		avg2 += arr2[i];
	}
	if (avg1 > avg2) {
		console.log('Player Number 1 Win!', avg1);
	} else if (avg1 < avg2) {
		console.log('Player Number 2 Win!', avg2);
	} else {
		console.log(`It's a tie`, avg1);
	}
}
