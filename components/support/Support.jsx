import Link from 'next/link';
import { BsHeadset } from 'react-icons/bs';
import { Jost } from '@next/font/google';
import styles from './support.module.scss';

const jost = Jost({
  subsets: ['latin'],
  weight: ['500', '700']
});

const Support = () => {
  return (
    <div className={`${jost.className} ${styles.support}`}>
      <div className={styles.iconContainer}>
        <BsHeadset className={styles.icon} />
      </div>
      <div className={styles.links}>
        <Link href='tel:+800856800604'>
          <b>Support:</b> <span>(+800) 856 800 604</span>
        </Link>
        <Link href='/'>
          <b>E-mail:</b> <span>info@cartmax.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Support;
