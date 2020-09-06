const countries = [
  {
    name: 'Brazil',
    currency: 'Brazilian real',
    capital: 'Brasilia',
    languages: 'Portuguese',
    leaders: [
      {
        firstName: 'Fernando Henrique',
        lastName: 'Cardoso',
        birthYear: 1931,
        year: 1998,
      },
      {
        firstName: 'Luiz Inacio',
        lastName: 'Lula da Silva',
        birthYear: 1945,
        year: [2002, 2006],
      },
      {
        firstName: 'Dilma',
        lastName: 'Rousseff',
        birthYear: 1947,
        year: [2010, 2014],
      },
      {
        firstName: 'Michel',
        lastName: 'Temer',
        birthYear: 1940,
        year: 2014,
      },
      {
        firstName: 'Jair',
        lastName: 'Bolsonaro',
        birthYear: 1955,
        year: 2018,
      },
    ]
  },
  {
    name: 'Colombia',
    currency: '	Colombian peso',
    capital: 'Bogotá',
    languages: 'Spanish',
    leaders: [
      {
        firstName: 'Andres',
        lastName: 'Pastrana Arango',
        birthYear: 1954,
        year: 1998,
      },
      {
        firstName: 'Alvaro',
        lastName: 'Uribe Velez',
        birthYear: 1952,
        year: 2002,
      },
      {
        firstName: 'Juan Manuel',
        lastName: 'Santos',
        birthYear: 1951,
        year: 2010,
      },
      {
        firstName: 'Ivan',
        lastName: 'Duarque Marquez',
        birthYear: 1976,
        year: 2018,
      },
    ],
  },
  {
    name: 'Argentina',
    currency: 'Argentine peso',
    capital: 'Buenos Aires',
    languages: ['Spanish', 'English', 'Italian', 'German', 'French'],
    leaders: [
      {
        firstName: 'Fernando',
        lastName: 'de la Rua',
        birthYear: 1937,
        year: 1999,
      },
      {
        firstName: 'Adolfo',
        lastName: 'Rodríguez Saá',
        birthYear: 1947,
        year: 2001,
      },
      {
        firstName: 'Eduardo',
        lastName: 'Duhalde',
        birthYear: 1941,
        year: 2002,
      },
      {
        firstName: 'Nestor',
        lastName: 'Kirchner',
        birthYear: 1950,
        year: 2003,
      },
      {
        firstName: 'Cristina',
        lastName: 'Fernández de Kirchner',
        birthYear: 1953,
        year: [2007, 2011],
      },
      {
        firstName: 'Mauricio',
        lastName: 'Macri',
        birthYear: 1959,
        year: 2015,
      },
      {
        firstName: 'Alberto',
        lastName: 'Fernandez',
        birthYear: 1959,
        year: 2019,
      },
    ]
  },
  {
    name: 'Peru',
    currency: 'Peruvian nuevo sol',
    capital: 'Lima',
    languages: ['Spanish', 'Quéchua', 'Aymara'],
    leaders: [
      {
        firstName: 'Valentin',
        lastName: 'Paniagua',
        birthYear: 1936,
        year: 2000,
      },
      {
        firstName: 'Alejandro',
        lastName: 'Toledo',
        birthYear: 1946,
        year: 2001,
      },
      {
        firstName: 'Alan',
        lastName: 'Garcia Perez',
        birthYear: 1949,
        year: 2006,
      },
      {
        firstName: 'Ollanta',
        lastName: 'Humala',
        birthYear: 1962,
        year: 2011,
      },
      {
        firstName: 'Pedro',
        lastName: 'Pablo Kuczynski',
        birthYear: 1938,
        year: 2016,
      },
      {
        firstName: 'Martin',
        lastName: 'Vizcarra',
        birthYear: 1963,
        year: 2018,
      },
    ]
  },
  {
    name: 'Venezuela',
    currency: 'Venezuelan bolívar',
    capital: 'Caracas',
    languages: 'Spanish',
    leaders: [
      {
        firstName: 'Hugo',
        lastName: 'Chavez',
        birthYear: 1954,
        year: [2001, 2002, 2007, 2013]
      },
      {
        firstName: 'Pedro',
        lastName: 'Carmona Estanga',
        birthYear: 1941,
        year: 2002,
      },
      {
        firstName: 'Diosdado',
        lastName: 'Cabello',
        birthYear: 1963,
        year: 2002,
      },
      {
        firstName: 'Nicolas',
        lastName: 'Maduro',
        birthYear: 1962,
        year: 2013,
      },
    ]
  },
  {
    name: 'Chile',
    currency: 'Chilean peso',
    capital: 'Santiago',
    languages: 'Spanish',
    leaders: [
      {
        firstName: 'Ricardo',
        lastName: 'Lagos',
        birthYear: 1938,
        year: 2000,
      },
      {
        firstName: 'Michelle',
        lastName: 'Bachelet',
        birthYear: 1951,
        year: [2006, 2014],
      },
      {
        firstName: 'Sebastian',
        lastName: 'Piñera',
        birthYear: 1949,
        year: [2010, 2018]
      },
    ]
  },
  {
    name: 'Ecuador',
    currency: 'United States dollar',
    capital: 'Quito',
    languages: ['Spanish', 'Quechua'],
    leaders: [
      {
        firstName: 'Jamil',
        lastName: 'Mahuad',
        birthYear: 1949,
        year: 1998,
      },
      {
        firstName: 'Gustavo',
        lastName: 'Noboa',
        birthYear: 1937,
        year: 2000,
      },
      {
        firstName: 'Lucio Edwin',
        lastName: 'Gutiérrez Borbúa',
        birthYear: 1957,
        year: 2003,
      },
      {
        firstName: 'Alfredo',
        lastName: 'Palacio',
        birthYear: 1939,
        year: 2005,
      },
      {
        firstName: 'Rafael',
        lastName: 'Correa',
        birthYear: 1963,
        year: 2007,
      },
      {
        firstName: 'Lenín',
        lastName: 'Moreno',
        birthYear: 1953,
        year: 2017,
      },
    ]
  },
  {
    name: 'Bolivia',
    currency: 'Boliviano',
    capital: ['La Paz', 'Sucre'],
    languages: ['Spanish', 'Quechua', 'Aymara', 'Guarani'],
    leaders: [
      {
        firstName: 'Hugo',
        lastName: 'Banzer',
        birthYear: 1926,
        year: 1997,
      },
      {
        firstName: 'Jorge',
        lastName: 'Quiroga',
        birthYear: 1960,
        year: 2001,
      },
      {
        firstName: 'Gonzalo',
        lastName: 'Sánchez de Lozada',
        birthYear: 1930,
        year: 2002,
      },
      {
        firstName: 'Carlos',
        lastName: 'Mesa',
        birthYear: 1953,
        year: 2003,
      },
      {
        firstName: 'Eduardo',
        lastName: 'Rodríguez',
        birthYear: 1956,
        year: 2005,
      },
      {
        firstName: 'Evo',
        lastName: 'Morales',
        birthYear: 1959,
        year: 2006,
      },
      {
        firstName: 'Jeanine',
        lastName: 'Áñez',
        birthYear: 1967,
        year: 2019,
      },
    ]
  },
  {
    name: 'Paraguay',
    currency: 'Paraguayan guaraní',
    capital: 'Asunción',
    languages: ['Spanish', 'Guaraní'],
    leaders: [
      {
        firstName: 'Luis',
        lastName: 'Ángel González Macchi',
        birthYear: 1947,
        year: 1999,
      },
      {
        firstName: 'Nicanor',
        lastName: 'Duarte Frutos',
        birthYear: 1956,
        year: 2003,
      },
      {
        firstName: 'Fernando',
        lastName: 'Lugo',
        birthYear: 1951,
        year: 2008,
      },
      {
        firstName: 'Federico',
        lastName: 'Franco',
        birthYear: 1962,
        year: 2012,
      },
      {
        firstName: 'Horacio',
        lastName: 'Cartes',
        birthYear: 1956,
        year: 2013,
      },
      {
        firstName: 'Mario',
        lastName: 'Abdo Benítez',
        birthYear: 1971,
        year: 2018,
      },
    ]
  },
  {
    name: 'Uruguay',
    currency: '	Uruguayan peso',
    capital: 'Montevideo',
    languages: 'Spanish',
    leaders: [
      {
        firstName: 'Julio',
        lastName: 'María Sanguinetti',
        birthYear: 1936,
        year: 2000,
      },
      {
        firstName: 'Jorge',
        lastName: 'Batlle',
        birthYear: 1927,
        year: 2005,
      },
      {
        firstName: 'Tabaré',
        lastName: 'Vázquez',
        birthYear: 1940,
        year: 2010,
      },
      {
        firstName: 'José',
        lastName: 'Mujica',
        birthYear: 1935,
        year: 2015,
      },
      {
        firstName: 'Lacalle',
        lastName: 'Pou',
        birthYear: 1973,
        year: 2020,
      },
    ]
  },
  {
    name: 'Guyana',
    currency: 'Guyanese dollar',
    capital: 'Georgetown',
    languages: 'English',
    leaders: [
      {
        firstName: 'Bharrat',
        lastName: 'Jagdeo',
        birthYear: 1964,
        year: 1999,
      },
      {
        firstName: 'Donald',
        lastName: 'Ramotar',
        birthYear: 1950,
        year: 2011,
      },
      {
        firstName: 'David',
        lastName: 'Granger',
        birthYear: 1942,
        year: 2015,
      },
      {
        firstName: 'Irfaan',
        lastName: 'Ali',
        birthYear: 1942,
        year: 2020,
      },
    ]
  },
  {
    name: 'Suriname',
    currency: '	Surinamese dollar',
    capital: 'Paramaribo',
    languages: ['Dutch', 'Surinamese', 'English'],
    leaders: [
      {
        firstName: 'Ronald',
        lastName: 'Venetiaan',
        birthYear: 1937,
        year: 2000,
      },
      {
        firstName: 'Dési',
        lastName: 'Bouterse',
        birthYear: 1945,
        year: 2010,
      },
      {
        firstName: 'Chan',
        lastName: 'Santokhi',
        birthYear: 1959,
        year: 2020,
      },
    ]
  },
]

