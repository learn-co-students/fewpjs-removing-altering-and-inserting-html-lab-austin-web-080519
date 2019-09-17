// Write your code here!
let mainId = document.querySelector('main')
mainId.remove()

let newHeader = document.createElement ('h1')
    newHeader.setAttribute("id", "victory")
let sweetMessage = document.createTextNode ('is the champion')

    document.body.appendChild(newHeader)
    newHeader.appendChild(sweetMessage)
