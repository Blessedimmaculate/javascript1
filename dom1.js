// document.createElement();
// let one= document.getElementById("title");
let subTitleElement = document.getElementsByClassName("sub-title")
let updateButton = document.querySelector("#update");

console.log( document.getElementById("title"))
console.log (subTitleElement)
console.log (updateButton)

let container = document.getElementById("container")
let addButton = document.getElementById("add-product")
// can add more

// let newProduct = document.createElement("p")
// newProduct.textContent = "Beans"
// container.appendChild(newProduct)

// addEventListener() -inbuilt, helps us to capture user signals or input(click, scroll, etc)

addButton.addEventListener("click",function () {
    let newProduct = document.createElement("p");
newProduct.textContent = "Beans";
container.appendChild(newProduct);
});
// function name(params) {
//     let newProduct = document.createElement("p")
// newProduct.textContent = "Beans"
// container.appendChild(newProduct);
// }