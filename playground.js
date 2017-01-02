const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

for (const [index, cut] of cuts.entries()) {
	console.log(`${cut} is the ${index + 1} item`);
}

function addUpNumbers() {
	let total = 0;
	// arguments is not a tru array
	console.log(arguments);
	for (const num of arguments) {
		total += num;
	}
	console.log(total);
	return total;
}

addUpNumbers(10,23,52,23,34,13,123);


const name = 'Thomas Steglich';

for (const char of name) {
	console.log(char);
}


const ps = document.querySelectorAll('p');

for (const paragraph of ps) {
	paragraph.addEventListener('click', function() {
		console.log(this.textContent);
	});
}
