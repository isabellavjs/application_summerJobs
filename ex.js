const products = [
  { name: "Desinfetante Veja", price: 10, barCode: 98293489238, quantity: 1},
  { name: "Ketchup Hellmann's", price: 8, barCode: 585122289238, quantity: 4},
  { name: "Milho Enlatado Zero-Six", price: 6, barCode: 56862359487, quantity: 6},
  { name: "Cereal Nescal Ball", price: 20, barCode: 19732584692, quantity: 2},
  { name: "Biscoito Trakinas", price: 5, barCode: 16749583215, quantity: 1},
];

const baseObj = {
  products: [],
  items: 0,
  amountPaid: 0,
}

const productsBought = (
  products
    .reduce((start, product) => {
      start.products.push(product.name);
      start.items += product.quantity;
      start.amountPaid += (product.price * product.quantity);
      return start;
    }, baseObj)
)

console.log(baseObj);