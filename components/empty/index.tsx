import Image from 'next/image';
import styles from './styles.module.scss';
import configs from '../../configs';

const { emptyImage } = configs;

const Empty = ({ title }: { title: string }) => (
  <section className={styles.empty}>
    <h3 className={styles.empty__title}>{title}</h3>
    <Image src={emptyImage} layout='fill' objectFit='scale-down' alt='Rick' />
  </section>
);

export default Empty;
