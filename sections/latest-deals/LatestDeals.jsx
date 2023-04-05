import Link from 'next/link';
import { Inter } from '@next/font/google';

import Countdown from '@/components/countdown/Countdown';
import ProductCard from '@/components/product-card/ProductCard';
import styles from './latest-deals.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400']
});

const LatestDeals = ({ products }) => {
  return (
    <section className={styles.latestDeals}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Latest Deals</h2>
          <div className={styles.right}>
            <Countdown hoursLeft={24} variant='small' />
            <Link href='/' className={`${styles.button} ${inter.className}`}>
              View All
            </Link>
          </div>
        </div>
        <ul className={styles.products}>
          {products.slice(0, 5).map((product) => (
            <li key={`latest-${product.id}`} className={styles.product}>
              <ProductCard product={product} sold />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LatestDeals;
