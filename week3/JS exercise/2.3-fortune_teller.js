function tellFortune(
	numberOfChildren,
	partnerName,
	geographicLocation,
	jobTitle
) {
	console.log(
		'You will be a ' +
			jobTitle +
			' in ' +
			geographicLocation +
			' and married to ' +
			partnerName +
			' with ' +
			numberOfChildren +
			' kids'
	);
}
tellFortune(5, 'Adi', 'Elyashiv', 'Fullstack');
