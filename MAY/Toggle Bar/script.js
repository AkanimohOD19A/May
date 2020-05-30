const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', () => {
    // Change the Theme
    document.body.classList.toggle('darktheme');
});