const menu = [
  { type: 'entrada', name: 'Shimeji na manteiga', price: 18.90, quantity: 1 },
  { type: 'Prato', name: 'sushis', price: 9.50, quantity: 14 },
  { type: 'Prato', name: 'sashimi', price: 32.90, quantity: 10 },
  { type: 'Prato', name: 'hossomakis variados', price: 24.90, quantity: 6 },
  { type: 'Prato', name: 'uramakis', price: 30.90, quantity: 8 },
  { type: 'Sobremesa', name: 'banana caramelada', price: 11.90, quantity: 6 },
]

const users = [
  {
    name: 'Isabella',
    age: 28,
    email: 'i.bella92@hotmail.com'
  },
  {
    name: 'Pedro',
    age: 18,
    email: 'pedro_sk8@uol.com.br'
  },
  {
    name: 'Julia',
    age: 15,
    email: 'ju.silva@gmail.com'
  },
  {
    name: 'Carla',
    age: 30,
    email: 'carlinhasantos@yahoo.com'
  },
  {
    name: 'Paula',
    age: 50,
    email: 'paula_pop@hotmail.com'
  }
]

const oddNumbers = [2, 4, 6, 8, 10];

const multiplyByTwo = [];
for (let index = 0; index < oddNumbers.length; index += 1) {
  multiplyByTwo.push(oddNumbers[index] * 2);
}
console.log(multiplyByTwo);

