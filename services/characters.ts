import axios from 'axios';
import { IFilters, ICharacterList, ICharacter } from '../entities';
import { getCharactersQuery, getCharacterQuery, getAmountOfCharactersQuery } from './data';
import configs from '../configs';

const axinst = axios.create({
  baseURL: configs.apiBaseUrl,
  timeout: configs.timeout,
});

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

const getCharactersFirstPage = async () => {
  const data = await getCharacters({ page: 1 });

  return data;
};

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
