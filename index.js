// Write your code here!

let main = document.querySelector("#main");
main.remove()

let body = document.body

let newHeader = document.createElement("h1");
newHeader.id = "victory";

body.appendChild(newHeader);

let victory = body.querySelector("#victory")
victory.innerText = "Yonas is the champion";