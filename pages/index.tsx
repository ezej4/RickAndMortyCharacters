import Head from "next/head";
import { Pagination, Container } from "@mui/material";
import CharacterList from "../components/character-list";
import Loader from "../components/loader";
import FilterByName from "../components/filter-by-name";
import { ICharacterList } from "../entities";
import * as charactersService from "../services/characters";
import useCharactersList from "../hooks/useCharactersList";
import styles from "./styles.module.scss";
import Empty from "../components/empty";

export async function getServerSideProps() {
  let result: {
    data: ICharacterList | [];
    error: any;
  } = {
    data: [],
    error: null,
  };

  console.time("response")
  try {
    const data = await charactersService.getCharactersFirstPage();
    result.data = data;
    console.timeEnd("response")
  } catch (error) {
    result.error = error;
  }

  return {
    props: result,
  };
}

const List = ({ data, error }: { data: ICharacterList; error: any }) => {
  const {
    data: dataCharacters,
    loading,
    amountOfPages,
    currentPage,
    goToPage,
    filterCharacters,
  } = useCharactersList(data, error);

  const emptyResult = dataCharacters.results.length === 0;
  const showLoader = loading;
  const showData = !loading;
  const showEmptyState = !loading && emptyResult;
  const showPagination = !emptyResult;

  const handlePageChange = (e: any, pageNumber: number) => {
    goToPage(pageNumber);
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
      </Head>
      <main className={styles.list}>
        <Container className={styles.container}>
          <h2 className={styles.title}>Characters</h2>
          <FilterByName filterCharacters={filterCharacters} />
          {showLoader && <Loader />}
          {showEmptyState && <Empty title="No Results" />}
          {showData && (
            <>
              <CharacterList characters={dataCharacters.results} />
              {showPagination && (
                <Pagination
                  count={amountOfPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  showFirstButton
                  showLastButton
                  className={styles.pagination}
                />
              )}
            </>
          )}
        </Container>
      </main>
    </>
  );
};

export default List;