const multiplesTwoMap = oddNumbers.map(item => item * 2);
console.log(multiplesTwoMap);

const travellers = [
  { lastName: 'Miller', firstName: 'John', insurance: true, destinations: ['Spain', 'Portugal', 'France', 'Italy'] },
  { lastName: 'Carey', firstName: 'Mariah', insurance: true, destinations: ['England', 'Scotland', 'Belgium'] },
  { lastName: 'Klein', firstName: 'Kevin', insurance: false, destinations: ['China'] },
  { lastName: 'Fischer', firstName: 'Linda', insurance: true, destinations: ['Australia', 'Japan'] },
  { lastName: 'Fitz', firstName: 'Cleyton', insurance: false, destinations: ['India', 'Thailand', 'Vietnan', 'Dubai'] },
]
//const haveInsurance = travellers.map((traveller) => {
//if (traveller.insurance) return `${traveller.firstName} ${traveller.lastName} has an insurance. Welcome abord!`;
//else { return `${traveller.firstName} ${traveller.lastName} is not allowed to travel without an insurance`};
//})

//const haveInsurance = [];
//for (let index = 0; index < travellers.length; index += 1) {
//if (travellers[index].insurance) {return haveInsurance.push(`${travellers[index].firstName} ${travellers[index].lastName} welcome abord!`)
//}
//return haveInsurance;
//}
//console.log(haveInsurance);

