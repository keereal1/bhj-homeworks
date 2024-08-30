let counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

function clicker() {
	counter.textContent++;
	if (counter.textContent % 2 === 0) {
		cookie.width = '200';
	} else {
		cookie.width = '300';
	}
}


cookie.onclick = clicker;