let timer = document.getElementById('timer');
let countdown = function() {

	timer.textContent--;
	if (timer.textContent == 0) {
		clearInterval(intervalId);
		alert('Вы победили в конкурсе!');
	}
}
intervalId = setInterval(countdown, 1000);