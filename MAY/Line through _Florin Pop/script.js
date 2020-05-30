// The concept is to recreate the original text 
// and hide certain letters for effect.

const text = document.getElementById('text'),
    textArr = text.innerText.split(''),
    newElm = document.createElement('h1');
    
newElm.innerHTML = `
    ${textArr.map(letter => `<span style="${randomVisibility()}">${letter}</span>`).join('')}
`;
newElm.classList.add('overlay');

document.body.appendChild(newElm);

function randomVisibility() {
    return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible';
}