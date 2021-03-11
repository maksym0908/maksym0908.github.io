class InputHandler {
    constructor(input) {
        this.input = input
    }

    initialize() {
        this.input.forEach(i => {
            let inputField = document.getElementById(i)
            inputField.addEventListener('input', () => {
                if (inputField.value) {
                    inputField.nextElementSibling.classList = ''
                } else {
                    inputField.nextElementSibling.classList = 'hidden'
                }
            })
        })
    }
}

const inputIds = ['name', 'socials', 'telephone']
const inputHandler = new InputHandler(inputIds)
inputHandler.initialize()