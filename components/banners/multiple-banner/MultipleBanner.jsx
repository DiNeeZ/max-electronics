import { Rubik } from '@next/font/google';

import { multipleBanner } from '@/data';
import Link from 'next/link';
import styles from './banner.module.scss';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400']
});

const BannerItem = ({ item }) => (
  <div
    style={{
      backgroundColor: item.backgroundColor,
      backgroundImage: `url(${item.backgroundImage})`
    }}
    className={`${styles.item}`}>
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.subtitle}>{item.subtitle}</span>
      </h3>
      <p className={styles.price}>${item.price}</p>
      <Link href={item.url} className={`${styles.button} ${rubik.className}`}>
        Buy Now
      </Link>
    </div>
  </div>
);

const MultipleBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          {multipleBanner.map((item) => {
            return <BannerItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MultipleBanner;
