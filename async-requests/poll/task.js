const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()



xhr.onload = () => {
	let response = JSON.parse(xhr.response)

	poll__title.innerText = `${response.data.title}`
	let answers = response.data.answers
	answers.forEach(item => {
		poll__answers.innerHTML += `
      <button class="poll__answer">
              ${item}
            </button>`
	});

	const buttons = Array.from(document.querySelectorAll('button'))
	buttons.forEach(item => {
		item.addEventListener('click', () => {
			alert('Спасибо, ваш голос засчитан!')
		})
	})

}