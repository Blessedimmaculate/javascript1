//print 0 to 5 using console.log
//for loop greatest index is 8
let m = 0;
console.log (0); //loop is handling repetitive functions. console.log
console.log (1); 
console.log (2); 
console.log (3); 
console.log (4); 
console.log (5); 

//the "for" loop, they run on conditions coz a boolean is attached to them
for (let m=0; m<=5; m++){
    console.log(m);
}

for (let w=5; w>=0;w--){
    console.log(w);
}

//{code block to be executed}
//(++ itaration can be increase or --decrease)
//initialisation (is always 0), condition, increament/decreament
let numbers=[1,2,3,4,5]
//console.log(numbers.length) this shows the total number of the numbers
let sum = 0
for(let i=0; i<numbers.length; i++){
    sum = sum+numbers[i]
}
console.log(sum);


/*for(const digit of number1){
    console.log(digit);
}*/


let cereals = ["beans", "maize", "soya"]
        for (const grain of cereals){
        console.log (grain);
    }


    const produceList = [
        {name:"Beans", type:"legumes", weight:1000, cost:300000},
         {name:"Maize", type:"grains", weight:2000, cost:400000},
          {name:"Gnuts", type:"grains", weight:1500, cost:200000} 
        ]

     for (const produce of produceList){
        console.log(`name:${produce.name}, type:${produce.type}, weight:${produce.weight}(kg), cost:${produce.cost}(ugx)`)
     }


let girls = ["immy", "linda", "promise", "blessing", "praise", "haulah", "brenda", "tracy", "flavia"]
//immy has an index of 0
console.log (girls.length)

let allGirls = "All girls are";

for (let index = 0; index < girls.length; index++){

    let oneGirl = girls[index];

    allGirls = allGirls + oneGirl
}

console.log (allGirls)
console.log (girls[0])

let rank = "earned extra 2 points"

console.log(girls[0] + rank)
console.log(girls[1] + rank)
console.log(girls[4] + rank)

//for loop greatest index is 8 for all of them
for (let i = 0; i < girls.length; i++) {
    console.log(girls[i] + rank)//don't attach''strings
    
   }

   
//for the first five
for (let i = 0; i < girls.length; i++) {
    if(i===5){
        break
    }
    console.log(girls[i] + rank)//don't attach''strings
    
}



//a loop wc prints the word hello 5 items on the screen
for (let x=0; x<5; x++){
    console.log ("Hello");
}

//while loops
let n = 0
while (n<=19){
    console.log(n)
    n++
}

//do while
let w = 0
do {
    console.log(w)
    w++
}
while (w<=5)