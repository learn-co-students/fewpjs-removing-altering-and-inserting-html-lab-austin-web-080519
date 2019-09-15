// Write your code here!

// 1) index.html
//      after index.js is processed
//      no longer has DOM node 'main#main':
let main = document.querySelector('main');
main.remove()

// 2) index.html
//      after index.js is processed
//      has a 'newHeader' variable that points to node 'h1#victory':
// 3) index.html
//      after index.js is processed
//      has a 'newHeader' variable that points to node 'h1#victory':
let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')


// 4) index.html
//      after index.js is processed
//      has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside:
document.querySelector('body').appendChild(newHeader)
newHeader.innerHTML = 'Hemesh is the champion'