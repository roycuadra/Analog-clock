const allLine = document.querySelectorAll('.line');
const second = document.querySelector('.sec');
const minutes = document.querySelector('.min');
const hours = document.querySelector('.hr');

allLine.forEach((item, idx)=> {
	if((idx + 1) % 5 === 0) {
		item.dataset.num = (idx + 1) / 5;
	}
})

getTime();

setInterval(getTime, 1000);


function getTime() {
	const now = new Date();

	const sec = now.getSeconds();
	const min = now.getMinutes();
	const hr = now.getHours();

	const secFr = sec / 60;
	const minFr = (secFr + min) / 60;
	const hrFr = (minFr + hr) / 12;

	const secRot = secFr * 360;
	const minRot = minFr * 360;
	const hrRot = hrFr * 360;

	second.style.transform = `rotateZ(${secRot}deg)`;
	minutes.style.transform = `rotateZ(${minRot}deg)`;
	hours.style.transform = `rotateZ(${hrRot}deg)`;
}