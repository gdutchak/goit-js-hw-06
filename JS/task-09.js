function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body')
const colorEl = document.querySelector('.color')
const btnColorEl = document.querySelector('.change-color')

const onChangeColor = () => {
  const color = bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = color
}

bodyEl.addEventListener('click', onChangeColor)