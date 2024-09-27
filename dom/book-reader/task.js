const sizeControl = Array.from(document.querySelectorAll('.font-size'))
const book = document.querySelector('.book')


sizeControl.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		e.preventDefault()
		activeIndex = index;
		size = sizeControl[activeIndex].dataset.size;

		sizeControl.forEach((item2, index2) => {
			item2.classList.toggle('font-size_active', index2 === index)
		})
	})

	item.addEventListener('click', () => {
		book.classList.toggle('font-size_small', size === 'small')
		book.classList.toggle('font-size_big', size === 'big')
	})
})