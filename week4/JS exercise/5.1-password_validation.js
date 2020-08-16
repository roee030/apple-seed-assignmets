function Password_Validation(password) {
	if (password.length >= 7) return 'Strong';
	else return 'Weak';
}
function Password_Validation_ternary(password) {
	password.length >= 7 ? 'Strong' : 'Weak';
}
function Password_Validation_advance(password) {
	password.match(/[a-zA-Z]/) && password.length >= 7
		? console.log('very Strong')
		: console.log('Weak');
	if (password.length >= 7) console.log('Strong');
	else console.log('Weak');
}

Password_Validation_advance('233asdf14');
