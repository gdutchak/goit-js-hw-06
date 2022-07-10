const rangeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

const onChangeSize = event => {
    textEl.style.fontSize = `${rangeEl.value}px`;
}

rangeEl.addEventListener('input', onChangeSize)