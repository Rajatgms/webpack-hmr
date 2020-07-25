require('./style.css');

let element = document.createElement('div');
element.innerText = 'Webpack HMR';

let input = document.createElement('input');
input.placeholder = 'Type here';

element.appendChild(input);

document.body.appendChild(element);
