const dict = {
	HTML: 'Hypertext Markup Langunage',
	CSS: 'Cascading Stylesheet',
	JS: 'JavaScript'
};

function addAbbreviations (strings, ...values) {
	const abbreviated = values.map(value => {
		if (dict[value]) {
			return `<abbr title="${dict[value]}">${value}</abbr>`;
		}
		return value;
	});
	return strings.reduce((sentence, string, i) => {
		return `${sentence}${string}${abbreviated[i] || ''}`;
	}, '');
}

const first = 'Thomas';
const last = 'Steglich';
const sentence = addAbbreviations`Hallo my name is ${first} ${last} and
I love to code ${'HTML'}, ${'CSS'} and ${'JS'}.`;

const bio = document.querySelector('.bio');
const p = document.createElement('p');
p.innerHTML = sentence;
bio.appendChild(p);
