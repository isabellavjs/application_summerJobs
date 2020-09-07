const topBritishBands = [
  {
    name: 'The Beatles',
    bestAlbuns: [
      { album: 'Sgt. Pepper Lonely Hearts Club Band' , sales: 32000000},
      { album: 'Revolver', sales: 27000000},
      { album: 'Rubber Soul', sales: 16500000},
      { album: 'The Beatles', sales: 16000000}
    ],
    genre: 'Pop'
  },
  {
    name: 'Elton John',
    bestAlbuns: [
      { album: 'One Night Only -- The Greatest Hits', sales: 12000000},
      { album: 'Duets', sales: 8000000},
      { album: 'The Big Picture', sales: 7500000},
      { album: 'Songs from the West Coast', sales: 5000000},
    ],
    genre: 'Pop',
  },
  {
    name: 'Led Zeppelin',
    bestAlbuns: [
      { album: 'Led Zeppelin IV', sales: 23000000},
      { album: 'Physical Graffiti', sales: 16000000},
      { album: 'Led Zeppelin II', sales: 12000000},
      { album: 'Houses of the Holy', sales: 4000000},
    ],
    genre: 'Heavy metal',
  },
  {
    name: 'Queen',
    bestAlbuns: [
      { album:  'A Night at the Opera', sales: 6000000},
      { album: 'Sheer Heart Attack', sales: 3000000},
      { album: 'Jazz', sales: 5000000},
      { album: 'The Game', sales: 2500000}
    ],
    genre: 'Hard rock'
  },
  {
    name: 'Pink Floyd',
    bestAlbuns: [
      { album: 'The Dark Side of the Moon', sales: 9500000},
      { album: 'Animals', sales: 7000000},
      { album: 'Wish You Were Here', sales: 6500000},
      { album: 'Meddle', sales: 2000000},
    ],
    genre: 'Progressive rock'
  },
]

// Ex 1

const bandAndAuthor = topBritishBands.map(item => `${item.name} - ${item.genre}`);

// Ex 2

const getBestAlbum = (accumulator, album) => {
  if (accumulator.sales > album.sales) return accumulator;
  return album;
}
const reportBestBands = (arrayBands) => {
  return arrayBands.map((band) => {
    return {
      name: band.name,
      album: band.bestAlbuns.reduce(getBestAlbum).album,
    };
  });
}

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