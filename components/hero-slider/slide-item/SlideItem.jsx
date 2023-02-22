import Link from 'next/link';
import Image from 'next/image';
import { Jost } from '@next/font/google';
import styles from './slide-item.module.scss';

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

const SlideItem = ({ slide }) => {
  return (
    <div className={styles.slide + ' ' + jost.className}>
      <Image
        className={styles.image}
        src={slide.bgUrl}
        alt='slide'
        aria-hidden={true}
        width={1000}
        height={750}
      />
      <div className={styles.content}>
        <span className={styles.badge}>Weekend Discount</span>
        <div className={styles.heading}>
          <h3>Feel - good Shopping</h3>
          <span>Shop what</span>
        </div>
        <p className={styles.price}>$339.99</p>
        <Link className={styles.btn} href='/'>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default SlideItem;
