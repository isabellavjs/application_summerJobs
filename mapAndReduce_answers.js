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

// Gabarito: 

// Exercício 1: Crie um array que contenha as cinco melhores bandas inglesas e os seus respectivos gêneros no formato BANDA - GÊNERO. Dica: você pode usar o map para esta operação.

// Resolução comentada: Observe que o objetivo do exercício é transformar o array topBritishBands em um array contendo apenas o nome da banda e o seu gênero musical. Percebe que o array que queremos construir tem, portanto, o mesmo número de elementos que o array topBritishBands? Esse exemplo é portanto uma aplicação perfeita da HOF map! O método map nesse exercício irá mapear o array original, e criará um novo array (armazenado em bandAndAuthor) sem alterar o original. O map aplica em cada item a função passada como parâmetro, que retorna o nome da banda e o seu respectivo gênero no formato especificado.

const bandAndAuthor = topBritishBands.map(item => `${item.name} - ${item.genre}`);
console.log(bandAndAuthor);

// Exercício 2: Crie um array que contenha os nomes das bandas e os melhores albuns em ordem alfabética. Inclua apenas os albuns que venderam no mínimo cinco milhões de cópias.

