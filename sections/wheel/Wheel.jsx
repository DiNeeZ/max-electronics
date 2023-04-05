import Link from 'next/link';

import Badge from '@/components/badge/Badge';
import Countdown from '@/components/countdown/Countdown';
import styles from './wheel.module.scss';
import WheelGallery from '@/components/wheel-gallery/WheelGallery';

const Wheel = () => {
  return (
    <section className={styles.wheel}>
      <div className={styles.container}>
        <div className={styles.slider}>
          <WheelGallery />
        </div>
        <div className={styles.content}>
          <Badge light>Thunder D9 decor</Badge>
          <h2 className={styles.title}>Gaming Streeing Wheel PC</h2>
          <p className={styles.price}>
            <span className={styles.current}>$1199.00</span>
            <span className={styles.old}>$1999.00</span>
          </p>
          <div className={styles.countdown}>
            <span className={styles.countdownTitle}>Hurry Up! Offer ends in:</span>
            <Countdown hoursLeft={5} />
          </div>
          <Link className={styles.button} href='/'>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Wheel;
