// DOM Elements
const time = document.getElementById('time'),
    task = document.getElementById('task');

// Show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();

    // Set & Show AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    const show = hour <=12 ? 'AM' : 'PM';

    // Option to show AM|PM
    time.innerHTML = `${hour}<span> | </span>${addZeros(min)} ${show ? amPm : ''}`;

    // when it should be called
    setTimeout(showTime, 1000);
}

// Add Zeros <10mins
function addZeros(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Get Task' Local Storage
function getTask() {
    if (localStorage.getItem('task') === null) {
        task.textContent = '[Enter Task]';
    } else {
        task.textContent = localStorage.getItem('task');
    }
}

// Setting Task' Local Storage
function setTask(e) {
    if(e.type === 'keypress') {
        // Making sure enter is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('task', e.target.innerText);
            task.blur();
        }
    } else {
        localStorage.setItem('task', e.target.innerText);
    }
}

task.addEventListener('keypress', setTask);
task.addEventListener('blur', setTask);

// Run
showTime();
getTask();
setTask();