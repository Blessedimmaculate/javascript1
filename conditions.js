/*if
if else
if else if else
switch
ternary operator*/

// if (condition){function}

/*CONDITIONAL OPERATORS
== Equal to something
!= Not equal to
> Comparison operator, <
>= or equal to
=== strictly equal to
!== strictly not equal to
|| OR operator, needs one of the conditions to be true 
 && needs both conditions to be true*/

let number = 2
if (number > 0) {
  console.log("number is a positive number")// numbers greater than 0
  console.log(`${number} is a positive number`)

} else if (number < 0) {
  console.log("number is a positive number")
}
else if (number == 0) {
  console.log(`${number} is zero`)
}
else {
  console.log(`${number} is not a number`)
}

let isShining = false
if (isShining) {
  console.log("remember to carry your sunglasses")
}
else {
  console.log("no need to carry your sunglasses")
}
/*if(conditions){
runs when the condition is true
}
else{
runs when the condition is false
}*/

let weather = 'sunny'
if (weather === "rainy")//===makes sure sunny and rainy are of the same datatype and are strict
{
  console.log("You need a rain coat")
}
else if (weather === "cloudy") {
  console.log("You need a jackect")
}
else if (weather === "sunny") {
  console.log("You only need a shirt")
}
else {
  console.log("You need a jackect")
}

console.log(4 == "4")//only compares value
console.log(4 === "4")//compares both value and datatypes
console.log(4 !== "4")


let grade = /*=assign*/ 75
if (grade > 85)//statement
{
  console.log("You get A")//open a string
}
else if
  (grade < 85 && grade > 75) //ampacent   
{
  console.log("B")
}
else if (grade > 65 && grade < 75) {
  console.log("C")
}
else if (grade > 55 && grade < 65) {
  console.log("D")
}
else //if the conditions above hv failed (false)run this one. 
{
  console.log("F")
}



let dayOfTheWeekByUser = prompt("What is the day today")
let day = dayOfTheWeekByUser.toLowerCase()
switch (day) {
  case "Monday":
    console.log("Today is Monday")
    break

  case "Tuesday":
    console.log("Today is Tuesday")
    break
  case "Wednesday":
    console.log("Today is Wednesday")
    break

  case "Thursday":
    console.log("Today is Thurday")
    break

  case "Friday":
    console.log("Today is Friday")
    break

  case "Saturday":
    console.log("Today is Satday")
    break

  case "Sunday":
    console.log("Today is Sunday")
    break

  default:
    console.log("NOT A DAY OF THE WEEK")
}

//ternary operator
let isRaining = true
isRaining
 ? console.log ("Remember to take your rain coat")
 : console.log ("No need to carry a rain coat")


 let newNumber = prompt ("Enter a number");
 switch (newNumber) {
  case (newNumber > 0):
  console.log(`${newNumber} is a positive number`)
  break;

  case (newNumber < 0 ):
    console.log(`${newNumber} is a negative number`)
    break;

    default:
      console.log("the number is invalid")
 }