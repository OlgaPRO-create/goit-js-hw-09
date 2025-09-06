const formData = {
    email:"",
    message: ""
}

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state"; 

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
form.elements.email.value = savedData.email || "";
form.elements.message.value = savedData.message || "";

form.addEventListener("input", (event) => {
    const formIn = event.target;

    if (formIn.name) {
        formData[formIn.name] = formIn.value.trim();
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const textField = evt.target.elements;

    if (textField.email.value === "" || textField.message.value === "") {
        return alert(`Fill please all fields`);
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});
