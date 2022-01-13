const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);

const value = document.querySelector(`#value`);

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
})