//A function is a set of statements that perform a task or calculate a value
function greet() {
   //code block goes in here
     console.log("Hello World");
}
greet();
/*greet is function name  greet function
() declaring functions
 {} body of the function*/
  //the logic of function is to display a message on the console
  //Undefined coz we did not pass a value in ()
 
 //if want to display/declare the name of the person,(Parameter)
  function greet(name) {
     console.log("Hello" + " " + name)
  }
  greet("Blessed")
 
 function greet(name, lastName) {
    console.log("Hello" + " " + name + " " + lastName);
}
greet("Blessed", "Linda");
//Blessed is an argument to the greet function
//An argument is the actual value we supply for that parameter

function areaOfCircle1(radius) {
        let area = Math.PI * radius * radius
   return area; //for saving the value
}
console.log(areaOfCircle1(200))

function sum (x,y) {
   let add = x + y
   return add;
}
console.log(sum(20,17))

//Arrow functions
const sum2 = (x,y) => x + y;
console.log (sum2(4,8))

//function to multiply
function multiply (p,q) {
   let answer = p*q
   return answer;
}
console.log(multiply(3,5))

//Gravity
function product (m,g=9.81) {
   let weight = m * g
   return weight + "N";
}
console.log(product(4));//(4, 9.81)
