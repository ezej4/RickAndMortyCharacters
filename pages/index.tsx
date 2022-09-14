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
  try {
    const data = await charactersService.getCharactersFirstPage();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log("error has append", error.response.status);
    return {
      redirect: {
        permanent: true,
        destination: "/error",
      },
    };
  }
}

const List = ({ data }: { data: ICharacterList; error: any }) => {
  const {
    data: dataCharacters,
    loading,
    amountOfPages,
    currentPage,
    goToPage,
    filterCharacters,
  } = useCharactersList(data);

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
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rick and Morty Character finder</title>
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
