const apple = {
	color: 'Red',
	size: 'Meidum',
	weight: 50,
	sugar: 10
};

for (const prop of Object.keys(apple)) {
	const value = apple[prop];
	console.log(value, prop);
}

for (const prop in apple) {
	const value = apple[prop];
	console.log(value, prop);
}
