// Business Logic
var totalPriceArray = []; //Only global variable in code
function Order (customSize, cheese) {
  this.customSize = customSize;
  this.sauce = 100;
  this.cheese = cheese;
  this.veggie1 = 100;
  this.veggie2 = 100;
  this.meat = 200;
  this.pizzaPrice = 0;
  this.sidePrice = 300;
}
Order.prototype.pizzaCost = function () {
  if (this.customSize === "Small 10 in.") {
    this.pizzaPrice += 600;
  } else if (this.customSize === "Medium 14 in.") {
    this.pizzaPrice += 900;
  } else if (this.customSize === "Large 18 in.") {
    this.pizzaPrice += 1200;
  }
  if (this.cheese === "cheese") {
    this.pizzaPrice += 100;
  } else if (this.cheese === "light cheese") {
    this.pizzaPrice += 50;
  } else if (this.cheese === "extra cheese") {
    this.pizzaPrice += 150;
  }
  this.pizzaPrice += this.sauce;
  this.pizzaPrice += this.veggie1;
  this.pizzaPrice += this.veggie2;
  this.pizzaPrice += this.meat;
  return this.pizzaPrice;
}
Order.prototype.sideCost = function () {
  return this.sidePrice;
}
Order.prototype.finalCost = function () {
  var cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement]; //////////////////////IMPORTANT!!! How to add contents of an array together
  }
  return cartTotalPrice;
}
function Address (streetAddress, houseNumber, estate) {
  this.streetAddress = streetAddress;
  this.estate = estate;
  this.houseNumber = houseNumber;
  
  this.deliveryAddress = (streetAddress + "  " + estate + ", " + houseNumber);
}