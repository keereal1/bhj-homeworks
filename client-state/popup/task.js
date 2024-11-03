const popup = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close')

popup.classList.add('modal_active')

closeBtn.onclick = () => {
	popup.classList.remove('modal_active')
	document.cookie = 'popupState=Closed'
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


if (getCookie('popupState') !== undefined) {
	popup.classList.remove('modal_active')
} else {
	popup.classList.add('modal_active')
}