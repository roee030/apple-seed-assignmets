const arr = [1, 2, 3, 4, 5];

const max = arr.reduce((acc, num) => Math.max(acc, num), 0);
console.log('max', max);

const sumEven = arr.reduce((acc, num) => (num % 2 === 0 ? num + acc : acc), 0);
console.log('sum', sumEven);

const avg = arr.reduce((acc, num) => num + acc, 0) / arr.length;
console.log('avg', avg);
