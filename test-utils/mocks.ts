import { ICharacter, ICharacterList } from '../entities';

const characterMock: ICharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'male',
  type: '',
  origin: {
    name: 'Earth (C-137)',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    {
      name: 'Pilot',
      episode: 'S01E01',
    },
  ],
};

const characterListMock: ICharacterList = {
  info: {
    count: 826,
    pages: 42,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
    {
      id: 3,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
    {
      id: 4,
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    },
    {
      id: 5,
      name: 'Jerry Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    },
    {
      id: 7,
      name: 'Abradolf Lincler',
      image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    },
    {
      id: 9,
      name: 'Agency Director',
      image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    },
    {
      id: 10,
      name: 'Alan Rails',
      image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    },
  ],
};

const characterListMockSecondPage: ICharacterList = {
  info: {
    count: 826,
    pages: 42,
  },
  results: [
    {
      id: 21,
      name: 'Aqua Morty',
      image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
    },
    {
      id: 22,
      name: 'Aqua Rick',
      image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
    },
    {
      id: 23,
      name: 'Arcade Alien',
      image: 'https://rickandmortyapi.com/api/character/avatar/23.jpeg',
    },
    {
      id: 24,
      name: 'Armagheadon',
      image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg',
    },
    {
      id: 25,
      name: 'Armothy',
      image: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
    },
    {
      id: 26,
      name: 'Arthricia',
      image: 'https://rickandmortyapi.com/api/character/avatar/26.jpeg',
    },
    {
      id: 27,
      name: 'Artist Morty',
      image: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
    },
    {
      id: 28,
      name: 'Attila Starwar',
      image: 'https://rickandmortyapi.com/api/character/avatar/28.jpeg',
    },
    {
      id: 29,
      name: 'Baby Legs',
      image: 'https://rickandmortyapi.com/api/character/avatar/29.jpeg',
    },
    {
      id: 30,
      name: 'Baby Poopybutthole',
      image: 'https://rickandmortyapi.com/api/character/avatar/30.jpeg',
    },
  ],
};

const characterListMockEmpty: ICharacterList = {
  info: {
    count: 0,
    pages: 0,
  },
  results: [],
};

export { characterMock, characterListMock, characterListMockEmpty, characterListMockSecondPage };
