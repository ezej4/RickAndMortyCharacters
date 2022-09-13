import CardMedia from "@mui/material/CardMedia";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { CardActionArea, CardActions, CardContent } from "@mui/material";
import { ISummarizedCharacter } from "../../entities";
import styles from "./styles.module.scss";

const CharacterCard = ({ character }: { character: ISummarizedCharacter }) => {
  return (
    <CardActionArea className={styles.card} href={`/detail/${character.id}`}>
      <CardMedia
        component="img"
        height="180"
        src={character.image}
        alt={character.name}
        loading="lazy"
      />
      <CardContent>
        <ImageListItemBar title={character.name} />
      </CardContent>
    </CardActionArea>
  );
};

export default CharacterCard;
