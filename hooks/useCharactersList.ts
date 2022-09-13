import { useState, useEffect, useRef } from "react";
import { ICharacterList, IFilters } from "../entities";
import * as charactersService from "../services/characters";
import configs from "../configs";
const { defaultPage } = configs;

const useCharactersList = (initialData: ICharacterList, error: any) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [errorOnChangePage, setErrorOnChangePage] = useState(null);
  const [amountOfPages, setAmountOfPages] = useState(initialData.info.pages);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const filters = useRef<IFilters>({ page: defaultPage });

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

  const doApiCall = () => {
    setLoading(true);
    return charactersService
      .getCharacters(filters.current)
      .then((response) => {
        setData(response);
        const currentPage = filters.current.page || defaultPage;
        setCurrentPage(currentPage);
        setAmountOfPages(response.info.pages || 0);
      })
      .catch((error) => {
        setErrorOnChangePage(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (error || errorOnChangePage) {
      console.log("error", error);
    }
  }, [error, errorOnChangePage]);

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