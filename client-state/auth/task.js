const form = document.getElementById('signin__form')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
	const formData = new FormData(form)
	xhr.send(formData)

	xhr.addEventListener('load', () => {
		let response = JSON.parse(xhr.response)
		if (response.success) {
			localStorage.setItem('id', response.user_id)
			document.getElementById('user_id').innerHTML = `${localStorage.getItem('id')}`
			document.getElementById('welcome').classList.add('welcome_active')
		} else {
			alert('Неверный логин/пароль')
		}
	})


})

if (localStorage.getItem('id') !== null) {
	document.getElementById('user_id').innerHTML = `${localStorage.getItem('id')}`
	document.getElementById('welcome').classList.add('welcome_active')
}