import Head from 'next/head';
import { Pagination, Container } from '@mui/material';
import { CharacterList, Loader, FilterByName, Empty, Header } from '../components';
import { ICharacterList } from '../entities';
import * as charactersService from '../services/characters';
import useCharactersList from '../hooks/useCharactersList';
import styles from './styles.module.scss';

export async function getStaticProps() {
  try {
    const data = await charactersService.getCharactersFirstPage();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log('error has append', error);

    return {
      redirect: {
        permanent: true,
        destination: '/error',
      },
    };
  }
}

const List = ({ data }: { data: ICharacterList }) => {
  const {
    data: dataCharacters,
    loading,
    amountOfPages,
    currentPage,
    goToPage,
    filterCharacters,
  } = useCharactersList(data);

  const emptyResult = dataCharacters && dataCharacters.results.length === 0;
  const showLoader = loading;
  const showData = dataCharacters && !loading;
  const showEmptyState = !loading && emptyResult;
  const showPagination = !emptyResult;

  const handlePageChange = (e: any, pageNumber: number) => {
    goToPage(pageNumber);
  };
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Rick and Morty Character finder</title>
      </Head>
      <div className={styles.page__filter} />
      <main className={styles.page}>
        <Header>
          <FilterByName filterCharacters={filterCharacters} />
        </Header>
        <section className={styles.list}>
          <Container className={styles.list__container}>
            {showLoader && <Loader />}
            {showEmptyState && <Empty title='No Results' />}
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
                    className={styles.list__pagination}
                  />
                )}
              </>
            )}
          </Container>
        </section>
      </main>
    </>
  );
};

export default List;
