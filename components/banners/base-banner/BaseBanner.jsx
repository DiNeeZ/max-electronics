import styles from './base-banner.module.scss';

const BaseBanner = () => {
  return (
    <div className={styles.baseBanner}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Shop and save big on hottest tablets</h3>
        <p className={styles.price}>
          <span className={styles.text}>Starting at</span>
          <span className={styles.num}>
            $<span className={styles.large}>79</span>.99
          </span>
        </p>
      </div>
    </div>
  );
};

export default BaseBanner;
