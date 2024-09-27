const ads = Array.from(document.querySelectorAll('.rotator__case'));
let count = 1;

function adsActive() {
	ads.forEach((item, index) => {
		item.classList.toggle('rotator__case_active', count === index)
	})

	count++;
	if (count === ads.length) {
		count = 0;
	}

}

setInterval(adsActive, 1000)