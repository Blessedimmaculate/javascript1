// //Declaration functions usual one
// function addNumbers(a,b){
//     let addition = a+b;
//     return addition;
//    }

// //Arrow function
// const addNumbers = (a,b) => {
//     let addition = a+b;
//     return addition;
// }

// let addition = (a+b);
// function addNumbers(a,b) {
//     return addition ;
//  }

//  const addNumbers = (a,b) => {
//     return addition;
//  }

// //  expression function
// const addNumbers = function (a,b) {
//     return addition ;
//  }

// //  annonymous function(no name used inside eventListeners and other elements)
// setTimeout(function (a,b){
//     return addition ;
// },400)
    
// //(Immediately Evoked Function Expression)
// (function (a,b){
//     return addition ;
// })()

// callback function
// let callback = function (n){
//     return n ** 2;
// };

// function cubed(callback, n) {
//     return callback(n)*n;
    
// };
// console.log(cubed (callback,4));

// function greet (name, callback) {
//     console.log("Hello", name);
//     callback();
// }

// function sayGoodbye (){
//     console.log("Goodbye");
// }
// greet ("Khari", sayGoodbye);

// function fetchData (callback) {
//     setTimeout(function () {
//     console.log("Data fetched successfully");
//     callback("Data");
// }, 2000);
// }


// function displayData (data) {
//     console.log("Displaying data... "+ data);
// }
//  fetchData(displayData) ;   


// //  inbuilt highOrder functions (for each)
// let sum = 0;
// let numbers = [1,2,3,4,5];
// numbers.forEach(function(n){
//     return (sum = sum + n);
// });


// let grains = ["maize", "gnuts", "rice", "beans"];
// grains.forEach(function(grains){
//     console.log(grains.toUpperCase());
// });


// map function (also takees in callback)
// let numbers = [1,2,3,4,5];
// let numbersSquares= numbers.map(function(n) {
//     return n * n;})
//     console.log(numbersSquares);


    // functions for filtering out search results
    let landCountries= ["Finland", "Germany", "Ireland", "France", "Italy", "Poland"];
    let filteredCountries = landCountries.filter(function(country) {
        return country.includes("land");
    });
    console.log(filteredCountries);