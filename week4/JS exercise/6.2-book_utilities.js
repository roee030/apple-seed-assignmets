const book1 = {
	name: 'book1',
	author: 'author1',
	year: 'year1',
};
const book2 = {
	name: 'book2',
	author: 'author2',
	year: 'year2',
};
const bookUtils = {
	getFirstPublished(book1, book2) {
		book1.year > book2.year ? console.log(book2) : console.log(book1);
	},
	setNewEdition(book, latestEdition) {
		book.latestEdition = latestEdition;
	},
	setLanguage(book, language) {
		book.language = language;
	},
	setTranslation(book, language, translator) {
		book.translator = language;
	},
	setPublisher(book, name, location) {
		book.publisher = { name, location };
	},
	isSamePublisher(book1, book2) {
		book1.publisher == book2.publisher ? true : false;
	},
};
bookUtils.getFirstPublished(book1, book2);
