const dogs = [
	{ name: 'Snickers', age: 2},
	{ name: 'Hugo', age: 8},
	{ name: 'Sunny', age: 1}
];

const markupDogs = `
	<ul class="dogs">
	${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}`).join('')}
	</ul>
`;

document.querySelector('#dogs').innerHTML = markupDogs;

const song = {
	name: 'Dying to live',
	artist: 'Tupac',
	featuring: 'Biggie Smalls'
};

const markupSong = `
<p>
${song.name} - ${song.artist}
${song.featuring ? `(Featuring ${song.featuring})` : ''}
</p>
`;

document.querySelector('#song').innerHTML = markupSong;

const beer = {
	name: 'Belgian Wit',
	brewery: 'Steam Whistle Brewery',
	keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords(keywords) {
	return `
	<ul>
	${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
	</ul>
		`;
}

const markupBeer = `
<h2>${beer.name}</h2>
<p class="brewery">${beer.brewery}</p>
${renderKeywords(beer.keywords)}
`;

document.querySelector('#beer').innerHTML = markupBeer;
