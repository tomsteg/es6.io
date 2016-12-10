const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
	console.log(this);
	this.classList.toggle('on');
});

const person = {
	points: 23,
	score() {
		console.log(this);
		this.points += 1;
	}
};
person.score();
console.log('Person', person);
person.score();
console.log('Person', person);

class Car {
	constructor(make, color) {
		this.make = make;
		this.color = color;
	}
}

const beamer = new Car('bmw', 'blue');
const subie = new Car('subaru', 'white');

Car.prototype.summarize = function() {
	return `This car is a ${this.make} in the color ${this.color}`;
};

console.log(beamer.summarize());
console.log(subie.summarize());

const orderChildren = function() {
	const children = Array.from(arguments);
	return children.map((child, index) => {
		return `${child} was child #${index + 1}`;
	});
};

console.log(orderChildren('Wes', 'Bos', 'Kas'));
