const inputEl = document.querySelector('#name-input')
const nameEl = document.querySelector('#name-output')

const inputUserName = (event) => {
    nameEl.textContent = event.target.value

    if (!nameEl.textContent) {
        nameEl.textContent = 'Anonymous'
    }

}
inputEl.addEventListener('input', inputUserName)





