const listItems = Array.from(document.getElementsByTagName('li'));
const videoList = listItems.map(item => {
	const video = {
		time: item.getAttribute('data-time'),
		title: item.innerHTML
	};
	return video;
});
const flexboxVideoList = videoList.filter(video => {
	return video.title.match(/^Flexbox.*/) !== null;
});
const timeList = flexboxVideoList.map(video => video.time);
let totalSeconds = 0;
const secondsList = timeList.map(time => {
	let timeSliced = time.split(':');
	let minutes = parseInt(timeSliced[0], 10);
	let seconds = parseInt(timeSliced[1], 10);
	let timeInSeconds = minutes * 60 + seconds;
	totalSeconds += timeInSeconds;
	return timeInSeconds;
});
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log(secondsList);
console.log(totalSeconds);
console.log(minutes + ':' + seconds);

