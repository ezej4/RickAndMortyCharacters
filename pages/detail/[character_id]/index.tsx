import { Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import CharacterProfile from "../../../components/character-profile";
import { ICharacter } from "../../../entities";
import * as charactersService from "../../../services/characters";
import styles from "./styles.module.scss";

export async function getServerSideProps({ query }) {
  const { character_id } = query;
  let result: {
    character: ICharacter | null;
    error: any;
  } = {
    character: null,
    error: null,
  };

  try {
    const data = await charactersService.getCharacter(character_id);
    result.character = data;
  } catch (error) {
    result.error = error;
  }

  return {
    props: result,
  };
}

const Detail = ({ character }: { character: ICharacter }) => {
  const router = useRouter();

  const goBack = () => {
    return router.back();
  };

  return (
    <main className={styles.detail}>
      <Container className={styles.container}>
        <ArrowBack onClick={goBack} fontSize="large" className={styles.back_arrow}/>
        <CharacterProfile character={character} />
      </Container>
    </main>
  );
};

export default Detail;
