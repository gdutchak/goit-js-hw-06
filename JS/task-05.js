const inputEl = document.querySelector('#name-input')
const nameEl = document.querySelector('#name-output')

const inputUserName = (event) => {
    nameEl.textContent = event.target.value
}
inputEl.addEventListener('input', inputUserName)





