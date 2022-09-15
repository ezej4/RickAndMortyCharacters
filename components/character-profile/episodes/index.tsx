import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Movie } from '@mui/icons-material';

const Episodes = ({
  episodes,
  styles,
}: {
  episodes: { name: string; episode: string }[];
  styles: any;
}) => (
  <div className={styles.episodes}>
    <h5 className={styles.episodes_title}>Episodes</h5>
    <List className={styles.episodes_list}>
      {episodes &&
        episodes.map((ep) => (
          <ListItem alignItems='center' key={ep.name}>
            <ListItemIcon>
              <Movie />
            </ListItemIcon>
            <ListItemText secondary={ep.name} primary={ep.episode} />
          </ListItem>
        ))}
    </List>
  </div>
);

export default Episodes;
