let people = ['Greg', 'Mary', 'Devon', 'James'];
//1
for (let index = 0; index < people.length; index++) {
	console.log(people[index]);
}
//2 remove  "Greg"
const q2 = people.shift();
console.log(q2);

//3 remove "James"
const q3 = people.pop();

//4  add "Matt"
const q4 = people.unshift('Matt');

//5 add "Roee"
const q5 = people.push('Roee');
console.log(5, people);
//6
for (let index = 0; index < people.length; index++) {
	console.log(people[index]);
	if (people[index] == 'Mary') break;
}
console.log('q6', people);
for (let index = 0; index < people.indexOf('Mary'); index++) {
	console.log(people[index]);
}

console.log('q6', people);
//7
let q7 = people.slice(0, people.indexOf('Matt'));
q7 = [...people.slice(people.indexOf('Matt') + 1, people.indexOf('Mary'))];
q7 = [...people.slice(people.indexOf('Mary') + 1)];
console.log('7', q7);

//8
console.log(people.indexOf('Mary'));
//9
console.log(people.indexOf('Foo'));

//10
people = ['Greg', 'Mary', 'Devon', 'James'];

people.splice(people.indexOf('Devon'), 1, 'Elizabeth', 'Artie');
console.log(10, people);

//11
const withBob = ['Bob', ...people];
console.log('11', withBob);
