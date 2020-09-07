## Gabarito

Considere o array abaixo para os exercícios 1 e 2.

```javascript
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
```

1. Crie um array que contenha as cinco melhores bandas inglesas e os seus respectivos gêneros no formato BANDA - GÊNERO. Dica: você pode usar o map para esta operação.

_Resolução comentada: Observe que o objetivo do exercício é transformar o array topBritishBands em um novo array contendo apenas o nome da banda e o seu gênero musical. Percebe que o array que queremos construir tem o mesmo número de elementos que o array topBritishBands? Esse exemplo é portanto uma aplicação perfeita do map! O método map nesse exercício irá mapear o array original, e criará um novo array (armazenado em bandAndAuthor) sem alterar o original. O map aplica em cada item a função passada como parâmetro, que retorna o nome da banda e o seu respectivo gênero no formato especificado._

```javascript
const bandAndAuthor = topBritishBands.map(item => `${item.name} - ${item.genre}`);
```

2. Crie uma função que retorne um array contendo um objeto que mostre o nome do álbum mais vendido por cada banda.

_Resolução comentada: O objetivo desse exercício é criar um novo array a partir de topBritishBands contendo um objeto com o nome da banda e o album com o maior numero de vendas. Novamente, o novo array terá o mesmo tamanho que o array original. Opa, map! Aqui, vamos usar o reduce para retornar o álbum com o maior numero de vendas dentro do map. Afinal, nesse caso queremos que esse método retorne uma string com o nome do album mais vendido, que usaremos como o valor da propriedade 'album' do objeto que queremos construir._

```javascript
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
```

Considere o array abaixo para os exercícios de 3 a 5.

```javascript
const menu = [
  { type: 'entrada', name: 'Shimeji na manteiga', price: 18.90,  quantity: 1 },
  { type: 'Prato', name: 'sushis', price: 9.50, quantity: 14 },
  { type: 'Prato', name: 'sashimi', price: 32.90, quantity: 10 },
  { type: 'Prato', name: 'hossomakis variados', price: 24.90, quantity: 6 },
  { type: 'Prato', name: 'uramakis', price: 30.90, quantity: 8 },
  { type: 'Sobremesa', name: 'banana caramelada', price: 11.90, quantity: 6 },
]
```

3. Um cliente faminto pediu o combo da casa, que contém todos os items disponíveis no menu. Calcule o valor da conta final, considerando que o restaurante cobra uma taxa de serviço de 15%.

_Resolução comentada: O objetivo desse exercício é, a partir do array menu, calcular o preço total do cliente. Ou seja, esperamos ter um único número no final, que corresponde ao total do pedio mais a taxa de serviço de 15 %. Percebe como queremos reduzir o array menu a um único número? Então essa é uma aplicação do reduce! Aqui, somamos o preço de cada item do menu ao total, que acumula essa soma a cada iteração. Como o retorno do reduce é um número contendo o total do pedido, podemos tratá-lo como tal e multiplicar esse retorno por 1.15 para calcular a conta final._

```javascript
const getBill = (menu.reduce((total, eachPrice) => total + eachPrice.price, 0) * 1.15);
```

4. Crie um objeto para o cliente faminto contendo o nome de todos os items consumidos em ordem alfabética e a quantidade de comida que ele ingeriu (isto é, leve em consideração a quantidade que vem em cada porção).

_Resolução comentada: Queremos criar uma função que nos retorne um objeto contendo apenas o que foi consumido em ordem alfabética e a quantidade total. Que tal criarmos um objeto com o que esperamos retornar? Essa estrutura inicial irá te ajudar a visualizar melhor o que precisa ser feito, e como manipular o array original. Observe que queremos converter o array menu a um objeto com duas chaves. Logo, usaremos o reduce para construí-lo. Observe que passamos esse objeto base (summaryOrder) como o valor inicial para a operação. Observe que o acumulador armazena esse objeto base, e atualiza o valor de items e totalQuantity a cada iteração. Por fim, o retorno na função será o acumulador, que contém o objeto summaryOrder com todos os items consumidos e a quantidade total._

```javascript
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
```

5. Um grupo de amigos fez o seguinte pedido:

```javascript
order = {
  'shimeji na manteiga': 4,
  'hossomakis variados': 3,
  'sushis': 5,
  'sashimi': 3,
  'banana caramelada': 2,
}
```

Retorne o preço total a ser cobrado considerando a quantidade pedida pelo grupo, e a taxa de serviço de 15%.

_Resolução comentada: Queremos criar uma função que nos retorne um único número: o valor total da conta. Opa, reduce! Mas antes de calcular o valor final, eu devo acessar cada valor do objeto order e multiplicá-lo pelo preço dos itens consumidos. Repare que para fazer essa operação, um caminho é converter o objeto order em um array contendo apenas as quantidades consumidas. Observe que nesse caso o array contendo as quantidades tem exatamente o mesmo tamanho do menu, e o que foi consumido está na mesma ordem apresentada nesse array. O que podemos fazer portanto é mapear o array menu e multiplicar o preço de cada item pela quantidade consumida, que corresponde ao número em cada índice do array criado com as quantidades consumidas. Nesse exemplo, podemos passar dois parâmetros para o map: o valor atual do array de origem e o indice desse valor. Nesse caso, como o novo array criado a partir do objeto order tem o mesmo tamanho de menu e contém o que foi consumido na mesma ordem, as quantidades têm o mesmo índice do array de origem._

```javascript
const finalBill = () => {
  const quantityOrder = Object.values(order);

  const partialPrice = menu
  .map((item, index) => (quantityOrder[index] * item.price))
  .reduce((total, current) =>  total + current, 0) * 1.15;
  return partialPrice;
}
```

## Bônus

1. Crie um array que imprima para cada país fundador a seguinte frase frase: "'NOME_DO_PAÍS teve  NÚMERO_LIDERES_POLÍTICOS no século XX".

2. Calcule a idade média dos presidentes atuais quando eles tomaram posse.