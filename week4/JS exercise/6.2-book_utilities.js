const book1 = {
	name: 'book1',
	author: 'author1',
	year: 2019,
};
const book2 = {
	name: 'book2',
	author: 'author2',
	year: 2020,
};
const bookUtils = {};

bookUtils.getFirstPublished = function (book1, book2) {
	return book1.year > book2.year ? book2 : book1;
};
bookUtils.setNewEdition = function (book, latestEdition) {
	book.latestEdition = latestEdition;
};
bookUtils.setLanguage = function (book, language) {
	book.language = language;
};
bookUtils.setTranslation = function (book, language, translator) {
	book.translation = { translator, language };
};
bookUtils.setPublisher = function (book, name, location) {
	book.publisher = { name, location };
};
bookUtils.isSamePublisher = function (book1, book2) {
	return book1.publisher.name == book2.publisher.name &&
		book1.publisher.location == book2.publisher.location
		? true
		: false;
};
var answ = bookUtils.getFirstPublished(book1, book2);

console.log(answ);
