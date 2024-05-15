let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO:
  //
];

let productName = products
  .filter((product) => product.price <= 4)
  .forEach((product) => console.log(product.product + product.price));

let candyMM = products.filter((item) => item.product.indexOf("M&M") != -1);

console.log(candyMM);
