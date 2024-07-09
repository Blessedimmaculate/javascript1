// Example function to calculate total sales
function calculateTotalSales(sales) {
    let total = 0;
    sales.forEach(sale => {
        total += parseFloat(sale.amountPaid);
    });
    return total;
}

// Example function to record a sale
function recordSale(productName, tonnage, amountPaid, buyerName, salesAgent) {
    // Logic to record sale
}

// Example function to update stock levels
function updateStock(productName, tonnageSold) {
    // Logic to decrease stock by tonnageSold
}

   //Variables and arrays
let productName = 'Rice';
let stockLevels = [
    { productName: 'Rice', tonnage: 500 },
    { productName: 'Maize', tonnage: 300 }
];

  //Datatypes
  let productName1 = 'Rice'; // string
  let tonnage = 500; // number
  let product = { name: 'Rice', type: 'Grain', price: 5000 }; // object
  let sales = [ /* Array of sale objects */ ]; // array

//Objects 
  let product1 = {
    name: 'Rice',
    type: 'Grain',
    price: 5000,
    stock: 1000,
    supplier: {
        name: 'Supplier A',
        contact: '123-456-7890'
    }
};

//Loops
  // Example loop to display stock levels
for (let i = 0; i < stockLevels.length; i++) {
    console.log(`${stockLevels[i].productName}: ${stockLevels[i].tonnage} kg`);
}

// Example loop using forEach to calculate total sales
let totalSales = 0;
sales.forEach(sale => {
    totalSales += parseFloat(sale.amountPaid);
});
console.log(`Total Sales: ${totalSales} UgX`);

//let, const, Variables
   let productName2 = "Rice";
   const taxRate = 0.18;

//Numbers
  let price1 = 5000;
  let totalAmount = price * tonnage;

  Statements
 // Example if-else statement to check if a buyer's credit is overdue
if (dueDate < currentDate) {
    console.log(`Payment for ${productName} from ${buyerName} is overdue!`);
} else {
    console.log(`Payment for ${productName} from ${buyerName} is up to date.`);
}

// Example for loop to iterate over stock levels
for (let i = 0; i < stockLevels.length; i++) {
    console.log(`${stockLevels[i].productName}: ${stockLevels[i].tonnage} kg`);
}

 // Strings
let productName3 = 'Rice';
let buyerName = 'John Doe';
let location = 'Kampala';

  Booleans
let isCreditSale = true;
let isOverdue = false;

// Example boolean check in an if statement
if (isCreditSale && isOverdue) {
    console.log(`Payment overdue for ${buyerName}`);
}

Properties
  let product2 = {
    name: 'Rice',
    type: 'Grain',
    price: 5000,
    stock: 1000,
    supplier: {
        name: 'Supplier A',
        contact: '123-456-7890'
    }
};

console.log(product.name); // Accessing the 'name' property of the 'product' object
console.log(product.supplier.contact); // Accessing nested 'contact' property

  Classes
// Example class for a product
class Product {
    constructor(name, type, price, stock) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.stock = stock;
    }

    calculateTotalValue() {
        return this.price * this.stock;
    }
}

let riceProduct = new Product('Rice', 'Grain', 5000, 1000);
console.log(riceProduct.calculateTotalValue()); // Outputs: 5000000

 // Operations and Arithmetic
let price = 5000;
let tonnage1 = 1000;
let totalValue = price * tonnage; // Multiplication operation

let remainingStock = 500;
let soldTonnage = 300;
let updatedStock = remainingStock - soldTonnage; // Subtraction operation
