const inputEl = document.querySelector('#name-input')
const nameEl = document.querySelector('#name-output')

const inputUserName = (event) => {
    if (inputEl === ' ') {
        return
    }
    nameEl.textContent = inputEl.value;
}

inputEl.addEventListener('input', inputUserName)


