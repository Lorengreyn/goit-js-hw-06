const textInput = document.querySelector('#validation-input');
const attr = Number(textInput.getAttribute('data-length'));

textInput.addEventListener("blur", onInputCount);
function onInputCount(event) {
    if (event.currentTarget.value.length === attr) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    }
    else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
    }
    
};