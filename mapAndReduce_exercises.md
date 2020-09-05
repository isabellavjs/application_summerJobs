# *Higher order functions* - Map e Reduce

## O que vamos aprender?

Você foi contratado para trabalhar em uma das empresas parceiras da Trybe :sunglasses:. Sua tarefa é coletar os dados de entrada de um `<form>` fornecidos pelo usuário e enviá-los a uma API como um objeto. "Mapear", "iterar", "percorrer" dados te remetem a estruturas de repetições, como um loop `for` e `while`. Mas você logo percebe que essa não é a melhor alternativa para lidar com os dados de uma empresa com mais de 500.000 usuários :scream:!

Hoje vamos aprender duas _Higher Order Functions_ **muito** utilizadas por nós, desenvolvedores: o `Array.map` e o `Array.reduce`.

## Você será capaz de:

* Utilizar o `Array.map` para manipular e construir arrays;
* Utilizar o `Array.reduce` em tarefas como: somar elementos de um array, converter um array em um objeto, manipular e construir arrays;
* Criar códigos mais limpos, legíveis e de baixa complexidade combinando o `Array.map` e o `Array.reduce`.

## Porque isso é importante?

Como você pode perceber no exemplo introdutório, quando estamos trabalhando com dados muito numerosos é muito importante escrever códigos expressivos, legíveis e que possam ser facilmente reimplementados. As HOF nos ajudam bastante nessa tarefa, e com o `Array.map` e o `Array.reduce` em mãos você poderá fazer muito mais!

## Conteúdo

### Tempo sugerido para estudo: 30 minutos

## Array.map

Como vimos anterirormente, _Higher Order Functions_ são funcões que podem receber e/ou retornar outra função. Uma grande vantagem de HOFs é que elas podem ser reutilizadas. 

O método `map` é uma HOF e recebe uma única função como argumento. Antes de destrinchá-lo em um exemplo, vamos nos atentar ao que o `map` recebe/retorna:

1.  O `Array.map` é executado em um array, e retornará um **novo array** com a **mesma quantidade de elementos** do **array original**;
2.  O método `Array.map` **recebe uma única função** como parâmetro, que chamaremos de **callback**. Essa função será executada uma vez para cada elemento do array original. 

Mas e a função callback, quais parâmetros ela recebe? A callback recebe três parâmetros, como pode ser visto a seguir:

```javascript
const newArray = arr.map(function callback(currentValue, index, array){
  // Code to do something;
})
```

1.  O parâmetro _currentValue_ corresponde ao elemento do array original em que a função está sendo aplicada.
2. _index_ é a posição desse mesmo elemento. Esse parâmetro é opcional.
3. _array_ corresponde ao array original em que a função é aplicada. Esse argumento também é opcional.

Em outras palavras, o método map irá executar a função passada como callback uma vez para cada elemento do array que foi passado (no exemplo, arr). O retorno da callback será um novo elemento que será inserido na mesma posição do elemento em que a função é executada. Ao fim da última iteração, teremos um novo array (newArray) com o retorno da função callback!

Observe que **utilizamos o map** quando queremos **transformar** um array a partir de um outro array, mas mantendo a mesma quantidade de elementos do original.  

Vamos ver na prática como isso funciona.

Como você faria para multiplicar por dois cada elemento do array abaixo, retornando o resultado em um novo array? Tente fazer essa operação com um for.

```javascript
const oddNumbers = [2, 4, 6, 8, 10];
```

Sua solução deve estar parecida com essa daqui:

```javascript
const multiplesTwo = [];
for (let index = 0; index < oddNumbers.length; index += 1) {
  multiplesTwo.push(oddNumbers[index] * 2);
}

console.log(multiplesTwo); // [ 4, 8, 12, 16, 20 ]
```

Veja abaixo como seria a solução com o `map`:

```javascript
const multiplesTwoMap = oddNumbers.map(item => item * 2);

console.log(multiplesTwoMap); // [ 4, 8, 12, 16, 20 ]
console.log(oddNumbers); // [2, 4, 6, 8, 10]
```

Você consegue perceber que utilizando o map chegamos ao mesmo resultado com menos declarações, de uma forma muito mais direta? A grande vantagem do map é pegar uma função trivial, como uma simples multiplicação, e transformá-la em uma super-função muito mais eficiente, que será executada em todo o array com apenas uma chamada. Por fim, o map retornará um novo array com o resultado da multiplicação aplicado a cada item sem alterar o array oddNumbers. 

Veja como o map é capaz de tornar até códigos simples em um código muito mais legível, direto e fácil de ser reutilizado - afinal, você não precisaria de recriar o map caso quisesse realizar essa multiplicação novamente em um outro array, como aconteceria com o loop for.

Outra grande vantagem do método map é que você pode criar regras de negócio para serem aplicadas a elementos específicos do array de origem. Como você faria para construir um array com uma mensagem de boas-vindas para viajantes com seguro, e uma mensagem proibindo o embarque de viajantes sem seguro? Considere o array travellers abaixo e tente fazer esse exercício!

```javascript
const travellers = [
  { lastName: 'Miller', firstName: 'John', insurance: true, destinations: ['Spain', 'Portugal', 'France', 'Italy'] },
  { lastName: 'Carey', firstName: 'Mariah', insurance: true, destinations: ['England', 'Scotland', 'Belgium'] },
  { lastName: 'Klein', firstName: 'Kevin', insurance: false, destinations: ['China'] },
  { lastName: 'Fischer', firstName: 'Linda', insurance: true, destinations: ['Australia', 'Japan']},
  { lastName: 'Fitz', firstName: 'Cleyton', insurance: false, destinations: ['India', 'Thailand', 'Vietnan', 'Dubai'] },
]
```

Com o map, uma solução seria: 

```javascript
const haveInsurance = travellers.map((traveller) => {
  if (traveller.insurance) return `${traveller.firstName} ${traveller.lastName} has an insurance. Welcome abord!`;
  else {return `${traveller.firstName} ${traveller.lastName} is not allowed to travel without an insurance`};
})
console.log(haveInsurance);
```

## Exercícios

### Tempo sugerido para realizar os exercícios: 60 minutos.

Leia atentamente o enunciado de cada exercício e faça o que se pede! Não se esqueça de versionar o seu código no seu repositório com arquivos e `commits` específicos para cada exercício, hein?! :eyes:

Considere o array com os grandes sucessos da música britânica abaixo. Você irá utilizá-lo para resolver os exercícios 1 e 2. 

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

1. Crie um array que contenha as cinco melhores bandas inglesas e os seus respectivos gêneros no formato BANDA - GÊNERO. *Dica: você pode usar o map para esta operação.*

2. Crie uma função que retorne um array que mostre o nome do álbum mais vendido por cada banda. *Dica: você pode usar o map combinado com o reduce para esse exercício.*

Considere o array menu para fazer os exercícios 3 e 4. Ele contém o menu de um restaurante japonês com os itens disponíveis, o preço e a quantidade da porção que vem em cada item.

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

4. Crie um objeto para o cliente faminto contendo o nome de todos os items consumidos em ordem alfabética e a quantidade de comida que ele ingeriu (isto é, leve em consideração a quantidade que vem em cada porção)

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

## Bonus

Para os exercícios bônus, considere o array countries abaixo.

```javascript
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
```

## Recursos adicionais

- [Javascript Higher Order Functions: Map e Reduce do zero ao topo.](https://medium.com/@fabiosenracorrea/javascript-higher-order-functions-map-e-reduce-do-zero-ao-topo-6365784f959a)
- [Functional javascript: how to use array reduce for more than just numbers](https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/)