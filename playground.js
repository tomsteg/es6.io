function convertCurrency (amount) {

	const converted = {
		USD: amount * 0.76,
		GBP: amount * 0.53,
		AUD: amount * 1.01,
		MEX: amount * 13.3
	};
	return converted;
}

const { USD, AUD } = convertCurrency(100);
console.log( USD, AUD );

function tipCalc ({total, tip = 0.15, tax = 0.13}) {
	return total + (tip * total) + (tax * total);
}

const bill = tipCalc({total: 200, tax: 0.19});

console.log(bill);
