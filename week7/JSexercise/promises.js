function getPizza() {
  const pizzaPromise = new Promise(function (resolve, reject) {
    resolve("here is your pizza");
  });
  reject("lalala");
  return pizzaPromise;
}
const pizza = getPizza();
console.log(pizza);

pizza.then((p) => {
  console.log(p);
});
