export default class InputHandler {
	#curPressed = []
	#mouseState = null
	#mouseIds = {
		'LMB': 0,
		'RMB': 2,
		'WHEEL': 1,
		'OTHER1': 3,
		'OTHER2': 4 
	}
	constructor() {
		window.addEventListener('keydown', (e) => {
			if (!this.#curPressed.includes(e.code))
				this.#curPressed.push(e.code)
		}) 
		window.addEventListener('keyup', (e) => {
			if (this.#curPressed.includes(e.code))
				this.#curPressed.splice(this.#curPressed.indexOf(e.code), 1)
		}) 

		window.addEventListener('mousedown', (e) => {
			this.#mouseState = e.button
		})

		window.addEventListener('mouseup', (e) => {
			this.#mouseState = null
		})
	}

	mousePressed(btn) {
		if (typeof btn === 'string')
			return this.#mouseState == this.#mouseIds[btn]
		else 
			return btn == this.#mouseState 
	
	}
	
	keyPressed(key) { 

		if (key.length === 1)
			return this.#curPressed.includes('Key' + key.toUpperCase()) 
		else 
			return this.#curPressed.includes(key) 
	}
}
