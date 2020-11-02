
let request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
let data = JSON.parse(request.responseText);
console.log(data);

let books = data.books;

let list = document.createElement('table');
let heading1 = document.createElement('th');
let heading2 = document.createElement('th');
heading1.innerHTML = "name";
heading2.innerHTML = "year";
list.appendChild(heading1);
list.appendChild(heading2);

for (let i=0; i < books.length; i++) {
	console.log(books[i].title);
	let row = document.createElement('tr');
	row.setAttribute("id", ""+ i +"");
	let item1 = document.createElement('td');
	let item2 = document.createElement('td');
	item1.innerHTML = books[i].title;
	item2.innerHTML = books[i].year;
	row.appendChild(item1);
	row.appendChild(item2);
	list.appendChild(row);
}

document.body.appendChild(list);
