import styles from './styles.module.scss';

const ErrorPage = () => (
  <section className={styles.error}>
    <div className={styles.texts}>
      <h1 className={styles.title}>Ops, Something went wrong</h1>
      <p className={styles.desc}>Feel free to contact us if the problem continues</p>
    </div>
  </section>
);

export default ErrorPage;
