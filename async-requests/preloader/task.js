const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

const loader = document.getElementById('loader')
const items = document.getElementById('items')



xhr.addEventListener('load', () => {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active')
		let response = JSON.parse(xhr.response)
		response = response.response.Valute
		for (let item in response) {
			items.innerHTML +=

				`<div class="item">
            <div class="item__code">  
                    ${response[item].CharCode}
            </div>
            <div class="item__value">
                    ${response[item].Value}
            </div>
            <div class="item__currency">
                    руб.
            </div>
          </div>`

		}

	}
})