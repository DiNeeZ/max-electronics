import Link from 'next/link';
import styles from './sidebanner.module.scss';

const Sidebanner = () => {
  return (
    <aside className={styles.sidebanner}>
      <div className={styles.top}>
        <h3 className={styles.title}>Listen in Brilliant Color via Bluetooth</h3>
        <div className={styles.price}>
          <span className={styles.text}>Starting at</span>
          <span className={styles.nums}>$34.99</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link className={styles.button} href='/'>
          Start Buying
        </Link>
        <div className={styles.note}>* limited time offer *</div>
      </div>
    </aside>
  );
};

export default Sidebanner;
