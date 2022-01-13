const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
    output.textContent = event.currentTarget.value;

    if (event.currentTarget.value.length === 0) {
    output.textContent = "Anonymous";
  }
};
