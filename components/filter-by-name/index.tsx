import Box from '@mui/material/Box';
import { Search, Delete } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';
import useDelayedInput from '../../hooks/useDelayedSearch';

const FilterByName = ({ filterCharacters }: { filterCharacters: (name: string) => {} }) => {
  const { value, handleTextChange, isTyping, resetText } = useDelayedInput(500, filterCharacters);

  return (
    <Box className={styles.filter_container}>
      <TextField
        className={styles.input}
        variant='standard'
        id='input-with-sx'
        data-testid='input-text'
        name="input-text"
        value={value}
        onChange={handleTextChange}
      />
      {isTyping ? (
        <Delete
          className={styles.delete_icon}
          data-testid='delete-icon'
          sx={{ color: 'action.active', mr: 1, my: 0.5 }}
          onClick={resetText}
        />
      ) : (
        <Search data-testid='search-icon' sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      )}
    </Box>
  );
};
export default FilterByName;
