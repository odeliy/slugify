let resultBox = document.getElementById('resultBox')
let br = document.createElement('br')

window.addEventListener('paste', (event) => {
	let clipboard = event.clipboardData.getData('text/plain')
	console.log('input: ', clipboard)

	clipboard = clipboard
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9+]+/gi, '-')

	console.log('output:', clipboard)

	navigator.clipboard.writeText(clipboard).then(() => {
		resultBox.innerHTML += 'preview: ' + clipboard
		resultBox.appendChild(br)
	})
})
