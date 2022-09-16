import { getStaticProps } from '../pages';
import {
  getStaticProps as detailGetStaticProps,
  getStaticPaths as detailGetStaticPath,
} from '../pages/detail/[character_id]';
import {
  mockGetCharacters,
  characterListMock,
  mockGetCharacter,
  characterMock,
  mockGetAmountOfCharacters,
} from '../test-utils/mocks';

jest.mock('../services/characters');

describe('ListPage getStaticsProps', () => {
  describe('When the data is fetched successfully', () => {
    it('should return the list of items', async () => {
      mockGetCharacters('firstPage');

      const result = await getStaticProps();
      expect(result).toEqual({
        props: {
          data: characterListMock,
        },
      });
    });
  });

  describe('When the data is not fetched successfully', () => {
    it('should redirect to the error page', async () => {
      mockGetCharacters('firstPageFail');

      const result = await getStaticProps();
      expect(result).toEqual({
        redirect: {
          destination: '/error',
          permanent: true,
        },
      });
    });
  });
});

describe('Detail Page getStaticsProps', () => {
  describe('When the data is fetched successfully', () => {
    it('should return the list of items', async () => {
      mockGetCharacter('ok');

      const result = await detailGetStaticProps({ params: { character_id: 1 } });
      expect(result).toEqual({
        props: {
          character: characterMock,
        },
      });
    });
  });

  describe('When the data is not fetched successfully', () => {
    it('should redirect to the error page', async () => {
      mockGetCharacter('fail');

      const result = await detailGetStaticProps({ params: { character_id: 1 } });
      expect(result).toEqual({
        redirect: {
          destination: '/error',
          permanent: false,
        },
      });
    });
  });
});

describe('Detail Page getStaticsPaths', () => {
  it('should return the list of items', async () => {
    mockGetAmountOfCharacters(3);

    const result = await detailGetStaticPath();
    expect(result).toEqual({
      paths: [{ params: { character_id: '1' } }, { params: { character_id: '2' } }],
      fallback: 'blocking',
    });
  });
});
