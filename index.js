let resultBox = document.getElementById('resultBox')
let br = document.createElement('br')

window.addEventListener('paste', (event) => {
	let clipboard = event.clipboardData.getData('text/plain')

	clipboard = clipboard
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9+]+/gi, '-')

	if (clipboard.slice(-1) === '-') {
		clipboard = clipboard.slice(0, -1)
	}

	navigator.clipboard.writeText(clipboard).then(() => {
		resultBox.innerHTML += '<b>Preview: </b>' + clipboard
		resultBox.appendChild(br)
	})
})
