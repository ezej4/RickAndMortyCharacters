import Head from "next/head";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import CharacterProfile from "../../../components/character-profile";
import { ICharacter } from "../../../entities";
import * as charactersService from "../../../services/characters";
import styles from "./styles.module.scss";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }: { params: any }) {
  const { character_id } = params;

  try {
    const data = await charactersService.getCharacter(character_id);

    return { props: { character: data } };
  } catch (error) {
    console.log("Detail page error", error);

    return {
      redirect: {
        permanent: false,
        destination: "/error",
      },
      props: {},
    };
  }
}

const Detail = ({ character }: { character: ICharacter }) => {
  const router = useRouter();

  const goBack = () => {
    return router.back();
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rick and Morty Character finder</title>
      </Head>
      <main className={styles.detail}>
        <Container className={styles.container}>
          <ArrowBack onClick={goBack} fontSize="large" className={styles.back_arrow} />
          <CharacterProfile character={character} />
        </Container>
      </main>
    </>
  );
};

export default Detail;
