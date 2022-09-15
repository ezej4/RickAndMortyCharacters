import Image from 'next/image';
import { ICharacter } from '../../entities';
import styles from './styles.module.scss';
import TextGroup from './text-group';
import Episodes from './episodes';

const CharacterProfile = ({ character }: { character: ICharacter }) => (
  <article className={styles.profile}>
    <div className={styles.header}>
      <div className={styles.image_container}>
        <Image height='280' width='280' src={character.image} alt={character.name} />
      </div>
      <h3 className={styles.title}>{character.name}</h3>
    </div>
    <div className={styles.body}>
      <div className={styles.texts}>
        <TextGroup label='Species' text={character.species} styles={styles} />
        <TextGroup label='Gender' text={character.gender} styles={styles} />
        <TextGroup label='Origin' text={character.origin.name} styles={styles} />
        <TextGroup label='Location' text={character.location.name} styles={styles} />
        <TextGroup label='Status' text={character.status} styles={styles} />
      </div>
      <Episodes episodes={character.episode} styles={styles} />
    </div>
  </article>
);

export default CharacterProfile;
