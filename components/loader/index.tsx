import { CircularProgress } from '@mui/material';
import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
