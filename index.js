
// Write your code here!

let main = document.querySelector("main")
main.remove();

let element = document.createElement('div')
document.body.appendChild(element);

let newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory");


newHeader.innerHTML = "is the champion"