const olympicGames = ['China', 'Brazil', 'UK', 'USA', 'Italy', 'Russia'];
const years = [2008, 2016, 2012, 1996, 1960, 2014];



const topBritishBands = [
  {
    name: 'The Beatles',
    bestAlbuns: [
      { album: 'Sgt. Pepper Lonely Hearts Club Band', sales: 32000000 },
      { album: 'Revolver', sales: 27000000 },
      { album: 'Rubber Soul', sales: 16500000 },
      { album: 'The Beatles', sales: 16000000 }
    ],
    genre: 'Pop'
  },
  {
    name: 'Elton John',
    bestAlbuns: [
      { album: 'One Night Only -- The Greatest Hits', sales: 12000000 },
      { album: 'Duets', sales: 8000000 },
      { album: 'The Big Picture', sales: 7500000 },
      { album: 'Songs from the West Coast', sales: 5000000 },
    ],
    genre: 'Pop',
  },
  {
    name: 'Led Zeppelin',
    bestAlbuns: [
      { album: 'Led Zeppelin IV', sales: 23000000 },
      { album: 'Physical Graffiti', sales: 16000000 },
      { album: 'Led Zeppelin II', sales: 12000000 },
      { album: 'Houses of the Holy', sales: 4000000 },
    ],
    genre: 'Heavy metal',
  },
  {
    name: 'Queen',
    bestAlbuns: [
      { album: 'A Night at the Opera', sales: 6000000 },
      { album: 'Sheer Heart Attack', sales: 3000000 },
      { album: 'Jazz', sales: 5000000 },
      { album: 'The Game', sales: 2500000 }
    ],
    genre: 'Hard rock'
  },
  {
    name: 'Pink Floyd',
    bestAlbuns: [
      { album: 'The Dark Side of the Moon', sales: 9500000 },
      { album: 'Animals', sales: 7000000 },
      { album: 'Wish You Were Here', sales: 6500000 },
      { album: 'Meddle', sales: 2000000 },
    ],
    genre: 'Progressive rock'
  },
]

//const newArray = arr.map(function callback(currentValue, index, array) {
// Code to do something;
//})

const ids = ['name', 'lastname', 'email', 'phone'];
const elements = [];

for (let index = 0; index < ids.length; index += 1) {
  elements[index] = document.getElementById(ids(index));
}
console.log(elements);

const worldCupTitles = [1958, '1962', '1970', '1994', 2002];

const numbers = [];

for (let index = 0; index < worldCupTitles.length; index += 1) {
  if (typeof worldCupTitles[index] === 'string') {
    const convertNumbers = parseInt(worldCupTitles[index]);
    numbers.push(convertNumbers);
  } else {
    numbers.push(worldCupTitles[index]);
  }
}
console.log(numbers);

const onlyNumbers = worldCupTitles.map((year) => {
  if (typeof year === 'string') {
    return parseInt(year);
  }
  return year
});

console.log(onlyNumbers);

const shopCart = [
  {
    product: 'Pants',
    quantity: 2,
    price: 17.99
  },
  {
    product: 'Dress',
    quantity: 4,
    price: 35.99,
  },
  {
    product: 'Shoes',
    quantity: 3,
    price: 30.99
  }
]

const shopCartByItem = shopCart.map((item) => {
  const newObject = {};

  newObject[item.product] = item.quantity;
  newObject.partialPrice = item.quantity * item.price;

  return newObject;
})
console.log(shopCartByItem);

const numbers = [1, 5, 8, 54, 20];

//let resultSum = 0; // Variável para armazenar o valor da soma.
//for (let index = 0; index < numbers.length; index += 1) {
//resultSum += numbers[index]; // A cada iteração, o resultado da soma é "acumulado" e atribuído a resultSum. 
//}

//const getSum = (result, number) => {
  //return result + number;
//} // 'getSum' é a função callback que passamos para o reduce. 'result' é o accumulator, e armazenará o resultado da soma a cada iteração.
//const resultSum = numbers.reduce(getSum);

//console.log(resultSum); // 256.5

//  Refatorando a função acima:

const resultSum = numbers.reduce((result, number) => result + number, 10);
console.log(resultSum); // 256.5

