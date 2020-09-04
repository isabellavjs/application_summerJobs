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
console.log(consumption);

// Exercício 5: Retorne o preço total a ser cobrado considerando a quantidade pedida pelo grupo, e a taxa de serviço de 15%.

// Resolução comentada: 

const prices = menu.map(item => `${item.name} - ${item.price}`);
console.log(prices);

order = {
  'shimeji na manteiga': 4,
  'hossomakis variados': 3,
  'sushis': 5,
  'sashimi': 3,
  'banana caramelada': 2,
}

//const finalBill = (order) => {
  //return Object.keys(order).reduce((total, item) => 
    //total + (order[item] * newMenu[item]), 0)
//}

//console.log(finalBill(order));