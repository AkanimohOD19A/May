const progress = document.querySelector('.progress-done');

setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + '%',
    progress.style.opacity= 1;
    if(progress.getAttribute('data-done') === '100') {
        progress.innerHTML = 'Completed',
        progress.style.width = progress.getAttribute('data-done') ,
        progress.style.opacity= 1;
    }
}, 500)