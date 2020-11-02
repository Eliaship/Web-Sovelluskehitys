//console.log('page loaded');

console.log(document);
/*
document.getElementById('save').onclick = function() {
	console.log('save');
	// get a DOM object representing a form field.
	let name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	let data = document.querySelectorAll('#userForm input');
	console.log(data);
	let paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	let sposti = document.querySelector('#userForm input[type="email"]');
	let password = document.querySelector('#userForm input[type="password"]');
	paragraphs[1].innerHTML = password.value;
	paragraphs[0].innerHTML = sposti.value;

};
*/
document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	let email = document.querySelector('#userForm input[type="email"]').value;
	document.getElementById('email').innerHTML = email;
};

document.querySelector('#userForm input[type="text"]').onkeypress = function() {
	console.log('updating text');
	let name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
};

document.querySelector('#userForm input[type="password"]').onkeypress = function() {
	console.log('updating email');
	let password = document.querySelector('#userForm input[type="password"]').value;
	document.getElementById('pass').innerHTML = password;
};
