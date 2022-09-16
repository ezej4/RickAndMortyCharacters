import {
  getCharacters,
  getCharacter,
  getCharactersFirstPage,
  getAmountOfCharacters,
} from './characters';
import { characterListMock } from '../test-utils/mocks';

const testPostFn = jest.fn();

jest.mock('axios', () => {
  return {
    create: jest.fn(() => {
      return {
        post: () => testPostFn(),
      };
    }),
  };
});

describe('Characters service', () => {
  describe('Get characters method', () => {
    describe('When the Api respond with data', () => {
      it('Should return the characters list', async () => {
        testPostFn.mockResolvedValueOnce({
          data: {
            data: {
              characters: characterListMock,
            },
          },
        });

        const characters = await getCharacters({ page: 1 });
        expect(characters).toEqual(characterListMock);
      });
    });

    describe('When the Api respond without data', () => {
      it('Should throw an error', async () => {
        testPostFn.mockResolvedValueOnce({
          data: {
            data: undefined,
          },
        });

        try {
          await getCharacters({ page: 1 });
        } catch (error) {
          expect(error.message).toEqual('No data');
        }
      });
    });
  });

  describe('Get character method', () => {
    describe('When the Api respond with data', () => {
      it('Should return the character', async () => {
        const testCharacter = characterListMock.results[0];
        testPostFn.mockResolvedValueOnce({
          data: {
            data: {
              character: testCharacter,
            },
          },
        });

        const character = await getCharacter(1);
        expect(character).toEqual(testCharacter);
      });
    });

    describe('When the Api respond without data', () => {
      it('Should throw an error', async () => {
        testPostFn.mockResolvedValueOnce({
          data: {
            data: undefined,
          },
        });

        try {
          await getCharacter(1);
        } catch (error) {
          expect(error.message).toEqual('No data');
        }
      });
    });
  });

  describe('Get characters first page method', () => {
    describe('When the Api respond with data', () => {
      it('Should return the characters list', async () => {
        testPostFn.mockResolvedValueOnce({
          data: {
            data: {
              characters: characterListMock,
            },
          },
        });

        const characters = await getCharactersFirstPage();
        expect(characters).toEqual(characterListMock);
      });
    });

    describe('When the Api respond without data', () => {
      it('Should throw an error', async () => {
        testPostFn.mockResolvedValueOnce({
          data: {
            data: undefined,
          },
        });

        try {
          await getCharactersFirstPage();
        } catch (error) {
          expect(error.message).toEqual('No data');
        }
      });
    });
  });

  describe('Get amount of characters method', () => {
    describe('When the Api respond with data', () => {
      it('Should return the amount of characters', async () => {
        testPostFn.mockResolvedValueOnce({
          data: {
            data: {
              characters: {
                info: {
                  count: 671,
                },
              },
            },
          },
        });

        const amountOfCharacters = await getAmountOfCharacters();
        expect(amountOfCharacters).toEqual(671);
      });
    });

    describe('When the Api respond without data', () => {
      it('Should throw an error', async () => {
        testPostFn.mockResolvedValueOnce({
          data: {
            data: undefined,
          },
        });

        try {
          await getAmountOfCharacters();
        } catch (error) {
          expect(error.message).toEqual('No data');
        }
      });
    });
  });
});
