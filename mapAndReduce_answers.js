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

// Exercício 1: Crie um array que contenha as cinco melhores bandas inglesas e os seus respectivos gêneros no formato BANDA - GÊNERO. Dica: você pode usar o map para esta operação.

// Resolução comentada: Observe que o objetivo do exercício é transformar o array topBritishBands em um novo array contendo apenas o nome da banda e o seu gênero musical. Percebe que o array que queremos construir tem o mesmo número de elementos que o array topBritishBands? Esse exemplo é portanto uma aplicação perfeita da HOF map! O método map nesse exercício irá mapear o array original, e criará um novo array (armazenado em bandAndAuthor) sem alterar o original. O map aplica em cada item a função passada como parâmetro, que retorna o nome da banda e o seu respectivo gênero no formato especificado.

const bandAndAuthor = topBritishBands.map(item => `${item.name} - ${item.genre}`);

// Exercício 2: Crie uma função que retorne um array contendo um objeto que mostre o nome do álbum mais vendido por cada banda.

// Resolução comentada: O objetivo desse exercício é criar um novo array a partir de topBritishBands contendo um objeto com o nome da banda e o album com o maior numero de vendas. Novamente, o novo array terá o mesmo tamanho que o array original. Opa, map! Aqui, vamos usar o reduce para retornar o álbum com o maior numero de vendas dentro do map. Afinal, nesse caso queremos que esse método retorne uma string com o nome do album mais vendido, que usaremos como o valor da propriedade 'album' do objeto que queremos construir. 

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

// Exercício 3: Um cliente faminto pediu o combo da casa, que contém todos os items disponíveis no menu. Calcule o valor da conta final, considerando que o restaurante cobra uma taxa de serviço de 15%.

// Resolução comentada: O objetivo desse exercício é, a partir do array menu, calcular o preço total do cliente. Ou seja, esperamos ter um único número no final, que corresponde ao total do pedio mais a taxa de serviço de 15 %. Percebe como queremos reduzir o array menu a um único número? Então essa é uma aplicação do reduce! Aqui, somamos o preço de cada item do menu ao total, que acumula essa soma a cada iteração. Como o retorno do reduce é um número contendo o total do pedido, podemos tratá-lo como tal e multiplicar esse retorno por 1.15 para calcular a conta final.

const menu = [
  { type: 'entrada', name: 'shimeji na manteiga', price: 18.90,  quantity: 1 },
  { type: 'Prato', name: 'sushis', price: 9.50, quantity: 14 },
  { type: 'Prato', name: 'sashimi', price: 32.90, quantity: 10 },
  { type: 'Prato', name: 'hossomakis variados', price: 24.90, quantity: 6 },
  { type: 'Prato', name: 'uramakis', price: 30.90, quantity: 8 },
  { type: 'Sobremesa', name: 'banana caramelada', price: 11.90, quantity: 6 },
];

const getBill = (menu.reduce((total, eachPrice) => total + eachPrice.price, 0) * 1.15)

// Exercício 4: Crie um objeto para o cliente faminto contendo o nome de todos os items consumidos em ordem alfabética e a quantidade de comida que ele ingeriu (isto é, leve em consideração a quantidade que vem em cada porção).

// Resolução comentada: Queremos criar uma função que nos retorne um objeto contendo apenas o que foi consumido em ordem alfabética e a quantidade total. Que tal criarmos um objeto com o que esperamos retornar? Essa estrutura inicial irá te ajudar a visualizar melhor o que precisa ser feito, e como manipular o array original. Observe que queremos converter o array menu a um objeto com duas chaves. Logo, usaremos o reduce para construí-lo. Observe que passamos esse objeto base (summaryOrder) como o valor inicial para a operação. Observe que o acumulador armazena esse objeto base, e atualiza o valor de items e totalQuantity a cada iteração. Por fim, o retorno na função será o acumulador, que contém o objeto summaryOrder com todos os items consumidos e a quantidade total.

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

// Exercício 5: Retorne o preço total a ser cobrado considerando a quantidade pedida pelo grupo, e a taxa de serviço de 15%.

// Resolução comentada: Queremos criar uma função que nos retorne um único número: o valor total da conta. Opa, reduce! Mas antes de calcular o valor final, eu devo acessar cada valor do objeto order e multiplicá-lo pelo preço dos itens consumidos. Repare que para fazer essa operação, um caminho é converter o objeto order em um array contendo apenas as quantidades consumidas. Observe que nesse caso o array contendo as quantidades tem exatamente o mesmo tamanho do menu, e o que foi consumido está na mesma ordem apresentada nesse array. O que podemos fazer portanto é mapear o array menu e multiplicar o preço de cada item pela quantidade consumida, que corresponde ao número em cada índice do array criado com as quantidades consumidas. Nesse exemplo, podemos passar dois parâmetros para o map: o valor atual do array de origem e o indice desse valor. Nesse caso, como o novo array criado a partir do objeto order tem o mesmo tamanho de menu e contém o que foi consumido na mesma ordem, as quantidades têm o mesmo índice do array de origem.

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

// Bonus

const countries = [
  {
    name: 'Brazil',
    currency: 'Brazilian real',
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
    name: 'Argentina',
    currency: 'Argentine peso',
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
    name: 'Venezuela',
    currency: 'Venezuelan bolívar',
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
    name: 'Paraguay',
    currency: 'Paraguayan guaraní',
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
    currency: 'Uruguayan peso',
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
]
// Bonus 1:

const countriesAndLeaders = countries
.map(item => `${item.name} teve ${item.leaders.length} líderes políticos no século XX`);

// Bonus 2:

const currentLeaderAverageAge = countries
.map(leader => {
  const arrLeaders = leader.leaders;
  const currentLeader = arrLeaders[arrLeaders.length -1];
  return currentLeader;
})
.reduce((accumulator, currentValue) => (
  accumulator + (currentValue.year - currentValue.birthYear)
), 0) / countries.length;

console.log(currentLeaderAverageAge);

// Bonus 3:
