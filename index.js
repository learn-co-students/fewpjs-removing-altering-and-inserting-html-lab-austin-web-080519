// Write your code here!

let main = document.querySelector('main');
main.remove()

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')

document.querySelector('body').appendChild(newHeader)
newHeader.innerHTML = 'Andy is the champion'