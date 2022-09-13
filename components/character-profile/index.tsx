import Image from "next/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Movie } from "@mui/icons-material";
import { ICharacter } from "../../entities";
import styles from "./styles.module.scss";

const Episodes = ({ episodes }: { episodes: { name: string; episode: string }[] }) => (
  <div className={styles.episodes}>
    <h5 className={styles.episodes_title}>Episodes</h5>
    <List className={styles.episodes_list}>
      {episodes &&
        episodes.map((ep) => (
          <ListItem alignItems="center" key={ep.name}>
            <ListItemIcon>
              <Movie />
            </ListItemIcon>
            <ListItemText secondary={ep.name} primary={ep.episode} />
          </ListItem>
        ))}
    </List>
  </div>
);

const TextGroup = ({ label, text }: { label: string; text: string }) => (
  <div className={styles.group}>
    <h5 className={styles.group_title}>{label}</h5>
    <p className={styles.group_value}>{text}</p>
  </div>
);

const CharacterProfile = ({ character }: { character: ICharacter }) => (
  <article className={styles.profile}>
    <div className={styles.header}>
      <div className={styles.image_container}>
        <Image height="280" width="280" src={character.image} alt={character.name} />
      </div>
      <h3 className={styles.title}>{character.name}</h3>
    </div>
    <div className={styles.body}>
      <div className={styles.texts}>
        <TextGroup label="Species" text={character.species} />
        <TextGroup label="Gender" text={character.gender} />
        <TextGroup label="Origin" text={character.origin.name} />
        <TextGroup label="Location" text={character.location.name} />
        <TextGroup label="Status" text={character.status} />
      </div>
      <Episodes episodes={character.episode} />
    </div>
  </article>
);

export default CharacterProfile;
