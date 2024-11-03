const textArea = document.querySelector('textarea')

textArea.addEventListener('input', () => {
	localStorage.setItem('text', textArea.value)
})

textArea.textContent = localStorage.getItem('text')