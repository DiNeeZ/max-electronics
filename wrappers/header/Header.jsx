import { TbTruckDelivery, TbCurrencyDollar, TbUser, TbMapPin } from 'react-icons/tb';
import Logo from '@/components/logo/Logo';
import Navbar from '@/components/navbar/Navbar';
import { Jost, Inter, Roboto } from '@next/font/google';
import styles from './header.module.scss';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});
const inter = Inter({
  subsets: ['latin']
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

const Header = () => {
  return (
    <header>
      <div className={`${inter.className} ${styles.top}`}>
        <div className={styles.container}>
          <ul>
            <li>
              <TbMapPin className={styles.icon} size={15} />
              <a href='#'>Store Locator</a>
            </li>
            <li>
              <TbTruckDelivery className={styles.icon} size={15} />
              <a href='#'>Track Your Order</a>
            </li>
            <li>
              <TbCurrencyDollar className={styles.icon} size={15} />
              <a href='#'>Dollar (US)</a>
            </li>
            <li>
              <TbUser className={styles.icon} size={15} />
              <div className={styles.auth}>
                <a href='#'>Register</a>
                <span>or</span>
                <a href='#'>Sign in</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Logo />
          <Navbar />
          <div>Contacts</div>
        </div>
      </div>
      <div className='bottom'></div>
    </header>
  );
};

export default Header;
