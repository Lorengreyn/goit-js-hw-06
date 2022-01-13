const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert(`Все поля должны быть заполнены!`)
    }
    const resultForm = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
    resultForm[name] = value;
    })
      console.log(resultForm);
form.reset();
}