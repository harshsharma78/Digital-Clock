'use strict';

const getTime = function () {
	const time = new Date();
	// let hours = String(time.getHours()).padStart(2,'0');
	let hours = time.getHours();
	let minutes = String(time.getMinutes()).padStart(2, '0');
	let seconds = String(time.getSeconds()).padStart(2, '0');

	let am_pm = 'AM';

	if (hours > 12) {
		am_pm = 'PM';
		hours -= 12;
	}
	if (hours === 0) {
		hours = 12;
		am_pm = 'AM';
	}

	hours = hours < 10 ? '0' + hours : hours;

	let currentTime = `${hours} : ${minutes} : ${seconds} ${am_pm}`;

	document.querySelector('.clock').innerHTML = currentTime;
};

setInterval(getTime, 1000);
getTime();
