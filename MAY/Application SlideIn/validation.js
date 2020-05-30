const form = document.getElementById('form'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username can not be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, "Email can not be blank");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, "Please enter password");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, "Re-enter password");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Password does not match");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

