/* eslint-disable @typescript-eslint/naming-convention */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { CharacterProfile } from '../../../components';
import { ICharacter } from '../../../entities';
import * as charactersService from '../../../services/characters';
import styles from './styles.module.scss';

export const getStaticPaths = async () => {
  /* Here we will generate all the static pages for the detail pages,
    This only could be done only because the id from the page is the same that the page index.
    https://nextjs.org/docs/basic-features/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
  */
  const amountOfCharacters = await charactersService.getAmountOfCharacters();
  const paths = Array.from(Array(amountOfCharacters).keys())
    // remove the 0 position
    .slice(1)
    .map((post) => ({
      params: { character_id: post.toString() },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps({ params }: { params: { character_id: number } }) {
  const { character_id } = params;

  try {
    const data = await charactersService.getCharacter(character_id);

    return { props: { character: data } };
  } catch (error) {
    console.log('Detail page error', error);

    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
      props: {},
    };
  }
}

const Detail = ({ character }: { character: ICharacter }) => {
  const router = useRouter();

  const goBack = () => {
    return router.push('/');
  };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Rick and Morty Character finder</title>
      </Head>
      <main className={styles.detail}>
        <Container className={styles.container}>
          <ArrowBack onClick={goBack} fontSize='large' className={styles.back_arrow} />
          <CharacterProfile character={character} />
        </Container>
      </main>
    </>
  );
};

export default Detail;
