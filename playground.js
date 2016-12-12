const items = Array.from(document.querySelectorAll('[data-time]'));
const filtered = items
	.filter(item => item.textContent.includes('Flexbox'))
	.map(item => item.dataset.time)
	.map(timecode => {
		const parts = timecode.split(':').map(part => parseFloat(part));
		return (parts[0] * 60) + parts[1];
	})
	.reduce((runningTotal, seconds) => runningTotal + seconds);

console.log(filtered);

