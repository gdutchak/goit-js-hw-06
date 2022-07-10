let counterValue = 0;

const counter = document.querySelector('#counter');
let value = document.querySelector('#value');
const decrement = document.querySelector('[data-action=decrement]');
const increment = document.querySelector('[data-action=increment]');

const counterDecrement = event => {
    counterValue -= 1;
    value.textContent = counterValue
}
const counterIncrement = event => {
    counterValue += 1;
    value.textContent = counterValue
}

decrement.addEventListener('click', counterDecrement)

increment.addEventListener('click', counterIncrement)
