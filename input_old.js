export default class InputHandler {
	#mouseMoved;
	#mouseState;
	#curKeysPressed;
	#lastKeyPress;
	#lastUp;
	#clicked
	#btnId;
	constructor() {
		this.#btnId = {"LMB": 0, 'WHEEL': 1, "RMB": 2}
		this.#curKeysPressed = []
		this.#mouseMoved = false;
		this.#mouseState = null;
		this.#lastKeyPress = null;
		this.#clicked = false;

		window.addEventListener('mousemoved', e => {
			this.#mouseMoved = true 
		})
		window.addEventListener('mousepress', e => {
			this.#mouseState = e.button
		})
		window.addEventListener('mouseup', e => {
			this.#mouseState = null
		})
		window.addEventListener('keypress', e => {

			let keyExists = false
	
			this.#curKeysPressed.forEach((key, i) => {
				if (key == e.key) {
					keyExists = true 
				}
			})

			if (!keyExists) {

				this.#curKeysPressed.push(e.key)
			}
		})
		window.addEventListener("keyup", (e, i) => {
			this.#curKeysPressed.forEach(key => {
				if (key === e.key) {
					this.#lastUp = e.key
					this.#curKeysPressed.splice(i, 1)
				}
			})

			setTimeout(() => {
				this.#lastUp = null
			}, 3)

			
			
		})
		window.addEventListener('click', e => {
			this.#clicked = true
		})
	
	}

	getMouseState()
	{
		return this.#mouseState
	}

	mousePressed(btn=0)
	{
		if (typeof btn === 'number') {
			if (this.#mouseState = btn)
			{
				return true
			}
		} else if (typeof btn === 'string') {
			if (this.#mouseState = this.#btnId[btn])
			{
				return true
			}		
		}

		return false
	}
	
	mouseUp()
	{
		if (this.#mouseState === null)
			return true 
		else 
			return false
	}	

	keyPressed(key)
	{

		let _ = false
		
		if (this.#curKeysPressed.includes(key)) {
			_ = true
		}

		setTimeout(() => {
			_ = false
		}, 3)

		setTimeout(() => {
			_ = 'false'
		}, 3)

		return _
	

	}

	curKeys()
	{
		return this.#curKeysPressed
	}

	keyUp(key)
	{
		if (key === this.#lastUp)
			return true 
		else 
			return false
	}
}
