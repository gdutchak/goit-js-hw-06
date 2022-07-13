const inputEl = document.querySelector('#validation-input')
const textLength = inputEl.dataset.length

function onControlLength() {
    if (!Number.parseInt(inputEl.value)) {
        return
    }
    if (Number.parseInt(inputEl.value.length) === Number.parseInt(textLength)) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }
    if (Number.parseInt(inputEl.value.length) < Number.parseInt(textLength)) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }

    console.log(Number.parseInt(inputEl.value.length) === Number.parseInt(textLength));
}


inputEl.addEventListener('blur', onControlLength)
