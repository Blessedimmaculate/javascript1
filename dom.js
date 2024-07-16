/*let allHeadings = document.getElementsByTagName("h1")
console.log (allHeadings)
console.log (allHeadings.length)

for (let m=0; m<allHeadings.length; m++){
    console.log(allHeadings[m]);
}

let allHeadings = document.getElementsByClassName("head")
console.log (allHeadings)
console.log (allHeadings.length)*/

/*let allHeadings = document.getElementsById("word")
console.log (firstHeading)



let firstHeading = document.querySelector("h1")

headings[3].className = "head"
headings[3].id = "word"

let thirdHeading = document.querySelector(".head")
//thirdHeading.style.fontFamily = "Times New Roman"//

let secondHeading = document.querySelector(".#word2")

console.log (allHeadings)
console.log (thirdHeading)
console.log (secondHeading)
   */

let lists =``

/*`<li>Apples</li>
<li>Beans</li>
<li>Potatoes</li>
<li>Greens</li>
<li>Maize</li>
<li>Sorghum</li>
<li>Wheat</li>
<li>Gnuts</li>
<li>Oranges</li>
<li>Mangoes</li>
<li>Cabbages</li>
<li>Bananas</li>`*/
/*let ul = document.querySelector("ul")
ul.innerHTML = lists

let allHeadings = document.querySelector("h1")*/

let biggestHeading = document.createElement ("h1")


biggestHeading.className = "title"
biggestHeading.style.fontSize = "50px"
biggestHeading.textContent = "God Never Exits"

console.log(biggestHeading)
let container = document.querySelector(".container")
container.appendChild(biggestHeading)


let heading = document.createElement("h1")
heading.className = "title"
heading.style.fontSize = "40px"
heading.textContent = "IMMACULATE"

console.log(heading)
// adding add the element to html page
let container1 = document.querySelector(".container1")
container1.appendChild(heading)

// append is a mtd to add something ADD


