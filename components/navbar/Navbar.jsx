import Link from 'next/link';
import { Jost } from '@next/font/google';
import styles from './navbar.module.scss';

const jost = Jost({
  subsets: ['latin'],
  weight: ['500']
});

const Navbar = () => {
  return (
    <nav className={`${jost.className} ${styles.navbar}`}>
      <ul className={styles.list}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>About Us</Link>
        </li>
        <li>
          <Link href='/'>Blog</Link>
        </li>
        <li>
          <Link href='/'>Pages</Link>
        </li>
        <li>
          <Link href='/'>Features</Link>
        </li>
        <li>
          <Link href='/'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
