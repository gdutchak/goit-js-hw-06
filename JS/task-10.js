function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input')
const createEl = document.querySelector('[data-create]')
const destroyEl = document.querySelector('[data-destroy]')
const boxEl = document.querySelector('#boxes')


function createBoxes(amount) {
  destroyBoxes()
  let tempWidth = 30
  let tempHeight = 30

  for (let i = 0; i < amount; i += 1) {
    const boxItemEl = document.createElement('div')
    tempWidth += 10
    tempHeight += 10
    boxItemEl.style.width = `${tempWidth}px`
    boxItemEl.style.height = `${tempHeight}px`
    boxItemEl.style.backgroundColor = getRandomHexColor()
    boxEl.append(boxItemEl)
  }
}

function destroyBoxes() {
  boxEl.innerHTML = ''
  inputEl.value = ''
}

createEl.addEventListener('click', () => {
  createBoxes(inputEl.value)
})
destroyEl.addEventListener('click', destroyBoxes)



