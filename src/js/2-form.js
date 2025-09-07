const formData = {
    email:"",
    message: ""
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state"; 

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
if (savedData.email) {
form.elements.email.value = savedData.email;
formData.email = savedData.email;
}
if (savedData.message) {
    form.elements.message.value = savedData.message;
    formData.message = savedData.message;
}
form.addEventListener("input", (event) => {
    const field = event.target;

    if (field.name) {
    formData[field.name] = field.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const { email, message } = formData;

    if (!email || !message) {
        return alert("Fill please all fields");
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
});
