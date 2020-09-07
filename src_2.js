// Ex 3

const menu = [
  { type: 'entrada', name: 'shimeji na manteiga', price: 18.90,  quantity: 1 },
  { type: 'Prato', name: 'sushis', price: 9.50, quantity: 14 },
  { type: 'Prato', name: 'sashimi', price: 32.90, quantity: 10 },
  { type: 'Prato', name: 'hossomakis variados', price: 24.90, quantity: 6 },
  { type: 'Prato', name: 'uramakis', price: 30.90, quantity: 8 },
  { type: 'Sobremesa', name: 'banana caramelada', price: 11.90, quantity: 6 },
];

const getBill = (menu.reduce((total, eachPrice) => total + eachPrice.price, 0) * 1.15)

// Ex 4

const summaryOrder = {
  items: [],
  totalQuantity: 0,
}

const consumption = (
  menu.reduce((accumulator, current) => {
    accumulator.items.push(current.name);
    accumulator.totalQuantity += current.quantity;
    return accumulator;
  }, summaryOrder)
)
consumption.items.sort();

// Ex 5

const order = {
  'shimeji na manteiga': 4,
  'sushis': 5,
  'sashimi': 3,
  'hossomakis variados': 3,
  'uramakis' : 2,
  'banana caramelada': 2,
}

const finalBill = () => {
  const quantityOrder = Object.values(order);

  const partialPrice = menu
  .map((item, index) => (quantityOrder[index] * item.price))
  .reduce((total, current) =>  total + current, 0) * 1.15;
  return partialPrice;
}