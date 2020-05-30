const form = document.getElementById('form-a'),
    email = document.getElementById('email-a'),
    password = document.getElementById('password-a');

form.addEventListener('submit', (e) => {

    checkInput_a();
})

function checkInput_a() {
    const emailValue = email.value.trim(),
        passwordValue = password.value.trim();

    if (emailValue === '') {
        setError(email, "Email can not be blank");
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, "Please enter password");
    } else {
        setSuccess(password);
    }
}

function setError(input, message) {
    const formCtrl = input.parentElement;
    const small = formCtrl.querySelector('small');

    small.innerText = message;

    formCtrl.className = 'form-control-a error';
}

function setSuccess(input) {
    const formCtrl = input.parentElement;

    formCtrl.className = 'form-control-a success';
}