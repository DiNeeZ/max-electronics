import { TbTruckDelivery, TbCurrencyDollar, TbUser, TbMapPin } from 'react-icons/tb';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { CiUser, CiHeart } from 'react-icons/ci';
import { BsHandbag } from 'react-icons/bs';
import Logo from '@/components/logo/Logo';
import Navbar from '@/components/navbar/Navbar';
import { Jost, Inter, Roboto } from '@next/font/google';
import styles from './header.module.scss';
import Support from '@/components/support/Support';
import Searchbar from '@/components/serchbar/Searchbar';
import Link from 'next/link';

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
          <Support />
        </div>
      </div>
      <div className={`${jost.className} ${styles.bottom}`}>
        <div className={styles.container}>
          <div className={styles.bottomLeft}>
            <div className={styles.iconWrapper}>
              <IoMegaphoneOutline className={styles.bottomIcon} size={25} />
            </div>
            <div className={styles.heading}>
              <h1 className={styles.title}>Shop & Store - Electronics & Digital</h1>
              <p className={styles.subtitle}>Responsive PrestaShop</p>
            </div>
          </div>
          <Searchbar />
          <ul className={styles.list}>
            <li>
              <Link href='/'>
                <CiUser size={18} />
              </Link>
            </li>
            <li>
              <button>
                <CiHeart size={18} />
              </button>
            </li>
            <li>
              <Link href='/' className={styles.cart}>
                <BsHandbag size={18} />
                <span className={`${styles.badge} ${jost.className}`}>2</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
