let firstItem;
let firstPrice = 8.49; 
let firstAmount;
let firstTotal;

let secondItem;
let secondPrice = 15.78;
let secondAmount;
let secondTotal;

let thirdItem;
let thirdPrice = 5.99; 
let thirdAmount;
let thirdTotal;

const taxRate = 0.07; 

function calcProductAmount(price, amount) {
let totalAmount = price * amount;
return Math.round(totalAmount * 100) / 100; 
}

function calcGrandTotal(subtotal, taxRate) {
let tax = subtotal * taxRate;
return Math.round((subtotal + tax) * 100) / 100; 
}

firstItem = prompt("Enter the name of your first item: ");
firstAmount = Number(prompt("Enter the number of " + firstItem + " you would like to buy: "));

secondItem = prompt("Enter the name of your second item: ");
secondAmount = Number(prompt("Enter the number of " + secondItem + " you would like to buy: "));

thirdItem = prompt("Enter the name of your third item: ");
thirdAmount = Number(prompt("Enter the number of " + thirdItem + " you would like to buy: "));

firstTotal = calcProductAmount(firstPrice, firstAmount);

secondTotal = calcProductAmount(secondPrice, secondAmount);

thirdTotal = calcProductAmount(thirdPrice, thirdAmount);

let subtotal = firstTotal + secondTotal + thirdTotal;

let grandTotal = calcGrandTotal(subtotal, taxRate);

console.log("Welcome to Bargain Central!");
console.log("Your trusted destination for unbeatable deals!");
console.log(".  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .");
console.log("                                ");

console.log("Enter the name of your first item: " + firstItem + ".");
console.log(firstItem + " price is: " + "$" + firstPrice);
console.log("How many " + firstItem + " would you like to buy: " + firstAmount + ".");
console.log("                                ");

console.log("Enter the name of your second item: " + secondItem + ".");
console.log(secondItem + " price is: " + "$" + secondPrice);
console.log("How many " + secondItem + " would you like to buy: " + secondAmount + ".");
console.log("                                ");

console.log("Enter the name of your third item: " + thirdItem + ".");
console.log(thirdItem + " price is: " + "$" + thirdPrice);
console.log("How many " + thirdItem + " would you like to buy: " + thirdAmount + ".");
console.log("                                ");

console.log("Please wait while I calculate your total.");
console.log("                                ");

console.log("Your total for the " + firstItem + " is: $" + firstTotal);
console.log("Your total for the " + secondItem + " is: $" + secondTotal);
console.log("Your total for the " + thirdItem + " is: $" + thirdTotal);
console.log("                                ");

console.log("Subtotal: $" + subtotal);
console.log("                                ");
console.log("Grand Total (including tax): $" + grandTotal);
console.log("                                ");


console.log("Thank you for shopping at Bargain Central!");
console.log("We hope to see you again soon!");
