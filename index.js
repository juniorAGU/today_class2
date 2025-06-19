 button = document.getElementById("btn-mode");


button.addEventListener("click", function myName() {
    document.body.classList.toggle("dark-mode")
});

let button2 = document.getElementById("btn1");
button2.addEventListener("click", function myDrean(){
    const element = document.createElement("li");
    const text = document.createTextNode("The Citadel mr");
    element.appendChild(text);
    
    document.querySelector("ul").appendChild(element);
})