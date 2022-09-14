import { Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import CharacterProfile from "../../../components/character-profile";
import { ICharacter } from "../../../entities";
import * as charactersService from "../../../services/characters";
import styles from "./styles.module.scss";

export async function getServerSideProps({ query }: { query: any }) {
  const { character_id } = query;

  try {
    const data = await charactersService.getCharacter(character_id);

    return { props: { character: data } };
  } catch (error) {
    console.log("Detail page error", error.response && error.response.status);

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
    <main className={styles.detail}>
      <Container className={styles.container}>
        <ArrowBack onClick={goBack} fontSize="large" className={styles.back_arrow} />
        <CharacterProfile character={character} />
      </Container>
    </main>
  );
};

export default Detail;
