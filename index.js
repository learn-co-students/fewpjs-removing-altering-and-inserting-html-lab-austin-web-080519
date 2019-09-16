// Write your code here!let ul = document.createElement('ul')
let main = document.querySelector('main');
main.remove()


let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')


document.querySelector('body').appendChild(newHeader)
newHeader.innerHTML = "Cody is the champion"
