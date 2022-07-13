const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onControlForm);

function onControlForm(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return
    }
    const formData = {
        Email: email.value,
        Password: password.value,
    }
    console.log(formData);
    event.currentTarget.reset();
}