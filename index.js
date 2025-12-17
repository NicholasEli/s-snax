window.onload = function () {
	document
		.getElementById('carousel')
		.addEventListener('change', (event) => console.log(event.detail.item));
};
