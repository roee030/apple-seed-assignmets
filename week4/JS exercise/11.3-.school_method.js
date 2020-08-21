const school = {
	teachers: [
		{
			name: 'Roee',
			subjects: ['Math', 'English'],
			students: ['Ronny', 'Gil'],
			capacity: 3,
		},
		{
			name: 'Yael',
			subjects: ['Sport', 'English'],
			students: ['Mor', 'Kobe'],
			capacity: 3,
		},
	],

	students: [
		{
			name: 'Ronny',
			age: 15,
		},
		{
			name: 'Gil',
			age: 15,
		},
		{
			name: 'Mor',
			age: 15,
		},
		{
			name: 'Kobe',
			age: 15,
		},
	],
};

const assignStudent = (student, subject) => {
	const relevantTeacher = school.teachers.find(
		(teacher) => teacher.capacity && teacher.subjects.includes(subject)
	);

	if (!relevantTeacher) {
		console.log('Sorry, no available teachers left');
		return false;
	}
	//adding new student
	relevantTeacher.students.push(student.name);
	relevantTeacher.capacity--;

	//checks if students includes the new student
	return true;
};
let Mor = {
	name: 'Mor',
	age: 23,
};
console.log(assignStudent(Mor, 'Math'));
