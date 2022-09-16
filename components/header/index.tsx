import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import configs from '../../configs';
const { logoIcon } = configs;

const Header = ({ children }: { children?: ReactNode }) => (
  <header className={styles.header}>
    <div className={styles.header__logo}>
      <Image src={logoIcon} alt='Logo' layout='fill' objectFit='scale-down' />
    </div>
    {children}
  </header>
);

export default Header;
