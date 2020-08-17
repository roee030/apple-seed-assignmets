const book = {
	name: 'Roee',
	author: 'Roee',
	year: '2011',
	drawer: 'Roee',
};
function booktostring(book) {
	console.log(
		`The book ` +
			book.name +
			` was written by ` +
			book.author +
			` in the year ` +
			book.year
	);
}
booktostring(book);
