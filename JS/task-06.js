const inputEl = document.querySelector('#validation-input')
const textLength = inputEl.dataset.length

const onControlLength = () => {
    if (inputEl.value.length >= textLength) {
        inputEl.classList.add('valid')
    }
    if (inputEl.value.length < textLength) {
        inputEl.classList.add('invalid')
    }
}

inputEl.addEventListener('blur', onControlLength)
