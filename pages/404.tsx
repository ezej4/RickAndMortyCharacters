import styles from './404.module.scss';

const Page404 = () => (
  <section className={styles.error}>
    <div className={styles.error__texts}>
      <h1 className={styles.error__title}>Ops, Page not found</h1>
      <p className={styles.error__desc}>The page you requested could not be found</p>
    </div>
  </section>
);

export default Page404;
