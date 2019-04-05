class Pizza {

  constructor(size, crust) {
    this.toppings = ["cheese"];
    this.size = size;
    this.crust = crust;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

let pizza1 = new Pizza();
console.log("Pizza 1 toppings: ", pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log("Pizza 1 toppings: ", pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log("Pizza 2 toppings: ", pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log("Pizza 2 toppings: ", pizza2.toppings); // ["cheese", "more cheese"];

let pizza = new Pizza('large', 'thin');
console.log("Pizza : ", pizza);