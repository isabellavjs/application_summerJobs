const countries = [
  {
    CountryCode: 'BR',
    name: 'Brazil',
    currency: 'Brazilian real',
    demography: {
      population: 212559417,
      density: 25,
      migrants: 21200,
      urbanPopulation: 88,
    },
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
    CountryCode: 'CO',
    name: 'Colombia',
    currency: '	Colombian peso',
    demography: {
      population: 50882891,
      density: 46,
      migrants: 204796,
      urbanPopulation: 80,
    },
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
    CountryCode: 'RA',
    name: 'Argentina',
    currency: 'Argentine peso',
    demography: {
      population: 45195774,
      density: 17,
      migrants: 4800,
      urbanPopulation: 93,
    },
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
    CountryCode: 'PE',
    name: 'Peru',
    currency: 'Peruvian nuevo sol',
    demography: {
      population: 32971854,
      density: 26,
      migrants: 99069,
      urbanPopulation: 79,
    },
    capital: 'Lima',
    languages: ['Spanish', 'Quéchua', 'Aymara'],
    leaders: [
      {
        firstName: '',
        lastName: 'Paniagua',
        birthYear: 1936,
        year: 2000,
      },
      {
        firstName: 'ALejandro',
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
    CountryCode: 'YV',
    name: 'Venezuela',
    currency: 'Venezuelan bolívar',
    demography: {
      population: 28435940,
      density: 32,
      migrants: -653249,
      urbanPopulation: 88,
    },
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
    CountryCode: 'RCH',
    name: 'Chile',
    currency: 'Chilean peso',
    demography: {
      population: 19116201,
      density:	26,
      migrants: 111708,
      urbanPopulation: 85,
    },
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
    CountryCode: 'EC',
    name: 'Ecuador',
    currency: 'United States dollar',
    demography: {
      population: 17643054,
      density: 	71,
      migrants: 36400,
      urbanPopulation: 63,
    },
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
    CountryCode: 'BOL',
    name: 'Bolivia',
    currency: 'Boliviano',
    demography: {
      population: 11673021,
      density: 	11,
      migrants: -9504,
      urbanPopulation: 69,
    },
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
    CountryCode: 'PY',
    name: 'Paraguay',
    currency: 'Paraguayan guaraní',
    demography: {
      population: 7132538,
      density: 18,
      migrants: 	-16556,
      urbanPopulation: 62,
    },
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
    CountryCode: 'ROU',
    name: 'Uruguay',
    currency: '	Uruguayan peso',
    demography: {
      population: 3473730,
      density: 	20,
      migrants: -3000,
      urbanPopulation: 96,
    },
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
    CountryCode: 'GUY',
    name: 'Guyana',
    currency: 'Guyanese dollar',
    demography: {
      population: 786552,
      density: 	4,
      migrants: -6000,
      urbanPopulation: 27,
    },
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
    CountryCode: 'SME',
    name: 'Suriname',
    currency: '	Surinamese dollar',
    demography: {
      population: 586632,
      density: 	4,
      migrants: -1000,
      urbanPopulation: 65,
    },
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
  {
    CountryCode: 'FK',
    name: 'French Guiana',
    currency: 'Euro',
    demography: {
      population: 298682,
      density: 	4,
      migrants: 1200,
      urbanPopulation: 87,
    },
    capital: 'Cayenne',
    languages: 'French',
    leaders: [
      {
        firstName: 'Jacques',
        lastName: 'Chirac',
        birthYear: 1932,
        year: [1995, 2002],
      },
      {
        firstName: 'Nicolas',
        lastName: 'Sarkozy',
        birthYear: 1955,
        year: 2007,
      },
      {
        firstName: 'François',
        lastName: 'Hollande',
        birthYear: 1954,
        year: 2012,
      },
      {
        firstName: 'Emmanuel',
        lastName: 'Macron',
        birthYear: 1977,
        year: 2017,
      },
    ]
  },
  {
    CountryCode: 'GF',
    name: 'Falkland Islands',
    currency: 'Falkland Islands pound',
    demography: {
      population: 3480,
      density: 0,
      migrants: 0,
      urbanPopulation: 66,
    },
    capital: 'Stanley',
    languages: 'English',
    leaders: [
      {
        firstName: 'Michael',
        lastName: 'Blanch',
        birthYear: 1947,
        year: 2000,
      },
      {
        firstName: 'Chris',
        lastName: 'Simpkins',
        birthYear: 1950,
        year: 2003,
      },
      {
        firstName: 'Tim',
        lastName: 'Thorogood',
        birthYear: 1962,
        year: 2008,
      },
      {
        firstName: 'Keith',
        lastName: 'Padgett',
        birthYear: 1939,
        year: 2012,
      },
      {
        firstName: 'Barry',
        lastName: 'Rowland',
        birthYear: 1961,
        year: 2016,
      },
    ]
  },
]

const menu = [
  { type: 'entrada', name: 'Shimeji na manteiga', price: 18.90,  quantity: 1 },
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
  },
  {
    name: 'Pedro',
    age: 48,
  },
  {
    name: 'Julia',
    age: 15
  },
  {
    name: 'Carla',
    age: 30,
  },
  {
    name: 'Paula',
    age: 50,
  }
]

const oddNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const travellers = [
  { lastName: 'Miller', firstName: 'John', insurance: true, destinations: ['Spain', 'Portugal', 'France', 'Italy'] },
  { lastName: 'Carey', firstName: 'Mariah', insurance: true, destinations: ['England', 'Scotland', 'Belgium'] },
  { lastName: 'Klein', firstName: 'Kevin', insurance: false, destinations: ['China'] },
  { lastName: 'Fischer', firstName: 'Linda', insurance: true, destinations: ['Australia', 'Japan']},
  { lastName: 'Fitz', firstName: 'Cleyton', insurance: false, destinations: ['India', 'Thailand', 'Vietnan', 'Dubai'] },
]

const olympicGames = ['China', 'Brazil', 'UK', 'USA', 'Italy', 'Russia']
const years = [2008, 2016, 2012, 1996, 1960, 2014]

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