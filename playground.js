const people = document.querySelectorAll('.people p');

// people ist eine nodeList und kein Array

const names = Array.from(people).map(person => person.textContent);
console.log(names);

const moreNames = Array.from(people, person => person.textContent);
console.log(moreNames);

function sumAll() {
	return Array.from(arguments).reduce((prev, next) => prev + next, 0);
}

const sum = sumAll(2,45,56,34,65,188,12,41);

console.log(sum);

const ages = Array.of(12,14,6);
console.log(ages);
