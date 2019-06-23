let main = document.querySelector("main#main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "YOUR-NAME is the champion";
document.querySelector("body").appendChild(newHeader);
