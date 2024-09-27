const reveal = Array.from(document.querySelectorAll('.reveal'))

document.addEventListener('scroll', () => {
	for (let i = 0; i < reveal.length; i++) {
		let top = reveal[i].getBoundingClientRect().top
		let bottom = reveal[i].getBoundingClientRect().bottom
		if (top < document.documentElement.clientHeight && bottom > 0) {
			reveal[i].classList.add('reveal_active')
		} else {
			reveal[i].classList.remove('reveal_active')
		}
	}
})