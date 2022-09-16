import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import { ICharacterList, IFilters } from '../entities';
import * as charactersService from '../services/characters';
import configs from '../configs';
const { defaultPage } = configs;

/**
 * Hook to get characters list with pagination and state management
  * @param initialData - the initial data to be used
  * @returns data - the characters list
  * @returns loading - if the data is being fetched
  * @returns errorOnChangePage - if there was an error while changing page
  * @returns amountOfPages - the amount of pages
  * @returns currentPage - the current page
  * @returns goToPage - function to go to a specific page
  * @returns filterCharacters - function to filter characters by name
  */
const useCharactersList = (initialData: ICharacterList) => {
  const [data, setData] = useState<ICharacterList>(initialData);
  const [loading, setLoading] = useState(false);
  const [errorOnChangePage, setErrorOnChangePage] = useState(null);
  const [amountOfPages, setAmountOfPages] = useState(initialData.info.pages);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const filters = useRef<IFilters>({ page: defaultPage });

  const doApiCall = () => {
    setLoading(true);
    return charactersService
      .getCharacters(filters.current)
      .then((response) => {
        setData(response);
        const page = filters.current.page || defaultPage;
        setCurrentPage(page);
        setAmountOfPages(response.info.pages || 0);
      })
      .catch((error) => {
        setErrorOnChangePage(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const goToPage = (page: number) => {
    filters.current.page = page;
    return doApiCall();
  };

  const filterCharacters = (name: string) => {
    if (!name) {
      filters.current.name = undefined;
      return goToPage(defaultPage);
    }

    filters.current.name = name;
    filters.current.page = undefined;
    return doApiCall();
  };

  useEffect(() => {
    if (errorOnChangePage) {
      Router.push('/error');
    }
  }, [errorOnChangePage]);

  return {
    data,
    loading,
    errorOnChangePage,
    amountOfPages,
    currentPage,
    goToPage,
    filterCharacters,
  };
};

export default useCharactersList;
