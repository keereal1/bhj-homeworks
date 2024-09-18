let dropDownList = document.querySelector('.dropdown__list');
let dropDownItem = document.querySelector('.dropdown__item');
let dropDownValue = document.querySelector('.dropdown__value');
let dropDownlinks = Array.from(document.querySelectorAll('.dropdown__link'));

function activeList() {
	dropDownList.classList.toggle('dropdown__list_active')
}

dropDownValue.addEventListener('click', activeList)


dropDownlinks.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		dropDownList.classList.remove('dropdown__list_active');
		dropDownValue.textContent = event.currentTarget.textContent;
	})
})