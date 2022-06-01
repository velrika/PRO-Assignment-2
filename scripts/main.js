// shows today's date
let today = new Date();
const month = today.toLocaleString('default', { month: 'long' });
document.getElementById('currentDate').innerHTML = today.getDate() + ' ' + month + ' ' + today.getFullYear();

// toggles time & animation when button is pressed

function addLeadingZero(num){
	if(num < 10){
		num = '0' + num;
	}
	return num
}

let sun = document.getElementById('gradient');
document.getElementById('timeButton').onclick = function(){
    document.getElementById('currentDate').innerHTML = today.getHours() + ':' + addLeadingZero(today.getMinutes()) + ':' + addLeadingZero(today.getSeconds()) + ' GMT';

    sun.classList.add('anim');
};

// night mode based on time
let bg = document.getElementById('main');
let welcome = document.getElementById('welcome');
let button = document.getElementsByClassName('circle__left')

if (today.getHours() > 20) {
    document.getElementById('greetingText').innerHTML = "Good Night.";

    bg.classList.add('night-mode');
    sun.classList.add('dark');

    document.getElementById("timeOne").style.color = "#C0C0C0";
    document.getElementById("timeTwo").style.color = "#C0C0C0";
    document.getElementById("currentDate").style.color = "#C0C0C0";
    document.getElementById("greetingText").style.color = "#C0C0C0";
}