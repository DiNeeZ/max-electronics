import Link from 'next/link';
import { Jost, Inter } from '@next/font/google';
import logoIcon from '@/public/icons/logo-icon.svg';
import styles from './logo.module.scss';
import Image from 'next/image';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700', '900']
});
const inter = Inter({
  subsets: ['latin']
});

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      <Image src={logoIcon} width={32} height={39} alt='logo' />
      <div className={styles.text}>
        <div className={`${jost.className} ${styles.title}`}>
          Cart
          <span>Max.</span>
        </div>
        <div className={`${inter.className} ${styles.subtitle}`}>MULTIPURPOSE ECOMMERCE</div>
      </div>
    </Link>
  );
};

export default Logo;
