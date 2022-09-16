import axios from 'axios';
import { IFilters, ICharacterList, ICharacter } from '../entities';
import { getCharactersQuery, getCharacterQuery, getAmountOfCharactersQuery } from './data';
import configs from '../configs';

const axinst = axios.create({
  baseURL: configs.apiBaseUrl,
  timeout: configs.timeout,
});

/**
 * Get characters from the graphql API
 * @param filters - filters to apply to the query (page, name)
 * if not provided, the first page will be returned
 * @returns - the characters
 * @throws - if no data is returned
 */
const getCharacters = async (filters: IFilters) => {
  const { data } = await axinst.post(configs.apiBaseUrl, {
    query: getCharactersQuery,
    variables: filters,
  });
  if (!data.data) {
    throw new Error('No data');
  }
  const result: ICharacterList = data.data.characters;

  return result;
};

/**
 * Get a character from the graphql API
 * @param id - the id of the character
 * @returns - the character
 * @throws - if no data is returned
 * @throws - if the character is not found
 */
const getCharacter = async (id: number) => {
  const { data } = await axinst.post(configs.apiBaseUrl, {
    query: getCharacterQuery,
    variables: { id },
  });
  if (!data.data || !data.data.character) {
    throw new Error('No data');
  }
  const result: ICharacter = data.data.character;

  return result;
};

/**
 *  Get first page of characters from the graphql API
 *  basically a wrapper for getCharacters
 * @returns - the characters
 */
const getCharactersFirstPage = async () => {
  const data = await getCharacters({ page: 1 });

  return data;
};

/**
 * get the amount of characters from the graphql API
 * @returns - the amount of characters
 * @throws - if no data is returned
 */
const getAmountOfCharacters = async () => {
  const { data } = await axinst.post(configs.apiBaseUrl, {
    query: getAmountOfCharactersQuery,
  });
  if (!data.data || !data.data.characters) {
    throw new Error('No data');
  }
  const amountOfCharacters = data.data.characters.info.count;

  return amountOfCharacters;
};

export { getCharacters, getCharacter, getCharactersFirstPage, getAmountOfCharacters };
