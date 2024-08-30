let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById("dead");
let miss = document.getElementById("lost");

for (i = 1; i < 10; i += 1) {
	let hole = document.getElementById(`hole${i}`)

	function clickAction() {
		if (hole.className.includes("hole_has-mole")) {
			deadMole.textContent++;
		} else {
			miss.textContent++;
		}

		if (deadMole.textContent == 3) {
			alert("Победа!");
		} else if (miss.textContent == 5) {
			alert("Вы проиграли!");
		};
	}



	hole.onclick = clickAction;


}