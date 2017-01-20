const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
	.all([postsPromise, streetCarsPromise])
	.then(responses => {
		return Promise.all(responses.map(res => res.json()));
	})
	.then(responses => {
		console.log(responses);
	});
