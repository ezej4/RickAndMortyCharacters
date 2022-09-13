import ImageListItem from "@mui/material/ImageListItem";
import { ISummarizedCharacter } from "../../entities";
import CharacterCard from "../character-card";
import styles from "./styles.module.scss";

const CharacterList = ({ characters }: { characters: ISummarizedCharacter[] }) => {
  return (
    <section>
      <ul className={styles.list}>
        {characters.length > 0 &&
          characters.map((character) => (
            <ImageListItem key={character.id}>
              <CharacterCard character={character} />
            </ImageListItem>
          ))}
      </ul>
    </section>
  );
};

export default CharacterList;
