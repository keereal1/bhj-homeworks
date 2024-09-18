const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));


tabs.forEach((item, index) => {
	item.addEventListener('click', () => {
		activeTabIndex = index
		tabs.forEach((item2, index2) => {
			index2 === index ? item2.classList.add('tab_active') : item2.classList.remove('tab_active')

		})
	})

	item.addEventListener('click', () => {
		content.forEach((itemContent, indexContent) => {
			indexContent === activeTabIndex ? itemContent.classList.add('tab__content_active') : itemContent.classList.remove('tab__content_active')
		})
	})
})