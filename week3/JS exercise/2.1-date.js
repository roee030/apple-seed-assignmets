var date = new Date();
var day = date.getDay();
date = date.toString();
var dayArr = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'friday',
	'Saturday',
];

var dayName = dayArr[day];
var time = date.substr(16, 8);
console.log('Today is:  ' + dayName + '\n' + 'Crrent time is: ' + time);
