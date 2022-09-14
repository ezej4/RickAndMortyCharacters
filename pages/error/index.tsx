import Image from "next/image";
import styles from "./styles.module.scss";
import configs from "../../configs";
const { errorPageImage } = configs;

const ErrorPage = () => (
  <section className={styles.error}>
    <div className={styles.texts}>
      <h1 className={styles.title}>Ops, Something went wrong</h1>
      <p className={styles.desc}>Try to refresh the page, or feel free to contact us</p>
    </div>
  </section>
);

export default ErrorPage;
