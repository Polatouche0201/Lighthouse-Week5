class Pizza {

  constructor(crust) {
    this.toppings = ["cheese"];
    this.crust = crust;
  }

  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

// let pizza1 = new Pizza();
// console.log("Pizza 1 toppings: ", pizza1.toppings); // ["cheese"]
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log("Pizza 1 toppings: ", pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

// let pizza2 = new Pizza();
// console.log("Pizza 2 toppings: ", pizza2.toppings); // ["cheese"]
// pizza2.addTopping("more cheese");
// console.log("Pizza 2 toppings: ", pizza2.toppings); // ["cheese", "more cheese"];

let pizza = new Pizza('thin');
pizza.size = "l";
console.log(pizza.price);
console.log("Pizza : ", pizza);