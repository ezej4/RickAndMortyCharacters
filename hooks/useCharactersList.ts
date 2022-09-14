import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import { ICharacterList, IFilters } from "../entities";
import * as charactersService from "../services/characters";
import configs from "../configs";
const { defaultPage } = configs;

const useCharactersList = (initialData: ICharacterList) => {
  const [data, setData] = useState<ICharacterList>(initialData);
  const [loading, setLoading] = useState(false);
  const [errorOnChangePage, setErrorOnChangePage] = useState(null);
  const [amountOfPages, setAmountOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const filters = useRef<IFilters>({ page: defaultPage });

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

  // useEffect(() => {
  //   if (!data) {
  //     doApiCall();
  //   }
  // }, []);

  useEffect(() => {
    if (errorOnChangePage) {
      Router.push("/error");
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
