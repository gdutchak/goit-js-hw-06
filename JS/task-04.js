let counterValue = 0;

let value = document.querySelector('#value');
const decrement = document.querySelector('[data-action=decrement]');
const increment = document.querySelector('[data-action=increment]');

const counterDecrement = () => {
    counterValue -= 1;
    value.textContent = counterValue
}
const counterIncrement = () => {
    counterValue += 1;
    value.textContent = counterValue
}

decrement.addEventListener('click', counterDecrement)

increment.addEventListener('click', counterIncrement)
